import Link from "next/link";
import PartnerGrid from "@/components/PartnerGrid";
import PageHero from "@/components/PageHero";

export default function CamperRentalFinlandPage() {
  const cards = [
    {
      t: "Fleet rental (simple)",
      d: "Best for first-time camper trips. Predictable rules and clearer pickup process.",
    },
    {
      t: "Peer-to-peer (local)",
      d: "Flexible options and sometimes better value. Terms vary by owner, read carefully.",
    },
    {
      t: "Winter-ready (Lapland)",
      d: "For winter routes: heating, proper tires, realistic range, and insulation matter.",
    },
    {
      t: "Pickup logic",
      d: "Airport vs city pickup changes timing, inventory, and sometimes the final price.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Camper rental in Finland: pick the model that matches your season"
        subtitle="Fleet rentals are simplest. Peer-to-peer can be better value. For winter routes, prioritize winter-ready setups over saving a little money."
        imageSrc="/images/pages/camper-rental/camper-hero.jpg"
        imageAlt="Camper rental in Finland"
        badge="Finland • Camper rental"
        priority
      />

      <div className="mx-auto max-w-6xl px-4 pb-12">
        {/* CTA row (decision-first) */}
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/offer-checklist"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
          >
            Free booking checklist
          </Link>

          <Link
            href="/get-help"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Ask before booking
          </Link>
        </div>

        {/* Decision cards */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
            >
              <div className="text-base font-semibold text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-700">{x.d}</div>
            </div>
          ))}
        </section>

        {/* Partners */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Recommended camper partners</h2>
          <p className="mt-2 max-w-2xl text-slate-700">
            These are practical booking options, not “ads”. Pick one mainstream
            platform, one local peer-to-peer, and one winter-ready fleet if you’re
            heading north.
          </p>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            Quick rule: if your trip includes October–April routes, prioritize
            winter-ready setup (heating, tires, insulation) over saving a little
            money upfront.
          </div>

          <div className="mt-6">
            <PartnerGrid
              keys={["indie_campers", "mycamper", "touring_cars_finland"]}
              ctaLabel="Check availability"
            />
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Affiliate disclosure: Some links on this page may be sponsored.
          </div>
        </section>
      </div>
    </main>
  );
}
