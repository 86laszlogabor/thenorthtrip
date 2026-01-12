import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
 description:
 "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
 openGraph: {
 title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
 description:
 "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
 images: ["/images/og/og-helsinki-ferry-cruise.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
 description:
 "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
 images: ["/images/og/og-helsinki-ferry-cruise.jpg"],
 },
};

const checks = [
 {
 title: "Check-in cutoff is the real deadline",
 body: "Treat check-in as the deadline, not the departure time. If you miss check-in, the sailing time doesn’t matter.",
 icon: "??",
 },
 {
 title: "Vehicle category rules can force rebooking",
 body: "Some tickets assume a vehicle class. If your rental category doesn’t match, fees or rebooking can happen at the terminal.",
 icon: "??",
 },
 {
 title: "Flexibility matters more than a perfect time",
 body: "If pickup slips, you don’t want the ferry ticket to become a punishment. Prefer options that don’t cascade into a total loss.",
 icon: "??",
 },
 {
 title: "Same-day pickup + ferry is a fragile combo",
 body: "Airport desk queues eat buffer. Don’t schedule the ferry on your tightest day.",
 icon: "?????",
 },
 {
 title: "Know your fallback before you commit",
 body: "If you miss it: know the next feasible option in your plan before you pay.",
 icon: "??",
 },
] as const;

const decisionRows = [
 {
 scenario: "Same day pickup + ferry",
 betterMove: "Don’t make it tight",
 why: "Queues and delays are normal",
 },
 {
 scenario: "Uncertain arrival time",
 betterMove: "Flexible ticket or later sailing",
 why: "Reduces cascading losses",
 },
 {
 scenario: "Car mainly for the city",
 betterMove: "Transit + ferry",
 why: "Less operational risk",
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

export default function HelsinkiFerryCruisePage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Rental + ferry: timing rules are the real boss."
 subtitle="Most ferry failures are predictable: check-in cutoffs, vehicle rules, and schedules that have zero tolerance for delay."
 imageSrc="/images/hero/hero-helsinki-ferry.jpg"
 primaryCta={{ href: "/car-rental-helsinki", label: "Back to car rental" }}
 secondaryCta={{ href: "/helsinki/airport-transfers", label: "Airport pickup reality" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Helsinki / Ferry &amp; cruise
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Plan the buffer first. Book second.
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 The point is not “perfect timing”. The point is a plan that still works if the desk is slow,
 the queue is long, or your arrival shifts.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">Check-in is the deadline</Pill>
 <Pill icon="??">Vehicle class matters</Pill>
 <Pill icon="??">Queues eat buffer</Pill>
 </div>

 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {checks.map((c) => (<Card key={c.title} className="p-6">
 <div className="flex items-start gap-3">
 <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
 <span aria-hidden="true">{c.icon}</span>
 </div>
 <div>
 <h3 className="text-lg font-semibold">{c.title}</h3>
 <p className="mt-2 text-sm text-brand-text/70">{c.body}</p>
 </div>
 </div>
 </Card>))}
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-lg font-semibold">Decision table</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Simple defaults that prevent the usual “we were five minutes late” disaster.
 </p>

 <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
 <table className="w-full text-sm bg-white">
 <thead>
 <tr className="text-left text-brand-text/70 border-b border-slate-200">
 <th className="py-3 px-4">Scenario</th>
 <th className="py-3 px-4">Better move</th>
 <th className="py-3 px-4">Why</th>
 </tr>
 </thead>
 <tbody className="text-brand-text/70">
 {decisionRows.map((r) => (<tr key={r.scenario} className="border-b border-slate-200 last:border-b-0">
 <td className="py-3 px-4 font-medium">{r.scenario}</td>
 <td className="py-3 px-4">{r.betterMove}</td>
 <td className="py-3 px-4">{r.why}</td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </Card>

 <Card className="flex flex-col p-6 bg-slate-50">
 <h3 className="text-lg font-semibold">Useful next pages</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Keep it practical: confirm rules, then choose the least fragile chain.
 </p>

 <div className="mt-5 grid gap-3 text-sm">
 <Link
 href="/rental-terms-prices"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>Rental terms that bite</span>
 <span aria-hidden="true">?</span>
 </Link>
 <Link
 href="/offer-checklist"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>Offer checklist</span>
 <span aria-hidden="true">?</span>
 </Link>
 <Link
 href="/helsinki/city-mobility"
 className="inline-flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-900 hover:bg-slate-50"
 >
 <span>Helsinki: car vs transit</span>
 <span aria-hidden="true">?</span>
 </Link>
 </div>

 <div className="mt-auto pt-6 grid gap-3">
 <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
 Back to car rental
 </CtaButton>
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get help
 </CtaButton>
 </div>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}

