import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = {
  openGraph: { images: ['/images/og/og-camper-helsinki-lapland.jpg'] },
  title: "Helsinki to Lapland by Camper | TheNorthTrip",
  description:
    "Helsinki to Lapland by camper: planning buffers, winter fragility, segment choices, and common mistakes that cause route failure.",
};

const seasonal = [
  { aspect: "Daily driving capacity", summer: "Higher", winter: "Lower (fatigue earlier)" },
  { aspect: "Schedule recovery", summer: "More forgiving", winter: "Less forgiving" },
  { aspect: "Availability of services", summer: "More open", winter: "More variable / reduced windows" },
];

const misunderstandings = [
  "Itâ€™s one straight drive so itâ€™s simple",
  "You can do it fast and still enjoy it",
  "Winter only changes scenery, not constraints",
  "You can arrive late and still have a workable night",
  "Driving time equals total day time",
  "A tight itinerary is fine because Finland is â€˜organizedâ€™",
  "You donâ€™t need a fallback plan",
  "Your first day can include a long transfer plus fixed activities",
  "You can keep changing stops without friction",
  "If something goes wrong, rules will bend",
];

const decisionRows = [
  { situation: "Winter drive to Lapland", safer: "Shorten daily distances; arrive earlier; keep buffers" },
  { situation: "First day after flight arrival", safer: "Keep day one light; avoid long pushes immediately" },
  { situation: "Fixed bookings (tours, pickups)", safer: "Anchor days; travel days stay flexible" },
  { situation: "Family / inexperienced winter driving", safer: "Reduce daily targets and complexity; plan conservative" },
];

export default function HelsinkiLaplandRoutePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-lapland-road.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/camper-rental-finland" className="hover:text-slate-900">Camper hub</Link>
            <Link href="/getting-around-finland" className="hover:text-slate-900">Getting around</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki â†’ Lapland by camper: reduce chain fragility
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Helsinki to Lapland looks like a single decision: â€œdrive north.â€ In practice itâ€™s a chain:
          pace, fatigue, day length, services, and what happens if you slip. Winter compresses the whole chain.
          Plan for conservative days and earlier arrivals.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">What to verify before you commit</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Your realistic daily driving capacity (not your optimistic one).</li>
              <li>Whether you can recover if you arrive 1â€“2 hours late to your target stop.</li>
              <li>Which days must be fixed (tours, pickups) and which must be flexible (travel).</li>
              <li>Winter pace assumptions: slower movement, earlier fatigue, fewer backups.</li>
              <li>Vehicle constraints: whatâ€™s allowed, whatâ€™s prohibited, and whatâ€™s â€œavailableâ€ vs â€œincludedâ€.</li>
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
              <Link className="underline hover:text-slate-900" href="/lapland-tours">/lapland-tours</Link>
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






