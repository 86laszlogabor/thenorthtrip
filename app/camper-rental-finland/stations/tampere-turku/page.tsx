import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Camper Stations: Tampere & Turku | TheNorthTrip",
  description:
    "Tampere and Turku camper pickup: practical checks, timing buffers, seasonal changes, and the common misunderstandings that derail plans.",
};

const seasonal = [
  { aspect: "Same-day travel chains", summer: "More forgiving", winter: "Less forgiving" },
  { aspect: "Availability", summer: "More options", winter: "More limited windows" },
  { aspect: "Walking/handling logistics", summer: "Easier", winter: "Slower and more tiring" },
];

const misunderstandings = [
  "Regional pickups are always easier than Helsinki",
  "You can schedule a tight chain because itâ€™s â€˜not a big cityâ€™",
  "Pickup day can be a full activity day",
  "Winter only affects comfort, not feasibility",
  "You can arrive late and still have the same options",
  "Services are always close and open",
  "Handover is always quick",
  "First night location doesnâ€™t matter",
  "If something goes wrong, procedures will bend",
  "Driving time equals total time",
];

const decisionRows = [
  { situation: "Arriving by train/bus before pickup", safer: "Add buffer; avoid â€˜last serviceâ€™ dependencies" },
  { situation: "Late pickup time", safer: "Plan a near-by first night fallback and keep day light" },
  { situation: "Winter pickup", safer: "Earlier pickup, shorter first leg, conservative pacing" },
  { situation: "Multi-stop plan immediately", safer: "Delay ambitious routing until day two" },
];

export default function CamperStationsTampereTurkuPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-camper-station-tampere-turku.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/camper-rental-finland" className="hover:text-slate-900">Camper hub</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
            <Link href="/getting-around-finland" className="hover:text-slate-900">Getting around</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Camper pickup stations: Tampere & Turku
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Regional pickup points can reduce city friction, but they introduce a new failure mode:
          transfer chains (train/bus + pickup window) and reduced backup options. Buffer wins.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Exact pickup address and arrival method (walk, taxi, transit).</li>
              <li>Whether your transfer chain has a same-day fallback if delayed.</li>
              <li>Handover time and documentation needs.</li>
              <li>First-night plan that still works if pickup runs late.</li>
              <li>Winter pacing: conservative first leg, earlier arrival targets.</li>
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
              <Link className="underline hover:text-slate-900" href="/camper-rental-finland/routes/southern-lakes">/camper-rental-finland/routes/southern-lakes</Link>
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



