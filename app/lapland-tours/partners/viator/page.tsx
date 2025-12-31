import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function ViatorPartnerPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland tours / Partners
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Viator
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Marketplace option. Useful filters and structured listings, but you still need to verify the details that matter.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="PASTE_VIATOR_AFFILIATE_LINK" variant="primary">
            Browse tours
          </CtaButton>
          <CtaButton href="/lapland-tours" variant="outline">
            Back to Lapland Tours
          </CtaButton>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What to double-check on listings
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Group size</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Small group vs big bus changes the whole experience.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Language</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Confirm the tour language and what happens if it’s “mixed”.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Pickup options</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Hotel pickup vs meeting point, and the timing window.
            </p>
          </Card>
        </div>

        <p className="mt-10 text-sm text-brand-text/70">
          For clean policy comparison, see{" "}
          <Link href="/rental-terms-prices" className="font-semibold hover:underline">
            Terms &amp; Prices
          </Link>
          .
        </p>
      </Section>
    </div>
  );
}