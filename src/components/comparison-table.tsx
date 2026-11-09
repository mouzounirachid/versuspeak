import type { Product } from '@/lib/types';
import { RETAILER_LABELS, bestRetailerPrice } from '@/lib/links';
import { AffiliateCta, BadgeChip, ProductThumb, ScoreCircle } from './atoms';

function keySpecLabel(category: string): string {
  switch (category) {
    case 'refrigerators':
      return 'Capacity';
    case 'washers':
      return 'Capacity';
    case 'dryers':
      return 'Noise';
    case 'dishwashers':
      return 'Noise';
    case 'tvs':
      return 'Screen size';
    default:
      return 'Key spec';
  }
}

export function ComparisonTable({ products, compact = false }: { products: Product[]; compact?: boolean }) {
  const rows = compact ? products.slice(0, 3) : products;
  return (
    <div className="overflow-x-auto rounded-2xl border border-stone-200/80 shadow-sm">
      <table className="w-full min-w-[820px] border-collapse text-sm">
        <caption className="sr-only">Product comparison table</caption>
        <thead>
          <tr className="bg-stone-100/80 text-left">
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Our Pick
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Model
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Price
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Best price
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Score
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              {keySpecLabel(rows[0]?.category ?? '')}
            </th>
            <th scope="col" className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-600">
              Where to buy
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => {
            const best = bestRetailerPrice(p);
            return (
            <tr
              key={p.id}
              className={`border-t border-stone-100 transition-colors ${
                p.rank === 1 ? 'bg-gradient-to-r from-orange-50/90 to-orange-50/30' : 'bg-white hover:bg-stone-50/70'
              }`}
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-serif text-lg font-bold ${
                      p.rank === 1
                        ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-sm shadow-orange-600/30'
                        : 'bg-stone-100 text-stone-500'
                    }`}
                    aria-hidden
                  >
                    {p.rank}
                  </span>
                  {p.badge && <BadgeChip badge={p.badge} />}
                  {p.rank === 1 && (
                    <span className="hidden rounded-full bg-orange-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white lg:inline">
                      Winner
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <ProductThumb product={p} className="h-14 w-14 shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-stone-900">{p.name}</div>
                    <div className="text-xs text-stone-500">
                      {p.brand} {p.model}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="font-semibold text-stone-900">${p.price.toLocaleString('en-US')}</span>
                {p.listPrice && p.listPrice > p.price && (
                  <span className="ml-1.5 text-xs text-stone-400 line-through">
                    ${p.listPrice.toLocaleString('en-US')}
                  </span>
                )}
              </td>
              <td className="px-4 py-4">
                {best ? (
                  <div className="leading-tight">
                    <span className="font-semibold text-green-700">${best.price.toLocaleString('en-US')}</span>
                    <span className="block text-xs text-stone-500">at {RETAILER_LABELS[best.retailer]}</span>
                  </div>
                ) : (
                  <span className="text-stone-300" aria-hidden>
                    —
                  </span>
                )}
              </td>
              <td className="px-4 py-4">
                <ScoreCircle score={p.overall} />
              </td>
              <td className="px-4 py-4 text-stone-700">
                {p.specs.find((s) => keySpecLabel(p.category) === s.label)?.value ?? p.specs[0]?.value}
              </td>
              <td className="px-4 py-4">
                <AffiliateCta product={p} compact />
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
