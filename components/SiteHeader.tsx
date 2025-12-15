import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/car-rental-helsinki", label: "Car rental" },
  { href: "/camper-rental-finland", label: "Camper" },
  { href: "/lapland-tours", label: "Lapland" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgb(var(--bg))]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/10 bg-[rgb(var(--card))]" />
          <div className="leading-tight">
            <div className="font-semibold text-[rgb(var(--text))]">{SITE.name}</div>
            <div className="text-xs text-[rgb(var(--muted))]">{SITE.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[rgb(var(--muted))] md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-[rgb(var(--text))]"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/offer-checklist"
          className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Offer checklist
        </Link>
      </div>
    </header>
  );
}
