"use client";

import { trackPlus } from "@/lib/track-plus";
import type { Placement } from "@/lib/placements";

type Props = {
  href: string;
  label: string;
  className?: string;
  placement?: Placement;
  partner?: string;
};

function isPlaceholderHref(href: string) {
  const h = (href || "").trim().toLowerCase();
  return !h || h === "#" || h === "tbd";
}

export default function SponsoredLink({
  href,
  label,
  className,
  placement = "footer",
  partner = "unknown",
}: Props) {
  const placeholder = isPlaceholderHref(href);

  if (placeholder) {
    return (
      <span
        aria-disabled="true"
        className={
          className ??
          "inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed"
        }
      >
        {label}
        <span className="ml-2 opacity-60">↗</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
      }
      onClick={() => trackPlus("affiliate_click", { placement, partner, href })}
    >
      {label}
      <span className="ml-2 opacity-70">↗</span>
    </a>
  );
}
