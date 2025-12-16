import "./globals.css";
import type { Metadata } from "next";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FloatingHomeButton from "../components/FloatingHomeButton";
import StickyCtaBar from "../components/StickyCtaBar";

export const metadata: Metadata = {
  title: "TheNorthTrip – Get clear facts before you book",
  description:
    "Practical booking facts for Finland: deposits, debit cards, winter add-ons, and what’s actually included.",
  metadataBase: new URL("https://thenorthtrip.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <SiteHeader />

        <FloatingHomeButton />

        {/* fontos: sticky bar miatt padding-bottom */}
        <main className="pb-24">{children}</main>

        <SiteFooter />

        <StickyCtaBar />
      </body>
    </html>
  );
}
