'use client';

import { useState } from 'react';
import { Check, ChevronRight, ExternalLink, X } from 'lucide-react';
import type { Product, ProductBadge } from '@/lib/types';
import { RETAILER_LABELS, ctaRetailers, retailerUrl } from '@/lib/links';

/* ---------------------------------- badges --------------------------------- */

const BADGE_CLASSES: Record<string, string> = {
  top: 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-sm shadow-orange-600/30',
  value: 'bg-gradient-to-b from-green-600 to-green-700 text-white shadow-sm shadow-green-700/30',
  premium: 'bg-gradient-to-b from-stone-800 to-stone-950 text-white shadow-sm',
  smart: 'bg-gradient-to-b from-teal-600 to-teal-700 text-white shadow-sm shadow-teal-700/30',
  great: 'border border-stone-900 text-stone-900 bg-white',
};

export function BadgeChip({ badge, className = '' }: { badge: ProductBadge; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${BADGE_CLASSES[badge.style]} ${className}`}
    >
      {badge.label}
    </span>
  );
}

/* --------------------------------- scores ---------------------------------- */

export function ScoreCircle({ score, size = 'md' }: { score: number; size?: 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'h-16 w-16 text-2xl' : 'h-12 w-12 text-lg';
  const tier =
    score >= 9
      ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-md shadow-orange-500/30 ring-2 ring-orange-100'
      : score >= 8
        ? 'bg-gradient-to-br from-stone-800 to-stone-950 shadow-sm'
        : 'bg-stone-500';
  return (
    <div
      aria-label={`Overall score ${score} out of 10`}
      className={`${dim} ${tier} flex shrink-0 flex-col items-center justify-center rounded-full text-white`}
    >
      <span className="font-serif font-bold leading-none">{score.toFixed(1)}</span>
      <span className="text-[9px] leading-tight opacity-80">/ 10</span>
    </div>
  );
}

export function ScoreBar({ label, score }: { label: string; score: number }) {
  const strong = score >= 9;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-40 shrink-0 text-stone-600">{label}</span>
      <div className="h-2 w-full min-w-16 overflow-hidden rounded-full bg-stone-200/80" role="presentation">
        <div
          className={`h-full rounded-full ${strong ? 'bg-gradient-to-r from-orange-500 to-amber-500' : 'bg-gradient-to-r from-orange-500 to-orange-600'}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-semibold text-stone-800">{score.toFixed(1)}</span>
    </div>
  );
}

/* -------------------------------- affiliate -------------------------------- */

export function AffiliateCta({ product, compact = false }: { product: Product; compact?: boolean }) {
  const [primary, ...rest] = ctaRetailers(product);
  if (!primary) return null;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={retailerUrl(primary, product)}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-600/35 active:translate-y-0 ${
          compact ? 'px-4 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
        }`}
      >
        Check Price at {RETAILER_LABELS[primary]}
        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
      {rest.map((r) => (
        <a
          key={r}
          href={retailerUrl(r, product)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`inline-flex items-center rounded-xl border border-stone-300 bg-white font-semibold uppercase tracking-wide text-stone-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-stone-900 hover:bg-stone-50 ${
            compact ? 'px-4 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
          }`}
        >
          {RETAILER_LABELS[r]}
        </a>
      ))}
    </div>
  );
}

export function DisclosureNote({ onView }: { onView?: () => void }) {
  return (
    <p className="text-xs text-stone-500">
      When you buy through our links, VersusPeak may earn a commission.{' '}
      {onView ? (
        <button onClick={onView} className="font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800">
          Learn more
        </button>
      ) : (
        <span>
          Learn more in our{' '}
          <a
            href="/disclosure"
            className="font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800"
          >
            affiliate disclosure
          </a>
          .
        </span>
      )}
    </p>
  );
}

/* ---------------------------------- pros / cons ----------------------------- */

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ul className="space-y-2 rounded-xl bg-green-50/60 p-4 ring-1 ring-inset ring-green-100">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-stone-700">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-green-600/10" aria-hidden>
              <Check className="h-3.5 w-3.5 text-green-700" />
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <ul className="space-y-2 rounded-xl bg-red-50/50 p-4 ring-1 ring-inset ring-red-100">
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-stone-700">
            <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-red-600/10" aria-hidden>
              <X className="h-3.5 w-3.5 text-red-600" />
            </span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------- product thumb ------------------------------ */

/**
 * Real product photo (served from /public/images/products). Falls back to the
 * brand-initials placeholder if the image fails to load.
 */
export function ProductThumb({ product, className = '' }: { product: Product; className?: string }) {
  const [failed, setFailed] = useState(false);
  const initials = product.brand
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (failed) {
    return (
      <div
        aria-hidden
        className={`flex items-center justify-center rounded-xl border border-stone-200/80 bg-gradient-to-br from-stone-50 via-white to-orange-50/50 ${className}`}
      >
        <span className="font-serif text-3xl font-bold tracking-widest text-stone-300">{initials}</span>
        <ChevronRight className="sr-only" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-stone-200/80 bg-white ${className}`}
    >
      <img
        src={`/images/products/${product.id}.jpg`}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-contain p-1.5"
      />
    </div>
  );
}
