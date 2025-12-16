import Link from "next/link";
import Recommended from "@/components/Recommended";

export default function CarRentalHelsinkiPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-slate-900">Car rental in Helsinki</h1>
          <p className="max-w-3xl text-slate-600">
            Deposit holds, debit card rules, winter add-ons, and the common counter surprises.
            This page is built to prevent “cheap online price, expensive pickup reality”.
          </p>
        </div>

        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Some links on this page may be affiliate links. If you click and book, we may earn a commission at no extra
          cost to you.{" "}
          <Link className="underline underline-offset-4" href="/affiliate-disclosure">
            Affiliate disclosure
          </Link>
          .
        </div>

        <div className="mt-8">
          <Recommended items={["rentalcars", "discovercars"]} />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold text-slate-900">What you’re actually comparing</div>
              <p className="mt-1 text-sm text-slate-600">
                Not just “price”. Compare deposit/hold, debit card acceptance, winter policy, insurance clarity, and after-hours pickup rules.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
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
        </div>

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

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Comparison checklist</h2>
          <p className="mt-2 text-sm text-slate-600">
            These platforms list offers from many suppliers. Exact rules vary by supplier and location, so always open the “Terms” before you commit.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Rentalcars</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">DiscoverCars</th>
                  <th className="border-b border-slate-200 pb-3 font-semibold text-slate-900">Local (Helsinki)</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 align-top">
                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Deposit amount &amp; hold time</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Supplier-dependent. Check the exact deposit in offer terms. Release timing is often bank-dependent.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Supplier-dependent. Verify deposit and whether additional holds apply (vehicle class, driver age, borders).
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-500">Parking / airport option (soon)</td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Debit card acceptance</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Often credit-card-first at pickup. Debit may work only for specific suppliers/locations. Confirm in terms.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Varies by supplier. If debit acceptance is not explicit, assume credit is required at the counter.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-500">Parking / airport option (soon)</td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Winter tires included</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Many Finland offers include winter tires, but not always. Confirm “included equipment” per offer.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Usually shown in the offer details. Verify if winter tires are included or charged as an add-on.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-500">Parking / airport option (soon)</td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">Excess / insurance clarity</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Always open the insurance section: check excess amount + exclusions (glass/tires/undercarriage).
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Compare included coverage vs add-on coverage. Don’t trust names, verify deductible + exclusions.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-500">Parking / airport option (soon)</td>
                </tr>

                <tr>
                  <td className="border-b border-slate-100 py-3 pr-4">After-hours pickup policy</td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Depends on supplier desk hours. Confirm late pickup rules to avoid no-show issues.
                  </td>
                  <td className="border-b border-slate-100 py-3 pr-4 text-slate-600">
                    Supplier-dependent. Check desk hours, late arrival procedure, and whether fees apply.
                  </td>
                  <td className="border-b border-slate-100 py-3 text-slate-500">Parking / airport option (soon)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            Next: plug partner URLs, then expand this into a real Helsinki-specific comparison once we collect policy details from real offers.
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-slate-600">
          <Link href="/blog" className="font-semibold text-orange-600 hover:underline">
            Read related posts →
          </Link>
          <Link href="/helsinki" className="font-semibold text-slate-900 hover:underline">
            Helsinki travel page →
          </Link>
          <Link href="/destinations" className="font-semibold text-slate-900 hover:underline">
            All destinations →
          </Link>
        </div>
      </section>
    </main>
  );
}
