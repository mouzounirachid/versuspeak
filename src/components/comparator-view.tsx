'use client';

import { useMemo, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ALL_PRODUCTS, CATEGORIES, productsByCategory } from '@/lib/data';
import type { Product } from '@/lib/types';
import { AffiliateCta, ProductThumb, ScoreCircle } from './atoms';
import { PromoBanner, ReadNextPromo } from './promo-banners';

type SortKey = 'score-desc' | 'price-asc' | 'price-desc' | 'rank-asc';

const SORT_LABELS: Record<SortKey, string> = {
  'score-desc': 'Score: high to low',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  'rank-asc': 'Our ranking',
};

const PRICE_CAPS = [0, 1000, 1500, 2500, 3000];

function sortProducts(list: Product[], sort: SortKey): Product[] {
  const copy = [...list];
  switch (sort) {
    case 'score-desc':
      return copy.sort((a, b) => b.overall - a.overall);
    case 'price-asc':
      return copy.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return copy.sort((a, b) => b.price - a.price);
    case 'rank-asc':
      return copy.sort((a, b) => a.rank - b.rank);
  }
}

function ComparatorPanel({ categoryId }: { categoryId: string }) {
  const base = productsByCategory(categoryId);
  const brands = useMemo(() => Array.from(new Set(base.map((p) => p.brand))), [base]);
  const criteria = CATEGORIES.find((c) => c.id === categoryId)?.criteria ?? [];

  const [brand, setBrand] = useState('all');
  const [sort, setSort] = useState<SortKey>('score-desc');
  const [minScore, setMinScore] = useState(7);
  const [priceCap, setPriceCap] = useState(0);

  const filtered = useMemo(() => {
    let list = base;
    if (brand !== 'all') list = list.filter((p) => p.brand === brand);
    list = list.filter((p) => p.overall >= minScore);
    if (priceCap > 0) list = list.filter((p) => p.price <= priceCap);
    return sortProducts(list, sort);
  }, [base, brand, sort, minScore, priceCap]);

  const reset = () => {
    setBrand('all');
    setSort('score-desc');
    setMinScore(7);
    setPriceCap(0);
  };

  return (
    <div>
      <div className="grid gap-4 rounded-lg border border-stone-200 bg-stone-50 p-5 md:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor={`brand-${categoryId}`} className="text-xs font-bold uppercase tracking-wider text-stone-600">
            Brand
          </Label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger id={`brand-${categoryId}`} className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All brands</SelectItem>
              {brands.map((b) => (
                <SelectItem key={b} value={b}>
                  {b}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor={`sort-${categoryId}`} className="text-xs font-bold uppercase tracking-wider text-stone-600">
            Sort by
          </Label>
          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger id={`sort-${categoryId}`} className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                <SelectItem key={k} value={k}>
                  {SORT_LABELS[k]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-xs font-bold uppercase tracking-wider text-stone-600">Min. score</Label>
            <span className="text-sm font-bold text-orange-700">{minScore.toFixed(1)}</span>
          </div>
          <Slider
            value={[minScore]}
            onValueChange={(v) => setMinScore(v[0])}
            min={6}
            max={10}
            step={0.1}
            aria-label="Minimum overall score"
            className="mt-3"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`price-${categoryId}`} className="text-xs font-bold uppercase tracking-wider text-stone-600">
            Max price
          </Label>
          <Select value={String(priceCap)} onValueChange={(v) => setPriceCap(Number(v))}>
            <SelectTrigger id={`price-${categoryId}`} className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any price</SelectItem>
              {PRICE_CAPS.slice(1).map((c) => (
                <SelectItem key={c} value={String(c)}>
                  Under ${c.toLocaleString('en-US')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-stone-600" aria-live="polite">
          <strong className="font-bold text-stone-900">{filtered.length}</strong> of {base.length} models match
        </p>
        <Button variant="outline" size="sm" onClick={reset} className="gap-2">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset filters
        </Button>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-stone-200">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <caption className="sr-only">Filtered product comparison</caption>
          <thead>
            <tr className="bg-stone-100 text-left">
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-600">
                Model
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-600">
                Price
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-600">
                Score
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-600">
                {criteria[0] ?? 'Top metric'}
              </th>
              <th scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-stone-600">
                Buy
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t border-stone-200 bg-white transition-colors hover:bg-stone-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <ProductThumb product={p} className="h-12 w-12 shrink-0" />
                    <div className="min-w-0">
                      <div className="font-semibold text-stone-900">{p.name}</div>
                      <div className="text-xs text-stone-500">
                        {p.brand} {p.model}
                        {p.badge ? ` · ${p.badge.label}` : ''}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 font-semibold text-stone-900">${p.price.toLocaleString('en-US')}</td>
                <td className="px-4 py-3">
                  <ScoreCircle score={p.overall} />
                </td>
                <td className="px-4 py-3 text-stone-700">
                  {p.subScores[0]?.score.toFixed(1)} / 10
                </td>
                <td className="px-4 py-3">
                  <AffiliateCta product={p} compact />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-stone-500">
                  No models match these filters — loosen the score or price settings.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ComparatorView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">Interactive comparison</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-stone-900">Compare All {ALL_PRODUCTS.length} Tested Models</h1>
        <p className="mt-5 leading-relaxed text-stone-700">
          Filter by brand, price, and minimum test score. Every number comes from our standardized lab runs —
          re-sort any column view to build your own shortlist before you spend.
        </p>
      </header>

      <PromoBanner variant="deals" />

      <Tabs defaultValue="refrigerators" className="mt-4">
        <TabsList className="h-auto flex-wrap justify-start gap-1 bg-stone-100 p-1">
          {CATEGORIES.map((c) => (
            <TabsTrigger key={c.id} value={c.id} className="data-[state=active]:bg-white data-[state=active]:text-orange-700">
              {c.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {CATEGORIES.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-6">
            <ComparatorPanel categoryId={c.id} />
          </TabsContent>
        ))}
      </Tabs>

      <ReadNextPromo slot={2} />
    </div>
  );
}
