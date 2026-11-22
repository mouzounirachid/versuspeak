export type CategoryId = 'refrigerators' | 'washers' | 'dryers' | 'dishwashers' | 'tvs';
export type View = 'home' | CategoryId | 'compare' | 'deals' | 'articles' | 'methodology' | 'about' | 'privacy' | 'terms' | 'contact' | 'disclosure';
export type Source = { id: string; title: string; publisher: string; url: string; kind: string; note: string };
export type Product = { id: string; category: CategoryId; name: string; brand: string; specs: { label: string; value: string }[]; source: string; caveat: string };
export type Section = { heading: string; body: string; list?: string[] };
export type Article = { slug: string; kicker: string; title: string; excerpt: string; updated: string; tldr: string; sections: Section[]; sources: string[] };
export type Category = { id: CategoryId; name: string; navLabel: string; kicker: string; intro: string; checks: Section[]; sources: string[]; guideSlug: string };
