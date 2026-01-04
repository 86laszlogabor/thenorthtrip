import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Restaurants Planning | TheNorthTrip",
  description:
    "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
  openGraph: {
    title: "Helsinki Restaurants Planning | TheNorthTrip",
    description:
      "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
    images: ["/images/og/og-helsinki-restaurants.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Restaurants Planning | TheNorthTrip",
    description:
      "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
    images: ["/images/og/og-helsinki-restaurants.jpg"],
  },
};

const model = [
  { title: "Pick an anchor meal", body: "Lunch or dinner is the anchor. Route everything else around it." },
  { title: "Avoid peak collisions", body: "Sightseeing end time + sauna slot + dinner peak hour = guaranteed stress." },
  { title: "Driving changes the plan", body: "Parking availability decides whether the evening is smooth or a loop." },
];

export default function HelsinkiRestaurantsPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki restaurants: plan timing first, not just taste."
        subtitle="The hidden cost is friction: peak hours, queues, and parking. Build a plan that stays intact."
        imageSrc="/images/hero/hero-helsinki-restaurants.jpg"
        primaryCta={{ href: "/helsinki/sightseeing", label: "Sightseeing hubs" }}
        secondaryCta={{ href: "/helsinki/sauna", label: "Sauna routing" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Restaurants
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          The planning model (boringly effective)
        </h2>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {model.map((m) => (
            <Card key={m.title}>
              <h3 className="text-lg font-semibold">{m.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{m.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Decision table</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Your day</th>
                    <th className="py-2 pr-4">Better move</th>
                    <th className="py-2">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">City-only walking day</td>
                    <td className="py-2 pr-4">Reserve or go early</td>
                    <td className="py-2">Reduces queue roulette</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Car day</td>
                    <td className="py-2 pr-4">Pick parking-friendly plan</td>
                    <td className="py-2">Avoids end-of-day meltdown</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Sauna + dinner</td>
                    <td className="py-2 pr-4">Dinner after buffer</td>
                    <td className="py-2">Timing is never perfect</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/helsinki/city-mobility" className="font-semibold hover:underline text-brand-text/70">
                City mobility checklist →
              </Link>
              <Link href="/car-rental-helsinki" className="font-semibold hover:underline text-brand-text/70">
                Car rental hub →
              </Link>
              <Link href="/rental-terms-prices" className="font-semibold hover:underline text-brand-text/70">
                Rental terms checklist →
              </Link>
            </div>

            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
              <CtaButton href="/offer-checklist" variant="outline" className="w-full">
                Offer checklist
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
