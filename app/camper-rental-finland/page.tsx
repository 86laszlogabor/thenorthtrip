import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Camper Rental Finland | TheNorthTrip",
  description:
    "Start with partners, then choose stations and routes that match your season and comfort level. Winter realities included.",
  openGraph: {
    title: "Camper Rental Finland | TheNorthTrip",
    description:
      "Start with partners, then choose stations and routes that match your season and comfort level. Winter realities included.",
    images: ["/images/og/og-camper-coastal.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Camper Rental Finland | TheNorthTrip",
    description:
      "Start with partners, then choose stations and routes that match your season and comfort level. Winter realities included.",
    images: ["/images/og/og-camper-coastal.jpg"],
  },
};

export default function CamperRentalFinlandPage() {
  const partnerCards = [
    {
      image: "/images/og/og-camper-southern-lakes.jpg",
      title: "Marketplace partner (placeholder)",
      description:
        "Best for: Quick comparison across fleets. Highlights: broad inventory, clear pickup locations, easy date changes (depends on policy). Double-check: mileage caps, insurance deductibles, winterization.",
      ctaLabel: "Check availability →",
      ctaHref: "/camper-rental-finland",
    },
    {
      image: "/images/og/og-camper-station-helsinki.jpg",
      title: "Local fleet partner (placeholder)",
      description:
        "Best for: Handovers, local advice, and route support. Highlights: better local guidance, flexible pickup sometimes possible, more direct accountability. Double-check: heating system, road restrictions, deposit terms.",
      ctaLabel: "See options →",
      ctaHref: "/camper-rental-finland",
    },
    {
      image: "/images/og/og-camper-helsinki-lapland.jpg",
      title: "Peer-to-peer style (placeholder)",
      description:
        "Best for: Unique rigs, potentially better value. Highlights: variety of camper types, sometimes lower base cost, owner guidance can be helpful. Double-check: support if something breaks, cancellation rules.",
      ctaLabel: "See options →",
      ctaHref: "/camper-rental-finland",
    },
  ] as const;

  const stations = [
    {
      title: "Helsinki",
      href: "/camper-rental-finland/stations/helsinki",
      image: "/images/og/og-camper-station-helsinki.jpg",
      text: "Best for: southern start, ferry connections, and easy city logistics.",
    },
    {
      title: "Tampere / Turku",
      href: "/camper-rental-finland/stations/tampere-turku",
      image: "/images/og/og-camper-station-tampere-turku.jpg",
      text: "Best for: west/south routing with shorter repositioning and calmer pacing.",
    },
    {
      title: "Rovaniemi",
      href: "/camper-rental-finland/stations/rovaniemi",
      image: "/images/og/og-camper-station-rovaniemi.jpg",
      text: "Best for: Lapland-first trips. Winter reality required.",
    },
  ] as const;

  const routes = [
    {
      title: "Southern lakes",
      href: "/camper-rental-finland/routes/southern-lakes",
      image: "/images/og/og-camper-southern-lakes.jpg",
      text: "Best for: mild season, flexible stops.",
      cta: "Explore route →",
    },
    {
      title: "Helsinki–Lapland",
      href: "/camper-rental-finland/routes/helsinki-lapland",
      image: "/images/og/og-camper-helsinki-lapland.jpg",
      text: "Best for: committed road-trip travelers who understand winter constraints.",
      cta: "Explore route →",
    },
    {
      title: "Coastal",
      href: "/camper-rental-finland/routes/coastal",
      image: "/images/og/og-camper-coastal.jpg",
      text: "Best for: scenery + easier logistics in warmer months.",
      cta: "Explore route →",
    },
  ] as const;

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Camper rental in Finland, with the winter realities included."
        subtitle="Start with partners, then choose stations and routes that match your season and comfort level."
        imageSrc="/images/hero/hero-camper-coastal-road.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Compare camper options" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Open terms checklist" }}
      />

      {/* KEEP CONTENT, but avoid duplicate H1 (PageHero already provides H1) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper rental in Finland, with the winter realities included.
        </h2>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Start with partners, then choose stations and routes that match your season and comfort level.
        </p>
        <div className="mt-8">
          <CtaButton href="/camper-rental-finland" variant="primary">
            Compare Camper Options
          </CtaButton>
        </div>
      </section>

      {/* Partner list FIRST */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Recommended camper partners
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card
            className="flex flex-col"
            image={partnerCards[0].image}
            title={partnerCards[0].title}
            description={partnerCards[0].description}
            ctaLabel={partnerCards[0].ctaLabel}
            ctaHref={partnerCards[0].ctaHref}
          />
          <Card
            className="flex flex-col"
            image={partnerCards[1].image}
            title={partnerCards[1].title}
            description={partnerCards[1].description}
            ctaLabel={partnerCards[1].ctaLabel}
            ctaHref={partnerCards[1].ctaHref}
          />
          <Card
            className="flex flex-col md:col-span-2"
            image={partnerCards[2].image}
            title={partnerCards[2].title}
            description={partnerCards[2].description}
            ctaLabel={partnerCards[2].ctaLabel}
            ctaHref={partnerCards[2].ctaHref}
          />
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">
              Explain winterization, mileage, deposits, legality.
            </h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Explain winterization, mileage, deposits, legality.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">For terms that commonly trip people up</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <Link href="/rental-terms-prices" className="font-semibold hover:underline">
                Rental Terms &amp; Prices
              </Link>
            </p>
          </Card>
        </div>
      </Section>

      {/* Stations + routes */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Stations: Helsinki, Tampere/Turku, Rovaniemi
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          {stations.map((s) => (
            <Card
              key={s.title}
              image={s.image}
              title={s.title}
              description={s.text}
              ctaLabel="See station options →"
              ctaHref={s.href}
            />
          ))}
        </div>

        <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">
          Routes: Southern lakes, Helsinki–Lapland, Coastal
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          {routes.map((r) => (
            <Card
              key={r.title}
              image={r.image}
              title={r.title}
              description={r.text}
              ctaLabel={r.cta}
              ctaHref={r.href}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
