// components/TrackedLink.tsx
"use client";

import Link, { type LinkProps } from "next/link";
import React from "react";
import { track, type TrackEventName, type TrackProps } from "@/lib/track";

type TrackedLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;

  /** tracking (defaults) */
  eventName?: TrackEventName; // default: "cta_click"
  props?: TrackProps;

  /** convenience props (so you can write placement="..." cta="...") */
  placement?: string;
  cta?: string;

  /** optional */
  rel?: string;
  target?: string;
};

export default function TrackedLink({
  eventName = "cta_click",
  props,
  placement,
  cta,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        // keep caller behavior
        onClick?.(e as any);

        // track
        track(eventName, {
          ...(props ?? {}),
          ...(placement ? { placement } : {}),
          ...(cta ? { cta } : {}),
        });
      }}
    />
  );
}
