import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
 title: "Rovaniemi Camper Station | Lapland | TheNorthTrip",
 description:
 "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
 openGraph: {
 title: "Rovaniemi Camper Station | TheNorthTrip",
 description:
 "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
 images: ["/images/og/og-lapland-rovaniemi.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Rovaniemi Camper Station | TheNorthTrip",
 description:
 "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
 images: ["/images/og/og-lapland-rovaniemi.jpg"],
 },
};

const checks = [
 {
 title: "Winter readiness",
 body: "Confirm heating/insulation support in writing. “Probably fine” is not a spec.",
 icon: "??",
 },
 {
 title: "Handover buffer",
 body: "You still need time for walkthrough + paperwork. Don’t schedule tight slots.",
 icon: "??",
 },
 {
 title: "Overnight certainty",
 body: "Plan the first night early. Fatigue + darkness makes improvisation expensive.",
 icon: "???",
 },
 {
 title: "Route realism",
 body: "Distances are bigger in Lapland. Build days that survive slower pace.",
 icon: "??",
 },
] as const;

const nextSteps = [
 {
 label: "Helsinki–Lapland route",
 href: "/camper-rental-finland/routes/helsinki-lapland",
 note: "Distance caps + winter buffers. Make the plan recoverable.",
 icon: "??",
 },
 {
 label: "Rovaniemi tours ",
 href: "/lapland-tours/rovaniemi",
 note: "If your trip depends on tours, route timing first and avoid tight chains.",
 icon: "??",
 },
 {
 label: "Lapland tours ",
 href: "/lapland-tours",
 note: "Compare options, then verify the few rules that can break your day.",
 icon: "???",
 },
 {
 label: "Offer checklist",
 href: "/offer-checklist",
 note: "Use it before you pay. It prevents desk-level surprises.",
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

export default function CamperStationRovaniemiPage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Rovaniemi camper station: winter rules decide everything."
 subtitle="Make the plan recoverable: winter specs in writing, handover buffer, and short first-day targets."
 imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
 secondaryCta={{ href: "/lapland-tours", label: "Lapland tours " }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Camper / Stations / Rovaniemi
 </p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Treat pickup as a winter-critical step
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 In Lapland, “minor uncertainty” compounds fast. Winter rules, handover friction, and first-night planning
 decide whether the trip starts calm or starts bleeding time.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <Pill icon="??">Winter specs</Pill>
 <Pill icon="??">Handover buffer</Pill>
 <Pill icon="???">First night planned</Pill>
 <Pill icon="??">Short targets</Pill>
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
 Winter + camper + uncertainty is how trips break. Escalate early and get the rule in writing.
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
 Pick what matches your actual next move, not what sounds “nice”.
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
 <CtaButton href="/lapland-tours" variant="outline" className="w-full">
 Lapland tours 
 </CtaButton>
 <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
 Back to camper rentals
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Assuming the first night will be “easy to find”. In Lapland, certainty wins.
 </p>

 <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">Simple rule</div>
 <p className="mt-2 text-sm text-brand-text/70">
 If you’re leaving pickup without a confirmed overnight plan, you’re already spending tomorrow’s buffer.
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

