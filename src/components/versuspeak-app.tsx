'use client';

import { useCallback, useEffect, useState } from 'react';
import { Flame, GitCompareArrows } from 'lucide-react';
import { CATEGORIES } from '@/lib/data';
import type { View } from '@/lib/types';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { HomeView } from './home-view';
import { CategoryView } from './category-view';
import { ComparatorView } from './comparator-view';
import { DealsView } from './deals-view';
import { ArticleView, ArticlesView } from './articles-view';
import { MethodologyView } from './methodology-view';
import { DisclosureView, PrivacyView, TermsView, ContactView } from './legal-views';

const VALID_VIEWS: View[] = [
  'home',
  'refrigerators',
  'washers',
  'dryers',
  'dishwashers',
  'tvs',
  'compare',
  'deals',
  'articles',
  'methodology',
  'privacy',
  'disclosure',
  'terms',
  'contact',
];

/** Sticky mobile conversion bar — quick access to the two highest-intent destinations. */
function MobileCtaBar({ current, onNavigate }: { current: View; onNavigate: (v: View) => void }) {
  if (current === 'deals') return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200/80 bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <button
          onClick={() => onNavigate('deals')}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-orange-500 to-orange-600 px-4 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-600/25 transition-transform active:scale-[0.98]"
        >
          <Flame className="h-4 w-4" aria-hidden /> BF deals · up to 52%
        </button>
        <button
          onClick={() => onNavigate(current === 'compare' ? 'refrigerators' : 'compare')}
          className="flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wide text-stone-800 transition-colors active:bg-stone-100"
        >
          <GitCompareArrows className="h-4 w-4 text-orange-600" aria-hidden />
          {current === 'compare' ? 'Rankings' : 'Compare'}
        </button>
      </div>
    </div>
  );
}

export function VersusPeakApp() {
  const [view, setView] = useState<View>('home');
  const [articleSlug, setArticleSlug] = useState<string | null>(null);

  const applyHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    const [root, sub] = hash.split('/');
    if (root === 'articles') {
      setArticleSlug(sub ?? null);
      setView('articles');
    } else if (VALID_VIEWS.includes(hash as View)) {
      setArticleSlug(null);
      setView(hash as View);
    }
  }, []);

  useEffect(() => {
    // Defer the initial hash sync to after hydration to avoid a cascading render.
    const raf = requestAnimationFrame(applyHash);
    const onHashChange = () => {
      applyHash();
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [applyHash]);

  const navigate = (v: View) => {
    setArticleSlug(null);
    setView(v);
    if (window.location.hash !== `#${v}`) {
      history.replaceState(null, '', `#${v}`);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const category = CATEGORIES.find((c) => c.id === view);

  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <SiteHeader current={view} onNavigate={navigate} />
      <main className="flex-1">
        {view === 'home' && <HomeView onNavigate={navigate} />}
        {category && <CategoryView key={category.id} category={category} onNavigate={navigate} />}
        {view === 'compare' && <ComparatorView />}
        {view === 'deals' && <DealsView />}
        {view === 'articles' &&
          (articleSlug ? <ArticleView key={articleSlug} slug={articleSlug} /> : <ArticlesView />)}
        {view === 'methodology' && <MethodologyView onNavigate={navigate} />}
        {view === 'privacy' && <PrivacyView />}
        {view === 'disclosure' && <DisclosureView />}
        {view === 'terms' && <TermsView />}
        {view === 'contact' && <ContactView />}
      </main>
      <SiteFooter onNavigate={navigate} />
      <MobileCtaBar current={view} onNavigate={navigate} />
    </div>
  );
}
