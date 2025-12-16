// app/helsinki/page.tsx
import PartnerGrid from "@/components/PartnerGrid";

export default function HelsinkiPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Helsinki city guide
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Practical picks for ferries, saunas, and sightseeing. We keep it decision-first,
          not link-dump chaos.
        </p>

        {/* FERRY */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Ferry tickets</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            For Tallinn day trips or Stockholm overnights, compare schedules first, then book direct
            if you want fewer surprises.
          </p>
          <div className="mt-6">
            <PartnerGrid
              keys={["direct_ferries", "tallink_silja", "viking_line"]}
              ctaLabel="Check schedules"
            />
          </div>
        </section>

        {/* SAUNA */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Sauna</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Helsinki’s public saunas can sell out on weekends. If you care about timing, plan ahead.
          </p>
          <div className="mt-6">
            <PartnerGrid
              keys={["loyly", "allas_sea_pool", "getyourguide_sauna", "tiqets_sauna"]}
              ctaLabel="View tickets"
            />
          </div>
        </section>

        {/* CITY */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">City sightseeing</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            If you only have one day, do a practical city route first. Then add something unique
            like the speedboat experience.
          </p>
          <div className="mt-6">
            <PartnerGrid
              keys={["helsinki_city_tours", "redrib_experience", "getyourguide_city", "viator_city"]}
              ctaLabel="See tours"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
