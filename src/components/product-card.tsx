import type { Product } from '@/lib/types';
import { RETAILER_LABELS, retailerPriceViews, retailerUrl } from '@/lib/links';
import { SITE } from '@/lib/data';
import { AffiliateCta, BadgeChip, DisclosureNote, ProductThumb, ProsCons, ScoreBar, ScoreCircle } from './atoms';

/**
 * "Compare prices across retailers" strip (option A): one chip per linked
 * retailer, cheapest one filled green with a floating "Best price" tag.
 * Hidden when fewer than two priced retailers — nothing to compare.
 */
function RetailerPriceStrip({ product }: { product: Product }) {
  const views = retailerPriceViews(product);
  if (!views.length) return null;
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500">
          Compare prices across retailers
        </h4>
        <span className="text-xs text-stone-400">Checked {SITE.priceChecked}</span>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-3">
        {views.map((v) => (
          <a
            key={v.retailer}
            href={retailerUrl(v.retailer, product)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className={`relative flex min-w-[132px] flex-col gap-0.5 rounded-xl px-4 pb-2.5 pt-2 transition-transform hover:-translate-y-0.5 ${
              v.best
                ? 'bg-green-600 shadow-md shadow-green-600/25 ring-1 ring-green-700'
                : 'border border-stone-300 bg-white hover:border-stone-900'
            }`}
          >
            {v.best && (
              <span className="absolute -top-2.5 left-3 rounded-full bg-green-700 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white ring-2 ring-white">
                Best price
              </span>
            )}
            <span
              className={`text-[10.5px] font-bold uppercase tracking-wider ${
                v.best ? 'text-green-50' : 'text-stone-500'
              }`}
            >
              {RETAILER_LABELS[v.retailer]}
            </span>
            <span className={`text-lg font-bold tracking-tight ${v.best ? 'text-white' : 'text-stone-900'}`}>
              ${v.price.toLocaleString('en-US')}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className="rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-lg"
      aria-labelledby={`review-${product.id}`}
    >
      <div className="p-6 pb-0 md:p-8 md:pb-0">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl font-serif text-2xl font-bold leading-none shadow-sm ${
                product.rank === 1
                  ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-stone-100 text-stone-500'
              }`}
              aria-hidden
            >
              {product.rank}
            </span>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {product.badge && <BadgeChip badge={product.badge} />}
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                  {product.brand} · Tested {product.reviewedAt}
                </span>
              </div>
              <h3 id={`review-${product.id}`} className="font-serif text-2xl font-bold leading-snug text-stone-900">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-stone-500">
                Model {product.model} · {product.specs[0]?.value}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <ScoreCircle score={product.overall} size="lg" />
            <div className="text-right">
              <span className="font-serif text-2xl font-bold text-stone-900">
                ${product.price.toLocaleString('en-US')}
              </span>
              {product.listPrice && product.listPrice > product.price && (
                <span className="ml-2 text-sm text-stone-400 line-through">
                  ${product.listPrice.toLocaleString('en-US')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 p-6 pt-0 md:p-8 md:pt-0 lg:grid-cols-[240px_1fr]">
        <div className="space-y-4">
          <ProductThumb product={product} className="h-44 w-full" />
          <dl className="space-y-1.5 rounded-xl bg-stone-50 p-4 text-sm ring-1 ring-inset ring-stone-100">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between gap-3">
                <dt className="text-stone-500">{s.label}</dt>
                <dd className="text-right font-medium text-stone-800">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-stone-500">Test scores</h4>
            <div className="space-y-2">
              {product.subScores.map((s) => (
                <ScoreBar key={s.label} label={s.label} score={s.score} />
              ))}
            </div>
          </div>

          <ProsCons pros={product.pros} cons={product.cons} />

          <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50/60 p-4">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-700">Our verdict</h4>
            <p className="leading-relaxed text-stone-700">{product.verdict}</p>
          </div>

          <div className="flex flex-col gap-4 border-t border-stone-100 pt-5">
            <RetailerPriceStrip product={product} />
            <AffiliateCta product={product} />
            <DisclosureNote />
          </div>
        </div>
      </div>
    </article>
  );
}
