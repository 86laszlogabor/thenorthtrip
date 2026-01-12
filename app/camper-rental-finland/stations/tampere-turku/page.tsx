import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Tampere & Turku Camper Stations | TheNorthTrip",
 description:
 "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
 openGraph: {
 title: "Tampere & Turku Camper Stations | TheNorthTrip",
 description:
 "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
 images: ["/images/og/og-finland-cities-hidden-gems.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Tampere & Turku Camper Stations | TheNorthTrip",
 description:
 "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
 images: ["/images/og/og-finland-cities-hidden-gems.jpg"],
 },
};

const checks = [
 {
 title: "Why start here",
 body: "Good if your route is south/west-focused and you want less Helsinki friction.",
 icon: "??",
 },
 {
 title: "Handover buffer",
 body: "Still expect walkthrough + paperwork. Don’t plan tight first-day routes.",
 icon: "??",
 },
 {
 title: "Return constraints",
 body: "Return time windows and cleaning rules decide your last day.",
 icon: "??",
 },
 {
 title: "Overnight certainty",
 body: "Plan night 1 before you arrive. Late improvisation is the classic failure.",
 icon: "???",
 },
] as const;

const nextSteps = [
 {
 label: "Southern lakes route",
 href: "/camper-rental-finland/routes/southern-lakes",
 note: "The ‘slow win’ route. Short days, early stops, certainty over improvisation.",
 icon: "??",
 },
 {
 label: "Coastal route",
 href: "/camper-rental-finland/routes/coastal",
 note: "Scenic, but fragile if you copy a car itinerary. Set distance caps.",
 icon: "???",
 },
 {
 label: "Terms checklist",
 href: "/rental-terms-prices",
 note: "If a rule matters, confirm it in writing before you pay.",
 icon: "?",
 },
 {
 label: "Get help",
 href: "/get-help",
 note: "Calm, risk-based review before you commit to a brittle plan.",
 icon: "??",
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

export default function CamperStationTampereTurkuPage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Tampere/Turku stations: a cleaner start for southern routes."
 subtitle="Use these stations when your route doesn’t need Helsinki. The same rules still apply: buffer and certainty."
 imageSrc="/images/hero/hero-finland-lakes.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
 secondaryCta={{
 href: "/camper-rental-finland/routes/southern-lakes",
 label: "Southern lakes route",
 }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper / Stations / Tampere–Turku
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Choose the station that reduces friction
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 Station choice is not cosmetic. It changes timing, handover friction, and how recoverable day one feels.
 The win condition is boring: buffer, certainty, and fewer assumptions.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">South/west routes</Pill>
 <Pill icon="??">Handover buffer</Pill>
 <Pill icon="???">Night 1 planned</Pill>
 <Pill icon="??">Return rules</Pill>
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
 Confirm the rules before you pay. Station differences are real and the desk enforces them.
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
 Pick the next page based on your route, not on optimism.
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

 <div className="mt-6 grid gap-3">
 <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
 Back to camper rentals
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Treating the station choice as irrelevant. It changes friction and timing.
 </p>

 <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">Simple rule</div>
 <p className="mt-2 text-sm text-brand-text/70">
 If day one depends on a tight chain, you chose a fragile start. Make it recoverable.
 </p>
 </div>

 <div className="mt-5 grid gap-3">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Open offer checklist
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

