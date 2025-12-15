import type { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { baseMetadata } from "@/lib/seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/SEOJsonLd";

export const metadata: Metadata = baseMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white">
        <OrganizationJsonLd />
        <WebSiteJsonLd />

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <SiteHeader />
        <div className="relative">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
