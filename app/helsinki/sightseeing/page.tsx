import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Sightseeing | TheNorthTrip",
  description:
    "Helsinki sightseeing options, explained simply: what fits your time, season, and energy level.",
};

export default function HelsinkiSightseeingPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Sightseeing
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Helsinki sightseeing, booked the smart way
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Decision-first skeleton page. We’ll add verified options here. For now,
          this is the structure and internal routing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/get-help" variant="primary">
            See options
          </CtaButton>
          <CtaButton href="/car-rental-helsinki" variant="outline">
            Back to car rental
          </CtaButton>
        </div>

        <p className="mt-6 text-sm text-brand-text/70">
          Part of the{" "}
          <Link href="/car-rental-helsinki" className="font-semibold hover:underline">
            Helsinki booking hub
          </Link>
          .
        </p>
      </section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we’ll place here (later)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Guided city tours</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              When a guide saves time (and when it wastes it).
            </p>
            <div className="mt-auto pt-4 text-sm text-brand-text/60">
              Placeholder. Coming after validation.
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Day trips</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Nearby trips that make sense with or without a car.
            </p>
            <div className="mt-auto pt-4 text-sm text-brand-text/60">
              Placeholder. Coming after validation.
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Season fit</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Winter vs summer tradeoffs, without fantasy planning.
            </p>
            <div className="mt-auto pt-4 text-sm text-brand-text/60">
              Placeholder. Coming after validation.
            </div>
          </Card>
        </div>

        <Card className="mt-10">
          <h3 className="text-lg font-semibold">Links</h3>
          <p className="mt-3 text-sm text-brand-text/70">
            Back to{" "}
            <Link href="/car-rental-helsinki" className="font-semibold hover:underline">
              Car Rental Helsinki
            </Link>{" "}
            •{" "}
            <Link href="/get-help" className="font-semibold hover:underline">
              Get Help
            </Link>
          </p>
        </Card>
      </Section>
    </div>
  );
}
