export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="text-sm font-semibold text-slate-900">
              TheNorthTrip
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Affiliate disclosure (short): We may earn a commission when you
              book through our links. It doesnâ€™t change your price, but it helps
              fund independent comparisons.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Disclaimer: Terms and prices can change. Always confirm at booking.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="grid gap-2 text-sm">
              <a
                href="/"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Home
              </a>
              <a
                href="/car-rental-helsinki"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Car Rental Helsinki
              </a>
              <a
                href="/lapland-tours"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Lapland Tours
              </a>
              <a
                href="/camper-rental-finland"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Camper Rental Finland
              </a>
              <a
                href="/getting-around-finland"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Getting Around Finland
              </a>
              <a
                href="/rental-terms-prices"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Rental Terms &amp; Prices
              </a>
              <a
                href="/policy"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Policy
              </a>
              <a
                href="/get-help"
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                Get Help
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-400">
          Â© {new Date().getFullYear()} TheNorthTrip
        </div>
      </div>
    </footer>
  );
}
