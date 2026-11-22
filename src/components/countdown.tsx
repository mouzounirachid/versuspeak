'use client';
import { useEffect, useState } from 'react';
const START = Date.parse('2026-11-27T00:00:00-05:00');
const END = Date.parse('2026-11-28T00:00:00-05:00');
export function CalendarCountdown() {
 const [now, setNow] = useState<number | null>(null);
 useEffect(() => {
  const first = setTimeout(() => setNow(Date.now()), 0);
  const timer = setInterval(() => setNow(Date.now()), 1000);
  return () => { clearTimeout(first); clearInterval(timer); };
 }, []);
 const remaining = now === null ? null : Math.max(0, Math.floor((START - now) / 1000));
 const values = remaining === null ? ['--', '--', '--', '--'] : [Math.floor(remaining / 86400), Math.floor(remaining % 86400 / 3600), Math.floor(remaining % 3600 / 60), remaining % 60].map(x => String(x).padStart(2, '0'));
 return <aside aria-label="Black Friday calendar" className="border-b border-orange-200 bg-orange-50 px-4 py-4 text-stone-900"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-widest text-orange-800">Calendar, not an offer deadline</p><p className="mt-1 font-serif text-xl font-bold">Black Friday · Friday, November 27, 2026</p><p className="mt-1 text-xs leading-5 text-stone-600">Countdown to midnight New York time (EST, UTC-05). Retailer offers have their own dates and terms.</p></div>{now !== null && now >= START ? <p className="rounded-lg border border-orange-200 bg-white px-4 py-3 text-sm font-semibold">{now < END ? 'Black Friday is today in New York.' : 'Black Friday 2026 has passed.'}</p> : <div className="flex gap-2" role="timer" aria-label="Time until Black Friday, New York midnight" aria-live="off">{['days', 'hours', 'min', 'sec'].map((label, i) => <div key={label} className="min-w-14 rounded-lg bg-stone-950 px-3 py-2 text-center text-white"><span className="block font-serif text-2xl font-bold tabular-nums">{values[i]}</span><span className="mt-1 block text-[10px] uppercase text-stone-300">{label}</span></div>)}</div>}</div></aside>;
}
