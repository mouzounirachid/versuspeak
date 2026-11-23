import type { MetadataRoute } from 'next';
import { CATEGORIES, SITE } from '@/lib/data';
import { ARTICLES } from '@/lib/articles';
export default function sitemap(): MetadataRoute.Sitemap {
 return ['', ...CATEGORIES.map(c => c.id), 'articles', 'compare', 'deals', 'about', 'contact', 'privacy', 'terms', 'disclosure', 'methodology', ...ARTICLES.map(a => `articles/${a.slug}`)].map(path => ({ url: `${SITE.domain}/${path}`, changeFrequency: 'monthly' as const }));
}
