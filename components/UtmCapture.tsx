"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { pickUtm } from "@/lib/utm";
import { storeUtm } from "@/lib/track-context";

export default function UtmCapture() {
  const sp = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const utm = pickUtm(sp);
    if (Object.keys(utm).length === 0) return;
    storeUtm(utm);
  }, [sp, pathname]);

  return null;
}
