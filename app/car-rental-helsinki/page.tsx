import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";

export const metadata: Metadata = {
  title: "Car Rental Helsinki | TheNorthTrip",
  description:
    "Car rental in Helsinki without the desk friction: deposits, card rules, winter tyres, Helsinki-Vantaa Airport pickup basics, and what to verify before you pay.",
  openGraph: {
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Car rental in Helsinki without the desk friction: deposits, card rules, winter tyres, Helsinki-Vantaa Airport pickup basics, and what to verify before you pay.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental Helsinki | TheNorthTrip",
    description:
      "Car rental in Helsinki without the desk friction: deposits, card rules, winter tyres, Helsinki-Vantaa Airport pickup basics, and what to verify before you pay.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300/70 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
      {children}
    </span>
  );
}

function TrustBox() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-300/70 bg-slate-100/70 p-5 backdrop-blur md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,23,42,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Verified: Jan 14, 2026</Badge>
            <span className="text-xs text-brand-text/75">
              Checked against Traficom + Finavia guidance and supplier pages. Policies fluctuate—always reconfirm in
              writing.
            </span>
          </div>

          <Link href="/rental-terms-prices" className="text-xs font-semibold text-slate-900 hover:underline">
            Open the rental terms checklist →
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-300/70 bg-white/60 p-4 backdrop-blur">
          <p className="text-xs text-brand-text/75 leading-relaxed">
            Some links on this page may be affiliate links. If you book through them, we may earn a commission at no
            extra cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}

type Accent = "orange" | "blue" | "amber" | "slate";

function QuickStartCard({
  title,
  description,
  meta,
  href,
  ctaLabel,
  imageSrc,
  accent = "slate",
}: {
  title: string;
  description: string;
  meta?: string;
  href: string;
  ctaLabel: string;
  imageSrc?: string;
  accent?: Accent;
}) {
  const accentStyles: Record<
    Accent,
    { bar: string; badgeText: string; badgeBg: string; badgeBorder: string; overlay: string }
  > = {
    orange: {
      bar: "from-orange-500/70 via-orange-500/20 to-transparent",
      badgeText: "text-orange-900",
      badgeBg: "bg-orange-50/80",
      badgeBorder: "border-orange-200/70",
      overlay: "bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent",
    },
    blue: {
      bar: "from-sky-500/70 via-sky-500/20 to-transparent",
      badgeText: "text-sky-900",
      badgeBg: "bg-sky-50/80",
      badgeBorder: "border-sky-200/70",
      overlay: "bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent",
    },
    amber: {
      bar: "from-amber-500/70 via-amber-500/20 to-transparent",
      badgeText: "text-amber-900",
      badgeBg: "bg-amber-50/80",
      badgeBorder: "border-amber-200/70",
      overlay: "bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent",
    },
    slate: {
      bar: "from-slate-700/60 via-slate-700/20 to-transparent",
      badgeText: "text-slate-900",
      badgeBg: "bg-slate-50/80",
      badgeBorder: "border-slate-300/70",
      overlay: "bg-gradient-to-t from-slate-950/45 via-slate-950/15 to-transparent",
    },
  };

  const a = accentStyles[accent];

  return (
    <Card className="group flex flex-col overflow-hidden border-slate-300/70 bg-slate-50/70 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-slate-400/60 hover:shadow-lg">
      {/* top accent bar (actual color) */}
      <div className={`h-1 w-full bg-gradient-to-r ${a.bar}`} />

      {/* thumbnail */}
      <div className="relative h-20 w-full overflow-hidden bg-slate-200">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : null}

        {/* vignette */}
        <div className={`pointer-events-none absolute inset-0 ${a.overlay}`} />

        {/* subtle line accent at top of image */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.bar}`} />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          {meta ? (
            <span
              className={[
                "rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                a.badgeText,
                a.badgeBg,
                a.badgeBorder,
              ].join(" ")}
            >
              {meta}
            </span>
          ) : null}
        </div>

        <p className="mt-2 text-sm text-brand-text/80 leading-relaxed">{description}</p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <Link href={href} className="text-sm font-semibold hover:underline">
            {ctaLabel} →
          </Link>
          <span className="text-[11px] font-semibold text-slate-600">Open →</span>
        </div>
      </div>
    </Card>
  );
}

function VerifyTile({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col border-slate-300/70 bg-slate-50/70 backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-xs font-bold text-slate-900">
          {step}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <div className="mt-2 space-y-2 text-sm text-brand-text/80 leading-relaxed">{children}</div>
        </div>
      </div>
    </Card>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-300/70 bg-slate-100/70 p-5 backdrop-blur md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.10),transparent_55%)]" />
      <div className="relative">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <div className="mt-2 space-y-2 text-sm text-brand-text/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function AccordionItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-2xl border border-slate-300/70 bg-slate-50/70 p-5 backdrop-blur">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-900">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>
      </summary>
      <div className="mt-4 space-y-3 text-sm text-brand-text/80 leading-relaxed">{children}</div>
    </details>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I rent with a debit card in Helsinki?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It’s supplier-specific. Many require a credit card for the security deposit. If debit is accepted, the hold and extra requirements can differ by supplier and car category. Email the desk before you pay and ask for the exact hold amount and release timing after return.",
      },
    },
    {
      "@type": "Question",
      name: "Are studded tyres mandatory in Finland?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Not always. Winter tyre rules depend on season and conditions. Studded tyres are common but not mandatory in every situation. Confirm what your rental includes (studded vs non-studded) and confirm it’s included in the price rather than sold as an add-on.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an International Driving Permit (IDP) in Finland?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "EU/EEA licences are typically accepted without an IDP. Non-EU drivers often need an International Driving Permit together with their national licence. Check your supplier’s terms before booking.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I hit an animal on the road?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Call 112 and follow official instructions. Do not move the animal. Take photos of the scene and vehicle damage. Insurance outcomes depend on your deductible and exclusions, so check your terms for animal collisions and undercarriage coverage.",
      },
    },
  ],
};

export default function CarRentalHelsinkiPage() {
  const discoverCarsLink = "https://www.discovercars.com?a_aid=86laszlogabor";
  const autoEuropeLink = "https://www.autoeurope.com/"; // replace later

  const partners: [PartnerSlot, PartnerSlot, PartnerSlot] = [
    {
      name: "DiscoverCars",
      kind: "aggregator",
      blurb:
        "Fast comparison across suppliers. Still: the desk rules win (card type, deposit hold, desk hours). Verify in writing before you pay.",
      href: discoverCarsLink,
      ctaLabel: "Check availability",
    },
    {
      name: "Auto Europe",
      kind: "aggregator",
      blurb:
        "A solid second check for rates and wording. Treat it as a cross-check, then confirm the supplier’s deposit and card rules directly.",
      href: autoEuropeLink,
      ctaLabel: "Open Auto Europe",
    },
    { empty: true, label: "Direct brand (Sixt / Europcar / Hertz etc.)" },
  ];

  return (
    <div className="bg-slate-50">
      {/* subtle page tint so it’s not “white on white” */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.06),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.05),transparent_60%)]" />

      {/* HERO & FAST-TRACK */}
      <PageHero
        variant="home"
        title="Helsinki car rental: verified for 2026."
        subtitle="Skip the desk friction at Helsinki-Vantaa Airport. From Terminal arrivals logistics to winter tyre rules—know what to verify before you pay."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: discoverCarsLink, label: "Compare car rental options" }}
        secondaryCta={{ href: "#paths", label: "City mobility & sauna routes" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <TrustBox />
      </section>

      {/* PARTNERS */}
      <Section className="pt-0">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recommended booking paths</h2>
        <p className="mt-3 text-sm text-brand-text/80 max-w-3xl">
          Compare partners for live rates and clearer terms. Then confirm the supplier’s deposit/card rules directly.
        </p>

        <div className="mt-6">
          <PartnerStrip
            title="Compare partners"
            subtitle="Use a marketplace for speed, use a second site as a cross-check, or go direct if you already trust a brand."
            partners={partners}
            intentHref="/rental-terms-prices"
            intentLabel="Open terms checklist"
          />
        </div>
      </Section>

      {/* POWER ROW (Pick your path) — anchor wrapper is OUTSIDE Section */}
      <div id="paths">
        <Section className="bg-slate-100/60">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pick your path</h2>
          <p className="mt-3 text-sm text-brand-text/80 max-w-3xl">
            Clean options, no noise. Choose what you need right now.
          </p>

          <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <QuickStartCard
              title="Helsinki Car Hire"
              meta="Airport"
              accent="orange"
              imageSrc="/images/og/og-helsinki-airport-transfers.jpg"
              description="Terminal arrivals desks for major brands. Avoid late-pickup surprises and card rejection by confirming the desk policy in writing."
              href="/car-rental-helsinki"
              ctaLabel="Check rates"
            />
            <QuickStartCard
              title="Public Transport"
              meta="City"
              accent="blue"
              imageSrc="/images/og/og-helsinki-city-mobility.jpg"
              description="Airport-to-center travel is zone-based. For the center, tram/metro often beats driving + parking—compare once before committing."
              href="/helsinki/city-mobility"
              ctaLabel="HSL ticket guide"
            />
            <QuickStartCard
              title="Sauna Access"
              meta="Plan"
              accent="amber"
              imageSrc="/images/og/og-helsinki-sauna.jpg"
              description="Löyly and Allas are in zone-based parking areas. Use EasyPark/ParkMan to avoid fines and time-waste."
              href="/helsinki/sauna"
              ctaLabel="Sauna routes & parking"
            />
            <QuickStartCard
              title="Ferry Connections"
              meta="Ferry"
              accent="slate"
              imageSrc="/images/og/og-helsinki-ferry-cruise.jpg"
              description="Vehicle check-in closes before departure and varies by operator/route. Verify timing and cross-border rules before you book."
              href="/helsinki/ferry-cruise"
              ctaLabel="Ferry timing & rules"
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={discoverCarsLink}
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
            >
              Compare car rental options
            </a>
            <CtaButton href="/rental-terms-prices" variant="outline">
              Open terms checklist
            </CtaButton>
          </div>
        </Section>
      </div>

      {/* VERIFY BEFORE YOU PAY (Truth layer) */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Verify before you pay</h2>
        <p className="mt-3 text-sm text-brand-text/80 max-w-3xl">
          This is where rentals are won or lost: pickup logistics, card/deposit rules, and winter equipment.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          <VerifyTile step="1" title="Pickup at Helsinki-Vantaa Airport">
            <p>
              Follow the <strong>“Car Rental / Rental Cars”</strong> signs to the arrivals hall desks. Major suppliers
              (Budget, Avis, Sixt, Hertz) have desks directly in the Terminal 2 arrivals hall — no shuttle bus required.
              Always confirm your supplier’s exact pickup process.
            </p>
            <p>
              If your flight lands late, get the late-pickup policy <strong>in writing</strong> before you pay.
            </p>
          </VerifyTile>

          <VerifyTile step="2" title="The card rule (deposit hold)">
            <p>
              Credit cards are standard for deposits. Debit cards are often accepted but usually require higher holds
              and additional ID. Email the desk and ask: “What is the exact hold amount for my car category with debit
              at Helsinki-Vantaa?”
            </p>
            <p className="font-semibold text-slate-900">Email the desk:</p>
            <p className="italic">
              “What is the exact hold amount for my car category at Helsinki-Vantaa Airport with my card type?”
            </p>
          </VerifyTile>

          <VerifyTile step="3" title="Winter tyres (what you actually get)">
            <p>
              Winter tyres are required by law from Nov 1 to Mar 31 in wintry conditions. Helsinki rentals include
              seasonally appropriate tyres (studded common mid-winter). Verify that no winter extras are added at the
              desk.
            </p>
            <p>
              Confirm <strong>studded vs non-studded</strong> and confirm it’s <strong>included in price</strong>.
            </p>
          </VerifyTile>
        </div>

        <div className="mt-8">
          <Callout title="Two-minute check that prevents desk friction">
            <p>
              Get the hold amount and late-pickup handling confirmed in writing. A simple email screenshot saves you
              from “policy surprises” when you’re tired and in a queue.
            </p>
          </Callout>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section className="bg-slate-100/60">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience hub</h2>
        <p className="mt-3 text-sm text-brand-text/80 max-w-3xl">
          If you’re driving, these are the two places Helsinki plans most often break: parking and ferry timing.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="border-slate-300/70 bg-slate-50/70 backdrop-blur">
            <h3 className="text-lg font-semibold">Sauna &amp; parking</h3>
            <p className="mt-3 text-sm text-brand-text/80">
              Sauna plans go sideways when parking is improvised. Check zones and payment in apps before you arrive.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-300/70 bg-white/60 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Quick note</p>
              <p className="mt-2 text-sm text-brand-text/80">
                Löyly and Allas use paid, zone-based parking (€2–4/hour). Use EasyPark or ParkMan to check zones and pay
                in real time.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link href="/helsinki/sauna" className="text-sm font-semibold hover:underline">
                  Sauna routes & parking →
                </Link>
                <CtaButton href="/helsinki/sauna" variant="outline">
                  Book a sauna slot
                </CtaButton>
              </div>
            </div>
          </Card>

          <Card className="border-slate-300/70 bg-slate-50/70 backdrop-blur">
            <h3 className="text-lg font-semibold">Ferry buffers</h3>
            <p className="mt-3 text-sm text-brand-text/80">
              Vehicle check-in typically closes around 45 minutes before departure (e.g. Viking Line). Always confirm
              the cutoff time and that cross-border use is allowed in your rental contract.
            </p>

            <div className="mt-4 rounded-2xl border border-slate-300/70 bg-white/60 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-slate-900">Quick note</p>
              <p className="mt-2 text-sm text-brand-text/80">
                If your rental contract doesn’t explicitly allow cross-border travel, don’t assume you can take the car
                onto a ferry. Confirm the rule and required paperwork before booking.
              </p>
              <div className="mt-4">
                <Link href="/helsinki/ferry-cruise" className="text-sm font-semibold hover:underline">
                  Ferry timing & rules →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sourced FAQ</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <AccordionItem q="Can I rent with a debit card?">
            <p>
              Supplier-dependent. Many require credit for the deposit. If debit is accepted, holds and extra checks can
              differ by supplier and car category.
            </p>
            <p className="font-semibold text-slate-900">Action:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email the desk before you pay.</li>
              <li>Ask for the exact hold amount for your category with your card type.</li>
              <li>Ask when the hold is released after return.</li>
            </ul>
          </AccordionItem>

          <AccordionItem q="Are studded tyres mandatory?">
            <p>
              Not always. Winter tyre rules depend on season and conditions. Studded tyres are common, but the correct
              move is to verify what your booking includes.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirm studded vs non-studded.</li>
              <li>Confirm it’s included in the base price (not sold at the desk).</li>
            </ul>
          </AccordionItem>

          <AccordionItem q="What if I hit a moose (or another animal)?">
            <p>
              Call <strong>112</strong> and follow official instructions. Don’t move the animal. Photo the scene and
              damage.
            </p>
            <p>Before you travel, verify excess/deductible and exclusions (undercarriage, tyres, animal collisions).</p>
          </AccordionItem>

          <AccordionItem q="Do I need an IDP?">
            <p>
              EU/EEA licences are typically fine. For non-EU licences, suppliers often require an International Driving
              Permit together with the national licence. Always check your supplier’s terms before booking.
            </p>
          </AccordionItem>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Section>

      {/* RELATED LINKS */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Related decision links</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          <Card className="border-slate-300/70 bg-slate-50/70 backdrop-blur">
            <p className="text-sm text-brand-text/80">
              <Link href="/rental-terms-prices" className="font-semibold hover:underline">
                Rental Terms &amp; Prices →
              </Link>
            </p>
          </Card>
          <Card className="border-slate-300/70 bg-slate-50/70 backdrop-blur">
            <p className="text-sm text-brand-text/80">
              <Link href="/getting-around-finland" className="font-semibold hover:underline">
                Getting Around Finland →
              </Link>
            </p>
          </Card>
          <Card className="border-slate-300/70 bg-slate-50/70 backdrop-blur">
            <p className="text-sm text-brand-text/80">
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
