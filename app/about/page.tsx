export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">About</h1>

        <p className="mt-4 text-slate-600">
          TheNorthTrip exists for high-intent booking questions in Finland that usually get buried under
          SEO fluff: deposits, debit cards, winter add-ons, insurance wording, and what’s actually included.
        </p>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <div className="text-base font-bold text-slate-900">Why this site exists</div>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Help you avoid surprises at pickup or check-in.</li>
              <li>Make the “what should I book?” decision faster with clear trade-offs.</li>
              <li>Keep recommendations practical: rules, constraints, timing, and real-world gotchas.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <div className="text-base font-bold text-slate-900">How we make money</div>
            <p className="mt-3">
              Some links are affiliate links. If you click and book, we may earn a commission at no extra cost
              to you. We try to keep comparisons decision-first, not “who pays more.”
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm">
            <div className="text-base font-bold text-slate-900">What we track</div>
            <p className="mt-3">
              We use privacy-friendly analytics (Plausible) to measure which links get clicked (for example:
              which partner buttons people use). We do not sell personal data.
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-slate-600">
          Want to report an issue or ask before booking? Email{" "}
          <a className="font-semibold text-slate-900 hover:underline" href="mailto:hello@thenorthtrip.com">
            hello@thenorthtrip.com
          </a>
          .
        </div>
      </section>
    </main>
  );
}
