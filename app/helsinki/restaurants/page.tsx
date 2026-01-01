import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Helsinki Restaurants | TheNorthTrip",
  description:
    "How to eat well in Helsinki without itinerary failure: opening hours, reservations, timing buffers, and the common assumptions that waste evenings.",
};

const seasonal = [
  { aspect: "Spontaneity", summer: "More options", winter: "More friction on peak times" },
  { aspect: "Walking between spots", summer: "Easier", winter: "Slower and more tiring" },
  { aspect: "Late-night backups", summer: "More likely", winter: "Less reliable" },
];

const misunderstandings = [
  "Everything is open late like a big tourist city",
  "You can always walk in at peak time",
  "Reservations are only for â€˜fancyâ€™ places",
  "Opening hours are consistent year-round",
  "Distances are small so timing doesnâ€™t matter",
  "One late dinner doesnâ€™t affect tomorrow",
  "Your hotel location makes everything easy",
  "Service culture is flexible under pressure",
  "Weather affects only outdoor seating",
  "â€˜Downtownâ€™ equals same access at night",
];

const decision = [
  { situation: "One-night Helsinki stopover", best: "Keep it simple: one area, one main plan, one fallback" },
  { situation: "Weekend peak dinner", best: "Reserve or accept queue time and build buffer" },
  { situation: "Winter evening with lots of walking", best: "Shorten routes; prioritize close-by options" },
  { situation: "Late arrival day", best: "Choose reliable, simple food options, avoid tight plans" },
];

export default function HelsinkiRestaurantsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-restaurant.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/helsinki/city-mobility" className="hover:text-slate-900">City mobility</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
            <Link href="/get-help" className="hover:text-slate-900">Get help</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki restaurants: planning without over-planning
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Eating in Helsinki is easy if you donâ€™t treat the evening like a tightly chained mission.
          The usual failures are timing: peak-hour queues, winter walking effort, and missing a late-night backup.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Real opening hours for your day (donâ€™t assume â€œdailyâ€).</li>
              <li>If you arrive late: whatâ€™s still open near your location.</li>
              <li>Reservation needs at your target time (especially weekends).</li>
              <li>Walking time and comfort in winter for your chosen areas.</li>
              <li>Your fallback option if the first plan is full.</li>
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
                  <th className="py-2">Safer approach</th>
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
              <Link className="underline hover:text-slate-900" href="/helsinki/airport-transfers">/helsinki/airport-transfers</Link>
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



