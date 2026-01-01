import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Camper Station: Helsinki | TheNorthTrip",
  description:
    "Helsinki camper pickup: what to verify, timing buffers, city constraints, seasonal changes, and common misunderstandings.",
};

const seasonal = [
  { aspect: "Pickup-day pace", summer: "More forgiving", winter: "More tiring, needs buffer" },
  { aspect: "Driving comfort", summer: "Higher", winter: "Lower, slower and more cautious" },
  { aspect: "Plan recovery options", summer: "More", winter: "Less late-day flexibility" },
];

const misunderstandings = [
  "Pickup day can also be a full sightseeing day",
  "Helsinki is small so timing doesnâ€™t matter",
  "Vehicle handover is always fast",
  "Winter only changes comfort, not feasibility",
  "You can arrive late and still complete everything smoothly",
  "Parking and access are straightforward everywhere",
  "The first night location doesnâ€™t matter",
  "Supplies are always easy to get anytime",
  "If something goes wrong, procedures will bend",
  "A long day one is fine if youâ€™re motivated",
];

const decisionRows = [
  { situation: "Same-day flight arrival + pickup", safer: "Keep day one light; avoid long drives immediately" },
  { situation: "Winter pickup", safer: "Earlier pickup time, shorter first leg, more buffer" },
  { situation: "City-heavy day", safer: "Separate city day from pickup day if possible" },
  { situation: "Late pickup window", safer: "Verify handover rules; plan a near-by first night fallback" },
];

export default function CamperStationHelsinkiPage() {
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
            <Link href="/helsinki/airport-transfers" className="hover:text-slate-900">Airport transfers</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Camper pickup station: Helsinki
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Helsinki is a common start point, which makes it easy to overpack day one. Pickup is not a
          formality. Treat it like an operational day: handover, checks, supplies, and a conservative first leg.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify at/around pickup</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Exact pickup location and access (do not assume â€œnear airport/centerâ€).</li>
              <li>Handover steps: time required, documentation, and what is checked.</li>
              <li>Return expectations: fuel, cleanliness, inspection process (as described in your contract).</li>
              <li>First-night plan: choose something that still works if pickup runs late.</li>
              <li>Winter pace: treat the first driving leg as shorter than you want.</li>
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


