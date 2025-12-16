// app/car-rental-helsinki/page.tsx
import PartnerGrid from "@/components/PartnerGrid";
import { PARTNERS } from "@/lib/partners";

export default function CarRentalHelsinkiPage() {
  const dc = PARTNERS.discovercars;
  const sx = PARTNERS.sixt;

  const dcHref = dc?.href || "#";
  const sxHref = sx?.href || "#";

  const dcPlaceholder = dcHref === "#" || dcHref.toLowerCase() === "tbd";
  const sxPlaceholder = sxHref === "#" || sxHref.toLowerCase() === "tbd";

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* HERO */}
        <header>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/70 border border-white/10">
            <span className="text-white/80">Helsinki</span>
            <span className="opacity-40">•</span>
            <span>Car rental guide</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Car rental in Helsinki: compare first, then pick a reliable operator
          </h1>

          <p className="mt-3 max-w-2xl text-white/70">
            This page is built to help you decide, not to spam “cheap links”.
            Use a comparison tool to map the market, then choose a predictable operator if you value
            fewer surprises over saving a few euros.
          </p>
        </header>

        {/* TOP PICK */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                ⭐ Our top pick
              </div>
              <h2 className="mt-3 text-2xl font-bold">{sx.name}</h2>
              <p className="mt-2 max-w-2xl text-white/70">{sx.blurb}</p>
              <p className="mt-3 max-w-2xl text-sm text-white/60">
                Why top pick? Direct operator, clearer rules, fewer “surprise” add-ons at pickup. If you
                care about predictable travel days, this is usually the safer bet.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-4 sm:mt-0">
              <a
                href={sxHref}
                target="_blank"
                rel="sponsored nofollow noopener"
                aria-disabled={sxPlaceholder}
                className={[
                  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
                  sxPlaceholder
                    ? "bg-white/10 text-white/50 cursor-not-allowed pointer-events-none"
                    : "bg-orange-600 hover:bg-orange-500 text-white",
                ].join(" ")}
              >
                Check SIXT options <span className="ml-2 opacity-70">↗</span>
              </a>
              <div className="mt-2 text-xs text-white/50">
                Affiliate disclosure applies. Links may be sponsored.
              </div>
            </div>
          </div>
        </section>

        {/* COMPARE FIRST */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Step 1: Compare the market</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Use a comparison tool to see prices, availability, and conditions across companies. Treat it as
            “price discovery”, not “the best option”.
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Compare tool
                </div>
                <h3 className="mt-3 text-xl font-bold">{dc.name}</h3>
                <p className="mt-2 max-w-2xl text-white/70">{dc.blurb}</p>
                <p className="mt-3 max-w-2xl text-sm text-white/60">
                  This helps you map the market. If SIXT shows up there too, great. Just remember:
                  comparison is for search, top pick is for the final decision.
                </p>
              </div>

              <div className="mt-4 sm:mt-0">
                <a
                  href={dcHref}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  aria-disabled={dcPlaceholder}
                  className={[
                    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition",
                    dcPlaceholder
                      ? "bg-white/10 text-white/50 cursor-not-allowed pointer-events-none"
                      : "bg-orange-600 hover:bg-orange-500 text-white",
                  ].join(" ")}
                >
                  Compare prices <span className="ml-2 opacity-70">↗</span>
                </a>
                <div className="mt-2 text-xs text-white/50">
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
                t: "Winter add-ons",
                d: "In winter, clarify tires and road conditions coverage. Avoid last-minute surprises.",
              },
              {
                t: "Pickup location logic",
                d: "Airport vs city pickup can change hours and pricing. Match it to your flight times.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-base font-semibold">{x.t}</div>
                <div className="mt-2 text-sm text-white/70">{x.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDED (OPTIONAL) */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Recommended options</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Two-step logic: compare first, then decide. That’s it.
          </p>
          <div className="mt-6">
            <PartnerGrid keys={["sixt", "discovercars"]} ctaLabel="Open" />
          </div>
        </section>

        {/* FOOTNOTE */}
        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Affiliate disclosure</h2>
          <p className="mt-2 text-sm text-white/70">
            Some links on this page may be affiliate links. If you use them, we may earn a commission at
            no extra cost to you. We still prioritize clarity and decision-helpful guidance.
          </p>
        </section>
      </div>
    </main>
  );
}
