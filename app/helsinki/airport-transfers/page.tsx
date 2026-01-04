import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Airport Transfers | Timing & Buffer Traps | TheNorthTrip",
  description:
    "Decision-first Helsinki Airport transfers guide: late-night realities, walking time with luggage, winter viability, and a buffer-first plan that survives delays.",
  openGraph: {
    title: "Helsinki Airport Transfers | TheNorthTrip",
    description:
      "Decision-first Helsinki Airport transfers guide: late-night realities, walking time with luggage, winter viability, and a buffer-first plan that survives delays.",
    images: ["/images/og/og-helsinki-airport-transfers.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Airport Transfers | TheNorthTrip",
    description:
      "Decision-first Helsinki Airport transfers guide: late-night realities, walking time with luggage, winter viability, and a buffer-first plan that survives delays.",
    images: ["/images/og/og-helsinki-airport-transfers.jpg"],
  },
};

const seasonal = [
  { aspect: "Night options", summer: "Better coverage", winter: "More limited windows" },
  { aspect: "Walking effort with luggage", summer: "Easier", winter: "Slower, less comfortable" },
  { aspect: "Recovery margin after a miss", summer: "Wider", winter: "Narrower" },
];

const misunderstandings = [
  "Transfers run all night",
  "Taxis are always instant",
  "Trains wait for late arrivals",
  "Walking time is negligible with luggage",
  "Missing one connection is always recoverable",
  "Airports are effectively ‘central’",
  "Luggage doesn’t change the plan",
  "Hotels remove transfer risk",
  "Rules are the same everywhere",
  "Winter only affects comfort, not viability",
];

const decisionRows = [
  { situation: "Late night arrival", safer: "Taxi or pre-arranged transfer (with buffer)" },
  { situation: "Tight connection chain", safer: "Add buffer or choose fewer segments" },
  { situation: "Heavy luggage / family travel", safer: "Reduce walking and segment count" },
  { situation: "Winter + unfamiliar route", safer: "Over-buffer and avoid ‘last service’ dependence" },
];

export default function HelsinkiAirportTransfersPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki Airport transfers: timing and buffer traps"
        subtitle="Transfers rarely fail because Finland is chaotic. They fail when your flight meets the last service, a long walk with luggage, or a tight connection chain."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Compare transport modes" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Airport transfers
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Decision-first guide (so you don’t “figure it out” at 01:10)
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Build buffer. Reduce segments. Verify late-night realities. The safest plan is the one that still
          works when you’re tired, cold, and delayed.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">What to verify before you land</h3>
            <ul className="mt-4 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>Last train/bus time for your route (do not assume “runs late”).</li>
              <li>Real walking time with luggage between platforms/exits.</li>
              <li>Whether your accommodation has late check-in procedures.</li>
              <li>If you miss one link, whether you can recover same-day.</li>
              <li>Whether winter pace changes feasibility, not just comfort.</li>
            </ul>

            <div className="mt-auto pt-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton href="/offer-checklist" variant="primary">
                  Offer checklist
                </CtaButton>
                <CtaButton href="/get-help" variant="outline">
                  Get help
                </CtaButton>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Seasonal changes</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Service availability swings with season. The “safe” plan is the one that still functions after delays.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Aspect</th>
                    <th className="py-2 pr-4">Summer</th>
                    <th className="py-2">Winter</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {seasonal.map((r) => (
                    <tr key={r.aspect} className="border-b border-slate-200">
                      <td className="py-2 pr-4 font-medium">{r.aspect}</td>
                      <td className="py-2 pr-4">{r.summer}</td>
                      <td className="py-2">{r.winter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-auto pt-5">
              <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
                Compare transport modes
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">10 common misunderstandings</h3>
            <ol className="mt-4 list-decimal pl-5 text-sm text-brand-text/70 space-y-1">
              {misunderstandings.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ol>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Decision table</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Situation</th>
                    <th className="py-2">Safer choice</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.situation} className="border-b border-slate-200">
                      <td className="py-2 pr-4 font-medium">{r.situation}</td>
                      <td className="py-2">{r.safer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-brand-text/80">Internal links</p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <Link className="font-semibold hover:underline text-brand-text/70" href="/">
                  Home
                </Link>
                <Link className="font-semibold hover:underline text-brand-text/70" href="/getting-around-finland">
                  Getting around
                </Link>
                <Link className="font-semibold hover:underline text-brand-text/70" href="/offer-checklist">
                  Offer checklist
                </Link>
                <Link className="font-semibold hover:underline text-brand-text/70" href="/car-rental-helsinki">
                  Car rental hub
                </Link>
                <Link className="font-semibold hover:underline text-brand-text/70" href="/get-help">
                  Get help
                </Link>
                <Link className="font-semibold hover:underline text-brand-text/70" href="/policy">
                  Policy
                </Link>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">If you’re arriving late</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Don’t build a plan that depends on the last service. Pick the option that survives delay variance.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">If you’re renting a car right after landing</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Your risk shifts from “missed transfer” to “desk rules”. Deposit/card acceptance is the failure point.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Car rental in Helsinki
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
