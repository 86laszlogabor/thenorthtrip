import Link from "next/link";
import Recommended from "@/components/Recommended";

export default function CarRentalHelsinkiPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Car rental in Helsinki</h1>

        <p className="mt-3 max-w-3xl text-slate-600">
          Deposit holds, debit card rules, winter add-ons, and the common counter surprises. This is the money-page
          structure. Next step is plugging in partner URLs.
        </p>

        {/* Inline disclosure (SEO-barát, nem túl sok) */}
        <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Some links on this page may be affiliate links. If you click and book, we may earn a commission at no extra
          cost to you. See{" "}
          <Link className="underline underline-offset-4" href="/affiliate-disclosure">
            affiliate disclosure
          </Link>
          .
        </div>

        {/* Core monetization block */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-slate-900">Compare car rental prices</div>
              <p className="mt-1 text-sm text-slate-600">
                Check prices before you land. The cheapest offer online can get expensive at the counter once extras
                appear (coverage, deposit rules, after-hours pickup).
              </p>

              <div className="mt-4">
                <Recommended items={["discovercars", "rentalcars"]} />
              </div>
            </div>

            <div className="flex gap-3 md:flex-col md:items-stretch">
              <Link
                href="/get-help"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 text-center"
              >
                Ask before booking
              </Link>
              <Link
                href="/offer-checklist"
                className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-500 text-center"
              >
                Offer checklist
              </Link>
            </div>
          </div>
        </div>

        {/* Pain points */}
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

        {/* Comparison structure */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Comparison checklist</h2>
          <p className="mt-2 text-sm text-slate-600">
            This is the structure. We’ll fill the cells with real partner policies and links once URLs are plugged in.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">DiscoverCars</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Rentalcars</th>
                  <th className="border-b border-slate-200 pb-3 font-semibold text-slate-900">
                    Local (Helsinki)
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  "Deposit amount & hold time",
                  "Debit card acceptance",
                  "Winter tires included",
                  "Excess / insurance clarity",
                  "After-hours pickup policy",
                ].map((row) => (
                  <tr key={row}>
                    <td className="border-b border-slate-100 py-3 pr-4">{row}</td>
                    <td className="border-b border-slate-100 py-3 pr-4 text-slate-400">TBD</td>
                    <td className="border-b border-slate-100 py-3 pr-4 text-slate-400">TBD</td>
                    <td className="border-b border-slate-100 py-3 text-slate-400">
                      Parking / airport option (soon)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            Next: plug partner URLs, then expand into a real comparison (deposit rules, debit acceptance, and winter
            policies).
          </div>
        </div>

        {/* Internal linking */}
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
