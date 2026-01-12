"use client";

import { useEffect, useMemo, useState } from "react";

const PRIMARY_NAV = [
 { href: "/", label: "Home" },
 { href: "/car-rental-helsinki", label: "Car Rental" },
 { href: "/lapland-tours", label: "Lapland" },
 { href: "/camper-rental-finland", label: "Camper" },
 { href: "/blog", label: "Blog" },
];

const MORE_NAV = [
 { href: "/getting-around-finland", label: "Transport" },
 { href: "/rental-terms-prices", label: "Rental Terms" },
 { href: "/get-help", label: "Help" },
 { href: "/policy", label: "Policy" },
];

export default function SiteHeader() {
 const [open, setOpen] = useState(false);
 const [moreOpen, setMoreOpen] = useState(false);

 useEffect(() => {
 const onKey = (e: KeyboardEvent) => {
 if (e.key === "Escape") {
 setOpen(false);
 setMoreOpen(false);
 }
 };
 window.addEventListener("keydown", onKey);

 // click outside closes More
 const onClick = () => setMoreOpen(false);
 window.addEventListener("click", onClick);

 return () => {
 window.removeEventListener("keydown", onKey);
 window.removeEventListener("click", onClick);
 };
 }, []);

 const cta = useMemo(() => ({ href: "/car-rental-helsinki", label: "Compare Best Options" }),
 []);

 return (<header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
 <div className="mx-auto max-w-6xl px-4">
 <div className="flex h-16 items-center justify-between gap-3">
 {/* Brand */}
 <a href="/" className="flex min-w-0 items-center gap-3">
 <span className="whitespace-nowrap text-base font-semibold tracking-tight text-slate-900">
 TheNorthTrip
 </span>
 <span className="hidden whitespace-nowrap text-sm text-slate-500 xl:inline">
 Decision-first Finland travel.
 </span>
 </a>

 {/* Desktop nav */}
 <nav className="hidden items-center gap-4 lg:flex">
 {PRIMARY_NAV.map((i) => (<a
 key={i.href}
 href={i.href}
 className="whitespace-nowrap text-sm font-medium text-slate-700 hover:text-slate-900"
 >
 {i.label}
 </a>))}

 {/* More dropdown */}
 <div className="relative" onClick={(e) => e.stopPropagation()}>
 <button
 type="button"
 aria-haspopup="menu"
 aria-expanded={moreOpen}
 onClick={() => setMoreOpen((v) =>!v)}
 className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
 >
 More <span className="text-slate-400">▾</span>
 </button>

 {moreOpen && (<div
 role="menu"
 className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
 >
 <div className="p-2">
 {MORE_NAV.map((i) => (<a
 key={i.href}
 href={i.href}
 role="menuitem"
 className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
 >
 {i.label}
 </a>))}
 </div>
 </div>)}
 </div>
 </nav>

 {/* Actions */}
 <div className="flex items-center gap-2">
 <a
 href={cta.href}
 className="hidden whitespace-nowrap rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 md:inline-flex"
 >
 {cta.label}
 </a>

 <button
 type="button"
 aria-label="Open menu"
 aria-expanded={open}
 onClick={() => setOpen((v) =>!v)}
 className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 lg:hidden"
 >
 Menu
 </button>
 </div>
 </div>

 {/* Mobile menu */}
 {open && (<div className="pb-4 lg:hidden">
 <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
 <a
 href={cta.href}
 className="inline-flex w-full justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
 onClick={() => setOpen(false)}
 >
 {cta.label}
 </a>

 <div className="mt-3 grid gap-1">
 {[...PRIMARY_NAV,...MORE_NAV].map((i) => (<a
 key={i.href}
 href={i.href}
 onClick={() => setOpen(false)}
 className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
 >
 {i.label}
 </a>))}
 </div>
 </div>
 </div>)}
 </div>
 </header>);
}

