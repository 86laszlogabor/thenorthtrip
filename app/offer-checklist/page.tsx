import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Offer Checklist | TheNorthTrip",
  description:
    "A decision-first checklist for Finland travel: verify deposits, timing, winter constraints, and desk-level rules before you pay.",
  openGraph: {
    title: "Offer Checklist | TheNorthTrip",
    description:
      "A decision-first checklist for Finland travel: verify deposits, timing, winter constraints, and desk-level rules before you pay.",
    images: ["/images/og/og-offer-checklist.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Offer Checklist | TheNorthTrip",
    description:
      "A decision-first checklist for Finland travel: verify deposits, timing, winter constraints, and desk-level rules before you pay.",
    images: ["/images/og/og-offer-checklist.jpg"],
  },
};

type Check = {
  title: string;
  why: string;
  how: string;
  icon: "card" | "hold" | "clock" | "day" | "snow" | "writing" | "cancel" | "shield" | "map" | "season" | "fallback" | "target";
};

const checks: Check[] = [
  {
    title: "Payment method is accepted at the desk",
    why: "Online acceptance does not always equal pickup enforcement.",
    how: "Confirm accepted card type, cardholder rules, and whether a second card is required.",
    icon: "card",
  },
  {
    title: "Deposit/hold size is survivable",
    why: "A hold can silently break your budget even when prices look fine.",
    how: "Verify whether a hold is required, what triggers higher holds, and how release timing is handled by your bank.",
    icon: "hold",
  },
  {
    title: "Pickup and return hours match your reality",
    why: "Late arrivals and early closures are a common failure mode.",
    how: "Check hours, after-hours rules, and what happens if you are delayed.",
    icon: "clock",
  },
  {
    title: "Day-one plan is light",
    why: "Same-day arrival plus major activity is often fragile.",
    how: "Avoid long transfers + fixed commitments on arrival day; add buffer or simplify.",
    icon: "day",
  },
  {
    title: "Winter is handled explicitly",
    why: "Winter compresses buffers, daylight, and recovery options.",
    how: "Confirm winter equipment, constraints, and what changes by season (not assumed included).",
    icon: "snow",
  },
  {
    title: "Rules that matter are in writing",
    why: "Desk culture is procedural; exceptions are rare and unreliable.",
    how: "If it’s critical, get confirmation from the enforcing provider, not a reseller summary.",
    icon: "writing",
  },
  {
    title: "Cancellation and changes are understood",
    why: "The cheapest option can be the most brittle.",
    how: "Compare free-cancellation windows, no-show policies, and change fees across providers.",
    icon: "cancel",
  },
  {
    title: "Insurance vs liability is not confused",
    why: "Insurance can reduce liability without removing deposits or holds.",
    how: "Verify excess/liability, what is excluded, and how claims affect holds and release timing.",
    icon: "shield",
  },
  {
    title: "Location and transfers are realistic",
    why: "“Central” can be non-walkable in winter or with luggage.",
    how: "Verify actual distance, last services, and walking time with bags (not optimistic maps).",
    icon: "map",
  },
  {
    title: "Opening dates and seasonal closures are checked",
    why: "Shoulder seasons remove the peak-season safety net.",
    how: "Confirm what’s open, reduced hours, and whether “summer timetables” still apply.",
    icon: "season",
  },
  {
    title: "Plan has a fallback",
    why: "Most failures are recoverable, but only if you have an alternative.",
    how: "If one missed connection ends the day, add buffer, change mode, or book flexible options.",
    icon: "fallback",
  },
  {
    title: "You know what you’re optimizing for",
    why: "Speed, budget, flexibility, and reliability trade off against each other.",
    how: "Pick the least fragile chain, not the most ambitious itinerary.",
    icon: "target",
  },
];

function Icon({ name }: { name: Check["icon"] }) {
  // No external icon libs required. Simple, clean, consistent.
  const common = "flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900";
  const glyph =
    name === "card"
      ? "💳"
      : name === "hold"
      ? "🔒"
      : name === "clock"
      ? "🕒"
      : name === "day"
      ? "📅"
      : name === "snow"
      ? "❄️"
      : name === "writing"
      ? "✍️"
      : name === "cancel"
      ? "↩️"
      : name === "shield"
      ? "🛡️"
      : name === "map"
      ? "📍"
      : name === "season"
      ? "🗓️"
      : name === "fallback"
      ? "🛟"
      : "🎯";

  return <div className={common} aria-hidden="true">{glyph}</div>;
}

export default function OfferChecklistPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Offer checklist: verify before you pay."
        subtitle="Finland trips don’t usually fail loudly. They fail when an assumption meets a desk rule, a last service, or a winter constraint."
        imageSrc="/images/hero/hero-offer-checklist.jpg"
        primaryCta={{ href: "/rental-terms-prices", label: "Open rental terms" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Transport decisions" }}
      />

      {/* WHAT THIS IS */}
      <Section>
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          <Card className="p-6 md:col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              What this checklist is for
            </h2>
            <p className="mt-3 text-sm text-brand-text/70 leading-relaxed max-w-3xl">
              Use this as a filter before committing money. If one unchecked detail can cascade into a missed pickup,
              a cancelled day, or a broken chain, don’t “hope”. Verify.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <CtaButton href="/rental-terms-prices" variant="primary" className="w-full sm:w-auto">
                Compare terms
              </CtaButton>
              <CtaButton href="/get-help" variant="outline" className="w-full sm:w-auto">
                Get a calm review
              </CtaButton>
            </div>
          </Card>

          <Card className="p-6 bg-slate-50">
            <h3 className="text-sm font-semibold text-slate-900">Numbers policy</h3>
            <p className="mt-2 text-sm text-brand-text/70 leading-relaxed">
              If a detail isn’t stable across suppliers or seasons, we don’t “estimate”.
              You confirm it once, in writing, for your exact booking.
            </p>
            <p className="mt-4 text-sm">
              <Link href="/policy" className="font-semibold hover:underline">
                Read the policy →
              </Link>
            </p>
          </Card>
        </div>
      </Section>

      {/* VISUAL ANCHORS */}
      <section className="mx-auto max-w-6xl px-4 pb-2">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/cards/card-checklist-documents.jpg"
              alt=""
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="text-sm font-semibold text-slate-900">Documents & cards</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                License, card type, deposit expectations, and the boring stuff that becomes expensive if missing.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/cards/card-checklist-calendar.jpg"
              alt=""
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="text-sm font-semibold text-slate-900">Timing & seasonality</div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pickup windows, seasonal rules, cancellations, and day-by-day constraints that change outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CHECKLIST */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              The checklist (12 checks)
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-brand-text/70">
              Each card tells you what breaks, and what to confirm. Nothing here depends on wishful thinking.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title} className="p-6">
              <div className="flex items-start gap-4">
                <Icon name={c.icon} />
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold">Why:</span> {c.why}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-800 leading-relaxed">
                  <span className="font-semibold">Verify:</span> {c.how}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* WHAT WE DO / NEXT STEPS (NO "HUB") */}
        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900">What we do</h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
              <li className="flex gap-2">
                <span aria-hidden="true">✅</span>
                <span>Turn fragile assumptions into explicit checks you can confirm before paying.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✅</span>
                <span>Focus on desk enforcement, timing constraints, and seasonal constraints that change outcomes.</span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true">✅</span>
                <span>Route you to the right decision page based on your risk, not marketing.</span>
              </li>
            </ul>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <CtaButton href="/rental-terms-prices" variant="primary" className="w-full sm:w-auto">
                Rental terms comparator
              </CtaButton>
              <CtaButton href="/getting-around-finland" variant="outline" className="w-full sm:w-auto">
                Transport decisions
              </CtaButton>
            </div>
          </Card>

          <Card className="p-6 bg-slate-50">
            <h3 className="text-lg font-semibold text-slate-900">Next steps</h3>
            <p className="mt-2 text-sm text-brand-text/70 leading-relaxed">
              If your trip depends on rentals or tight connections, use these pages as the next decision step.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href="/car-rental-helsinki"
              >
                Car rental (Helsinki) →
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href="/camper-rental-finland"
              >
                Camper rental (Finland) →
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href="/lapland-tours"
              >
                Lapland tours →
              </Link>
              <Link
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href="/get-help"
              >
                Get help →
              </Link>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-slate-500">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
