"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/track";

export default function HomePage() {
  const destinations = [
    {
      name: "Rovaniemi",
      slug: "rovaniemi",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
      blurb: "Santa village logistics, winter driving basics, and real cost traps.",
    },
    {
      name: "Levi",
      slug: "levi",
      href: "/levi",
      image: "/images/destinations/dest-levi.jpg",
      blurb: "Ski season timing, airport transfers, and what to book early.",
    },
    {
      name: "Ylläs",
      slug: "yllas",
      href: "/yllas",
      image: "/images/destinations/dest-yllas.jpg",
      blurb: "Quieter Lapland base, trail access, and practical stay options.",
    },
    {
      name: "Helsinki",
      slug: "helsinki",
      href: "/helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
      blurb: "Ferries, saunas, and one-day routes that actually make sense.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden bg-slate-950">
        <Image
          src="/images/hero/hero-lapland.jpg"
          alt="Lapland winter sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-white">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight">
            Get clear facts before you book.
          </h1>

          <p className="mt-5 max-w-xl text-white/80">
            Deposit holds, debit cards, winter add-ons.
            <br />
            No fluff. No surprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary */}
            <Link
              href="/car-rental-helsinki"
              onClick={() =>
                track("cta_click", { placement: "home_hero", cta: "compare_car_rental" })
              }
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600"
            >
              Compare car rental costs
            </Link>

            {/* Secondary */}
            <Link
              href="/get-help"
              onClick={() => track("cta_click", { placement: "home_hero", cta: "ask_before_booking" })}
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Ask before booking
            </Link>

            {/* New: Start here (tracked) */}
            <Link
              href="/helsinki"
              onClick={() => track("cta_click", { placement: "home_hero", cta: "start_helsinki" })}
              className="rounded-xl bg-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/25"
            >
              Start with Helsinki →
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING DECISION CARDS */}
      <section className="relative -mt-36 z-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Car rental */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <div className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 ring-1 ring-sky-200">
                Car rental
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">Car rental in Finland</h3>
              <p className="mt-3 text-slate-700">
                Credit card deposits, debit card rules, airport pickup surprises.
              </p>

              <Link
                href="/car-rental-helsinki"
                onClick={() =>
                  track("cta_click", { placement: "home_cards", cta: "home_cards_car_rental" })
                }
                className="mt-6 inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Open guide →
              </Link>
            </div>

            {/* Camper rental */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                Camper rental
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">Camper rental in Finland</h3>
              <p className="mt-3 text-slate-700">
                Fleet vs peer-to-peer, winter-ready setups, and pickup logic that affects price.
              </p>

              <Link
                href="/camper-rental-finland"
                onClick={() => track("cta_click", { placement: "home_cards", cta: "home_cards_camper" })}
                className="mt-6 inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Open guide →
              </Link>
            </div>

            {/* Lapland tours */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <div className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 ring-1 ring-violet-200">
                Lapland tours
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">Lapland tours & experiences</h3>
              <p className="mt-3 text-slate-700">What’s included, what’s not, and how tourists overpay.</p>

              <Link
                href="/lapland-tours"
                onClick={() => track("cta_click", { placement: "home_cards", cta: "home_cards_tours" })}
                className="mt-6 inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Open guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <h2 className="text-2xl font-semibold">Popular destinations</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={dest.href}
              onClick={() =>
                track("cta_click", { placement: "home_destinations", cta: dest.slug })
              }
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:bg-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-semibold text-slate-900">{dest.name}</div>
              </div>

              <p className="mt-3 text-sm text-slate-700">{dest.blurb}</p>

              <div className="mt-5">
                <span className="inline-flex rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition group-hover:bg-slate-200">
                  Open {dest.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
