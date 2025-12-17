"use client";

import Link from "next/link";
import { trackPlus } from "@/lib/track-plus";
import type { Placement } from "@/lib/placements";

type Props = {
  href: string;
  children: React.ReactNode;
  placement: Placement;
  cta: string;
  className?: string;
};

export default function TrackedLink({ href, children, placement, cta, className }: Props) {
  return (
    <Link
      href={href}
      onClick={() => trackPlus("cta_click", { placement, cta, href })}
      className={className}
    >
      {children}
    </Link>
  );
}
