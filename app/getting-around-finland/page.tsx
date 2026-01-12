import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Link from "next/link";

export const metadata = {
 title: "Getting Around Finland | TheNorthTrip",
 description:
 "How to get around Finland without getting screwed: pick by failure risk (desk rules, timing, winter buffers), then route into the right decision page.",
 openGraph: {
 title: "Getting Around Finland | TheNorthTrip",
 description:
 "How to get around Finland without getting screwed: pick by failure risk (desk rules, timing, winter buffers), then route into the right decision page.",
 images: ["/images/og/og-helsinki-city-mobility.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Getting Around Finland | TheNorthTrip",
 description:
 "How to get around Finland without getting screwed: pick by failure risk (desk rules, timing, winter buffers), then route into the right decision page.",
 images: ["/images/og/og-helsinki-city-mobility.jpg"],
 },
};

export default function GettingAroundFinlandPage() {
 const modes = [
 {
 image: "/images/og/og-helsinki-city-mobility.jpg",
 title: "Helsinki city only?",
 description:
 "Tram/metro beats a rental for most city plans. Parking and timing quietly drain money.",
 href: "/helsinki/city-mobility",
 cta: "See Helsinki transit ?",
 },
 {
 image: "/images/og/og-helsinki-airport-transfers.jpg",
 title: "Late arrival?",
 description:
 "Last services won’t wait for a delayed flight. Have a transfer plan that survives reality.",
 href: "/helsinki/airport-transfers",
 cta: "Airport transfers ?",
 },
 {
 image: "/images/og/og-default.jpg",
 title: "Car needed?",
 description:
 "Only once you leave city limits. Desk rules (card holds, hours, deposits) kill plans.",
 href: "/car-rental-helsinki",
 cta: "Car rental details ?",
 highlighted: true,
 },
 {
 image: "/images/og/og-lapland-rovaniemi.jpg",
 title: "Lapland in winter?",
 description:
 "Tours often beat driving in -20°C darkness. Less risk, fewer “we’re stranded” stories.",
 href: "/lapland-tours",
 cta: "Lapland tours checklist ?",
 },
 {
 image: "/images/og/og-camper-coastal.jpg",
 title: "Camper?",
 description:
 "Summer is easy. Winter is a heating + insulation exam. Don’t book by vibes.",
 href: "/camper-rental-finland",
 cta: "Camper winter reality ?",
 },
 {
 image: "/images/og/og-helsinki-ferry-cruise.jpg",
 title: "Ferries + vehicles",
 description:
 "Check-in cutoffs are operator-specific and vary by route. For example, Viking Line typically requires vehicles to check in around 60 minutes before departure. Always verify your specific sailing before you go.",
 href: "/helsinki/ferry-cruise",
 cta: "Check ferry timing ?",
 },
 ] as const;

 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="How to get around Finland without getting screwed"
 subtitle="Finland travel usually fails quietly: desk rules, timing, winter buffers. Choose your mode by failure risk, not vibes."
 imageSrc="/images/hero/hero-helsinki-tram.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Full transport checklist" }}
 secondaryCta={{ href: "/rental-terms-prices", label: "Rental terms that bite" }}
 />

 <Section>
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
 Pick by failure risk, not vibes
 </h2>

 <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
 Finland trips die from small assumptions: desk rules, timing, winter buffers, and missed last services.
 This page is a routing. Click the decision that matches your plan, then verify the boring details that break trips.
 </p>

 <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {modes.map((m) => (<Card
 key={m.title}
 image={m.image}
 title={m.title}
 description={m.description}
 ctaLabel={m.cta}
 ctaHref={m.href}
 highlighted={(m as any).highlighted}
 />))}
 </div>

 {/* “Before you pay” + table to break the catalog rhythm */}
 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card>
 <h3 className="text-lg font-semibold">Before you pay</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Desk hours. Card holds. Last service timing. Cancellation cutoffs. This is the boring stuff that costs money.
 </p>

 <div className="mt-4 flex flex-col gap-2">
 <Link href="/offer-checklist" className="text-sm font-semibold hover:underline">
 Full transport checklist ?
 </Link>
 <Link href="/rental-terms-prices" className="text-sm font-semibold hover:underline">
 Rental terms that bite ?
 </Link>
 </div>

 <p className="mt-4 text-sm text-brand-text/70">
 If one unchecked detail would cascade into a missed pickup, a cancelled tour, or a broken day: pause and verify.
 </p>
 </Card>

 <Card>
 <h3 className="text-lg font-semibold">Quick decision table</h3>

 <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
 <table className="w-full text-sm">
 <thead className="bg-slate-50">
 <tr className="text-left">
 <th className="p-3 font-semibold">Your plan</th>
 <th className="p-3 font-semibold">Best mode</th>
 <th className="p-3 font-semibold">What breaks trips</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-t">
 <td className="p-3">Helsinki city</td>
 <td className="p-3">Tram/Metro</td>
 <td className="p-3">Parking + time sinks</td>
 </tr>
 <tr className="border-t">
 <td className="p-3">Late arrival</td>
 <td className="p-3">Transfer plan</td>
 <td className="p-3">Last connection disappears</td>
 </tr>
 <tr className="border-t">
 <td className="p-3">Lapland winter</td>
 <td className="p-3">Tours</td>
 <td className="p-3">Driving dark + buffers</td>
 </tr>
 <tr className="border-t">
 <td className="p-3">Road trip (summer)</td>
 <td className="p-3">Car/Camper</td>
 <td className="p-3">Desk rules + mileage caps</td>
 </tr>
 <tr className="border-t">
 <td className="p-3">Ferries + car</td>
 <td className="p-3">Ferry + car</td>
 <td className="p-3">Check-in cutoff</td>
 </tr>
 </tbody>
 </table>
 </div>

 <p className="mt-4 text-sm text-brand-text/70">
 If your plan includes a ferry: treat check-in like a hard deadline. Miss it and the schedule doesn’t “adapt”.
 </p>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
 </Section>
 </div>);
}

