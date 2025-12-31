import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper station: Tampere/Turku | Camper Rental Finland | TheNorthTrip",
  description:
    "Tampere/Turku camper pickup region: a decision-first skeleton page for what to check before booking.",
};

export default function CamperStationTampereTurkuPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper rental / Stations
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Tampere / Turku station
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add verified fleets and the best “southern loop” logic.
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
            <h3 className="text-lg font-semibold">Station specifics</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Exact location, parking, and handover instructions.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Mileage + fees</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Caps, extra-km pricing, cleaning policies.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Season fit</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Whether the typical fleet supports shoulder season and early cold.
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
