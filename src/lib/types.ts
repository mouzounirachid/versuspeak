export type CategoryId = 'refrigerators' | 'washers' | 'dryers' | 'dishwashers' | 'tvs';

export type BadgeStyle = 'top' | 'value' | 'premium' | 'great' | 'smart';

export type ProductBadge = {
  label: string;
  style: BadgeStyle;
};

export type SubScore = {
  label: string;
  score: number; // 0 - 10
};

export type Spec = {
  label: string;
  value: string;
};

export type Retailer = 'amazon' | 'bestbuy' | 'lowes' | 'homedepot';

/** Current regular price observed at one retailer ({@link Product.retailerPrices}). */
export type RetailerPrice = {
  retailer: Retailer;
  price: number;
};

export type Product = {
  id: string;
  category: CategoryId;
  rank: number; // position within its category ranking
  brand: string;
  model: string;
  name: string;
  badge?: ProductBadge;
  price: number;
  listPrice?: number;
  /**
   * Current regular price per retailer. Invariant maintained by the data:
   * the cheapest entry always equals {@link Product.price} (the price we
   * feature), so the "Best price" flag and the header price never disagree.
   * Black Friday deals live in DEALS and can go below these regular prices.
   */
  retailerPrices?: RetailerPrice[];
  overall: number; // 0 - 10
  subScores: SubScore[];
  specs: Spec[];
  pros: string[];
  cons: string[];
  verdict: string;
  reviewedAt: string;
  retailers: Retailer[];
};

export type GuideSection = {
  heading: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Category = {
  id: CategoryId;
  name: string;
  navLabel: string;
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  criteria: string[];
  guide: GuideSection[];
  faq: FaqItem[];
};

export type Deal = {
  productId: string;
  oldPrice: number;
  newPrice: number;
  retailer: string;
  note: string;
  expiresInDays: number;
  label?: string; // e.g. "Black Friday"
};

export type View =
  | 'home'
  | 'refrigerators'
  | 'washers'
  | 'dryers'
  | 'dishwashers'
  | 'tvs'
  | 'compare'
  | 'deals'
  | 'articles'
  | 'methodology'
  | 'privacy'
  | 'disclosure'
  | 'terms'
  | 'contact';

export type ArticleSection = {
  heading: string;
  body: string;
  list?: string[];
};

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  updated: string;
  readMinutes: number;
  tldr: string;
  image: string; // cover photo served from /public/images/articles
  sections: ArticleSection[];
  relatedLinks: { label: string; href: string }[];
};
