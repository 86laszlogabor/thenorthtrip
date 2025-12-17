"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/track";

export default function HomePage() {
  const cards = [
    {
      title: "Rovaniemi: Santa logistics",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
    },
    {
      title: "Car rental: the real cost traps",
      href: "/car-rental-helsinki",
      image: "/images/dest-helsinki.jpg", // ha nálad más a path, igazítsd
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
    <main className="min-h-screen bg-slate-950 p-4 sm:p-6">
      {/* “Site frame” */}
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-slate-950 ring-1 ring-white/10">
        {/* HERO */}
        <section className="relative">
          <div className="relative h-[56vh] min-h-[460px] w-full">
            <Image
              src="/images/hero/hero-lapland.jpg"
              alt="Aurora over Lapland cabin"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          </div>

          {/* NAV inside hero */}
          <div className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
              <Link href="/" className="text-white/90 text-lg font-semibold tracking-tight">
                TheNorthTrip
              </Link>

              <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
                <Link href="/car-rental-helsinki" className="hover:text-white">
                  Car rental
                </Link>
                <Link href="/camper-rental-finland" className="hover:text-white">
                  Camper rental
                </Link>
                <Link href="/lapland-tours" className="hover:text-white">
                  Lapland tours
                </Link>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </div>

              <Link
                href="/offer-checklist"
                onClick={() => track("cta_click", { placement: "home_nav", cta: "free_checklist" })}
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
              >
                Free checklist
              </Link>
            </div>
          </div>

          {/* HERO content */}
          <div className="absolute inset-x-0 bottom-0 z-20">
            <div className="mx-auto max-w-6xl px-5 pb-10">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Gondtalan utazás Finnországban és Lappföldön.
                </h1>

                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Nem “top 10 programlista”. Döntési segítség: autóbérlés szabályok, kauciók, kártyák,
                  téli logisztika, túracsapdák. Kevesebb meglepetés, több nyugalom.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/car-rental-helsinki"
                    onClick={() => track("cta_click", { placement: "home_hero", cta: "car_rental" })}
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:bg-orange-600"
                  >
                    Car rental guide
                  </Link>

                  <Link
                    href="/get-help"
                    onClick={() => track("cta_click", { placement: "home_hero", cta: "get_help" })}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
                  >
                    Get help
                  </Link>
                </div>
              </div>

              {/* Cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => track("cta_click", { placement: "home_cards", cta: c.href })}
                    className="group relative overflow-hidden rounded-2xl ring-1 ring-white/15"
                  >
                    <div className="relative h-44 w-full">
                      <Image src={c.image} alt={c.title} fill className="object-cover transition group-hover:scale-[1.02]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-sm font-semibold text-white">{c.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Optional: below-the-fold block (light / editorial later) */}
        <section className="bg-white px-5 py-10">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              Decision-first travel planning
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              We help you avoid the expensive mistakes.
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Lapland is not a checklist. It’s distance, weather, timing, and rules. We turn that into
              simple guidance, comparisons, and checklists.
            </p>
            <div className="mt-6">
              <Link
                href="/who-we-are"
                className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Read: Who we are →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
