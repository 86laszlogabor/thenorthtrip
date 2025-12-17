// components/WhoWeAreExcerpt.tsx
import Link from "next/link";

export default function WhoWeAreExcerpt() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wide text-slate-600">
            Why TheNorthTrip
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Finland and Lapland don’t fail travelers.
            <span className="block text-slate-700">Bad assumptions do.</span>
          </h2>

          <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Southern Finland behaves like a city trip. Lapland behaves like an environment shaped by
              distance, weather, and timing.
            </p>
            <p>
              Most “travel guides” sell vibes. We focus on the stuff that quietly determines your budget and stress:
              deposits, card rules, winter add-ons, cancellation terms, and what “included” really means.
            </p>
            <p>
              We’re not a travel agency. We don’t promise northern lights. We publish decision tools that help you
              understand the rules before you pay.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/who-we-are"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Read: Who we are
            </Link>

            <Link
              href="/offer-checklist"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Open the checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
