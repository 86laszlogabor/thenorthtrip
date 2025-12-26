import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-site px-4 py-10 space-y-4">
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Footer navigation">
          <Link href="/" className="text-brand-text/80 hover:text-brand-text">Home</Link>
          <Link href="/car-rental-helsinki" className="text-brand-text/80 hover:text-brand-text">Car Rental Helsinki</Link>
          <Link href="/lapland-tours" className="text-brand-text/80 hover:text-brand-text">Lapland Tours</Link>
          <Link href="/camper-rental-finland" className="text-brand-text/80 hover:text-brand-text">Camper Rental Finland</Link>
          <Link href="/getting-around-finland" className="text-brand-text/80 hover:text-brand-text">Getting Around Finland</Link>
          <Link href="/rental-terms-prices" className="text-brand-text/80 hover:text-brand-text">Rental Terms &amp; Prices</Link>
          <Link href="/blog" className="text-brand-text/80 hover:text-brand-text">Blog</Link>
          <Link href="/policy" className="text-brand-text/80 hover:text-brand-text">Policy</Link>
          <Link href="/get-help" className="text-brand-text/80 hover:text-brand-text">Get Help</Link>
        </nav>

        <p className="text-sm text-brand-text/70">
          Affiliate disclosure (short): We may earn a commission when you book through our links. It doesn’t change your price, but it helps fund independent comparisons.
        </p>

        <p className="text-sm text-brand-text/70">
          Disclaimer: “Terms and prices can change. Always confirm at booking.”
        </p>

        <p className="text-sm text-brand-text/70">
          Contact: WhatsApp + email
        </p>

        <p className="text-sm text-brand-text/70">
          “Last verified” shown on: Rental Terms &amp; Prices + Policy + any comparison-heavy page
        </p>
      </div>
    </footer>
  );
}
