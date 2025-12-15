import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-xl bg-blue-600/20 ring-1 ring-white/15" />
          <span className="text-sm font-semibold tracking-wide text-white/90">{SITE.brand}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-help"
            className="ml-1 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Book-safe check
          </Link>
        </nav>

        <Link
          href="/get-help"
          className="md:hidden inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Get Help
        </Link>
      </div>
    </header>
  );
}
