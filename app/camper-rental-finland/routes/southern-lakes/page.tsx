import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export default function CamperRouteSouthernLakesPage() {
  return (
    <div className="bg-white">
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper route: Southern Lakes
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Best for slower travel, short hops, and flexible stops. Typically easiest in warmer months. The main failure
          mode is assuming “overnight anywhere” without checking vehicle rules.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold">Decision logic</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>If comfort and low-stress days matter, this route fits.</li>
              <li>If you want maximum distance per day, it usually disappoints.</li>
              <li>Plan around realistic stop options, not “map vibes”.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold">What to verify</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Mileage caps vs intended daily distances.</li>
              <li>Parking/overnight rules for vehicles (not hiking rights).</li>
              <li>Power/heating needs if shoulder season turns cold.</li>
            </ul>
          </Card>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025.12.31</p>

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
