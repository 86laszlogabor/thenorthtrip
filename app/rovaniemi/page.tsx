import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Rovaniemi travel basics | TheNorthTrip",
  description: "Practical, non-fluffy notes for visiting Rovaniemi: season, transport, tours, and common tourist traps.",
};

export default function RovaniemiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Rovaniemi: what to do, what to skip"
        subtitle="Santa Village is the headline, but the best value is usually outside the “main brochure loop”. Use this page as a quick sanity-check before you book tours."
        imageSrc="/images/pages/rovaniemi/rovaniemi-hero.jpg"
        imageAlt="Rovaniemi in Lapland"
        badge="Lapland • Rovaniemi"
        priority
      />

      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mt-2 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">When to go</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><span className="font-semibold">Dec–Mar:</span> peak winter, highest prices.</li>
              <li><span className="font-semibold">Sep–Nov:</span> early aurora season, cheaper.</li>
              <li><span className="font-semibold">Apr:</span> shoulder season, fewer schedules.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Common overpay traps</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>“All-inclusive” that excludes gear/transfers.</li>
              <li>Aurora tours promising certainty.</li>
              <li>Short husky rides sold as “safari”.</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Recommended next step</h2>
          <p className="mt-2 text-sm text-slate-600">
            If you’re comparing experiences, use the Lapland tours page.
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
