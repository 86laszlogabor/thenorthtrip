import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Camper Rental Finland | TheNorthTrip",
 description:
 "Camper rental in Finland with winter realities included: heating, insulation, mileage limits, deposits, and stations/routes that actually match your season.",
 openGraph: {
 title: "Camper Rental Finland | TheNorthTrip",
 description:
 "Camper rental in Finland with winter realities included: heating, insulation, mileage limits, deposits, and stations/routes that actually match your season.",
 images: ["/images/og/og-camper-coastal.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Camper Rental Finland | TheNorthTrip",
 description:
 "Camper rental in Finland with winter realities included: heating, insulation, mileage limits, deposits, and stations/routes that actually match your season.",
 images: ["/images/og/og-camper-coastal.jpg"],
 },
};

export default function CamperRentalFinlandPage() {
 const partnerCards = [
 {
 image: "/images/og/og-camper-southern-lakes.jpg",
 title: "Marketplace (compare fleets fast)",
 description:
 "Fast comparison across bigger fleets. Good if you need flexible dates and lots of inventory.\n\nDon’t skip: Winter Pack details (heater type, insulated tanks), mileage caps, deductible size, and what “winterization” actually includes.",
 ctaLabel: "Check availability ?",
 ctaHref: "/camper-rental-finland",
 },
 {
 image: "/images/og/og-camper-station-helsinki.jpg",
 title: "Local fleet (best handover + local support)",
 description:
 "Best when you want someone to actually explain the heating and systems before you drive north.\n\nDon’t skip: heater model (Webasto/Truma), water system insulation, road restrictions, deposit terms. Winter departures can sell out early.",
 ctaLabel: "See options ?",
 ctaHref: "/camper-rental-finland",
 },
 {
 image: "/images/og/og-camper-helsinki-lapland.jpg",
 title: "Peer-to-peer (unique rigs, sometimes better value)",
 description:
 "Great for “owner-loved” campers that feel more like a home than a rental.\n\nDon’t skip: breakdown support, who helps if the pump/fuse fails, and cancellation rules. Better for experienced renters who can troubleshoot basics.",
 ctaLabel: "Browse rigs ?",
 ctaHref: "/camper-rental-finland",
 },
 ] as const;

 const stations = [
 {
 title: "Helsinki",
 href: "/camper-rental-finland/stations/helsinki",
 image: "/images/og/og-camper-station-helsinki.jpg",
 text: "Easiest logistics. Best for first-timers, southern routes, and ferry connections.",
 },
 {
 title: "Tampere / Turku",
 href: "/camper-rental-finland/stations/tampere-turku",
 image: "/images/og/og-camper-station-tampere-turku.jpg",
 text: "Calmer pacing for west/south routing with less repositioning.",
 },
 {
 title: "Rovaniemi",
 href: "/camper-rental-finland/stations/rovaniemi",
 image: "/images/og/og-camper-station-rovaniemi.jpg",
 text: "Lapland-first trips. Winter reality required: cold, distance, fewer backup options.",
 },
 ] as const;

 const routes = [
 {
 title: "Southern lakes",
 href: "/camper-rental-finland/routes/southern-lakes",
 image: "/images/og/og-camper-southern-lakes.jpg",
 text: "Best in milder months and shoulder season. Flexible stops.",
 cta: "Explore route ?",
 },
 {
 title: "Helsinki–Lapland",
 href: "/camper-rental-finland/routes/helsinki-lapland",
 image: "/images/og/og-camper-helsinki-lapland.jpg",
 text: "For committed road-trip travellers who respect winter constraints (darkness, distance, buffers).",
 cta: "Explore route ?",
 },
 {
 title: "Coastal",
 href: "/camper-rental-finland/routes/coastal",
 image: "/images/og/og-camper-coastal.jpg",
 text: "Scenery + simpler logistics in warmer months.",
 cta: "Explore route ?",
 },
 ] as const;

 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Camper rental in Finland, with the winter realities included."
 subtitle="Start with booking paths. Then choose stations and routes that match your season and comfort level."
 imageSrc="/images/hero/hero-camper-coastal-road.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Compare camper options" }}
 secondaryCta={{ href: "/rental-terms-prices", label: "Open terms checklist" }}
 />

 {/* Intro (keep short, PageHero already does the heavy lifting) */}
 <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper rental / Finland
 </p>

 <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
 Don’t wake up in an icebox.
 </h2>

 <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-3xl">
 Winter camping is heating + insulation + support. Pick your booking path first, then match
 your station and route to the season you’re travelling in.
 </p>

 <div className="mt-8">
 <CtaButton href="/camper-rental-finland" variant="primary">
 Compare camper options
 </CtaButton>
 </div>
 </section>

 {/* Booking paths FIRST */}
 <Section>
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
 Where to book? (3 options)
 </h2>

 <p className="mt-3 text-sm text-brand-text/70 max-w-3xl">
 No fluff: Finland is big, winter is serious, and tiny policy details decide whether your trip is
 smooth or expensive. These are the three booking paths that cover the real market.
 </p>

 <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card
 className="flex flex-col"
 image={partnerCards[0].image}
 title={partnerCards[0].title}
 description={partnerCards[0].description}
 ctaLabel={partnerCards[0].ctaLabel}
 ctaHref={partnerCards[0].ctaHref}
 />
 <Card
 className="flex flex-col"
 image={partnerCards[1].image}
 title={partnerCards[1].title}
 description={partnerCards[1].description}
 ctaLabel={partnerCards[1].ctaLabel}
 ctaHref={partnerCards[1].ctaHref}
 />
 <Card
 className="flex flex-col md:col-span-2"
 image={partnerCards[2].image}
 title={partnerCards[2].title}
 description={partnerCards[2].description}
 ctaLabel={partnerCards[2].ctaLabel}
 ctaHref={partnerCards[2].ctaHref}
 />
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="flex flex-col">
 <h3 className="text-lg font-semibold">The -20°C sanity check (ask before you pay)</h3>

 <p className="mt-3 text-sm text-brand-text/70">
 If the listing can’t answer these clearly, you’re looking at a summer van with winter marketing.
 </p>

 <ul className="mt-4 space-y-2 text-sm text-brand-text/70 list-disc pl-5">
 <li>
 <strong>Secondary heater:</strong> Webasto / Truma (what exactly?)
 </li>
 <li>
 <strong>Insulated water system:</strong> tanks + pipes (not just “winter ready”)
 </li>
 <li>
 <strong>Off-grid heating:</strong> how long can you run heating without hookups?
 </li>
 <li>
 <strong>Mileage:</strong> Finland is big. A tiny daily cap breaks your route.
 </li>
 </ul>

 <p className="mt-4 text-sm text-brand-text/70">
 Before you pay: winter package details, mileage limits, deposit rules, and what’s actually included in insurance.
 </p>
 </Card>

 <Card className="flex flex-col">
 <h3 className="text-lg font-semibold">Terms that trip people up</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Most “surprises” are just terms you didn’t read. Here’s the short checklist that catches the expensive ones.
 </p>
 <div className="mt-auto pt-4">
 <Link href="/rental-terms-prices" className="text-sm font-semibold hover:underline">
 Open Rental Terms &amp; Prices ?
 </Link>
 </div>
 </Card>
 </div>
 </Section>

 {/* Stations + routes */}
 <Section className="bg-brand-bluegray">
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
 Stations: where to start
 </h2>

 <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
 {stations.map((s) => (<Card
 key={s.title}
 image={s.image}
 title={s.title}
 description={s.text}
 ctaLabel="See station options ?"
 ctaHref={s.href}
 />))}
 </div>

 <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight">
 Routes: pick what your season can handle
 </h2>

 <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-3">
 {routes.map((r) => (<Card
 key={r.title}
 image={r.image}
 title={r.title}
 description={r.text}
 ctaLabel={r.cta}
 ctaHref={r.href}
 />))}
 </div>
 </Section>
 </div>);
}

