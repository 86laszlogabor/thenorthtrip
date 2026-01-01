import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Inari Lapland Tours | TheNorthTrip",
  description:
    "Inari as a Lapland base: what to expect, seasonal tradeoffs, common misunderstandings, and a decision table for planning with buffer.",
};

const seasonal = [
  { aspect: "Pace and daylight", summer: "Higher capacity", winter: "Lower capacity, earlier fatigue" },
  { aspect: "Spontaneity", summer: "More flexible", winter: "More reliance on fixed-time services" },
  { aspect: "Recovery options", summer: "More backups", winter: "Fewer late-day fallbacks" },
];

const misunderstandings = [
  "Inari is a quick add-on like a city neighborhood",
  "Winter only affects comfort, not feasibility",
  "You can run tight chains and still relax",
  "Transfers are trivial",
  "Everything is open with the same hours year-round",
  "You can always reschedule tours easily",
  "Aurora is guaranteed",
  "Local rules will flex if you ask",
  "Driving time equals total day time",
  "Bigger itinerary equals better trip",
];

const decisionRows = [
  { situation: "Short stay (1â€“2 nights)", safer: "Pick fewer fixed commitments; buffer transfers" },
  { situation: "Winter trip", safer: "Conservative pacing; earlier starts; fewer segments" },
  { situation: "Tour-heavy plan", safer: "Anchor one main activity/day; keep rest flexible" },
  { situation: "Car vs no car", safer: "Choose the least fragile chain; verify timing windows before booking" },
];

export default function InariPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-lapland-inari-lake.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/lapland-tours" className="hover:text-slate-900">Lapland tours hub</Link>
            <Link href="/lapland-tours/destinations" className="hover:text-slate-900">Destinations</Link>
            <Link href="/get-help" className="hover:text-slate-900">Get help</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Inari: slower Lapland, better if you respect logistics
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Inari tends to reward travellers who want fewer, deeper days. The failure mode is treating it as a
          â€œquick stopâ€ and under-buffering transfers and winter pacing.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Transfer chain: if one miss breaks the day, simplify.</li>
              <li>Service and tour windows for your dates (donâ€™t assume peak-season availability).</li>
              <li>Winter pacing: plan fewer segments and earlier arrivals.</li>
              <li>Refund/change terms for fixed-time activities.</li>
              <li>Whether you have a viable same-day fallback if plans slip.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h2 className="font-semibold">Seasonal changes table</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left">
                  <tr className="border-b">
                    <th className="py-2 pr-4">Aspect</th>
                    <th className="py-2 pr-4">Summer</th>
                    <th className="py-2">Winter</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonal.map((r) => (
                    <tr key={r.aspect} className="border-b">
                      <td className="py-2 pr-4 font-medium">{r.aspect}</td>
                      <td className="py-2 pr-4 text-slate-700">{r.summer}</td>
                      <td className="py-2 text-slate-700">{r.winter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold">10 common misunderstandings</h2>
          <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            {misunderstandings.map((x) => <li key={x}>{x}</li>)}
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold">Decision table</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left">
                <tr className="border-b">
                  <th className="py-2 pr-4">Situation</th>
                  <th className="py-2">Safer plan</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((r) => (
                  <tr key={r.situation} className="border-b">
                    <td className="py-2 pr-4 font-medium">{r.situation}</td>
                    <td className="py-2 text-slate-700">{r.safer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-sm text-slate-700">
            <p className="font-medium">Internal links</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link className="underline hover:text-slate-900" href="/lapland-tours">/lapland-tours</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/destinations">/lapland-tours/destinations</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/saariselka">/lapland-tours/saariselka</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">/lapland-tours/rovaniemi</Link>
              <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
              <Link className="underline hover:text-slate-900" href="/policy">/policy</Link>
              <Link className="underline hover:text-slate-900" href="/get-help">/get-help</Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}



