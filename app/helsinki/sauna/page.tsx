import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Helsinki Sauna Guide | TheNorthTrip",
  description:
    "Helsinki sauna basics without awkward mistakes: etiquette, timing, what to bring, booking expectations, and winter logistics.",
};

const seasonal = [
  { aspect: "Post-sauna movement", summer: "Easy", winter: "More tiring, colder, slower" },
  { aspect: "Crowding", summer: "Variable", winter: "Often higher at peak times" },
  { aspect: "Outdoor transitions", summer: "Milder", winter: "More intense" },
];

const misunderstandings = [
  "Sauna is a tourist show, not a routine",
  "Everyone speaks a lot and explains everything",
  "Etiquette is flexible if youâ€™re new",
  "You can always walk in at peak time",
  "Winter makes sauna less relevant",
  "You can rush it like a quick activity slot",
  "What to bring doesnâ€™t matter",
  "Silence means people are unhappy",
  "Rules are negotiable if you ask nicely",
  "Location doesnâ€™t matter for return logistics",
];

const decision = [
  { situation: "Tight schedule day", best: "Book a buffer; avoid rushing to the next fixed commitment" },
  { situation: "Winter evening", best: "Choose a sauna close to your base or with easy transport back" },
  { situation: "First sauna experience", best: "Pick a straightforward option; focus on comfort and pacing" },
  { situation: "Crowd-avoidance", best: "Go earlier; avoid peak weekend windows" },
];

export default function HelsinkiSaunaPage() {
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
            <Link href="/helsinki/city-mobility" className="hover:text-slate-900">City mobility</Link>
            <Link href="/helsinki/restaurants" className="hover:text-slate-900">Restaurants</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Helsinki sauna: what travellers get wrong
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Sauna culture is calm and procedural. Instructions are brief. Silence is normal.
          The main mistakes are pacing and logistics, not â€œdoing it wrongâ€.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <h2 className="font-semibold">Practical checks</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Confirm whether booking/reservation is needed at your time.</li>
              <li>Plan a buffer before and after, especially in winter.</li>
              <li>Bring basics: towel, water, simple layers for after.</li>
              <li>Respect the space: calm behavior, clean habits, follow posted rules.</li>
              <li>Choose location based on return logistics, not just vibes.</li>
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
              <Link className="underline hover:text-slate-900" href="/helsinki/city-mobility">/helsinki/city-mobility</Link>
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


