import PageHero from "@/components/PageHero";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";

export const metadata = {
  title: "Car Rental Helsinki | TheNorthTrip",
  description:
    "Partners first, then the rules that actually matter at pickup: card/deposit, insurance language, winter requirements, and timing.",
  openGraph: {
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Partners first, then the rules that actually matter at pickup: card/deposit, insurance language, winter requirements, and timing.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Partners first, then the rules that actually matter at pickup: card/deposit, insurance language, winter requirements, and timing.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
};

type Hub = {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

function HubTile({ hub }: { hub: Hub }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      {/* image block */}
      <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-100">
        {/* use <img> for local public assets without next/image config friction */}
        <img
          src={hub.image}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{hub.title}</h3>
      <p className="mt-2 text-sm text-brand-text/70">{hub.description}</p>

      <div className="mt-auto pt-4">
        <Link href={hub.ctaHref} className="text-sm font-semibold hover:underline">
          {hub.ctaLabel}
        </Link>
      </div>
    </Card>
  );
}

export default function CarRentalHelsinkiPage() {
  const partners: [PartnerSlot, PartnerSlot, PartnerSlot] = [
    {
      name: "DiscoverCars",
      kind: "aggregator",
      blurb:
        "Strong comparison flow. Still verify deposit + card rules per supplier before booking.",
      href: "PASTE_DISCOVERCARS_AFFILIATE_LINK",
      ctaLabel: "Compare options",
    },
    {
      name: "Rentalcars.com",
      kind: "aggregator",
      blurb:
        "Big inventory and reviews. Double-check desk hours, deposit, and what 'included' really means.",
      href: "PASTE_RENTALCARS_AFFILIATE_LINK",
      ctaLabel: "Browse offers",
    },
    { empty: true, label: "Direct brand (Sixt/Europcar etc.)" },
  ];

  const helsinkiHubs: Hub[] = [
    {
      image: "/images/og/og-helsinki-airport-transfers.jpg",
      title: "Helsinki Airport pickup reality",
      description:
        "Most rentals start at the airport. Verify desk hours, terminal location, and late-arrival policy before you pay.",
      ctaLabel: "Airport transfers & pickup →",
      ctaHref: "/helsinki/airport-transfers",
    },
    {
      image: "/images/og/og-helsinki-city-mobility.jpg",
      title: "City driving vs public transport",
      description:
        "If your plan is mostly Helsinki city: compare parking, traffic, and time costs versus transit before committing to a rental.",
      ctaLabel: "City mobility checklist →",
      ctaHref: "/helsinki/city-mobility",
    },
    {
      image: "/images/og/og-helsinki-sauna.jpg",
      title: "Sauna visits by car",
      description:
        "Sauna hopping sounds simple until parking and timing collide. Plan route + buffer time instead of improvising.",
      ctaLabel: "Sauna routing →",
      ctaHref: "/helsinki/sauna",
    },
    {
      image: "/images/og/og-helsinki-sightseeing.jpg",
      title: "Day-trip sightseeing planning",
      description:
        "Car helps outside the center. For day trips, confirm winter roads, daylight, and realistic driving time.",
      ctaLabel: "Sightseeing hubs →",
      ctaHref: "/helsinki/sightseeing",
    },
    {
      image: "/images/og/og-helsinki-ferry-cruise.jpg",
      title: "Ferry timing & vehicle rules",
      description:
        "If you combine rental + ferry: check check-in timing, vehicle category rules, and cancellation flexibility.",
      ctaLabel: "Ferry & cruise planning →",
      ctaHref: "/helsinki/ferry-cruise",
    },
    {
      image: "/images/og/og-helsinki-restaurants.jpg",
      title: "Restaurants without schedule stress",
      description:
        "Parking + peak hours create hidden friction. Build a plan that doesn’t collapse into ‘we’ll figure it out’.",
      ctaLabel: "Restaurant planning →",
      ctaHref: "/helsinki/restaurants",
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Car rental in Helsinki, without the expensive surprises."
        subtitle="Partners first. Then the checks that decide whether pickup is smooth or a disaster."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: "/car-rental-helsinki", label: "Compare car rental options" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Open terms checklist" }}
      />

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Car rental / Helsinki
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
          Car rental in Helsinki, without the expensive surprises.
        </h2>

        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          Partners first. Then the checks that decide whether pickup is smooth or a disaster:
          card &amp; deposit rules, winter requirements, insurance wording, desk hours.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/car-rental-helsinki" variant="primary">
            Compare car rental options
          </CtaButton>
          <CtaButton href="/rental-terms-prices" variant="outline">
            Open terms checklist
          </CtaButton>
        </div>
      </section>

      {/* PARTNERS FIRST */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Recommended booking paths (3 options only)
        </h2>

        <PartnerStrip
          title="Compare partners (3 options)"
          subtitle="Use a marketplace for speed, or go direct if you already trust a brand. Always confirm deposit + card acceptance in writing."
          partners={partners}
          intentHref="/rental-terms-prices"
          intentLabel="Open terms checklist"
        />

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Card &amp; deposit reality</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              The #1 failure mode: assuming debit/credit acceptance is “standard”.
            </p>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Confirm: credit vs debit, name match, hold amount, release timing.</li>
              <li>Ask: “What happens if card type is rejected at desk?”</li>
              <li>Verify: deposit is per supplier, not per website claim.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link href="/rental-terms-prices" className="text-sm font-semibold hover:underline">
                See terms checklist →
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Winter requirements</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              In winter, “car model” matters less than tyres, visibility, and practical equipment.
            </p>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Confirm tyres (type/season) and what’s included vs optional.</li>
              <li>Check: pickup time vs daylight and road conditions.</li>
              <li>Plan buffers for weather delays.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link href="/getting-around-finland" className="text-sm font-semibold hover:underline">
                Compare transport modes →
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Insurance wording traps</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              “Insurance included” can still mean a huge deductible and exclusions.
            </p>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Focus on: deductible, exclusions, claim handling.</li>
              <li>Don’t assume: glass/tyres/undercarriage are covered.</li>
              <li>Keep proof: what you bought, what’s included, screenshots.</li>
            </ul>
            <div className="mt-auto pt-4">
              <Link href="/rental-terms-prices" className="text-sm font-semibold hover:underline">
                Read insurance checklist →
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Pickup timing &amp; desk hours</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Late arrivals + optimistic buffers create the classic “no desk, no car” story.
            </p>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Confirm desk hours for your exact location (airport vs city).</li>
              <li>Ask about late pickup policy in writing if arriving late.</li>
              <li>Keep a backup plan (alternative provider or transport).</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">If anything feels unclear</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Use the escalation ladder. Don’t argue at the desk with zero documentation.
            </p>
            <div className="mt-4">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>

      {/* HELSINKI HUBS */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Helsinki booking hubs (quick routing)
        </h2>
        <p className="mt-3 text-sm text-brand-text/70 max-w-3xl">
          If your plan depends on timing (airport pickup, ferry schedules, sauna slots), route from here instead of guessing.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helsinkiHubs.map((hub) => (
            <HubTile key={hub.title} hub={hub} />
          ))}
        </div>
      </Section>

      {/* ROUTING */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Related decision hubs
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/rental-terms-prices" className="font-semibold hover:underline">
                Rental Terms &amp; Prices →
              </Link>
            </p>
          </Card>
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/getting-around-finland" className="font-semibold hover:underline">
                Getting Around Finland →
              </Link>
            </p>
          </Card>
          <Card>
            <p className="text-sm text-brand-text/70">
              <Link href="/lapland-tours" className="font-semibold hover:underline">
                Lapland Tours →
              </Link>
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}
