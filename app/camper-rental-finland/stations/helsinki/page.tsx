import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperStationHelsinkiPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper station: Helsinki
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Best when you want a southern start with lower friction. Typically easier for handover logistics, but
          demand peaks in summer and station details vary by operator.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Good fit when</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>You want to begin in the south and build confidence before longer drives.</li>
              <li>You plan a Southern Lakes loop or coastal routing first.</li>
              <li>You prefer simpler logistics over “rush north immediately”.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What often goes wrong</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Assuming airport pickup when it’s a city/industrial-area station.</li>
              <li>Underestimating summer demand and weekend handover congestion.</li>
              <li>Not verifying mileage caps and deposit/card requirements.</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold">Quick verify checklist</h2>
          <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
            <li>Exact pickup location + opening hours (especially weekends).</li>
            <li>Deposit hold method + card requirements (varies by operator).</li>
            <li>Mileage policy and “extra km” fees.</li>
            <li>What “winterised” means (heating + water system behavior in cold).</li>
          </ul>
          <p className="mt-4 text-xs text-brand-text/60">Last verified: 2025.12.31</p>
        </Card>

        <div className="mt-8 text-sm text-brand-text/75">
          <Link href="/camper-rental-finland" className="font-semibold hover:underline">
            Back to Camper Rental Finland →
          </Link>
          <span className="mx-2">•</span>
          <Link href="/rental-terms-prices" className="font-semibold hover:underline">
            Terms checklist →
          </Link>
        </div>
      </Section>
    </div>
  );
}
