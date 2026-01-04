import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Blog | TheNorthTrip",
  description:
    "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
  openGraph: {
    title: "Blog | TheNorthTrip",
    description:
      "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
    images: ["/images/og/og-blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | TheNorthTrip",
    description:
      "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
    images: ["/images/og/og-blog.jpg"],
  },
};

type Post = {
  title: string;
  description: string;
  tag: string;
  href: string;
  verified: string;
  image: string;
};

const verifiedDefault = "2025-12-31";
const imgDefault = "/images/og/og-default.jpg";

const posts: Post[] = [
  // Core blog posts (in /app/blog/*)
  {
    title: "Porvoo Day Trip from Helsinki: Wooden Houses & Lapland Gateway",
    description:
      "A clean Helsinki day trip that actually works: old town, riverfront pacing, and why it’s a mental Lapland warm-up.",
    tag: "Day trips",
    href: "/blog/porvoo-day-trip-from-helsinki-wooden-houses-lapland-gateway",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Ranua Arctic SnowPark & Zoo: Polar Bears + Thenortrip Guide (2026)",
    description:
      "Why Ranua works better in winter: Arctic animals in their element, realistic timing, and how to avoid a long cold mistake.",
    tag: "Wildlife",
    href: "/blog/ranua-arctic-snowpark-zoo-polar-bears-thenortrip-guide-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Siida Sámi Museum Inari: Culture Before Aurora Tours (2026)",
    description:
      "The museum that fixes the order of your Lapland trip: daylight context first, aurora obsession second.",
    tag: "Culture",
    href: "/blog/siida-sami-museum-inari-culture-before-aurora-tours-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Lapland Tours 2026",
    description:
      "High-intent Lapland planning: pricing anchors, booking order, and what actually matters when winter is in charge.",
    tag: "Lapland",
    href: "/blog/lapland-tours-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Lapland Tours Finland 2026: Pricing, Itineraries & Booking Guide",
    description:
      "Decision-first Lapland tours: realistic cost bands, what to book first, and why sequencing saves money and pain.",
    tag: "Lapland",
    href: "/blog/lapland-tours-finland-2026-pricing-itineraries-booking-guide",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Levi Lapland 2026: Skiing, Snowmobiling & Thenortrip Safaris",
    description:
      "Levi as a base: what it’s great for, what it’s not, and how to plan winter days without stacking fatigue.",
    tag: "Destinations",
    href: "/blog/levi-lapland-2026-skiing-snowmobiling-thenortrip-safaris",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Rovaniemi Unveiled: Lapland Winter Guide (2026)",
    description:
      "Rovaniemi as a hub: tours, Santa friction, aurora strategy, and what to skip when daylight is short.",
    tag: "Destinations",
    href: "/blog/rovaniemi-unveiled-lapland-winter-guide-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Rovaniemi Winter Guide: Santa Village & Aurora Tours",
    description:
      "What’s actually free vs paid at Santa Village, plus aurora logic that doesn’t depend on luck cosplay.",
    tag: "Destinations",
    href: "/blog/rovaniemi-winter-guide-santa-village-aurora-tours",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki Winter Guide 2026",
    description:
      "Winter Helsinki done properly: friction points, pacing, and what to verify before you burn time.",
    tag: "Helsinki",
    href: "/blog/helsinki-winter-guide-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki Travel Guide: Winter → Lapland (2026)",
    description:
      "Helsinki as a launchpad: what to do, what to skip, and how to transition north without chaos.",
    tag: "Helsinki",
    href: "/blog/helsinki-travel-guide-winter-lapland-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki Airport Car Rental: Lapland Road Trip (2026)",
    description:
      "Car rental from HEL airport: desk traps, winter clauses, and how to avoid deposit and timing failures.",
    tag: "Rentals",
    href: "/blog/helsinki-airport-car-rental-lapland-road-trip-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki Airport → Lapland Transfers: Shuttles & Tours (2026)",
    description:
      "Transfers without fantasy: what exists, what breaks in winter, and how to pick the least fragile option.",
    tag: "Transport",
    href: "/blog/helsinki-airport-to-lapland-transfers-shuttles-tours-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki → Lapland Day Trips: Trains & Thenortrip (2026)",
    description:
      "Day trips north: where it’s realistic, where it’s self-harm, and what sequencing makes it survivable.",
    tag: "Transport",
    href: "/blog/helsinki-to-lapland-day-trips-trains-thenortrip-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Helsinki → Lapland: Train vs Flight Day Trip Guide (2026)",
    description:
      "Train vs flight logic with winter constraints: timing, fatigue, and which choice ruins fewer days.",
    tag: "Transport",
    href: "/blog/helsinki-to-lapland-train-flight-day-trip-guide-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Getting Around Finland 2026: Flights, Trains, Rentals & Lapland",
    description:
      "The real transport skeleton: what’s reliable in winter, what needs buffers, and where people lie to themselves.",
    tag: "Transport",
    href: "/blog/getting-around-finland-2026-flights-trains-rentals-lapland",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Getting Around Finland 2026: Trains, Buses, Flights to Lapland",
    description:
      "Decision table transport: when VR wins, when Finnair is worth it, and when bus is just endurance.",
    tag: "Transport",
    href: "/blog/getting-around-finland-2026-trains-buses-flights-lapland",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Getting Around Finland: Trains, Flights, Buses (Lapland 2026)",
    description:
      "A versioned, winter-first transport guide: where the system is honest and where your plan needs slack.",
    tag: "Transport",
    href: "/blog/getting-around-finland-trains-flights-buses-lapland-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Lapland Travel Checklist 2026: Offer Checklist Guide",
    description:
      "What to verify before paying: deposits, winter clauses, timing, and desk-level surprises that ruin trips quietly.",
    tag: "Checklist",
    href: "/blog/lapland-finland-travel-checklist-2026-offer-checklist-guide",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Finland Cities: Hidden Gems",
    description:
      "City stops that actually add value, not filler. Decision-first pacing between hubs.",
    tag: "Cities",
    href: "/blog/finland-cities-hidden-gems",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Tampere: Sauna Capital Winter Stop Before Lapland",
    description:
      "Why Tampere is a smart winter break: sauna logic, pacing, and where it fits before going north.",
    tag: "Cities",
    href: "/blog/tampere-sauna-capital-winter-stop-before-lapland",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Winter Camper Rental Finland 2026: Lapland Self-Drive Guide",
    description:
      "Winter camper reality: what breaks first, what to verify, and when self-drive is sane vs stubborn.",
    tag: "Camper",
    href: "/blog/winter-camper-rental-finland-2026-lapland-self-drive-guide",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Winter Camper Rental Finland 2026: Lapland Self-Drive Ultimate Guide",
    description:
      "Deep dive: winter self-drive constraints, routing, risk buffers, and how to avoid quiet failures in cold.",
    tag: "Camper",
    href: "/blog/winter-camper-rental-finland-2026-lapland-self-drive-ultimate-guide",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Camper Rental Finland Winter: Self-Drive Guide (2026)",
    description:
      "A winter-first camper guide focused on real constraints: heating, water, roads, and time loss multipliers.",
    tag: "Camper",
    href: "/blog/camper-rental-finland-winter-self-drive-guide-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
  {
    title: "Finland Winter Road Trip Camper: Lapland Itinerary (2026)",
    description:
      "A coherent winter road trip itinerary that respects daylight, fatigue, and the fact winter hates your optimism.",
    tag: "Camper",
    href: "/blog/finland-winter-road-trip-camper-lapland-itinerary-2026",
    verified: verifiedDefault,
    image: imgDefault,
  },
];

const coreHubs = [
  { label: "Car rental (Helsinki)", href: "/car-rental-helsinki" },
  { label: "Camper rental (Finland)", href: "/camper-rental-finland" },
  { label: "Lapland tours", href: "/lapland-tours" },
  { label: "Offer checklist", href: "/offer-checklist" },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Blog: operational guides, not cute lists."
        subtitle="What breaks, how to verify it, and which tradeoffs reduce fragility."
        imageSrc="/images/hero/hero-blog-planning.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Open car rental hub" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Blog</h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          These are not “top 10 cute things” posts. They’re operational guides: what breaks, how to verify it,
          and which tradeoffs reduce fragility.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Card
              key={p.href}
              className="flex flex-col"
              image={p.image}
              title={p.title}
              description={`${p.description}  Last verified: ${p.verified}.`}
              ctaLabel="Read →"
              ctaHref={p.href}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-brand-text/10 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Core hubs</h3>
          <p className="mt-2 text-sm text-brand-text/70">
            If you’re booking rentals or tours, start from the conversion hubs, then use the blog to verify edge-cases.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {coreHubs.map((h) => (
              <Link key={h.href} className="underline hover:text-brand-text" href={h.href}>
                {h.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
