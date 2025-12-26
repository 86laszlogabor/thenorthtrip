// components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div className="font-semibold text-slate-900">TheNorthTrip</div>
            <p className="max-w-xl">
              Affiliate disclosure (short): We may earn a commission when you
              book through our links. It doesn’t change your price.
            </p>
            <p className="text-xs">
              Disclaimer: Terms and prices can change. Always confirm at
              booking.
            </p>
          </div>

          <div className="flex gap-6">
            <Link className="hover:underline" href="/policy">
              Policy
            </Link>
            <Link className="hover:underline" href="/rental-terms-prices">
              Rental Terms & Prices
            </Link>
            <Link className="hover:underline" href="/get-help">
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
