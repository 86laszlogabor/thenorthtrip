import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Coastal Camper Route | Finland | TheNorthTrip",
 description:
 "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
 openGraph: {
 title: "Coastal Camper Route | TheNorthTrip",
 description:
 "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
 images: ["/images/og/og-camper-coastal.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Coastal Camper Route | TheNorthTrip",
 description:
 "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
 images: ["/images/og/og-camper-coastal.jpg"],
 },
};

const checks = [
 {
 title: "Daily distance cap",
 body: "Pick a max daily distance and protect it. Camper pace is slower than car optimism.",
 icon: "??",
 },
 {
 title: "Overnight plan",
 body: "Decide your overnight options before you arrive tired. Late improvisation is where routes die.",
 icon: "??",
 },
 {
 title: "Weather buffers",
 body: "Wind and rain change the day’s effort. Build slack so the plan stays calm.",
 icon: "???",
 },
 {
 title: "Return constraints",
 body: "Return time and cleaning rules are real. Don’t schedule them like a quick car drop.",
 icon: "??",
 },
] as const;

const quickMoves = [
 {
 label: "Back to camper rentals",
 href: "/camper-rental-finland",
 note: "Start here if you’re still choosing season, vehicle, and pickup logic.",
 icon: "??",
 },
 {
 label: "Rental terms checklist",
 href: "/rental-terms-prices",
 note: "Use this when you’re comparing conditions, not marketing claims.",
 icon: "??",
 },
 {
 label: "Offer checklist",
 href: "/offer-checklist",
 note: "Best before payment. Stops “quiet failures” early.",
 icon: "?",
 },
 {
 label: "Getting around Finland",
 href: "/getting-around-finland",
 note: "If you’re still unsure whether camper is the right mode for this trip style.",
 icon: "???",
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

export default function CamperCoastalRoutePage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Coastal route: scenic, but don’t turn it into a fragile schedule."
 subtitle="Camper trips collapse when you copy a car itinerary. Set distance caps and plan overnights like an adult."
 imageSrc="/images/hero/hero-camper-coastal.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
 secondaryCta={{ href: "/rental-terms-prices", label: "Rental terms checklist" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper / Routes / Coastal
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 The coastal plan that survives real life
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 This route style works when you stop pretending a camper behaves like a car. Keep days short, pick overnights
 early, and don’t schedule the return like it’s a two-minute handoff.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">Set caps</Pill>
 <Pill icon="???">Plan nights early</Pill>
 <Pill icon="?">Keep slack</Pill>
 <Pill icon="??">Treat returns as tasks</Pill>
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
 Camper logistics have a talent for turning small rules into expensive problems. Escalate early instead of
 “hoping it’s fine”.
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
 <h3 className="text-lg font-semibold">Quick routing</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Use these as “next steps” depending on where you are in the decision.
 </p>

 <div className="mt-5 grid gap-3">
 {quickMoves.map((x) => (<Link
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
 <span className="mt-1 font-semibold text-slate-900/60 group-hover:text-slate-900" aria-hidden="true">
 ?
 </span>
 </Link>))}
 </div>
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Adding “one more stop” because it looks close. Camper friction is cumulative, and the cost shows up later:
 tired decisions, late arrivals, messy returns.
 </p>

 <div className="mt-5 grid gap-3">
 <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">Simple rule</div>
 <p className="mt-2 text-sm text-brand-text/70">
 If the day only works when everything is on-time, it’s not a camper day. Reduce scope or add slack.
 </p>
 </div>

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

