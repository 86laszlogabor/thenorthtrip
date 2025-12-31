import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Airport Transfers | TheNorthTrip",
  description:
    "Airport transfers in Helsinki: when it makes sense, what to confirm, and how to avoid late-arrival friction.",
};

export default function HelsinkiAirportTransfersPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Airport transfers
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Airport transfers: reduce late-arrival pain
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we’ll add verified transfer options. For now: structure, routing, and decision prompts.
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
            <h3 className="text-lg font-semibold">Late arrival friendly</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Options that don’t collapse when the flight is late.
            </p>
            <div className="mt-auto pt-4 text-sm text-brand-text/60">
              Placeholder. Coming after validation.
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">What to confirm</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Meeting point, baggage assumptions, cancellation and no-show rules.
            </p>
            <div className="mt-auto pt-4 text-sm text-brand-text/60">
              Placeholder. Coming after validation.
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">When car rental is better</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              If your plan starts outside Helsinki, a rental might be simpler.
            </p>
            <div className="mt-auto pt-4">
              <Link href="/car-rental-helsinki" className="text-sm font-semibold hover:underline">
                Car rental hub →
              </Link>
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
