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
  key: string;
  category: string;
  whatToCheck: string;
  whyTripsFail: string;
  copyPasteQuestion: string;
  icon?: "payment" | "insurance" | "clock" | "map" | "fuel" | "snow" | "cancel";
};

const rows: Row[] = [
  {
    key: "deposits-payment",
    category: "Deposits & payment",
    whatToCheck:
      "Hold required, accepted card type (debit vs credit), cardholder name rules, whether a backup card is expected.",
    whyTripsFail:
      "Desk enforcement overrides booking pages. Holds quietly break budgets, and card mismatch kills pickup.",
    copyPasteQuestion:
      'What card types do you accept for my booking, and what is the deposit/hold for my exact car category? Also: when is the hold released after return?',
    icon: "payment",
  },
  {
    key: "liability-insurance",
    category: "Liability & insurance wording",
    whatToCheck:
      "Excess (deductible), exclusions (glass/tyres/undercarriage), what changes with upgrades and third-party add-ons.",
    whyTripsFail:
      '"Insurance included" can still mean a high excess and exclusions. Coverage can reduce liability without removing the hold.',
    copyPasteQuestion:
      "What is my excess for this offer, and which damage types are excluded (glass, tyres, undercarriage)? Please confirm in writing.",
    icon: "insurance",
  },
  {
    key: "pickup-return",
    category: "Pickup / return constraints",
    whatToCheck:
      "Desk hours for your exact pickup point, after-hours rules, late arrival handling, and no-show rules.",
    whyTripsFail:
      'Late arrivals + early closures create "no desk, no car" failures. Assumptions die late in the day.',
    copyPasteQuestion:
      "If my flight is delayed and I arrive late, what happens? Do you offer late pickup, and what is the exact procedure (and cost, if any)?",
    icon: "clock",
  },
  {
    key: "mileage-geo",
    category: "Mileage & geography",
    whatToCheck:
      "Mileage caps, how overage is charged, cross-border permissions, restricted areas, and road limitations.",
    whyTripsFail:
      'A “cheap” offer can explode if your route is excluded or mileage is capped. Finland is big. Small caps break plans.',
    copyPasteQuestion:
      "Is my planned route allowed (regions/borders), and is there any mileage cap or restricted road policy for my booking?",
    icon: "map",
  },
  {
    key: "fuel-cleaning",
    category: "Fuel & cleaning",
    whatToCheck:
      "Fuel policy (full-to-full vs prepaid), return condition, cleaning expectations, and penalties.",
    whyTripsFail:
      'Small print becomes large money at return. This is where “easy deals” turn into arguments.',
    copyPasteQuestion:
      "What exact return condition avoids fees (fuel level, cleaning standard), and what triggers cleaning/fuel charges on return?",
    icon: "fuel",
  },
  {
    key: "winter-clauses",
    category: "Winter clauses",
    whatToCheck:
      "Winter equipment (tyres), seasonal restrictions, and what is “included” vs merely “available” at pickup.",
    whyTripsFail:
      "Winter compresses buffers and increases the cost of being wrong. The same plan can fail just by season.",
    copyPasteQuestion:
      "For my dates and vehicle class: what winter equipment is included in the price, and what is optional (and how is it charged)?",
    icon: "snow",
  },
  {
    key: "cancel-change",
    category: "Cancellation & change",
    whatToCheck:
      "Free-cancel window, amendment fees, no-show terms, and which terms win (platform vs provider) if they differ.",
    whyTripsFail:
      "Flexibility is often the real value, not the headline price. Conflicts happen when terms differ.",
    copyPasteQuestion:
      "If plans change: what fees apply for cancellation/changes, and which policy controls the booking if platform and provider terms differ?",
    icon: "cancel",
  },
];

const checks = [
  {
    key: "payment",
    title: "Payment: is your backup ready?",
    body:
      "If a hold is required, assume your first plan can fail. Bring a backup card or choose an offer that matches your card rules.",
    chip: "1",
  },
  {
    key: "late",
    title: "Late arrival: will you still get the vehicle?",
    body:
      "If timing is fragile, you need a written late-arrival procedure. If they won’t confirm it, change the plan.",
    chip: "2",
  },
  {
    key: "winter",
    title: "Winter: does your route still work with buffers?",
    body:
      "If winter slows the plan, reduce scope or add time. Tight chains fail first, especially late-day transfers.",
    chip: "3",
  },
];

function Icon({ kind }: { kind?: Row["icon"] }) {
  // Minimal inline icons to avoid adding deps.
  // Keep neutral and small; the UI should feel “technical but calm”.
  const base = "grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white";
  const glyph = "text-slate-700 text-sm font-semibold";

  const map: Record<NonNullable<Row["icon"]>, string> = {
    payment: "💳",
    insurance: "🛡️",
    clock: "🕒",
    map: "🗺️",
    fuel: "⛽",
    snow: "❄️",
    cancel: "↩️",
  };

  return (
    <div className={base} aria-hidden="true">
      <span className={glyph}>{kind ? map[kind] : "•"}</span>
    </div>
  );
}

export default function RentalTermsPricesPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="What to compare (without guessing numbers)"
        subtitle="No invented prices. If it isn’t stable across suppliers or seasons, you confirm it once, in writing, for your exact booking."
        imageSrc="/images/hero/hero-blog-planning.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental: desk rules" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What to compare (without guessing numbers)
        </h2>

        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          This page avoids provider-specific promises and unstable prices. It focuses on the repeat failure points:
          deposits, payment enforcement, timing constraints, and winter clauses.
        </p>

        {/* Numbers policy callout */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
          <div className="flex gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white">
              <span className="text-lg" aria-hidden="true">🧾</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm md:text-base font-semibold text-slate-900">
                No fake numbers.
                <span className="font-normal text-slate-700">
                  {" "}If a detail isn’t stable across suppliers or seasons, we don’t estimate. You confirm it once, in writing.
                </span>
              </p>

              <p className="mt-3 text-sm">
                <Link href="/offer-checklist" className="font-semibold text-slate-900 hover:underline">
                  Use the offer checklist before paying →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Main table card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="bg-slate-900 px-5 py-4 md:px-6">
            <p className="text-sm font-semibold text-white">
              The table people wish they had before paying
            </p>
            <p className="mt-1 text-xs text-white/75">
              Read it like a checklist. If one row is unclear, pause and verify.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left">
                <tr className="border-b border-slate-200">
                  <th className="px-5 py-3 md:px-6">Category</th>
                  <th className="px-5 py-3 md:px-6">What to check</th>
                  <th className="px-5 py-3 md:px-6">Why trips fail</th>
                  <th className="px-5 py-3 md:px-6">Copy-paste question</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr key={r.key} className="border-b border-slate-200 align-top">
                    <td className="px-5 py-5 md:px-6">
                      <div className="flex items-start gap-3">
                        <Icon kind={r.icon} />
                        <div>
                          <p className="font-semibold text-slate-900">{r.category}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 md:px-6 text-slate-700">
                      <p className="leading-relaxed">{r.whatToCheck}</p>
                    </td>

                    <td className="px-5 py-5 md:px-6 text-slate-700">
                      <p className="leading-relaxed">{r.whyTripsFail}</p>
                    </td>

                    <td className="px-5 py-5 md:px-6">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-xs font-semibold text-slate-900">Ask the desk:</p>
                        <p className="mt-2 text-sm text-slate-800 leading-relaxed">
                          “{r.copyPasteQuestion}”
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Checks */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            Three sanity checks before you pay
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-brand-text/70">
            If one unchecked detail can cascade into a missed pickup, cancelled tour, or broken day, don’t “hope”. Verify.
          </p>

          <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
            {checks.map((c) => (
              <Card key={c.key} className="p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white text-sm font-semibold">
                    {c.chip}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{c.title}</h4>
                    <p className="mt-2 text-sm text-brand-text/70">{c.body}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Next steps (no “Routing”, no “hub”) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Next steps</h3>
          <p className="mt-2 text-sm text-slate-700">
            Go to the page that matches where your plan is most likely to break, then verify the details in writing.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/car-rental-helsinki"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Car rental: desk rules →
            </Link>
            <Link
              href="/camper-rental-finland"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Camper: winter reality →
            </Link>
            <Link
              href="/offer-checklist"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Offer checklist →
            </Link>
            <Link
              href="/getting-around-finland"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Transport decision page →
            </Link>
            <Link
              href="/policy"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Policy →
            </Link>
            <Link
              href="/get-help"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Get help →
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
