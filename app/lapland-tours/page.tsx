import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import TrustStrip from "@/components/TrustStrip";
import CompareCTA from "@/components/CompareCTA";

export const metadata: Metadata = pageMetadata({
  title: "Lapland tours: what’s included, what’s not, and common add-on traps",
  description:
    "Lapland tours guide: inclusions, exclusions, on-site costs, and how to compare offers without getting upsold.",
  path: "/lapland-tours",
  keywords: [
    "lapland tour inclusions",
    "lapland tour hidden costs",
    "rovaniemi tour what is included",
    "lapland excursions upsell",
  ],
});

export default function LaplandToursPage() {
  const checks = [
    "What’s actually included vs marketed (gear, transport, meals)",
    "Minimum group sizes + cancellation rules",
    "On-site add-ons and ‘optional’ mandatory fees",
    "Pick-up areas and extra transport cost",
    "Duration vs real activity time",
    "Weather constraints and rescheduling policy",
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Pillar guide</p>
        <h1 className="text-3xl font-semibold sm:text-5xl text-white">
          Lapland tours: inclusions, exclusions, and upsells people miss
        </h1>
        <p className="max-w-2xl text-white/70">
          Compare tours by what you get, not by the headline price. Inclusions matter. So do the fine-print “extras”.
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
            Read tour posts
          </Link>
        </div>
      </header>

      <TrustStrip items={checks} />

      <CompareCTA
        title="Send two tours, we’ll tell you which one is cleaner"
        text="We’ll compare inclusions, add-ons, pickup rules, cancellation terms, and real activity time."
        primaryHref="/get-help"
        primaryLabel="Send tour offers"
        secondaryHref="/blog"
        secondaryLabel="Blog"
      />
    </main>
  );
}
