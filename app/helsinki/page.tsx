import Link from "next/link";
import PartnerGrid from "@/components/PartnerGrid";
import PageHero from "@/components/PageHero";

export default function HelsinkiPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Helsinki city guide"
        subtitle="Practical picks for ferries, saunas, and sightseeing. Decision-first, not link-dump chaos."
        imageSrc="/images/pages/helsinki/helsinki-hero.jpg"
        imageAlt="Helsinki city view"
        badge="Finland • Helsinki"
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
            href="/get-help"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Ask before booking
          </Link>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Ferry tickets</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            For Tallinn day trips or Stockholm overnights, compare schedules first, then book direct
            if you want fewer surprises.
          </p>
          <div className="mt-6">
            <PartnerGrid keys={["direct_ferries", "tallink_silja", "viking_line"]} ctaLabel="Check schedules" />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Sauna</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Helsinki’s public saunas can sell out on weekends. If you care about timing, plan ahead.
          </p>
          <div className="mt-6">
            <PartnerGrid keys={["loyly", "allas_sea_pool", "getyourguide_sauna", "tiqets_sauna"]} ctaLabel="View tickets" />
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold">City sightseeing</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            If you only have one day, do a practical city route first. Then add something unique like the speedboat experience.
          </p>
          <div className="mt-6">
            <PartnerGrid keys={["helsinki_city_tours", "redrib_experience", "getyourguide_city", "viator_city"]} ctaLabel="See tours" />
          </div>
        </section>

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          Affiliate disclosure: Some links may be sponsored. We focus on practical, decision-helpful guidance.
        </div>
      </div>
    </main>
  );
}
