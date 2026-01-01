import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Levi Lapland Tours | TheNorthTrip",
  description:
    "Levi as a Lapland base: resort-style planning, seasonal tradeoffs, misunderstandings, and decision guidance to avoid fragile itineraries.",
};

const seasonal = [
  { aspect: "Structure", summer: "More flexible days", winter: "More fixed windows and peak-time crowding" },
  { aspect: "Pacing", summer: "Higher", winter: "Lower; fatigue earlier" },
  { aspect: "Backup options", summer: "More", winter: "Less late-day recovery" },
];

const misunderstandings = [
  "Resort base means you can chain activities tightly",
  "Winter only affects comfort",
  "You can always get last-minute availability",
  "Transfer time is negligible",
  "Everything runs late like big tourist cities",
  "One missed slot wonâ€™t matter",
  "You can overpack day one and recover easily",
  "Aurora is guaranteed if you book something",
  "Rules and cutoffs are negotiable",
  "The best plan is the most ambitious plan",
];

const decisionRows = [
  { situation: "Peak winter week", safer: "Book key items early; keep buffers; avoid tight chains" },
  { situation: "Family trip", safer: "One anchor activity/day; reduce late-evening complexity" },
  { situation: "Short stay", safer: "Fewer fixed bookings; prioritize proximity and recovery" },
  { situation: "Weather-sensitive activities", safer: "Choose flexible options and accept fallback plans" },
];

export default function LeviPage() {
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
            <Link href="/lapland-tours" className="hover:text-slate-900">Lapland tours hub</Link>
            <Link href="/lapland-tours/destinations" className="hover:text-slate-900">Destinations</Link>
            <Link href="/lapland-tours/partners/getyourguide" className="hover:text-slate-900">GetYourGuide</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Levi: structured Lapland, if you donâ€™t over-chain it
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Levi works well for travellers who like a structured base. The failure mode is treating a resort
          like a city and chaining fixed-time bookings without buffers, especially in winter.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Exact meeting points and cutoffs for booked activities.</li>
              <li>Transfer time plus winter pace (walking, waiting, clothing changes).</li>
              <li>Cancellation/change rules for each booking.</li>
              <li>Whether your day still works if one activity shifts or is cancelled.</li>
              <li>Peak-time crowding: plan earlier and avoid tight chains.</li>
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
              <Link className="underline hover:text-slate-900" href="/lapland-tours/yllas">/lapland-tours/yllas</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">/lapland-tours/rovaniemi</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/viator">/lapland-tours/partners/viator</Link>
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


