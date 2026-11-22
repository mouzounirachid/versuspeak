 'use client';
import { CalendarCountdown } from './countdown';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/lib/data';
import type { View } from '@/lib/types';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
import { HomeView, DealsView, ArticlesView, ArticleView, MethodologyView } from './editorial-view';
import { PrivacyView, DisclosureView, TermsView, ContactView, AboutView } from './legal-views';
import { CatalogCategoryView, CatalogComparator } from './catalog-view';
import { AdSlot } from './ad-slot';
const views: View[]=['home','refrigerators','washers','dryers','dishwashers','tvs','compare','deals','articles','methodology','about','privacy','terms','contact','disclosure'];
export function VersusPeakApp({initialView='home',articleSlug=null}:{initialView?:View;articleSlug?:string|null}){
 const router=useRouter();const view=initialView;const category=CATEGORIES.find(c=>c.id===view);
 useEffect(()=>{const legacy=window.location.hash.slice(1).replace(/^\//,'');const [name]=legacy.split('/');if(views.includes(name as View))router.replace(name==='home'?'/':`/${legacy}`)},[router]);
 return <div className="flex min-h-screen flex-col bg-white text-stone-900"><SiteHeader current={view}/><CalendarCountdown/><main className="flex-1">{view==='home'&&<HomeView/>}{category&&<CatalogCategoryView category={category}/>}{view==='compare'&&<CatalogComparator/>}{view==='deals'&&<DealsView/>}{view==='articles'&&(articleSlug?<ArticleView slug={articleSlug}/>:<ArticlesView/>)}{view==='methodology'&&<MethodologyView/>}{view==='about'&&<AboutView/>}{view==='contact'&&<ContactView/>}{view==='privacy'&&<PrivacyView/>}{view==='terms'&&<TermsView/>}{view==='disclosure'&&<DisclosureView/>}{['home','articles','refrigerators','washers','dryers','dishwashers','tvs'].includes(view)&&<AdSlot id="editorial-bottom"/>}</main><SiteFooter/></div>;
}
