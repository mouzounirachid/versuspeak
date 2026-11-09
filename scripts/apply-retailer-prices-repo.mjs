/**
 * Insère `retailerPrices` dans les 40 produits du dépôt live (repo GitHub).
 *
 * Règles de cohérence (inchangées) :
 *  - min(retailerPrices) === product.price (le prix affiché = le moins cher) ;
 *  - le revendeur du deal Black Friday garde le prix courant du produit ;
 *  - les autres revendeurs : +2 % à +8 %, arrondi marchand réaliste.
 *
 * Idempotent : relancer le script ne duplique pas les champs.
 */
import fs from 'fs';

const BASE = '/home/z/my-project/repo-live/versuspeak-main';

const FILES = [
  'src/lib/products-refrigerators.ts',
  'src/lib/products-washers.ts',
  'src/lib/products-dryers.ts',
  'src/lib/products-dishwashers.ts',
  'src/lib/products-tvs.ts',
];

/** [id, [[retailer, price], ...]] — l'ordre suit le tableau `retailers` du produit. */
const PRICES = {
  'src/lib/products-refrigerators.ts': [
    ['lg-lryxs2706s', [['amazon', 3099], ['bestbuy', 2899], ['lowes', 2949]]],
    ['samsung-rf29bb8900', [['amazon', 2949], ['bestbuy', 2749], ['homedepot', 2849]]],
    ['bosch-b36cl80ens', [['amazon', 3999], ['bestbuy', 3749], ['homedepot', 3849]]],
    ['ge-profile-pwe23kynfs', [['amazon', 2899], ['bestbuy', 2749], ['homedepot', 2799]]],
    ['whirlpool-wrf535swhz', [['amazon', 1999], ['lowes', 1899], ['homedepot', 1949]]],
    ['maytag-mfi2570fez', [['lowes', 2199], ['homedepot', 2249]]],
    ['frigidaire-grfs2853af', [['lowes', 2249], ['homedepot', 2349], ['amazon', 2399]]],
    ['kenmore-74025', [['amazon', 1699], ['lowes', 1749]]],
  ],
  'src/lib/products-washers.ts': [
    ['lg-wm4000hwa', [['amazon', 699], ['bestbuy', 678], ['lowes', 648]]],
    ['electrolux-elfw7637at', [['amazon', 1499], ['lowes', 1399], ['homedepot', 1449]]],
    ['samsung-wf53bb8900', [['amazon', 1799], ['bestbuy', 1649], ['homedepot', 1699]]],
    ['ge-gfw655ssvww', [['amazon', 1349], ['lowes', 1279], ['homedepot', 1249]]],
    ['speed-queen-tc5', [['amazon', 1699], ['bestbuy', 1649]]],
    ['maytag-mvw6230hw', [['lowes', 869], ['homedepot', 839], ['amazon', 899]]],
    ['whirlpool-wfw6620rw', [['lowes', 999], ['amazon', 1049]]],
    ['lg-wt7300cw', [['amazon', 1249], ['bestbuy', 1179], ['lowes', 1149]]],
  ],
  'src/lib/products-dryers.ts': [
    ['lg-dlex4000w', [['amazon', 799], ['bestbuy', 725], ['lowes', 749], ['homedepot', 769]]],
    ['electrolux-elfe7637at', [['amazon', 1599], ['bestbuy', 1499], ['lowes', 1549]]],
    ['samsung-dve53bb8900', [['amazon', 1649], ['bestbuy', 1549], ['lowes', 1599]]],
    ['ge-gfd65essvww', [['amazon', 1299], ['bestbuy', 1229], ['lowes', 1249], ['homedepot', 1199]]],
    ['speed-queen-df7', [['amazon', 2299], ['bestbuy', 2199]]],
    ['maytag-med6230hw', [['amazon', 829], ['bestbuy', 760], ['lowes', 789], ['homedepot', 799]]],
    ['whirlpool-wed6620rw', [['amazon', 1199], ['bestbuy', 1099], ['lowes', 1129]]],
    ['amana-ned4655ew', [['lowes', 699], ['homedepot', 729]]],
  ],
  'src/lib/products-dishwashers.ts': [
    ['bosch-shp78cm5n', [['amazon', 1449], ['bestbuy', 1349], ['homedepot', 1399]]],
    ['miele-g7566-scvi', [['amazon', 2699], ['bestbuy', 2599]]],
    ['lg-ldp6810ss', [['amazon', 1199], ['bestbuy', 1099], ['lowes', 1129]]],
    ['kitchenaid-kdte204kps', [['amazon', 1099], ['bestbuy', 1034], ['homedepot', 1069]]],
    ['ge-profile-pdt755syvfs', [['amazon', 1349], ['lowes', 1299], ['homedepot', 1339]]],
    ['samsung-dw80cg4020', [['amazon', 449], ['bestbuy', 399], ['homedepot', 419]]],
    /* dérivés (prix repo 999 / 649) */
    ['frigidaire-gallery-fgid2479sf', [['lowes', 999], ['homedepot', 1049], ['amazon', 1099]]],
    ['whirlpool-wdf520padm', [['amazon', 649], ['lowes', 679], ['homedepot', 699]]],
  ],
  'src/lib/products-tvs.ts': [
    /* dérivés : prix repo + revendeur du deal garde le prix affiché, l'autre +4 à +6 % */
    ['lg-c5-oled-65', [['amazon', 1449], ['bestbuy', 1399]]],      // deal Best Buy 1399
    ['tcl-qm8l-65', [['amazon', 1299], ['bestbuy', 1349]]],        // deal Amazon 1299
    ['samsung-s95f-65', [['amazon', 2399], ['bestbuy', 2499]]],    // deal Amazon 2399
    ['hisense-u8qg-65', [['amazon', 999], ['bestbuy', 1049]]],     // deal Amazon 999
    ['sony-bravia-7-65', [['amazon', 1598], ['bestbuy', 1699]]],   // deal Amazon 1598
    ['samsung-frame-55', [['amazon', 898], ['bestbuy', 949]]],     // deal Amazon 898
    ['tcl-qm7l-65', [['amazon', 1090], ['bestbuy', 1149]]],        // deal Amazon 1090
    ['roku-pro-65', [['amazon', 849], ['bestbuy', 899]]],          // deal Amazon 849
  ],
};

/* ---------------------------- parsing des produits --------------------------- */

function parseProducts(src) {
  const out = [];
  const re = /id:\s*'([^']+)'[\s\S]*?price:\s*(\d+)[\s\S]*?retailers:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({
      id: m[1],
      price: Number(m[2]),
      retailers: [...m[3].matchAll(/'(\w+)'/g)].map((x) => x[1]),
    });
  }
  return out;
}

const problems = [];
let total = 0;

for (const rel of FILES) {
  const path = `${BASE}/${rel}`;
  const src = fs.readFileSync(path, 'utf8');
  const products = parseProducts(src);
  const lists = PRICES[rel] ?? [];
  const byId = Object.fromEntries(products.map((p) => [p.id, p]));

  if (products.length !== 8) problems.push(`${rel}: ${products.length} produits parsés (attendu 8)`);
  if (lists.length !== 8) problems.push(`${rel}: ${lists.length} listes de prix (attendu 8)`);

  for (const [id, entries] of lists) {
    total++;
    const p = byId[id];
    if (!p) {
      problems.push(`${rel}: id inconnu ${id}`);
      continue;
    }
    if (p.retailerPricesDone) continue;
    // validation de l'invariant min === price
    const min = Math.min(...entries.map((e) => e[1]));
    if (min !== p.price) {
      problems.push(`${id}: min(liste) $${min} ≠ price repo $${p.price} → corrigé sur $${p.price}`);
      const cheapest = entries.reduce((a, b) => (b[1] < a[1] ? b : a));
      cheapest[1] = p.price; // le moins cher doit égaler le prix affiché
    }
    for (const [retailer] of entries) {
      if (!p.retailers.includes(retailer)) problems.push(`${id}: ${retailer} absent de retailers [${p.retailers}]`);
    }
    p.retailerPricesDone = true;
  }
  // produits sans liste ?
  for (const p of products) {
    if (!p.retailerPricesDone) problems.push(`${rel}: PAS de liste pour ${p.id}`);
  }
}

if (problems.length) {
  console.log('=== PROBLÈMES / AJUSTEMENTS ===');
  for (const pr of problems) console.log(' • ' + pr);
} else {
  console.log('=== Validation OK : 40 listes, invariants respectés ===');
}

/* ------------------------------- insertion ---------------------------------- */

let inserted = 0;
for (const rel of FILES) {
  const path = `${BASE}/${rel}`;
  let src = fs.readFileSync(path, 'utf8');
  const lists = Object.fromEntries((PRICES[rel] ?? []).map(([id, entries]) => [id, entries]));
  const re = /(id:\s*'([^']+)'[\s\S]*?retailers:\s*\[[^\]]*\],)(\n)/g;
  src = src.replace(re, (whole, head, id, nl) => {
    const entries = lists[id];
    if (!entries) return whole; // pas de liste → intact
    if (/retailerPrices/.test(whole)) return whole; // déjà inséré (idempotent)
    inserted++;
    const lines = entries
      .map(([r, price]) => `      { retailer: '${r}', price: ${price} },`)
      .join('\n');
    return `${head}\n    retailerPrices: [\n${lines}\n    ],${nl}`;
  });
  fs.writeFileSync(path, src);
}

console.log(`=== retailerPrices insérés : ${inserted}/40 ===`);
