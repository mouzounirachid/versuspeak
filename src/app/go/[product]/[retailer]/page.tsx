import { notFound } from 'next/navigation';
import { ALL_PRODUCTS } from '@/lib/data';
import { ctaRetailers, retailerDestination } from '@/lib/links';
import type { Retailer } from '@/lib/types';
import { OutboundRedirect } from '@/components/outbound-redirect';
export const metadata = { title: 'Continue to retailer', robots: { index: false, follow: false } };
export default async function Go({ params }: { params: Promise<{ product: string; retailer: string }> }) {
 const { product, retailer } = await params;
 const item = ALL_PRODUCTS.find(p => p.id === product);
 if (!item || !ctaRetailers(item).includes(retailer as Retailer)) notFound();
 const destination = retailerDestination(retailer as Retailer, item);
 return <OutboundRedirect destination={destination} product={product} retailer={retailer} />;
}
