import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Sightseeing Hubs | TheNorthTrip",
  description:
    "Decision-first sightseeing planning: what works by foot/transit, what benefits from a car, and how to avoid timing traps.",
  openGraph: {
    title: "Helsinki Sightseeing Hubs | TheNorthTrip",
    description:
      "Decision-first sightseeing planning: what works by foot/transit, what benefits from a car, and how to avoid timing traps.",
    images: ["/images/og/og-helsinki-sightseeing.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Sightseeing Hubs | TheNorthTrip",
    description:
      "Decision-first sightseeing planning: what works by foot/transit, what benefits from a car, and how to avoid timing traps.",
    images: ["/images/og/og-helsinki-sightseeing.jpg"],
  },
};

const checks = [
  { title: "Daylight & road conditions", body: "In winter, Google time is optimistic. Darkness and weather change everything." },
  { title: "Parking plan (not hope)", body: "Unknown parking means unknown timing. Unknown timing breaks itineraries." },
  { title: "Pickup timing buffer", body: "Add buffer for desk queues and paperwork, especially at the airport." },
  { title: "Card & deposit", body: "Confirm acceptance and hold amount before you fly. Desk rejection ruins days." },
  { title: "Backup option", body: "If you lose the car: know your fallback transport mode in advance." },
];

export default function HelsinkiSightseeingPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki sightseeing: build it around friction, not optimism."
        subtitle="The city is easy until you stack timing, distance, and parking into one day."
        imageSrc="/images/hero/hero-helsinki-sightseeing.jpg"
        primaryCta={{ href: "/helsinki/city-mobility", label: "City mobility checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Sightseeing
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Two modes: city core vs day-trip style
        </h2>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Mode A: City core (walk + transit)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Best for compact plans and low friction. You avoid the parking tax entirely.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Mode B: Day-trip style (car helps)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Best for multiple stops outside the core. Add winter buffers and don’t run tight schedules.
            </p>
          </Card>
        </div>

        <h3 className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
          5 checks before you commit to a “car day”
        </h3>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title}>
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="mt-3 text-sm text-brand-text/70">{c.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/helsinki/sauna" className="font-semibold hover:underline text-brand-text/70">
                Sauna routing →
              </Link>
              <Link href="/helsinki/restaurants" className="font-semibold hover:underline text-brand-text/70">
                Restaurant planning →
              </Link>
              <Link href="/helsinki/ferry-cruise" className="font-semibold hover:underline text-brand-text/70">
                Ferry timing →
              </Link>
            </div>

            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Back to car rental hub
              </CtaButton>
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Decision table</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Goal</th>
                    <th className="py-2 pr-4">Default</th>
                    <th className="py-2">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Easy city day</td>
                    <td className="py-2 pr-4">Walk + transit</td>
                    <td className="py-2">Lowest friction</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Multiple outside stops</td>
                    <td className="py-2 pr-4">Car (with buffers)</td>
                    <td className="py-2">Flexibility</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Tight time window</td>
                    <td className="py-2 pr-4">Avoid car day</td>
                    <td className="py-2">Pickup/parking kills speed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
