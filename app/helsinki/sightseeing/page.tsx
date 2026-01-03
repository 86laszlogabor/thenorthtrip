export const metadata = { openGraph: { images: ['/images/og/og-helsinki-sightseeing.jpg'] } };

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const seasonal = [
  { aspect: "Pacing capacity", summer: "Higher", winter: "Lower (fatigue earlier)" },
  { aspect: "Outdoor time comfort", summer: "Better", winter: "More limited windows" },
  { aspect: "Plan recovery options", summer: "More", winter: "Less late-day flexibility" },
];

const misunderstandings = [
  "Helsinki is tiny so you can do everything in one day",
  "Distances equal effort",
  "Winter sightseeing is just â€˜wear a coatâ€™",
  "You can chain activities tightly",
  "One missed segment wonâ€™t matter",
  "Indoor options are unlimited everywhere",
  "Everything is open with the same hours year-round",
  "Late arrival days can still be packed",
  "Local services will flex if your plan slips",
  "Best plan is the most ambitious plan",
];

const decision = [
  { situation: "One full day", best: "Pick 2â€“3 priorities, keep buffer, avoid over-chaining" },
  { situation: "Winter day trip", best: "Shorten outdoor segments; plan indoor fallback" },
  { situation: "Late arrival day", best: "Do one simple anchor activity, then flexible options" },
  { situation: "Family / heavy luggage", best: "Reduce walking and segment count" },
];

export default function HelsinkiSightseeingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-cathedral.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/helsinki/city-mobility" className="hover:text-slate-900">City mobility</Link>
            <Link href="/helsinki/ferry-cruise" className="hover:text-slate-900">Ferry & cruise</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki sightseeing: pacing beats ambition
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Most Helsinki sightseeing failures are self-inflicted: tight chains, optimistic walking assumptions,
          and winter fatigue not priced into the plan. Choose fewer anchors. Add buffer. Keep a fallback.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">A simple way to plan</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-2">
              <li>Choose 1â€“2 anchor activities you care about.</li>
              <li>Keep the rest flexible and close-by.</li>
              <li>If a miss would ruin the day, add buffer or remove a segment.</li>
              <li>In winter: shorten outdoor time, plan indoor fallback.</li>
            </ol>
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
              <Link className="underline hover:text-slate-900" href="/helsinki/city-mobility">/helsinki/city-mobility</Link>
              <Link className="underline hover:text-slate-900" href="/helsinki/sauna">/helsinki/sauna</Link>
              <Link className="underline hover:text-slate-900" href="/helsinki/restaurants">/helsinki/restaurants</Link>
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





