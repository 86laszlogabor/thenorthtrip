// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "TheNorthTrip",
  description:
    "Decision-first Finland travel reference. Car rental, Lapland tours, camper rental, and getting around Finland without unpleasant surprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:ring-2 rounded-md"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="content">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
