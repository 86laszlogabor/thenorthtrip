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
    "Lapland tours without brochure lies: daylight reality, meeting points, gear traps, and where to book tours that actually work in winter.",
  openGraph: {
    title: "Lapland Tours | TheNorthTrip",
    description:
      "Lapland tours without brochure lies: daylight reality, meeting points, gear traps, and where to book tours that actually work in winter.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapland Tours | TheNorthTrip",
    description:
      "Lapland tours without brochure lies: daylight reality, meeting points, gear traps, and where to book tours that actually work in winter.",
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
        "Local operator vibe. Smaller groups, clearer expectations, less marketplace noise. Still check pickup + gear + cancellation.",
      href: "PASTE_ARCTIC_LIFESTYLE_LINK",
      ctaLabel: "See Lapland tours",
    },
    {
      name: "Viator",
      logoSrc: "/images/hero/hero-partner-viator.jpg",
      kind: "aggregator",
      blurb:
        "Lots of established operators and structured listings. Filters help. Details still win: pickup, group size, language.",
      href: "PASTE_VIATOR_AFFILIATE_LINK",
      ctaLabel: "Browse tours",
    },
    {
      name: "GetYourGuide",
      logoSrc: "/images/hero/hero-partner-getyourguide.jpg",
      kind: "aggregator",
      blurb:
        "Fast booking and wide selection across Lapland. Always check meeting point and what gear is included (or not).",
      href: "PASTE_GYG_AFFILIATE_LINK",
      ctaLabel: "Browse activities",
    },
  ];

  const destinations = [
    {
      slug: "rovaniemi",
      name: "Rovaniemi",
      og: "/images/og/og-lapland-rovaniemi.jpg",
      blurb:
        "Most tours start here. Aurora hunts, huskies, snowmobiles. Best logistics, also the most people.",
    },
    {
      slug: "levi",
      name: "Levi",
      og: "/images/og/og-lapland-levi.jpg",
      blurb:
        "Ski resort energy + winter activities. Easy packaged tours, good for first-timers who want structure.",
    },
    {
      slug: "saariselka",
      name: "Saariselkä",
      og: "/images/og/og-lapland-saariselka.jpg",
      blurb:
        "Quieter, more aurora-focused. Less city noise, more dark sky. Great if you hate crowds.",
    },
    {
      slug: "yllas",
      name: "Ylläs",
      og: "/images/og/og-lapland-yllas.jpg",
      blurb:
        "Big outdoor feel. Longer routes, wide-area winter terrain, less “tour bus” feeling.",
    },
    {
      slug: "inari",
      name: "Inari",
      og: "/images/og/og-lapland-inari.jpg",
      blurb:
        "Remote and atmospheric. Lake + culture + strong aurora potential. Slower pace, fewer backup options.",
    },
  ] as const;

  // English, SEO-focused, snippet-friendly FAQ schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the Northern Lights (Aurora Borealis) guaranteed on tours?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. No operator can guarantee a sighting. “Aurora Chase” tours usually offer better odds because vans hunt for clear skies over a wide radius instead of waiting at a fixed camp. Use an aurora forecast app, but cloud cover is the final decider.",
        },
      },
      {
        "@type": "Question",
        name: "How cold is Lapland in January?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "-20°C to -35°C is common. Many tours provide a thermal overall, but you still need your own merino wool or synthetic base layers. Avoid cotton: it traps moisture and makes you freeze the moment you stop moving.",
        },
      },
      {
        "@type": "Question",
        name: "Rovaniemi or Levi: which one should I choose?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Rovaniemi is best for logistics, Santa Claus Village, and the widest selection of short tours. Levi has a modern ski-resort vibe with more resort-style restaurants and activities. For fewer crowds, Saariselkä or Inari feels quieter and more Arctic.",
        },
      },
      {
        "@type": "Question",
        name: "When should I book a husky safari in Lapland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For peak December–January dates, book 2–3 months in advance. Morning and midday slots sell out first because they’re the only times with natural light (or “blue hour” twilight) during the Polar Night season.",
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Lapland tours, chosen for what they actually deliver."
        subtitle="Less brochure. More winter reality: daylight, meeting points, gear traps, and clean booking paths."
        imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "Explore destinations" }}
        secondaryCta={{ href: "/get-help", label: "Get help if unclear" }}
      />

      {/* QUICK REALITY CHECKS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
          Winter reality (so you don’t book by photo)
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          Lapland trips fail in two ways: people overpay, or they freeze because they assumed “warm clothes” is a plan.
          This page is the boring part that keeps the fun part fun.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ImageCard
            title="Daylight: Kaamos is real"
            body="In December you can get 0–2 hours of usable light. Afternoon tours are basically headlamp adventures. Don’t choose by Instagram colours."
            imageSrc="/images/hero/hero-lapland-levi-ski.jpg"
          />
          <ImageCard
            title="Meeting point & transfer trap"
            body="Rovaniemi center ↔ Santa Claus Village is ~8 km. People think it’s walkable. It isn’t. Confirm pickup or plan a bus/taxi."
            imageSrc="/images/hero/hero-lapland-saariselka.jpg"
          />
          <ImageCard
            title="Gear included (or not)"
            body="Thermal overall helps, but base layers decide everything. Avoid cotton. Merino or synthetics, or you’ll sweat then freeze."
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

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-brand-text/80">
            Quick local signal: if you’re self-driving to a meeting point, read this before you pretend animals are a myth:{" "}
            <Link href="/rental-terms-prices#reindeer-collision" className="font-semibold hover:underline">
              What to do if you meet a reindeer on the road →
            </Link>
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Where to book Lapland tours (three solid options)
        </h2>

        <PartnerStrip
          title="Pick one of three, then verify the boring stuff"
          subtitle="Local operator if you want depth. Marketplaces if you want selection. Before paying: meeting point, gear, language, cancellation."
          partners={partners}
          intentHref="/get-help"
          intentLabel="Get Help if unclear"
        />

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">The stuff people ignore (then regret)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Meeting point is “somewhere”, pickup is “maybe”, gear is “provided” but only the outer layer.
              Then your tour starts in the dark, ends in the dark, and you’re cold for 6 hours.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">The 10-second sanity check</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Where exactly do I stand? What time window? What gear do I get (boots included or not)?
              What language? What happens if weather cancels? If you can’t answer these fast, pause.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-sm text-brand-text/70 max-w-3xl">
          Real example: <strong>Jan ’26</strong>, Saariselkä. A friend forgot proper base layers because the listing sounded reassuring.
          It was <strong>-25°C</strong>. Outer gear helped, but cotton underneath turned the tour into survival mode. Gear list isn’t optional.
        </p>
      </Section>

      {/* DESTINATIONS */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Where to go in Lapland
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

      {/* FAQ (English, snippet-friendly) */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Lapland Tours FAQ (Winter 2026)
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">
              Is the Northern Lights (Aurora Borealis) guaranteed?
            </h3>
            <p className="mt-3 text-sm text-brand-text/70">
              No. No operator can guarantee a sighting. “Aurora Chase” tours usually offer better odds because vans hunt for clear skies
              over a wide radius instead of waiting at a fixed camp. Forecast apps help, but cloud cover is the final decider.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">How cold is Lapland in January?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              -20°C to -35°C is common. Many tours provide a thermal overall, but your own merino wool or synthetic base layers are mandatory.
              Avoid cotton: it traps moisture and makes you freeze the moment you stop moving.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Rovaniemi or Levi: which one to choose?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Rovaniemi is best for logistics, Santa Claus Village, and the widest selection of short tours.
              Levi is a modern ski-resort vibe with more resort-style restaurants and activities.
              For fewer crowds, Saariselkä or Inari feels quieter and more Arctic.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">When should I book a husky safari?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              For peak December–January dates, book 2–3 months in advance.
              Morning and midday slots sell out first because they’re the only times with natural light (or “blue hour” twilight)
              during the Polar Night season.
            </p>
          </Card>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Section>
    </div>
  );
}
