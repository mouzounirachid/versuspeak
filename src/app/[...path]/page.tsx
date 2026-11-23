import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VersusPeakApp } from '@/components/versuspeak-app';
import { CATEGORIES } from '@/lib/data';
import { ARTICLES } from '@/lib/articles';
import type { View } from '@/lib/types';
const titles: Record<string, string> = { about: 'About VersusPeak', compare: 'Compare products', deals: 'Appliance offer checklist', articles: 'Buying guides', news: 'News and source checks', methodology: 'Editorial methodology', privacy: 'Privacy Policy', disclosure: 'Affiliate Disclosure', terms: 'Terms of Use', contact: 'Contact VersusPeak' };
function resolve(path: string[]) {
 if (path.length === 2 && path[0] === 'articles') {
  const article = ARTICLES.find(a => a.slug === path[1]);
  if (article) return { title: article.title, description: article.excerpt, view: 'articles' as View, slug: article.slug };
 }
 if (path.length === 1) {
  const c = CATEGORIES.find(c => c.id === path[0]);
  if (c) return { title: c.kicker, description: `Compare ${c.name.toLowerCase()}: specifications, features and buying guidance.`, view: c.id as View, slug: null };
  if (titles[path[0]]) return { title: titles[path[0]], description: `VersusPeak: ${titles[path[0]]}.`, view: path[0] as View, slug: null };
 }
 return null;
}
export function generateStaticParams() { return [...CATEGORIES.map(c => ({ path: [c.id] })), ...Object.keys(titles).map(p => ({ path: [p] })), ...ARTICLES.map(a => ({ path: ['articles', a.slug] }))]; }
export async function generateMetadata({ params }: { params: Promise<{ path: string[] }> }): Promise<Metadata> {
 const { path } = await params; const page = resolve(path); if (!page) return {};
 return { title: page.title, description: page.description, alternates: { canonical: `/${path.join('/')}` }, openGraph: { title: page.title, description: page.description, url: `/${path.join('/')}` } };
}
export default async function Page({ params }: { params: Promise<{ path: string[] }> }) {
 const { path } = await params; const page = resolve(path); if (!page) notFound();
 return <VersusPeakApp initialView={page.view} articleSlug={page.slug} />;
}
