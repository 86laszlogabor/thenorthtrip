// app/page.tsx
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
      title: "Helsinki: car rental traps",
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
    <main className="min-h-screen bg-slate-950 text-slate-900">
      {/* HERO (full-bleed) */}
      <section className="relative isolate">
        <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Aurora over Lapland"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950" />

          {/* HERO content */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                  Gondtalan utazás Finnországban és Lappföldön.
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Döntési segédletek, amik megspórolják a drága hibákat: kauciók, kártyaszabályok,
                  téli logisztika, távolságok, lemondási feltételek. Kevesebb meglepetés, több nyugalom.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/car-rental-helsinki"
                    onClick={() => track("cta_click", { placement: "home_hero", cta: "car_rental" })}
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                  >
                    Car rental guide
                  </Link>

                  <Link
                    href="/offer-checklist"
                    onClick={() =>
                      track("cta_click", { placement: "home_hero", cta: "free_checklist" })
                    }
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Free checklist
                  </Link>

                  <Link
                    href="/get-help"
                    onClick={() => track("cta_click", { placement: "home_hero", cta: "get_help" })}
                    className="inline-flex items-center justify-center rounded-xl px-2 py-3 text-sm font-semibold text-white/80 underline underline-offset-4 transition hover:text-white"
                  >
                    Get help →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE SECTION (cards + who we are) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top picks cards pushed down over white */}
          <div className="-mt-16 pb-10 sm:-mt-20">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topPicks.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => track("cta_click", { placement: "home_top_picks", cta: c.href })}
                  className="group relative overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-black/10"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-sm font-semibold text-white">{c.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Who we are / decision-first */}
          <div className="pb-16">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Decision-first travel planning
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                We help you avoid the expensive mistakes.
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Lappföld nem “programok listája”. Inkább távolság, időjárás, időzítés és szabályok.
                Mi ezt fordítjuk le érthető összehasonlításokra, checklistákra és egyszerű döntési
                útvonalakra, hogy ne a helyszínen tanulj meg mindent a saját pénzeden.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/who-we-are"
                  onClick={() => track("cta_click", { placement: "home_who", cta: "who_we_are" })}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Read: Who we are →
                </Link>

                <Link
                  href="/offer-checklist"
                  onClick={() =>
                    track("cta_click", { placement: "home_who", cta: "open_checklist" })
                  }
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                >
                  Open the checklist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: dark footer spacer */}
      <div className="h-14 bg-slate-950" />
    </main>
  );
}
