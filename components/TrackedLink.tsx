// components/TrackedLink.tsx
"use client";

import Link, { type LinkProps } from "next/link";
import { track, type TrackEventName, type TrackProps } from "@/lib/track";
import React from "react";

type Props = LinkProps & {
  className?: string;
  children: React.ReactNode;
  eventName?: TrackEventName; // default: "cta_click"
  props?: TrackProps;
  external?: boolean; // if true, render <a> instead of Next Link
  href: string; // make explicit
  target?: string;
  rel?: string;
};

export default function TrackedLink({
  className,
  children,
  eventName = "cta_click",
  props,
  external,
  href,
  target,
  rel,
  ...rest
}: Props) {
  const onClick = () => track(eventName, props);

  if (external) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className} {...rest}>
      {children}
    </Link>
  );
}
