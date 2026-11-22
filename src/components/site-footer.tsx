'use client';

import type { View } from '@/lib/types';

type FooterLink = { view: View; label: string };

const CATEGORY_LINKS: FooterLink[] = [
  { view: 'refrigerators', label: 'Best Refrigerators of 2026' },
  { view: 'washers', label: 'Best Washing Machines of 2026' },
  { view: 'dryers', label: 'Best Dryers of 2026' },
  { view: 'dishwashers', label: 'Best Dishwashers of 2026' },
  { view: 'tvs', label: 'Best TVs of 2026' },
  { view: 'compare', label: 'Compare All Models' },
  { view: 'deals', label: 'Black Friday Deals' },
];

const COMPANY_LINKS: FooterLink[] = [
  { view: 'about', label: 'About VersusPeak' },
  { view: 'methodology', label: 'How We Test' },
  { view: 'articles', label: 'Guides & Analysis' },
  { view: 'disclosure', label: 'Affiliate Disclosure' },
  { view: 'privacy', label: 'Privacy Policy' },
  { view: 'terms', label: 'Terms of Use' },
  { view: 'contact', label: 'Contact Us' },
];

export function SiteFooter({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <footer className="relative mt-auto bg-stone-950 text-stone-300">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-bold text-white">Versus</span>
            <span className="font-serif text-2xl font-bold text-orange-500">Peak</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            Independent testing for real homes. We buy every product at retail — refrigerators, washers,
            dryers, dishwashers, and TVs — test it in our lab, and publish the scores, so you buy the right
            product the first time.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-stone-500">
            As an Amazon Associate, VersusPeak earns from qualifying purchases. Prices shown are indicative
            street prices at time of testing.
          </p>
        </div>

        <nav aria-label="Footer categories">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">Rankings</h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORY_LINKS.map((l) => (
              <li key={l.view + l.label}>
                <a href={l.view === 'home' ? '/' : `/${l.view}`}  className="text-sm text-stone-300 transition-colors hover:text-orange-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer company">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500">Company</h3>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((l) => (
              <li key={l.view + l.label}>
                <a href={l.view === 'home' ? '/' : `/${l.view}`}  className="text-sm text-stone-300 transition-colors hover:text-orange-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 pb-24 text-xs text-stone-500 sm:flex-row lg:pb-5">
          <span>© 2026 VersusPeak. All rights reserved.</span>
          <span>Independent testing · Reader-supported · Updated November 2026</span>
        </div>
      </div>
    </footer>
  );
}
