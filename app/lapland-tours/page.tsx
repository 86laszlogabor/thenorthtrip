import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = pageMetadata({
  title: "Lapland tours explained: inclusions, group size, cancellations",
  description:
    "Clear comparison of Lapland tours. Group size, inclusions vs extras, pickup timing, and cancellation rules without marketing fluff.",
  path: "/lapland-tours",
  keywords: [
    "lapland tours cancellation rules",
    "lapland small group vs big bus",
    "lapland tour inclusions",
    "northern lights tour refund",
  ],
});

export default function LaplandToursPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Lapland tours without brochure fantasy
        </h1>
        <p className="max-w-2xl text-white/70">
          This guide focuses on the details that actually affect your experience: group size, inclusions, timing, and
          realistic cancellation policies.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Northern lights reality</h2>
          <p className="mt-2 text-sm text-white/70">
            Aurora sightings depend on weather and solar activity. “No lights” rarely equals automatic refund.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Small group vs big bus</h2>
          <p className="mt-2 text-sm text-white/70">
            Smaller groups offer flexibility. Bigger buses trade experience for price.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Included vs paid extras</h2>
          <p className="mt-2 text-sm text-white/70">
            Thermal suits, photos, snacks, and hotel pickup often cost extra.
          </p>
        </div>
      </section>

      <section className="space-y-6 max-w-3xl">
        <h2 className="text-2xl font-semibold">Cancellations and refunds</h2>
        <p className="text-white/70">
          Always read the weather and cancellation terms. Legit operators explain rescheduling and refund rules clearly.
        </p>

        <h2 className="text-2xl font-semibold">What’s usually included</h2>
        <p className="text-white/70">
          Transport and guide are standard. Clothing, food, photos, and drop-off locations vary widely.
        </p>

        <h2 className="text-2xl font-semibold">Comparing tours properly</h2>
        <p className="text-white/70">
          Ignore marketing names. Compare duration, group size, pickup window, and cancellation flexibility instead.
        </p>
      </section>

      <CTABox
        title="Not sure which tour to book?"
        text="Send the tour link. We’ll break down inclusions, timing, group size, and cancellation terms."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/blog"
        secondaryLabel="Read the blog"
      />
    </main>
  );
}
