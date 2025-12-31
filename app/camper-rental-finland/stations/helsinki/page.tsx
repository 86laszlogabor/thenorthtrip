import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper station: Helsinki | Camper Rental Finland | TheNorthTrip",
  description:
    "Helsinki camper pickup station: a decision-first skeleton page for what to check before booking.",
};

export default function CamperStationHelsinkiPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper rental / Stations
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Helsinki station
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add verified fleets, pickup logistics, and route pairing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/camper-rental-finland" variant="primary">
            Back to Camper Rental Finland
          </CtaButton>
          <CtaButton href="/rental-terms-prices" variant="outline">
            Open terms checklist
          </CtaButton>
        </div>

        <p className="mt-6 text-sm text-brand-text/70">
          Pair with routes:{" "}
          <Link href="/camper-rental-finland/routes/coastal" className="font-semibold hover:underline">
            Coastal
          </Link>{" "}
          •{" "}
          <Link href="/camper-rental-finland/routes/southern-lakes" className="font-semibold hover:underline">
            Southern lakes
          </Link>
        </p>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What to confirm before pickup
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Pickup window</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Desk/handover hours, late pickup rules, after-hours fees.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Deposit + card rules</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Hold amount, accepted cards, refund timing.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Winter readiness</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Heating, water system limitations, tyres, and what is actually included.
            </p>
          </Card>
        </div>

        <div className="mt-10 text-sm text-brand-text/75">
          <p>
            Need help?{" "}
            <Link href="/get-help" className="font-semibold hover:underline">
              Get Help
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
