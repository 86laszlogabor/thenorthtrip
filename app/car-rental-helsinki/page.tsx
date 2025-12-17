import PartnerGrid from "@/components/PartnerGrid";
import SponsoredLink from "@/components/SponsoredLink";
import { PARTNERS } from "@/lib/partners";
import PageHero from "@/components/PageHero";

function isLive(href: string) {
  const h = (href || "").trim().toLowerCase();
  return !!h && h !== "#" && h !== "tbd";
}

export default function CarRentalHelsinkiPage() {
  const dc = PARTNERS.discovercars;
  const sx = PARTNERS.sixt;

  const dcHref = dc?.href ?? "#";
  const sxHref = sx?.href ?? "#";

  const dcLive = isLive(dcHref);
  const sxLive = isLive(sxHref);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Car rental in Helsinki: compare first, then pick a reliable operator"
        subtitle="Compare the market first, then choose a predictable operator if you value fewer surprises over saving a few euros."
        imageSrc="/images/pages/car-rental/car-hero.jpg"
        imageAlt="Car rental pickup in Helsinki"
        badge="Helsinki • Car rental guide"
        priority
      />

      <div className="mx-auto max-w-6xl px-4 pb-12">
        {/* CTA row (same pattern as other pillars) */}
        <div className="mt-2 flex flex-wrap gap-3">
          <a
            href="#recommended"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
          >
            Jump to booking options
          </a>

          <a
            href="#rules"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            Read the rules first
          </a>
        </div>

        {/* 1) COMPARE (DiscoverCars) */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Compare first (recommended)
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">{dc?.name ?? "DiscoverCars"}</h2>
              <p className="mt-2 text-slate-700">{dc?.blurb ?? "Compare prices and conditions across providers."}</p>

              <p className="mt-3 text-sm text-slate-600">
                One step: compare prices, availability, and conditions across providers. Then pick based on rules, not
                vibes.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pl-6">
              <SponsoredLink
                href={dcLive ? dcHref : "#"}
                label="Compare prices"
                placement="pillar_car_rental"
                partner="discovercars"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
              />
              <div className="mt-2 text-xs text-slate-500">Affiliate disclosure applies. Links may be sponsored.</div>
            </div>
          </div>
        </section>

        {/* 2) TOP PICK (SIXT) */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                ★ Our top pick
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">{sx?.name ?? "SIXT"}</h2>
              <p className="mt-2 text-slate-700">{sx?.blurb ?? "Direct operator with clear rules."}</p>

              <p className="mt-3 text-sm text-slate-600">
                Direct operator, clearer rules, fewer “surprise” add-ons at pickup.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pl-6">
              <SponsoredLink
                href={sxLive ? sxHref : "#"}
                label="Check SIXT options"
                placement="pillar_car_rental"
                partner="sixt"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
              />
              <div className="mt-2 text-xs text-slate-500">Affiliate disclosure applies. Links may be sponsored.</div>
            </div>
          </div>
        </section>

        {/* 3) Rules (short, decision-first) */}
        <section id="rules" className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold">Before you book: 3 rules that prevent 80% of problems</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-bold text-slate-900">1) Card rules</div>
              <p className="mt-2 text-sm text-slate-700">
                “Paid online” doesn’t mean no deposit. Many desks still require a credit card for the hold.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-bold text-slate-900">2) Winter extras</div>
              <p className="mt-2 text-sm text-slate-700">
                Check what’s included (tires, insurance wording). Winter routes punish vague terms.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-bold text-slate-900">3) Pickup friction</div>
              <p className="mt-2 text-sm text-slate-700">
                Airport vs city pickup changes inventory and timing. Don’t optimize for price only.
              </p>
            </div>
          </div>
        </section>

        {/* 4) Booking options grid */}
        <section id="recommended" className="mt-10">
          <h2 className="text-2xl font-bold">Booking options</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Keep it simple: compare first, then pick an operator that matches your risk tolerance and card situation.
          </p>

          <div className="mt-6">
            <PartnerGrid
              keys={["discovercars", "sixt"]}
              ctaLabel="Check availability"
              placement="pillar_car_rental"
            />
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Affiliate disclosure: Some links on this page may be affiliate links. We still prioritize clarity and
            decision-helpful guidance.
          </div>
        </section>
      </div>
    </main>
  );
}
