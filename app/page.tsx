import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero (55–65vh, full-bleed) */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2400&q=70)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative mx-auto max-w-site px-4 py-14 md:py-16 lg:py-20 flex items-center min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh]">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
              Rent smarter in Finland.
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90 text-balance">
              Compare trusted partners, understand the real rules, and avoid the mistakes that cost travelers time and money.
            </p>

            <div className="mt-8">
              <CtaButton href="/car-rental-helsinki" variant="primary">
                Compare Best Options
              </CtaButton>
            </div>

            <p className="mt-5 text-sm text-white/80">
              Partner-first recommendations, with transparent notes on how the market really works.
            </p>
          </div>
        </div>
      </section>

      {/* Core entry points (4 blocks) */}
      <Section>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col">
            <h2 className="text-lg font-semibold">Car Rental Helsinki</h2>
            <p className="mt-2 text-sm text-brand-text/70">
              The fastest path to a clean booking. Partners first, then what to expect at pickup.
            </p>
            <Link href="/car-rental-helsinki" className="mt-auto pt-4 text-sm font-semibold hover:underline">
              Open Car Rental Helsinki →
            </Link>
          </Card>

          <Card className="flex flex-col">
            <h2 className="text-lg font-semibold">Lapland Tours</h2>
            <p className="mt-2 text-sm text-brand-text/70">
              Operators, tour types, and destinations. Choose what fits your trip.
            </p>
            <Link href="/lapland-tours" className="mt-auto pt-4 text-sm font-semibold hover:underline">
              Explore Lapland Tours →
            </Link>
          </Card>

          <Card className="flex flex-col">
            <h2 className="text-lg font-semibold">Camper Rental Finland</h2>
            <p className="mt-2 text-sm text-brand-text/70">
              Compare camper partners, stations, and routes. Know the winter realities before you commit.
            </p>
            <Link href="/camper-rental-finland" className="mt-auto pt-4 text-sm font-semibold hover:underline">
              See Camper Options →
            </Link>
          </Card>

          <Card className="flex flex-col">
            <h2 className="text-lg font-semibold">Getting Around Finland</h2>
            <p className="mt-2 text-sm text-brand-text/70">
              Train vs bus vs flights vs taxi. Clear tradeoffs and what to double-check.
            </p>
            <Link href="/getting-around-finland" className="mt-auto pt-4 text-sm font-semibold hover:underline">
              Compare Travel Modes →
            </Link>
          </Card>
        </div>
      </Section>

      {/* “5 Costly Mistakes to Avoid” (light blue/gray background) */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">5 Costly Mistakes to Avoid</h2>
        <p className="mt-3 text-sm md:text-base text-brand-text/75 max-w-2xl">
          Most “bad deals” are really bad assumptions. Here are the ones that keep showing up.
        </p>

        {/* 4 cards in a single desktop row (do not add a 5th) */}
        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col">
            <h3 className="text-base font-semibold">Assuming your card will be accepted</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Deposit rules vary. Some desks require credit, some accept debit with conditions. Confirm before you fly.
            </p>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check Availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-base font-semibold">Underestimating winter requirements</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Tyres, visibility, and local conditions matter more than the car model. Know what you’re actually getting.
            </p>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check Availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-base font-semibold">Missing the true total cost</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Fuel policy, extra drivers, young driver fees, and cross-border rules can change the final number fast.
            </p>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check Availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-base font-semibold">Buying the wrong coverage</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Focus on deductible, exclusions, and claim handling. “Insurance included” often hides the important parts.
            </p>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check Availability
              </CtaButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* “Why Trust Our Partners” (split layout) */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why Trust Our Partners</h2>
            <p className="mt-3 text-sm md:text-base text-brand-text/75 max-w-xl">
              Title + short explanation
            </p>

            <ul className="mt-5 space-y-2 text-sm md:text-base text-brand-text/75 list-disc pl-5">
              <li>No hidden-fee surprises in our recommendations</li>
              <li>24/7 customer support options through major platforms</li>
              <li>Trusted by travelers worldwide (and reviewed publicly)</li>
            </ul>

            <p className="mt-5 text-sm text-brand-text/60">
              DiscoverCars • Rentalcars.com • Sixt • Europcar • Hertz • Avis
            </p>
          </div>

          <div className="rounded-card overflow-hidden shadow-soft border border-black/5">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=70"
              alt="calm Finland landscape image"
              className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      {/* Bottom CTA (full-bleed) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=2400&q=70)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

        <div className="relative mx-auto max-w-site px-4 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Find Your Perfect Rental in Finland
          </h2>

          <div className="mt-6">
            <CtaButton href="/car-rental-helsinki" variant="primary">
              Get Started
            </CtaButton>
          </div>

          <p className="mt-4 text-xs text-white/80">
            Start with Helsinki, then expand to Lapland and beyond.
          </p>

          <p className="mt-8 text-sm text-white/85">
            Affiliate disclosure + links to Rental Terms &amp; Prices • Policy • Get Help
          </p>
          <p className="mt-2 text-sm text-white/85">
            <Link href="/rental-terms-prices" className="underline underline-offset-4">
              Rental Terms &amp; Prices
            </Link>{" "}
            •{" "}
            <Link href="/policy" className="underline underline-offset-4">
              Policy
            </Link>{" "}
            •{" "}
            <Link href="/get-help" className="underline underline-offset-4">
              Get Help
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
