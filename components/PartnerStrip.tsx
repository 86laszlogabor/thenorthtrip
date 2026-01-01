// components/PartnerStrip.tsx
import React from "react";
import CtaButton from "@/components/CtaButton";

export type Partner = {
  name: string;
  blurb: string;
  href: string;
  ctaLabel?: string;
  kind?: "aggregator" | "operator";
  newTab?: boolean;
  logoSrc?: string; // ✅ ADD: optional logo
};

export type PartnerSlot = Partner | { empty: true; label?: string };

type Props = {
  title?: string;
  subtitle?: string;
  partners: [PartnerSlot, PartnerSlot, PartnerSlot];
  intentHref: string;
  intentLabel?: string;
  note?: string;
};

function LogoFallback({ name }: { name: string }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold text-slate-700">
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default function PartnerStrip({
  title = "Compare partners (3 options)",
  subtitle = "Three slots. Clean choices. No endless lists.",
  partners,
  intentHref,
  intentLabel = "Open checklist",
  note = "Affiliate link. Prices and availability vary by dates and pickup.",
}: Props) {
  return (
    <section
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm"
      aria-label={title}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl">{subtitle}</p>
        </div>

        <div className="w-full md:w-auto">
          <CtaButton href={intentHref} variant="primary" full>
            {intentLabel}
          </CtaButton>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {partners.map((p, idx) =>
          "empty" in p ? (
            <div
              key={`empty-${idx}`}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">
                {p.label ?? "Partner slot"}
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Placeholder. We’ll add a verified partner here after validation.
              </p>
              <div className="mt-auto pt-4">
                <div className="h-10 w-full rounded-xl bg-slate-100" />
                <p className="mt-2 text-xs text-slate-500">Not available yet.</p>
              </div>
            </div>
          ) : (
            <div
              key={p.name}
              className="flex h-full flex-col rounded-2xl border border-orange-300 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {p.logoSrc ? (
                  <img
                    src={p.logoSrc}
                    alt={`${p.name} logo`}
                    className="h-10 w-10 rounded-lg object-contain bg-white border border-slate-200"
                  />
                ) : (
                  <LogoFallback name={p.name} />
                )}

                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">
                    {p.name}
                  </div>
                  <span className="mt-0.5 inline-block text-[11px] rounded-full border border-slate-200 px-2 py-0.5 text-slate-600">
                    {p.kind === "operator" ? "Operator" : "Marketplace"}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {p.blurb}
              </p>

              <div className="mt-auto pt-4">
                {p.newTab ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    <CtaButton href={p.href} variant="success" full>
                      {p.ctaLabel ?? "Check options"}
                    </CtaButton>
                  </a>
                ) : (
                  <CtaButton href={p.href} variant="success" full>
                    {p.ctaLabel ?? "Check options"}
                  </CtaButton>
                )}

                <p className="mt-2 text-xs text-slate-500">{note}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
