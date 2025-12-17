"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { pickUtm } from "@/lib/utm";
import { storeUtm } from "@/lib/track-context";
import { track } from "@/lib/track";

export default function UtmCapture() {
  const sp = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const utm = pickUtm(sp);
    const keys = Object.keys(utm);
    if (keys.length === 0) return;

    storeUtm(utm);

    // one lightweight signal that ref/utm was seen (optional but useful)
    track("cta_click", { placement: "ref_capture", cta: "utm_seen", page: pathname, ...utm });
  }, [sp, pathname]);

  return null;
}
