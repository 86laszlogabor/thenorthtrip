// app/camper-rental-finland/page.tsx
import PartnerGrid from "@/components/PartnerGrid";

export default function CamperRentalFinlandPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HERO */}
        <header>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/70 border border-white/10">
            <span className="text-white/80">Finland</span>
            <span className="opacity-40">•</span>
            <span>Camper rental</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Camper rental in Finland: pick the model that matches your season
          </h1>

          <p className="mt-3 max-w-2xl text-white/70">
            Fleet rentals are simplest. Peer-to-peer can be better value. For winter routes and Lapland,
            prioritize a winter-ready setup over saving a little money.
          </p>
        </header>

        {/* HOW TO CHOOSE */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Fleet rental (simple)",
              d: "Best for first-time camper trips. Clearer pickup process and predictable rules.",
            },
            {
              t: "Peer-to-peer (local)",
              d: "Local owners, flexible options, sometimes better value. Read terms carefully.",
            },
            {
              t: "Winter-ready (Lapland)",
              d: "If you plan winter driving, prioritize proper tires, heating, and realistic range.",
            },
            {
              t: "Plan pickup logic",
              d: "Airport vs city pickup changes timing and availability. Match it to your itinerary.",
            },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-base font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-white/70">{x.d}</div>
            </div>
          ))}
        </section>

        {/* PARTNERS */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Recommended camper partners</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            One mainstream option, one local peer-to-peer, and winter-ready local fleets.
            Links will be plugged in after we confirm partner terms.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={["indie_campers", "mycamper", "nordic_campers", "touring_cars_finland"]}
              ctaLabel="Check availability"
            />
          </div>

          <p className="mt-4 text-xs text-white/50">
            Affiliate disclosure: Some links on this page may be sponsored.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Quick FAQ</h2>
          <div className="mt-4 space-y-4 text-sm text-white/70">
            <div>
              <div className="font-semibold text-white">Is wild camping allowed?</div>
              <div className="mt-1">
                Finland has strong outdoor access rights, but camper parking still needs common sense:
                respect signs, private yards, and local restrictions.
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Do I need winter tires?</div>
              <div className="mt-1">
                If you drive in winter, yes. Confirm what’s included and what’s extra before pickup.
              </div>
            </div>
            <div>
              <div className="font-semibold text-white">Fleet vs P2P?</div>
              <div className="mt-1">
                Fleet is simpler. P2P can be cheaper and more flexible, but terms vary by owner.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
