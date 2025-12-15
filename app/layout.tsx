import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "thenorthtrip",
    template: "%s | thenorthtrip",
  },
  description:
    "Small, high-intent guides about Finland bookings: deposit holds, debit rules, winter add-ons, and inclusions.",
  openGraph: {
    title: "thenorthtrip",
    description:
      "Small, high-intent guides about Finland bookings: deposit holds, debit rules, winter add-ons, and inclusions.",
    url: SITE.url,
    siteName: "thenorthtrip",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "thenorthtrip",
    description:
      "Small, high-intent guides about Finland bookings: deposit holds, debit rules, winter add-ons, and inclusions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-950 text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
