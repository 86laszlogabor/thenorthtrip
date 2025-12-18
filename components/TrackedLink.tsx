"use client";

import Link, { type LinkProps } from "next/link";
import React from "react";
import { track, type TrackEventName, type TrackProps } from "@/lib/track";

type TrackedLinkProps = LinkProps & {
  className?: string;
  children: React.ReactNode;

  eventName?: TrackEventName; // default: "cta_click"
  props?: TrackProps;

  placement?: string;
  cta?: string;

  rel?: string;
  target?: string;

  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
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
        onClick?.(e);

        track(eventName, {
          ...(props ?? {}),
          ...(placement ? { placement } : {}),
          ...(cta ? { cta } : {}),
        });
      }}
    />
  );
}
