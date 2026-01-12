import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Southern Lakes Camper Route | Finland | TheNorthTrip",
 description:
 "Southern lakes routing: calm pace, overnight certainty, and how to avoid “we’ll figure it out” failures.",
 openGraph: {
 title: "Southern Lakes Camper Route | TheNorthTrip",
 description:
 "Southern lakes routing: calm pace, overnight certainty, and how to avoid “we’ll figure it out” failures.",
 images: ["/images/og/og-camper-southern-lakes.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Southern Lakes Camper Route | TheNorthTrip",
 description:
 "Southern lakes routing: calm pace, overnight certainty, and how to avoid “we’ll figure it out” failures.",
 images: ["/images/og/og-camper-southern-lakes.jpg"],
 },
};

const checks = [
 {
 title: "Low-speed plan",
 body: "This route works when days are short and you stop early. Don’t turn it into a distance contest.",
 icon: "??",
 },
 {
 title: "Overnight certainty",
 body: "Decide your overnight options before you arrive tired. Late improvisation is how calm trips snap.",
 icon: "??",
 },
 {
 title: "Food + water reality",
 body: "Stock basics. Rural convenience is not constant, and your “quick stop” can become a detour.",
 icon: "??",
 },
 {
 title: "Return constraints",
 body: "Don’t schedule return like a quick car drop. Camper end-game has rules and takes time.",
 icon: "??",
 },
] as const;

const nextSteps = [
 {
 label: "Tampere / Turku stations",
 href: "/camper-rental-finland/stations/tampere-turku",
 note: "Useful if you want a southern start without forcing Helsinki into day one.",
 icon: "??",
 },
 {
 label: "Helsinki sightseeing planning",
 href: "/helsinki/sightseeing",
 note: "If you do a city day, plan it around friction, not optimism.",
 icon: "???",
 },
 {
 label: "Rental terms checklist",
 href: "/rental-terms-prices",
 note: "If one rule can break your budget or timing, confirm it before you pay.",
 icon: "??",
 },
 {
 label: "Offer checklist",
 href: "/offer-checklist",
 note: "Use it as a filter before bookings. Saves money by preventing dumb failures.",
 icon: "?",
 },
] as const;

function Pill({
 icon,
 children,
}: {
 icon: string;
 children: React.ReactNode;
}) {
 return (<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
 <span aria-hidden="true">{icon}</span>
 <span>{children}</span>
 </span>);
}

export default function CamperSouthernLakesRoutePage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Southern lakes: calm routing, if you stop pretending you can ‘wing it’."
 subtitle="This is the slow-win route. Short days, early stops, and certainty over spontaneity."
 imageSrc="/images/hero/hero-camper-lakes.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
 secondaryCta={{ href: "/rental-terms-prices", label: "Rental terms checklist" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper / Routes / Southern lakes
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Keep it slow on purpose
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 This region rewards calm pacing. The trip usually breaks when you turn a peaceful route into a checklist race:
 late arrivals, last-minute overnights, and “we’ll sort it out” decisions made while tired.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">Short days</Pill>
 <Pill icon="??">Overnight certainty</Pill>
 <Pill icon="??">Stock basics</Pill>
 <Pill icon="??">Return takes time</Pill>
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

 <Card className="flex flex-col p-6 bg-slate-50">
 <h3 className="text-lg font-semibold">If anything feels unclear</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Camper trips fail from small assumptions. If a rule matters, confirm it before you pay.
 </p>
 <div className="mt-auto pt-5">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get help
 </CtaButton>
 </div>
 </Card>
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-lg font-semibold">Next steps</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Pick what matches your situation. These are here to reduce backtracking and “oops” moments.
 </p>

 <div className="mt-5 grid gap-3">
 {nextSteps.map((x) => (<Link
 key={x.href}
 href={x.href}
 className="group inline-flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50"
 >
 <div className="flex items-start gap-3">
 <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white">
 <span aria-hidden="true">{x.icon}</span>
 </div>
 <div>
 <div className="font-semibold text-slate-900">{x.label}</div>
 <div className="mt-1 text-sm text-brand-text/70">{x.note}</div>
 </div>
 </div>
 <span
 className="mt-1 font-semibold text-slate-900/60 group-hover:text-slate-900"
 aria-hidden="true"
 >
 ?
 </span>
 </Link>))}
 </div>

 <div className="mt-6">
 <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
 Back to camper rentals
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Turning a calm route into a checklist race. The lakes route is supposed to be slower.
 </p>

 <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">Simple rule</div>
 <p className="mt-2 text-sm text-brand-text/70">
 If you’re arriving late and you still don’t know where you’ll sleep, the plan is already fragile. Fix that first.
 </p>
 </div>

 <div className="mt-5">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Open offer checklist
 </CtaButton>
 </div>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}

