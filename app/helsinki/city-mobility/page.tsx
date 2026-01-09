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
  {
    plan: "Mostly city center",
    defaultChoice: "Public transport + walking",
    why: "Less friction than parking + paperwork",
  },
  {
    plan: "2–3 day trips outside Helsinki",
    defaultChoice: "Rental (with buffers)",
    why: "Flexibility beats fixed schedules",
  },
  {
    plan: "Family + lots of gear",
    defaultChoice: "Rental or taxi mix",
    why: "More control, fewer compromises",
  },
  {
    plan: "Tight schedule day",
    defaultChoice: "Avoid a rental that day",
    why: "Pickup + parking eats your timeline",
  },
] as const;

function Pill({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
      <span aria-hidden="true">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function HelsinkiCityMobilityPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki mobility: a car is not automatically the easy option."
        subtitle="If your plan is mostly the city core, a rental can turn into paid friction: parking, timing, and unnecessary risk."
        imageSrc="/images/hero/hero-helsinki-city.jpg"
        primaryCta={{ href: "/car-rental-helsinki", label: "Back to car rental" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Transport decisions" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / City mobility
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Use a car when it buys control. Skip it when it buys friction.
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          The common mistake is assuming “car = faster”. In Helsinki, speed often collapses into parking,
          walking back, and the operational cost of pickup/return. Choose the mode that survives real-world timing.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill icon="🅿️">Parking is the tax</Pill>
          <Pill icon="⏱️">Pickup time counts</Pill>
          <Pill icon="🚋">Transit wins in-core</Pill>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* When it helps */}
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">🚗</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">When a rental actually helps</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Use it for control outside the core, not for “quick hops” inside it.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-brand-text/70">
              <li className="flex gap-2">
                <span aria-hidden="true">📍</span>
                <span>Multiple stops outside the core in one day</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">👶</span>
                <span>Family logistics (stroller, naps, bags)</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🌦️</span>
                <span>Weather comfort, if your day isn’t tight</span>
              </li>
            </ul>
          </Card>

          {/* When it backfires */}
          <Card className="p-6 bg-slate-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">🅿️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">When it backfires</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Parking is not “a detail”. It becomes the whole trip.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-brand-text/70">
              <li className="flex gap-2">
                <span aria-hidden="true">🏙️</span>
                <span>City-only days with “quick hops”</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🌆</span>
                <span>Evenings when parking is roulette</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🧾</span>
                <span>Tight schedules where pickup eats your plan</span>
              </li>
            </ul>
          </Card>

          {/* Smart starting point */}
          <Card className="flex flex-col p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">🎯</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">A smart starting point</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Transit + walking for city days, then rent only for the day-trip day.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Car rental page
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          {/* Decision table */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Decision table</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Choose the least fragile default for your plan.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-3 px-4">Your plan</th>
                    <th className="py-3 px-4">Better default</th>
                    <th className="py-3 px-4">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.plan} className="border-b border-slate-200 last:border-b-0">
                      <td className="py-3 px-4 font-medium">{r.plan}</td>
                      <td className="py-3 px-4">{r.defaultChoice}</td>
                      <td className="py-3 px-4">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Next steps (no “internal routes” cringe) */}
          <Card className="flex flex-col p-6 bg-slate-50">
            <h3 className="text-lg font-semibold">Next steps</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              If you do rent, treat it like an operational decision: timing, rules, and where you’ll actually park.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/rental-terms-prices"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Rental terms that bite</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/offer-checklist"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Offer checklist</span>
                <span aria-hidden="true">→</span>
              </Link>

              <div className="grid gap-3 sm:grid-cols-2">
                <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
                  Transport decisions
                </CtaButton>
                <CtaButton href="/get-help" variant="success" className="w-full">
                  Get help
                </CtaButton>
              </div>
            </div>

            <div className="mt-auto pt-6 text-xs text-brand-text/60">
              Practical note: Central Helsinki parking costs can be high in the central zones. Plan for paid parking if you bring a car into the core.
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
