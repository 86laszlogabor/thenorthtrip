import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export default function PolicyPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Affiliate disclosure, promotions rules, update method, what the site is and is not.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-3xl">
          Affiliate disclosure, promotions rules, update method, what the site is and is not.
        </p>
        <div className="mt-8">
          <CtaButton href="/policy" variant="primary">
            Read Policy
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <Card>
          <h2 className="text-2xl font-semibold">Affiliate disclosure</h2>
          <p className="mt-3 text-sm text-brand-text/70">
            We may earn a commission when you book through our links. This doesnâ€™t change your price, but it helps fund comparisons, updates, and support.
          </p>
        </Card>

        <Card className="mt-6">
          <h2 className="text-2xl font-semibold">Promotions</h2>
          <p className="mt-3 text-sm text-brand-text/70">
            Promotions Section title: Promotions and deals We only show promotions that: are visible on partner pages or official sources include clear conditions are time-stamped when published No fake countdowns. No â€œexclusiveâ€ claims unless verified.
          </p>
        </Card>

        <Card className="mt-6">
          <h2 className="text-2xl font-semibold">Update &amp; verification method</h2>
          <p className="mt-3 text-sm text-brand-text/70">
            Update &amp; verification method Section title: How we review content We check partner listings and policy pages regularly. We add â€œLast verifiedâ€ dates on comparison-heavy pages. Terms and prices can change. Always confirm at booking. Verification methods label examples: Provider policy page Checkout terms screenshot (internal) Supplier website What weâ€™re not We are not a rental desk, not a tour operator, and not a legal authority. We summarize and route you to partners and support.
          </p>
        </Card>
      </Section>
    </div>
  );
}
