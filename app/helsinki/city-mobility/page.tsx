import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Helsinki City Mobility | TheNorthTrip",
  description:
    "How to move around Helsinki: walk, tram/metro/bus, taxis, scooters, and the mistakes that waste time in winter or tight schedules.",
};

const seasonal = [
  { aspect: "Walking", summer: "Easy and fast", winter: "Slower, more tiring" },
  { aspect: "Micro-mobility", summer: "Convenient", winter: "Less reliable / less pleasant" },
  { aspect: "Buffers", summer: "More forgiving", winter: "More necessary" },
];

const misunderstandings = [
  "Everything is walkable in the same way year-round",
  "A tight schedule is fine because transit is â€˜efficientâ€™",
  "Scooters solve last-mile problems in winter",
  "Taxis are always available instantly",
  "One missed tram is irrelevant",
  "Distances equal effort",
  "Late-night mobility is identical to daytime",
  "Helsinki works like any other European city",
  "Weather affects only outdoors",
  "Rules and procedures flex under pressure",
];

const decision = [
  { situation: "Short hops in the center", best: "Walk + tram/metro as needed" },
  { situation: "Tight schedule / fixed booking time", best: "Build buffer, reduce segment count" },
  { situation: "Late evening movements", best: "Verify service windows; have a fallback plan" },
  { situation: "Winter + lots of walking", best: "Shorten routes; avoid optimistic pacing" },
];

export default function HelsinkiCityMobilityPage() {
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
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
            <Link href="/helsinki/airport-transfers" className="hover:text-slate-900">Airport transfers</Link>
            <Link href="/get-help" className="hover:text-slate-900">Get help</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki city mobility: what works, where it breaks
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Helsinki is easy to navigate, but plans still fail on timing assumptions. The biggest
          mistake is treating â€œshortâ€ distances as low effort and building tight chains without buffer.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">Quick reality checks</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Assume walking is slower with luggage, snow, or darkness.</li>
              <li>If missing one connection breaks your day, add buffer or simplify.</li>
              <li>Late-night mobility needs verification, not optimism.</li>
              <li>Use the least fragile route, not the fastest theoretical route.</li>
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
                  <th className="py-2">Better fit</th>
                </tr>
              </thead>
              <tbody>
                {decision.map((r) => (
                  <tr key={r.situation} className="border-b">
                    <td className="py-2 pr-4 font-medium">{r.situation}</td>
                    <td className="py-2 text-slate-700">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 text-sm text-slate-700">
            <p className="font-medium">Internal links</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link className="underline hover:text-slate-900" href="/">/</Link>
              <Link className="underline hover:text-slate-900" href="/helsinki/airport-transfers">/helsinki/airport-transfers</Link>
              <Link className="underline hover:text-slate-900" href="/getting-around-finland">/getting-around-finland</Link>
              <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
              <Link className="underline hover:text-slate-900" href="/get-help">/get-help</Link>
              <Link className="underline hover:text-slate-900" href="/policy">/policy</Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}


