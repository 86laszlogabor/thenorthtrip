export const metadata = { openGraph: { images: ['/images/og/og-helsinki-ferry-cruise.jpg'] } };

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const seasonal = [
  { aspect: "Weather disruption", summer: "Lower impact", winter: "Higher impact on comfort and schedules" },
  { aspect: "Terminal movement", summer: "Easier", winter: "Slower with layers/luggage" },
  { aspect: "Recovery options", summer: "More choices", winter: "Fewer late-day backups" },
];

const misunderstandings = [
  "Terminals are always close and easy to reach",
  "You can arrive late and still board",
  "Tickets are interchangeable across operators",
  "Walking time with luggage is trivial",
  "Security/check-in steps are always identical",
  "Ferries wait for late connections",
  "Winter affects comfort only",
  "Every departure has a same-day backup",
  "â€˜Downtownâ€™ means the same thing for every terminal",
  "Procedures will bend if you explain your situation",
];

const decision = [
  { situation: "Tight day trip plan", safer: "Add buffer or pick fewer fixed commitments" },
  { situation: "Late departure/return", safer: "Confirm last connections back to your accommodation" },
  { situation: "Winter travel day", safer: "Assume slower movement and build extra margin" },
  { situation: "Multiple segments (train/bus + ferry)", safer: "Reduce chain complexity; prefer direct routing" },
];

export default function HelsinkiFerryCruisePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-ferry.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/helsinki/airport-transfers" className="hover:text-slate-900">Airport transfers</Link>
            <Link href="/helsinki/city-mobility" className="hover:text-slate-900">City mobility</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki ferries & cruises: buffer beats optimism
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Missed departures usually come from timing chains: airport arrival, terminal transfer,
          check-in steps, and last services. Treat ferries like flights: arrive early, verify terminal details,
          and donâ€™t rely on â€œtheyâ€™ll waitâ€.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">Verify explicitly</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Terminal name and exact entrance (not â€œnear the centerâ€).</li>
              <li>Check-in / boarding cutoff times.</li>
              <li>How you get back after arrival: last tram/metro/bus windows.</li>
              <li>Whether weather affects the crossing or only comfort.</li>
              <li>If your plan depends on one connection, what the fallback is.</li>
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
                  <th className="py-2">Safer move</th>
                </tr>
              </thead>
              <tbody>
                {decision.map((r) => (
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
              <Link className="underline hover:text-slate-900" href="/helsinki/city-mobility">/helsinki/city-mobility</Link>
              <Link className="underline hover:text-slate-900" href="/helsinki/airport-transfers">/helsinki/airport-transfers</Link>
              <Link className="underline hover:text-slate-900" href="/getting-around-finland">/getting-around-finland</Link>
              <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
              <Link className="underline hover:text-slate-900" href="/policy">/policy</Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}





