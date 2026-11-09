'use client';

import { ArrowRight, ExternalLink, Flame, ShieldCheck } from 'lucide-react';
import { DEALS, categoryById, getProduct } from '@/lib/data';
import { retailerUrl } from '@/lib/links';
import type { Retailer } from '@/lib/types';

import { ProductThumb } from './atoms';
import { CountdownBlocks } from './countdown';
import { PromoBanner, ReadNextPromo } from './promo-banners';

/**
 * The deal card displays `deal.retailer` — the CTA must open that exact
 * retailer's search, not the product's first listed retailer.
 */
const DEAL_RETAILER: Record<string, Retailer> = {
  Amazon: 'amazon',
  'Best Buy': 'bestbuy',
  'Home Depot': 'homedepot',
  'Lowe’s': 'lowes',
  "Lowe's": 'lowes',
};

export function DealsView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950/60 px-6 py-8 text-white shadow-2xl md:px-10 md:py-10">
        <span
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{ background: 'radial-gradient(ellipse 55% 70% at 90% 30%, rgba(234,88,12,0.35), transparent 60%)' }}
        />
        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Black Friday 2026 · verified early pricing
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Black Friday Deals Worth Buying
            </h1>
            <p className="mt-4 leading-relaxed text-stone-300">
              The major retailer events are live: Home Depot&apos;s Black Friday Appliance Event runs Nov 4 – Dec 2,
              Lowe&apos;s runs four straight weeks of deals, Best Buy is up to 50% off select major appliances, and
              Amazon has already cut flagship TVs up to 48%. The cuts below apply only to products we have tested
              and recommended — never on junk we would not buy ourselves.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-orange-300 ring-1 ring-inset ring-white/15">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Prices verified November 9, 2026 · re-checked twice daily
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <CountdownBlocks dark />
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              Until Black Friday · Nov 27
            </p>
          </div>
        </div>
      </section>

      <PromoBanner variant="compare" />

      <div className="grid gap-6 md:grid-cols-2">
        {DEALS.map((deal) => {
          const p = getProduct(deal.productId);
          if (!p) return null;
          const cat = categoryById(p.category);
          const pct = Math.round(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100);
          const save = deal.oldPrice - deal.newPrice;
          const link = retailerUrl(DEAL_RETAILER[deal.retailer] ?? p.retailers[0] ?? 'amazon', p);
          return (
            <article
              key={deal.productId}
              className="group relative flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <ProductThumb product={p} className="h-24 w-24 shrink-0" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <span className="rounded-full bg-gradient-to-b from-red-500 to-red-600 px-2.5 py-1 text-white shadow-sm shadow-red-600/30">
                    -{pct}%
                  </span>
                  {deal.label && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-stone-950 px-2.5 py-1 text-orange-400">
                      <Flame className="h-3 w-3" aria-hidden /> {deal.label}
                    </span>
                  )}
                  <span className="text-stone-400">{cat?.name}</span>
                </div>
                <h2 className="mt-2 font-serif text-lg font-bold leading-snug text-stone-900">{p.name}</h2>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-stone-900">
                    ${deal.newPrice.toLocaleString('en-US')}
                  </span>
                  <span className="text-sm text-stone-400 line-through">${deal.oldPrice.toLocaleString('en-US')}</span>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-bold text-green-700 ring-1 ring-inset ring-green-200">
                    save ${save.toLocaleString('en-US')}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-semibold text-orange-700">
                  at {deal.retailer} · ends in {deal.expiresInDays} days
                </p>
                <p className="mt-2 text-sm leading-snug text-stone-600">{deal.note}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get this deal <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl border border-orange-300/70 bg-orange-50 p-5 text-xs leading-relaxed text-orange-950">
        <Flame className="h-4 w-4 shrink-0 text-orange-600" aria-hidden />
        <p>
          <strong className="font-semibold">Black Friday timing:</strong> early pricing is active now at Home
          Depot (Nov 4 – Dec 2), Lowe&apos;s (four weeks of deals) and Best Buy. Expect additional flash rounds on
          Black Friday itself (Nov 27) and Cyber Monday (Nov 30) — stock on entry-level models usually sells out
          first. We re-verify prices at least twice a day; the checkout price is what counts.
        </p>
      </div>

      <ReadNextPromo slot={1} />
      <PromoBanner variant="guide" slug="best-time-to-buy-appliances" />

      <a
        href="#compare"
        className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200/80 bg-white px-6 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-lg"
      >
        <span className="font-serif text-lg font-bold text-stone-900 md:text-xl">
          Compare the discounted models side by side before you commit
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-xl bg-stone-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform group-hover:-translate-y-0.5">
          Open the comparator <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </a>
    </div>
  );
}
