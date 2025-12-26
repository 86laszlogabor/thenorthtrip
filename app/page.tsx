// app/page.tsx
import Image from "next/image";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

const entryCards = [
  {
    title: "Car Rental Helsinki",
    desc: "The fastest path to a clean booking. Partners first, then what to expect at pickup.",
    href: "/car-rental-helsinki",
    cta: "Open Car Rental Helsinki →",
    image: "/images/home-entry-car.jpg",
    alt: "Car rental in Helsinki, winter city street scene",
  },
  {
    title: "Lapland Tours",
    desc: "Operators, tour types, and destinations. Choose what fits your trip.",
    href: "/lapland-tours",
    cta: "Explore Lapland Tours →",
    image: "/images/home-entry-lapland.jpg",
    alt: "Lapland winter landscape with northern lights",
  },
  {
    title: "Camper Rental Finland",
    desc: "Compare camper partners, stations, and routes. Know the winter realities before you commit.",
    href: "/camper-rental-finland",
    cta: "See Camper Options →",
    image: "/images/home-entry-camper.jpg",
    alt: "Camper van in Finland, winter roadside stop",
  },
  {
    title: "Getting Around Finland",
    desc: "Train vs bus vs flights vs taxi. Clear tradeoffs and what to double-check.",
    href: "/getting-around-finland",
    cta: "Compare Travel Modes →",
    image: "/images/home-entry-transport.jpg",
    alt: "Finland travel modes collage: train, bus, plane (single image montage)",
  },
];

const mistakes = [
  {
    title: "Hidden fees",
    desc: "Look for deposits, fuel rules, and pickup “extras” that change the real price.",
    icon: "🧾",
    image: "/images/mistake-fees.jpg",
    alt: "Hands reviewing rental fees and receipt",
  },
  {
    title: "Credit card only",
    desc: "Debit acceptance varies. Confirm rules before you book and before you fly.",
    icon: "💳",
    image: "/images/mistake-card.jpg",
    alt: "Credit card and booking confirmation",
  },
  {
    title: "Insurance gaps",
    desc: "Deductibles and exclusions matter. “Included insurance” often hides the important parts.",
    icon: "🛡️",
    image: "/images/mistake-insurance.jpg",
    alt: "Signing insurance document",
  },
  {
    title: "Winter conditions",
    desc: "Tyres, road rules, and timing. Winter travel punishes optimistic planning.",
    icon: "❄️",
    image: "/images/mistake-winter.jpg",
    alt: "Snowy road conditions in Finland",
  },
];

const partners = [
  "DiscoverCars",
  "Rentalcars.com",
  "Sixt",
  "Europcar",
  "Hertz",
  "Avis",
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] md:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-finland-winter-road.jpg"
            alt="Snowy winter road in Finland with pine forest on both sides"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white text-balance">
              Rent smarter in Finland.
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/85 max-w-2xl">
              Compare trusted partners, understand the real rules, and avoid the
              mistakes that cost travelers time and money.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <CtaButton href="/car-rental-helsinki" variant="primary">
                Compare Best Options
              </CtaButton>
            </div>

            <p className="mt-6 text-sm text-white/80 max-w-xl">
              Partner-first recommendations, with transparent notes on how the
              market really works.
            </p>
          </div>
        </div>
      </section>

      {/* ENTRY CARDS (same content, just styled) */}
      <Section className="bg-slate-50">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {entryCards.map((c) => (
            <Card key={c.title} className="flex flex-col">
              <div className="p-4">
                <div className="relative h-[160px] overflow-hidden rounded-lg bg-black/5">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="mt-4 text-base font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </div>

              <div className="mt-auto p-4 pt-0">
                <a
                  className="text-sm font-semibold underline underline-offset-4 hover:opacity-90"
                  href={c.href}
                >
                  {c.cta}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* MISTAKES */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          5 Costly Mistakes to Avoid
        </h2>
        <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
          The boring checks that save you money, and avoid ruined pickup days.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mistakes.map((m) => (
            <Card key={m.title} className="flex flex-col">
              <div className="p-5">
                <div className="text-lg">{m.icon}</div>
                <h3 className="mt-3 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{m.desc}</p>

                <div className="mt-4 relative h-[120px] overflow-hidden rounded-lg bg-black/5">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-auto p-5 pt-0">
                <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                  Check Availability
                </CtaButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRUST & PARTNERS */}
      <Section className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Why Trust Our Partners
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl">
              Title + short explanation
            </p>

            <ul className="mt-6 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>No hidden-fee surprises in our recommendations</li>
              <li>24/7 customer support options through major platforms</li>
              <li>Trusted by travelers worldwide (and reviewed publicly)</li>
            </ul>

            {/* partner list with green underline like your reference */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {partners.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center border-b-2 border-emerald-500/70 pb-[2px] text-slate-800"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="relative h-[260px] md:h-[320px] lg:h-[360px]">
              <Image
                src="/images/trust-finland-lake-boat.jpg"
                alt="Scenic Finland lake with a small boat, summer light"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* BOTTOM CTA (same content, new visual, aurora + reindeer) */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Find Your Perfect Trip in Finland
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-xl">
              Start with Helsinki, then expand to Lapland and beyond.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <CtaButton href="/offer-checklist" variant="primary">
                Get Started
              </CtaButton>
              <CtaButton href="/car-rental-helsinki" variant="ghost">
                Compare options
              </CtaButton>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Terms and prices can change. Always confirm at booking.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-black/5 shadow-sm shadow-black/5">
            <div className="relative h-[260px] md:h-[320px]">
              <Image
                src="/images/cta-aurora-reindeer.jpg"
                alt="Northern lights in Lapland with a reindeer in the foreground"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
              {/* small visual label, not new “content”, just decoration */}
              <div className="absolute left-4 bottom-4 text-white">
                <div className="text-sm font-semibold">Lapland-ready planning</div>
                <div className="text-xs text-white/85">
                  Clear tradeoffs, fewer surprises.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
