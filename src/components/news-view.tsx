'use client';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { NEWS_SORTED, newsForCategory, NEWS_CHECKED } from '@/lib/news';
import { CATEGORIES } from '@/lib/data';
import type { CategoryId, NewsItem } from '@/lib/types';

function catLabels(n: NewsItem) { return n.categories === 'all' ? 'All categories' : n.categories.map(c => CATEGORIES.find(x => x.id === c)?.name).filter(Boolean).join(' · '); }

export function NewsCard({ n }: { n: NewsItem }) {
 return <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6">
  <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest"><span className="rounded-full bg-orange-100 px-3 py-1 text-orange-800">{n.kind}</span><span className="text-stone-500">{catLabels(n)}</span></div>
  <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">{n.title}</h3>
  <p className="mt-2 text-xs font-semibold text-stone-500">Source date: {n.sourceDate} · Checked {n.checked}</p>
  <p className="mt-4 flex-1 text-sm leading-7 text-stone-700">{n.body}</p>
  {n.action && <p className="mt-3 rounded-lg bg-stone-100 p-3 text-sm leading-6"><strong>What to do:</strong> {n.action}</p>}
  <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-800 underline underline-offset-2" href={n.sourceUrl} target="_blank" rel="noopener noreferrer">{n.sourceTitle} · {n.publisher} <ArrowUpRight className="h-4 w-4"/></a>
 </article>;
}

export function NewsView() {
 return <div className="mx-auto max-w-6xl px-4 py-12">
  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Dated and source-checked</p>
  <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">News worth a buyer&apos;s attention</h1>
  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600">Short, dated notes on recalls, standards and announcements that change a buying decision. Every item links the source we opened and shows the date we checked it ({NEWS_CHECKED}). This is not a live feed: we publish only what we can verify at the source, and a manufacturer announcement is never a test result.</p>
  <div className="mt-8 grid gap-5 md:grid-cols-2">{NEWS_SORTED.map(n => <NewsCard key={n.id} n={n}/>)}</div>
  <aside className="mt-10 rounded-xl border border-orange-200 bg-orange-50 px-5 py-4 text-sm leading-relaxed text-stone-700"><strong>How to use this page.</strong> Recalls describe specific models and serial ranges; check yours at the source before acting. Sale dates are calendar facts, not evidence of a lower price. Product announcements are manufacturer claims until an independent review exists.</aside>
 </div>;
}

export function CategoryNews({ category }: { category: CategoryId }) {
 const items = newsForCategory(category).slice(0, 3);
 if (!items.length) return null;
 const c = CATEGORIES.find(x => x.id === category);
 return <section aria-label={`Latest checks for ${c?.name}`} className="my-8">
  <div className="flex flex-wrap items-baseline justify-between gap-3">
   <h2 className="font-serif text-2xl font-bold">Latest source checks for {c?.name.toLowerCase()}</h2>
   <a href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-orange-800">All news and checks <ArrowRight className="h-4 w-4"/></a>
  </div>
  <p className="mt-2 text-sm text-stone-600">Dated items verified at the linked source. Recalls and announcements are not VersusPeak tests.</p>
  <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(n => <NewsCard key={n.id} n={n}/>)}</div>
 </section>;
}

export function HomeNews() {
 const items = NEWS_SORTED.slice(0, 3);
 return <section className="mt-14">
  <div className="flex flex-wrap items-baseline justify-between gap-3">
   <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Freshness you can audit</p>
   <h2 className="mt-3 font-serif text-3xl font-bold">Latest source checks</h2></div>
   <a href="/news" className="inline-flex items-center gap-2 text-sm font-bold text-orange-800">All news and checks <ArrowRight className="h-4 w-4"/></a>
  </div>
  <div className="mt-6 grid gap-5 md:grid-cols-3">{items.map(n => <NewsCard key={n.id} n={n}/>)}</div>
 </section>;
}
