import Link from "next/link";
import { PILLARS, PillarPath } from "@/lib/pillars";

export default function PillarPage({ pillar }: { pillar: PillarPath }) {
  const p = PILLARS[pillar];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-xs font-semibold text-slate-500">{p.kicker}</div>
      <h2 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h2>
      <p className="mt-2 text-sm text-slate-600">{p.description}</p>

      <div className="mt-5">
        <Link
          href={p.href}
          className="inline-block rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
        >
          Open guide
        </Link>
      </div>
    </section>
  );
}
