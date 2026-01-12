import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Helsinki Restaurants Planning | TheNorthTrip",
 description:
 "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
 openGraph: {
 title: "Helsinki Restaurants Planning | TheNorthTrip",
 description:
 "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
 images: ["/images/og/og-helsinki-restaurants.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Helsinki Restaurants Planning | TheNorthTrip",
 description:
 "Restaurant planning that survives peak hours: timing, location, and parking reality if you’re driving.",
 images: ["/images/og/og-helsinki-restaurants.jpg"],
 },
};

const model = [
 {
 title: "Pick one anchor meal",
 body:
 "Lunch or dinner is the anchor. Lock that first, then route the rest of the day around it.",
 icon: "???",
 },
 {
 title: "Avoid the collision window",
 body:
 "Sightseeing end time + sauna slot + dinner peak hour is how a “nice day” turns into stress shopping.",
 icon: "??",
 },
 {
 title: "If you drive, plan for parking",
 body:
 "Driving changes the evening. Parking availability decides if dinner is smooth or a loop around the block.",
 icon: "??",
 },
] as const;

const decisionRows = [
 {
 day: "City-only walking day",
 better: "Reserve or go earlier",
 why: "Cuts queue roulette",
 },
 {
 day: "Car day",
 better: "Pick a parking-friendly plan",
 why: "Avoids end-of-day meltdown",
 },
 {
 day: "Sauna + dinner",
 better: "Dinner after a buffer",
 why: "Timing is never perfect",
 },
] as const;

function Pill({
 icon,
 children,
}: {
 icon: string;
 children: React.ReactNode;
}) {
 return (<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
 <span aria-hidden="true">{icon}</span>
 <span>{children}</span>
 </div>);
}

export default function HelsinkiRestaurantsPage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Helsinki restaurants: plan timing first, not just taste."
 subtitle="The hidden cost is friction: peak hours, queues, and parking. Build a plan that stays intact."
 imageSrc="/images/hero/hero-helsinki-restaurants.jpg"
 primaryCta={{ href: "/helsinki/sightseeing", label: "Sightseeing Bases" }}
 secondaryCta={{ href: "/helsinki/sauna", label: "Sauna routing" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Helsinki / Restaurants
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 A simple planning model that actually survives real life
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 The goal isn’t “the best restaurant”. The goal is a day that doesn’t
 collapse at 18:30 because everything hits at once.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="???">Anchor meal first</Pill>
 <Pill icon="??">Avoid peak collisions</Pill>
 <Pill icon="??">Parking decides evenings</Pill>
 </div>

 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {model.map((m) => (<Card key={m.title} className="p-6">
 <div className="flex items-start gap-3">
 <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
 <span aria-hidden="true">{m.icon}</span>
 </div>
 <div>
 <h3 className="text-lg font-semibold">{m.title}</h3>
 <p className="mt-2 text-sm text-brand-text/70">{m.body}</p>
 </div>
 </div>
 </Card>))}
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-lg font-semibold">Decision table</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 The boring defaults that prevent the usual end-of-day chaos.
 </p>

 <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
 <table className="w-full text-sm bg-white">
 <thead>
 <tr className="text-left text-brand-text/70 border-b border-slate-200">
 <th className="py-3 px-4">Your day</th>
 <th className="py-3 px-4">Better move</th>
 <th className="py-3 px-4">Why</th>
 </tr>
 </thead>
 <tbody className="text-brand-text/70">
 {decisionRows.map((r) => (<tr
 key={r.day}
 className="border-b border-slate-200 last:border-b-0"
 >
 <td className="py-3 px-4 font-medium">{r.day}</td>
 <td className="py-3 px-4">{r.better}</td>
 <td className="py-3 px-4">{r.why}</td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </Card>

 <Card className="flex flex-col p-6 bg-slate-50">
 <h3 className="text-lg font-semibold">Useful next steps</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Keep it practical: choose the least fragile chain, then lock the details.
 </p>

 <div className="mt-5 grid gap-3 text-sm">
 <Link
 href="/helsinki/city-mobility"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>City mobility checklist</span>
 <span aria-hidden="true">?</span>
 </Link>
 <Link
 href="/car-rental-helsinki"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>Car rental planning</span>
 <span aria-hidden="true">?</span>
 </Link>
 <Link
 href="/rental-terms-prices"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>Rental terms that bite</span>
 <span aria-hidden="true">?</span>
 </Link>
 </div>

 <div className="mt-auto pt-6 grid gap-3">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get help
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline" className="w-full">
 Offer checklist
 </CtaButton>
 </div>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}


