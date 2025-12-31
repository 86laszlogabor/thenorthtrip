import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "TheNorthTrip | Decision-first Finland travel",
  description:
    "Compare trusted partners, understand the real rules, and avoid the mistakes that cost travelers time and money.",
};

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[72vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-finland-winter-road.jpg"
            alt="Winter road in Finland"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Rent smarter in Finland.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Compare trusted partners, understand the real rules, and avoid the
              mistakes that cost travelers time and money.
            </p>

            <div className="mt-8">
              <CtaButton href="/car-rental-helsinki">Compare Best Options</CtaButton>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Partner-first recommendations, with transparent notes on how the
              market really works.
            </p>
          </div>
        </div>
      </section>

      {/* ENTRY CARDS (4) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
              image="/images/home-entry-car.jpg"
              title="Car Rental Helsinki"
              description="The fastest path to a clean booking. Partners first, then what to expect at pickup."
              ctaLabel="Open Car Rental Helsinki"
              ctaHref="/car-rental-helsinki"
              highlighted
            />

            <Card
              image="/images/home-entry-lapland.jpg"
              title="Lapland Tours"
              description="Operators, tour types, and destinations. Choose what fits your trip."
              ctaLabel="Explore Lapland Tours"
              ctaHref="/lapland-tours"
            />

            <Card
              image="/images/home-entry-camper.jpg"
              title="Camper Rental Finland"
              description="Compare camper partners, stations, and routes. Know the winter realities before you commit."
              ctaLabel="See Camper Options"
              ctaHref="/camper-rental-finland"
            />

            <Card
              image="/images/home-entry-transport.jpg"
              title="Getting Around Finland"
              description="Train vs bus vs flights vs taxi. Clear tradeoffs and what to double-check."
              ctaLabel="Compare Travel Modes"
              ctaHref="/getting-around-finland"
            />
          </div>
        </div>
      </section>

      {/* 5 COSTLY MISTAKES (4) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 pb-14">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              5 Costly Mistakes to Avoid
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              Most â€œbad dealsâ€ are really bad assumptions. Here are the ones that
              keep showing up.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
              image="/images/mistake-fees.jpg"
              title="Assuming your card will be accepted"
              description="Deposit rules vary. Some desks require credit, some accept debit with conditions. Confirm before you fly."
              ctaLabel="Check Availability"
              ctaHref="/car-rental-helsinki"
            />

            <Card
              image="/images/mistake-winter.jpg"
              title="Underestimating winter requirements"
              description="Tyres, visibility, and local conditions matter more than the car model. Know what youâ€™re actually getting."
              ctaLabel="Check Availability"
              ctaHref="/car-rental-helsinki"
              highlighted
            />

            <Card
              image="/images/mistake-card.jpg"
              title="Missing the true total cost"
              description="Fuel policy, extra drivers, young driver fees, and cross-border rules can change the final number fast."
              ctaLabel="Check Availability"
              ctaHref="/car-rental-helsinki"
            />

            <Card
              image="/images/mistake-insurance.jpg"
              title="Buying the wrong coverage"
              description="Focus on deductible, exclusions, and claim handling. â€œInsurance includedâ€ often hides the important parts."
              ctaLabel="Check Availability"
              ctaHref="/car-rental-helsinki"
            />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Why Trust Our Partners
              </h2>
              <p className="mt-2 text-sm text-slate-600">Title + short explanation</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <span>No hidden-fee surprises in our recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <span>24/7 customer support options through major platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
                  <span>Trusted by travelers worldwide (and reviewed publicly)</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  DiscoverCars
                </span>
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  Rentalcars.com
                </span>
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  Sixt
                </span>
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  Europcar
                </span>
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  Hertz
                </span>
                <span className="border-b-2 border-emerald-600 pb-0.5 text-slate-700">
                  Avis
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/images/trust-finland-lake-boat.jpg"
                alt="Finland lake scenery"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Find Your Perfect Trip in Finland
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Start with Helsinki, then expand to Lapland and beyond.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <CtaButton href="/offer-checklist">Get Started</CtaButton>
                <a
                  href="/car-rental-helsinki"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  Compare options
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Terms and prices can change. Always confirm at booking.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src="/images/cta-aurora-reindeer.jpg"
                alt="Lapland reindeer"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}