'use client';

import { ArrowRight, Ban, FlaskConical, ShieldCheck, Wallet } from 'lucide-react';
import { CRITERIA_WEIGHTS, METHODOLOGY_STEPS } from '@/lib/data';
import type { View } from '@/lib/types';
import { PromoBanner, ReadNextPromo } from './promo-banners';

const PROMISES = [
  {
    icon: Ban,
    title: 'No free units',
    body: 'Manufacturers never touch our units. We buy at retail like you, and we return nothing.',
  },
  {
    icon: FlaskConical,
    title: 'Metered, repeatable tests',
    body: 'Stain strips, temperature logs, kilowatt meters, decibel readings — every claim traces to a number.',
  },
  {
    icon: Wallet,
    title: 'Reader-funded only',
    body: 'Our only revenue is commissions from purchases you make through our links and display ads. No sponsored rankings.',
  },
  {
    icon: ShieldCheck,
    title: 'Update-or-annotate policy',
    body: 'When a pick fails a re-test or a rival launches, we change the ranking and mark the date. No zombie recommendations.',
  },
];

export function MethodologyView({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600">Our testing standard</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-stone-900">How VersusPeak Tests Appliances</h1>
        <p className="mt-5 leading-relaxed text-stone-700">
          Most review sites read spec sheets and rewrite press releases. We do the opposite: we buy the machines,
          run standardized lab tests, publish the raw scores, and re-test every quarter. Here is exactly how it
          works — so you can judge our rankings with the same skepticism we apply to manufacturers.
        </p>
      </header>

      <PromoBanner variant="deals" />

      <section aria-labelledby="process" className="py-4">
        <h2 id="process" className="font-serif text-3xl font-bold text-stone-900">The process</h2>
        <ol className="mt-6 max-w-3xl space-y-0">
          {METHODOLOGY_STEPS.map((s) => (
            <li key={s.step} className="relative border-l-2 border-orange-600 pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[18px] flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 font-serif text-base font-bold text-white">
                {s.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-700">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="weights" className="py-4">
        <h2 id="weights" className="font-serif text-3xl font-bold text-stone-900">Scoring weights</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-stone-700">
          Every product earns five category-specific sub-scores plus a weighted overall. These weights are fixed
          across the site — if your priorities differ, the comparator lets you sort by any sub-score instead.
        </p>
        <div className="mt-6 max-w-2xl overflow-hidden rounded-lg border border-stone-200">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">Scoring weight allocation</caption>
            <tbody>
              {CRITERIA_WEIGHTS.map((w) => (
                <tr key={w.label} className="border-t border-stone-200 first:border-t-0">
                  <td className="px-4 py-3 text-stone-700">{w.label}</td>
                  <td className="w-24 px-4 py-3 text-right font-serif text-lg font-bold text-orange-700">{w.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ReadNextPromo slot={1} />

      <section aria-labelledby="promises" className="py-4">
        <h2 id="promises" className="font-serif text-3xl font-bold text-stone-900">What we will not do</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {PROMISES.map((p) => (
            <article key={p.title} className="rounded-lg border border-stone-200 p-6">
              <p.icon className="h-6 w-6 text-orange-600" aria-hidden />
              <h3 className="mt-3 font-serif text-lg font-bold text-stone-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-8 rounded-lg bg-stone-900 p-8 text-stone-200">
        <h2 className="font-serif text-2xl font-bold text-white">Ready to see the results?</h2>
        <p className="mt-2 max-w-xl text-sm text-stone-300">
          The 2026 rankings are live: 40 models across refrigerators, washing machines, dryers, dishwashers, and
          TVs, all scored on the system above.
        </p>
        <button
          onClick={() => onNavigate('refrigerators')}
          className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Browse the rankings <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </button>
      </div>
    </div>
  );
}
