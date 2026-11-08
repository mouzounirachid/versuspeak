import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ea580c",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://versuspeak.com"),
  title: {
    default:
      "VersusPeak — Best Refrigerators, Washers, Dryers, Dishwashers & TVs of 2026 (Lab-Tested)",
    template: "%s | VersusPeak",
  },
  description:
    "Independent lab tests of refrigerators, washing machines, dryers, dishwashers, and TVs. 40 models scored, ranked, and priced — every unit bought at retail, no sponsored picks.",
  keywords: [
    "best appliances 2026",
    "best refrigerators 2026",
    "best washing machines 2026",
    "best dryers 2026",
    "best dishwashers 2026",
    "best tvs 2026",
    "best oled tv 2026",
    "tv reviews",
    "appliance reviews",
    "appliance comparison",
    "lab tested appliances",
  ],
  applicationName: "VersusPeak",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "VersusPeak Lab" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/versuspeak-icon.svg",
  },
  openGraph: {
    title: "VersusPeak — The Best Appliances & TVs, Tested and Ranked",
    description:
      "400+ hours of independent lab testing on refrigerators, washers, dryers, dishwashers, and TVs. See the 2026 winners with scores, prices, and buying guides.",
    url: "https://versuspeak.com",
    siteName: "VersusPeak",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VersusPeak — The Best Appliances & TVs, Tested and Ranked",
    description:
      "40 appliance and TV models lab-tested and ranked: refrigerators, washing machines, dryers, dishwashers, and TVs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
