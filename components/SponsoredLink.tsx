"use client";

import { track } from "@/lib/track";

type Props = {
  href: string;
  label: string;
  className?: string;

  // measurement
  placement?: string; // "hero_primary" | "grid_card_1" | "inline_1" ...
  partner?: string;   // partner key, e.g. "discovercars", "viator_lapland"
};

function isPlaceholderHref(href: string) {
  const h = (href || "").trim().toLowerCase();
  return !h || h === "#" || h === "tbd";
}

function safePathname() {
  if (typeof window === "undefined") return "ssr";
  const p = window.location?.pathname || "unknown";
  return p.length ? p : "unknown";
}

export default function SponsoredLink({
  href,
  label,
  className,
  placement = "unknown",
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
        title="Coming soon"
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
      onClick={() => {
        track("affiliate_click", {
          page: safePathname(),
          placement,
          partner,
          href,
        });
      }}
    >
      {label}
      <span className="ml-2 opacity-70">↗</span>
    </a>
  );
}
