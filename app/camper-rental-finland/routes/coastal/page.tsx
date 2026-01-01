import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Finland Coastal Camper Route | TheNorthTrip",
  description:
    "Coastal camper route planning in Finland: what to verify, seasonal changes, common misunderstandings, and a decision table for making it less fragile.",
};

const seasonal = [
  { aspect: "Daylight & pace", summer: "Long days, higher capacity", winter: "Short days, slower pace" },
  { aspect: "Road conditions", summer: "Predictable", winter: "More variability and fatigue" },
  { aspect: "Flexibility", summer: "More options open", winter: "More closures / reduced services" },
];

const misunderstandings = [
  "Coastal equals â€˜easyâ€™ so no buffers are needed",
  "You can improvise every night without any friction",
  "Driving time equals total time",
  "Winter only changes comfort, not feasibility",
  "All stops have similar services and opening hours",
  "One missed segment wonâ€™t matter",
  "You can arrive late and everything still works",
  "Camper logistics donâ€™t affect sightseeing plans",
  "Parking and access are always straightforward",
  "Rules and procedures will bend if youâ€™re polite",
];

const decisionRows = [
  { situation: "Short trip window", safer: "Fewer stops, more buffer, avoid over-chaining" },
  { situation: "Winter or shoulder season", safer: "Shorten daily distances and plan earlier arrivals" },
  { situation: "Family / heavy setup", safer: "Reduce movement frequency; choose simpler nightly plans" },
  { situation: "Multiple fixed bookings", safer: "Anchor days, keep travel days light" },
];

export default function CoastalRoutePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-default.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/camper-rental-finland" className="hover:text-slate-900">Camper hub</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
            <Link href="/get-help" className="hover:text-slate-900">Get help</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Coastal camper route: keep it simple, keep it early
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Coastal routes feel â€œeasyâ€ because access is familiar. Thatâ€™s how people over-pack days,
          arrive late, and then discover logistics friction. Your goal is not maximum stops. Itâ€™s a route
          that still works when youâ€™re tired.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Real driving time plus setup/pack-up time (daily).</li>
              <li>Where you can realistically park and sleep (by your rules and local rules).</li>
              <li>Which services you depend on (and their seasonal hours).</li>
              <li>Whether your plan collapses if you arrive 1â€“2 hours later than expected.</li>
              <li>Weather impact in winter or shoulder season: pace, fatigue, and backups.</li>
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
              <Link className="underline hover:text-slate-900" href="/">/</Link>
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland">/camper-rental-finland</Link>
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland/routes/helsinki-lapland">/camper-rental-finland/routes/helsinki-lapland</Link>
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland/routes/southern-lakes">/camper-rental-finland/routes/southern-lakes</Link>
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


