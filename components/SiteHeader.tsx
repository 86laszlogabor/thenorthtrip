"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/car-rental-helsinki", label: "Car rental" },
  { href: "/camper-rental-finland", label: "Camper rental" },
  { href: "/lapland-tours", label: "Lapland tours" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-extrabold tracking-tight">
          TheNorthTrip
        </Link>

        <nav className="hidden gap-1 sm:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-lg px-3 py-2 text-sm font-semibold",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/offer-checklist"
          className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600"
        >
          Free checklist
        </Link>
      </div>
    </header>
  );
}
