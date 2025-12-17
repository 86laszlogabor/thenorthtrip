import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Analytics from "@/components/Analytics";

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
      <body className="bg-white text-slate-900">
        {plausibleDomain ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={plausibleDomain}
            strategy="afterInteractive"
          />
        ) : null}

        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
