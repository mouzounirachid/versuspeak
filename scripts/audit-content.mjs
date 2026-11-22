import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('../src/', import.meta.url).pathname;
const banned = [/Lab-Tested/i,/VersusPeak Lab\b/i,/we (buy every|bought|tested|ran both)/i,/400\+\s*(lab|hours)/i,/prices verified/i,/verified early pricing/i,/up to 48%/i,/versuspeak-20/];
let errors=0;
function walk(dir){for(const entry of readdirSync(dir)){const path=join(dir,entry);if(statSync(path).isDirectory())walk(path);else if(/\.(ts|tsx)$/.test(entry)){const text=readFileSync(path,'utf8');for(const pattern of banned)if(pattern.test(text)){console.error(path,pattern.toString());errors++;}}}}
walk(root);
if(errors)process.exitCode=1;else console.log('Content audit passed: no obsolete lab, score-tag or promotional claim patterns found. This is not a factual or legal certification.');
