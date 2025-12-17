import SponsoredLink from "@/components/SponsoredLink";
import { PARTNERS, type PartnerKey } from "@/lib/partners";
import type { Placement } from "@/lib/placements";

type Props = {
  keys: PartnerKey[];
  ctaLabel?: string;
  placement?: Placement;
};

export default function PartnerGrid({
  keys,
  ctaLabel = "Check availability",
  placement = "footer",
}: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {keys.map((k) => {
        const p = PARTNERS[k];
        if (!p) return null;

        return (
          <div
            key={p.key}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">{p.name}</div>
                <div className="mt-1 text-sm text-slate-700">{p.blurb}</div>
              </div>

              {p.badge ? (
                <div className="shrink-0 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {p.badge}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <SponsoredLink
                href={p.href ?? "#"}
                label={ctaLabel}
                placement={placement}
                partner={p.key}
              />
              <div className="mt-2 text-xs text-slate-500">
                {p.status === "live" ? "Affiliate disclosure applies." : "Coming soon"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
