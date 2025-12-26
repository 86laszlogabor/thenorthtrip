// components/SiteHeader.tsx
import Link from "next/link";
import CtaButton from "@/components/CtaButton";

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-14 flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">
            TheNorthTrip
          </Link>

          <nav className="hidden lg:flex items-center gap-4 text-sm text-slate-700">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CtaButton href="/car-rental-helsinki" variant="primary">
                Compare Best Options
              </CtaButton>
            </div>

            {/* simple mobile fallback: keep it minimal, no “burger app” right now */}
            <Link
              className="lg:hidden text-sm font-semibold underline underline-offset-4"
              href="/car-rental-helsinki"
            >
              Menu →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
