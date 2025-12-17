import Link from "next/link";

type Item = {
  title: string;
  desc: string;
  checks: string[];
  pitfall: string;

  bestDefault: string;
  ifStuck: string;
  fastRule: string;
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
    fastRule: "If it doesn’t say “debit accepted at pickup”, assume credit card is required.",
    bestDefault:
      "Bring a credit card in the main driver’s name. Treat debit as “maybe”, not a plan.",
    ifStuck:
      "If you only have debit: switch to city pickup, choose a supplier that confirms debit in writing, and expect a higher hold.",
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
    fastRule: "Assume the hold will be meaningful. Don’t arrive with tight available credit.",
    bestDefault:
      "Plan available credit for a real hold (not symbolic). If you’re tight, reduce risk: smaller car class, better coverage, clearer supplier.",
    ifStuck:
      "If you can’t find the exact hold amount: treat it as unknown downside and pick a different offer or operator.",
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
    fastRule: "Excess + exclusions matter more than the insurance brand name.",
    bestDefault:
      "Prefer predictable downside: pay for excess reduction if winter driving or long trips are involved.",
    ifStuck:
      "If exclusions aren’t clear: assume tires/glass/underbody are excluded and don’t book that offer unless price is insanely good and you accept the risk.",
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
    fastRule: "Full-to-full is the default. Anything else needs scrutiny.",
    bestDefault:
      "Choose full-to-full if possible. It’s the simplest way to avoid invisible fees.",
    ifStuck:
      "If you can’t get full-to-full: calculate worst-case fuel + admin fee and compare again. Many “cheap” offers stop being cheap.",
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
    fastRule: "If your plan includes borders/ferries, only book offers that explicitly allow it.",
    bestDefault:
      "If you might cross borders or take a ferry, pick offers with clear written permission. No guessing.",
    ifStuck:
      "If it’s unclear: assume it’s not allowed. Choose a different supplier or keep your route domestic.",
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
    fastRule: "No-show rules are brutal. Treat pickup time as a hard deadline.",
    bestDefault:
      "Pick offers with free cancellation and clear no-show definitions. Pay a bit more for flexibility if timing is uncertain.",
    ifStuck:
      "If terms are vague: assume strict no-show and don’t cut timing close (flight delays, queues, after-hours).",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
      {children}
    </span>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function CheckDot() {
  return (
    <span className="mt-[3px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-200">
      <span className="h-2 w-2 rounded-full bg-slate-700" />
    </span>
  );
}

const PrimaryPillCta =
  "rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600 transition";

export default function OfferChecklistPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top tint to avoid “rikító fehér” */}
      <div className="bg-gradient-to-b from-slate-100 to-white">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* HERO */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Offer checklist
                </h1>
                <p className="mt-2 text-slate-600">
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
                <Link href="/car-rental-helsinki" className={PrimaryPillCta}>
                  Car rental Helsinki
                </Link>
                <Link
                  href="/get-help"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Ask before booking
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
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
                    <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
                  </div>
                  <CardLabel>Checklist</CardLabel>
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-900">What to verify</div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {it.checks.map((c) => (
                      <li key={c} className="flex gap-3">
                        <CheckDot />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">Common pitfall:</span>{" "}
                    {it.pitfall}
                  </div>
                </div>

                {/* Answers (decision-first) */}
                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold text-slate-900">Fast rule</div>
                    <p className="mt-1 text-sm text-slate-700">{it.fastRule}</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold text-slate-900">Best default</div>
                    <p className="mt-1 text-sm text-slate-700">{it.bestDefault}</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold text-slate-900">If you’re stuck</div>
                    <p className="mt-1 text-sm text-slate-700">{it.ifStuck}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* APPLY TO PILLAR */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Apply it to a pillar</h2>
            <p className="mt-2 text-sm text-slate-600">
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

          {/* QUICK COPY TEMPLATE */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Quick copy template</h2>
            <p className="mt-2 text-sm text-slate-600">
              Paste this into your notes while comparing offers.
            </p>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-100">
              <pre className="whitespace-pre-wrap text-sm leading-6">{`Offer:
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
Cancellation:`}</pre>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              If you want, we can generate a “car rental Helsinki” filled version once you paste real partner policy details.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
