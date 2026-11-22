'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { ARTICLES, getArticle } from '@/lib/articles';
import { PromoBanner, ReadNextPromo } from './promo-banners';

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent" aria-hidden>
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function ArticlesView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-orange-700 ring-1 ring-inset ring-orange-100">
          Guides &amp; analysis
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-stone-900">Beyond the Rankings</h1>
        <p className="mt-5 leading-relaxed text-stone-700">
          Short, decision-ready guides for buyers who are close to checkout: brand face-offs with a verdict, timing
          advice backed by 14 months of real price data, and reliability picks that tell you exactly which model to
          buy. Every claim traces back to the same standard as our rankings — we buy it, we meter it, we publish the
          numbers.
        </p>
      </header>

      <PromoBanner variant="deals" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((a) => (
          <a
            key={a.slug}
            href={`/articles/${a.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
          >
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
              <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-stone-900 group-hover:text-orange-800">
                {a.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">{a.excerpt}</p>
              <div className="mt-5 flex items-center justify-between text-xs font-semibold text-stone-500">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {a.readMinutes} min read
                </span>
                <span>Updated {a.updated}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-700">
                Read the article{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </a>
        ))}
      </div>

      <PromoBanner variant="compare" />
    </div>
  );
}

export function ArticleView({ slug }: { slug: string }) {
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-stone-900">Article not found</h1>
        <p className="mt-3 text-stone-600">The guide you are looking for does not exist.</p>
        <a
          href="/articles"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-orange-600/25 transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> All guides
        </a>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <nav aria-label="Breadcrumb">
          <a
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-500 transition-colors hover:text-orange-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All guides
          </a>
        </nav>

        <header className="mt-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-orange-700 ring-1 ring-inset ring-orange-100">
            {article.kicker}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900">
            {article.title}
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-stone-500">
            Updated {article.updated} · {article.readMinutes} min read · By VersusPeak Lab
          </p>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">{article.excerpt}</p>
          <img
            src={article.image}
            alt={article.title}
            className="mt-8 aspect-[16/9] w-full rounded-2xl border border-stone-200/80 object-cover shadow-sm"
          />
        </header>

        <div className="mt-8 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50/80 to-amber-50/40 p-6 shadow-sm">
          <h2 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" aria-hidden /> The short answer
          </h2>
          <p className="mt-3 leading-relaxed text-stone-800">{article.tldr}</p>
        </div>

        <ReadNextPromo slot={0} excludeSlug={article.slug} />

        {article.sections.map((s) => (
          <section key={s.heading} className="py-2">
            <h2 className="font-serif text-2xl font-bold text-stone-900">{s.heading}</h2>
            <p className="mt-4 leading-relaxed text-stone-700">{s.body}</p>
            {s.list && (
              <ul className="mt-4 space-y-2.5">
                {s.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-orange-500 to-orange-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-10 rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950/70 p-8 text-stone-200 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-white">Put the data to work</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {article.relatedLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-inset ring-white/15 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:ring-orange-600"
              >
                {l.label} <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-stone-500">
          When you buy through links on VersusPeak, we may earn a commission. Our recommendations are based on
          purchased-at-retail testing and are never sponsored — see our full affiliate disclosure and testing
          methodology for details.
        </p>
      </article>
    </>
  );
}
