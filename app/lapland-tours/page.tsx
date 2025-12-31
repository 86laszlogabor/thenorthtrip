import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";
import Link from "next/link";

export default function LaplandToursPage() {
  const partners: [PartnerSlot, PartnerSlot, PartnerSlot] = [
    {
      name: "Arctic Lifestyle",
      kind: "operator",
      blurb:
        "Local-operator-first. Smaller groups and more â€˜real tourâ€™ signal than marketplace browsing.",
      href: "PASTE_ARCTIC_LIFESTYLE_LINK",
      ctaLabel: "See Lapland tours",
    },
    {
      name: "Viator",
      kind: "aggregator",
      blurb:
        "Structured listings and lots of operators. Useful filters. Still verify pickup, group size, and language.",
      href: "PASTE_VIATOR_AFFILIATE_LINK",
      ctaLabel: "Browse tours",
    },
    {
      name: "GetYourGuide",
      kind: "aggregator",
      blurb:
        "Fast booking flow and wide selection across hubs. Always confirm meeting point + gear included.",
      href: "PASTE_GYG_AFFILIATE_LINK",
      ctaLabel: "Browse activities",
    },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Lapland tours, chosen for what they actually deliver.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Partner-first options, plus clear guidance on tour types, timing, and destinations.
        </p>
        <div className="mt-8">
          <CtaButton href="/lapland-tours" variant="primary">
            Explore Lapland Tours
          </CtaButton>
        </div>
      </section>

      {/* Partner list FIRST */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Recommended partners for Lapland tours
        </h2>

        {/* ADD: 3-slot PartnerStrip (does not remove existing partner cards) */}
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
              {/* FINISH: conversion CTA = success (green) */}
              <CtaButton href="/lapland-tours" variant="success" className="w-full">
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
              {/* FINISH: conversion CTA = success (green) */}
              <CtaButton href="/lapland-tours" variant="success" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            <h3 className="text-lg font-semibold">Local operator (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Specialized experiences and smaller groups
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>More tailored itineraries</li>
                <li>Better local nuance</li>
                <li>Sometimes better value than marketplaces</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Licensing, safety equipment, winter readiness</p>
            </div>
            <div className="mt-auto pt-4">
              {/* FINISH: conversion CTA = success (green) */}
              <CtaButton href="/lapland-tours" variant="success" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">How to choose tours.</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Decision points, seasonality, group size, gear.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Explain how to choose tours.</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Decision points, seasonality, group size, gear.
            </p>
          </Card>
        </div>
      </Section>

      {/* Destinations (expandable) */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Destinations (expandable):
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Rovaniemi", "Levi", "SaariselkÃ¤", "YllÃ¤s", "Inari"].map((d) => (
            <Card key={d} className="flex flex-col">
              <h3 className="text-lg font-semibold">{d}</h3>
              <div className="mt-auto pt-4">
                <Link href="/lapland-tours" className="text-sm font-semibold hover:underline">
                  Explore tours â†’
                </Link>
              </div>
            </Card>
          ))}
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
