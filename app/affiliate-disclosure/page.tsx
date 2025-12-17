export default function AffiliateDisclosurePage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Affiliate disclosure</h1>

        <p className="mt-4 text-slate-600">
          Some links on this site are affiliate links. If you click and book, we may earn a commission at no
          extra cost to you.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
          <div className="text-base font-bold text-slate-900">What this means in practice</div>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>You never pay extra because a link is affiliate.</li>
            <li>We track clicks on sponsored links to understand what people actually use.</li>
            <li>
              We try to recommend based on decision value (rules, constraints, pickup friction), not hype.
            </li>
          </ul>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            If you see a link that looks wrong or outdated, please report it:{" "}
            <a className="font-semibold text-slate-900 hover:underline" href="mailto:hello@thenorthtrip.com">
              hello@thenorthtrip.com
            </a>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
