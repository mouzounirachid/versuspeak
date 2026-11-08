'use client';

import { ArrowRight, Award, Flame, FlaskConical, RefreshCw, ShieldCheck, ShoppingBag, Sparkles, Tag } from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES, DEALS, TRUST_STATS, getProduct, productsByCategory, SITE } from '@/lib/data';
import { ARTICLES } from '@/lib/articles';
import type { View } from '@/lib/types';
import { AffiliateCta, BadgeChip, DisclosureNote, ProductThumb, ScoreCircle } from './atoms';
import { ComparisonTable } from './comparison-table';
import { CountdownBlocks, CountdownPill } from './countdown';
import { PromoBanner, ReadNextPromo } from './promo-banners';

const STAT_ICONS = [FlaskConical, ShoppingBag, Award, ShieldCheck];

export function Hero({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <section className="relative overflow-hidden border-b border-stone-200/70 bg-stone-50">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 85% 10%, rgba(234,88,12,0.16), transparent 60%), radial-gradient(ellipse 45% 50% at 5% 90%, rgba(251,191,36,0.14), transparent 55%), radial-gradient(ellipse 40% 40% at 60% 100%, rgba(234,88,12,0.06), transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(120,113,108,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,113,108,0.08) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-orange-700 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-600" />
          </span>
          Independent lab testing · No sponsored picks
        </p>

        <h1 className="mt-6 max-w-3xl font-serif text-4xl font-bold leading-[1.08] tracking-tight text-stone-900 md:text-6xl">
          The Best Appliances &amp; TVs,{' '}
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Tested and Ranked.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          Our engineers put refrigerators, washing machines, dryers, dishwashers, and TVs through hundreds of
          hours of standardized lab tests — so you buy the right one the first time. Every unit purchased at
          retail, every score backed by data.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onNavigate('refrigerators')}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-orange-600/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-600/40 active:translate-y-0"
          >
            See 2026 Top Picks
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </button>
          <button
            onClick={() => onNavigate('methodology')}
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white/90 px-8 py-4 text-sm font-bold uppercase tracking-wide text-stone-800 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-stone-900 hover:bg-white"
          >
            <FlaskConical className="h-4 w-4 text-orange-600" aria-hidden /> How We Test
          </button>
        </div>

        {/* Black Friday urgency strip */}
        <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl bg-stone-950 px-5 py-4 shadow-2xl shadow-stone-950/20 md:px-7">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-600/40">
            <Flame className="h-5 w-5" aria-hidden />
          </span>
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">Black Friday 2026 · verified pricing live</p>
            <p className="mt-0.5 font-serif text-lg font-bold text-white">
              {DEALS.length} tested picks already discounted — up to 52% off
            </p>
          </div>
          <div className="hidden md:block">
            <span />
          </div>
          <button
            onClick={() => onNavigate('deals')}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-5 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 md:hidden"
          >
            View deals <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 border-t border-stone-200/80 pt-8 md:grid-cols-4">
          {TRUST_STATS.map((s, i) => {
            const Icon = STAT_ICONS[i % STAT_ICONS.length];
            return (
              <div key={s.label} className="flex items-center gap-3.5 rounded-2xl border border-stone-200/70 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-inset ring-orange-100">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <dd className="font-serif text-2xl font-bold leading-none text-stone-900">{s.value}</dd>
                  <dt className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-500">{s.label}</dt>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

function SectionHeading({
  id,
  kicker,
  title,
  sub,
  icon: Icon,
}: {
  id: string;
  kicker: string;
  title: string;
  sub?: string;
  icon?: 'sparkles' | 'tag' | 'none';
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
          {Icon === 'sparkles' && <Sparkles className="h-3.5 w-3.5" aria-hidden />}
          {Icon === 'tag' && <Tag className="h-3.5 w-3.5" aria-hidden />}
          {kicker}
        </p>
        <h2 id={id} className="mt-2 font-serif text-3xl font-bold tracking-tight text-stone-900">
          {title}
        </h2>
        {sub && <p className="mt-1.5 text-sm text-stone-500">{sub}</p>}
      </div>
    </div>
  );
}

export function HomeView({ onNavigate }: { onNavigate: (v: View) => void }) {
  const topPicks = CATEGORIES.map((c) => ({ category: c, product: productsByCategory(c.id)[0] }));
  const dealsTeaser = DEALS.slice(0, 3);

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 py-4">
          <DisclosureNote onView={() => onNavigate('disclosure')} />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 ring-1 ring-inset ring-green-200">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden />
            Prices verified {SITE.updated}
          </span>
        </div>

        <PromoBanner variant="deals" />

        {/* Top picks — podium */}
        <section aria-labelledby="top-picks" className="py-6">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading id="top-picks" kicker="Editor's choices" title="This Week's Top Picks" icon="sparkles" />
            <button
              onClick={() => onNavigate('compare')}
              className="hidden items-center gap-1 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md sm:inline-flex"
            >
              Compare all {ALL_PRODUCTS.length} models <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {topPicks.map(({ category, product }, i) => (
              <article
                key={product.id}
                className={`group relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  i === 0
                    ? 'border-orange-300 shadow-lg shadow-orange-600/10'
                    : 'border-stone-200/80 shadow-sm hover:shadow-lg'
                }`}
              >
                {i === 0 && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md shadow-orange-600/30">
                    <Award className="h-3 w-3" aria-hidden /> Overall winner
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-stone-400">{category.name}</span>
                  {product.badge && <BadgeChip badge={product.badge} />}
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-stone-900">{product.name}</h3>
                <ProductThumb product={product} className="mt-4 h-44 w-full" />
                <div className="mt-4 flex items-center gap-4">
                  <ScoreCircle score={product.overall} size="lg" />
                  <div>
                    <div className="font-serif text-2xl font-bold text-stone-900">
                      ${product.price.toLocaleString('en-US')}
                    </div>
                    {product.listPrice && product.listPrice > product.price && (
                      <div className="text-sm text-stone-400 line-through">
                        ${product.listPrice.toLocaleString('en-US')}
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">{product.verdict}</p>
                <div className="mt-5 flex flex-col gap-2.5 border-t border-stone-100 pt-4">
                  <AffiliateCta product={product} compact />
                  <button
                    onClick={() => onNavigate(category.id)}
                    className="inline-flex items-center gap-1 text-sm font-bold text-orange-700 transition-colors hover:text-orange-800"
                  >
                    Full ranking <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Category rankings */}
        {CATEGORIES.map((category, idx) => {
          const products = productsByCategory(category.id);
          return (
            <section key={category.id} aria-labelledby={`home-${category.id}`} className="py-6">
              {idx > 0 && <ReadNextPromo slot={idx - 1} />}
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHeading
                  id={`home-${category.id}`}
                  kicker={category.kicker}
                  title={`Best ${category.name} of 2026`}
                  sub={`Updated ${category.updated} · ${products.length} models tested`}
                />
                <button
                  onClick={() => onNavigate(category.id)}
                  className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
                >
                  Read the full guide <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
              <div className="mt-6">
                <ComparisonTable products={products} compact />
              </div>
            </section>
          );
        })}

        {/* Deals teaser */}
        <section aria-labelledby="deals-teaser" className="py-6">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              id="deals-teaser"
              kicker="Black Friday 2026 · price drops we verified"
              title="Black Friday Deals Are Live"
              icon="tag"
            />
            <div className="flex items-center gap-3">
              <span className="hidden md:inline-flex"><span /></span>
              <button
                onClick={() => onNavigate('deals')}
                className="inline-flex items-center gap-1 rounded-full bg-stone-950 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                All deals <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dealsTeaser.map((deal) => {
              const p = getProduct(deal.productId);
              if (!p) return null;
              const pct = Math.round(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100);
              return (
                <article
                  key={deal.productId}
                  className="group rounded-2xl border border-orange-200/70 bg-gradient-to-b from-orange-50/70 to-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-stone-500">{p.brand}</span>
                    <span className="rounded-full bg-gradient-to-b from-red-500 to-red-600 px-2.5 py-1 text-white shadow-sm shadow-red-600/30">
                      -{pct}%
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <ProductThumb product={p} className="h-20 w-20 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-base font-bold leading-snug text-stone-900">{p.name}</h3>
                      <div className="mt-1 flex flex-wrap items-baseline gap-2">
                        <span className="font-serif text-xl font-bold text-stone-900">${deal.newPrice.toLocaleString('en-US')}</span>
                        <span className="text-sm text-stone-400 line-through">${deal.oldPrice.toLocaleString('en-US')}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700">
                    <Flame className="h-3.5 w-3.5" aria-hidden /> ends in {deal.expiresInDays} days · at {deal.retailer}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <PromoBanner variant="compare" />

        {/* Guides teaser */}
        <section aria-labelledby="guides-teaser" className="py-6">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading id="guides-teaser" kicker="Guides & analysis" title="Brand Face-Offs, Price Data & Reports" />
            <button
              onClick={() => onNavigate('articles')}
              className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md"
            >
              All guides <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <a
                key={a.slug}
                href={`#articles/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-700 ring-1 ring-inset ring-orange-100">
                    {a.kicker}
                  </p>
                  <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-stone-900 group-hover:text-orange-800">
                    {a.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-700">
                    Read the article{' '}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Methodology teaser */}
        <section aria-labelledby="methodology-teaser" className="pb-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 p-8 text-stone-200 shadow-2xl md:p-12">
            <span
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{ background: 'radial-gradient(ellipse 50% 60% at 90% 20%, rgba(234,88,12,0.25), transparent 60%)' }}
            />
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                <RefreshCw className="h-3.5 w-3.5" aria-hidden /> Why trust VersusPeak
              </p>
              <h2 id="methodology-teaser" className="mt-3 max-w-2xl font-serif text-3xl font-bold text-white">
                We buy every product we test. No free samples, no sponsored rankings.
              </h2>
              <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-stone-300 md:grid-cols-2">
                {[
                  'Every unit purchased at retail with our own money',
                  '400+ hours of metered, standardized lab testing',
                  'Public scoring weights you can audit and re-sort',
                  'Quarterly re-tests — rankings move when the data moves',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600/20" aria-hidden>
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('methodology')}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Read our methodology
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
