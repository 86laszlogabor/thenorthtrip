// app/lapland-tours/page.tsx
import PartnerGrid from "@/components/PartnerGrid";

export default function LaplandToursPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Lapland tours
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Local-first options for aurora, husky, and snowmobile experiences. Platforms stay as backup
          inventory, not the headline.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Recommended providers</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Local premium + niche specialist + platform backups for last-minute availability.
          </p>
          <div className="mt-6">
            <PartnerGrid
              keys={["staylapland", "lapland_welcome", "arctic_lifestyle", "getyourguide_lapland", "viator_lapland"]}
              ctaLabel="See tours"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
