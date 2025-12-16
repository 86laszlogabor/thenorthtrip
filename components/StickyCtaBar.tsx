"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA } from "@/lib/cta";

export default function StickyCtaBar() {
  const pathname = usePathname();

  // Opcionális: ne jelenjen meg a checklist oldalon, hogy ne legyen “CTA a CTA-n”
  if (pathname === CTA.primary.href) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="hidden sm:block">
          <div className="text-sm font-semibold text-slate-900">
            Don’t book blind.
          </div>
          <div className="text-xs text-slate-600">
            Deposits, debit cards, winter add-ons, inclusions. In plain English.
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2 sm:w-auto">
          <Link
            href={CTA.secondary.href}
            className="w-1/2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 sm:w-auto"
          >
            {CTA.secondary.label}
          </Link>
          <Link
            href={CTA.primary.href}
            className="w-1/2 rounded-xl bg-orange-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-orange-500 sm:w-auto"
          >
            {CTA.primary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
