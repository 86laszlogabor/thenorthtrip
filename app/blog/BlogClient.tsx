"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

type Category =
  | "Checklist"
  | "Transport"
  | "Helsinki"
  | "Lapland"
  | "Destinations"
  | "Cities"
  | "Culture"
  | "Wildlife"
  | "Rentals"
  | "Camper"
  | "Day trips";

type Post = {
  title: string;
  description: string;
  category: Category;
  href: string;
  verified: string;
  image?: string;
  featured?: boolean;
  readMins?: number;
};

const verifiedDefault = "2025-12-31";

const categoryImage: Record<Category, string> = {
  Checklist: "/images/og/og-default.jpg",
  Transport: "/images/og/og-default.jpg",
  Helsinki: "/images/og/og-helsinki-city-mobility.jpg",
  Lapland: "/images/og/og-lapland-rovaniemi.jpg",
  Destinations: "/images/og/og-lapland-rovaniemi.jpg",
  Cities: "/images/og/og-default.jpg",
  Culture: "/images/og/og-default.jpg",
  Wildlife: "/images/og/og-default.jpg",
  Rentals: "/images/og/og-helsinki-city-mobility.jpg",
  Camper: "/images/og/og-default.jpg",
  "Day trips": "/images/og/og-default.jpg",
};

const POSTS: Post[] = [
  {
    title: "Lapland Travel Checklist 2026: Offer Checklist Guide",
    description:
      "What to verify before paying: deposits, winter clauses, timing, and desk-level surprises that ruin trips quietly.",
    category: "Checklist",
    href: "/blog/lapland-finland-travel-checklist-2026-offer-checklist-guide",
    verified: verifiedDefault,
    featured: true,
    readMins: 14,
  },

  {
    title: "Getting Around Finland 2026: Flights, Trains, Rentals & Lapland",
    description:
      "The real transport skeleton: what’s reliable in winter, what needs buffers, and where people lie to themselves.",
    category: "Transport",
    href: "/blog/getting-around-finland-2026-flights-trains-rentals-lapland",
    verified: verifiedDefault,
    readMins: 16,
  },
  {
    title: "Getting Around Finland 2026: Trains, Buses, Flights to Lapland",
    description:
      "Decision table transport: when VR wins, when flying is worth it, and when bus is just endurance.",
    category: "Transport",
    href: "/blog/getting-around-finland-2026-trains-buses-flights-lapland",
    verified: verifiedDefault,
    readMins: 14,
  },
  {
    title: "Getting Around Finland: Trains, Flights, Buses (Lapland 2026)",
    description:
      "A winter-first transport guide: where the system is honest and where your plan needs slack.",
    category: "Transport",
    href: "/blog/getting-around-finland-trains-flights-buses-lapland-2026",
    verified: verifiedDefault,
    readMins: 13,
  },
  {
    title: "Helsinki Winter Guide 2026",
    description:
      "Winter Helsinki done properly: friction points, pacing, and what to verify before you burn time.",
    category: "Helsinki",
    href: "/blog/helsinki-winter-guide-2026",
    verified: verifiedDefault,
    readMins: 10,
  },
  {
    title: "Helsinki Travel Guide: Winter → Lapland (2026)",
    description:
      "Helsinki as a launchpad: what to do, what to skip, and how to transition north without chaos.",
    category: "Helsinki",
    href: "/blog/helsinki-travel-guide-winter-lapland-2026",
    verified: verifiedDefault,
    readMins: 12,
  },
  {
    title: "Helsinki Airport Car Rental: Lapland Road Trip (2026)",
    description:
      "Car rental from HEL airport: desk traps, winter clauses, and how to avoid deposit and timing failures.",
    category: "Rentals",
    href: "/blog/helsinki-airport-car-rental-lapland-road-trip-2026",
    verified: verifiedDefault,
    readMins: 11,
  },
  {
    title: "Helsinki Airport → Lapland Transfers: Shuttles & Tours (2026)",
    description:
      "Transfers without fantasy: what exists, what breaks in winter, and how to pick the least fragile option.",
    category: "Transport",
    href: "/blog/helsinki-airport-to-lapland-transfers-shuttles-tours-2026",
    verified: verifiedDefault,
    readMins: 10,
  },
  {
    title: "Helsinki → Lapland Day Trips: Trains & Thenortrip (2026)",
    description:
      "Day trips north: where it’s realistic, where it’s self-harm, and what sequencing makes it survivable.",
    category: "Transport",
    href: "/blog/helsinki-to-lapland-day-trips-trains-thenortrip-2026",
    verified: verifiedDefault,
    readMins: 9,
  },
  {
    title: "Helsinki → Lapland: Train vs Flight Day Trip Guide (2026)",
    description:
      "Train vs flight logic with winter constraints: timing, fatigue, and which choice ruins fewer days.",
    category: "Transport",
    href: "/blog/helsinki-to-lapland-train-flight-day-trip-guide-2026",
    verified: verifiedDefault,
    readMins: 8,
  },
  {
    title: "Lapland Tours 2026",
    description:
      "High-intent Lapland planning: pricing anchors, booking order, and what matters when winter is in charge.",
    category: "Lapland",
    href: "/blog/lapland-tours-2026",
    verified: verifiedDefault,
    readMins: 15,
  },
  {
    title: "Lapland Tours Finland 2026: Pricing, Itineraries & Booking Guide",
    description:
      "Decision-first Lapland tours: realistic cost bands, what to book first, and why sequencing saves money and pain.",
    category: "Lapland",
    href: "/blog/lapland-tours-finland-2026-pricing-itineraries-booking-guide",
    verified: verifiedDefault,
    readMins: 18,
  },
  {
    title: "Levi Lapland 2026: Skiing, Snowmobiling & Thenortrip Safaris",
    description:
      "Levi as a base: what it’s great for, what it’s not, and how to plan winter days without stacking fatigue.",
    category: "Destinations",
    href: "/blog/levi-lapland-2026-skiing-snowmobiling-thenortrip-safaris",
    verified: verifiedDefault,
    readMins: 11,
  },
  {
    title: "Rovaniemi Unveiled: Lapland Winter Guide (2026)",
    description:
      "Rovaniemi as a hub: tours, Santa friction, aurora strategy, and what to skip when daylight is short.",
    category: "Destinations",
    href: "/blog/rovaniemi-unveiled-lapland-winter-guide-2026",
    verified: verifiedDefault,
    readMins: 12,
  },
  {
    title: "Rovaniemi Winter Guide: Santa Village & Aurora Tours",
    description:
      "What’s free vs paid at Santa Village, plus aurora logic that doesn’t depend on luck cosplay.",
    category: "Destinations",
    href: "/blog/rovaniemi-winter-guide-santa-village-aurora-tours",
    verified: verifiedDefault,
    readMins: 10,
  },
  {
    title: "Porvoo Day Trip from Helsinki: Wooden Houses & Lapland Gateway",
    description:
      "A clean Helsinki day trip that actually works: old town, riverfront pacing, and why it’s a mental Lapland warm-up.",
    category: "Day trips",
    href: "/blog/porvoo-day-trip-from-helsinki-wooden-houses-lapland-gateway",
    verified: verifiedDefault,
    readMins: 7,
  },
  {
    title: "Tampere: Sauna Capital Winter Stop Before Lapland",
    description:
      "Why Tampere is a smart winter break: sauna logic, pacing, and where it fits before going north.",
    category: "Cities",
    href: "/blog/tampere-sauna-capital-winter-stop-before-lapland",
    verified: verifiedDefault,
    readMins: 8,
  },
  {
    title: "Finland Cities: Hidden Gems",
    description:
      "City stops that actually add value, not filler. Decision-first pacing between hubs.",
    category: "Cities",
    href: "/blog/finland-cities-hidden-gems",
    verified: verifiedDefault,
    readMins: 9,
  },
  {
    title: "Siida Sámi Museum Inari: Culture Before Aurora Tours (2026)",
    description:
      "The museum that fixes the order of your Lapland trip: daylight context first, aurora obsession second.",
    category: "Culture",
    href: "/blog/siida-sami-museum-inari-culture-before-aurora-tours-2026",
    verified: verifiedDefault,
    readMins: 6,
  },
  {
    title: "Ranua Arctic SnowPark & Zoo: Polar Bears + Thenortrip Guide (2026)",
    description:
      "Why Ranua works better in winter: Arctic animals in their element, realistic timing, and how to avoid a long cold mistake.",
    category: "Wildlife",
    href: "/blog/ranua-arctic-snowpark-zoo-polar-bears-thenortrip-guide-2026",
    verified: verifiedDefault,
    readMins: 6,
  },
  {
    title: "Winter Camper Rental Finland 2026: Lapland Self-Drive Guide",
    description:
      "Winter camper reality: what breaks first, what to verify, and when self-drive is sane vs stubborn.",
    category: "Camper",
    href: "/blog/winter-camper-rental-finland-2026-lapland-self-drive-guide",
    verified: verifiedDefault,
    readMins: 13,
  },
  {
    title: "Winter Camper Rental Finland 2026: Lapland Self-Drive Ultimate Guide",
    description:
      "Deep dive: winter self-drive constraints, routing, risk buffers, and how to avoid quiet failures in cold.",
    category: "Camper",
    href: "/blog/winter-camper-rental-finland-2026-lapland-self-drive-ultimate-guide",
    verified: verifiedDefault,
    readMins: 17,
  },
  {
    title: "Camper Rental Finland Winter: Self-Drive Guide (2026)",
    description:
      "A winter-first camper guide focused on real constraints: heating, water, roads, and time loss multipliers.",
    category: "Camper",
    href: "/blog/camper-rental-finland-winter-self-drive-guide-2026",
    verified: verifiedDefault,
    readMins: 12,
  },
  {
    title: "Finland Winter Road Trip Camper: Lapland Itinerary (2026)",
    description:
      "A coherent winter road trip itinerary that respects daylight, fatigue, and the fact winter hates your optimism.",
    category: "Camper",
    href: "/blog/finland-winter-road-trip-camper-lapland-itinerary-2026",
    verified: verifiedDefault,
    readMins: 14,
  },
];

const CATEGORIES: (Category | "All")[] = [
  "All",
  "Checklist",
  "Transport",
  "Rentals",
  "Helsinki",
  "Lapland",
  "Destinations",
  "Camper",
  "Cities",
  "Day trips",
  "Culture",
  "Wildlife",
];

function clamp(str: string, max = 160) {
  if (str.length <= max) return str;
  return str.slice(0, max - 1).trimEnd() + "…";
}

export default function BlogClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = useState<"Newest" | "Oldest" | "Read time">("Newest");
  const [page, setPage] = useState(1);

  const perPage = 6;

  const featured = useMemo(() => POSTS.find((p) => p.featured) ?? POSTS[0], []);
  const rest = useMemo(() => POSTS.filter((p) => !p.featured), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = rest;

    if (category !== "All") list = list.filter((p) => p.category === category);

    if (q) {
      list = list.filter((p) => {
        const hay = `${p.title} ${p.description} ${p.category}`.toLowerCase();
        return hay.includes(q);
      });
    }

    const sorted = [...list].sort((a, b) => {
      const ad = new Date(a.verified).getTime();
      const bd = new Date(b.verified).getTime();
      if (sort === "Newest") return bd - ad;
      if (sort === "Oldest") return ad - bd;
      return (b.readMins ?? 0) - (a.readMins ?? 0);
    });

    return sorted;
  }, [rest, query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  return (
    <>
      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Blog</p>

        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Read the pieces that actually reduce risk.
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-brand-text/70">
              Short version: fewer surprises, fewer “we’ll figure it out” moments. The guides stay factual and practical.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="w-full sm:w-[320px]">
              <label className="sr-only" htmlFor="blog-search">
                Search
              </label>
              <input
                id="blog-search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search guides…"
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as any);
                setPage(1);
              }}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c === "All" ? "Category: All" : `Category: ${c}`}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as any);
                setPage(1);
              }}
              className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              <option value="Newest">Sort: Newest</option>
              <option value="Oldest">Sort: Oldest</option>
              <option value="Read time">Sort: Read time</option>
            </select>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-bluegray">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured</h2>
            <p className="mt-2 max-w-3xl text-sm text-brand-text/70">
              The highest-intent guide. If you read one thing first, read this.
            </p>
          </div>
          <div className="text-sm text-brand-text/70">
            Showing <span className="font-semibold">{filtered.length}</span> matching guides
          </div>
        </div>

        <div className="mt-6">
          <Card
            image={featured.image ?? categoryImage[featured.category]}
            title={featured.title}
            description={`${featured.description} Last verified: ${featured.verified}.`}
            ctaLabel="Read →"
            ctaHref={featured.href}
            highlighted
          />
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-brand-text">Latest guides</h3>
          <p className="text-xs text-brand-text/60">
            Page <span className="font-semibold">{safePage}</span> / {totalPages}
          </p>
        </div>

        {pageItems.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700">No matches.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((p) => (
              <Card
                key={p.href}
                className="flex flex-col"
                image={p.image ?? categoryImage[p.category]}
                title={p.title}
                description={`${clamp(p.description)} Last verified: ${p.verified}.`}
                ctaLabel="Read →"
                ctaHref={p.href}
              />
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-text/60">
            Showing {(safePage - 1) * perPage + 1}–
            {Math.min(safePage * perPage, filtered.length)} of {filtered.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage <= 1}
              className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm disabled:opacity-50"
            >
              Previous
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 6) }).map((_, i) => {
                const n = i + 1;
                const active = n === safePage;
                return (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className={[
                      "h-11 w-11 rounded-xl border text-sm font-semibold shadow-sm",
                      active
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-800 hover:border-slate-300",
                    ].join(" ")}
                  >
                    {n}
                  </button>
                );
              })}
              {totalPages > 6 ? <span className="px-2 text-xs text-brand-text/60">…</span> : null}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage >= totalPages}
              className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-brand-text/10 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-semibold tracking-tight text-brand-text">
            Want to skip reading and just book smarter?
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-brand-text/70">
            Totally fair. If you already know your direction, go straight to the practical booking pages.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="/car-rental-helsinki" variant="primary">
              Car rental Helsinki →
            </CtaButton>
            <CtaButton href="/lapland-tours" variant="outline">
              Lapland tours →
            </CtaButton>
            <CtaButton href="/camper-rental-finland" variant="outline">
              Camper rental →
            </CtaButton>
          </div>

          <div className="mt-6 text-sm">
            <Link href="/get-help" className="font-semibold hover:underline">
              Get help →
            </Link>
            <span className="mx-2 text-brand-text/30">•</span>
            <Link href="/policy" className="font-semibold hover:underline">
              Policy →
            </Link>
          </div>

          <p className="mt-6 text-xs text-brand-text/60">Last verified: {verifiedDefault}</p>
        </div>
      </Section>
    </>
  );
}
