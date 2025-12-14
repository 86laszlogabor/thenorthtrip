// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Nordic Rentals & Tours",
  description: "Car rental Helsinki, camper rental Finland, and Lapland tours. Transparent pricing and booking sanity-checks.",
};

function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-gray-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-blue-600/20 ring-1 ring-white/15" />
          <span className="text-sm font-semibold tracking-wide text-white/90">Nordic Rentals & Tours</span>
        </Link>

        <nav className="hidden gap-2 sm:flex">
          <Link
            href="/car-rental-helsinki"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Car Rental Helsinki
          </Link>
          <Link
            href="/camper-rental-finland"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Camper Rental Finland
          </Link>
          <Link
            href="/lapland-tours"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Lapland Tours
          </Link>
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get Help
          </Link>
        </nav>

        <Link
          href="/get-help"
          className="sm:hidden inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Get Help
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/60 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nordic Rentals & Tours. Placeholder legal text.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms
            </Link>
            <Link href="/affiliate-disclosure" className="hover:text-white/80">
              Affiliate disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <SiteHeader />
        <div className="relative">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
