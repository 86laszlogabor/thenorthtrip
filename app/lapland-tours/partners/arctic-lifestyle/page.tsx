import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Partner: Arctic Lifestyle | TheNorthTrip",
  description:
    "Partner page for Arctic Lifestyle: how to use aggregators safely, what to verify before booking, and risk-based questions to send.",
};

const verify = [
  "Exact meeting point and cutoff time",
  "What is included vs â€˜availableâ€™",
  "Cancellation/change rules and no-show definition",
  "Transfer details (if any) and your responsibility",
  "Weather dependency and what happens if conditions cancel the activity",
];

const misunderstandings = [
  "Partner page means guaranteed outcomes",
  "All activities are identical across providers",
  "Meeting points donâ€™t matter",
  "Winter conditions donâ€™t change feasibility",
  "You can always reschedule easily",
  "If you arrive late theyâ€™ll wait",
  "Inclusions are the same as the photos",
  "Policies are negotiable",
  "Aggregator summary overrides operator procedures",
  "A tighter schedule is always better",
];

export default function PartnerArcticLifestylePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-partner-arctic-lifestyle.jfif"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TheNorthTrip</Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/lapland-tours" className="hover:text-slate-900">Lapland tours hub</Link>
            <Link href="/lapland-tours/destinations" className="hover:text-slate-900">Destinations</Link>
            <Link href="/policy" className="hover:text-slate-900">Policy</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Partner: Arctic Lifestyle
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          This page is not a promise. Itâ€™s a decision filter. Operators and aggregators are procedural:
          the only way to avoid â€œsurpriseâ€ is verifying whatâ€™s enforced and building buffer.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold">What to verify before booking</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              {verify.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <div className="mt-4">
              <Link
                href="/offer-checklist"
                className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
              >
                Use the offer checklist
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="font-semibold">How to book safely</h2>
            <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-2">
              <li>Decide your tolerance: do you need flexibility or lowest price?</li>
              <li>Verify the 5 items on this page in writing.</li>
              <li>Build buffer around fixed start times and transfers.</li>
              <li>If a miss breaks your day, simplify your plan.</li>
            </ol>
            <p className="mt-4 text-xs text-slate-500">
              Note: outcomes (weather, aurora, wildlife) are not guaranteed.
            </p>
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
            <Link className="underline hover:text-slate-900" href="/lapland-tours">/lapland-tours</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/destinations">/lapland-tours/destinations</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">/lapland-tours/rovaniemi</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/getyourguide">/lapland-tours/partners/getyourguide</Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/viator">/lapland-tours/partners/viator</Link>
            <Link className="underline hover:text-slate-900" href="/offer-checklist">/offer-checklist</Link>
            <Link className="underline hover:text-slate-900" href="/policy">/policy</Link>
            <Link className="underline hover:text-slate-900" href="/get-help">/get-help</Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}



