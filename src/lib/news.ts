import type { CategoryId, NewsItem } from './types';

// Every item below was opened at its source on the check date shown.
// Claims stay attributed to the publisher; VersusPeak has not tested any product mentioned.
export const NEWS_CHECKED = 'November 23, 2026';
export const NEWS: NewsItem[] = [
 {
  id: 'black-friday-2026-dates',
  categories: 'all',
  kind: 'Sale calendar',
  title: 'Black Friday falls on November 27, 2026: a sale date is not a discount',
  sourceDate: 'Calendar reference',
  sortDate: '2026-11-23',
  checked: NEWS_CHECKED,
  body: 'Thanksgiving Day 2026 falls on Thursday, November 26, the fourth Thursday of November, so Black Friday is November 27 and Cyber Monday is November 30. Retailers schedule appliance and TV promotions around these dates, but a seasonal label is not evidence that a specific model is cheaper than before. Compare complete delivered quotes, not banners.',
  action: 'Use the quote comparison worksheet on /deals before accepting a holiday offer.',
  publisher: 'timeanddate.com',
  sourceTitle: 'Thanksgiving Day 2026 in the United States',
  sourceUrl: 'https://www.timeanddate.com/holidays/us/thanksgiving-day'
 },
 {
  id: 'cpsc-frigidaire-minifridge-26-199',
  categories: ['refrigerators'],
  kind: 'Recall',
  title: 'CPSC expands the Frigidaire-brand minifridge recall (recall 26-199)',
  sourceDate: 'January 15, 2026',
  sortDate: '2026-01-15',
  checked: NEWS_CHECKED,
  body: 'The U.S. Consumer Product Safety Commission says Curtis International expanded its recall of Frigidaire-brand minifridges to model EFMIS121 with serial numbers between A2001 and A2310, about 330,000 units, because internal electrical components can short circuit and ignite the housing. The published remedy is a refund after registering the unit. These compact models are not the full-size refrigerators in our catalog, but the model-and-serial check is the same discipline we recommend for any appliance.',
  action: 'If you own a Frigidaire-brand minifridge, compare the model and serial number on the back label with the CPSC notice before using it again.',
  publisher: 'U.S. Consumer Product Safety Commission',
  sourceTitle: 'Curtis International Expands Recall of Frigidaire-brand Minifridges Due to Fire and Burn Hazards',
  sourceUrl: 'https://www.cpsc.gov/Recalls/2026/Curtis-International-Expands-Recall-of-Frigidaire-brand-Minifridges-Due-to-Fire-and-Burn-Hazards'
 },
 {
  id: 'samsung-2026-tv-lineup-expansion',
  categories: ['tvs'],
  kind: 'Product announcement',
  title: 'Samsung announces a refreshed 2026 Neo QLED series and a new Mini LED lineup',
  sourceDate: 'March 24, 2026',
  sortDate: '2026-03-24',
  checked: NEWS_CHECKED,
  body: 'Samsung Electronics America announced 2026 Neo QLED 4K models (QN80H, QN70H) and an all-new Mini LED TV series. Samsung describes Quantum Mini LEDs and quantum dots in its own promotional terms; those are manufacturer claims, not independent measurements. The practical effect for a buyer is simply that 2026 model suffixes now sit next to discounted 2025 stock, so confirm the exact model number before comparing prices.',
  action: 'When a deal mentions a Samsung TV, match the full 2026 model code against the manufacturer specification, not the series name.',
  publisher: 'Samsung Newsroom U.S.',
  sourceTitle: 'Samsung Expands 2026 TV Lineup with Refreshed Neo QLED Series and All-New Mini LED TVs',
  sourceUrl: 'https://news.samsung.com/us/samsung-expands-2026-tv-lineup-refreshed-neo-qled-series-new-mini-led-tvs/'
 },
 {
  id: 'lg-2026-oled-pricing',
  categories: ['tvs'],
  kind: 'Product announcement',
  title: 'LG publishes US pricing for its 2026 OLED evo G6 and C6 TVs',
  sourceDate: 'March 5, 2026',
  sortDate: '2026-03-05',
  checked: NEWS_CHECKED,
  body: 'LG Electronics USA opened pre-orders for the 2026 OLED evo G6 and C6 series, listing MSRPs from $1,399 (42-inch C6) and $2,499 (55-inch G6), with retail availability beginning March 2026. These are manufacturer list prices and launch claims, not street prices or test results. For readers of our OLED guide: the 2025 C5 referenced there now has a named 2026 successor, so check which model year a seller is actually quoting.',
  action: 'Treat MSRP as a reference point and compare the complete delivered quote for the exact 2025 or 2026 model code.',
  publisher: 'LG Electronics USA',
  sourceTitle: 'LG Announces Pricing and Availability for 2026 Flagship TV Models',
  sourceUrl: 'https://www.lg.com/us/newsroom/media-entertainment/lg-announces-pricing-and-availability-for-2026-flagship-tv-models'
 },
 {
  id: 'energy-star-dryer-spec-v2',
  categories: ['dryers'],
  kind: 'Standards watch',
  title: 'ENERGY STAR is revising its clothes-dryer specification (version 2.0 in development)',
  sourceDate: 'Draft published January 15, 2025',
  sortDate: '2026-11-23',
  checked: NEWS_CHECKED,
  body: 'EPA’s ENERGY STAR program lists the residential clothes-dryer specification as under development, with a Version 2.0 Draft 1 published for comment. As of our check, no final version or effective date is published on that page. Today’s Combined Energy Factor (CEF) labels remain the current comparison tool; when a revision is finalized, older and newer labels may not be directly comparable.',
  action: 'Compare dryers on the current CEF label, and note the specification version if you revisit the decision much later.',
  publisher: 'ENERGY STAR (U.S. EPA)',
  sourceTitle: 'Clothes Dryer Specification Version 2',
  sourceUrl: 'https://www.energystar.gov/products/clothes_dryers/clothes_dryer_products_website_version_2_0'
 },
 {
  id: 'samsung-topload-washer-recall-open',
  categories: ['washers'],
  kind: 'Recall',
  title: 'Samsung top-load washer recall remains listed with a free software repair',
  sourceDate: 'December 22, 2022',
  sortDate: '2022-12-22',
  checked: NEWS_CHECKED,
  body: 'CPSC continues to list Samsung’s recall of about 663,500 top-load washing machines (WA49B, WA50B, WA51A, WA52A, WA54A and WA55A series) because a short circuit can pose a fire hazard. The published remedy is a free software update. Older recalls still matter when buying used or remaining stock: a washer built before the fix can still be sitting in a warehouse or a classified listing.',
  action: 'Before buying a Samsung top-load washer, new or used, match the model number against the CPSC notice and confirm the software update was applied.',
  publisher: 'U.S. Consumer Product Safety Commission',
  sourceTitle: 'Samsung Recalls Top-Load Washing Machines Due to Fire Hazard; Software Repair Available',
  sourceUrl: 'https://www.cpsc.gov/Recalls/2023/Samsung-Recalls-Top-Load-Washing-Machines-Due-to-Fire-Hazard-Software-Repair-Available'
 },
 {
  id: 'two-minute-recall-check',
  categories: ['washers', 'dishwashers'],
  kind: 'Safety check',
  title: 'A two-minute recall check belongs in every appliance purchase',
  sourceDate: 'Standing guidance',
  sortDate: '2026-11-23',
  checked: NEWS_CHECKED,
  body: 'The CPSC maintains a searchable public recall list for household products. Searching the exact model number takes about two minutes and is the only verification step in this guide that costs nothing. For washers and dishwashers in particular, fire-hazard recalls have historically spanned several brands and model years, so “no recall in the news this month” is not the same as “no open recall for this model.”',
  action: 'Search the full model number on the CPSC recall list before paying, and keep the result with your order records.',
  publisher: 'U.S. Consumer Product Safety Commission',
  sourceTitle: 'Recalls & Product Safety Warnings',
  sourceUrl: 'https://www.cpsc.gov/Recalls'
 }
];

export function newsForCategory(id: CategoryId): NewsItem[] {
 return NEWS.filter(n => n.categories === 'all' || n.categories.includes(id))
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}
export const NEWS_SORTED = [...NEWS].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
