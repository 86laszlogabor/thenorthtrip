import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Southern Lakes Camper Route | TheNorthTrip",
  description:
    "Southern lakes by camper in Finland: decision-first planning, seasonal changes, common misunderstandings, and a table to keep the route resilient.",
};

const seasonal = [
  { aspect: "Stops & detours", summer: "More comfortable", winter: "More tiring, slower" },
  { aspect: "Availability", summer: "More open", winter: "More closures / limited windows" },
  { aspect: "Route recovery", summer: "More forgiving", winter: "Less forgiving" },
];

const misunderstandings = [
  "Lakes route means slow, easy days with no planning",
  "Every night is flexible without any friction",
  "Driving time is the only time that matters",
  "Winter makes it quieter, so itâ€™s easier",
  "You can arrive late and still have good options",
  "Services and supplies are always nearby",
  "You can pack multiple fixed bookings on travel days",
  "Fatigue doesnâ€™t compound over multiple days",
  "Parking and access is always straightforward",
  "Rules will flex if you explain your situation",
];

const decisionRows = [
  { situation: "High movement trip (new spot daily)", safer: "Reduce movement; add rest days; keep nightly targets close" },
  { situation: "Shoulder season planning", safer: "Verify whatâ€™s open; avoid dependence on one facility" },
  { situation: "Winter lakes route", safer: "Conservative pacing; shorter days; earlier arrivals" },
  { situation: "Mixing tours with travel days", safer: "Separate travel days from fixed-time activities" },
];

export default function SouthernLakesRoutePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-finland-lakes-road.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/camper-rental-finland" className="hover:text-slate-900">Camper hub</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
            <Link href="/getting-around-finland" className="hover:text-slate-900">Getting around</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Southern lakes by camper: fewer moves, more margin
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Lakes routes look relaxing, but the failure mode is the same: too many moves, late arrivals,
          and dependence on one facility being open. The safer version is fewer relocations and earlier stops.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Which nights require a specific facility and which can be flexible.</li>
              <li>Seasonal opening hours for the services you depend on.</li>
              <li>Realistic daily movement capacity including pack-up/setup.</li>
              <li>Fallbacks if your preferred stop is full or unavailable.</li>
              <li>Winter pace assumptions: daylight, fatigue, and reduced recovery options.</li>
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
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland/routes/coastal">/camper-rental-finland/routes/coastal</Link>
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland/routes/helsinki-lapland">/camper-rental-finland/routes/helsinki-lapland</Link>
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



