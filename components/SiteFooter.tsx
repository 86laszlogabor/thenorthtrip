import Link from "next/link";
import SponsoredLink from "@/components/SponsoredLink";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-lg font-extrabold tracking-tight text-slate-900">TheNorthTrip</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Decision-first guides for rentals and tours in Finland and the Nordics. No SEO junk. Just
              the stuff that helps you book without surprises.
            </p>

            <div className="mt-5">
              <Link
                href="/offer-checklist"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
              >
                Free booking checklist
              </Link>
            </div>
          </div>

          {/* Guides */}
          <div>
            <div className="text-sm font-bold text-slate-900">Guides</div>
            <div className="mt-3 space-y-2 text-sm">
              <Link
                className="block text-slate-700 hover:text-slate-900 hover:underline"
                href="/car-rental-helsinki"
              >
                Car rental Helsinki
              </Link>
              <Link
                className="block text-slate-700 hover:text-slate-900 hover:underline"
                href="/camper-rental-finland"
              >
                Camper rental Finland
              </Link>
              <Link
                className="block text-slate-700 hover:text-slate-900 hover:underline"
                href="/lapland-tours"
              >
                Lapland tours
              </Link>
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="text-sm font-bold text-slate-900">Partners</div>
            <div className="mt-3 space-y-3 text-sm">
              <Link
                className="block text-slate-700 hover:text-slate-900 hover:underline"
                href="/car-rental-helsinki"
              >
                Car rental partners
              </Link>

              <SponsoredLink
                href="https://www.discovercars.com?a_aid=86laszlogabor"
                label="DiscoverCars: compare prices"
                placement="footer"
                partner="discovercars"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
              />

              <div className="text-xs text-slate-500">Some links may be sponsored.</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-bold text-slate-900">Contact</div>

            <div className="mt-3 space-y-4 text-sm text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">Customer support & help</div>
                <a
                  className="mt-1 block font-semibold text-slate-900 hover:underline"
                  href="mailto:hello@thenorthtrip.com"
                >
                  hello@thenorthtrip.com
                </a>
                <div className="mt-1 text-xs text-slate-500">
                  Booking questions, site issues, general help.
                </div>
              </div>

              <div>
                <div className="font-semibold text-slate-900">Partnerships & collaborations</div>
                <a
                  className="mt-1 block font-semibold text-slate-900 hover:underline"
                  href="mailto:partners@thenorthtrip.com"
                >
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
          <div>Decision-first guidance. Some links are sponsored and click-tracked.</div>
        </div>
      </div>
    </footer>
  );
}
