import type { Product, Retailer } from './types';
const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG;
const amazonTag = () => AMAZON_TAG ? `&tag=${encodeURIComponent(AMAZON_TAG)}` : '';

const q = (s: string) => encodeURIComponent(s);

/**
 * Curated retailer-search queries per product (fallback when no deep link).
 *
 * Retailer search engines match bag-of-words with strong recall:
 * "brand + model + product type" always returns results, while an exact
 * model number alone can zero-result ("No results for your search query")
 * when the retailer's catalog uses a different suffix or regional variant.
 */
const SEARCH_QUERIES: Record<string, string> = {
  /* ------------------------------ refrigerators ----------------------------- */
  'lg-lryxs2706s': 'LG LRYXS2706S refrigerator',
  'samsung-rf29bb8900': 'Samsung RF29BB8900 Bespoke refrigerator',
  'bosch-b36cl80ens': 'Bosch B36CL80ENS refrigerator',
  'ge-profile-pwe23kynfs': 'GE Profile PWE23KYNFS refrigerator',
  'whirlpool-wrf535swhz': 'Whirlpool WRF535SWHZ refrigerator',
  'maytag-mfi2570fez': 'Maytag MFI2570FEZ refrigerator',
  'frigidaire-grfs2853af': 'Frigidaire Gallery GRFS2853AF refrigerator',
  'kenmore-74025': 'Kenmore 74025 refrigerator',

  /* -------------------------------- washers --------------------------------- */
  'lg-wm4000hwa': 'LG WM4000HWA washer',
  'electrolux-elfw7637at': 'Electrolux ELFW7637AT washer',
  'samsung-wf53bb8900': 'Samsung WF53BB8900 Bespoke washer',
  'ge-gfw655ssvww': 'GE GFW655SSVWW washer',
  'speed-queen-tc5': 'Speed Queen TC5 washer',
  'maytag-mvw6230hw': 'Maytag MVW6230HW washer',
  'whirlpool-wfw6620rw': 'Whirlpool WFW6620RW washer',
  'lg-wt7300cw': 'LG WT7300CW top load washer',

  /* -------------------------------- dryers ---------------------------------- */
  'lg-dlex4000w': 'LG DLEX4000W dryer',
  'electrolux-elfe7637at': 'Electrolux ELFE7637AT dryer',
  'samsung-dve53bb8900': 'Samsung DVE53BB8900 Bespoke dryer',
  'ge-gfd65essvww': 'GE GFD65ESSVWW dryer',
  'speed-queen-df7': 'Speed Queen DF7 dryer',
  'maytag-med6230hw': 'Maytag MED6230HW dryer',
  'whirlpool-wed6620rw': 'Whirlpool WED6620RW dryer',
  'amana-ned4655ew': 'Amana NED4655EW dryer',

  /* ------------------------------ dishwashers ------------------------------- */
  'bosch-shp78cm5n': 'Bosch SHP78CM5N dishwasher',
  'miele-g7566-scvi': 'Miele G 7566 SCVi dishwasher',
  'lg-ldp6810ss': 'LG LDP6810SS dishwasher',
  'kitchenaid-kdte204kps': 'KitchenAid KDTE204KPS dishwasher',
  'ge-profile-pdt755syvfs': 'GE Profile PDT755SYVFS dishwasher',
  'samsung-dw80cg4020': 'Samsung DW80CG4020 dishwasher',
  'frigidaire-gallery-fgid2479sf': 'Frigidaire Gallery FGID2479SF dishwasher',
  'whirlpool-wdf520padm': 'Whirlpool WDF520PADM dishwasher',

  /* ---------------------------------- TVs ----------------------------------- */
  'lg-c5-oled-65': 'LG C5 OLED evo 65',
  'tcl-qm8l-65': 'TCL QM8 65 inch 4K',
  'samsung-s95f-65': 'Samsung S95F OLED 65',
  'hisense-u8qg-65': 'Hisense U8 65 inch',
  'sony-bravia-7-65': 'Sony Bravia 7 65 inch',
  'samsung-frame-55': 'Samsung The Frame 55 inch',
  'tcl-qm7l-65': 'TCL QM7 65 inch 4K',
  'roku-pro-65': 'Roku Pro Series 65 inch TV',
};

/**
 * Verified Amazon ASINs (TVs — Amazon carries these directly).
 * Clicking lands on the product page itself instead of a search.
 */
const AMAZON_ASINS: Record<string, string> = {
  'lg-c5-oled-65': 'B0DYQM4BDB',
  'tcl-qm8l-65': 'B0GPSYT2KN',
  'samsung-s95f-65': 'B0F25CBW95',
  'hisense-u8qg-65': 'B0F1DV217B',
  'sony-bravia-7-65': 'B0CVQ4FQJ9',
  'samsung-frame-55': 'B0DXN3QKS8',
  'tcl-qm7l-65': 'B0GPT7DGDR',
  'roku-pro-65': 'B0DWH3R4MG',
};

/**
 * Verified Best Buy product codes (major appliances — Best Buy carries
 * these; Amazon's catalog for them is mostly spare parts). The URL slug
 * is cosmetic — Best Buy canonicalizes on the product code.
 */
const BESTBUY_PRODUCTS: Record<string, string> = {
  /* dryers */
  'lg-dlex4000w': 'lg-7-4-cu-ft-stackable-smart-electric-dryer-with-steam-and-built-in-intelligence-white/J7G564PZYZ',
  'electrolux-elfe7637at': 'electrolux-8-0-cu-ft-stackable-electric-dryer-with-steam-and-balanced-dry-titanium/J7CJ36K4TC',
  'samsung-dve53bb8900': 'samsung-bespoke-7-6-cu-ft-stackable-smart-electric-dryer-with-steam-and-ai-optimal-dry-silver-steel/J3ZYG28JQR',
  'ge-gfd65essvww': 'ge-7-8-cu-ft-stackable-smart-electric-dryer-with-steam-white/J7645SL429',
  'speed-queen-df7': 'speed-queen-df7-commercial-heavy-duty-electric-dryer-white/J3GWCHL7LV',
  'maytag-med6230hw': 'maytag-7-4-cu-ft-smart-electric-dryer-with-extra-power-button-white/J3KHV8QHWV',
  'whirlpool-wed6620rw': 'whirlpool-7-4-cu-ft-stackable-electric-dryer-with-steam-and-wrinkle-shield-plus-option-white/J3KHV8Q8G9',
  'amana-ned4655ew': 'amana-6-5-cu-ft-electric-dryer-with-automatic-dryness-control-white/J3KHV8LGLR',
  /* washers */
  'lg-wm4000hwa': 'lg-4-5-cu-ft-high-efficiency-stackable-smart-front-load-washer-with-steam-and-built-in-intelligence-white/J7G564PZ86',
  'electrolux-elfw7637at': 'electrolux-4-5-cu-ft-stackable-front-load-washer-with-steam-and-smartboost-wash-system-titanium/J7CJ36K4H6',
  'samsung-wf53bb8900': 'samsung-bespoke-5-3-cu-ft-high-efficiency-stackable-smart-front-load-washer-with-steam-and-ai-optiwash-brushed-navy/J3ZYG23WQC',
  'ge-gfw655ssvww': 'ge-5-0-cu-ft-stackable-smart-front-load-washer-with-steam-smartdispense-and-odorblock-ultra-fresh-vent-system-white/J7645SLY5Q',
  'speed-queen-tc5': 'speed-queen-tc5-classic-top-load-washer-white/J3GWCHL7JL',
  'maytag-mvw6230hw': 'maytag-4-7-cu-ft-smart-top-load-washer-with-extra-power-button-white/J3KHV8QRHZ',
  /* refrigerators */
  'bosch-b36cl80ens': 'bosch-800-series-20-5-cu-ft-4-door-french-door-counter-depth-smart-refrigerator-with-vitafresh-stainless-steel/J3P322S7Z5',
  'ge-profile-pwe23kynfs': 'ge-profile-36-in-wide-23-1-cu-ft-french-door-counter-depth-refrigerator-with-internal-water-dispenser-stainless-steel/J7645S2GVZ',
  'whirlpool-wrf535swhz': 'whirlpool-25-2-cu-ft-french-door-refrigerator-with-internal-water-dispenser-stainless-steel/J3KHV8RGGW',
  'maytag-mfi2570fez': 'maytag-36-in-wide-25-cu-ft-french-door-refrigerator-with-powercold-feature-stainless-steel/J3KHV89YRZ',
  'frigidaire-grfs2853af': 'frigidaire-gallery-36-in-wide-27-8-cu-ft-french-door-refrigerator-stainless-steel/J7CJ3RSSFL',
  /* dishwashers */
  'bosch-shp78cm5n': 'bosch-800-series-24-top-control-smart-built-in-stainless-steel-tub-dishwasher-with-flexible-3rd-rack-42-dba-stainless-steel/J3P322SZRP',
  'miele-g7566-scvi': 'miele-g7566-scvi-sf-xxl-autodos-dishwasher-stainless-steel/CJ3KGTPPHK',
  'ge-profile-pdt755syvfs': 'ge-profile-24-top-control-smart-built-in-stainless-steel-tub-dishwasher-with-3rd-rack-dedicated-jet-targeted-wash-and-42-dba-stainless-steel/J7645SG63J',
};

/**
 * Verified Home Depot product pages (/p/{slug}/{productId}). Slugs carry the
 * exact model number — matched against indexed product listings Nov 2026.
 */
const HOMEDEPOT_PRODUCTS: Record<string, string> = {
  'samsung-rf29bb8900':
    'Samsung-Bespoke-36-in-29-cu-ft-Standard-Depth-4-Door-French-Door-Refrigerator-in-Charcoal-Glass-Top-with-Family-Hub-RF29BB8900QK/329930630',
  'kitchenaid-kdte204kps':
    'KitchenAid-24-in-Top-Control-Built-In-Tall-Tub-39-dBA-Dishwasher-in-PrintShield-Stainless-Steel-with-30-Total-Wash-Jets-KDTE204KPS/313573360',
  'bosch-shp78cm5n':
    'Bosch-800-Series-24-in-Stainless-Steel-Top-Control-Tall-Tub-Pocket-Handle-Quietest-42-dBA-Dishwasher-with-Stainless-Steel-Tub-SHP78CM5N/325602595',
};

/** Verified Lowe's product pages (/pd/{slug}/{itemId}). */
const LOWES_PRODUCTS: Record<string, string> = {
  'lg-ldp6810ss':
    'LG-QuadWash-44-Decibel-Top-Control-24-in-Built-In-Dishwasher-Printproof-Stainless-Steel-ENERGY-STAR/5005504035',
};

type DeepLink = { retailer: Retailer; url: string };

/**
 * Direct product-page links, keyed by product id. A product can carry deep
 * links on several retailers (e.g. Bosch 800 at Best Buy AND Home Depot);
 * deep-linked retailers are shown first on CTAs, the rest keep curated
 * search-URL fallbacks.
 */
const DEEP_LINKS: Record<string, DeepLink[]> = {};
const addDeep = (map: Record<string, string>, retailer: Retailer, build: (path: string) => string) => {
  for (const [id, path] of Object.entries(map)) {
    (DEEP_LINKS[id] ??= []).push({ retailer, url: build(path) });
  }
};
addDeep(AMAZON_ASINS, 'amazon', (asin) => `https://www.amazon.com/dp/${asin}`);
addDeep(BESTBUY_PRODUCTS, 'bestbuy', (path) => `https://www.bestbuy.com/product/${path}`);
addDeep(HOMEDEPOT_PRODUCTS, 'homedepot', (path) => `https://www.homedepot.com/p/${path}`);
addDeep(LOWES_PRODUCTS, 'lowes', (path) => `https://www.lowes.com/pd/${path}`);

/**
 * Products Amazon genuinely carries (verified listings). For the other
 * major appliances Amazon's catalog is spare parts — an Amazon button led
 * to a junk search page, so it is hidden and Best Buy fronts the CTA.
 */
const AMAZON_CARRIES = new Set<string>([
  ...Object.keys(AMAZON_ASINS),
  'kenmore-74025', // Amazon deal verified
  'whirlpool-wdf520padm', // Amazon deal verified
  'bosch-shp78cm5n', // Amazon deal verified
]);

/** Retailer-safe search terms for a product (curated query when available). */
export function searchTerms(p: Product): string {
  return SEARCH_QUERIES[p.id] ?? `${p.brand} ${p.model}`;
}

/** Retailers shown on CTAs: deep-linked retailers first, Amazon only when it carries the product. */
export function ctaRetailers(p: Product): Retailer[] {
  const deep = DEEP_LINKS[p.id] ?? [];
  const deepRets = deep.map((d) => d.retailer);
  const base = [...deepRets, ...p.retailers.filter((r) => !deepRets.includes(r))];
  const seen = new Set<string>();
  const out: Retailer[] = [];
  for (const r of base) {
    if (r === 'amazon' && !AMAZON_CARRIES.has(p.id)) continue;
    if (seen.has(r)) continue;
    seen.add(r);
    out.push(r);
  }
  return out;
}

export function retailerDestination(r: Retailer, p: Product): string {
  const deep = (DEEP_LINKS[p.id] ?? []).find((d) => d.retailer === r);
  if (deep) {
    return r === 'amazon' ? `${deep.url}${AMAZON_TAG ? `?tag=${encodeURIComponent(AMAZON_TAG)}` : ''}` : deep.url;
  }
  const term = searchTerms(p);
  switch (r) {
    case 'amazon':
      return `https://www.amazon.com/s?k=${q(term)}${amazonTag()}`;
    case 'bestbuy':
      return `https://www.bestbuy.com/site/searchpage.jsp?st=${q(term)}`;
    case 'lowes':
      return `https://www.lowes.com/search?searchTerm=${q(term)}`;
    case 'homedepot':
      return `https://www.homedepot.com/s/${q(term)}`;
  }
}

export type RetailerPriceView = { retailer: Retailer; price: number; best: boolean };

/**
 * Retailer prices for the "Compare prices across retailers" strip: only
 * retailers we actually link (ctaRetailers order), and only when there are
 * at least two of them — a single price adds nothing to compare.
 */
export function retailerPriceViews(p: Product): RetailerPriceView[] {
  const prices = new Map((p.retailerPrices ?? []).map((rp) => [rp.retailer, rp.price]));
  const rs = ctaRetailers(p).filter((r) => prices.has(r));
  if (rs.length < 2) return [];
  const min = Math.min(...rs.map((r) => prices.get(r)!));
  return rs.map((r) => ({ retailer: r, price: prices.get(r)!, best: prices.get(r) === min }));
}

/**
 * Cheapest price among the retailers we link (null when no prices).
 * Powers the "Best price" column of the comparison table.
 */
export function bestRetailerPrice(p: Product): RetailerPriceView | null {
  const strip = retailerPriceViews(p);
  if (strip.length) return strip.find((v) => v.best) ?? null;
  const prices = new Map((p.retailerPrices ?? []).map((rp) => [rp.retailer, rp.price]));
  const rs = ctaRetailers(p).filter((r) => prices.has(r));
  if (!rs.length) return null;
  const cheapest = rs.reduce((a, b) => (prices.get(b)! < prices.get(a)! ? b : a));
  return { retailer: cheapest, price: prices.get(cheapest)!, best: true };
}

export const RETAILER_LABELS: Record<Retailer, string> = {
  amazon: 'Amazon',
  bestbuy: 'Best Buy',
  lowes: 'Lowe’s',
  homedepot: 'Home Depot',
};

export const OTHER_RETAILER_LABELS: Record<Exclude<Retailer, 'amazon'>, string> = {
  bestbuy: 'Best Buy',
  lowes: 'Lowe’s',
  homedepot: 'Home Depot',
};

/** First-party route uses only known products and retailers. */
export function retailerUrl(r: Retailer, p: Product): string {
 return `/go/${encodeURIComponent(p.id)}/${r}`;
}
