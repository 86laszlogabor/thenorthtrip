import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki City Mobility | Car vs Public Transport | TheNorthTrip",
  description:
    "Decision-first checklist: when a rental helps in Helsinki, when it creates friction, and how to avoid parking and timing traps.",
  openGraph: {
    title: "Helsinki City Mobility | TheNorthTrip",
    description:
      "Decision-first checklist: when a rental helps in Helsinki, when it creates friction, and how to avoid parking and timing traps.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki City Mobility | TheNorthTrip",
    description:
      "Decision-first checklist: when a rental helps in Helsinki, when it creates friction, and how to avoid parking and timing traps.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
};

const decisionRows = [
  { plan: "Mostly city center", defaultChoice: "Public transport + walking", why: "Less friction than parking + paperwork" },
  { plan: "2–3 day trips outside Helsinki", defaultChoice: "Rental (with buffers)", why: "Flexibility beats fixed schedules" },
  { plan: "Family + lots of gear", defaultChoice: "Rental or taxi mix", why: "Control + comfort, fewer compromises" },
  { plan: "Tight schedule day", defaultChoice: "Avoid rental that day", why: "Pickup + parking kills ‘fast’ plans" },
];

export default function HelsinkiCityMobilityPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki mobility: the car is not automatically the ‘easy option’."
        subtitle="If your plan is mostly the city core, a rental can become paid friction: parking, timing, and unnecessary risk."
        imageSrc="/images/hero/hero-helsinki-city.jpg"
        primaryCta={{ href: "/car-rental-helsinki", label: "Back to car rental hub" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Compare transport modes" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / City mobility
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Use a car when it buys control. Skip it when it buys friction.
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          The usual trap is assuming “car = faster”. In Helsinki, speed often collapses into parking, walking back,
          and the operational cost of pickup/return. Choose the mode that survives real-world timing.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">When a rental helps</h3>
            <ul className="mt-4 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>Multiple stops outside the core in one day</li>
              <li>Family logistics (stroller, naps, bags)</li>
              <li>Weather comfort, if your plan is not tight</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">When it backfires</h3>
            <ul className="mt-4 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>City-center only plans with “quick hops”</li>
              <li>Peak-hour evenings where parking is roulette</li>
              <li>Tight schedules that assume zero delay variance</li>
            </ul>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">The safe default</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              If you’re unsure: go transit + walking for the city, then rent only for the day-trip day.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Car rental hub
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Decision table</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Your plan</th>
                    <th className="py-2 pr-4">Better default</th>
                    <th className="py-2">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.plan} className="border-b border-slate-200">
                      <td className="py-2 pr-4 font-medium">{r.plan}</td>
                      <td className="py-2 pr-4">{r.defaultChoice}</td>
                      <td className="py-2">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/helsinki/sightseeing" className="font-semibold hover:underline text-brand-text/70">
                Sightseeing hubs →
              </Link>
              <Link href="/helsinki/sauna" className="font-semibold hover:underline text-brand-text/70">
                Sauna routing →
              </Link>
              <Link href="/rental-terms-prices" className="font-semibold hover:underline text-brand-text/70">
                Rental terms checklist →
              </Link>
            </div>

            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
                Compare transport modes
              </CtaButton>
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
