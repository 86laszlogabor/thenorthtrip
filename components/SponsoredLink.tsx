// components/SponsoredLink.tsx
import React from "react";
import TrackedExternal from "@/components/TrackedExternal";
import type { PartnerKey } from "@/lib/partners";

type Props = {
  href: string;
  label: string;        // a gomb/link szövege vagy CTA label
  placement: string;    // tracking placement
  partner: PartnerKey;  // partner kulcs
  className?: string;
  rel?: string;
  children?: React.ReactNode; // opcionálisan felülírhatod a labelt
};

export default function SponsoredLink({
  href,
  label,
  placement,
  partner,
  className = "",
  rel = "sponsored nofollow noopener",
  children,
}: Props) {
  return (
    <TrackedExternal
      href={href}
      label={`partner:${partner}`}
      placement={placement}
      className={className}
      rel={rel}
    >
      {children ?? label}
    </TrackedExternal>
  );
}
