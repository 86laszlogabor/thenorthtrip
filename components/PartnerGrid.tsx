import { PARTNERS, PartnerKey } from "@/lib/partners";
import SponsoredLink from "./SponsoredLink";

type Props = {
  keys: PartnerKey[];
  ctaLabel?: string;
};

export default function PartnerGrid({ keys, ctaLabel = "Check options" }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {keys.map((k) => {
        const p = PARTNERS[k];
        if (!p) return null;

        return (
          <div
            key={p.key}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-slate-900">{p.name}</div>
                <div className="mt-1 text-sm text-slate-600">{p.blurb}</div>
              </div>

              {p.badge ? (
                <div className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {p.badge}
                </div>
              ) : null}
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
              <SponsoredLink
                href={p.href ?? "#"}
                label={ctaLabel}
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500 transition"
              />
              <div className="mt-2 text-xs text-slate-500">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
