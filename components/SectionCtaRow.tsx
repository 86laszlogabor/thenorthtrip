import TrackedLink from "@/components/TrackedLink";
import type { Placement } from "@/lib/placements";

export default function SectionCtaRow({ placement }: { placement: Placement }) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      <TrackedLink
        href="/offer-checklist"
        placement={placement}
        cta="open_checklist"
        className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
      >
        Free booking checklist
      </TrackedLink>

      <TrackedLink
        href="/get-help"
        placement={placement}
        cta="get_help"
        className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
      >
        Ask before booking
      </TrackedLink>
    </div>
  );
}
