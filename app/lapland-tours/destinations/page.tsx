import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Lapland Tour Destinations | TheNorthTrip",
  description:
    "Lapland destinations overview: how to choose between Rovaniemi, Levi, SaariselkÃ¤, YllÃ¤s, and Inari based on tradeoffs and fragility.",
};

const destinations = [
  {
    name: "Rovaniemi",
    href: "/lapland-tours/rovaniemi",
    bestFor: "First-time Lapland travellers, convenient access, broad activity menu.",
    breaksWhen: "You assume everything is close-by or available late without checking windows.",
  },
  {
    name: "Levi",
    href: "/lapland-tours/levi",
    bestFor: "Resort-style stay, structured activities, winter sports focus.",
    breaksWhen: "You book a tight chain and underestimate transfer + recovery time.",
  },
  {
    name: "SaariselkÃ¤",
    href: "/lapland-tours/saariselka",
    bestFor: "Quieter base, nature-first pacing, fewer crowds.",
    breaksWhen: "You rely on last-minute availability or late-day backups.",
  },
  {
    name: "YllÃ¤s",
    href: "/lapland-tours/yllas",
    bestFor: "Space, trails, calm, winter landscape focus.",
    breaksWhen: "You plan like itâ€™s a city and forget distances + early fatigue.",
  },
  {
    name: "Inari",
    href: "/lapland-tours/inari",
    bestFor: "Culture + wilderness feel, slower trip, intentional pacing.",
    breaksWhen: "You treat it as a quick add-on without buffer and logistics planning.",
  },
];

const seasonal = [
  { aspect: "Daylight + pacing", summer: "Long days, higher capacity", winter: "Short days, fatigue earlier" },
  { aspect: "Backup options", summer: "More flexibility", winter: "Less late-day recovery" },
  { aspect: "Tour reliance", summer: "More self-guided viable", winter: "More reliance on fixed-time services" },
];

const misunderstandings = [
  "Lapland is one place, so the base doesnâ€™t matter",
  "Winter only changes scenery, not feasibility",
  "You can pack fixed-time tours every day without fatigue cost",
  "Transfers are trivial",
  "Everything runs late like big tourist hubs",
  "You can always reschedule if something slips",
  "Aurora is a guaranteed â€˜eventâ€™",
  "You donâ€™t need buffers because Finland is â€˜organizedâ€™",
  "A tighter itinerary equals a better trip",
  "Rules and cutoffs are negotiable if you ask nicely",
];

export default function LaplandDestinationsPage() {
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
            <Link href="/getting-around-finland" className="hover:text-slate-900">Getting around</Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">Offer checklist</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Lapland destinations: choose the least fragile base
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          The â€œbestâ€ destination is the one that fits your pacing and logistics tolerance. Lapland failures
          usually come from tight chains, under-buffered transfers, and winter fatigue not priced into the plan.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {destinations.map((d) => (
            <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-lg">{d.name}</h2>
              <p className="mt-2 text-sm text-slate-700"><span className="font-medium">Best for:</span> {d.bestFor}</p>
              <p className="mt-2 text-sm text-slate-700"><span className="font-medium">Breaks when:</span> {d.breaksWhen}</p>
              <div className="mt-4">
                <Link
                  href={d.href}
                  className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Open guide
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
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

          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h2 className="font-semibold">Decision filter (fast)</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>If missing one segment ruins the day, simplify the chain.</li>
              <li>In winter, reduce daily ambition and add earlier stops.</li>
              <li>Pick a base that reduces transfers, not just â€œlooks coolâ€.</li>
              <li>If something must happen, get it confirmed in writing.</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/viator">Viator</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/getyourguide">GetYourGuide</Link>
              <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/arctic-lifestyle">Arctic Lifestyle</Link>
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
          <h2 className="font-semibold">Internal links</h2>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/">/</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours">/lapland-tours</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">/lapland-tours/rovaniemi</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/levi">/lapland-tours/levi</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/saariselka">/lapland-tours/saariselka</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/yllas">/lapland-tours/yllas</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/inari">/lapland-tours/inari</Link>
            <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
            <Link className="underline hover:text-slate-900" href="/policy">/policy</Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}


