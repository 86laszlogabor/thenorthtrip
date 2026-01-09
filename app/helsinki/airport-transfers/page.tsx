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
] as const;

const traps = [
  { label: "Transfers run all night", icon: "🌙" },
  { label: "Taxis are always instant", icon: "🚕" },
  { label: "Walking time is negligible with luggage", icon: "🧳" },
  { label: "Missing one connection is always recoverable", icon: "⛓️" },
  { label: "Winter only affects comfort, not viability", icon: "❄️" },
  { label: "Last service waits for delays", icon: "🕒" },
] as const;

const decisionRows = [
  { situation: "Late night arrival", safer: "Taxi or pre-arranged transfer (with buffer)" },
  { situation: "Tight connection chain", safer: "Add buffer or choose fewer segments" },
  { situation: "Heavy luggage / family travel", safer: "Reduce walking and segment count" },
  { situation: "Winter + unfamiliar route", safer: "Over-buffer and avoid last-service dependence" },
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

export default function HelsinkiAirportTransfersPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki Airport transfers: timing and buffer traps"
        subtitle="Transfers rarely fail because Finland is chaotic. They fail when your flight meets the last service, a long walk with luggage, or a tight connection chain."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Offer checklist" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Transport decisions" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Airport transfers
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Decision-first guide (so you don’t “figure it out” at 01:10)
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Build buffer. Reduce segments. Verify late-night realities. The safest plan is the one that still works when you’re tired, cold, and delayed.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          {/* LEFT: VERIFY */}
          <Card className="flex flex-col p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">✅</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">What to verify before you land</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  This is the boring part. It’s also the part that prevents “why is everything closed?” moments.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-brand-text/70">
              <li className="flex gap-2">
                <span aria-hidden="true">🕒</span>
                <span>
                  Check the last service timing for your exact route (don’t assume it “runs late”).
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">🧳</span>
                <span>
                  Use real walking time with luggage between exits/platforms (add margin).
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">⛓️</span>
                <span>
                  If you miss one link, confirm whether you can recover the same night.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">❄️</span>
                <span>
                  Winter changes pace and feasibility. Treat it like a constraint, not a vibe.
                </span>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <CtaButton href="/offer-checklist" variant="primary" className="w-full sm:w-auto">
                  Open checklist
                </CtaButton>
                <CtaButton href="/get-help" variant="outline" className="w-full sm:w-auto">
                  Get a calm review
                </CtaButton>
              </div>
            </div>
          </Card>

          {/* RIGHT: SEASONAL TABLE */}
          <Card className="flex flex-col p-6 bg-slate-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">📅</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Seasonal changes</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Availability swings with season. The “safe” plan is the one that still functions after delays.
                </p>
              </div>
            </div>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-3 px-4">Aspect</th>
                    <th className="py-3 px-4">Summer</th>
                    <th className="py-3 px-4">Winter</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {seasonal.map((r) => (
                    <tr key={r.aspect} className="border-b border-slate-200 last:border-b-0">
                      <td className="py-3 px-4 font-medium">{r.aspect}</td>
                      <td className="py-3 px-4">{r.summer}</td>
                      <td className="py-3 px-4">{r.winter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-auto pt-6">
              <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
                See the transport decision page
              </CtaButton>
            </div>
          </Card>
        </div>

        {/* TRAPS + DECISION TABLE */}
        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">6 common traps (the ones that actually break nights)</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Short list on purpose. The removed items were generic or too easy to misread as promises.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {traps.map((t) => (
                <Pill key={t.label} icon={t.icon}>
                  {t.label}
                </Pill>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-800">
                <span className="font-semibold">Rule of thumb:</span> If your plan relies on the last service, it’s fragile. Fix the chain, not your mood.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Decision table</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Pick by failure risk. You can do “efficient” later, when you’re not landing late.
            </p>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-sm bg-white">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-3 px-4">Situation</th>
                    <th className="py-3 px-4">Safer choice</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  {decisionRows.map((r) => (
                    <tr key={r.situation} className="border-b border-slate-200 last:border-b-0">
                      <td className="py-3 px-4 font-medium">{r.situation}</td>
                      <td className="py-3 px-4">{r.safer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-brand-text/80">Next pages</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/offer-checklist">
                  Checklist →
                </Link>
                <Link className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/rental-terms-prices">
                  Rental terms →
                </Link>
                <Link className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/get-help">
                  Get help →
                </Link>
                <Link className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-50" href="/policy">
                  Policy →
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* TWO CTA CARDS */}
        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">🌙</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">If you’re arriving late</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Don’t bet your first night on a perfect chain. Choose the option that survives delay variance.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get help
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col p-6 bg-slate-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                <span aria-hidden="true">🚗</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">If you’re renting a car right after landing</h3>
                <p className="mt-2 text-sm text-brand-text/70">
                  Your risk shifts from “missed transfer” to desk enforcement. Treat deposit/card acceptance as the failure point.
                </p>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Car rental in Helsinki
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
