'use client';

import { useState } from 'react';
import { Menu, Tag, Zap } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import type { View } from '@/lib/types';
import { CountdownPill } from './countdown';

export const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'home', label: 'Home' },
  { view: 'refrigerators', label: 'Refrigerators' },
  { view: 'washers', label: 'Washers' },
  { view: 'dryers', label: 'Dryers' },
  { view: 'dishwashers', label: 'Dishwashers' },
  { view: 'tvs', label: 'TVs' },
  { view: 'compare', label: 'Compare' },
  { view: 'deals', label: 'Deals' },
  { view: 'articles', label: 'Guides' },
  { view: 'methodology', label: 'How We Test' },
];

export function SiteHeader({ current, onNavigate }: { current: View; onNavigate: (v: View) => void }) {
  const [open, setOpen] = useState(false);

  const go = (v: View) => {
    onNavigate(v);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <button
        onClick={() => go('deals')}
        className="group flex w-full items-center justify-center gap-2.5 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-[length:200%_100%] px-4 py-3 text-center text-xs font-semibold text-white transition-[background-position] duration-700 hover:bg-right sm:gap-3 sm:text-sm"
        aria-label="Black Friday deals are live — see all deals"
      >
        <Tag className="h-4 w-4 shrink-0 transition-transform group-hover:-rotate-12" aria-hidden />
        <span className="truncate">
          <strong className="font-extrabold uppercase tracking-wider">Black Friday 2026</strong>
          <span className="hidden sm:inline"> — appliance &amp; TV deals are live · </span>
          <span className="sm:hidden"> · </span>
          <strong className="inline-block -translate-y-px rounded-full bg-white px-2 py-0.5 font-extrabold uppercase tracking-wide text-red-700 shadow-sm">up to 48% off</strong>
          <span className="hidden sm:inline"> our tested picks</span>
        </span>
        <span className="hidden items-center gap-2 md:inline-flex">
          <span className="h-1 w-1 rounded-full bg-white/60" aria-hidden />
          <CountdownPill dark />
        </span>
        <Zap className="h-4 w-4 shrink-0" aria-hidden />
      </button>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <button onClick={() => go('home')} className="group flex items-baseline gap-1" aria-label="VersusPeak home">
          <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-stone-700">Versus</span>
          <span className="font-serif text-2xl font-bold tracking-tight text-orange-600">Peak</span>
          <span className="ml-1 hidden rounded-full bg-stone-950 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-orange-400 2xl:inline">
            Lab tested
          </span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.view}
              onClick={() => go(item.view)}
              className={`whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                current === item.view
                  ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/30'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-stone-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go('deals')}
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:shadow-lg xl:inline-flex"
          >
            <Zap className="h-3.5 w-3.5" aria-hidden /> Black Friday Deals
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-300 bg-white shadow-sm transition-colors hover:border-stone-900 xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white p-0">
              <SheetTitle className="border-b border-stone-200 px-5 py-4">
                <span className="font-serif text-xl font-bold text-stone-900">Versus</span>
                <span className="font-serif text-xl font-bold text-orange-600">Peak</span>
              </SheetTitle>
              <nav aria-label="Mobile navigation" className="flex flex-col p-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.view}
                    onClick={() => go(item.view)}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
                      current === item.view ? 'bg-orange-50 text-orange-700' : 'text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => go('deals')}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-orange-600/25"
                >
                  <Zap className="h-4 w-4" aria-hidden /> Black Friday deals
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
