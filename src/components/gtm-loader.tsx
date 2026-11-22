'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

const KEY = 'versuspeak-consent-v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choice = { version: 1; analytics: boolean; savedAt: number };
function readChoice(): Choice | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || 'null');
    return c?.version === 1 && typeof c.analytics === 'boolean' && Number.isFinite(c.savedAt) && c.savedAt <= Date.now() && Date.now() - c.savedAt < MAX_AGE ? c : null;
  } catch { return null; }
}
function clearAnalyticsCookies() {
  const domains = ['', location.hostname, `.${location.hostname}`, '.versuspeak.com'];
  document.cookie.split(';').forEach(cookie => {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga($|_)|_gid$|_gat($|_))/.test(name)) return;
    domains.forEach(domain => { document.cookie = `${name}=;Max-Age=0;path=/;${domain ? `domain=${domain};` : ''}SameSite=Lax`; });
  });
}
function signal(analytics: boolean) {
  const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || function (...args: unknown[]) { w.dataLayer!.push(args); };
  w.gtag('consent', 'update', { analytics_storage: analytics ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
  w.dataLayer.push({ event: 'consent_choice', analytics_consent: analytics ? 'granted' : 'denied', advertising_consent: 'denied' });
}

/** Basic consent mode: never mount GTM until analytics has been explicitly allowed. */
export function GtmLoader({ id, enabled }: { id: string; enabled: boolean }) {
  const [ready, setReady] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [selection, setSelection] = useState(false);
  const [storageFailed, setStorageFailed] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const loaded = useRef(false);
  useEffect(() => {
    const c = readChoice();
    const allowed = c?.analytics === true;
    if (allowed) signal(true);
    else clearAnalyticsCookies();
    loaded.current = allowed && enabled;
    const initialize = window.setTimeout(() => {
      setAnalytics(allowed); setSelection(allowed); setVisible(!c); setReady(true);
    }, 0);
    function open() {
      previousFocus.current = document.activeElement as HTMLElement;
      setSelection(readChoice()?.analytics === true); setSettings(true); setVisible(true);
      setTimeout(() => panel.current?.focus(), 0);
    }
    function sync(e: StorageEvent) {
      if (e.key === KEY) location.reload();
    }
    window.addEventListener('versuspeak:cookie-settings', open);
    window.addEventListener('storage', sync);
    return () => { window.clearTimeout(initialize); window.removeEventListener('versuspeak:cookie-settings', open); window.removeEventListener('storage', sync); };
  }, [enabled]);
  function save(allow: boolean) {
    const choice: Choice = { version: 1, analytics: allow, savedAt: Date.now() };
    try { localStorage.setItem(KEY, JSON.stringify(choice)); } catch { setStorageFailed(true); }
    signal(allow);
    if (!allow) clearAnalyticsCookies();
    setAnalytics(allow); setSelection(allow); setVisible(false); setSettings(false);
    previousFocus.current?.focus();
    if (!allow && loaded.current) { location.reload(); return; }
    if (allow && enabled) loaded.current = true;
  }
  return <>
    {ready && analytics && enabled && <GoogleTagManager gtmId={id} />}
    {ready && visible && <section ref={panel} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="consent-heading" aria-describedby="consent-description" className="fixed inset-x-0 bottom-0 z-[100] max-h-[90dvh] overflow-y-auto border-t border-stone-300 bg-white p-5 shadow-[0_-8px_32px_rgba(0,0,0,0.14)] outline-none sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-4"><h2 id="consent-heading" className="font-serif text-2xl font-bold text-stone-950">Your privacy choices</h2>{settings && <button type="button" className="rounded border border-stone-400 px-3 py-1.5 text-sm text-stone-800 focus-visible:outline-2 focus-visible:outline-orange-700" onClick={() => { const c = readChoice(); if (c) { setVisible(false); previousFocus.current?.focus(); } setSettings(false); }} aria-label="Close cookie preferences">Close</button>}</div>
        <p id="consent-description" className="mt-2 max-w-4xl text-sm leading-6 text-stone-700">We use necessary storage to remember your choice. With your permission, Google Analytics helps us understand how our guides are used. Analytics stays off until you allow it. Advertising is not active.</p>
        <p className="mt-2 text-sm leading-6 text-stone-600">You can refuse analytics and keep reading, or change your choice any time in <span className="font-semibold">Cookie preferences</span> in the footer. <a href="/privacy" className="text-orange-800 underline underline-offset-2">Privacy Policy</a></p>
        {settings && <div className="mt-4 grid gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:grid-cols-2">
          <div><p className="font-semibold text-stone-900">Necessary <span className="text-xs font-normal text-stone-600">Always on</span></p><p className="mt-1 text-sm leading-6 text-stone-600">Site delivery and security, plus your consent choice stored on this device for up to 180 days.</p></div>
          <label className="flex cursor-pointer items-start gap-3"><input type="checkbox" checked={selection} onChange={e => setSelection(e.target.checked)} className="mt-1 h-5 w-5 accent-orange-700"/><span><span className="font-semibold text-stone-900">Analytics</span><span className="mt-1 block text-sm leading-6 text-stone-600">Google Analytics via Google Tag Manager. Page visits and interactions, such as scrolls and link clicks. Optional.</span></span></label>
          <p className="text-sm text-stone-600 sm:col-span-2"><span className="font-semibold">Advertising:</span> off. No advertising consent is requested by this banner.</p>
        </div>}
        <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
          <button type="button" onClick={() => save(false)} className="min-h-11 rounded-lg border border-stone-500 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-700">Reject optional</button>
          {settings ? <button type="button" onClick={() => save(selection)} className="min-h-11 rounded-lg border border-stone-500 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-700">Save preferences</button> : <button type="button" onClick={() => setSettings(true)} className="min-h-11 rounded-lg border border-stone-500 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-700">Manage preferences</button>}
          <button type="button" onClick={() => save(true)} className="min-h-11 rounded-lg border border-stone-500 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-700">Allow analytics</button>
        </div>
      </div>
    </section>}
    {storageFailed && !visible && <p role="status" className="fixed bottom-3 left-3 z-[99] max-w-sm rounded-lg border bg-white p-3 text-sm shadow">Your browser could not save this choice. We will ask again on your next visit.</p>}
    <noscript><div className="border-t bg-stone-50 px-4 py-3 text-sm text-stone-700">JavaScript is off. Optional analytics and advertising are not loaded.</div></noscript>
  </>;
}

export function CookiePreferencesButton() {
  return <button type="button" className="text-left text-sm underline underline-offset-4 hover:text-orange-400" onClick={() => window.dispatchEvent(new Event('versuspeak:cookie-settings'))}>Cookie preferences</button>;
}
