import PartnerGrid from "@/components/PartnerGrid";
import type { PartnerKey } from "@/lib/partners";
import type { Placement } from "@/lib/placements";

export default function QuickPicks({
  title,
  subtitle,
  keys,
  placement,
  ctaLabel,
}: {
  title: string;
  subtitle: string;
  keys: PartnerKey[];
  placement: Placement;
  ctaLabel: string;
}) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 max-w-3xl text-slate-700">{subtitle}</p>
      <div className="mt-6">
        <PartnerGrid keys={keys} ctaLabel={ctaLabel} placement={placement} />
      </div>
    </section>
  );
}
