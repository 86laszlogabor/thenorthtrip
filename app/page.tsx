import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TheNorthTrip | Finland travel, decision-first",
  description:
    "Decision-first Finland travel guides for Finland. Verify what breaks first. Checklists, tradeoffs, and realistic travel planning.",
};

const hubs = [
  {
    title: "Car rental (Helsinki)",
    href: "/car-rental-helsinki",
    image: "/images/home-entry-car.jpg",
    note: "Deposits, cards, timing, winter rules.",
  },
  {
    title: "Lapland tours",
    href: "/lapland-tours",
    image: "/images/home-entry-lapland.jpg",
    note: "Weather, operators, cancellations, seasonality.",
  },
  {
    title: "Camper rental (Finland)",
    href: "/camper-rental-finland",
    image: "/images/home-entry-camper.jpg",
    note: "Winterization, mileage, legal stops.",
  },
  {
    title: "Getting around Finland",
    href: "/getting-around-finland",
    image: "/images/home-entry-transport.jpg",
    note: "Train, bus, flight tradeoffs.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center">
        <img
          src="/images/hero/hero-finland-winter-road.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/80">
              Finland travel, without the quiet failures.
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Verify what breaks first. Then book.
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/85">
              Calm, decision-first guides for Finland travel.
              No hype. No invented policy facts.
              Just the operational reality travellers hit at desks,
              meeting points, and last services.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/offer-checklist"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-white font-medium hover:bg-orange-700"
              >
                Open the offer checklist
              </Link>
              <Link
                href="/getting-around-finland"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-white font-medium hover:bg-white/10"
              >
                Compare transport options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE HUB CARDS – FELTOLVA A HERO ALÁ */}
      <section className="relative z-20">
        <div className="mx-auto max-w-6xl px-4 -mt-24 md:-mt-32">
          <div className="grid gap-4 md:grid-cols-4">
            {hubs.map((h) => (
              <Link
                key={h.title}
                href={h.href}
                className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="relative h-40">
                  <img
                    src={h.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-sm">{h.title}</h2>
                  <p className="mt-1 text-xs text-slate-600">
                    {h.note}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DECISIONS */}
      <section className="mt-20 border-t bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Decisions with consequences
          </h2>
          <p className="mt-2 max-w-3xl text-slate-700">
            The goal is not to over-plan. It’s to surface the assumptions
            that typically break first.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Deposits and payment rules",
                body: "Most desk-level failures are payment and deposit related.",
                href: "/offer-checklist",
                cta: "Use the checklist",
              },
              {
                title: "Winter changes the physics",
                body: "Winter compresses daylight, buffers, and recovery options.",
                href: "/getting-around-finland",
                cta: "Compare transport modes",
              },
              {
                title: "Timing is the real price",
                body: "Late arrivals and last services cause most failures.",
                href: "/offer-checklist",
                cta: "Stress-test your plan",
              },
              {
                title: "Rules are procedural",
                body: "Exceptions are rare. Preparation beats persuasion.",
                href: "/policy",
                cta: "How we verify",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm"
              >
                <h3 className="font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{d.body}</p>
                <div className="mt-4">
                  <Link
                    href={d.href}
                    className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
                  >
                    {d.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Last verified: 2025-12-31
          </p>
        </div>
      </section>
    </main>
  );
}
