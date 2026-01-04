import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Lapland Destinations | Rovaniemi, Levi, Inari & More | TheNorthTrip",
  description:
    "Choose your Lapland base by decision points: tour density, vibe, logistics, and winter risk. Fast routing into hub pages.",
  openGraph: {
    title: "Lapland Destinations | TheNorthTrip",
    description:
      "Choose your Lapland base by decision points: tour density, vibe, logistics, and winter risk. Fast routing into hub pages.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapland Destinations | TheNorthTrip",
    description:
      "Choose your Lapland base by decision points: tour density, vibe, logistics, and winter risk. Fast routing into hub pages.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
};

type Hub = {
  href: string;
  title: string;
  image: string;
  blurb: string;
  bestFor: string[];
  watchOut: string[];
};

function HubTile({ hub }: { hub: Hub }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-100">
        <img src={hub.image} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>

      <h3 className="mt-4 text-lg font-semibold">{hub.title}</h3>
      <p className="mt-2 text-sm text-brand-text/70">{hub.blurb}</p>

      <div className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Best for</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-brand-text/70 space-y-1">
          {hub.bestFor.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Watch out</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-brand-text/70 space-y-1">
          {hub.watchOut.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        <Link href={hub.href} className="text-sm font-semibold hover:underline">
          Open hub page →
        </Link>
      </div>
    </Card>
  );
}

export default function LaplandDestinationsPage() {
  const hubs: Hub[] = [
    {
      href: "/lapland-tours/rovaniemi",
      title: "Rovaniemi",
      image: "/images/og/og-lapland-rovaniemi.jpg",
      blurb: "Most popular base. Highest tour density and easiest logistics for first-timers.",
      bestFor: ["First Lapland trip", "Huskies + snowmobiles + aurora mix", "Shorter stays"],
      watchOut: ["Crowds in peak season", "Meeting point confusion if you don’t verify", "Overbooking temptation"],
    },
    {
      href: "/lapland-tours/levi",
      title: "Levi",
      image: "/images/og/og-lapland-levi.jpg",
      blurb: "Resort base. Ski + packaged activities. Convenient if you want ‘easy mode’.",
      bestFor: ["Ski + winter activities", "Families who want structure", "Resort convenience"],
      watchOut: ["Costs add up fast", "Resort bubble: less ‘remote Lapland’", "Timing collisions (slots + transport)"],
    },
    {
      href: "/lapland-tours/saariselka",
      title: "Saariselkä",
      image: "/images/og/og-lapland-saariselka.jpg",
      blurb: "Compact base near nature. Quieter vibe with strong aurora potential.",
      bestFor: ["Aurora-first trips", "Less crowded base", "Short excursions + calm pace"],
      watchOut: ["Fewer tour options than Rovaniemi", "Transport dependencies", "Limited late-night recovery options"],
    },
    {
      href: "/lapland-tours/yllas",
      title: "Ylläs",
      image: "/images/og/og-lapland-yllas.jpg",
      blurb: "Outdoors feel. Big ski/outdoor area and wide-area winter routes.",
      bestFor: ["Outdoor-heavy itinerary", "Ski + nature balance", "Slower, more spacious trip"],
      watchOut: ["Distances are real", "Schedule fragility if you stack too much", "Weather variance matters more"],
    },
    {
      href: "/lapland-tours/inari",
      title: "Inari",
      image: "/images/og/og-lapland-inari.jpg",
      blurb: "Remote + atmospheric. Culture + lake landscape + aurora potential.",
      bestFor: ["Remote vibe", "Culture + nature mix", "Aurora and quiet nights"],
      watchOut: ["Logistics more sensitive", "Fewer fallback options", "Plan buffers, not hope"],
    },
  ];

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Lapland destinations: pick the base that matches your risk tolerance."
        subtitle="Choose by tour density, logistics, and winter recovery options. Not by vibes alone."
        imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
        primaryCta={{ href: "/lapland-tours", label: "Back to Lapland tours hub" }}
        secondaryCta={{ href: "/get-help", label: "Get help if unclear" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Destinations</p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Quick routing into the 5 bases we actually recommend
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Your base decides how many tours exist, how fragile your schedule is, and whether you have recovery options
          after delays. Pick the base first, then book tours.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => (
            <HubTile key={hub.href} hub={hub} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">If you want “safe default”</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Rovaniemi is the default because it has the highest density of options and the cleanest logistics.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/lapland-tours/rovaniemi" variant="primary" className="w-full">
                Open Rovaniemi hub
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">If you want “quiet + remote signal”</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Inari and Saariselkä reward planning. They punish optimism. Buffers matter more.
            </p>
            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/lapland-tours/inari" variant="outline" className="w-full">
                Inari hub
              </CtaButton>
              <CtaButton href="/lapland-tours/saariselka" variant="outline" className="w-full">
                Saariselkä hub
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
