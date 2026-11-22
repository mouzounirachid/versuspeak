 'use client';
import { useEffect } from 'react';
export function OutboundRedirect({ destination, product, retailer }: { destination: string; product: string; retailer: string }) {
 useEffect(() => {
  let done = false;
  const leave = () => { if (!done) { done = true; window.location.replace(destination); } };
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'affiliate_click', product_id: product, retailer, outbound_url: destination, eventCallback: leave, eventTimeout: 1000 });
  const timer = setTimeout(leave, 1200);
  return () => clearTimeout(timer);
 }, [destination, product, retailer]);
 return <main className="mx-auto max-w-xl p-10"><h1 className="text-2xl font-bold">Continue to the retailer</h1><p className="my-4">You are leaving VersusPeak. Retailer prices, availability and terms apply. This link may earn us a commission.</p><a className="underline" href={destination} rel="sponsored nofollow noopener">Continue if you are not redirected</a></main>;
}
