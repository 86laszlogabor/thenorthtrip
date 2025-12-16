"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingHomeButton() {
  const pathname = usePathname();

  // Ne mutassuk a főoldalon
  if (!pathname || pathname === "/") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/"
        aria-label="Back to home"
        className="
          inline-flex items-center gap-2
          rounded-full border border-slate-200 bg-white/90
          px-3 py-2 text-sm font-medium text-slate-900
          shadow-lg backdrop-blur
          hover:bg-white
          focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
        "
      >
        <span className="text-base leading-none">←</span>
        <span className="hidden sm:inline">Home</span>
      </Link>
    </div>
  );
}
