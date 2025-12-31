import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper station: Rovaniemi | Camper Rental Finland | TheNorthTrip",
  description:
    "Rovaniemi camper pickup station: a decision-first skeleton page for what to check before booking.",
};

export default function CamperStationRovaniemiPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper rental / Stations
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Rovaniemi station
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add “winter realities” routing and Lapland route pairing.
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
          Pair with route:{" "}
          <Link href="/camper-rental-finland/routes/helsinki-lapland" className="font-semibold hover:underline">
            Helsinki–Lapland
          </Link>
        </p>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What to confirm before pickup
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Winterization detail</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Heating capacity, water system limitations, and safe operating temps.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Road + parking reality</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Where you can stop, what “allowed” means, and what to avoid.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Support if issues happen</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Breakdown handling, phone support, replacement policy.
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
