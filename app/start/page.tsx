import TrackedLink from "@/components/TrackedLink";

export default function StartPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">Start here</h1>
      <p className="mt-3 text-slate-700">
        Pick what you’re actually trying to book. No hype, just the next correct step.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <TrackedLink
          href="/helsinki"
          placement="internal_next"
          cta="start_helsinki"
          className="rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50"
        >
          <div className="font-semibold">Helsinki</div>
          <div className="mt-1 text-sm text-slate-600">Ferries, saunas, city tours.</div>
        </TrackedLink>

        <TrackedLink
          href="/car-rental-helsinki"
          placement="internal_next"
          cta="start_car_rental"
          className="rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50"
        >
          <div className="font-semibold">Car rental</div>
          <div className="mt-1 text-sm text-slate-600">Deposits, debit rules, winter extras.</div>
        </TrackedLink>
      </div>
    </main>
  );
}
