import Link from "next/link";

const nav = [
  { href: "/car-rental-helsinki", label: "Car rental" },
  { href: "/camper-rental-finland", label: "Camper" },
  { href: "/lapland-tours", label: "Lapland tours" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white">thenorthtrip</span>
        </Link>

        <nav className="hidden items-center gap-5 sm:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-white/70 hover:text-white/90">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask
          </Link>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 pb-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
