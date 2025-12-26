import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/car-rental-helsinki", label: "Car Rental Helsinki" },
  { href: "/lapland-tours", label: "Lapland Tours" },
  { href: "/camper-rental-finland", label: "Camper Rental Finland" },
  { href: "/getting-around-finland", label: "Getting Around Finland" },
  { href: "/rental-terms-prices", label: "Rental Terms & Prices" },
  { href: "/blog", label: "Blog" },
  { href: "/policy", label: "Policy" },
  { href: "/get-help", label: "Get Help" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-site px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          TheNorthTrip
        </Link>

        <nav className="hidden lg:flex items-center gap-4 text-sm" aria-label="Primary navigation">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-brand-text/80 hover:text-brand-text">
              {i.label}
            </Link>
          ))}
        </nav>

        <nav className="lg:hidden" aria-label="Mobile navigation">
          <details className="relative">
            <summary className="list-none cursor-pointer select-none rounded-card border border-black/10 px-3 py-2 text-sm">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-72 rounded-card bg-white shadow-soft border border-black/5 p-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="block rounded-card px-3 py-2 text-sm text-brand-text/80 hover:bg-brand-bluegray hover:text-brand-text"
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
