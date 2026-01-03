export const metadata = { openGraph: { images: ['/images/og/og-lapland-saariselka.jpg'] } };

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const seasonal = [
  { aspect: "Pacing comfort", summer: "Higher", winter: "Lower; fatigue earlier" },
  { aspect: "Spontaneity", summer: "More flexible", winter: "More reliance on fixed-time services" },
  { aspect: "Fallback options", summer: "More", winter: "Fewer late-day backups" },
];

const misunderstandings = [
  "Quieter base means you can wing everything",
  "Winter only changes comfort",
  "Transfers and meeting points donâ€™t matter",
  "Everything is open the same as peak season",
  "You can chain activities tightly",
  "One missed segment wonâ€™t matter",
  "Aurora is guaranteed if you stay long enough",
  "Rules will flex if you ask",
  "Driving time equals total day time",
  "More bookings equals better trip",
];

const decisionRows = [
  { situation: "Short stay", safer: "Pick 1 anchor/day; avoid tight chains" },
  { situation: "Winter trip", safer: "Conservative pacing; earlier starts; fewer segments" },
  { situation: "No car", safer: "Verify transfers and meeting points before booking" },
  { situation: "Tour-heavy plan", safer: "Build buffers; accept fallback activities" },
];

export default function SaariselkaPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-lapland-saariselka.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/lapland-tours" className="hover:text-slate-900">Lapland tours hub</Link>
            <Link href="/lapland-tours/destinations" className="hover:text-slate-900">Destinations</Link>
            <Link href="/lapland-tours/partners/viator" className="hover:text-slate-900">Viator</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          SaariselkÃ¤: quieter base, less forgiveness for fragile chains
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          SaariselkÃ¤ is great for travellers who want a calmer, nature-first pace. The tradeoff:
          fewer late-day recovery options. If your plan depends on tight chains, it becomes brittle fast.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Transfer details and meeting points for any booked activities.</li>
              <li>Seasonal service windows (donâ€™t assume peak-season hours).</li>
              <li>Whether you can recover same-day if one thing slips.</li>
              <li>Winter pace assumptions: shorter days, earlier fatigue.</li>
              <li>Cancellation/change terms for each booking.</li>
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
              <Link className="underline hover:text-slate-900" href="/lapland-tours/inari">/lapland-tours/inari</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/yllas">/lapland-tours/yllas</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/getyourguide">/lapland-tours/partners/getyourguide</Link>
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





