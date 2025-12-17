import Link from "next/link";
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
        {/* 1) COMPARE (DiscoverCars) – ONLY ONCE */}
        <section className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                Compare first (recommended)
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">{dc.name}</h2>
              <p className="mt-2 text-slate-700">{dc.blurb}</p>

              <p className="mt-3 text-sm text-slate-600">
                One step: compare prices, availability, and conditions across providers.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pl-6">
              <SponsoredLink
                href={dcLive ? dcHref : "#"}
                label="Compare prices"
                placement="pillar_car_rental"
                partner="discovercars"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-orange-500 text-black hover:bg-orange-600 transition"
              />
              <div className="mt-2 text-xs text-slate-500">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        </section>

        {/* 2) TOP PICK (SIXT) – ONLY ONCE */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                ★ Our top pick
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">{sx.name}</h2>
              <p className="mt-2 text-slate-700">{sx.blurb}</p>

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
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-orange-500 text-black hover:bg-orange-600 transition"
              />
              <div className="mt-2 text-xs text-slate-500">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        </section>

        {/* 3) Optional: a CLEAN partner grid */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Recommended options</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Keep it simple: compare first, then decide.
          </p>

          <div className="mt-6">
            <PartnerGrid keys={["sixt", "discovercars"]} ctaLabel="Open" />
          </div>
        </section>

        {/* Disclosure */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Affiliate disclosure</h2>
          <p className="mt-2 text-sm text-slate-700">
            Some links on this page may be affiliate links. We still prioritize clarity and decision-helpful guidance.
          </p>
        </section>
      </div>
    </main>
  );
}
