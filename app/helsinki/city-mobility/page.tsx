import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki city mobility | TheNorthTrip",
  description:
    "City mobility in Helsinki: a decision-first skeleton page for short trips and seasonal constraints.",
};

export default function HelsinkiCityMobilityPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / City mobility
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          City mobility in Helsinki: short trips, low friction
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we’ll add verified options and rules. For now this
          is the routing target.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/get-help" variant="primary">
            See options
          </CtaButton>
          <CtaButton href="/getting-around-finland" variant="outline">
            Back to Getting Around
          </CtaButton>
        </div>

        <p className="mt-6 text-sm text-brand-text/70">
          Related:{" "}
          <Link href="/helsinki/ferry-cruise" className="font-semibold hover:underline">
            Helsinki Ferry &amp; Cruise
          </Link>
        </p>
      </section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we’ll place here (later)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Seasonal reality</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              What works in summer vs winter. No fantasy planning.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Rules &amp; safety</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Local rules, where it’s allowed, and what to avoid.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">When not to bother</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              When walking / transit is simpler than any micro mobility.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
