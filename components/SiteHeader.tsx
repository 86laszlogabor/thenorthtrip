"use client";

import { useEffect, useMemo, useState } from "react";

const NAV = [
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const desktop = useMemo(() => NAV.slice(0, 9), []);
  const cta = { href: "/car-rental-helsinki", label: "Compare Best Options" };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="/" className="flex items-baseline gap-3">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              TheNorthTrip
            </span>
            <span className="hidden text-sm text-slate-500 sm:inline">
              Decision-first Finland travel.
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {desktop.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={cta.href}
              className="hidden rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 md:inline-flex"
            >
              {cta.label}
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <a
                  href={cta.href}
                  className="inline-flex w-full justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </a>
              </div>

              <div className="mt-3 grid gap-1">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {i.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}