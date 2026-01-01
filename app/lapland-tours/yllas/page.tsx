import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "YllÃ¤s Lapland Tours | TheNorthTrip",
  description:
    "YllÃ¤s as a Lapland base: space and calm, seasonal tradeoffs, misunderstandings, and decision guidance to keep plans resilient.",
};

const seasonal = [
  { aspect: "Outdoor capacity", summer: "Higher", winter: "Lower; fatigue earlier" },
  { aspect: "Late-day recovery", summer: "More forgiving", winter: "Less forgiving" },
  { aspect: "Spontaneity", summer: "More flexible", winter: "More fixed windows / planning needed" },
];

const misunderstandings = [
  "YllÃ¤s is â€˜close enoughâ€™ to everything",
  "Winter only changes comfort",
  "You can pack a tight chain because itâ€™s a resort area",
  "Transfers are trivial",
  "Everything is open late and always available",
  "One missed segment wonâ€™t matter",
  "You can overpack day one and be fine",
  "Rules will flex if you explain",
  "Aurora is guaranteed",
  "More bookings equals better trip",
];

const decisionRows = [
  { situation: "Winter outdoor focus", safer: "Shorten days; plan earlier; build buffers" },
  { situation: "Short stay", safer: "Pick 1â€“2 anchors; avoid over-chaining" },
  { situation: "No car", safer: "Verify meeting points, transfers, and cutoffs before booking" },
  { situation: "Tour-heavy plan", safer: "Keep one main activity/day; keep rest flexible" },
];

export default function YllasPage() {
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
          YllÃ¤s: space and calm, if you plan with margin
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          YllÃ¤s rewards a calmer pace. The failure mode is pretending distances and winter fatigue donâ€™t exist.
          Reduce segments, plan earlier, and avoid itinerary chains that collapse from one slip.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Meeting points and cutoff times for booked activities.</li>
              <li>Transfer details if youâ€™re not driving.</li>
              <li>Winter pace assumptions: shorter effective days.</li>
              <li>Whether you can recover same-day if a segment slips.</li>
              <li>Cancellation/change rules in writing.</li>
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
              <Link className="underline hover:text-slate-900" href="/lapland-tours/levi">/lapland-tours/levi</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/saariselka">/lapland-tours/saariselka</Link>
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


