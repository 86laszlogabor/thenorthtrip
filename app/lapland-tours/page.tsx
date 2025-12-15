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
    "lapland tour pickup time helsinki flight",
  ],
});

export default function LaplandToursPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Lapland Tours: choose your Arctic adventure safely
        </h1>
        <p className="max-w-2xl text-white/70">
          The small-market stuff that matters: group size, pickup windows, inclusions vs extras, and realistic cancellation expectations.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Summer lake escapes</h2>
          <p className="mt-2 text-sm text-white/70">Placeholder category card.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Autumn color trips</h2>
          <p className="mt-2 text-sm text-white/70">Placeholder category card.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Winter camping</h2>
          <p className="mt-2 text-sm text-white/70">Placeholder category card.</p>
        </div>
      </div>

      <SectionCard title="Small group vs big bus: what you’re paying for">
        <p>
          Small groups usually mean better timing and flexibility. Big buses often mean lower headline price but less control.
          Compare the full itinerary, not the marketing title.
        </p>
      </SectionCard>

      <SectionCard title="Inclusions vs extras: the quiet upsells">
        <p>
          Watch for add-ons like thermal suits, boots, snacks, or “photo packages”. Sometimes they matter, sometimes they’re noise.
        </p>
      </SectionCard>

      <SectionCard title="Weather and cancellations: expectations management">
        <p>
          Northern lights are weather-dependent. Look for cancellation and rescheduling terms before you buy optimism.
        </p>
      </SectionCard>

      <CTABox
        title="Want help picking a tour that won’t disappoint?"
        text="Send the tour link. We’ll highlight inclusions, timing, group size, and cancellation terms."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/"
        secondaryLabel="Back to home"
      />
    </main>
  );
}
