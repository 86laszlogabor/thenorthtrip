import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperRouteCoastalPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper route: Coastal
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Good for scenery and a flexible pace, but weather exposure (wind/rain) can change comfort quickly. Typically
          easiest in warmer months. Verify ferry integrations and seasonal gaps.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Decision logic</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>If you want “easy logistics”, coastal isn’t always that.</li>
              <li>If you want variety and scenic short hops, it fits.</li>
              <li>Plan around ports and schedules, not just distance.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What to verify</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Ferry schedules and seasonal availability.</li>
              <li>Wind/rain comfort assumptions (especially shoulder season).</li>
              <li>Stop planning for overnight (vehicle rules vary).</li>
            </ul>
          </Card>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025.12.31</p>

        <div className="mt-8 text-sm text-brand-text/75">
          <Link href="/camper-rental-finland" className="font-semibold hover:underline">
            Back to Camper Rental Finland →
          </Link>
          <span className="mx-2">•</span>
          <Link href="/getting-around-finland" className="font-semibold hover:underline">
            Transport tradeoffs →
          </Link>
        </div>
      </Section>
    </div>
  );
}
