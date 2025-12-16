import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-slate-900"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            N
          </span>
          <span className="tracking-tight">TheNorthTrip</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items hookup gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/car-rental-helsinki" className="hover:text-slate-900">
            Car rental
          </Link>
          <Link href="/lapland-tours" className="hover:text-slate-900">
            Lapland tours
          </Link>
          <Link href="/camper-rental-finland" className="hover:text-slate-900">
            Camper rental
          </Link>
          <Link href="/blog" className="hover:text-slate-900">
            Blog
          </Link>

          {/* Secondary utility link – ne legyen egyenrangú */}
          <Link
            href="/pages"
            className="text-slate-500 hover:text-slate-700"
          >
            All pages
          </Link>

          {/* PRIMARY CTA */}
          <Link
            href="/offer-checklist"
            className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            Offer checklist
          </Link>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900"
          >
            Home
          </Link>
          <Link
            href="/offer-checklist"
            className="rounded-lg bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
          >
            Checklist
          </Link>
        </div>
      </div>
    </header>
  );
}
