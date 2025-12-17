import Link from "next/link";
import PartnerGrid from "@/components/PartnerGrid";
import PageHero from "@/components/PageHero";

export default function LaplandToursPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Lapland tours: choose local first, platforms only as backup"
        subtitle="Smaller groups, realistic expectations, and seasonal trade-offs explained before you book."
        imageSrc="/images/pages/lapland-tours/lapland-hero.jpg"
        imageAlt="Lapland winter landscape"
        badge="Finland • Lapland tours"
        priority
      />

      <div className="mx-auto max-w-6xl px-4 pb-12">
        {/* CTA ROW */}
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/offer-checklist"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600 transition"
          >
            Free booking checklist
          </Link>

          <Link
            href="/blog"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Read guides first
          </Link>
        </div>

        {/* PARTNERS */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Recommended Lapland providers</h2>
          <p className="mt-2 max-w-2xl text-slate-700">
            Local operators first. Large platforms are shown only as backup options for availability.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={[
                "staylapland",
                "arctic_lifestyle",
                "getyourguide_lapland",
                "viator_lapland",
              ]}
              ctaLabel="See tours"
            />
          </div>

          <div className="mt-4 text-xs text-slate-600">
            Affiliate disclosure: Some links may be sponsored. We prioritize decision-helpful guidance over hype.
          </div>
        </section>
      </div>
    </main>
  );
}
