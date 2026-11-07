'use client';

import { useState } from 'react';
import { ArrowRight, BookOpenText, CheckCircle2, Flame, GitCompareArrows, Mail, Sparkles } from 'lucide-react';
import { ARTICLES, getArticle } from '@/lib/articles';
import { toast } from '@/hooks/use-toast';
import { CountdownPill } from './countdown';

/**
 * Internal promo banners — they replace display-ad placeholders and route
 * visitors to our own deals page, comparator, and editorial articles,
 * keeping every click (and every commission opportunity) on-site.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* -------------------------- leaderboard-style banner ------------------------- */

export function PromoBanner({ variant = 'deals', slug }: { variant?: 'deals' | 'compare' | 'guide'; slug?: string }) {
  if (variant === 'deals') {
    return (
      <a
        href="#deals"
        className="group relative my-8 flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 px-6 py-5 shadow-xl shadow-orange-950/20 transition-all hover:shadow-2xl md:px-8"
      >
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(234,88,12,0.35),transparent_55%)]" aria-hidden />
        <span className="relative flex flex-wrap items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-600/40">
            <Flame className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col gap-1">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Featured — VersusPeak Deals
            </span>
            <span className="font-serif text-lg font-bold leading-snug text-white md:text-xl">
              Black Friday: up to <span className="text-orange-400">52% off</span> our tested picks
            </span>
          </span>
        </span>
        <span className="relative flex items-center gap-3">
          <CountdownPill dark />
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-transform group-hover:-translate-y-0.5">
            See all deals <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
        </span>
      </a>
    );
  }

  if (variant === 'compare') {
    return (
      <a
        href="#compare"
        className="group my-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-gradient-to-r from-stone-50 to-orange-50/60 px-6 py-5 shadow-sm transition-all hover:border-orange-300 hover:shadow-md md:px-8"
      >
        <span className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-950 text-white">
            <GitCompareArrows className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600">Interactive tool</span>
            <span className="font-serif text-lg font-bold leading-snug text-stone-900 md:text-xl">
              Still deciding? Filter all 40 lab-tested models by score, price, and brand
            </span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-stone-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform group-hover:-translate-y-0.5">
          Open the comparator <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </a>
    );
  }

  const article = (slug ? getArticle(slug) : undefined) ?? ARTICLES[0];
  return (
    <a
      href={`#articles/${article.slug}`}
      className="group my-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-orange-200/80 bg-gradient-to-r from-orange-50 via-amber-50/60 to-orange-50 px-6 py-5 shadow-sm transition-all hover:border-orange-400 hover:shadow-md md:px-8"
    >
      <span className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30">
          <BookOpenText className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600">Featured guide — from the lab</span>
          <span className="font-serif text-lg font-bold leading-snug text-stone-900 md:text-xl">{article.title}</span>
        </span>
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-orange-500 to-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-transform group-hover:-translate-y-0.5">
        Read the guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </a>
  );
}

/* --------------------------- in-article "read next" -------------------------- */

export function ReadNextPromo({ slot = 0, excludeSlug }: { slot?: number; excludeSlug?: string }) {
  const pool = excludeSlug ? ARTICLES.filter((a) => a.slug !== excludeSlug) : ARTICLES;
  const article = pool.length > 0 ? pool[slot % pool.length] : ARTICLES[0];
  return (
    <a
      href={`#articles/${article.slug}`}
      className="group my-8 flex gap-5 overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-xl sm:p-6"
    >
      <span className="hidden w-40 shrink-0 flex-col items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950/80 text-white sm:flex" aria-hidden>
        <Sparkles className="h-5 w-5 text-orange-400" />
        <span className="px-3 text-center font-serif text-sm font-bold leading-snug">From the VersusPeak Lab</span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col justify-center">
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600">
          <BookOpenText className="h-3.5 w-3.5" aria-hidden /> Read next · {article.readMinutes} min
        </span>
        <span className="mt-2 font-serif text-lg font-bold leading-snug text-stone-900 group-hover:text-orange-800 md:text-xl">
          {article.title}
        </span>
        <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">{article.excerpt}</span>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-orange-700">
          Read the full guide
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </span>
    </a>
  );
}

/* ------------------------------- newsletter --------------------------------- */

export function NewsletterBlock({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      toast({ title: 'Check your email', description: 'Please enter a valid email address.', variant: 'destructive' });
      return;
    }
    setDone(true);
    toast({
      title: 'You are on the list',
      description: 'Deal alerts will land in your inbox before the best Black Friday prices sell out.',
    });
  };

  if (done) {
    return (
      <section
        aria-label="Newsletter confirmation"
        className={`my-10 flex flex-col items-center gap-3 rounded-2xl p-8 text-center md:p-10 ${dark ? 'bg-stone-950 text-white' : 'border border-green-200 bg-green-50'}`}
      >
        <CheckCircle2 className={`h-10 w-10 ${dark ? 'text-orange-400' : 'text-green-700'}`} aria-hidden />
        <h2 className="font-serif text-2xl font-bold">You are subscribed</h2>
        <p className={`max-w-md text-sm leading-relaxed ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
          We will email you the verified Black Friday prices on our tested picks — before the popular models sell
          out. No spam, unsubscribe anytime.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="newsletter-title"
      className={`my-10 overflow-hidden rounded-2xl p-8 md:p-10 ${
        dark
          ? 'relative bg-gradient-to-br from-stone-950 via-stone-900 to-orange-950 text-white'
          : 'border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50'
      }`}
    >
      {dark && <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.3),transparent_55%)]" aria-hidden />}
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <p className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] ${dark ? 'text-orange-400' : 'text-orange-600'}`}>
            <Mail className="h-3.5 w-3.5" aria-hidden /> Deal alerts
          </p>
          <h2 id="newsletter-title" className={`mt-2 font-serif text-2xl font-bold leading-snug md:text-3xl ${dark ? 'text-white' : 'text-stone-900'}`}>
            Get the best Black Friday prices before they sell out
          </h2>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
            One email per week during deal season: only price drops on models we tested and recommend. Budget
            picks routinely sell out by Black Friday morning — subscribers hear about them first.
          </p>
        </div>
        <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row" aria-label="Subscribe to deal alerts">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={`h-12 flex-1 rounded-xl border px-4 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-orange-500/60 ${
              dark ? 'border-white/15 bg-white/10 text-white placeholder:text-stone-500' : 'border-stone-200 bg-white text-stone-900 placeholder:text-stone-400'
            }`}
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-6 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-600/40"
          >
            Get deal alerts <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </form>
      </div>
    </section>
  );
}
