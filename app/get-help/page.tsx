import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get Help | TheNorthTrip",
  description:
    "Paid, decision-first help for Finland travel: itinerary stress-tests, rental/tour verification checklists, and risk review before you book.",
};

type Tier = {
  title: string;
  who: string;
  includes: string[];
  note: string;
};

const tiers: Tier[] = [
  {
    title: "Plan stress-test (fast)",
    who: "You already have an itinerary and want to reduce fragility.",
    includes: [
      "Connection chain review (last services, buffers, day-one overload)",
      "Winter fragility checks (pace, daylight, recovery margin)",
      "Top 5 verification questions to send providers",
    ],
    note: "No promises. Just risk-based pruning and verification prompts.",
  },
  {
    title: "Rental & payment check",
    who: "Youâ€™re booking rentals and want to avoid deposit/card surprises.",
    includes: [
      "Deposit and card-rule risk review",
      "Pickup/return timing constraints review",
      "A short â€œconfirm in writingâ€ checklist tailored to your booking",
    ],
    note: "Desk rules override aggregator summaries. We structure confirmations accordingly.",
  },
  {
    title: "Decision-first routing",
    who: "Youâ€™re unsure which mode chain fits your tolerance and constraints.",
    includes: [
      "Mode tradeoff summary (train/bus/flight/rental)",
      "Least-fragile chain recommendation (based on your constraints)",
      "Fallback planning: what happens if you miss one segment",
    ],
    note: "We optimize for fragility reduction, not maximum activity density.",
  },
];

export default function GetHelpPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-default.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            TheNorthTrip
          </Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/offer-checklist" className="hover:text-slate-900">
              Offer checklist
            </Link>
            <Link href="/getting-around-finland" className="hover:text-slate-900">
              Getting around
            </Link>
            <Link href="/policy" className="hover:text-slate-900">
              Policy
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get help
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          If you want a calm, risk-based review before you pay, this is it.
          The goal is not perfection. Itâ€™s fewer brittle assumptions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold">{t.title}</h2>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-medium">Best for:</span> {t.who}
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
                {t.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">{t.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold">How to request help</h2>
          <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-2">
            <li>Send your itinerary or booking links.</li>
            <li>State your constraints (budget, winter comfort, risk tolerance, fixed dates).</li>
            <li>We reply with a structured risk review and the exact verification questions.</li>
          </ol>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:hello@thenorthtrip.com?subject=TheNorthTrip%20Help%20Request"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-white font-medium hover:bg-orange-700"
            >
              Email: hello@thenorthtrip.com
            </a>
            <Link
              href="/offer-checklist"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-slate-900 font-medium hover:bg-white"
            >
              Start with the checklist
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Notes: We donâ€™t guarantee outcomes (weather, operators, availability). We focus on verification and fragility reduction.
          </p>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}


