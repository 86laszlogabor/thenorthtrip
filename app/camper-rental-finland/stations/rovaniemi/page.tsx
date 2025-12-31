import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperStationRovaniemiPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper station: Rovaniemi
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Useful as a Lapland base, but costs and constraints are often stricter in winter. One-way planning is where
          people burn money. Verify return logic and weather impact.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Good fit when</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>You want Lapland positioning without driving from the south first.</li>
              <li>You’re pairing camper travel with local tours (but verify meeting points).</li>
              <li>You have winter driving confidence and realistic daily limits.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What often goes wrong</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Underestimating winter power/heating constraints (battery drain is common).</li>
              <li>Assuming “wild camping anywhere” (vehicle restrictions differ).</li>
              <li>Return station mismatch fees or one-way cost surprises.</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold">Quick verify checklist</h2>
          <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
            <li>Winterisation level (heating + water system limitations in freezing temps).</li>
            <li>Deposit/card requirement + hold timing.</li>
            <li>One-way rules and return station constraints.</li>
          </ul>
          <p className="mt-4 text-xs text-brand-text/60">Last verified: 2025.12.31</p>
        </Card>

        <div className="mt-8 text-sm text-brand-text/75">
          <Link href="/camper-rental-finland" className="font-semibold hover:underline">
            Back to Camper Rental Finland →
          </Link>
          <span className="mx-2">•</span>
          <Link href="/lapland-tours/rovaniemi" className="font-semibold hover:underline">
            Rovaniemi base (tours) →
          </Link>
        </div>
      </Section>
    </div>
  );
}
