import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionCard from "@/components/SectionCard";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = pageMetadata({
  title: "Camper rental Finland: winter heating costs, mileage caps, hidden fees",
  description:
    "Long-tail camper rental Finland guide: winter heating & power costs, mileage caps, cleaning fees, and what 'winter-ready' really includes.",
  path: "/camper-rental-finland",
  keywords: [
    "camper rental finland winter heating cost",
    "winter ready campervan finland what included",
    "campervan mileage limit finland",
    "camper rental cleaning fee finland",
  ],
});

export default function CamperRentalFinlandPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Camper Rental Finland: avoid hidden winter costs
        </h1>
        <p className="max-w-2xl text-white/70">
          This guide targets the smaller, high-intent queries: heating, insulation, power usage, mileage caps,
          and the fees that appear after you “book the cheap one”.
        </p>
      </header>

      <SectionCard title="Winter-ready: heating, insulation, power">
        <p>
          “Winter-ready” is not a vibe. It’s equipment and power capacity. If heating is weak or power is limited,
          your trip becomes a cold logistics puzzle.
        </p>
      </SectionCard>

      <SectionCard title="Mileage caps, fuel, and the ‘cheap listing’ problem">
        <p>
          Mileage caps and per-km charges are classic hidden costs. Check the included kilometers and the overage rate.
        </p>
      </SectionCard>

      <SectionCard title="Cleaning, bedding, gas bottles, and small print">
        <p>
          Cleaning fees, bedding packs, and gas policies are where totals drift. Make a checklist before checkout.
        </p>
      </SectionCard>

      <CTABox
        title="Send your camper offer, we’ll sanity-check it"
        text="We’ll flag winter readiness gaps, mileage traps, and add-ons that blow up your budget."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/lapland-tours"
        secondaryLabel="Plan Lapland tours"
      />
    </main>
  );
}
