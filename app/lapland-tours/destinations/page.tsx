import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function LaplandDestinationsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland tours / Destinations
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Lapland bases: choose the hub before you book the tour
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. This becomes the target for â€œFlights â†’ Lapland basesâ€ routing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/lapland-tours" variant="primary">Back to Lapland Tours</CtaButton>
          <CtaButton href="/getting-around-finland" variant="outline">Back to Getting Around</CtaButton>
        </div>

        <p className="mt-6 text-sm text-brand-text/70">
          If youâ€™re stuck, use{" "}
          <Link href="/get-help" className="font-semibold hover:underline">
            Get Help
          </Link>
          .
        </p>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Destinations (expandable)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Rovaniemi", "Levi", "SaariselkÃ¤", "YllÃ¤s", "Inari"].map((d) => (
            <Card key={d} className="flex flex-col">
              <h3 className="text-lg font-semibold">{d}</h3>
              <p className="mt-2 text-sm text-brand-text/70">
                Placeholder. Later: best tour types + season fit + logistics.
              </p>
              <div className="mt-auto pt-4">
                <Link href="/lapland-tours" className="text-sm font-semibold hover:underline">
                  Explore tours â†’
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
