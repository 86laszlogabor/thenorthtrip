import PartnerGrid from "@/components/PartnerGrid";
import Link from "next/link";

export default function LaplandToursPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            Finland <span className="text-slate-400">•</span> Lapland tours
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Lapland tours
          </h1>

          <p className="mt-3 max-w-2xl text-slate-600">
            Local-first options for aurora, husky, and snowmobile experiences. Platforms stay as backup
            inventory, not the headline.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
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
        </header>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Recommended providers</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Local premium + niche specialist + platform backups for last-minute availability.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={[
                "staylapland",
                "lapland_welcome",
                "arctic_lifestyle",
                "getyourguide_lapland",
                "viator_lapland",
              ]}
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
