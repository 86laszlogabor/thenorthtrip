// components/PartnerGrid.tsx
import SponsoredLink from "./SponsoredLink";
import { PARTNERS, PartnerKey } from "@/lib/partners";

type Props = {
  keys: PartnerKey[];
  ctaLabel?: string;
};

export default function PartnerGrid({ keys, ctaLabel = "Check options" }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {keys.map((k) => {
        const p = PARTNERS[k];
        return (
          <div
            key={p.key}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-white">{p.name}</div>
                <div className="mt-1 text-sm text-white/70">{p.blurb}</div>
              </div>
              {p.badge ? (
                <div className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  {p.badge}
                </div>
              ) : null}
            </div>

            <div className="mt-4">
              <SponsoredLink href={p.href} label={ctaLabel} />
              <div className="mt-2 text-xs text-white/50">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
