import Link from "next/link";

const NAV = [
  { href: "/car-rental-helsinki", label: "Car Rental" },
  { href: "/camper-rental-finland", label: "Camper Rental" },
  { href: "/lapland-tours", label: "Lapland Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/get-help", label: "Ask Before Booking" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-gray-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          thenorthtrip
        </Link>

        <nav className="hidden gap-6 text-sm text-white/75 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/get-help"
          className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Ask
        </Link>
      </div>
    </header>
  );
}
