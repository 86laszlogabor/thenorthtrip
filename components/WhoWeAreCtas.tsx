// components/WhoWeAreCtas.tsx
"use client";

import Link from "next/link";
import { track } from "@/lib/track";

export default function WhoWeAreCtas() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href="/car-rental-helsinki"
        onClick={() => track("cta_click", { placement: "who_we_are_top", cta: "car_rental_guide" })}
        className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
      >
        Car rental guide →
      </Link>

      <Link
        href="/lapland-tours"
        onClick={() => track("cta_click", { placement: "who_we_are_top", cta: "lapland_tours" })}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        Lapland tours →
      </Link>

      <Link
        href="/get-help"
        onClick={() => track("cta_click", { placement: "who_we_are_top", cta: "ask_before_booking" })}
        className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        Ask before booking →
      </Link>
    </div>
  );
}
