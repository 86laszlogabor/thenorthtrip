import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function GetYourGuidePartnerPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland tours / Partners
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          GetYourGuide
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Marketplace option. Great for browsing availability quickly, but confirm meeting point, inclusions, and cancellation terms.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="PASTE_GYG_AFFILIATE_LINK" variant="primary">
            Browse activities
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
            <h3 className="text-lg font-semibold">Meeting point</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Exact meeting location and timing window.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Gear included</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Clothing/boots/helmets and what you must bring.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Cancellation window</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Cutoff times and what happens under weather disruption.
            </p>
          </Card>
        </div>

        <p className="mt-10 text-sm text-brand-text/70">
          If you’re unsure, use{" "}
          <Link href="/get-help" className="font-semibold hover:underline">
            Get Help
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}