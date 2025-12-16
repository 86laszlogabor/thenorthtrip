import PartnerGrid from "@/components/PartnerGrid";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ImageGrid from "@/components/ImageGrid";

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
      d: "If you plan winter driving: heating, proper tires, realistic range, and insulation matter.",
    },
    {
      t: "Plan pickup logic",
      d: "Airport vs city pickup changes timing, inventory, and sometimes the final price.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Camper rental in Finland: pick the model that matches your season"
        subtitle="Fleet rentals are simplest. Peer-to-peer can be better value. For winter routes and Lapland, prioritize a winter-ready setup over saving a little money."
        imageSrc="/images/pages/camper-rental/camper-hero.jpg"
        imageAlt="Camper rental in Finland"
        badge="Finland • Camper rental"
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

        <ImageGrid
          title="Camper snapshots"
          items={[
            { src: "/images/pages/camper-rental/camper-winter.jpg", alt: "Camper in winter conditions" },
            { src: "/images/pages/camper-rental/camper-interior.jpg", alt: "Camper interior" },
          ]}
        />

        {/* HOW TO CHOOSE */}
        <section className="mt-2 grid gap-4 sm:grid-cols-2">
          {cards.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <div className="text-base font-semibold text-slate-900">{x.t}</div>
              <div className="mt-2 text-sm text-slate-600">{x.d}</div>
            </div>
          ))}
        </section>

        {/* PARTNERS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Recommended camper partners</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            One mainstream option, one local peer-to-peer, and winter-ready local fleets.
            Links will be plugged in after we confirm partner terms.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={["indie_campers", "mycamper", "nordic_campers", "touring_cars_finland"]}
              ctaLabel="Check availability"
            />
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Affiliate disclosure: Some links on this page may be sponsored.
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Quick FAQ</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                q: "Is wild camping allowed?",
                a: "Finland has strong outdoor access rights, but camper parking still needs common sense: respect signs, private yards, and restrictions.",
              },
              {
                q: "Do I need winter tires?",
                a: "If you drive in winter, yes. Confirm what’s included and what’s extra before pickup.",
              },
              {
                q: "Fleet vs P2P?",
                a: "Fleet is simpler. P2P can be cheaper and more flexible, but terms vary by owner.",
              },
            ].map((x) => (
              <div key={x.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="font-semibold text-slate-900">{x.q}</div>
                <div className="mt-2 text-sm text-slate-600">{x.a}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
