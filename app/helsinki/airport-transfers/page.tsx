import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Helsinki Airport Transfers | TheNorthTrip",
  description:
    "Helsinki Airport transfers explained: trains, buses, taxis, buffers, late arrivals, and common timing mistakes that break plans.",
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
  "Airports are effectively â€˜centralâ€™",
  "Luggage doesnâ€™t change the plan",
  "Hotels remove transfer risk",
  "Rules are the same everywhere",
  "Winter only affects comfort, not viability",
];

const decisionRows = [
  { arrival: "Late night arrival", safer: "Taxi or pre-arranged transfer (with buffer)" },
  { arrival: "Tight connection chain", safer: "Add buffer or choose fewer segments" },
  { arrival: "Heavy luggage / family travel", safer: "Reduce walking and segment count" },
  { arrival: "Winter + unfamiliar route", safer: "Over-buffer and avoid â€˜last serviceâ€™ dependence" },
];

export default function HelsinkiAirportTransfersPage() {
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
            <Link href="/getting-around-finland" className="hover:text-slate-900">Getting around</Link>
            <Link href="/get-help" className="hover:text-slate-900">Get help</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki Airport transfers: timing and buffer traps
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Transfers rarely fail because â€œFinland is chaotic.â€ They fail when your flight meets the
          last service, a long walk with luggage, or a tight connection chain.
          Build buffer. Reduce segments. Verify late-night realities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify before you land</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Last train/bus time for your route (do not assume â€œruns lateâ€).</li>
              <li>Real walking time with luggage between platforms/exits.</li>
              <li>Whether your accommodation has late check-in procedures.</li>
              <li>If you miss one link, whether you can recover same-day.</li>
              <li>Whether winter pace changes the feasibility, not just comfort.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h2 className="font-semibold">Seasonal changes</h2>
            <p className="mt-2 text-sm text-slate-700">
              Service availability swings with season. The safest plan is the one that still works when youâ€™re tired.
            </p>
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
                  <th className="py-2">Safer choice</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((r) => (
                  <tr key={r.arrival} className="border-b">
                    <td className="py-2 pr-4 font-medium">{r.arrival}</td>
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
              <Link className="underline hover:text-slate-900" href="/getting-around-finland">/getting-around-finland</Link>
              <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
              <Link className="underline hover:text-slate-900" href="/car-rental-helsinki">/car-rental-helsinki</Link>
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


