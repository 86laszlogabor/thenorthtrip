import Link from "next/link";

export default function CarRentalHelsinkiPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Car rental in Helsinki</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Deposit holds, debit card rules, winter add-ons, and the common counter surprises. This page is the “money
          page” structure. Tomorrow we plug in partner links.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Price comparison (partners coming next)</div>
              <p className="mt-1 text-sm text-slate-600">
                We’ll add live price buttons once partners are selected. For now, structure is ready.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                className="cursor-not-allowed rounded-lg bg-orange-500/60 px-5 py-3 text-sm font-semibold text-white"
                title="Partner links added tomorrow"
              >
                Check live prices (soon)
              </button>
              <Link
                href="/get-help"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
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
              text: "What gets blocked, for how long, and why “paid online” can still trigger a hold.",
            },
            {
              title: "Debit cards",
              text: "When they work, when they fail, and which red flags predict refusal at pickup.",
            },
            {
              title: "Winter add-ons",
              text: "What’s mandatory vs upsold (tires, chains, coverage, roadside).",
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
            Tomorrow we’ll turn this into a real comparison table. For now it’s the structure.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="text-left">
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Partner A</th>
                  <th className="border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">Partner B</th>
                  <th className="border-b border-slate-200 pb-3 font-semibold text-slate-900">Partner C</th>
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
                    <td className="border-b border-slate-100 py-3 text-slate-400">TBD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 text-sm text-slate-600">
          <Link href="/blog" className="font-semibold text-orange-600 hover:underline">
            Read related posts →
          </Link>
        </div>
      </section>
    </main>
  );
}
