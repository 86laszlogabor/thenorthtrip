import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Partner: Viator | TheNorthTrip",
  description:
    "Viator partner guidance for Lapland: how to verify meeting points, cutoffs, and policy constraints so your booking doesn’t collapse on arrival.",
};

const verify = [
  "Meeting point location and arrival buffer",
  "Cutoff time and what counts as no-show",
  "What is included vs optional add-ons",
  "Cancellation/change rules in writing",
  "Transfers and responsibilities (yours vs operator’s)",
];

const misunderstandings = [
  "Aggregator listings guarantee delivery",
  "Cutoff times are flexible",
  "If you arrive late, they’ll wait",
  "Policies are negotiable",
  "All ‘similar’ tours have identical constraints",
  "Winter doesn’t change viability",
  "You can chain multiple fixed-time bookings safely",
  "Aurora/wildlife is guaranteed",
  "Photos equal inclusions",
  "If something breaks, refunds are automatic",
];

function TopNav() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          TheNorthTrip
        </Link>
        <nav className="flex gap-4 text-sm text-slate-700">
          <Link href="/lapland-tours" className="hover:text-slate-900">
            Lapland tours hub
          </Link>
          <Link href="/lapland-tours/destinations" className="hover:text-slate-900">
            Destinations
          </Link>
          <Link href="/policy" className="hover:text-slate-900">
            Policy
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function PartnerViatorPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-partner-viator.jpg"
      />

      <TopNav />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Partner: Viator</h1>
          <p className="mt-3 text-slate-700">
            Viator is a marketplace. Your real risk is procedural: meeting points, cutoffs, transfers, and cancellation
            rules. Verify what is enforced and build buffer around it.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Verify these items</h2>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {verify.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <div className="mt-5">
              <Link
                href="/offer-checklist"
                className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Use the offer checklist
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold">Booking discipline</h2>
            <ol className="mt-4 list-decimal pl-5 text-sm text-slate-700 space-y-2">
              <li>Don’t chain multiple fixed start times without buffers.</li>
              <li>In winter, assume slower movement and earlier fatigue.</li>
              <li>If missing one item breaks the day, simplify the plan.</li>
              <li>Save written confirmations for anything critical.</li>
            </ol>
            <p className="mt-4 text-xs text-slate-500">
              Reminder: weather and natural phenomena aren’t guaranteed.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold">10 common misunderstandings</h2>
          <ol className="mt-4 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            {misunderstandings.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold">Internal links</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/lapland-tours/destinations">
              /lapland-tours/destinations
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">
              /lapland-tours/rovaniemi
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/levi">
              /lapland-tours/levi
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/inari">
              /lapland-tours/inari
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/getyourguide">
              /lapland-tours/partners/getyourguide
            </Link>
            <Link className="underline hover:text-slate-900" href="/offer-checklist">
              /offer-checklist
            </Link>
            <Link className="underline hover:text-slate-900" href="/policy">
              /policy
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2026-01-09</p>
      </section>
    </main>
  );
}
