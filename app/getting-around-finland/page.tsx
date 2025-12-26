import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function GettingAroundFinlandPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Getting around Finland: the clean tradeoffs.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Compare train, bus, flights, taxi, and other options. Choose based on time, budget, and season.
        </p>
        <div className="mt-8">
          <CtaButton href="/getting-around-finland" variant="primary">
            Plan Your Route
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Decision table comparing:</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { mode: "Train", best: "you want reliable city-to-city travel with low hassle.", check: "timetables, seat classes, station locations.", cta: "Pair with Lapland tours →", href: "/lapland-tours" },
            { mode: "Bus", best: "budget matters and timing is flexible.", check: "luggage rules, night buses, transfer reliability.", cta: "Compare with car rental →", href: "/car-rental-helsinki" },
            { mode: "Flights", best: "time is the priority.", check: "airport transfers, baggage fees, weather delays.", cta: "See Lapland bases →", href: "/lapland-tours" },
            { mode: "Taxi", best: "late arrival, heavy luggage, zero tolerance for stress.", check: "fixed price vs meter, pickup details.", cta: "Get Help with booking →", href: "/get-help" },
            { mode: "Scooter (seasonal)", best: "short city mobility in suitable weather.", check: "seasonal availability, local rules, insurance.", cta: "Explore Helsinki options →", href: "/car-rental-helsinki" },
            { mode: "Ferries", best: "islands, coastal trips, and short scenic travel.", check: "schedules, weather disruption, boarding logistics.", cta: "Explore Helsinki ferry options →", href: "/car-rental-helsinki" },
          ].map((r) => (
            <Card key={r.mode} className="flex flex-col">
              <h3 className="text-lg font-semibold">{r.mode}</h3>
              <p className="mt-3 text-sm text-brand-text/70">
                <span className="font-semibold">Best when:</span> {r.best}
              </p>
              <p className="mt-2 text-sm text-brand-text/70">
                <span className="font-semibold">What to check:</span> {r.check}
              </p>
              <div className="mt-auto pt-4">
                <Link href={r.href} className="text-sm font-semibold hover:underline">
                  {r.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Routing section:</h2>
        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/car-rental-helsinki" className="font-semibold hover:underline">Car Rental Helsinki</Link>
            </p>
          </Card>
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/lapland-tours" className="font-semibold hover:underline">Lapland Tours</Link>
            </p>
          </Card>
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/camper-rental-finland" className="font-semibold hover:underline">Camper Rental Finland</Link>
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
