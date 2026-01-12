import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";
import {
 ShieldCheck,
 Compass,
 MapPinned,
 Bus,
 Clock,
 Snowflake,
 Sparkles,
 BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
 title: "Inari Tours | Lapland | TheNorthTrip",
 description:
 "Inari base decisions: Sámi culture access, quieter routing, and the buffers that keep remote logistics from breaking.",
 openGraph: {
 title: "Inari Tours | TheNorthTrip",
 description:
 "Inari base decisions: Sámi culture access, quieter routing, and the buffers that keep remote logistics from breaking.",
 images: ["/images/og/og-lapland-inari.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Inari Tours | TheNorthTrip",
 description:
 "Inari base decisions: Sámi culture access, quieter routing, and the buffers that keep remote logistics from breaking.",
 images: ["/images/og/og-lapland-inari.jpg"],
 },
};

type Point = {
 title: string;
 body: string;
 icon: React.ReactNode;
};

const points: Point[] = [
 {
 title: "Culture access is real (plan it as an anchor)",
 body:
 "Inari is one of the strongest bases for Sámi culture access. Treat it like an anchor day, not an add-on you’ll squeeze in “if there’s time”.",
 icon: <BookOpen className="h-5 w-5" aria-hidden="true" />,
 },
 {
 title: "Quiet base, fewer instant fallbacks",
 body:
 "This is not a busy where you can miss something and effortlessly swap to the next option. The upside is calm. The cost is recovery friction.",
 icon: <Compass className="h-5 w-5" aria-hidden="true" />,
 },
 {
 title: "Transport is a decision, not a detail",
 body:
 "Before you book anything, decide how you’ll move between points (and what you’ll do if one link fails). Don’t assume it behaves like a city day.",
 icon: <Bus className="h-5 w-5" aria-hidden="true" />,
 },
 {
 title: "Winter multiplies timing risk",
 body:
 "Short daylight, weather variance, and fatigue amplify small mistakes. In winter: fewer moves per day, more buffer between them.",
 icon: <Snowflake className="h-5 w-5" aria-hidden="true" />,
 },
];

const checks = [
 {
 title: "Pick one anchor per day",
 body: "One big activity or commitment per day is the stable version of Inari. Stack less, enjoy more.",
 icon: <MapPinned className="h-5 w-5" aria-hidden="true" />,
 },
 {
 title: "Assume friction in every transfer",
 body: "Walking, waiting, gear, check-in rules. If a plan only works with perfect timing, it’s already broken.",
 icon: <Clock className="h-5 w-5" aria-hidden="true" />,
 },
 {
 title: "Write it down (the rules that matter)",
 body: "If something would ruin the trip if denied (timing, eligibility, gear, pickup rules), get it confirmed in writing by the enforcing provider.",
 icon: <ShieldCheck className="h-5 w-5" aria-hidden="true" />,
 },
];

export default function InariHubPage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Inari: quiet Lapland where planning actually pays you back."
 subtitle="A calmer base with real culture access. The tradeoff: fewer instant recovery options, so buffers matter more."
 imageSrc="/images/hero/hero-lapland-inari.jpg"
 primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
 secondaryCta={{ href: "/lapland-tours", label: "Back to tours " }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">
 Lapland / Inari
 </p>

 {/* Human-verified promise (without “AI words”) */}
 <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
 <div className="flex items-start gap-3">
 <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-text/80" aria-hidden="true" />
 <div>
 <p className="text-sm font-semibold text-brand-text/90">
 Human-reviewed, decision-first.
 </p>
 <p className="mt-1 text-sm text-brand-text/70">
 Every page is reviewed end-to-end to remove guessy claims and keep the advice usable at desk-level.
 Providers enforce rules, not summaries, so we focus on what you can confirm and what breaks first.
 </p>
 </div>
 </div>
 </div>

 <h2 className="mt-8 text-2xl md:text-4xl font-semibold tracking-tight">
 The Inari decision points
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 Inari works best when you build for stability: fewer moves per day, one anchor, and buffer that survives winter timing.
 </p>

 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {points.map((p) => (<Card key={p.title}>
 <div className="flex items-start gap-3">
 <div className="mt-0.5 text-brand-text/80">{p.icon}</div>
 <div>
 <h3 className="text-lg font-semibold">{p.title}</h3>
 <p className="mt-3 text-sm text-brand-text/70">{p.body}</p>
 </div>
 </div>
 </Card>))}

 <Card className="flex flex-col">
 <div className="flex items-start gap-3">
 <div className="mt-0.5 text-brand-text/80">
 <Sparkles className="h-5 w-5" aria-hidden="true" />
 </div>
 <div>
 <h3 className="text-lg font-semibold">Safe booking path</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 1 anchor activity ? 1 flexible day ? 1 buffer night.
 That’s the version of Inari that stays recoverable.
 </p>
 </div>
 </div>

 <div className="mt-auto pt-5">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get Help
 </CtaButton>
 </div>
 </Card>
 </div>

 <h3 className="mt-10 text-xl md:text-2xl font-semibold tracking-tight">
 What to verify before you commit
 </h3>

 <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {checks.map((c) => (<Card key={c.title}>
 <div className="flex items-start gap-3">
 <div className="mt-0.5 text-brand-text/80">{c.icon}</div>
 <div>
 <h4 className="text-lg font-semibold">{c.title}</h4>
 <p className="mt-3 text-sm text-brand-text/70">{c.body}</p>
 </div>
 </div>
 </Card>))}
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="flex flex-col">
 <h3 className="text-lg font-semibold">Internal routes</h3>
 <div className="mt-4 grid gap-3 text-sm">
 <Link
 href="/lapland-tours/destinations"
 className="font-semibold hover:underline text-brand-text/70"
 >
 Back to destinations ?
 </Link>
 <Link
 href="/lapland-tours/partners/getyourguide"
 className="font-semibold hover:underline text-brand-text/70"
 >
 Browse via GetYourGuide ?
 </Link>
 <Link
 href="/lapland-tours/partners/viator"
 className="font-semibold hover:underline text-brand-text/70"
 >
 Browse via Viator ?
 </Link>
 <Link
 href="/policy"
 className="font-semibold hover:underline text-brand-text/70"
 >
 How this site works ?
 </Link>
 </div>

 <div className="mt-auto pt-5">
 <CtaButton href="/lapland-tours" variant="outline" className="w-full">
 Back to Lapland tours 
 </CtaButton>
 </div>
 </Card>

 <Card>
 <h3 className="text-lg font-semibold">Common trap</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Booking like a busy. Inari is better with fewer, higher-quality days and real buffers between them.
 </p>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}

