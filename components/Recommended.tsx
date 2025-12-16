// components/Recommended.tsx
import SponsoredLink from "./SponsoredLink";
import { PARTNERS, PartnerKey } from "@/lib/partners";

type Item = PartnerKey;

type Props = {
  title?: string;
  subtitle?: string;
  items: Item[];
  ctaLabel?: string;
};

export default function Recommended({
  title = "Recommended options",
  subtitle = "Hand-picked options with a clear role. Some links may be sponsored.",
  items,
  ctaLabel = "Open",
}: Props) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((key) => {
          const p = PARTNERS[key];
          const href = p?.href || "#";
          const isPlaceholder = href === "#" || href.toLowerCase() === "tbd";

          return (
            <div
              key={p.key}
              className="rounded-2xl border border-white/10 bg-gray-950/30 p-5"
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
                <SponsoredLink
                  href={href}
                  label={ctaLabel}
                  className={[
                    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
                    isPlaceholder
                      ? "bg-white/10 text-white/50 cursor-not-allowed pointer-events-none"
                      : "bg-orange-600 hover:bg-orange-500 text-white",
                  ].join(" ")}
                />
                <div className="mt-2 text-xs text-white/50">
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
