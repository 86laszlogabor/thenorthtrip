import SponsoredLink from "./SponsoredLink";
import { PARTNERS, PartnerKey } from "@/lib/partners";

type Item = PartnerKey;

type Props = {
  title?: string;
  subtitle?: string;
  items: Item[];
  ctaLabel?: string;
  placement?: string; // e.g. "home_recommended", "pillar_car_rental"
};

export default function Recommended({
  title = "Recommended options",
  subtitle = "Hand-picked options with a clear role. Some links may be sponsored.",
  items,
  ctaLabel = "Check availability",
  placement = "recommended",
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-700">{subtitle}</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((key) => {
          const p = PARTNERS[key];
          if (!p) return null;

          const href = p.href ?? "#";

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
                  href={href}
                  label={ctaLabel}
                  placement={placement}
                  partner={p.key}
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
                />
                <div className="mt-2 text-xs text-slate-500">
                  Affiliate disclosure applies. Links may be sponsored.
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
