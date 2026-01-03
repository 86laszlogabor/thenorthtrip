import PageHero from "@/components/PageHero";
import ImageCard from "@/components/ImageCard";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";
import Link from "next/link";

export const metadata = {
  title: "Lapland Tours | TheNorthTrip",
  description:
    "Partner-first options, plus clear guidance on tour types, timing, and destinations across Lapland hubs.",
  openGraph: {
    title: "Lapland Tours | TheNorthTrip",
    description:
      "Partner-first options, plus clear guidance on tour types, timing, and destinations across Lapland hubs.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapland Tours | TheNorthTrip",
    description:
      "Partner-first options, plus clear guidance on tour types, timing, and destinations across Lapland hubs.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
};

export default function LaplandToursPage() {
  const partners: [PartnerSlot, PartnerSlot, PartnerSlot] = [
    {
      name: "Arctic Lifestyle",
      logoSrc: "/images/hero/hero-partner-arctic-lifestyle.jpg",
      kind: "operator",
      blurb:
        "Local-operator-first. Smaller groups and more ‘real tour’ signal than marketplace browsing.",
      href: "PASTE_ARCTIC_LIFESTYLE_LINK",
      ctaLabel: "See Lapland tours",
    },
    {
      name: "Viator",
      logoSrc: "/images/hero/hero-partner-viator.jpg",
      kind: "aggregator",
      blurb:
        "Structured listings and lots of operators. Useful filters. Still verify pickup, group size, and language.",
      href: "PASTE_VIATOR_AFFILIATE_LINK",
      ctaLabel: "Browse tours",
    },
    {
      name: "GetYourGuide",
      logoSrc: "/images/hero/hero-partner-getyourguide.jpg",
      kind: "aggregator",
      blurb:
        "Fast booking flow and wide selection across hubs. Always confirm meeting point + gear included.",
      href: "PASTE_GYG_AFFILIATE_LINK",
      ctaLabel: "Browse activities",
    },
  ];

  const destinations = [
    {
      slug: "rovaniemi",
      name: "Rovaniemi",
      og: "/images/og/og-lapland-rovaniemi.jpg",
      blurb: "Most popular hub. Northern Lights, huskies, snowmobile day trips.",
    },
    {
      slug: "levi",
      name: "Levi",
      og: "/images/og/og-lapland-levi.jpg",
      blurb: "Resort hub. Ski + winter activities, easy packaged tours.",
    },
    {
      slug: "saariselka",
      name: "Saariselkä",
      og: "/images/og/og-lapland-saariselka.jpg",
      blurb: "Compact base near nature. Aurora focus and quieter vibe.",
    },
    {
      slug: "yllas",
      name: "Ylläs",
      og: "/images/og/og-lapland-yllas.jpg",
      blurb: "Big outdoors feel. Ski + wide-area winter routes.",
    },
    {
      slug: "inari",
      name: "Inari",
      og: "/images/og/og-lapland-inari.jpg",
      blurb: "Remote, atmospheric. Lake + culture + strong aurora potential.",
    },
  ] as const;

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Lapland tours, chosen for what they actually deliver."
        subtitle="Partner-first options, plus clear guidance on tour types, timing, and destinations."
        imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "Explore destinations" }}
        secondaryCta={{ href: "/get-help", label: "Get help if unclear" }}
      />

      {/* VISUAL CHECKS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
          Visual checks (so you don’t guess)
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Quick, practical reminders. The goal is fewer surprises and cleaner decisions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ImageCard
            title="Winter reality"
            body="Timing, daylight, road conditions. Don’t assume ‘it will be fine’."
            imageSrc="/images/hero/hero-lapland-levi-ski.jpg"
          />
          <ImageCard
            title="Meeting point & pickup"
            body="Confirm pickup location, time window, and what happens if you’re late."
            imageSrc="/images/hero/hero-lapland-saariselka.jpg"
          />
          <ImageCard
            title="Gear included (or not)"
            body="Clothing, boots, thermals. Missing gear turns ‘fun’ into suffering."
            imageSrc="/images/hero/hero-lapland-yllas.jpg"
          />
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <img
            src="/images/trust-finland-lake-boat.jpg"
            alt=""
            className="h-56 w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* PARTNERS */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Recommended partners for Lapland tours
        </h2>

        <PartnerStrip
          title="Compare partners (3 options)"
          subtitle="Operator-first here. Three choices only, then verify meeting point, gear included, and cancellation terms."
          partners={partners}
          intentHref="/get-help"
          intentLabel="Get Help if unclear"
        />

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">GetYourGuide (Marketplace)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Fast booking + wide tour selection
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Huge inventory across Lapland hubs</li>
                <li>Reviews help filter quality (still read the details)</li>
                <li>Easy booking management on most listings</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Meeting point, gear included, cancellation terms</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="PASTE_GYG_AFFILIATE_LINK" variant="success" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Viator (Marketplace)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Established operators + structured listings
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Many long-running operators listed</li>
                <li>Strong filtering by duration and theme</li>
                <li>Helpful schedule visibility</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Group size, pickup options, language</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="PASTE_VIATOR_AFFILIATE_LINK" variant="success" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            <h3 className="text-lg font-semibold">Arctic Lifestyle (Local operator)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Smaller groups + operator-first experiences
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Local nuance and practical winter readiness</li>
                <li>Often better experience density than marketplaces</li>
                <li>Clearer “what you get” signal</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Pickup, clothing/gear, cancellation terms</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="PASTE_ARCTIC_LIFESTYLE_LINK" variant="success" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">How to choose tours.</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Decision points: seasonality, group size, gear included, meeting point.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">What usually goes wrong.</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Misread meeting point, missing gear, wrong timing, and silent cancellation rules.
            </p>
          </Card>
        </div>
      </Section>

      {/* DESTINATIONS */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Destinations (expandable)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Card
              key={d.slug}
              image={d.og}
              title={d.name}
              description={d.blurb}
              ctaLabel="Explore tours →"
              ctaHref={`/lapland-tours/${d.slug}`}
            />
          ))}

          {/* Keep the existing list idea as an extra routing tile */}
          <Card
            image="/images/og/og-lapland-rovaniemi.jpg"
            title="All destinations"
            description="Quick overview page to route into Rovaniemi, Levi, Saariselkä, Ylläs, and Inari."
            ctaLabel="Open destinations →"
            ctaHref="/lapland-tours/destinations"
            highlighted
          />
        </div>

        <div className="mt-8 text-sm text-brand-text/75">
          <p>
            <Link href="/getting-around-finland" className="font-semibold hover:underline">
              Getting Around Finland
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/policy" className="font-semibold hover:underline">
              Policy
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/get-help" className="font-semibold hover:underline">
              Get Help
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
