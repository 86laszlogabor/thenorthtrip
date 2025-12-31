import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper route: Coastal | Camper Rental Finland | TheNorthTrip",
  description:
    "Coastal route: a decision-first skeleton page for season fit, logistics, and key booking checks.",
};

export default function CamperRouteCoastalPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper rental / Routes
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Coastal route
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add best season windows, “easy logistics” logic, and station pairing.
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
          Best paired station:{" "}
          <Link href="/camper-rental-finland/stations/helsinki" className="font-semibold hover:underline">
            Helsinki
          </Link>
        </p>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we’ll cover here (later)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Season fit</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              When the coast is pleasant vs pointless.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Logistics</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Where this route is simplest without “surprises”.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Stop + parking logic</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              What to confirm so you don’t improvise badly.
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
