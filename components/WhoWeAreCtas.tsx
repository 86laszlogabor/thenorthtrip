// components/WhoWeAreCtas.tsx
"use client";

import Link from "next/link";
import { track } from "@/lib/track";

type Props = {
  variant?: "dark" | "light";
};

export default function WhoWeAreCtas({ variant = "dark" }: Props) {
  const isDark = variant === "dark";

  const primary =
    "rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600";
  const secondaryDark =
    "rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10";
  const secondaryLight =
    "rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50";
  const tertiaryDark =
    "rounded-xl px-2 py-3 text-sm font-semibold text-white/80 underline underline-offset-4 transition hover:text-white";
  const tertiaryLight =
    "rounded-xl px-2 py-3 text-sm font-semibold text-slate-700 underline underline-offset-4 transition hover:text-slate-900";

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        href="/offer-checklist"
        onClick={() => track("cta_click", { placement: "who_we_are", cta: "open_checklist" })}
        className={primary}
      >
        Open the checklist
      </Link>

      <Link
        href="/get-help"
        onClick={() => track("cta_click", { placement: "who_we_are", cta: "ask_before_booking" })}
        className={isDark ? secondaryDark : secondaryLight}
      >
        Ask before booking
      </Link>

      <Link
        href="/car-rental-helsinki"
        onClick={() => track("cta_click", { placement: "who_we_are", cta: "read_car_rental_traps" })}
        className={isDark ? tertiaryDark : tertiaryLight}
      >
        Read: Car rental traps →
      </Link>
    </div>
  );
}
