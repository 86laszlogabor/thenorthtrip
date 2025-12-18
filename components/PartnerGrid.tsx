// components/PartnerGrid.tsx
import React from "react";
import TrackedExternal from "@/components/TrackedExternal";
import { PARTNERS, PartnerKey } from "@/lib/partners";

type Props = {
  partnerKeys: PartnerKey[];
  placement?: string;
  className?: string;
  variant?: "default" | "compact";
  ctaLabel?: string;
};

export default function PartnerGrid({
  partnerKeys,
  placement = "partner-grid",
  className = "",
  variant = "default",
  ctaLabel = "Check availability",
}: Props) {
  // Make TS stop caring about PARTNERS index signature
  const PARTNERS_MAP = PARTNERS as unknown as Record<string, any>;
  const keys = partnerKeys as unknown as string[];

  const partners = keys.map((k) => PARTNERS_MAP[k]).filter(Boolean);

  if (!partners.length) return null;

  const isCompact = variant === "compact";

  // Make TS stop caring about TrackedExternal prop types
  const TE: any = TrackedExternal as any;

  return (
    <section className={className}>
      <div
        className={[
          "grid gap-4",
          isCompact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        ].join(" ")}
      >
        {partners.map((p: any) => {
          const key = String(p?.key ?? "");
          const title = String(p?.name ?? p?.key ?? "Partner");
          const blurb = typeof p?.blurb === "string" ? p.blurb : "";
          const note = typeof p?.note === "string" ? p.note : "";
          const status = typeof p?.status === "string" ? p.status : "";
          const href = typeof p?.href === "string" ? p.href : "";

          const hasHref = href.length > 0;

          return (
            <div
              key={key || title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-base font-semibold text-slate-900">
                    {title}
                  </div>
                  {status ? (
                    <div className="mt-1 text-xs font-medium text-slate-500">
                      {status}
                    </div>
                  ) : null}
                </div>

                <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                  Sponsored
                </span>
              </div>

              {blurb ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {blurb}
                </p>
              ) : null}

              {note ? (
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {note}
                </p>
              ) : null}

              <div className="mt-4">
                {hasHref ? (
                  <TE
                    href={href}
                    label={`partner:${key}`}
                    placement={placement}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
                    rel="sponsored nofollow noopener"
                  >
                    {ctaLabel}
                  </TE>
                ) : (
                  <div className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500">
                    Coming soon
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
