import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { Suspense } from "react";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Analytics from "@/components/Analytics";
import StickyCtaBar from "@/components/StickyCtaBar";
import UtmCapture from "@/components/UtmCapture";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TheNorthTrip",
  description: "Decision-first guides for rentals and tours in Finland and the Nordics.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 pb-20 sm:pb-0">
        {plausibleDomain ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        ) : null}

        {/* useSearchParams() in client component needs Suspense in App Router */}
        <Suspense fallback={null}>
          <UtmCapture />
        </Suspense>

        <Analytics />

        <SiteHeader />
        {children}
        <SiteFooter />

        <StickyCtaBar />
      </body>
    </html>
  );
}
