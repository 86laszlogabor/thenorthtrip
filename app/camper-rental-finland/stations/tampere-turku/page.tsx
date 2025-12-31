import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperStationTampereTurkuPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper station: Tampere / Turku
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Often a clean starting point for a lakes-and-coast style loop. Typically better if your route is not a direct
          sprint to Lapland. Verify station location and handover process early.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Good fit when</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>You want Lake District style routing without Helsinki city friction.</li>
              <li>You plan a coastal segment (Turku area) or southern inland stops.</li>
              <li>You value realistic daily drive lengths over “max distance”.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What often goes wrong</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Station is outside the city center (last-mile planning needed).</li>
              <li>Assuming winter is “fine” without verifying heating/water constraints.</li>
              <li>Not accounting for return time buffers (late return fees).</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold">Quick verify checklist</h2>
          <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
            <li>Pickup/return windows + late-return rules.</li>
            <li>Mileage caps + regional driving expectations.</li>
            <li>Parking and “allowed” overnight stops (vehicle restrictions differ from hiking rights).</li>
          </ul>
          <p className="mt-4 text-xs text-brand-text/60">Last verified: 2025.12.31</p>
        </Card>

        <div className="mt-8 text-sm text-brand-text/75">
          <Link href="/camper-rental-finland" className="font-semibold hover:underline">
            Back to Camper Rental Finland →
          </Link>
          <span className="mx-2">•</span>
          <Link href="/camper-rental-finland/routes/southern-lakes" className="font-semibold hover:underline">
            Southern lakes route →
          </Link>
        </div>
      </Section>
    </div>
  );
}
