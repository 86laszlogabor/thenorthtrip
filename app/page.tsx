"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/track";

export default function HomePage() {
  const topPicks = [
    {
      title: "Rovaniemi: Santa logistics",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
    },
    {
      title: "Car rental: the real cost traps",
      href: "/car-rental-helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
    },
    {
      title: "Lapland tours: what people overpay for",
      href: "/lapland-tours",
      image: "/images/destinations/dest-yllas.jpg",
    },
    {
      title: "Cabins & stays: pick the right base",
      href: "/offer-checklist",
      image: "/images/destinations/dest-levi.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* FULL-BLEED HERO */}
      <section className="relative w-full">
        <div className="relative h-[72vh] min-h-[560px] w-full">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Aurora over Lapland cabin"
            fill
            priority
            className="object-cover"
          />
          {/* readability overlays */}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />
        </div>

        {/* HERO CONTENT */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-4 pb-14 sm:px-6">
            <div className="pointer-events-auto max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                Calm trips in Finland and Lapland.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Decision-first travel planning: deposits, card rules, winter driving, cancellations,
                and the small-print details that turn a “dream trip” into an expensive lesson.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/offer-checklist"
                  onClick={() =>
                    track("cta_click", { placement: "home_hero", cta: "open_checklist" })
                  }
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                >
                  Free checklist
                </Link>

                <Link
                  href="/get-help"
                  onClick={() => track("cta_click", { placement: "home_hero", cta: "get_help" })}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                >
                  Get help
                </Link>

                <Link
                  href="/who-we-are"
                  onClick={() => track("cta_click", { placement: "home_hero", cta: "who_we_are" })}
                  className="inline-flex items-center justify-center rounded-xl px-1 py-3 text-sm font-semibold text-white/85 underline underline-offset-4 transition hover:text-white"
                >
                  Why TheNorthTrip →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE EDITORIAL SECTION (cards overlap on top) */}
      <section className="relative bg-white text-slate-900">
        {/* Overlap container */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* TOP PICKS (overlap) */}
          <div className="-mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topPicks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => track("cta_click", { placement: "home_top_picks", cta: c.href })}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-semibold text-white">{c.title}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Editorial content */}
          <div className="mx-auto max-w-3xl py-14">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              Decision-first travel planning
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              We help you avoid the expensive mistakes.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Lapland is not a checklist. It’s distance, weather, timing, and rules.
              We turn that into simple guidance, comparisons, and checklists you can actually use.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/who-we-are"
                onClick={() => track("cta_click", { placement: "home_editorial", cta: "who_we_are" })}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Read: Who we are →
              </Link>

              <Link
                href="/car-rental-helsinki"
                onClick={() =>
                  track("cta_click", { placement: "home_editorial", cta: "car_rental_guide" })
                }
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Car rental guide
              </Link>
            </div>

            {/* bottom padding space */}
            <div className="mt-10 h-px w-full bg-slate-200" />
            <p className="mt-8 text-sm text-slate-600">
              Next up: partners and city pages. But we keep them clean: fast answers, strong keywords,
              and one clear booking path.
            </p>
          </div>
