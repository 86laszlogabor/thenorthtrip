import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Rental Terms & Prices | TheNorthTrip",
  description:
    "A decision-first rental comparator: deposits, card rules, insurance wording, mileage, winter clauses, and cancellation tradeoffs. No invented prices.",
  openGraph: {
    title: "Rental Terms & Prices | TheNorthTrip",
    description:
      "A decision-first rental comparator: deposits, card rules, insurance wording, mileage, winter clauses, and cancellation tradeoffs. No invented prices.",
    images: ["/images/og/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rental Terms & Prices | TheNorthTrip",
    description:
      "A decision-first rental comparator: deposits, card rules, insurance wording, mileage, winter clauses, and cancellation tradeoffs. No invented prices.",
    images: ["/images/og/og-default.jpg"],
  },
};

type Row = {
  category: string;
  whatToCompare: string;
  whyItMatters: string;
  verifyWith: string;
};

const rows: Row[] = [
  {
    category: "Deposits & payment",
    whatToCompare:
      "Hold required, accepted card type, cardholder rules, backup card expectations",
    whyItMatters:
      "Desk-level enforcement overrides booking pages; holds can break budgets quietly.",
    verifyWith:
      "Rental provider enforcing the rule + your bank (release timing).",
  },
  {
    category: "Liability & insurance",
    whatToCompare: "Excess/liability, exclusions, what changes with upgrades",
    whyItMatters:
      "Insurance can reduce liability without removing deposits or holds.",
    verifyWith: "Provider T&Cs and coverage summary in writing.",
  },
  {
    category: "Pickup/return constraints",
    whatToCompare: "Hours, after-hours rules, late arrival handling",
    whyItMatters: "Late arrivals and early closures create no-show failures.",
    verifyWith: "Provider pickup desk rules (not assumptions).",
  },
  {
    category: "Mileage & geography",
    whatToCompare:
      "Mileage limits, cross-border permissions, restricted areas",
    whyItMatters:
      "A “cheap” offer can become expensive when your intended use is excluded.",
    verifyWith: "Provider rules + written confirmation for exceptions.",
  },
  {
    category: "Fuel & cleaning",
    whatToCompare: "Fuel policy, cleaning expectations, penalties",
    whyItMatters: "Small print often becomes large money at return.",
    verifyWith: "T&Cs + return inspection policy.",
  },
  {
    category: "Winter clauses",
    whatToCompare:
      "Winter equipment, seasonal restrictions, what is “included” vs “available”",
    whyItMatters:
      "Winter compresses buffers and increases the cost of being wrong.",
    verifyWith:
      "Provider specification for the exact vehicle class and dates.",
  },
  {
    category: "Cancellation & change",
    whatToCompare: "Free-cancel window, no-show, amendment fees",
    whyItMatters:
      "Flexibility is often the real value, not the headline price.",
    verifyWith:
      "Booking confirmation terms and provider terms if different.",
  },
];

const decision = [
  {
    q: "If a deposit is required, is your payment setup resilient?",
    a: "If not: change the payment method or offer before booking.",
  },
  {
    q: "If you arrive late, will you still receive the vehicle/service?",
    a: "If not: change timing or choose an option with explicit late-arrival handling.",
  },
  {
    q: "If winter conditions slow your pace, does your plan still work?",
    a: "If not: reduce scope, add buffers, or avoid tight chains.",
  },
];

export default function RentalTermsPricesPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Rental terms & prices: compare what actually breaks trips."
        subtitle="No invented numbers. Just the decision points that cause real failures: deposits, card rules, timing, and winter clauses."
        imageSrc="/images/hero/hero-blog-planning.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Open car rental hub" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Rental terms & prices: what to compare (without guessing numbers)
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          This page avoids invented prices and provider-specific promises. It focuses on what usually causes real travel failures:
          deposit rules, payment enforcement, timing constraints, and winter clauses.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-slate-50 px-5 py-3 text-sm font-medium">
            Comparison table: what matters most
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left bg-white">
                <tr className="border-b">
                  <th className="px-5 py-3">Category</th>
                  <th className="px-5 py-3">What to compare</th>
                  <th className="px-5 py-3">Why it matters</th>
                  <th className="px-5 py-3">Verify with</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.category} className="border-b">
                    <td className="px-5 py-3 font-medium">{r.category}</td>
                    <td className="px-5 py-3 text-slate-700">{r.whatToCompare}</td>
                    <td className="px-5 py-3 text-slate-700">{r.whyItMatters}</td>
                    <td className="px-5 py-3 text-slate-700">{r.verifyWith}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-3">
          {decision.map((d) => (
            <Card key={d.q} className="p-6">
              <h3 className="font-semibold text-sm">{d.q}</h3>
              <p className="mt-2 text-sm text-brand-text/70">{d.a}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Routing</h3>
          <p className="mt-2 text-sm text-slate-700">
            If you’re booking rentals, start from the conversion hub and use this page as the comparator.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/car-rental-helsinki">
              Car rental (Helsinki)
            </Link>
            <Link className="underline hover:text-slate-900" href="/camper-rental-finland">
              Camper rental (Finland)
            </Link>
            <Link className="underline hover:text-slate-900" href="/offer-checklist">
              Offer checklist
            </Link>
            <Link className="underline hover:text-slate-900" href="/getting-around-finland">
              Getting around Finland
            </Link>
            <Link className="underline hover:text-slate-900" href="/policy">
              Policy
            </Link>
            <Link className="underline hover:text-slate-900" href="/get-help">
              Get help
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
