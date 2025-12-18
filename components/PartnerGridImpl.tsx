// components/PartnerGridImpl.tsx
import React from "react";
import PartnerGrid from "@/components/PartnerGrid";
import { PartnerKey } from "@/lib/partners";

type Props = {
  partnerKeys: PartnerKey[];
  placement: string;
  ctaLabel?: string;
  className?: string;
  variant?: "default" | "compact";
};

export default function PartnerGridImpl({
  partnerKeys,
  placement,
  ctaLabel = "Check options",
  className,
  variant = "default",
}: Props) {
  return (
    <PartnerGrid
      partnerKeys={partnerKeys}
      placement={placement}
      ctaLabel={ctaLabel}
      className={className}
      variant={variant}
    />
  );
}
