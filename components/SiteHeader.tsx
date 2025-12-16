"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { href: "/car-rental-helsinki", label: "Car rental" },
  { href: "/camper-rental-finland", label: "Camper rental" },
  { href: "/lapland-tours", label: "Lapland tours" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  function handleBack() {
    // Real back if possible, fallback to blog/home if user landed directly.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    // fallback: if on a blog post, go to blog index, else home
    if (pathname?.startsWith("/blog/")) router.push("/blog");
    else router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Left: Back + Home */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleBack}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            ← Back
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            aria-label="Home"
          >
            ⌂ Home
          </Link>
        </div>

        {/* Center: Brand (clickable) */}
        <Link href="/" className="hidden font-extrabold tracking-tight sm:block">
          TheNorthTrip
        </Link>

        {/* Right: Nav + CTA */}
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active =
                pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/offer-checklist"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600"
          >
            Free checklist
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="border-t border-slate-200 bg-white md:hidden">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
          {nav.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition",
                  active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100",
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
