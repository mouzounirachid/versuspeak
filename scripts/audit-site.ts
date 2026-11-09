/**
 * Audit qualité du site VersusPeak — à lancer avec `bun scripts/audit-site.ts`.
 * Vérifie produits, deals, articles, images et invariants de prix
 * (dont les nouveaux champs retailerPrices par revendeur).
 */
import fs from 'fs';
import path from 'path';
import { ALL_PRODUCTS, CATEGORIES, DEALS } from '../src/lib/data';
import { ARTICLES } from '../src/lib/articles';
import { ctaRetailers, retailerPriceViews } from '../src/lib/links';
import type { Product } from '../src/lib/types';

const problems: string[] = [];
const warnings: string[] = [];
const I = (msg: string) => problems.push(msg);
const W = (msg: string) => warnings.push(msg);

/* --------------------------------- produits -------------------------------- */
const ids = new Set<string>();
for (const p of ALL_PRODUCTS as Product[]) {
  if (ids.has(p.id)) I(`id produit en doublon : ${p.id}`);
  ids.add(p.id);

  /* retailerPrices : complétude + invariant « prix affiché = prix le moins cher » */
  const rps = p.retailerPrices;
  if (!rps?.length) {
    I(`${p.id}: pas de retailerPrices`);
  } else {
    if (new Set(rps.map((rp) => rp.retailer)).size !== rps.length) I(`${p.id}: retailerPrices en doublon`);
    const minAll = Math.min(...rps.map((rp) => rp.price));
    if (minAll !== p.price) I(`${p.id}: min(retailerPrices) $${minAll} ≠ price $${p.price}`);
    for (const rp of rps) {
      if (!p.retailers.includes(rp.retailer)) W(`${p.id}: ${rp.retailer} prixé mais absent de retailers`);
      if (rp.price < p.price * 0.5) W(`${p.id}: prix ${rp.retailer} $${rp.price} très bas (−${Math.round((1 - rp.price / p.price) * 100)} %)`);
    }
  }

  /* cohérence scores */
  if (p.overall < 0 || p.overall > 10) I(`${p.id}: overall ${p.overall} hors bornes`);
  for (const s of p.subScores) if (s.score < 0 || s.score > 10) I(`${p.id}: sous-score ${s.label} = ${s.score} hors bornes`);
}

const perCat = new Map<string, number>();
for (const p of ALL_PRODUCTS as Product[]) perCat.set(p.category, (perCat.get(p.category) ?? 0) + 1);
for (const c of CATEGORIES) {
  const n = perCat.get(c.id) ?? 0;
  if (n !== 8) I(`catégorie ${c.id}: ${n} produits (attendu 8)`);
}

/* ---------------------------------- deals ---------------------------------- */
let pctMax = 0;
for (const d of DEALS) {
  if (!ids.has(d.productId)) I(`deal sur produit inconnu : ${d.productId}`);
  if (d.newPrice >= d.oldPrice) I(`deal ${d.productId}: newPrice $${d.newPrice} ≥ oldPrice $${d.oldPrice}`);
  const pct = (1 - d.newPrice / d.oldPrice) * 100;
  pctMax = Math.max(pctMax, pct);
  if (pct < 5) W(`deal ${d.productId}: remise faible ${pct.toFixed(1)} %`);
  if (pct > 70) W(`deal ${d.productId}: remise inhabituelle ${pct.toFixed(1)} %`);
}

/* --------------------------------- articles --------------------------------- */
const slugs = new Set<string>();
for (const a of ARTICLES) {
  if (slugs.has(a.slug)) I(`slug article en doublon : ${a.slug}`);
  slugs.add(a.slug);
  const img = path.join(process.cwd(), 'public', a.image);
  if (!fs.existsSync(img)) I(`image article manquante : ${a.image}`);
}

/* ------------------------------ images produits ----------------------------- */
const imgDir = path.join(process.cwd(), 'public', 'images', 'products');
const imgFiles = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter((f) => f.endsWith('.jpg')).length : 0;
if (imgFiles !== ALL_PRODUCTS.length) I(`images produits : ${imgFiles} fichiers pour ${ALL_PRODUCTS.length} produits`);
for (const p of ALL_PRODUCTS as Product[]) {
  const f = path.join(imgDir, `${p.id}.jpg`);
  if (!fs.existsSync(f)) W(`image produit manquante : ${p.id}.jpg`);
}

/* ------------------------- bandeaux prix par revendeur ---------------------- */
const stripCount = (ALL_PRODUCTS as Product[]).filter((p) => retailerPriceViews(p).length >= 2).length;

/* -------------------------- bestRetailerPrice ≠ null ------------------------ */
for (const p of ALL_PRODUCTS as Product[]) {
  const priced = ctaRetailers(p).filter((r) => p.retailerPrices?.some((rp) => rp.retailer === r));
  if (!priced.length) I(`${p.id}: aucun prix par revendeur sur les revendeurs liés`);
}

/* --------------------------------- résultat --------------------------------- */
console.log('=== RÉSULTATS AUDIT ===');
console.log(
  `Produits: ${ALL_PRODUCTS.length} | Catégories: ${CATEGORIES.length} | Deals: ${DEALS.length} (remise max ${pctMax.toFixed(1)}%) | Articles: ${ARTICLES.length} | Images produits: ${imgFiles} | Bandeaux prix: ${stripCount}/40`,
);
console.log(`\n--- PROBLÈMES (${problems.length}) ---`);
for (const pr of problems) console.log(' • ' + pr);
console.log(`\n--- AVERTISSEMENTS (${warnings.length}) ---`);
for (const w of warnings) console.log(' • ' + w);
if (problems.length) process.exit(1);
