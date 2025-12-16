import Link from "next/link";

export default function LaplandToursPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Lapland tours</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Compare inclusions safely: transfers, warm gear, photos, food, and the “quiet extras” that change the final price.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Tour comparison (coming next)</div>
              <p className="mt-1 text-sm text-slate-600">
                We’ll add partner/provider comparisons after affiliate selection.
              </p>
            </div>
            <Link
              href="/get-help"
              className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Ask before booking
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "What’s included", text: "Transfers, gear, food, guide, photos. Compare line-by-line." },
            { title: "Common upsells", text: "Extra distance, premium gear, photo packages, ‘optional’ fees." },
            { title: "Pick your base", text: "Rovaniemi vs Levi vs Ylläs depending on goals and budget." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/blog" className="font-semibold text-orange-600 hover:underline">
            Read Lapland guides →
          </Link>
        </div>
      </section>
    </main>
  );
}
