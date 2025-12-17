"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

const NAV = [
  { href: "/car-rental-helsinki", label: "Car rental", cta: "nav_car_rental" },
  { href: "/camper-rental-finland", label: "Camper rental", cta: "nav_camper_rental" },
  { href: "/lapland-tours", label: "Lapland tours", cta: "nav_lapland_tours" },
  { href: "/blog", label: "Blog", cta: "nav_blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900"
          onClick={() => track("cta_click", { placement: "header", cta: "logo_home" })}
        >
          TheNorthTrip
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => track("cta_click", { placement: "header_nav", cta: item.cta })}
                className={[
                  "rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/offer-checklist"
            onClick={() => track("cta_click", { placement: "header", cta: "free_checklist" })}
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
          >
            Free checklist
          </Link>

          <Link
            href="/get-help"
            onClick={() => track("cta_click", { placement: "header", cta: "get_help" })}
            className="hidden rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 sm:inline-flex"
          >
            Get help
          </Link>
        </div>
      </div>

      {/* Mobile nav (simple horizontal scroll) */}
      <div className="border-t border-slate-200 bg-white md:hidden">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => track("cta_click", { placement: "header_nav_mobile", cta: item.cta })}
                className={[
                  "shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
