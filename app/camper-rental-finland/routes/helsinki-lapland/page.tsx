import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Helsinki to Lapland by Camper | Route Planning | TheNorthTrip",
 description:
 "Helsinki–Lapland camper route: distance reality, winter buffers, and how to keep the plan recoverable.",
 openGraph: {
 title: "Helsinki to Lapland by Camper | TheNorthTrip",
 description:
 "Helsinki–Lapland camper route: distance reality, winter buffers, and how to keep the plan recoverable.",
 images: ["/images/og/og-camper-helsinki-lapland.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Helsinki to Lapland by Camper | TheNorthTrip",
 description:
 "Helsinki–Lapland camper route: distance reality, winter buffers, and how to keep the plan recoverable.",
 images: ["/images/og/og-camper-helsinki-lapland.jpg"],
 },
};

const checks = [
 {
 title: "Distance reality",
 body: "It’s a long route. Build days that survive fatigue, winter pace, and small delays stacking up.",
 icon: "??",
 },
 {
 title: "Winter viability",
 body: "Confirm heating/insulation and what your rental actually supports in winter. Get it in writing.",
 icon: "??",
 },
 {
 title: "Overnight certainty",
 body: "Decide overnights early. Late improvisation is where campers turn “scenic” into chaos.",
 icon: "??",
 },
 {
 title: "Return & cleaning rules",
 body: "Return windows and cleaning policies are the silent end-game. Treat them as tasks, not afterthoughts.",
 icon: "??",
 },
] as const;

const nextSteps = [
 {
 label: "Helsinki pickup station",
 href: "/camper-rental-finland/stations/helsinki",
 note: "Confirm pickup logistics and timing so day one doesn’t start with friction.",
 icon: "??",
 },
 {
 label: "Rovaniemi station",
 href: "/camper-rental-finland/stations/rovaniemi",
 note: "If your plan ends in Lapland, validate return constraints before you build the route.",
 icon: "??",
 },
 {
 label: "Lapland tours",
 href: "/lapland-tours",
 note: "If winter complexity feels high, switch part of the experience to tours instead of fragile driving days.",
 icon: "??",
 },
 {
 label: "Camper rentals",
 href: "/camper-rental-finland",
 note: "If you’re still choosing season/vehicle class, start here.",
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

export default function CamperHelsinkiLaplandRoutePage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Helsinki ? Lapland by camper: don’t plan it like a car trip."
 subtitle="You win by making the plan recoverable: distance caps, winter buffers, and guaranteed overnights."
 imageSrc="/images/hero/hero-camper-lapland.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
 secondaryCta={{ href: "/rental-terms-prices", label: "Rental terms checklist" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper / Routes / Helsinki–Lapland
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Make it calm, not heroic
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 The classic failure is pushing “one more day north” with no slack. A camper route stays enjoyable when
 the plan still works after fatigue, weather, and small timing slips.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">Set distance caps</Pill>
 <Pill icon="?">Keep buffers</Pill>
 <Pill icon="??">Lock overnights early</Pill>
 <Pill icon="??">Get winter details in writing</Pill>
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
 <h3 className="text-lg font-semibold">If winter is the plan</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Confirm winter-ready equipment in writing. “Should be fine” is not a policy, and it’s not a plan.
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
 Use these depending on where you are in the decision. No guesswork, just the next clean move.
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
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Trying to “push one more day north” with no slack. Winter doesn’t care about your ambition, and a camper
 won’t rescue a schedule built on optimism.
 </p>

 <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">Simple rule</div>
 <p className="mt-2 text-sm text-brand-text/70">
 If missing one segment collapses the whole day, reduce scope or add slack before you book anything.
 </p>
 </div>

 <div className="mt-5">
 <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
 Back to camper rentals
 </CtaButton>
 </div>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}

