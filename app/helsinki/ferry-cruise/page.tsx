import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki ferry & cruises | TheNorthTrip",
  description: "Ports, boarding buffers, and seasonal schedules. Verify terminal + check-in rules.",
};

export default function Page() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Helsinki ferry & cruises
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Ports, boarding buffers, and seasonal schedules. Verify terminal + check-in rules.
        </p>
        <div className="mt-8">
          <CtaButton href="/car-rental-helsinki" variant="primary">
            Go back to the decision hub
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What usually causes friction
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Timing assumptions</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              People plan like it’s summer: tight buffers, no backups, and optimistic walking times.
            </p>
          </Card>
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Rules vs expectations</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Helsinki is calm, literal, and procedural. “Should be fine” is not a plan.
            </p>
          </Card>
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Verification gap</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Confirm the detail that matters (terminal, zone, booking window) in writing when possible.
            </p>
          </Card>
        </div>

        <div className="mt-8 text-sm text-brand-text/75">
          <p>
            Related:{" "}
            <Link href="/getting-around-finland" className="font-semibold hover:underline">
              Getting Around Finland
            </Link>
          </p>
          <p className="mt-2">
            Terms logic:{" "}
            <Link href="/rental-terms-prices" className="font-semibold hover:underline">
              Rental Terms &amp; Prices
            </Link>
          </p>
          <p className="mt-2">
            If something breaks:{" "}
            <Link href="/get-help" className="font-semibold hover:underline">
              Get Help
            </Link>
          </p>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">
          Last verified: 2025-12-31
        </p>
      </Section>
    </div>
  );
}
