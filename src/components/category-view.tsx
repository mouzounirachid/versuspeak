'use client';

import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { productsByCategory } from '@/lib/data';
import type { Category, View } from '@/lib/types';
import { ComparisonTable } from './comparison-table';
import { ProductCard } from './product-card';
import { PromoBanner, ReadNextPromo } from './promo-banners';

const ARTICLE_FOR_CATEGORY: Record<Category['id'], string> = {
  refrigerators: 'lg-vs-samsung-refrigerators',
  washers: 'appliance-reliability-report-2026',
  dryers: 'appliance-reliability-report-2026',
  dishwashers: 'appliance-reliability-report-2026',
  tvs: 'oled-vs-qled-2026',
};

export function CategoryView({ category, onNavigate }: { category: Category; onNavigate: (v: View) => void }) {
  const products = productsByCategory(category.id);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav aria-label="Breadcrumb">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-500 transition-colors hover:text-orange-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All rankings
        </button>
      </nav>

      <header className="mt-6 max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-orange-700 ring-1 ring-inset ring-orange-100">
          {category.kicker}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900">
          {category.title}
        </h1>
        <p className="mt-3 inline-flex flex-wrap items-center gap-x-2 text-sm font-semibold text-stone-500">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-green-800 ring-1 ring-inset ring-green-200">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" aria-hidden />
            Updated {category.updated}
          </span>
          <span>· {products.length} models tested · Editor: VersusPeak Lab</span>
        </p>
        <p className="mt-6 leading-relaxed text-stone-700">{category.intro}</p>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-1 rounded-2xl border border-stone-200/80 bg-stone-50 p-4 text-xs leading-relaxed text-stone-600">
        <strong className="font-semibold text-stone-800">Our promise:</strong> we buy every unit at retail — no
        manufacturer loans or review samples. When you buy through links on this page, VersusPeak may earn a
        commission, which funds our testing.{' '}
        <button
          onClick={() => onNavigate('disclosure')}
          className="font-semibold text-orange-700 underline underline-offset-2"
        >
          Full disclosure
        </button>
      </div>

      <PromoBanner variant="deals" />

      <section aria-labelledby="glance" className="py-4">
        <h2 id="glance" className="font-serif text-3xl font-bold tracking-tight text-stone-900">
          The best {category.name.toLowerCase()} at a glance
        </h2>
        <div className="mt-6">
          <ComparisonTable products={products} />
        </div>
      </section>

      <ReadNextPromo slot={0} excludeSlug={ARTICLE_FOR_CATEGORY[category.id]} />
      <PromoBanner variant="guide" slug={ARTICLE_FOR_CATEGORY[category.id]} />

      <section aria-labelledby="guide" className="py-4 pt-6">
        <h2 id="guide" className="font-serif text-3xl font-bold tracking-tight text-stone-900">
          What to look for in {category.name.toLowerCase()}
        </h2>
        <div className="mt-6 grid max-w-3xl gap-4">
          {category.guide.map((g, i) => (
            <div key={g.heading} className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 font-serif text-xl font-bold text-stone-900">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                    i === 0
                      ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-sm shadow-orange-600/30'
                      : 'bg-stone-100 text-stone-600'
                  }`}
                  aria-hidden
                >
                  {i + 1}
                </span>
                {g.heading}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-700">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="reviews" className="py-4 pt-10">
        <h2 id="reviews" className="font-serif text-3xl font-bold tracking-tight text-stone-900">
          The full reviews, ranked
        </h2>
        <div className="mt-4 space-y-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="faq" className="py-4 pt-10">
        <h2 id="faq" className="font-serif text-3xl font-bold tracking-tight text-stone-900">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="mt-6">
          {category.faq.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-stone-200">
              <AccordionTrigger className="text-left font-serif text-lg font-bold text-stone-900">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-stone-700">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <PromoBanner variant="compare" />
    </div>
  );
}
