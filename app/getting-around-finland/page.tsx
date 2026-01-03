import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export const metadata = {
  title: "Getting Around Finland | TheNorthTrip",
  description:
    "A decision-first transport hub: car, train, bus, camper, ferry. Compare tradeoffs and route to the right booking page.",
  openGraph: {
    title: "Getting Around Finland | TheNorthTrip",
    description:
      "A decision-first transport hub: car, train, bus, camper, ferry. Compare tradeoffs and route to the right booking page.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Around Finland | TheNorthTrip",
    description:
      "A decision-first transport hub: car, train, bus, camper, ferry. Compare tradeoffs and route to the right booking page.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
};

export default function GettingAroundFinlandPage() {
  const modes = [
    {
      image: "/images/og/og-helsinki-city-mobility.jpg",
      title: "Helsinki: transit vs car",
      description:
        "If your plan is mostly Helsinki city, a rental can be pure friction. Compare the real tradeoffs first.",
      href: "/helsinki/city-mobility",
      cta: "Open city mobility →",
    },
    {
      image: "/images/og/og-helsinki-airport-transfers.jpg",
      title: "Arrivals and transfers",
      description:
        "Late arrivals + last services create silent failures. Confirm timing and backups before committing.",
      href: "/helsinki/airport-transfers",
      cta: "Open airport transfers →",
    },
    {
      image: "/images/og/og-default.jpg",
      title: "Car rental (Helsinki hub)",
      description:
        "Best when your plan depends on flexibility outside the city. Filter with terms, deposits, and winter reality.",
      href: "/car-rental-helsinki",
      cta: "Open car rental hub →",
      highlighted: true,
    },
    {
      image: "/images/og/og-camper-coastal.jpg",
      title: "Camper rental (Finland hub)",
      description:
        "Best for route freedom in the right season. Choose stations and routes that match your comfort level.",
      href: "/camper-rental-finland",
      cta: "Open camper hub →",
    },
    {
      image: "/images/og/og-lapland-rovaniemi.jpg",
      title: "Lapland tours (hub)",
      description:
        "Best for experience density without fragile logistics. Pick operator, timing, and destination intentionally.",
      href: "/lapland-tours",
      cta: "Open Lapland tours →",
    },
    {
      image: "/images/og/og-helsinki-ferry-cruise.jpg",
      title: "Ferries and sea routes",
      description:
        "If your plan includes a ferry, verify schedules, check-in timing, and vehicle rules early.",
      href: "/helsinki/ferry-cruise",
      cta: "Open ferry & cruise →",
    },
  ] as const;

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Getting around Finland, without fragile assumptions."
        subtitle="Compare transport modes like a grown-up: tradeoffs, failure points, and the safest next step."
        imageSrc="/images/hero/hero-helsinki-tram.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Open rental terms" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Choose your mode by failure risk, not vibes
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          Finland travel usually fails quietly: desk rules, timing, winter buffers, and missed last services.
          Use this hub to route into the right decision page, then verify the details that actually break trips.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modes.map((m) => (
            <Card
              key={m.title}
              image={m.image}
              title={m.title}
              description={m.description}
              ctaLabel={m.cta}
              ctaHref={m.href}
              highlighted={(m as any).highlighted}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Use the checklist before you pay</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              If one unchecked detail would cascade into a missed pickup, a cancelled tour, or a broken day,
              pause and verify.
            </p>
            <p className="mt-4 text-sm">
              <Link href="/offer-checklist" className="font-semibold hover:underline">
                Open offer checklist →
              </Link>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Rental terms that trip people up</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Deposits, card acceptance, insurance wording, desk hours. The boring stuff that costs money.
            </p>
            <p className="mt-4 text-sm">
              <Link href="/rental-terms-prices" className="font-semibold hover:underline">
                Open rental terms →
              </Link>
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
