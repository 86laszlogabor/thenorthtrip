// components/BlogCTA.tsx
import Link from "next/link";
import { CTA_BY_PILLAR } from "@/lib/cta";
import { PillarKey } from "@/lib/blog";

type Props = {
  pillar: PillarKey;
};

export default function BlogCTA({ pillar }: Props) {
  const cta = CTA_BY_PILLAR[pillar];

  return (
    <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-8">
      <h3 className="text-2xl font-extrabold tracking-tight text-white">
        {cta.title}
      </h3>
      <p className="mt-3 max-w-xl text-white/70">{cta.description}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={cta.primary.href}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600"
        >
          {cta.primary.label}
        </Link>

        <Link
          href={cta.secondary.href}
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/85 transition hover:bg-white/10"
        >
          {cta.secondary.label}
        </Link>
      </div>
    </div>
  );
}
