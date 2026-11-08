'use client';

import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

/**
 * Black Friday 2026 starts November 27, 2026 (retailer events already live).
 * The countdown targets Black Friday day itself; after it passes we fall back
 * to a static "live now" label so the UI never shows a negative counter.
 */
const BLACK_FRIDAY_ISO = '2026-11-27T00:00:00-05:00';

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Remaining {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000) / 60_000),
    seconds: Math.floor((ms % 60_000) / 1_000),
  };
}

function useCountdown() {
  const [target] = useState(() => new Date(BLACK_FRIDAY_ISO).getTime());
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    // First tick AFTER hydration has fully settled (setTimeout, not rAF):
    // a mid-hydration setState would re-render the tree and shift Radix useId values.
    const t0 = window.setTimeout(() => setRemaining(diff(target)), 80);
    const id = window.setInterval(() => setRemaining(diff(target)), 1000);
    return () => {
      window.clearTimeout(t0);
      window.clearInterval(id);
    };
  }, [target]);

  return remaining;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Compact inline pill: "20d 04h 12m" — renders a placeholder until mounted (no hydration mismatch).
 * High-visibility treatment: bright amber chip + dark-red digits. Amber (vs. the site's orange
 * accent) was chosen so the pill stands out on the orange/red top banner, on dark stone banners,
 * and on light pages alike (~7:1 contrast for the digits on the chip).
 */
export function CountdownPill({ dark = false }: { dark?: boolean }) {
  const r = useCountdown();
  if (!r) {
    return (
      <span className={`inline-flex h-7 items-center rounded-full px-3 text-xs font-bold tabular-nums ${dark ? 'bg-amber-300/50 text-red-900/50' : 'bg-amber-200/70 text-amber-800/70'}`}>
        —d —h —m
      </span>
    );
  }
  const expired = r.days === 0 && r.hours === 0 && r.minutes === 0 && r.seconds === 0;
  if (expired) {
    return (
      <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-red-600 px-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
        <Flame className="h-3.5 w-3.5" aria-hidden /> Live now
      </span>
    );
  }
  return (
    <span
      className={`inline-flex h-7 items-center rounded-full bg-amber-300 px-3 text-xs font-bold tabular-nums text-red-900 shadow-sm ${dark ? 'ring-1 ring-white/40' : 'ring-1 ring-red-900/15'}`}
      aria-label={`Black Friday starts in ${r.days} days ${r.hours} hours`}
    >
      {r.days}d {pad(r.hours)}h {pad(r.minutes)}m
    </span>
  );
}

/** Big segmented countdown for hero sections. */
export function CountdownBlocks({ dark = false }: { dark?: boolean }) {
  const r = useCountdown();
  const cells: { value: string; label: string }[] = r
    ? [
        { value: String(r.days), label: 'days' },
        { value: pad(r.hours), label: 'hrs' },
        { value: pad(r.minutes), label: 'min' },
        { value: pad(r.seconds), label: 'sec' },
      ]
    : [
        { value: '—', label: 'days' },
        { value: '—', label: 'hrs' },
        { value: '—', label: 'min' },
        { value: '—', label: 'sec' },
      ];

  return (
    <div className="flex items-center gap-2" role="timer" aria-label="Countdown to Black Friday">
      {cells.map((c) => (
        <div
          key={c.label}
          className={`flex min-w-[3.25rem] flex-col items-center rounded-xl px-2.5 py-2 ${
            dark
              ? 'bg-amber-300 shadow-lg shadow-amber-500/25 ring-1 ring-amber-200/70'
              : 'bg-stone-950 ring-1 ring-amber-500/30'
          }`}
        >
          <span className={`font-serif text-xl font-bold leading-none tabular-nums md:text-2xl ${dark ? 'text-red-900' : 'text-amber-300'}`}>{c.value}</span>
          <span className={`mt-1 text-[9px] font-bold uppercase tracking-widest ${dark ? 'text-red-800/90' : 'text-stone-400'}`}>{c.label}</span>
        </div>
      ))}
    </div>
  );
}
