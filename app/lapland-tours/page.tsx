import Link from "next/link";
import PartnerGrid from "@/components/PartnerGrid";
import PageHero from "@/components/PageHero";

export default function LaplandToursPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Lapland tours"
        subtitle="Local-first options for aurora and husky experiences. Platforms stay as backup inventory, not the headline."
        imageSrc="/images/pages/lapland-tours/lapland-hero.jpg"
        imageAlt="Lapland tour landscape"
        badge="Finland • Lapland tours"
        priority
      />

      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/offer-checklist"
            className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
          >
            Free booking checklist
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Read guides first
          </Link>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Recommended providers</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Local premium + niche specialist + platform backups for last-minute availability.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={["staylapland", "lapland_welcome", "arctic_lifestyle", "getyourguide_lapland", "viator_lapland"]}
              ctaLabel="See tours"
            />
          </div>

          <div className="mt-4 text-xs text-slate-600">
            Affiliate disclosure applies. We prioritize decision-helpful comparison over hype.
          </div>
        </section>
      </div>
    </main>
  );
}
