import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">
              TheNorthTrip
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Decision-first guides for rentals and tours in Finland and the Nordics. No SEO junk.
              Just stuff that helps you book without surprises.
            </p>

            <div className="mt-5">
              <Link
                href="/offer-checklist"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600"
              >
                Free booking checklist
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-900">Guides</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/car-rental-helsinki">
                Car rental Helsinki
              </Link>
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/camper-rental-finland">
                Camper rental Finland
              </Link>
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/lapland-tours">
                Lapland tours
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-900">Site</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/blog">
                Blog
              </Link>
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/affiliate-disclosure">
                Affiliate disclosure
              </Link>
              <Link className="block text-slate-700 hover:text-slate-900 hover:underline" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-900">Contact</div>

            <div className="mt-3 space-y-4 text-sm text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">Customer support & help</div>
                <a className="mt-1 block font-semibold text-slate-900 hover:underline" href="mailto:hello@thenorthtrip.com">
                  hello@thenorthtrip.com
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  Booking questions, site issues, general help.
                </div>
              </div>

              <div>
                <div className="font-semibold text-slate-900">Partnerships & collaborations</div>
                <a className="mt-1 block font-semibold text-slate-900 hover:underline" href="mailto:partners@thenorthtrip.com">
                  partners@thenorthtrip.com
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  Affiliate programs, local operators, joint promotions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} TheNorthTrip. All rights reserved.</div>
          <div>Some links may be sponsored. We prioritize decision-helpful guidance first.</div>
        </div>
      </div>
    </footer>
  );
}
