"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA_BY_PILLAR } from "@/lib/cta";
import { PillarKey } from "@/lib/blog";

const PILLARS: PillarKey[] = [
  "/car-rental-helsinki",
  "/camper-rental-finland",
  "/lapland-tours",
];

// Egyszerű route → pillar mapping.
// (Ha később külön route-ok kellenek, ide nyúlsz, nem 6 helyre.)
function getPillarForPath(pathname: string): PillarKey | null {
  // Ha blog vagy főoldal, akkor default a car, vagy null.
  // Itt szándékosan nem “okoskodunk” a slug alapján.
  if (pathname === "/" || pathname.startsWith("/blog")) return "/car-rental-helsinki";

  // Pontos egyezés a pillarekhez
  const hit = PILLARS.find((p) => pathname === p);
  if (hit) return hit;

  // Egyéb útvonalak: hagyjuk, ne zavarjon
  return null;
}

export default function StickyCtaBar() {
  const pathname = usePathname();

  // Ne legyen “CTA a CTA-n”: ne jelenjen meg a checklist oldalon
  if (pathname === "/offer-checklist") return null;

  const pillar = getPillarForPath(pathname);
  if (!pillar) return null;

  const cta = CTA_BY_PILLAR[pillar];

  // Ne jelenjen meg a saját primary céloldalán sem
  if (pathname === cta.primary.href) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-slate-900">
            {cta.title}
          </div>
          <div className="hidden truncate text-xs text-slate-600 sm:block">
            {cta.description}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={cta.secondary.href}
            className="hidden rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:inline-flex"
          >
            {cta.secondary.label}
          </Link>

          <Link
            href={cta.primary.href}
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600"
          >
            {cta.primary.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
