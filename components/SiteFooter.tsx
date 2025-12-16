import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-extrabold text-slate-900">TheNorthTrip</div>
            <p className="mt-2">
              Decision-first travel guides for the Nordics.
            </p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Guides</div>
            <div className="mt-3 space-y-2">
              <Link href="/car-rental-helsinki">Car rental</Link>
              <Link href="/camper-rental-finland">Camper rental</Link>
              <Link href="/lapland-tours">Lapland tours</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Site</div>
            <div className="mt-3 space-y-2">
              <Link href="/blog">Blog</Link>
              <Link href="/offer-checklist">Checklist</Link>
              <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            </div>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Contact</div>
            <p className="mt-3">
              <a href="mailto:partners@thenorthtrip.com">
                partners@thenorthtrip.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} TheNorthTrip
        </div>
      </div>
    </footer>
  );
}
