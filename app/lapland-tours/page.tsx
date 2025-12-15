import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionCard from "@/components/SectionCard";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = pageMetadata({
  title: "Lapland tours: inclusions, small groups, pickup timing, cancellations",
  description:
    "Long-tail Lapland tours guide: small group vs big bus, what’s included, pickup timing, weather cancellations, and add-on pricing.",
  path: "/lapland-tours",
  keywords: [
    "lapland tours small group vs big bus",
    "northern lights tour cancellation policy lapland",
    "lapland tour inclusions what included",
    "lapland tour hidden extras",
    "lapland pickup time tour",
  ],
});

export default function LaplandToursPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">Lapland Tours: compare inclusions like an adult</h1>
        <p className="max-w-2xl text-white/70">
          We focus on the details that actually decide your experience: group size, pickup windows, inclusions vs paid
          extras, and cancellation expectations.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Northern lights: cancellation reality</h2>
          <p className="mt-2 text-sm text-white/70">Weather rules everything. Read terms before buying hope.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Small group vs big bus</h2>
          <p className="mt-2 text-sm text-white/70">Flexibility and timing vs a lower headline price.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Included vs paid extras</h2>
          <p className="mt-2 text-sm text-white/70">Thermal suits, boots, snacks, photo packs, “fees”.</p>
        </div>
      </div>

      <SectionCard title="Small group vs big bus: what you’re paying for">
        <p>
          Small groups usually mean better timing and fewer compromises. Big buses can be cheaper but less flexible.
          Compare the itinerary and pickup times, not the marketing title.
        </p>
      </SectionCard>

      <SectionCard title="Inclusions vs extras: where totals drift">
        <p>
          Look for add-ons like thermal clothing, boots, “professional photos”, snacks, or drop-off fees. Sometimes they
          matter, sometimes they’re pure margin.
        </p>
      </SectionCard>

      <SectionCard title="Weather cancellations: realistic expectations">
        <p>
          Northern lights are weather-dependent. A good operator is transparent about rescheduling and refunds. If terms
          are vague, assume the worst.
        </p>
      </SectionCard>

      <CTABox
        title="Want help picking a tour that won’t disappoint?"
        text="Send the tour link. We’ll highlight inclusions, timing, group size, and cancellation terms."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/blog"
        secondaryLabel="Read the blog"
      />
    </main>
  );
}
