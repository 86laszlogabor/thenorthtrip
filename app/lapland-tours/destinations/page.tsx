import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Snowflake, MapPin, Route } from "lucide-react";

export const metadata = {
 title: "Lapland Destinations | Rovaniemi, Levi, Inari & More | TheNorthTrip",
 description:
 "Choose your Lapland base by decision points: tour availability, vibe, logistics, and winter recovery options. Fast routing into pages.",
 openGraph: {
 title: "Lapland Destinations | TheNorthTrip",
 description:
 "Choose your Lapland base by decision points: tour availability, vibe, logistics, and winter recovery options. Fast routing into pages.",
 images: ["/images/og/og-lapland-rovaniemi.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Lapland Destinations | TheNorthTrip",
 description:
 "Choose your Lapland base by decision points: tour availability, vibe, logistics, and winter recovery options. Fast routing into pages.",
 images: ["/images/og/og-lapland-rovaniemi.jpg"],
 },
};

type DestinationCard = {
 href: string;
 title: string;
 image: string;
 blurb: string;
 bestFor: string[];
 watchOut: string[];
 tags?: { icon: React.ReactNode; label: string }[];
};

function MiniTag({ icon, label }: { icon: React.ReactNode; label: string }) {
 return (<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-brand-text/70">
 <span className="text-brand-text/60">{icon}</span>
 {label}
 </span>);
}

function HubTile({ item }: { item: DestinationCard }) {
 return (<Card className="flex flex-col overflow-hidden">
 <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-100">
 <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
 </div>

 <div className="mt-4 flex items-start justify-between gap-3">
 <h3 className="text-lg font-semibold">{item.title}</h3>
 <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-brand-text/60">
 
 </span>
 </div>

 <p className="mt-2 text-sm text-brand-text/70">{item.blurb}</p>

 {item.tags?.length? (<div className="mt-4 flex flex-wrap gap-2">
 {item.tags.map((t) => (<MiniTag key={t.label} icon={t.icon} label={t.label} />))}
 </div>): null}

 <div className="mt-5">
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">Best for</p>
 <ul className="mt-2 list-disc pl-5 text-sm text-brand-text/70 space-y-1">
 {item.bestFor.map((x) => (<li key={x}>{x}</li>))}
 </ul>
 </div>

 <div className="mt-4">
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">Watch out</p>
 <ul className="mt-2 list-disc pl-5 text-sm text-brand-text/70 space-y-1">
 {item.watchOut.map((x) => (<li key={x}>{x}</li>))}
 </ul>
 </div>

 <div className="mt-auto pt-6">
 <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">
 Open page <ArrowRight className="h-4 w-4" />
 </Link>
 </div>
 </Card>);
}

export default function LaplandDestinationsPage() {
 const Bases: DestinationCard[] = [
 {
 href: "/lapland-tours/rovaniemi",
 title: "Rovaniemi",
 image: "/images/og/og-lapland-rovaniemi.jpg",
 blurb:
 "If you want the simplest starting point, choose the base that’s built for visitors and has the cleanest logistics.",
 tags: [
 { icon: <Route className="h-4 w-4" />, label: "Easy logistics" },
 { icon: <Clock className="h-4 w-4" />, label: "More recovery options" },
 ],
 bestFor: ["First Lapland trip", "Short stays with a packed activity mix", "People who want fewer moving parts"],
 watchOut: ["Peak-season crowding", "Meeting points: verify, don’t assume", "Overbooking your schedule"],
 },
 {
 href: "/lapland-tours/levi",
 title: "Levi",
 image: "/images/og/og-lapland-levi.jpg",
 blurb:
 "A resort-style base where the default day is ski + pre-structured activities. Good when you want convenience over improvisation.",
 tags: [
 { icon: <Snowflake className="h-4 w-4" />, label: "Resort winter base" },
 { icon: <ShieldCheck className="h-4 w-4" />, label: "Structure helps" },
 ],
 bestFor: ["Ski-first trips", "Families who want predictable days", "People who prefer packaged convenience"],
 watchOut: ["Costs stack fast (activities + transport)", "Resort bubble effect", "Tight slot chains are fragile"],
 },
 {
 href: "/lapland-tours/saariselka",
 title: "Saariselkä",
 image: "/images/og/og-lapland-saariselka.jpg",
 blurb:
 "A northern base that suits aurora-focused travelers who are happy to plan around winter constraints and limited late-night recovery.",
 tags: [
 { icon: <MapPin className="h-4 w-4" />, label: "Northern positioning" },
 { icon: <Clock className="h-4 w-4" />, label: "Plan buffers" },
 ],
 bestFor: ["Aurora-first mindset (weather-dependent)", "Quieter pace", "Short excursions and early nights"],
 watchOut: ["Fewer fallback options if a link fails", "Transport dependencies matter more", "Verify what’s actually running"],
 },
 {
 href: "/lapland-tours/yllas",
 title: "Ylläs",
 image: "/images/og/og-lapland-yllas.jpg",
 blurb:
 "A base that rewards outdoor-heavy plans. It works best when you accept real distances and don’t stack too many time-fixed commitments.",
 tags: [
 { icon: <Route className="h-4 w-4" />, label: "Outdoor routing" },
 { icon: <ShieldCheck className="h-4 w-4" />, label: "Low-fragility days" },
 ],
 bestFor: ["Outdoor-heavy itinerary", "Slower, more spacious trip rhythm", "People who dislike city-like crowding"],
 watchOut: ["Distances and winter pace are real", "Weather variance changes feasibility", "Over-ambition breaks days"],
 },
 {
 href: "/lapland-tours/inari",
 title: "Inari",
 image: "/images/og/og-lapland-inari.jpg",
 blurb:
 "A base for travelers who want a quieter northern feel and cultural context. It rewards planning and punishes optimistic schedules.",
 tags: [
 { icon: <MapPin className="h-4 w-4" />, label: "Remote signal" },
 { icon: <ShieldCheck className="h-4 w-4" />, label: "Certainty wins" },
 ],
 bestFor: ["Quieter northern vibe", "Culture + nature balance", "Aurora attempts with a calm pace (conditions apply)"],
 watchOut: ["Logistics are more sensitive", "Fewer recovery options", "Plan the first night early"],
 },
 ];

 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Lapland destinations: pick the base that matches your risk tolerance."
 subtitle="Choose by logistics, recovery options, and winter reality. Not by vibes alone."
 imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
 primaryCta={{ href: "/lapland-tours", label: "Back to Lapland tours " }}
 secondaryCta={{ href: "/get-help", label: "Get help if unclear" }}
 />

 <Section>
 <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Destinations</p>

 <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
 Quick routing into 5 bases (decision-first)
 </h2>

 <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
 Your base decides what’s feasible: how many options exist, how fragile your schedule becomes, and whether you
 can recover after delays. Pick the base first. Book tours second.
 </p>

 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
 {Bases.map((item) => (<HubTile key={item.href}  item={item} />))}
 </div>

 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="flex flex-col">
 <h3 className="text-lg font-semibold">If you want the simplest starting point</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Start with a base that reduces logistics and gives you more recovery options if something slips.
 </p>
 <div className="mt-auto pt-5">
 <CtaButton href="/lapland-tours/rovaniemi" variant="primary" className="w-full">
 Open Rovaniemi 
 </CtaButton>
 </div>
 </Card>

 <Card className="flex flex-col">
 <h3 className="text-lg font-semibold">If you want “quiet + northern signal”</h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Inari and Saariselkä reward planning. If you dislike buffers, pick a different base.
 </p>
 <div className="mt-auto pt-5 grid gap-3">
 <CtaButton href="/lapland-tours/inari" variant="outline" className="w-full">
 Inari 
 </CtaButton>
 <CtaButton href="/lapland-tours/saariselka" variant="outline" className="w-full">
 Saariselkä 
 </CtaButton>
 </div>
 </Card>
 </div>

 <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
 </Section>
 </div>);
}










