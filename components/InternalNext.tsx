"use client";

import Link from "next/link";
import { trackPlus } from "@/lib/track-plus";
import type { Placement } from "@/lib/placements";

type Item = {
  href: string;
  title: string;
  desc: string;
  cta: string; // event cta key
};

type Props = {
  placement?: Placement;
  items: Item[];
};

export default function InternalNext({ placement = "internal_next", items }: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Next step</h2>
      <p className="mt-1 text-sm text-slate-700">
        Keep momentum. Pick one logical next move.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            onClick={() => trackPlus("cta_click", { placement, cta: x.cta, href: x.href })}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:bg-slate-50"
          >
            <div className="text-base font-semibold text-slate-900">{x.title}</div>
            <div className="mt-2 text-sm text-slate-700">{x.desc}</div>
            <div className="mt-4 text-sm font-semibold text-slate-900">
              Open → <span className="opacity-70">{x.href}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
