import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper route: Helsinki–Lapland | Camper Rental Finland | TheNorthTrip",
  description:
    "Helsinki–Lapland route: a decision-first skeleton page for winter constraints, time, and booking checks.",
};

export default function CamperRouteHelsinkiLaplandPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper rental / Routes
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Helsinki–Lapland route
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add winter constraints, realistic days, and station pairing logic.
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
          Best paired stations:{" "}
          <Link href="/camper-rental-finland/stations/helsinki" className="font-semibold hover:underline">
            Helsinki
          </Link>{" "}
          •{" "}
          <Link href="/camper-rental-finland/stations/rovaniemi" className="font-semibold hover:underline">
            Rovaniemi
          </Link>
        </p>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we’ll cover here (later)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Winter constraints</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Temperatures, water system limits, road conditions, daylight.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Distance realism</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              How many days you actually need without suffering.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Support plan</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              What happens if something breaks mid-route.
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
