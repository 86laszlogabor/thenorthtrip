import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata = {
 title: "Get Help | TheNorthTrip",
 description:
 "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
 openGraph: {
 title: "Get Help | TheNorthTrip",
 description:
 "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
 images: ["/images/og/og-get-help.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Get Help | TheNorthTrip",
 description:
 "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
 images: ["/images/og/og-get-help.jpg"],
 },
};

type Service = {
 title: string;
 subtitle: string;
 bullets: string[];
 note: string;
 icon: string;
 mailSubject: string;
 mailBody: string;
 cta: string;
};

function mailto(subject: string, body: string) {
 const s = encodeURIComponent(subject);
 const b = encodeURIComponent(body);
 return `mailto:hello@thenorthtrip.com?subject=${s}&body=${b}`;
}

const services: Service[] = [
 {
 title: "Plan Stress-Test",
 subtitle:
 "You already have an itinerary. You want fewer brittle assumptions.",
 bullets: [
 "Connection chain review (last services, buffers, day-one overload)",
 "Winter realism checks (pace, daylight, recovery margin)",
 "5 provider questions to confirm in writing",
 ],
 note:
 "No promises. Just risk-based pruning and verification prompts.",
 icon: "??",
 mailSubject: "TheNorthTrip – Plan Stress-Test",
 mailBody:
 "Hi TheNorthTrip,\n\nI’d like a Plan Stress-Test.\n\nLinks / itinerary:\n- \n\nConstraints:\n- Dates:\n- Budget range:\n- Winter comfort level:\n- Must-do items:\n\nQuestions / concerns:\n- \n\nThanks,",
 cta: "Get a stress-test ?",
 },
 {
 title: "Rental Check",
 subtitle:
 "You’re booking a rental. You want to avoid deposit/card/timing surprises.",
 bullets: [
 "Deposit + card rule risk review (debit/credit, cardholder rules)",
 "Pickup/return timing risks (desk hours, late arrival handling)",
 "Short “confirm in writing” script tailored to your booking",
 ],
 note:
 "Desk rules override aggregator summaries. We structure confirmations accordingly.",
 icon: "??",
 mailSubject: "TheNorthTrip – Rental & Payment Check",
 mailBody:
 "Hi TheNorthTrip,\n\nI’d like a Rental & Payment Check.\n\nBooking links (provider + confirmation if available):\n- \n\nPickup details:\n- Location:\n- Date/time:\n- Flight (if applicable):\n\nPayment situation:\n- Debit/credit:\n- Backup card available? (yes/no)\n\nMain worry:\n- \n\nThanks,",
 cta: "Check my booking ?",
 },
 {
 title: "Decision Routing",
 subtitle:
 "You’re unsure which transport chain fits your tolerance and constraints.",
 bullets: [
 "Mode tradeoff summary (train/bus/flight/rental) based on your plan",
 "Least-fragile chain recommendation (not maximum activity density)",
 "Fallback plan: what to do if one segment fails",
 ],
 note:
 "We optimize for fragility reduction, not maximum activity density.",
 icon: "??",
 mailSubject: "TheNorthTrip – Decision Routing Help",
 mailBody:
 "Hi TheNorthTrip,\n\nI’d like help choosing the least-fragile transport chain.\n\nPlan:\n- Start city:\n- End city:\n- Dates:\n- Fixed bookings (if any):\n\nConstraints:\n- Budget:\n- Winter comfort:\n- Must-do items:\n\nWhat I’m deciding between:\n- \n\nThanks,",
 cta: "Help me choose ?",
 },
];

function ChecklistLine({ children }: { children: React.ReactNode }) {
 return (<li className="flex gap-2">
 <span className="mt-[2px] text-sm" aria-hidden="true">
 ?
 </span>
 <span>{children}</span>
 </li>);
}

export default function GetHelpPage() {
 const defaultMail = mailto("TheNorthTrip – Help Request",
 "Hi TheNorthTrip,\n\nI’d like a risk-based review before I pay.\n\nLinks / bookings:\n- \n\nConstraints:\n- Dates:\n- Budget:\n- Winter comfort level:\n- Must-do items:\n\nWhat feels fragile:\n- \n\nThanks,");

 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Get help: calm, risk-based review before you pay."
 subtitle="We don’t promise outcomes. We reduce brittle assumptions: deposits, timing constraints, winter fragility, and desk-level rules."
 imageSrc="/images/hero/hero-get-help.jpg"
 primaryCta={{
 href: defaultMail,
 label: "Email us (hello@thenorthtrip.com)",
 }}
 secondaryCta={{
 href: "/offer-checklist",
 label: "Start with the checklist",
 }}
 />

 <Section>
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
 What we do here
 </h2>
 <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
 Finland trips don’t usually fail loudly. They fail quietly: desk rules, timing gaps, winter buffers,
 and assumptions that don’t survive contact with reality. If you want a calm review before you pay,
 pick one of the options below.
 </p>

 {/* services */}
 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
 {services.map((s) => (<Card key={s.title} className="flex flex-col p-6">
 <div className="flex items-start gap-3">
 <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-slate-50">
 <span className="text-lg" aria-hidden="true">
 {s.icon}
 </span>
 </div>
 <div className="min-w-0">
 <h3 className="text-lg font-semibold text-slate-900">
 {s.title}
 </h3>
 <p className="mt-1 text-sm text-brand-text/70">
 {s.subtitle}
 </p>
 </div>
 </div>

 <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
 <p className="text-xs font-semibold text-slate-900">
 What you get
 </p>
 <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
 {s.bullets.map((b) => (<ChecklistLine key={b}>{b}</ChecklistLine>))}
 </ul>
 </div>

 <p className="mt-4 text-xs text-brand-text/60">{s.note}</p>

 <div className="mt-auto pt-5">
 <CtaButton
 href={mailto(s.mailSubject, s.mailBody)}
 variant="success"
 className="w-full"
 >
 {s.cta}
 </CtaButton>
 </div>
 </Card>))}
 </div>

 {/* how it works + boundaries */}
 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="p-6 bg-slate-50">
 <h3 className="text-lg font-semibold text-slate-900">
 How to request help (fast)
 </h3>

 <ol className="mt-3 list-decimal pl-5 text-sm text-brand-text/70 space-y-2">
 <li>Paste links (itinerary, bookings, provider pages).</li>
 <li>State constraints: dates, budget, winter comfort level.</li>
 <li>We reply with a structured risk review + copy-paste questions to confirm in writing.</li>
 </ol>

 <div className="mt-5 flex flex-col sm:flex-row gap-3">
 <CtaButton href={defaultMail} variant="primary" className="w-full sm:w-auto">
 Email now
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline" className="w-full sm:w-auto">
 Open checklist
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <h3 className="text-lg font-semibold text-slate-900">
 What this is (and isn’t)
 </h3>

 <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
 <ChecklistLine>
 We don’t guarantee outcomes (weather, operators, availability).
 </ChecklistLine>
 <ChecklistLine>
 We focus on verification and fragility reduction.
 </ChecklistLine>
 <ChecklistLine>
 If a rule matters, you confirm it in writing with the enforcing provider.
 </ChecklistLine>
 </ul>

 <div className="mt-5">
 <Link href="/policy" className="text-sm font-semibold hover:underline">
 Read the policy ?
 </Link>
 </div>
 </Card>
 </div>

 <p className="mt-6 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}

