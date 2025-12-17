"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type PlausibleFn = (eventName: string, opts?: { props?: Record<string, unknown> }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible("pageview");
    }
  }, [pathname]);

  return null;
}
