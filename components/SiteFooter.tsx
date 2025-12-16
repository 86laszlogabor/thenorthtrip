import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold text-slate-900">TheNorthTrip</div>

            {/* "Mi ez az oldal" kontextus + affiliate hint (nem túl jogász) */}
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Practical booking facts for Finland: deposits, debit cards, winter add-ons, and what’s actually included.
            </p>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              Some links may be affiliate links. If you click and book, we may earn a commission at no extra cost to you.
              {" "}
              <Link className="underline underline-offset-4" href="/affiliate-disclosure">
                Affiliate disclosure
              </Link>
              .
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Explore</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li><Link className="hover:underline" href="/destinations">Destinations</Link></li>
              <li><Link className="hover:underline" href="/blog">Blog</Link></li>
              <li><Link className="hover:underline" href="/offer-checklist">Offer checklist</Link></li>

              {/* maradhatnak a money page-ek */}
              <li><Link className="hover:underline" href="/car-rental-helsinki">Car rental Helsinki</Link></li>
              <li><Link className="hover:underline" href="/lapland-tours">Lapland tours</Link></li>
              <li><Link className="hover:underline" href="/camper-rental-finland">Camper rental Finland</Link></li>
              <li><Link className="hover:underline" href="/get-help">Ask before booking</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link className="hover:underline" href="/affiliate-disclosure">Affiliate disclosure</Link></li>
              <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:underline" href="/terms">Terms</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              <li><Link className="hover:underline" href="/about">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TheNorthTrip.</p>
          <p>
            We may earn a commission from partner links. See{" "}
            <Link className="underline underline-offset-4" href="/affiliate-disclosure">
              disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
