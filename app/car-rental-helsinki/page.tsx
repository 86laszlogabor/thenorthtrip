import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import PartnerStrip, { type PartnerSlot } from "@/components/PartnerStrip";
import Link from "next/link";

export default function CamperRentalFinlandPage() {
  const partners: [PartnerSlot, PartnerSlot, PartnerSlot] = [
    // Most nincs valós camper partner megadva, így 3 slot: 1 “operator/local” placeholder + 2 empty
    {
      name: "Local fleet (placeholder)",
      kind: "operator",
      blurb:
        "Direct handover, local advice, and clearer accountability. We’ll add a verified partner after validation.",
      href: "/camper-rental-finland",
      ctaLabel: "See options",
    },
    { empty: true, label: "Marketplace partner" },
    { empty: true, label: "Peer-to-peer" },
  ];

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Camper rental in Finland, with the winter realities included.
        </h1>
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

        {/* ADD: 3-slot strip (does not remove your existing detailed blocks) */}
        <PartnerStrip
          title="Compare partners (3 options)"
          subtitle="Three slots only. We’ll fill them with verified partners as we validate inventory + support quality."
          partners={partners}
          intentHref="/rental-terms-prices"
          intentLabel="Open terms checklist"
        />

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Marketplace partner (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Quick comparison across fleets
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Broad inventory</li>
                <li>Clear pickup locations</li>
                <li>Easy date changes (depends on policy)</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Mileage caps, insurance deductibles, winterization</p>
            </div>
            <div className="mt-auto pt-4">
              {/* FIX: secondary -> success (conversion green) */}
              <CtaButton href="/camper-rental-finland" variant="success" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Local fleet partner (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Handovers, local advice, and route support
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Better local guidance</li>
                <li>Flexible pickup sometimes possible</li>
                <li>More direct accountability</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Heating system, road restrictions, deposit terms</p>
            </div>
            <div className="mt-auto pt-4">
              {/* FIX: secondary -> success */}
              <CtaButton href="/camper-rental-finland" variant="success" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            <h3 className="text-lg font-semibold">Peer-to-peer style (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              <span className="font-semibold">Best for:</span> Unique rigs, potentially better value
            </p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Variety of camper types</li>
                <li>Sometimes lower base cost</li>
                <li>Owner guidance can be helpful</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Support if something breaks, cancellation rules</p>
            </div>
            <div className="mt-auto pt-4">
              {/* FIX: secondary -> success */}
              <CtaButton href="/camper-rental-finland" variant="success" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            {/* Keep your block, but make it usable without changing intent */}
            <h3 className="text-lg font-semibold">
              Explain winterization, mileage, deposits, legality.
            </h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Explain winterization, mileage, deposits, legality.
            </p>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Winterization: what it means in practice (heating + water system)</li>
              <li>Mileage: caps, extra km fees, realistic distances</li>
              <li>Deposits: holds, timing, card requirements</li>
              <li>Legality: where you can stop/park and what “allowed” means</li>
            </ul>
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
          {[
            { title: "Helsinki", href: "/camper-rental-finland/stations/helsinki" },
            { title: "Tampere/Turku", href: "/camper-rental-finland/stations/tampere-turku" },
            { title: "Rovaniemi", href: "/camper-rental-finland/stations/rovaniemi" },
          ].map((s) => (
            <Card key={s.title} className="flex flex-col">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-text/70">1–2 lines + CTA</p>
              <div className="mt-auto pt-4">
                <Link href={s.href} className="text-sm font-semibold hover:underline">
                  See station options →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">
          Routes: Southern lakes, Helsinki–Lapland, Coastal
        </h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          {[
            { title: "Southern lakes", text: "Best for: mild season, flexible stops.", href: "/camper-rental-finland/routes/southern-lakes", cta: "Explore route →" },
            { title: "Helsinki–Lapland", text: "Best for: committed road-trip travelers who understand winter constraints.", href: "/camper-rental-finland/routes/helsinki-lapland", cta: "Explore route →" },
            { title: "Coastal", text: "Best for: scenery + easier logistics in warmer months.", href: "/camper-rental-finland/routes/coastal", cta: "Explore route →" },
          ].map((r) => (
            <Card key={r.title} className="flex flex-col">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-brand-text/70">{r.text}</p>
              <div className="mt-auto pt-4">
                <Link href={r.href} className="text-sm font-semibold hover:underline">
                  {r.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
