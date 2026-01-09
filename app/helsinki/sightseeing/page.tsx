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
  {
    title: "Daylight & road conditions",
    body: "In winter, map timing can be optimistic. Darkness and weather change what’s realistic.",
    icon: "🌒",
  },
  {
    title: "Parking plan (not hope)",
    body: "Unknown parking means unknown timing. Unknown timing breaks itineraries.",
    icon: "🅿️",
  },
  {
    title: "Pickup timing buffer",
    body: "Add buffer for desk queues and paperwork. Don’t schedule the day on the tightest chain.",
    icon: "🕒",
  },
  {
    title: "Card & deposit",
    body: "Confirm acceptance and hold expectations before you fly. Desk rejection ruins the day.",
    icon: "💳",
  },
  {
    title: "Backup option",
    body: "If you lose the car plan, know your fallback transport mode before you commit.",
    icon: "🧩",
  },
] as const;

const decisionRows = [
  { goal: "Easy city day", defaultChoice: "Walk + transit", why: "Lowest friction" },
  { goal: "Multiple outside stops", defaultChoice: "Car (with buffers)", why: "Flexibility" },
  { goal: "Tight time window", defaultChoice: "Avoid car day", why: "Pickup/parking kills speed" },
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

export default function HelsinkiSightseeingPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki sightseeing: build it around friction, not optimism."
        subtitle="The city is easy until you stack timing, distance, and parking into one day."
        imageSrc="/images/hero/hero-helsinki-sightseeing.jpg"
        primaryCta={{ href: "/helsinki/city-mobility", label: "City mobility checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental planning" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Sightseeing
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Two modes: city core vs day-trip style
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Most sightseeing stress comes from one mistake: treating a “car day” like it has the same timing as a walking day.
          Split your plan into two modes and the day stops fighting back.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill icon="🚋">City core: walk + transit</Pill>
          <Pill icon="🚗">Day-trip style: car helps</Pill>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-900">
              Mode A
            </div>
            <h3 className="mt-3 text-lg font-semibold">City core (walk + transit)</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Best for compact plans and low friction. You avoid the parking tax entirely and your buffer goes further.
            </p>
          </Card>

          <Card className="p-6 bg-slate-50">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-900">
              Mode B
            </div>
            <h3 className="mt-3 text-lg font-semibold">Day-trip style (car helps)</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Best for multiple stops outside the core. Add winter buffers and don’t run tight schedules.
            </p>
          </Card>
        </div>

        <h3 className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
          5 checks before you commit to a “car day”
        </h3>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <span aria-hidden="true">{c.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="mt-2 text-sm text-brand-text/70">{c.body}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Decision table</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Defaults that reduce schedule fragility.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-3 px-4">Goal</th>
                    <th className="py-3 px-4">Default</th>
                    <th className="py-3 px-4">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.goal} className="border-b border-slate-200 last:border-b-0">
                      <td className="py-3 px-4 font-medium">{r.goal}</td>
                      <td className="py-3 px-4">{r.defaultChoice}</td>
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
              Keep the chain simple. If the day depends on timing, don’t stack “fragile” blocks back-to-back.
            </p>

            <div className="mt-5 grid gap-3 text-sm">
              <Link
                href="/helsinki/sauna"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Sauna routing</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/helsinki/restaurants"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Restaurant planning</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/helsinki/ferry-cruise"
                className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                <span>Ferry timing</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-auto pt-6 grid gap-3">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Car rental planning
              </CtaButton>
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get help
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
