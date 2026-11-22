import Image from 'next/image';

export const PHOTOS = {
  refrigerators: { file: 'refrigerator', alt: 'Open refrigerator in a kitchen, illustrative category photograph', author: 'Алексей Вечерин', source: 'https://www.pexels.com/photo/white-refrigerator-in-the-kitchen-9551373/' },
  washers: { file: 'laundry', alt: 'Washing machine drum with laundry, illustrative category photograph', author: 'Tima Miroshnichenko', source: 'https://www.pexels.com/photo/washing-machine-with-clothes-inside-8774444/' },
  dryers: { file: 'laundry', alt: 'Laundry appliance drum, illustrative laundry photograph, not a dryer model photograph', author: 'Tima Miroshnichenko', source: 'https://www.pexels.com/photo/washing-machine-with-clothes-inside-8774444/' },
  dishwashers: { file: 'dishwasher', alt: 'Open dishwasher rack, illustrative category photograph', author: 'Castorly Stock', source: 'https://www.pexels.com/photo/empty-rack-of-dishwasher-3829560/' },
  tvs: { file: 'television', alt: 'Television in a living room, illustrative category photograph', author: 'Max Vakhtbovych', source: 'https://www.pexels.com/photo/television-mounted-on-white-wall-7587781/' },
  kitchen: { file: 'kitchen', alt: 'Kitchen with laundry area, illustrative interior photograph', author: 'Alexander F Ungerer', source: 'https://www.pexels.com/photo/modern-kitchen-interior-with-laundry-area-35996724/' },
} as const;
export type PhotoKey = keyof typeof PHOTOS;
export function articlePhoto(slug: string): PhotoKey {
 if (slug.includes('refrigerator')) return 'refrigerators';
 if (slug.includes('speed-queen')) return 'washers';
 if (slug.includes('dishwasher')) return 'dishwashers';
 if (slug.includes('oled')) return 'tvs';
 return 'kitchen';
}
export function EditorialPhoto({ kind, model = false, compact = false }: { kind: PhotoKey; model?: boolean; compact?: boolean }) {
 const p = PHOTOS[kind];
 return <figure className={compact ? 'mb-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-50' : 'my-7 overflow-hidden rounded-2xl border border-stone-200 bg-stone-50'}>
  <Image src={`/images/editorial/${p.file}.webp`} alt={p.alt} width={1200} height={800} className={`w-full object-cover ${compact ? 'aspect-[3/2]' : 'aspect-[16/9]'}`} sizes={compact ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, 900px'} />
  <figcaption className="px-4 py-3 text-xs leading-5 text-stone-600">Illustrative photo{model ? ', not the model described' : ', not a product test'}. <a className="underline underline-offset-2" href={p.source} target="_blank" rel="noopener noreferrer">{p.author} / Pexels</a>. <a className="underline underline-offset-2" href="https://www.pexels.com/license/" target="_blank" rel="noopener noreferrer">License</a>.</figcaption>
 </figure>;
}
