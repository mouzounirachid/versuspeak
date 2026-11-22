import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { TagManager } from '@/components/tag-manager';
const geistSans=Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
const sourceSerif=Source_Serif_4({variable:'--font-source-serif',subsets:['latin']});
const description='Source-linked appliance and TV buying guides. Compare manufacturer specifications and practical trade-offs, with transparent sources and evidence limits.';
export const viewport: Viewport={themeColor:'#ea580c'};
export const metadata: Metadata={metadataBase:new URL('https://versuspeak.com'),title:{default:'VersusPeak | Appliance & TV Buying Guides',template:'%s | VersusPeak'},description,applicationName:'VersusPeak',alternates:{canonical:'/'},authors:[{name:'Rachid Mouzouni'}],robots:{index:true,follow:true},icons:{icon:'/versuspeak-icon.svg'},openGraph:{title:'VersusPeak | Source-linked Buying Guides',description,url:'https://versuspeak.com',siteName:'VersusPeak',type:'website',locale:'en_US'},twitter:{card:'summary',title:'VersusPeak | Source-linked Buying Guides',description}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased bg-background text-foreground`}><TagManager/>{children}</body></html>;}
