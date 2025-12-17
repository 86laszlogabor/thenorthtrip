"use client";

import { track } from "@/lib/track";

type Props = {
  href: string;
  label: string;
  className?: string;

  // tracking
  partnerKey?: string;      // pl. "discovercars"
  placement?: string;       // pl. "footer", "hero", "partnerGrid"
};

function isPlaceholderHref(href: string) {
  const h = (href || "").trim().toLowerCase();
  return !h || h === "#" || h === "tbd";
}

export default function SponsoredLink({
  href,
  label,
  className,
  partnerKey,
  placement,
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
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
      }
      rel="sponsored nofollow noopener"
      target="_blank"
      onClick={() => {
        track("affiliate_click", {
          partner: partnerKey ?? "unknown",
          placement: placement ?? "unknown",
          href,
          label,
        });
      }}
    >
      {label}
      <span className="ml-2 opacity-70">↗</span>
    </a>
  );
}
