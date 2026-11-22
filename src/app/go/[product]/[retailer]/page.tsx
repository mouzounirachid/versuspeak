import { notFound } from 'next/navigation';
import { APPROVED_AFFILIATE_OFFERS } from '@/lib/links';
import { OutboundRedirect } from '@/components/outbound-redirect';
export const metadata = { title: 'Continue to retailer', robots: { index: false, follow: false } };
export default async function Go({ params }: { params: Promise<{ product: string; retailer: string }> }) {
 const { product, retailer } = await params;
 const destination = APPROVED_AFFILIATE_OFFERS[product]?.[retailer];
 if (typeof destination !== 'string' || !destination.startsWith('https://')) notFound();
 return <OutboundRedirect destination={destination} product={product} retailer={retailer} />;
}
