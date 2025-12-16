import PartnerGrid from "@/components/PartnerGrid";
import SponsoredLink from "@/components/SponsoredLink";
import { PARTNERS } from "@/lib/partners";

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
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HERO */}
        <header className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Helsinki</span>
            <span className="opacity-40">•</span>
            <span>Car rental guide</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Car rental in Helsinki: compare first, then pick a reliable operator
          </h1>

          <p className="mt-3 text-lg text-slate-700">
            This page is built to help you decide, not to spam “cheap links”.
            Compare the market first, then choose a predictable operator if you value fewer surprises
            over saving a few euros.
          </p>
        </header>

        {/* TOP PICK */}
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                ⭐ Our top pick
              </div>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">{sx.name}</h2>
              <p className="mt-2 text-slate-700">{sx.blurb}</p>

              <p className="mt-3 text-sm text-slate-600">
                Why top pick? Direct operator, clearer rules, fewer “surprise” add-ons at pickup.
                If you care about predictable travel days, this is usually the safer bet.
              </p>
            </div>

            <div className="mt-4 sm:mt-0 sm:pl-6">
              <SponsoredLink
                href={sxLive ? sxHref : "#"}
                label="Check SIXT options"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-orange-500 text-black hover:bg-orange-600 transition"
              />
              <div className="mt-2 text-xs text-slate-500">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        </section>

        {/* COMPARE FIRST */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Step 1: Compare the market</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Use a comparison tool to see prices, availability, and conditions across companies.
            Treat it as “price discovery”, not “the best option”.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Compare tool
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-900">{dc.name}</h3>
                <p className="mt-2 text-slate-700">{dc.blurb}</p>

                <p className="mt-3 text-sm text-slate-600">
                  This helps you map the market. If SIXT shows up there too, great.
                  Just remember: comparison is for search, top pick is for the final decision.
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pl-6">
                <SponsoredLink
                  href={dcLive ? dcHref : "#"}
                  label="Compare prices"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-orange-500 text-black hover:bg-orange-600 transition"
                />
                <div className="mt-2 text-xs text-slate-500">
                  Affiliate disclosure applies. Links may be sponsored.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CHECKLIST */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Quick checklist before you book</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[
              {
                t: "Payment card requirements",
                d: "Many rentals still prefer credit cards at pickup. Debit can work, but not always.",
              },
              {
                t: "Deposit holds & authorizations",
                d: "‘Paid online’ does not automatically mean no deposit. Check the pickup terms.",
              },
              {
                t: "Insurance & exclusions",
                d: "CDW names are marketing. Confirm excess amount and common exclusions (glass/tires).",
              },
              {
                t: "Pickup location logic",
                d: "Airport vs city pickup changes opening hours and rules. Match it to your itinerary.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">{x.t}</div>
                <div className="mt-2 text-sm text-slate-700">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="/offer-checklist"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
            >
              Open the full checklist →
            </a>
          </div>
        </section>

        {/* RECOMMENDED */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Recommended options</h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            Two-step logic: compare first, then decide. That’s it.
          </p>

          <div className="mt-6">
            <PartnerGrid keys={["sixt", "discovercars"]} ctaLabel="Open" />
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">Affiliate disclosure</h2>
          <p className="mt-2 text-sm text-slate-700">
            Some links on this page may be affiliate links. If you use them, we may earn a commission at
            no extra cost to you. We still prioritize clarity and decision-helpful guidance.
          </p>
        </section>
      </div>
    </main>
  );
}
