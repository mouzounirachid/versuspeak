import { ALL_PRODUCTS, CATEGORIES, SITE } from '@/lib/data';
import { ARTICLES } from '@/lib/articles';
import { VersusPeakApp } from '@/components/versuspeak-app';

function buildJsonLd() {
  const productSchema = (position: number, productId: string) => {
    const p = ALL_PRODUCTS.find((x) => x.id === productId)!;
    return {
      '@type': 'ListItem',
      position,
      item: {
        '@type': 'Product',
        name: p.name,
        model: p.model,
        image: `${SITE.domain}/images/products/${p.id}.jpg`,
        brand: { '@type': 'Brand', name: p.brand },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: p.overall,
            bestRating: 10,
            worstRating: 1,
          },
          author: { '@type': 'Organization', name: SITE.name },
          datePublished: p.reviewedAt,
        },
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    };
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'VersusPeak 2026 Appliance Rankings',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: ALL_PRODUCTS.length,
    itemListElement: ALL_PRODUCTS.map((p, i) => productSchema(i + 1, p.id)),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CATEGORIES.flatMap((c) =>
      c.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    ),
  };

  const articleList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'VersusPeak Guides & Analysis',
    numberOfItems: ARTICLES.length,
    itemListElement: ARTICLES.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'BlogPosting',
        headline: a.title,
        description: a.excerpt,
        image: `${SITE.domain}${a.image}`,
        dateModified: a.updated,
        author: { '@type': 'Organization', name: SITE.name },
        publisher: { '@type': 'Organization', name: SITE.name },
        mainEntityOfPage: `${SITE.domain}/#articles/${a.slug}`,
      },
    })),
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    description: SITE.description,
  };

  return [organization, itemList, faqPage, articleList];
}

export default function Home() {
  const jsonLd = buildJsonLd();
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={`ldjson-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <VersusPeakApp />
    </>
  );
}
