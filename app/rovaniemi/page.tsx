import Link from "next/link";

export const metadata = {
  title: "Rovaniemi travel basics | TheNorthTrip",
  description: "Practical, non-fluffy notes for visiting Rovaniemi: season, transport, tours, and common tourist traps.",
};

export default function RovaniemiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          Lapland <span className="text-slate-400">•</span> Rovaniemi
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Rovaniemi: what to do, what to skip
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Santa Village is the headline, but the best value is usually outside the “main brochure loop”.
          Use this page as a quick sanity-check before you book tours.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">When to go</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">Dec–Mar:</span> peak winter, best “classic Lapland” vibe, highest prices.</li>
              <li><span className="font-semibold">Sep–Nov:</span> early aurora season, cheaper, moodier weather.</li>
              <li><span className="font-semibold">Apr:</span> shoulder season, many operators reduce schedules.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Common overpay traps</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>“All-inclusive” tours that quietly exclude thermal gear or transfers.</li>
              <li>Aurora tours promising certainty. Weather does not care about marketing.</li>
              <li>Short husky rides sold as “safari”. Check minutes and distance.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Recommended next step</h2>
          <p className="mt-2 text-sm text-slate-600">
            If you’re comparing experiences, use the Lapland tours page. It’s built to reduce “surprise extras”.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/lapland-tours" className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500">
              Compare Lapland tours
            </Link>
            <Link href="/offer-checklist" className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
              Use the booking checklist
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
