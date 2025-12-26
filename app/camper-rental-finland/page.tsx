import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function CamperRentalFinlandPage() {
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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recommended camper partners</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Marketplace partner (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Quick comparison across fleets</p>
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
              <CtaButton href="/camper-rental-finland" variant="secondary" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Local fleet partner (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Handovers, local advice, and route support</p>
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
              <CtaButton href="/camper-rental-finland" variant="secondary" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            <h3 className="text-lg font-semibold">Peer-to-peer style (placeholder)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Unique rigs, potentially better value</p>
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
              <CtaButton href="/camper-rental-finland" variant="secondary" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Explain winterization, mileage, deposits, legality.</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Explain winterization, mileage, deposits, legality.
            </p>
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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Stations: Helsinki, Tampere/Turku, Rovaniemi</h2>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          {["Helsinki", "Tampere/Turku", "Rovaniemi"].map((s) => (
            <Card key={s} className="flex flex-col">
              <h3 className="text-lg font-semibold">{s}</h3>
              <p className="mt-2 text-sm text-brand-text/70">1–2 lines + CTA</p>
              <div className="mt-auto pt-4">
                <Link href="/camper-rental-finland" className="text-sm font-semibold hover:underline">
                  See station options →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">Routes: Southern lakes, Helsinki–Lapland, Coastal</h2>
        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
          {[
            { title: "Southern lakes", text: "Best for: mild season, flexible stops.", cta: "Explore route →" },
            { title: "Helsinki–Lapland", text: "Best for: committed road-trip travelers who understand winter constraints.", cta: "Explore route →" },
            { title: "Coastal", text: "Best for: scenery + easier logistics in warmer months.", cta: "Explore route →" },
          ].map((r) => (
            <Card key={r.title} className="flex flex-col">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-brand-text/70">{r.text}</p>
              <div className="mt-auto pt-4">
                <Link href="/camper-rental-finland" className="text-sm font-semibold hover:underline">
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
