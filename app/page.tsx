// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/track";

type HomeCard = {
  title: string;
  href: string;
  image: string;
};

export default function HomePage() {
  const cards: HomeCard[] = [
    {
      title: "Rovaniemi: Santa logistics & timing",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
    },
    {
      title: "Helsinki: car rental deposit traps",
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
      {/* HERO (full-bleed) */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] w-full">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Northern lights above a cabin in Finnish Lapland"
            fill
            priority
            className="object-cover"
          />
          {/* readability layers */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        </div>

        {/* HERO content */}
        <div className="absolute inset-x-0 top-0">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                Plan Finland &amp; Lapland
                <span className="block text-white/85">without expensive surprises.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Real-world guidance on car rental deposits, card rules, winter logistics, and tour
                fine print. Clear decisions first, smoother trips later.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/offer-checklist"
                  onClick={() => track("cta_click", { placement: "home_hero", cta: "open_checklist" })}
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                >
                  Free booking checklist
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
                  className="text-sm font-semibold text-white/85 underline underline-offset-4 transition hover:text-white"
                >
                  Who we are →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards overlay (a bit lower, cleaner, no extra CTA strip) */}
        <div className="absolute inset-x-0 bottom-[-54px] sm:bottom-[-64px]">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  onClick={() => track("cta_click", { placement: "home_cards", cta: c.href })}
                  className="group relative overflow-hidden rounded-2xl ring-1 ring-white/15"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
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

      {/* White editorial section */}
      <section className="bg-white text-slate-900 pt-28 sm:pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left: value */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Decision-first travel planning
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                Avoid the mistakes that quietly burn your budget.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-700">
                Lapland looks simple on a map. In reality it’s timing, distance, weather, and rules.
                We translate that into practical comparisons and checklists so you don’t learn it the
                expensive way at a rental desk or a tour counter.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/car-rental-helsinki"
                  onClick={() => track("cta_click", { placement: "home_white", cta: "car_rental_guide" })}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Car rental guide →
                </Link>
                <Link
                  href="/lapland-tours"
                  onClick={() => track("cta_click", { placement: "home_white", cta: "lapland_tours" })}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Lapland tours guide →
                </Link>
              </div>
            </div>

            {/* Right: Who we are card (moved to the right like you asked) */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold tracking-wide text-slate-500">Who we are</p>
                <h3 className="mt-2 text-xl font-bold">
                  Calm trips come from boring clarity.
                </h3>
                <p className="mt-3 leading-relaxed text-slate-700">
                  We’re not a travel agency. We don’t sell “best experiences”. We build decision tools:
                  deposits, card rules, insurance gotchas, winter logistics, and the stuff platforms
                  gloss over.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/who-we-are"
                    onClick={() => track("cta_click", { placement: "home_who_card", cta: "read_who_we_are" })}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Read Who we are →
                  </Link>
                  <Link
                    href="/offer-checklist"
                    onClick={() => track("cta_click", { placement: "home_who_card", cta: "open_checklist" })}
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-600"
                  >
                    Open checklist
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
