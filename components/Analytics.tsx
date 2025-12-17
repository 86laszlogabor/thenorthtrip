"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const w = window as unknown as {
      plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    };

    if (typeof w.plausible === "function") {
      w.plausible("pageview");
    }
  }, [pathname]);

  return null;
}
