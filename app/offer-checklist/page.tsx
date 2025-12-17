// app/offer-checklist/page.tsx
import Link from "next/link";

type Item = {
  title: string;
  desc: string;
  checks: string[];
  pitfall: string;
};

const ITEMS: Item[] = [
  {
    title: "Payment method accepted",
    desc: "Credit card vs debit card. If it’s not explicitly accepted, assume credit is required at pickup.",
    checks: [
      "Is a credit card required in the driver’s name?",
      "Is debit card accepted for THIS supplier/location/category?",
      "Do they require 2 cards or a minimum credit limit?",
    ],
    pitfall: "Online payment ≠ accepted payment method at pickup.",
  },
  {
    title: "Deposit amount + hold time",
    desc: "How much gets blocked and how long until it releases (often bank-dependent).",
    checks: [
      "Exact deposit amount (not “from …”)",
      "Hold release timing (supplier vs your bank)",
      "Extra deposit rules (young driver, premium cars, cross-border)",
    ],
    pitfall: "The “deposit” can be bigger than the rental price.",
  },
  {
    title: "Insurance: excess + exclusions",
    desc: "Ignore marketing names. Confirm deductible and common exclusions.",
    checks: [
      "Deductible (excess) amount and what triggers it",
      "Common exclusions (glass/tires/undercarriage, key loss)",
      "Third-party coverage clarity + what’s included by default",
    ],
    pitfall: "Cheap coverage names often hide big exclusions.",
  },
  {
    title: "Fuel policy",
    desc: "Full-to-full is usually cleanest. Other policies hide costs.",
    checks: [
      "Full-to-full available?",
      "If not: refuel charge / admin fee details",
      "Is pre-purchase fuel forced at pickup?",
    ],
    pitfall: "“Same-to-same” is where surprise fees love to live.",
  },
  {
    title: "Mileage and borders",
    desc: "Unlimited mileage? Cross-border allowed? Verify before booking.",
    checks: [
      "Unlimited mileage or daily cap?",
      "Cross-border permitted (Finland → Estonia/Sweden/Norway)?",
      "Ferry use allowed and documented?",
    ],
    pitfall: "Cross-border bans are common and expensive if ignored.",
  },
  {
    title: "Cancellation terms",
    desc: "Free cancellation window and what counts as a no-show.",
    checks: [
      "Free cancellation deadline (48h/24h etc.)",
      "No-show definition (late pickup, missing card, missing docs)",
      "Amendment rules (time changes, location changes)",
    ],
    pitfall: "“No-show” can happen even if you are physically there.",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-2 py-0.5 text-[11px] font-medium text-slate-700">
      {children}
    </span>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function CheckDot() {
  return (
    <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-200">
      <span className="h-2 w-2 rounded-full bg-orange-600" />
    </span>
  );
}

const PrimaryPillCta =
  "rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500";

export default function OfferChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* TOP CANVAS BAND */}
      <div className="absolute inset-x-0 top-0 h-[320px] bg-slate-50" />
      <div className="relative">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* HERO (now canvas-surface, not pure white) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Offer checklist
                </h1>
                <p className="mt-2 text-slate-700">
                  Use this before you book anything. It’s boring. That’s why it works.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Deposits</Badge>
                  <Badge>Debit cards</Badge>
                  <Badge>Insurance</Badge>
                  <Badge>Winter policy</Badge>
                  <Badge>After-hours pickup</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                <Link
                  href="/car-rental-helsinki"
                  className="rounded-xl bg-orange-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-orange-500"
                >
                  Car rental Helsinki
                </Link>
                <Link
                  href="/get-help"
                  className="rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-white"
                >
                  Ask before booking
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700">
              Some links on this site may be affiliate links. If you click and book, we may earn a
              commission at no extra cost to you. See{" "}
              <Link className="underline underline-offset-4" href="/affiliate-disclosure">
                affiliate disclosure
              </Link>
              .
            </div>
          </div>

          {/* CHECKLIST GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ITEMS.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{it.title}</h2>
                    <p className="mt-2 text-sm text-slate-700">{it.desc}</p>
                  </div>
                  <CardLabel>Checklist</CardLabel>
                </div>

                {/* inner panel (soft white inset) */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-slate-900">What to verify</div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-800">
                    {it.checks.map((c) => (
                      <li key={c} className="flex gap-3">
                        <CheckDot />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">Common pitfall:</span> {it.pitfall}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* APPLY TO PILLAR (canvas surface) */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Apply it to a pillar</h2>
            <p className="mt-2 text-sm text-slate-700">
              Pick what you’re actually booking, then use the pillar guides to avoid the most common traps.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/car-rental-helsinki" className={PrimaryPillCta}>
                Car rental Helsinki
              </Link>
              <Link href="/camper-rental-finland" className={PrimaryPillCta}>
                Camper rentals
              </Link>
              <Link href="/lapland-tours" className={PrimaryPillCta}>
                Lapland tours
              </Link>
            </div>
          </div>

          {/* QUICK COPY TEMPLATE (canvas surface) */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Quick copy template</h2>
            <p className="mt-2 text-sm text-slate-700">
              Paste this into your notes while comparing offers.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-100">
              <pre className="whitespace-pre-wrap text-sm leading-6">
{`Offer:
Price:
Payment method:
Deposit amount:
Deposit hold time:
Insurance excess:
Key exclusions:
Fuel policy:
Mileage:
Cross-border / ferry:
After-hours pickup:
Cancellation:`}
              </pre>
            </div>

            <div className="mt-4 text-xs text-slate-600">
              If you want, we can generate a “car rental Helsinki” filled version once you paste real partner policy details.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
