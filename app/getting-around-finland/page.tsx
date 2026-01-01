import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Offer Checklist | TheNorthTrip",
  description:
    "A decision-first checklist for Finland travel: verify deposits, timing, winter constraints, and desk-level rules before you pay.",
};

type Check = {
  title: string;
  why: string;
  how: string;
};

const checks: Check[] = [
  {
    title: "Payment method is accepted at the desk",
    why: "Online acceptance does not always equal pickup enforcement.",
    how: "Confirm accepted card type, cardholder rules, and whether a second card is required.",
  },
  {
    title: "Deposit/hold size is survivable",
    why: "A hold can silently break your budget even when prices look fine.",
    how: "Verify whether a hold is required, what triggers higher holds, and how release timing is handled by your bank.",
  },
  {
    title: "Pickup and return hours match your reality",
    why: "Late arrivals and early closures are a common failure mode.",
    how: "Check hours, after-hours rules, and what happens if you are delayed.",
  },
  {
    title: "Day-one plan is light",
    why: "Same-day arrival plus major activity is often fragile.",
    how: "Avoid long transfers + fixed commitments on arrival day; add buffer or simplify.",
  },
  {
    title: "Winter is handled explicitly",
    why: "Winter compresses buffers, daylight, and recovery options.",
    how: "Confirm winter equipment, constraints, and what changes by season (not â€œassumed includedâ€).",
  },
  {
    title: "Rules that matter are in writing",
    why: "Desk culture is procedural; exceptions are rare and unreliable.",
    how: "If itâ€™s critical, get confirmation from the enforcing provider, not a reseller summary.",
  },
  {
    title: "Cancellation and changes are understood",
    why: "The cheapest option can be the most brittle.",
    how: "Compare free-cancellation windows, no-show policies, and change fees across providers.",
  },
  {
    title: "Insurance vs liability is not confused",
    why: "Insurance can reduce liability without removing deposits or holds.",
    how: "Verify excess/liability, what is excluded, and how claims affect holds and release timing.",
  },
  {
    title: "Location and transfers are realistic",
    why: "â€œCentralâ€ can be non-walkable in winter or with luggage.",
    how: "Verify actual distance, last services, and walking time with bags (not optimistic maps).",
  },
  {
    title: "Opening dates and seasonal closures are checked",
    why: "Shoulder seasons remove the peak-season safety net.",
    how: "Confirm whatâ€™s open, reduced hours, and whether â€œsummer timetablesâ€ still apply.",
  },
  {
    title: "Plan has a fallback",
    why: "Most failures are recoverable, but only if you have an alternative.",
    how: "If one missed connection ends the day, add buffer, change mode, or book flexible options.",
  },
  {
    title: "You know what youâ€™re optimizing for",
    why: "Speed, budget, flexibility, and reliability trade off against each other.",
    how: "Pick the least fragile chain, not the most ambitious itinerary.",
  },
];

export default function OfferChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-tram.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            TheNorthTrip
          </Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/getting-around-finland" className="hover:text-slate-900">
              Getting around
            </Link>
            <Link href="/rental-terms-prices" className="hover:text-slate-900">
              Rental terms
            </Link>
            <Link href="/get-help" className="hover:text-slate-900">
              Get help
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Offer checklist
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          Finland travel rarely collapses because of fraud or chaos. It breaks
          quietly when an assumption meets a desk rule, a last service, or a
          winter constraint. Use this checklist before you pay.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {checks.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-medium">Why:</span> {c.why}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-medium">Verify:</span> {c.how}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold">Quick routing</h2>
          <p className="mt-2 text-sm text-slate-700">
            If your trip depends on rentals or tours, start from the hubs and
            use this checklist as the filter.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/car-rental-helsinki">
              Car rental (Helsinki)
            </Link>
            <Link className="underline hover:text-slate-900" href="/camper-rental-finland">
              Camper rental (Finland)
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours">
              Lapland tours
            </Link>
            <Link className="underline hover:text-slate-900" href="/getting-around-finland">
              Getting around Finland
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}



