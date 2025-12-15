import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import TrustStrip from "@/components/TrustStrip";
import CompareCTA from "@/components/CompareCTA";

export const metadata: Metadata = pageMetadata({
  title: "Camper rental Finland: winter readiness, power costs, mileage caps",
  description:
    "Finland camper rental guide: winter heating + power realities, mileage caps, and what 'winter-ready' should actually mean.",
  path: "/camper-rental-finland",
  keywords: [
    "camper rental finland winter",
    "camper heating power costs finland",
    "camper mileage cap overage fees",
    "winterised camper checklist finland",
  ],
});

export default function CamperRentalFinlandPage() {
  const checks = [
    "What ‘winter-ready’ actually includes (insulation, heating, water system)",
    "Power source: hookup vs battery vs generator",
    "Mileage caps + overage fees",
    "Cold-weather comfort: condensation, ventilation, bedding",
    "Pickup rules + deposit/insurance gotchas",
    "Route reality: distances, charging, service points",
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Pillar guide</p>
        <h1 className="text-3xl font-semibold sm:text-5xl text-white">
          Camper rental in Finland (winter edition, not brochure edition)
        </h1>
        <p className="max-w-2xl text-white/70">
          Heating + power costs, winter-readiness checklist, and mileage caps. The stuff that matters after day one.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-help"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the winter posts
          </Link>
        </div>
      </header>

      <TrustStrip items={checks} />

      <CompareCTA
        title="Send your camper offer for a reality check"
        text="We’ll flag mileage cap traps, winter-readiness gaps, and power/heating mismatches."
        primaryHref="/get-help"
        primaryLabel="Send an offer"
        secondaryHref="/blog"
        secondaryLabel="Blog"
      />
    </main>
  );
}
