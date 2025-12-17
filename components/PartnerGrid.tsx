// components/PartnerGrid.tsx

import { PARTNERS, type PartnerKey } from "@/lib/partners";
import SponsoredLink from "@/components/SponsoredLink";
import { gridPlacement } from "@/lib/placements";

type Props = {
  keys: PartnerKey[];
  ctaLabel?: string;
};

function badgeClass(badge?: string) {
  switch (badge) {
    case "Top pick":
      return "bg-black text-white";
    case "Local":
      return "bg-white text-slate-900 border border-slate-300";
    case "Compare":
      return "bg-blue-600 text-white";
    case "Winter-ready":
      return "bg-slate-900 text-white";
    case "Backup":
      return "bg-slate-200 text-slate-800";
    case "Direct":
      return "bg-emerald-600 text-white";
    default:
      return "bg-slate-200 text-slate-800";
  }
}

export default function PartnerGrid({ keys, ctaLabel = "See options" }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {keys.map((key, idx) => {
        const p = PARTNERS[key];

        return (
          <div
            key={key}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-bold text-slate-900">{p.name}</div>
                <div className="mt-1 text-sm text-slate-600">{p.blurb}</div>
              </div>

              {p.badge ? (
                <span
                  className={
                    "shrink-0 rounded-full px-2 py-1 text-xs font-semibold " +
                    badgeClass(p.badge)
                  }
                >
                  {p.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-4">
              <SponsoredLink
                href={p.href ?? "tbd"}
                label={ctaLabel}
                partner={p.key}
                placement={gridPlacement(idx)}
              />
            </div>

            {p.status === "placeholder" && (
              <div className="mt-3 text-xs text-slate-500">Coming soon</div>
            )}

            {p.note ? (
              <div className="mt-2 text-xs text-slate-500">{p.note}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
