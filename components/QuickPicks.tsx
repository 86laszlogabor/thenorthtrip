// components/QuickPicks.tsx
import React from "react";
import PartnerGrid from "@/components/PartnerGrid";
import type { PartnerKey } from "@/lib/partners";

type Placement =
  | "home_hero"
  | "home_cards"
  | "home_destinations"
  | "sticky_bar"
  | "helsinki_top"
  | "helsinki_ferries"
  | "helsinki_sauna"
  | "footer"
  | string;

type Props = {
  title: string;
  subtitle?: string;
  partnerKeys: PartnerKey[];
  ctaLabel?: string;
  placement: Placement;
  className?: string;
  variant?: "default" | "compact";
};

export default function QuickPicks({
  title,
  subtitle,
  partnerKeys,
  ctaLabel = "Check availability",
  placement,
  className = "",
  variant = "default",
}: Props) {
  return (
    <section className={["rounded-3xl bg-white p-6 sm:p-8", className].join(" ")}>
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-slate-700">{subtitle}</p>
      ) : null}

      <div className="mt-6">
        <PartnerGrid
          partnerKeys={partnerKeys}
          ctaLabel={ctaLabel}
          placement={placement}
          variant={variant}
        />
      </div>
    </section>
  );
}
