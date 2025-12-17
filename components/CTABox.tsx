"use client";

import Link from "next/link";
import { track } from "@/lib/track";

type CTABoxProps = {
  title: string;
  text: string;

  primaryHref: string;
  primaryLabel: string;

  secondaryHref?: string;
  secondaryLabel?: string;

  // analytics (optional)
  placement?: string; // e.g. "home_cta_box", "pillar_car_rental"
  primaryCta?: string; // e.g. "open_checklist"
  secondaryCta?: string; // e.g. "get_help"
};

export default function CTABox({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  placement = "cta_box",
  primaryCta = "primary",
  secondaryCta = "secondary",
}: CTABoxProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="max-w-2xl text-sm text-slate-700">{text}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          onClick={() => track("cta_click", { placement, label: primaryCta })}
          className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel ? (
          <Link
            href={secondaryHref}
            onClick={() => track("cta_click", { placement, label: secondaryCta })}
            className="rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
