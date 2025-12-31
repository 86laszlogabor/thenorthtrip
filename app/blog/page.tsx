import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Finland travel decisions, explained.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Short, practical articles that support bookings and avoid bad assumptions.
        </p>
        <div className="mt-8">
          <CtaButton href="/blog" variant="primary">
            Browse Articles
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Categories:</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <h3 className="text-lg font-semibold">Car rental</h3>
            <p className="mt-2 text-sm text-brand-text/70">Intent: deposits, debit vs credit, winter tyres, insurance language.</p>
            <p className="mt-3 text-sm">
              <Link href="/car-rental-helsinki" className="font-semibold hover:underline">Car Rental Helsinki â†’</Link>
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Lapland tours</h3>
            <p className="mt-2 text-sm text-brand-text/70">Intent: choosing tour types, seasonal timing, destination comparisons.</p>
            <p className="mt-3 text-sm">
              <Link href="/lapland-tours" className="font-semibold hover:underline">Lapland Tours â†’</Link>
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Camper rental</h3>
            <p className="mt-2 text-sm text-brand-text/70">Intent: winterization, routes, stations, legal/parking realities.</p>
            <p className="mt-3 text-sm">
              <Link href="/camper-rental-finland" className="font-semibold hover:underline">Camper Rental Finland â†’</Link>
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Getting around</h3>
            <p className="mt-2 text-sm text-brand-text/70">Intent: mode comparisons, itineraries, transfer logic.</p>
            <p className="mt-3 text-sm">
              <Link href="/getting-around-finland" className="font-semibold hover:underline">Getting Around Finland â†’</Link>
            </p>
          </Card>
        </div>

        <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">Example posts (SEO placeholders, realistic titles)</h2>
        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          {[
            "â€œHelsinki car rental deposit: what to expect (and what to confirm)â€",
            "â€œDebit card vs credit card in Finland rentals: common patternsâ€",
            "â€œLapland tour types: husky vs snowmobile vs aurora, how to chooseâ€",
            "â€œRovaniemi vs Levi: which base fits your trip?â€",
            "â€œCamper rental in winter: what â€˜winterizedâ€™ actually meansâ€",
            "â€œTrain vs flight to Lapland: time, cost, and transfer frictionâ€",
          ].map((t) => (
            <Card key={t}>
              <p className="text-sm text-brand-text/70">{t}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-10">
          <h3 className="text-lg font-semibold">Every article must link back to:</h3>
          <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
            <li>Relevant money page</li>
            <li>Rental Terms &amp; Prices</li>
            <li>Get Help (if issues are common)</li>
          </ul>
        </Card>
      </Section>
    </div>
  );
}
