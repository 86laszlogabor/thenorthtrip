import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Camper Station: Rovaniemi | TheNorthTrip",
  description:
    "Rovaniemi camper pickup: Lapland constraints, winter pace, timing buffers, seasonal changes, and common mistakes that break plans.",
};

const seasonal = [
  { aspect: "Driving pace", summer: "Higher", winter: "Lower, slower, more fatigue" },
  { aspect: "Backup options", summer: "More", winter: "Fewer late-day fallbacks" },
  { aspect: "Daylight effect", summer: "Less limiting", winter: "More limiting" },
];

const misunderstandings = [
  "Rovaniemi pickup means you can immediately do a full tour day",
  "Winter only changes comfort, not feasibility",
  "Distances in Lapland feel short because the map is simple",
  "You can arrive late and still have good options",
  "Everything runs on the same schedule as in summer",
  "A tight chain is fine because Finland is â€˜organizedâ€™",
  "You donâ€™t need to plan recovery options",
  "Vehicle handover is always quick",
  "The first night location doesnâ€™t matter",
  "Rules will flex if you explain your situation",
];

const decisionRows = [
  { situation: "Winter pickup day", safer: "Keep day one light; short first leg; early target stop" },
  { situation: "Late pickup time", safer: "Plan a close first-night fallback that works if delayed" },
  { situation: "Tour booked the same day", safer: "Avoid chaining: separate pickup day from fixed-time tours" },
  { situation: "New to winter driving", safer: "Conservative pacing and fewer moves per day" },
];

export default function CamperStationRovaniemiPage() {
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
            <Link href="/lapland-tours" className="hover:text-slate-900">Lapland tours</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Camper pickup station: Rovaniemi
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Rovaniemi is an easy Lapland entry point, and thatâ€™s exactly why people over-chain plans.
          The failure mode is timing plus winter pace. Treat pickup day as a controlled start, not a full itinerary day.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Exact pickup location and access (avoid â€œitâ€™s in townâ€ assumptions).</li>
              <li>Handover scope: checks, time required, and what is documented.</li>
              <li>Whether your first-night plan still works if pickup runs late.</li>
              <li>Winter pacing: plan shorter legs, earlier arrivals, and fewer segments.</li>
              <li>Return logistics: what counts as â€œacceptable conditionâ€ per your contract.</li>
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
              <Link className="underline hover:text-slate-900" href="/lapland-tours">/lapland-tours</Link>
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


