import Link from "next/link";

export const metadata = {
  title: "Levi travel basics | TheNorthTrip",
  description: "Practical notes for Levi: ski focus, getting around, booking logic, and what to verify before paying.",
};

export default function LeviPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          Lapland <span className="text-slate-400">•</span> Levi
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Levi: ski hub with “easy mode” logistics
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Levi is built for visitors. That’s good. It also means the “convenient package” price is often inflated.
          Verify the details, not the headline.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Best for</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Ski and winter activities with short transfer times.</li>
              <li>Families who want predictable infrastructure.</li>
              <li>People who want tours without “wild logistics”.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Before you book</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>What’s included: gear, transfers, photos, food.</li>
              <li>Cancellation: “free” often has a cutoff window.</li>
              <li>Start time + pickup point: ski areas can mean early departures.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Use this with</h2>
          <p className="mt-2 text-sm text-slate-600">
            If you’re doing Lapland activities, compare providers first, then book. The checklist keeps you from paying twice.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/lapland-tours" className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500">
              Lapland tours providers
            </Link>
            <Link href="/offer-checklist" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Booking checklist
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
