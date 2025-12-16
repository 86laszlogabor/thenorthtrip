import Link from "next/link";

export default function GetHelpPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Ask before booking</h1>
        <p className="mt-4 text-slate-600">
          This is a placeholder help page. Tomorrow we’ll decide whether this becomes a lead form (email capture) or a simple checklist funnel.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">What we can help with</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Deposit holds and credit/debit requirements</li>
            <li>After-hours pickup rules and extra fees</li>
            <li>Winter add-ons that matter vs upsells</li>
            <li>Tour inclusions and hidden extras</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <Link
              href="/car-rental-helsinki"
              className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Go to car rental guide
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Read blog drafts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
