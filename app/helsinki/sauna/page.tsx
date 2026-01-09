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
  {
    title: "One sauna anchor per day",
    body: "Pick one main sauna and route the day around it. Stacking time-sensitive blocks is how plans snap.",
    icon: "🧭",
  },
  {
    title: "Assume +45 minutes of friction",
    body: "Parking, walking, queues, changing. Add it by default and the evening stops surprising you.",
    icon: "⏱️",
  },
  {
    title: "If you drive: sauna last",
    body: "Wet gear + winter transitions + peak-hour timing. Putting sauna last prevents cascading delays.",
    icon: "🚗",
  },
] as const;

const decisionRows = [
  { day: "City-only day", better: "Transit + walking", why: "Avoids the parking tax" },
  { day: "Day trip + sauna", better: "Sauna last", why: "Prevents time collisions" },
  { day: "Peak hour evening", better: "Reserve + arrive early", why: "Queues are predictable" },
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

export default function HelsinkiSaunaPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki sauna by car, without the schedule collapse."
        subtitle="The hidden friction is parking + peak hours. Route it like a plan, not an afterthought."
        imageSrc="/images/hero/hero-helsinki-sauna.jpg"
        primaryCta={{ href: "/helsinki/city-mobility", label: "City mobility checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental planning" }}
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

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill icon="🧭">One anchor</Pill>
          <Pill icon="⏱️">+45 min friction</Pill>
          <Pill icon="🚗">Sauna last if driving</Pill>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((r) => (
            <Card key={r.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <span aria-hidden="true">{r.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-brand-text/70">{r.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Decision table</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Defaults that stop the end-of-day timing spiral.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-3 px-4">Your day</th>
                    <th className="py-3 px-4">Better move</th>
                    <th className="py-3 px-4">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.day} className="border-b border-slate-200 last:border-b-0">
                      <td className="py-3 px-4 font-medium">{r.day}</td>
                      <td className="py-3 px-4">{r.better}</td>
                      <td className="py-3 px-4">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="flex flex-col p-6 bg-slate-50">
            <h3 className="text-lg font-semibold">Useful next steps</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Keep the chain simple. Remove fragile assumptions first, then lock the details.
            </p>

            <div className="mt-5 grid gap-3 text-sm">
              <Link
                href="/helsinki/restaurants"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Restaurant planning</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/helsinki/sightseeing"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Sightseeing planning</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/rental-terms-prices"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Rental terms that bite</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-auto pt-6 grid gap-3">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get help
              </CtaButton>
              <CtaButton href="/helsinki/city-mobility" variant="outline" className="w-full">
                City mobility checklist
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
