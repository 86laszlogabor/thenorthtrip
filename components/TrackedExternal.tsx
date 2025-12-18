// components/TrackedExternal.tsx
"use client";

import React from "react";
import { track } from "@/lib/track";

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;

  // Accept both styles, because your codebase is mixed.
  label?: string;
  cta?: string;
  placement?: string;
  partner?: string;
};

export default function TrackedExternal({
  href,
  label,
  cta,
  placement,
  partner,
  onClick,
  rel,
  target,
  children,
  ...rest
}: Props) {
  const resolvedRel = rel ?? "sponsored nofollow noopener";
  const resolvedTarget = target ?? "_blank";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Keep caller onClick if provided
    if (onClick) onClick(e);

    // Tracking must never break navigation
    try {
      const name = label ?? cta ?? "external_click";
      (track as any)?.(name, {
        href,
        placement,
        partner,
        label: label ?? undefined,
        cta: cta ?? undefined,
      });
    } catch {
      // no-op
    }
  }

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
