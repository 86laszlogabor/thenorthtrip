import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function ArcticLifestylePartnerPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland tours / Partners
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Arctic Lifestyle
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Operator-first option. The point is simpler reality: smaller groups, clearer inclusions, fewer marketplace surprises.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="PASTE_ARCTIC_LIFESTYLE_LINK" variant="primary">
            Browse tours
          </CtaButton>
          <CtaButton href="/lapland-tours" variant="outline">
            Back to Lapland Tours
          </CtaButton>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What to confirm before booking
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Meeting point / pickup</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Exact location, time window, and what happens if youâ€™re late.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Gear included</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Clothing, boots, helmets, and what you must bring yourself.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Cancellation terms</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Cutoff times, no-show rules, weather cancellation handling.
            </p>
          </Card>
        </div>

        <p className="mt-10 text-sm text-brand-text/70">
          If anything is unclear, use{" "}
          <Link href="/get-help" className="font-semibold hover:underline">
            Get Help
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}