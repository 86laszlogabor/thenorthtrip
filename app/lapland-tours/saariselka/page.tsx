import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Saariselkä tours | Lapland Tours | TheNorthTrip",
  description:
    "Saariselkä as a Lapland base: a decision-first skeleton page for tours, season fit, and booking checks.",
};

export default function SaariselkaPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland tours / Destinations
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Saariselkä: quieter base, strong aurora potential
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Skeleton page. Later we add verified tour types, season guidance, and partner routing.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/lapland-tours" variant="primary">Explore Lapland tours</CtaButton>
          <CtaButton href="/lapland-tours/destinations" variant="outline">Back to destinations</CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What we’ll cover here (later)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Best for</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Calm trips and winter scenery without heavy crowds.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Tour types</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Aurora, husky, snowmobile, wilderness-style options.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">What to confirm</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Weather rules, gear included, pickup/meeting point.
            </p>
          </Card>
        </div>

        <div className="mt-10 text-sm text-brand-text/75">
          <p>
            Links:{" "}
            <Link href="/getting-around-finland" className="font-semibold hover:underline">
              Getting Around Finland
            </Link>{" "}
            •{" "}
            <Link href="/get-help" className="font-semibold hover:underline">
              Get Help
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
