"use client";

import { trackPlus } from "@/lib/track-plus";
import type { Placement } from "@/lib/placements";

type Props = {
  href: string;
  children: React.ReactNode;
  placement: Placement;
  cta: string;
  className?: string;
};

export default function TrackedExternal({ href, children, placement, cta, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      onClick={() => trackPlus("affiliate_click", { placement, cta, href })}
      className={className}
    >
      {children}
      <span className="ml-2 opacity-70">↗</span>
    </a>
  );
}
