import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Sauna Routing | TheNorthTrip",
  description:
    "Sauna by car sounds simple until parking and timing collide. Decision-first routing so your day doesn’t collapse into peak-hour chaos.",
  openGraph: {
    title: "Helsinki Sauna Routing | TheNorthTrip",
    description:
      "Sauna by car sounds simple until parking and timing collide. Decision-first routing so your day doesn’t collapse into peak-hour chaos.",
    images: ["/images/og/og-helsinki-sauna.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Sauna Routing | TheNorthTrip",
    description:
      "Sauna by car sounds simple until parking and timing collide. Decision-first routing so your day doesn’t collapse into peak-hour chaos.",
    images: ["/images/og/og-helsinki-sauna.jpg"],
  },
};

const rules = [
  { title: "One sauna anchor per day", body: "Pick one main sauna and route the day around it. Don’t stack time-sensitive blocks." },
  { title: "Assume +45 minutes friction", body: "Parking, walking, queues, changing. Add friction by default and surprises disappear." },
  { title: "Sauna last if you’re driving", body: "Wet gear + winter transitions + timing. Sauna last prevents cascading delays." },
];

export default function HelsinkiSaunaPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki sauna by car, without the schedule collapse."
        subtitle="The hidden friction is parking + peak hours. Route it like a plan, not an afterthought."
        imageSrc="/images/hero/hero-helsinki-sauna.jpg"
        primaryCta={{ href: "/helsinki/city-mobility", label: "City mobility checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Back to car rental hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Sauna
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Sauna is easy. Sauna + timing is where plans die.
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Sauna “hopping” sounds harmless until you mix it with winter pace, parking roulette, and peak-hour dinner.
          Use a simple routing model and your day stays intact.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((r) => (
            <Card key={r.title}>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{r.body}</p>
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
                    <td className="py-2 pr-4 font-medium">City-only day</td>
                    <td className="py-2 pr-4">Transit + walking</td>
                    <td className="py-2">Avoids parking tax</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Day trip + sauna</td>
                    <td className="py-2 pr-4">Sauna last</td>
                    <td className="py-2">Prevents time collisions</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Peak hour evening</td>
                    <td className="py-2 pr-4">Reserve + arrive early</td>
                    <td className="py-2">Queues are predictable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/helsinki/restaurants" className="font-semibold hover:underline text-brand-text/70">
                Restaurant planning →
              </Link>
              <Link href="/helsinki/sightseeing" className="font-semibold hover:underline text-brand-text/70">
                Sightseeing hubs →
              </Link>
              <Link href="/rental-terms-prices" className="font-semibold hover:underline text-brand-text/70">
                Rental terms checklist →
              </Link>
            </div>

            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
              <CtaButton href="/car-rental-helsinki" variant="outline" className="w-full">
                Back to car rental hub
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
