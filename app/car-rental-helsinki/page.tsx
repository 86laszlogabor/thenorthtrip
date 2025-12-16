import Link from "next/link";
import { PARTNERS } from "@/lib/partners";

export default function CarRentalHelsinkiPage() {
  const dc = PARTNERS.discovercars;
  const sx = PARTNERS.sixt;

  const dcHref = dc.helsinkiUrl || dc.url || "#";
  const sxHref = sx.helsinkiUrl || sx.url || "#";

  const dcPlaceholder = dcHref === "#";
  const sxPlaceholder = sxHref === "#";

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-slate-900">Car rental in Helsinki</h1>
          <p className="max-w-3xl text-slate-600">
            Deposit holds, debit card rules, winter add-ons, and the counter surprises.
            This page is built to stop the classic trap: cheap online price, expensive pickup reality.
          </p>
        </header>

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Some links on this page may be affiliate links. If you click and book, we may earn a commission at no extra cost
          to you. See{" "}
          <Link className="underline underline-offset-4" href="/affiliate-disclosure">
            affiliate disclosure
          </Link>
          .
        </div>

        {/* How to use this page */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">How to use this page</div>
          <ol className="mt-2 list-decimal list-inside text-sm text-slate-700 space-y-1">
            <li>Use a comparison tool to see the market and shortlist.</li>
            <li>Pick an operator you trust (terms matter more than small price differences).</li>
            <li>Verify payment method, deposit, winter equipment, and branch hours before you fly.</li>
          </ol>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/offer-checklist"
              className="text-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-500"
            >
              Offer checklist
            </Link>
            <Link
              href="/get-help"
              className="text-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Ask before booking
            </Link>
          </div>
        </div>

        {/* Partner placements with correct hierarchy */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* DiscoverCars = tool */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-900">{dc.name}</div>
                <div className="mt-0.5 text-xs text-slate-500">{dc.brandHint}</div>
              </div>
              <span className="text-[11px] rounded-full px-2 py-0.5 border border-slate-200 text-slate-500 bg-white">
                {dc.disclosureLabel || "Sponsored"}
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Role:</span> price discovery tool.
              Use it to scan the market and compare suppliers (including brands like SIXT).
            </p>

            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-600">
              {dc.bullets.slice(0, 5).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-5">
              {dcPlaceholder ? (
                <button
                  type="button"
                  className="w-full rounded-lg bg-orange-500/60 px-4 py-2.5 text-sm font-semibold text-white cursor-not-allowed"
                  title="Affiliate URL will be plugged in next"
                >
                  Compare prices (soon)
                </button>
              ) : (
                <Link
                  href={dcHref}
                  className="block w-full text-center rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-500"
                  rel="sponsored nofollow"
                  target="_blank"
                >
                  Compare prices
                </Link>
              )}
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Recommendation: use this to shortlist, then pick based on terms, not just base price.
            </p>
          </div>

          {/* SIXT = top pick */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base">⭐</span>
                  <div className="text-lg font-semibold text-slate-900">Our top pick: {sx.name}</div>
                </div>
                <div className="mt-0.5 text-xs text-slate-500">{sx.brandHint}</div>
              </div>
              <span className="text-[11px] rounded-full px-2 py-0.5 border border-slate-200 text-slate-500 bg-white">
                {sx.disclosureLabel || "Sponsored"}
              </span>
            </div>

            <p className="mt-3 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Why we highlight it:</span> comparison sites may list SIXT as
              “one option among many”, but operator choice often matters more than a small price difference at pickup.
            </p>

            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-600">
              {sx.bullets.slice(0, 6).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <div className="mt-5">
              {sxPlaceholder ? (
                <button
                  type="button"
                  className="w-full rounded-lg bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-white cursor-not-allowed"
                  title="Affiliate URL will be plugged in next"
                >
                  Check SIXT (soon)
                </button>
              ) : (
                <Link
                  href={sxHref}
                  className="block w-full text-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                  rel="sponsored nofollow"
                  target="_blank"
                >
                  Check SIXT
                </Link>
              )}
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Not always the cheapest. Often the most predictable. Read the terms for your dates and category.
            </p>
          </div>
        </div>

        {/* Core traps */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Deposit holds",
              text: "What gets blocked, for how long, and why “paid online” can still trigger a hold at pickup.",
            },
            {
              title: "Debit cards",
              text: "When they work, when they fail, and which red flags predict refusal at the counter.",
            },
            {
              title: "Winter add-ons",
              text: "What’s mandatory vs upsold (tires, coverage, roadside). The difference matters in Finland.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Comparison table (now consistent) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Comparison checklist</h2>
          <p className="mt-2 text-sm text-slate-600">
            DiscoverCars helps you compare many suppliers. SIXT is a direct operator option. Exact rules still vary by booking,
            so open the “Terms” before you commit.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">DiscoverCars</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">SIXT (Finland)</th>
                  <th className="border-b border-slate-200 pb-3 font-semibold text-slate-900">Helsinki notes</th>
                </tr>
              </thead>

              <tbody className="text-slate-700 align-top">
                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Deposit amount &amp; hold time</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Supplier-dependent. Verify deposit size, hold time, and extra holds (vehicle class, age, borders).
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Deposit/card requirements still apply. Confirm the exact terms for your category and location.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    Airport pickups are where card/deposit surprises happen most.
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Payment method / debit card</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Varies by supplier. If debit acceptance is not explicit, assume credit is required at pickup.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Check documents/payment requirements per booking and category (age rules can change requirements).
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    If you rely on debit, confirm acceptance in writing before you fly.
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Winter equipment</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Confirm winter tires included and avoid duplicate “winter package” upsells.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Seasonal equipment stated (winter tires in winter, summer tires in summer). Still verify included items per booking.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    In winter season, tires matter more than fancy insurance names.
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Cross-border driving</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Some suppliers allow it, some don’t. Always check border and ferry rules before booking.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Cross-border driving is mentioned as available. Confirm permissions and any fees in booking terms.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    If you plan Tallinn/Stockholm, rules must be explicit.
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">After-hours pickup / return</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Supplier-dependent. Check branch hours, late arrival procedure, and no-show rules.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Helsinki-Vantaa Airport lists 24h return (pickup hours still depend on branch). Verify your procedure.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    Late arrival can become a no-show if you don’t follow the branch process.
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Minimum age / license</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Varies by supplier. Young driver surcharges and category restrictions are common.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Minimum age stated as 19 in Finland; some categories higher; license validity often 1 year+ (category-dependent).
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-600">
                    Under 25 or newly licensed: expect extra conditions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            Next step: embed the real DiscoverCars affiliate URL (10-day deadline noted), then we can add “Helsinki-specific policy snapshots” once you paste actual offer terms.
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-slate-600">
          <Link href="/helsinki" className="font-semibold text-slate-900 hover:underline">
            Helsinki travel page →
          </Link>
          <Link href="/destinations" className="font-semibold text-slate-900 hover:underline">
            All destinations →
          </Link>
          <Link href="/blog" className="font-semibold text-orange-600 hover:underline">
            Read related posts →
          </Link>
        </div>
      </section>
    </main>
  );
}
