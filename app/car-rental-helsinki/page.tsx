import PageHero from "@/components/PageHero";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";

export const metadata = {
  title: "Car Rental Helsinki | TheNorthTrip",
  description:
    "Helsinki car rental without the expensive surprises: HEL pickup reality, debit/credit holds, desk hours, winter tyres, and what to check before paying.",
  openGraph: {
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Helsinki car rental without the expensive surprises: HEL pickup reality, debit/credit holds, desk hours, winter tyres, and what to check before paying.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Helsinki car rental without the expensive surprises: HEL pickup reality, debit/credit holds, desk hours, winter tyres, and what to check before paying.",
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
      <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-100">
        <img src={hub.image} alt="" className="h-full w-full object-cover" loading="lazy" />
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
        "Fast comparison. Still: the supplier’s desk rules win (card type + deposit + desk hours). Verify before you pay.",
      href: "PASTE_DISCOVERCARS_AFFILIATE_LINK",
      ctaLabel: "Compare options",
    },
    {
      name: "Auto Europe",
      kind: "aggregator",
      blurb:
        "A strong second check on availability and terms. Still confirm pickup rules in writing if anything is unclear.",
      href: "PASTE_AUTOEUROPE_AFFILIATE_LINK",
      ctaLabel: "Check Auto Europe",
    },
    { empty: true, label: "Direct brand (Sixt / Europcar / Hertz etc.)" },
  ];

  const helsinkiHubs: Hub[] = [
    {
      image: "/images/og/og-helsinki-airport-transfers.jpg",
      title: "HEL pickup reality",
      description:
        "Airport desks behave differently than city desks. Desk hours and late pickup rules decide if you actually get the car.",
      ctaLabel: "Airport transfers & pickup →",
      ctaHref: "/helsinki/airport-transfers",
    },
    {
      image: "/images/og/og-helsinki-city-mobility.jpg",
      title: "City driving vs public transport",
      description:
        "If you’re mostly in the center: parking + timing can cost more than tram/metro. Compare before committing.",
      ctaLabel: "City mobility checklist →",
      ctaHref: "/helsinki/city-mobility",
    },
    {
      image: "/images/og/og-helsinki-sauna.jpg",
      title: "Sauna visits by car",
      description:
        "Sounds easy until parking and time slots collide. Route + buffer beats improvising.",
      ctaLabel: "Sauna routing →",
      ctaHref: "/helsinki/sauna",
    },
    {
      image: "/images/og/og-helsinki-sightseeing.jpg",
      title: "Day-trip planning",
      description:
        "Car helps outside the center. For day trips, daylight + winter roads decide the real timeline.",
      ctaLabel: "Sightseeing routes →",
      ctaHref: "/helsinki/sightseeing",
    },
    {
      image: "/images/og/og-helsinki-ferry-cruise.jpg",
      title: "Ferry timing & vehicle rules",
      description:
        "Rental + ferry is fine until check-in timing and vehicle category rules bite you.",
      ctaLabel: "Ferry & cruise planning →",
      ctaHref: "/helsinki/ferry-cruise",
    },
    {
      image: "/images/og/og-helsinki-restaurants.jpg",
      title: "Restaurants without schedule stress",
      description:
        "Parking + peak hours create hidden friction. A tiny plan saves the whole evening.",
      ctaLabel: "Restaurant planning →",
      ctaHref: "/helsinki/restaurants",
    },
  ];

  // English, snippet-friendly FAQ schema (matches the visible FAQ)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I rent a car in Helsinki with a debit card?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "It depends on the supplier. Many big brands are credit-card-only, and debit cards often trigger a higher security hold (commonly €1,000–€2,000). Email the desk in advance and ask for the exact hold amount and the release timing after return.",
        },
      },
      {
        "@type": "Question",
        name: "Are studded tyres mandatory in Helsinki in winter?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Winter tyres are mandatory in winter conditions, and many travelers should treat November–April as the practical season. The key is not the month: it’s what tyres your booking actually includes. Confirm tyre type (studded vs non-studded) and confirm it’s included in the price.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I hit a reindeer in Finland?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Call the emergency number 112 and follow official instructions. Do not move the animal. Take photos of the scene and the vehicle damage. Insurance outcomes depend on your deductible (excess) and exclusions, so check your terms for animal collisions and undercarriage coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What are the typical car rental desk hours at HEL (Helsinki-Vantaa)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Many airport desks operate roughly 07:00–00:00. If you arrive late, you need a written late pickup policy, otherwise you can end up with a closed desk and no car.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an International Driving Permit (IDP) in Helsinki?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "EU/EEA licences are usually accepted without an IDP. For non-EU licences, suppliers often require an International Driving Permit or an official translation. Check your supplier’s terms before travel.",
        },
      },
    ],
  };

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

        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-3xl">
          Helsinki rentals rarely fail because you picked the “wrong car”. They fail at the desk:
          card type, deposit hold, desk hours, and what “insurance included” actually means.
        </p>

        {/* DENSE LOCAL SIGNAL (clean, readable) */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                HEL (Helsinki-Vantaa) pickup essentials
              </p>
              <p className="mt-1 text-sm text-brand-text/70 max-w-3xl">
                These details decide whether pickup is smooth or a mess after a delayed flight.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Where you actually pick up</p>
                <p className="mt-1 text-sm text-brand-text/70">
                  Most rentals are handled at <strong>HEL Airport (P1 parking area)</strong>. Follow the “Car Rental” signs from arrivals.
                </p>
              </div>

              <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Desk hours & late arrival</p>
                <p className="mt-1 text-sm text-brand-text/70">
                  Many desks run roughly <strong>06:00–22:00</strong>. If you land late, get a <strong>written late pickup policy</strong>,
                  otherwise you can meet the classic: “closed desk, no car”.
                </p>
              </div>

              <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Winter tyres reality</p>
                <p className="mt-1 text-sm text-brand-text/70">
                  Treat <strong>November–April</strong> as the practical winter season.
                  Confirm what tyres are included (studded vs non-studded) and confirm it’s <strong>included in price</strong>, not a desk add-on.
                </p>
              </div>

              <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">City costs</p>
                <p className="mt-1 text-sm text-brand-text/70">
                  Central Helsinki parking can be around <strong>€4/hour</strong>. If you’re staying mostly in the city,
                  tram/metro is often faster and cheaper.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5 pt-1">
              <Link
                href="/rental-terms-prices#helsinki"
                className="text-sm font-semibold text-slate-900 hover:underline"
              >
                Check card + deposit rules (Helsinki) →
              </Link>
              <Link
                href="/helsinki/winter-driving"
                className="text-sm font-semibold text-slate-900 hover:underline"
              >
                Black ice + early darkness: winter driving checklist →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/car-rental-helsinki" variant="primary">
            Compare car rental options
          </CtaButton>
          <CtaButton href="/rental-terms-prices" variant="outline">
            Open terms checklist
          </CtaButton>
        </div>

        <p className="mt-6 text-sm text-brand-text/70 max-w-3xl">
            Real-world note: late arrivals and debit cards are where Helsinki rentals most often break.
           Debit cards commonly trigger significantly higher security holds, and desk rules can change fast if you arrive late.
          Travelers who email ahead to confirm card acceptance, hold range, and late pickup policy avoid most of these failures.
        </p>
      </section>

      {/* PARTNERS FIRST */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Our recommendations
        </h2>

        <PartnerStrip
          title="Compare partners"
          subtitle="Use a marketplace for speed, use Auto Europe as a second check, or go direct if you already trust a brand. Always confirm deposit + card acceptance in writing."
          partners={partners}
          intentHref="/rental-terms-prices"
          intentLabel="Open terms checklist"
        />

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Card &amp; deposit reality</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              The #1 failure mode: assuming the desk will “figure it out”.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Ask two blunt questions:
              <span className="block mt-2">
                <strong>1)</strong> “What is the hold amount for my car category?”
              </span>
              <span className="block mt-1">
                <strong>2)</strong> “When do you release it after return?”
              </span>
              <span className="block mt-2">
                If the card is rejected at the desk, ask what happens next (and get it in writing).
              </span>
            </p>

            <div className="mt-auto pt-4">
              <Link href="/rental-terms-prices#helsinki" className="text-sm font-semibold hover:underline">
                Open the Helsinki card/hold section →
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Winter requirements</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              In winter, “model” matters less than tyres, visibility, and buffers.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Confirm:
              <span className="block mt-2">• what tyres you get (and whether they’re included)</span>
              <span className="block mt-1">• what “optional” winter add-ons exist at the desk</span>
              <span className="block mt-1">• your realistic timeline if it’s dark early</span>
            </p>

            <div className="mt-auto pt-4">
              <Link href="/helsinki/winter-driving" className="text-sm font-semibold hover:underline">
                Open Helsinki winter driving checklist →
              </Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Insurance wording traps</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              “Insurance included” can still mean a big deductible plus exclusions.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Focus on:
              <span className="block mt-2">• deductible (excess)</span>
              <span className="block mt-1">• exclusions (glass/tyres/undercarriage)</span>
              <span className="block mt-1">• claim handling (who you contact, what proof you need)</span>
            </p>

            <div className="mt-auto pt-4">
              <Link href="/rental-terms-prices" className="text-sm font-semibold hover:underline">
                Read the insurance checklist →
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Pickup timing &amp; desk hours</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              The classic Helsinki failure story: flight delay, “we’ll make it”, then… no desk, no car.
              Confirm desk hours for your exact location (airport vs city). If you land late, get the late pickup policy in writing.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">If anything feels unclear</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Don’t argue at the desk with zero documentation. Keep it practical and escalate cleanly.
            </p>
            <div className="mt-4">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* HELSINKI PLANNING SHORTCUTS */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Helsinki planning shortcuts
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

      {/* FAQ */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Helsinki car rental FAQ
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Can I rent with a debit card?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              It depends on the supplier. Many big brands are credit-card-only, and debit cards often trigger a higher hold.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              What to do:
              <span className="block mt-2">• Email the desk before paying.</span>
              <span className="block mt-1">• Ask for the exact hold amount for your car category.</span>
              <span className="block mt-1">• Ask when the hold is released after return.</span>
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Copy-paste question:
              <span className="block mt-2 italic">
                “What is your card policy at the HEL airport desk? Please confirm the exact deposit amount for my car category and the expected release time after return.”
              </span>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Are studded tyres mandatory in winter?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Winter tyres are mandatory in winter conditions. For many travelers, November–April is the practical season.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              The key check is simple:
              <span className="block mt-2">• Does your booking explicitly say which tyres are included?</span>
              <span className="block mt-1">• Are studded tyres included, or sold as a desk add-on?</span>
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">What if I hit a reindeer?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Call <strong>112</strong> and follow official instructions. Do not move the animal.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Do this immediately:
              <span className="block mt-2">• Take photos of the scene and the vehicle damage.</span>
              <span className="block mt-1">• Keep all booking/insurance proof.</span>
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Insurance outcome depends on your <strong>deductible (excess)</strong> and exclusions, so verify animal collision and undercarriage coverage.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">What are typical HEL desk hours?</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Many airport desks operate roughly, some later. Always confirm your specific desk hours in writing.” <strong>07:00–00:00</strong>.
              “Hours vary by supplier. Always confirm your desk’s exact hours for your pickup location.”
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              If your flight arrives late:
              <span className="block mt-2">• Get a written late pickup policy. “Some suppliers charge an after-hours fee (often ~€50–€100). Confirm both availability and cost in writing.”</span>
              <span className="block mt-1">• Don’t assume “they will wait”.</span>
              <span className="block mt-1">• Without written confirmation, you can end up with a closed desk and no car.</span>
            </p>
          </Card>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Section>

      {/* ROUTING */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Related decision links
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
