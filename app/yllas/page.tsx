import Link from "next/link";

export const metadata = {
  title: "Ylläs travel basics | TheNorthTrip",
  description: "Practical notes for Ylläs: quieter base, winter driving reality, and how to book tours safely.",
};

export default function YllasPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
          Lapland <span className="text-slate-400">•</span> Ylläs
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Ylläs: calmer base, more “real winter”
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Ylläs is often quieter than the big resort hubs. That can be better value, but logistics matter more.
          Especially in winter.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What people underestimate</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Transfer time and pickup points (fewer “central” hubs).</li>
              <li>Weather variability and road conditions.</li>
              <li>Limited last-minute availability for niche tours.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">If you rent a car</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Confirm winter tires and what counts as “included”.</li>
              <li>Check fuel policy and after-hours pickup rules.</li>
              <li>Know deposit amount and how long your bank holds it.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-slate-600">
            If Ylläs is part of a road trip, use the car rental guide and the checklist before paying.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/car-rental-helsinki" className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500">
              Car rental guide
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
