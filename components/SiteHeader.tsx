import React from "react";

const nav = [
  { href: "/car-rental-helsinki", label: "Car rental" },
  { href: "/camper-rental-finland", label: "Camper" },
  { href: "/lapland-tours", label: "Lapland" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gray-800 border border-white/10" />
          <div>
            <div className="font-semibold text-white">NordicDrive</div>
            <div className="text-xs text-gray-400">Finland travel offers</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((x) => (
            <a
              key={x.href}
              href={x.href}
              className="px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              {x.label}
            </a>
          ))}
        </nav>

        <a
          href="/offer-checklist"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition"
        >
          Offer checklist
        </a>
      </div>
    </header>
  );
}
