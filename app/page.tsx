// app/page.tsx
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";
import HeroCardRail, { type HeroCard } from "@/components/HeroCardRail";

export const metadata = {
  title: "TheNorthTrip | Finland & Lapland travel, without surprises",
  description:
    "Decision-first travel planning for Finland and Lapland: car rental rules, tours, real costs, and practical checklists.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const cards: HeroCard[] = [
    {
      title: "Rovaniemi: Santa logistics",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
      trackingCta: "card_rovaniemi",
    },
    {
      title: "Car rental: the real cost traps",
      href: "/car-rental-helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
      trackingCta: "card_car_rental",
    },
    {
      title: "Lapland tours: what people overpay for",
      href: "/lapland-tours",
      image: "/images/destinations/dest-yllas.jpg",
      trackingCta: "card_tours",
    },
    {
      title: "Cabins & stays: pick the right base",
      href: "/offer-checklist",
      image: "/images/destinations/dest-levi.jpg",
      trackingCta: "card_stays",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO full-bleed */}
      <section className="relative isolate">
        <div className="relative h-[70vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Aurora over Lapland"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/20 backdrop-blur">
                  Finland & Lapland travel
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Gondtalan utazás Finnországban és Lappföldön.
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Döntési segítség, nem zaj: autóbérlés szabályok, kauciók, kártyák, téli logisztika,
                  túrák apróbetűje, és a “mi kerül mennyibe valójában” rész.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <TrackedLink
                    href="/offer-checklist"
                    eventName="cta_click"
                    props={{ placement: "home_hero", cta: "free_checklist" }}
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                  >
                    Free checklist
                  </TrackedLink>

                  <TrackedLink
                    href="/get-help"
                    eventName="cta_click"
                    props={{ placement: "home_hero", cta: "get_help" }}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Get help
                  </TrackedLink>
                </div>

                {/* Cards: mobile swipe + desktop grid */}
                <HeroCardRail cards={cards} placement="home_cards" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BODY (pulled up) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-10 pb-16">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                Decision-first travel planning
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                We help you avoid the expensive mistakes.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                Lapland isn’t a checklist. It’s distance, weather, timing, and rules.
                Mi ezt lefordítjuk érthető döntésekre, összehasonlításokra, és egy tiszta foglalási útvonalra.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TrackedLink
                  href="/who-we-are"
                  eventName="cta_click"
                  props={{ placement: "home_body", cta: "who_we_are" }}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Read: Who we are →
                </TrackedLink>

                <TrackedLink
                  href="/car-rental-helsinki"
                  eventName="cta_click"
                  props={{ placement: "home_body", cta: "car_rental" }}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Car rental guide →
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 bg-slate-950" />
    </main>
  );
}
