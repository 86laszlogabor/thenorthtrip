import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Tampere Sauna Capital 2026: The Smart Winter Stop Before Lapland",
 description:
 "Tampere is Finland’s sauna-reset city: €24–28 train from Helsinki, best public saunas, 1–2 night buffer logic, and a clean northbound flow before Lapland.",
 openGraph: {
 title: "Tampere Sauna Capital 2026: The Smart Winter Stop Before Lapland",
 description:
 "€24–28 train from Helsinki. 1–2 nights max. Sauna reset before Lapland logistics.",
 images: ["/images/og/og-tampere-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Tampere Sauna Capital 2026",
 description:
 "A calm sauna buffer stop that makes Lapland arrivals cleaner, warmer, and less chaotic.",
 images: ["/images/og/og-tampere-2026.jpg"],
 },
};

const lastVerified = "2026-01-04";
const slug = "tampere-sauna-capital-2026-winter-stop-before-lapland";

const visuals = [
 {
 title: "Sauna steam in winter",
 body: "Reset before Lapland chaos.",
 image: "/images/blog/tampere/tampere-sauna-steam.jpg",
 },
 {
 title: "Lake snow paths",
 body: "Calm walks, no Arctic pressure.",
 image: "/images/blog/tampere/tampere-lake-winter.jpg",
 },
 {
 title: "Helsinki → Tampere train",
 body: "€24–28, ~1h40m, zero drama.",
 image: "/images/blog/tampere/tampere-train-snow.jpg",
 },
 {
 title: "Tampere night lights",
 body: "Buffer city glow.",
 image: "/images/blog/tampere/tampere-night.jpg",
 },
] as const;

const toc = [
 { id: "key-facts", label: "Key facts (fast decisions)" },
 { id: "why-tampere", label: "Why Tampere works in winter" },
 { id: "helsinki-tampere", label: "Helsinki → Tampere: train time & cost" },
 { id: "sauna-culture", label: "Sauna culture: not a gimmick" },
 { id: "top-saunas", label: "Top public saunas (quick list)" },
 { id: "pricing", label: "Sauna pricing anchors (€15–22)" },
 { id: "buffer-logic", label: "Buffer logic: 1–2 nights optimal" },
 { id: "itinerary", label: "Sample itinerary (1–2 nights)" },
 { id: "lake-walks", label: "Lake walks & winter pacing" },
 { id: "safety", label: "Ice safety" },
 { id: "vs-other-cities", label: "Vs Turku / Jyväskylä" },
 { id: "tampere-rovaniemi", label: "Tampere → Rovaniemi: night train anchor" },
 { id: "sauna-protocol", label: "Sauna + cold plunge protocol" },
 { id: "thenorthtrip-logic", label: "How this fits TheNorthTrip logic" },
 { id: "internal-links", label: "Internal links & next steps" },
] as const;

const FALLBACK_IMG = "/images/og/og-blog.jpg";
function safeImg(src: string) {
 return src?.trim()? src: FALLBACK_IMG;
}

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function Divider() {
 return (<div className="not-prose my-14">
 <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
 </div>);
}

function Pill({ children }: { children: ReactNode }) {
 return (<span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-600 shadow-sm">
 {children}
 </span>);
}

function SectionHeader({
 kicker,
 title,
 lede,
}: {
 kicker: string;
 title: string;
 lede?: string;
}) {
 return (<div className="not-prose mt-16">
 <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
 {kicker}
 </div>
 <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
 {title}
 </h2>
 {lede? (<p className="mt-3 max-w-[76ch] text-[15px] leading-8 text-neutral-600">
 {lede}
 </p>): null}
 <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
 </div>);
}

function MiniCard({
 kicker,
 title,
 body,
}: {
 kicker: string;
 title: string;
 body: string;
}) {
 return (<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
 {kicker}
 </div>
 <div className="mt-2 text-sm font-semibold text-neutral-900">{title}</div>
 <p className="mt-2 text-sm leading-7 text-neutral-700">{body}</p>
 </div>);
}

function ListCard({ title, items }: { title: string; items: string[] }) {
 return (<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <div className="text-sm font-semibold text-neutral-900">{title}</div>
 <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
 {items.map((t) => (<li key={t} className="flex gap-3">
 <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-neutral-300" />
 <span>{t}</span>
 </li>))}
 </ul>
 </div>);
}

function Callout({
 eyebrow,
 title,
 body,
 children,
 tone = "neutral",
}: {
 eyebrow: string;
 title: string;
 body: string;
 children?: ReactNode;
 tone?: "neutral" | "warn" | "success";
}) {
 const toneClasses =
 tone === "warn"? "border-amber-200 bg-amber-50": tone === "success"? "border-emerald-200 bg-emerald-50": "border-neutral-200 bg-white";

 return (<div className={`rounded-3xl border ${toneClasses} p-6 shadow-sm`}>
 <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
 {eyebrow}
 </p>
 <p className="mt-3 text-[18px] font-semibold leading-8 text-neutral-900">
 {title}
 </p>
 <p className="mt-2 text-sm leading-7 text-neutral-700">{body}</p>
 {children? <div className="mt-5">{children}</div>: null}
 </div>);
}

function ImageTile({
 src,
 title,
 body,
 priority,
 wide,
}: {
 src: string;
 title: string;
 body: string;
 priority?: boolean;
 wide?: boolean;
}) {
 return (<Card className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white p-0 shadow-[0_1px_0_rgba(15,23,42,0.06),0_22px_60px_-30px_rgba(15,23,42,0.2)]">
 <div className={wide? "relative aspect-[16/8] bg-neutral-100": "relative aspect-[16/10] bg-neutral-100"}>
 <Image
 src={safeImg(src)}
 alt={title}
 fill
 sizes="(min-width: 1024px) 720px, (min-width: 640px) 50vw, 100vw"
 className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
 priority={priority}
 />
 <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6">
 <div className="text-base font-semibold tracking-tight text-white">{title}</div>
 <div className="mt-2 text-sm leading-7 text-white/85">{body}</div>
 </div>
 </div>
 </Card>);
}

function PullQuote({ children }: { children: ReactNode }) {
 return (<div className="not-prose my-12 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
 <p className="text-[16px] font-semibold leading-8 text-neutral-900">
 “{children}”
 </p>
 </div>);
}

export default function Page() {
 return (<div className="min-h-screen bg-white text-neutral-900">
 <PageHero
 title="Tampere: Sauna Reset Before Lapland"
 subtitle="€24–28 train from Helsinki. Perfect 1–2 night buffer. Sauna reset that behaves like infrastructure."
 imageSrc="/images/blog/tampere/hero.jpg"
 primaryCta={{ href: "/getting-around-finland", label: "Transport guide →" }}
 secondaryCta={{ href: "/offer-checklist", label: "Offer checklist →" }}
 />

 {/* WHITE editorial canvas (no blue-ish slate wash) */}
 <div className="relative">
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-white" />
 <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px]" />
 <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
 <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
 </div>

 {/* Top strip */}
 <Section>
 <div className="flex flex-wrap items-center justify-between gap-4">
 <div className="flex flex-wrap items-center gap-2 text-sm">
 <span className="font-semibold text-neutral-900">Blog</span>
 <span className="text-neutral-300">·</span>
 <span className="text-neutral-600">
 Last verified:{" "}
 <span className="font-semibold text-neutral-900">{lastVerified}</span>
 </span>
 <span className="text-neutral-300">·</span>
 <span className="text-neutral-500">{slug}</span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
 <Link className="text-neutral-600 hover:text-neutral-900 hover:underline underline-offset-4" href="/blog">
 Back to Blog
 </Link>
 <Link className="text-neutral-600 hover:text-neutral-900 hover:underline underline-offset-4" href="/getting-around-finland">
 Transport guide
 </Link>
 <Link className="text-neutral-600 hover:text-neutral-900 hover:underline underline-offset-4" href="/offer-checklist">
 Offer checklist
 </Link>
 <Link className="text-neutral-600 hover:text-neutral-900 hover:underline underline-offset-4" href="/get-help">
 Get help
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
 {/* MAIN */}
 <main className="min-w-0">
 {/* Decision intro (tight, structured, no prose-river) */}
 <Card className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white p-0 shadow-[0_1px_0_rgba(15,23,42,0.06),0_26px_80px_-40px_rgba(15,23,42,0.22)]">
 <div className="p-6 md:p-10">
 <div className="flex flex-wrap gap-2">
 <Pill>Sauna reset</Pill>
 <Pill>Winter pacing</Pill>
 <Pill>Northbound flow</Pill>
 <Pill>1–2 nights</Pill>
 </div>

 <h1 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">
 Tampere is the smartest winter stop before Lapland
 </h1>

 <div className="mt-5 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
 <p className="text-[15px] leading-8 text-neutral-700 md:text-[16px]">
 Tampere is not “another stop”. It’s a buffer that behaves like infrastructure:
 warm reset, predictable transit, and a clean northbound handoff.
 </p>
 <p className="text-[15px] leading-8 text-neutral-600 md:text-[16px]">
 The point is not “doing Tampere”. The point is arriving to Lapland with better energy,
 fewer logistics mistakes, and zero unnecessary winter chaos.
 </p>

 <div className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-4">
 <div className="grid gap-2 sm:grid-cols-2">
 {[
 ["Train (Helsinki → Tampere)", "€24–28"],
 ["Time", "~1h40m"],
 ["Best buffer", "1–2 nights"],
 ["Sauna anchor", "€15–22"],
 ].map(([k, v]) => (<div key={k} className="flex items-baseline justify-between gap-4">
 <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
 {k}
 </span>
 <span className="text-sm font-semibold text-neutral-900">{v}</span>
 </div>))}
 </div>
 </div>

 <div className="flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Transport guide →
 </CtaButton>
 <CtaButton href="/get-help" variant="success">
 Get help →
 </CtaButton>
 </div>

 <p className="text-xs text-neutral-500">
 <span className="font-semibold text-neutral-700">Last verified:</span> {lastVerified}
 </p>
 </div>
 </div>
 </Card>

 {/* Visual mosaic */}
 <div className="mt-8 grid gap-4 sm:grid-cols-2">
 <div className="sm:col-span-2">
 <ImageTile
 src={visuals[0].image}
 title={visuals[0].title}
 body={visuals[0].body}
 priority
 wide
 />
 </div>
 <ImageTile src={visuals[1].image} title={visuals[1].title} body={visuals[1].body} />
 <ImageTile src={visuals[2].image} title={visuals[2].title} body={visuals[2].body} />
 <div className="sm:col-span-2">
 <ImageTile src={visuals[3].image} title={visuals[3].title} body={visuals[3].body} wide />
 </div>
 </div>

 {/* Article frame */}
 <div className="mt-12 overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_34px_100px_-52px_rgba(15,23,42,0.22)]">
 <div className="border-b border-neutral-200 bg-white px-6 py-5 md:px-10">
 <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
 <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 font-semibold">
 {slug}
 </span>
 <span className="text-neutral-300">•</span>
 <span>Last verified: {lastVerified}</span>
 </div>
 </div>

 {/* PROSE ONLY for baseline typography, but content is mostly not-prose blocks */}
 <article
 className={[
 "prose prose-neutral max-w-none px-6 py-10 md:px-10 md:py-12",
 "prose-headings:tracking-tight",
 "prose-headings:text-neutral-900",
 "prose-p:text-neutral-700 prose-p:leading-9",
 "prose-strong:text-neutral-900",
 "prose-li:text-neutral-700 prose-li:leading-8",
 "prose-hr:border-neutral-200",
 "prose-a:text-neutral-900 prose-a:font-semibold",
 "prose-a:decoration-neutral-300 hover:prose-a:decoration-neutral-900",
 "prose-blockquote:text-neutral-700 prose-blockquote:border-neutral-200",
 ].join(" ")}
 >
 <Anchor id="key-facts" />
 <SectionHeader
 kicker="Fast decisions"
 title="Key facts"
 lede="Tampere is the calm middle layer: warm reset + clean continuation north. If you’re building a winter week, this is the easy win."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="Transport"
 title="€24–28 train, ~1h40m"
 body="Predictable winter move. Warm, stable, and removes road/parking nonsense from the plan."
 />
 <MiniCard
 kicker="Time"
 title="1–2 nights is optimal"
 body="One night gives you a reset. Two nights gives you adult pacing. More dilutes the trip."
 />
 <MiniCard
 kicker="Budget"
 title="Sauna €15–22 anchor"
 body="Enough to justify the stop without turning it into a ‘luxury day’ that steals from Lapland."
 />
 <MiniCard
 kicker="Role"
 title="Buffer city, not a destination phase"
 body="Use Tampere to reduce friction and fatigue. That’s the whole point."
 />
 </div>

 <PullQuote>
 Tampere isn’t “more travel”. It’s the thing that makes the travel you already planned feel better.
 </PullQuote>

 <Divider />

 <Anchor id="why-tampere" />
 <SectionHeader
 kicker="Winter logic"
 title="Why Tampere works in winter"
 lede="Finland punishes sloppy pacing. Tampere fixes that by giving you warmth and predictability between Helsinki and Lapland."
 />

 <div className="not-prose mt-7 grid gap-4">
 <ListCard
 title="Why it’s a good buffer"
 items={[
 "Compact and easy to navigate in winter conditions.",
 "Sauna culture works year-round (not a tourist prop).",
 "Short winter walks that feel human, not heroic.",
 "Trains keep the plan stable when weather or energy doesn’t.",
 ]}
 />
 <Callout
 eyebrow="Decision rule"
 title="Choose the predictable option when you’re tired."
 body="Winter travel punishes improvisation. The train removes failure modes you don’t need."
 tone="success"
 />
 </div>

 <Divider />

 <Anchor id="helsinki-tampere" />
 <SectionHeader
 kicker="Transport"
 title="Helsinki → Tampere: train time & cost"
 lede="Trains are the winter default because they stay predictable when roads and mood do not."
 />

 <div className="not-prose mt-7 grid gap-4">
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Time"
 title="~1h40m"
 body="Typical fast services. Short enough that it doesn’t feel like a travel day."
 />
 <MiniCard
 kicker="Cost anchor"
 title="€24–28"
 body="Use as a planning range. If it spikes, book earlier or shift departure time."
 />
 <MiniCard
 kicker="Why it matters"
 title="Zero drama logistics"
 body="Warm seats, no parking, no icy-street negotiation. You arrive functional."
 />
 </div>
 <Callout
 eyebrow="Reality"
 title="The ‘car vs train’ debate ends when it’s -12°C and dark at 15:00."
 body="Take the option that keeps your plan stable and your brain quiet."
 tone="neutral"
 />
 </div>

 <Divider />

 <Anchor id="sauna-culture" />
 <SectionHeader
 kicker="Culture"
 title="Sauna culture: not a gimmick"
 lede="In winter, sauna isn’t ‘an activity’. It’s infrastructure: heat, recovery, and sleep quality."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="Reset"
 title="Sauna = nervous system restart"
 body="Travel day in, heat + calm out. That’s how you stop the week from turning into exhaustion."
 />
 <MiniCard
 kicker="Practical"
 title="Better sleep, better next day"
 body="You don’t need ‘more stuff’. You need recovery so Lapland feels good instead of hard."
 />
 </div>

 <Divider />

 <Anchor id="top-saunas" />
 <SectionHeader
 kicker="Shortlist"
 title="Top public saunas (quick list)"
 lede="Three names cover most travellers. Choose based on vibe, not ideology."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Modern"
 title="Sommer"
 body="Contemporary public sauna vibe. Good default if you want ‘easy and clean’."
 />
 <MiniCard
 kicker="Classic"
 title="Rajaportti"
 body="Old-school atmosphere. If you want the ‘this is Finland’ feeling, it delivers."
 />
 <MiniCard
 kicker="Treat"
 title="Armas"
 body="Clean ‘treat yourself’ option. Works well as a second sauna on a 2-night buffer."
 />
 </div>

 <Divider />

 <Anchor id="pricing" />
 <SectionHeader
 kicker="Costs"
 title="Sauna pricing anchors (€15–22)"
 lede="Planning anchors only. Update when you re-verify."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-3">
 <MiniCard kicker="Sommer" title="~€19" body="Typical modern public sauna anchor." />
 <MiniCard kicker="Rajaportti" title="~€15–20" body="Classic range, varies by option." />
 <MiniCard kicker="Armas" title="~€22" body="Higher end anchor for a ‘treat’ session." />
 </div>

 <Divider />

 <Anchor id="buffer-logic" />
 <SectionHeader
 kicker="Pacing"
 title="Buffer logic: 1–2 nights optimal"
 lede="Tampere works best as a controlled pause, not a new destination phase."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <Callout
 eyebrow="Option A"
 title="1 night = clean reset"
 body="Arrive, sauna, sleep. Next day continues north with less Helsinki hangover."
 />
 <Callout
 eyebrow="Option B"
 title="2 nights = adult pacing"
 body="One extra calm day + second sauna. You reach Lapland with better energy and fewer stupid mistakes."
 tone="success"
 />
 </div>

 <Divider />

 <Anchor id="itinerary" />
 <SectionHeader
 kicker="Template"
 title="Sample itinerary (1–2 nights)"
 lede="No heroic schedules. Just a plan that keeps your week stable."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <ListCard
 title="Option A: 1 night"
 items={[
 "Afternoon arrival, check-in, slow dinner.",
 "Evening public sauna, early sleep.",
 "Morning walk + coffee, then continue north.",
 ]}
 />
 <ListCard
 title="Option B: 2 nights"
 items={[
 "Day 1: arrive, sauna, sleep.",
 "Day 2: calm winter loops + second sauna.",
 "Day 3: travel north without feeling wrecked.",
 ]}
 />
 </div>

 <Divider />

 <Anchor id="lake-walks" />
 <SectionHeader
 kicker="Low pressure"
 title="Lake walks & winter pacing"
 lede="Tampere’s winter value is subtle: short loops, quiet light, and zero pressure to ‘perform’ your trip."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="Mindset"
 title="Calm loops > epic hikes"
 body="This is where you recover, not where you prove something to strangers on the internet."
 />
 <MiniCard
 kicker="Result"
 title="Better Lapland days"
 body="If you arrive north already tired, every activity feels overpriced and too long."
 />
 </div>

 <Divider />

 <Anchor id="safety" />
 <SectionHeader
 kicker="Don’t be the story"
 title="Ice safety"
 lede="Winter lakes look calm. They are also indifferent. Don’t freestyle ice adventures without local knowledge."
 />

 <div className="not-prose mt-7">
 <ListCard
 title="Simple rules"
 items={[
 "Stay on maintained paths when possible.",
 "Assume conditions change fast.",
 "If you’re unsure, don’t test physics with your body.",
 ]}
 />
 </div>

 <Divider />

 <Anchor id="vs-other-cities" />
 <SectionHeader
 kicker="Alternatives"
 title="Vs Turku / Jyväskylä"
 lede="You can buffer elsewhere. Tampere just behaves the most plug-and-play for a Lapland flow."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Turku"
 title="Coastal energy"
 body="Easy to drift into ‘extra days’. Less clean for northbound logic."
 />
 <MiniCard
 kicker="Jyväskylä"
 title="Can work"
 body="Less obvious default flow for most itineraries."
 />
 <MiniCard
 kicker="Tampere"
 title="Compact + sauna-first"
 body="Best ‘buffer as infrastructure’ behavior."
 />
 </div>

 <Divider />

 <Anchor id="tampere-rovaniemi" />
 <SectionHeader
 kicker="Northbound"
 title="Tampere → Rovaniemi: night train anchor"
 lede="Strong winter move: sleep through distance, arrive more functional than you deserve."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="Price anchor"
 title="€60–80 (typical)"
 body="Planning anchor only. Costs vary by cabin/season and booking timing."
 />
 <MiniCard
 kicker="Value"
 title="Removes a dead travel day"
 body="Less arrival fatigue, more usable daylight next day."
 />
 </div>

 <Divider />

 <Anchor id="sauna-protocol" />
 <SectionHeader
 kicker="Protocol"
 title="Sauna + cold plunge protocol"
 lede="You don’t need to cosplay toughness. Short cold, calm breathing, hydrate. Repeat."
 />

 <div className="not-prose mt-7 grid gap-4 md:grid-cols-3">
 <MiniCard kicker="Cycle" title="3 rounds" body="10–15 minutes sauna per round, no ego contests." />
 <MiniCard kicker="Cold" title="Quick on purpose" body="Cold plunge or cold air, short, controlled, safe." />
 <MiniCard kicker="Rest" title="Sit, breathe, hydrate" body="The recovery part is the whole point." />
 </div>

 <Divider />

 <Anchor id="thenorthtrip-logic" />
 <SectionHeader
 kicker="Decision-first"
 title="How this fits TheNorthTrip logic"
 lede="Manage energy, reduce friction, keep transitions clean. Tampere does exactly that."
 />

 <div className="not-prose mt-7">
 <ListCard
 title="What Tampere solves"
 items={[
 "Reduces fatigue before Lapland big-ticket days.",
 "Keeps logistics predictable in winter.",
 "Adds recovery without adding ‘complexity’.",
 "Improves sleep and pacing so activities feel worth the money.",
 ]}
 />
 </div>

 <Divider />

 <Anchor id="internal-links" />
 <SectionHeader kicker="Next steps" title="Internal links & next steps" />

 <div className="not-prose mt-7 flex flex-wrap gap-2">
 {[
 ["/helsinki", "Helsinki"],
 ["/getting-around-finland", "Getting around Finland"],
 ["/lapland-tours-finland", "Lapland tours"],
 ["/offer-checklist", "Offer checklist"],
 ].map(([href, label]) => (<Link
 key={href}
 className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm hover:text-neutral-900 hover:underline underline-offset-4"
 href={href}
 >
 {label}
 </Link>))}
 </div>

 <p className="mt-7 text-sm text-neutral-600">
 <strong className="text-neutral-900">Last verified:</strong> {lastVerified}
 </p>
 </article>
 </div>

 {/* Bottom CTA */}
 <div className="mt-10 grid gap-4 sm:grid-cols-2">
 <Card className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <p className="text-sm font-semibold text-neutral-900">Winter transport sanity</p>
 <p className="mt-2 text-sm leading-7 text-neutral-600">
 Trains are your friend in winter. Cars are fine, until they aren’t.
 </p>
 <div className="mt-4">
 <CtaButton href="/getting-around-finland" variant="outline">
 Transport guide →
 </CtaButton>
 </div>
 </Card>

 <Card className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <p className="text-sm font-semibold text-neutral-900">Stop overpaying in Lapland</p>
 <p className="mt-2 text-sm leading-7 text-neutral-600">
 Checklist = fewer expensive assumptions, cleaner bookings.
 </p>
 <div className="mt-4">
 <CtaButton href="/offer-checklist" variant="primary">
 Offer checklist →
 </CtaButton>
 </div>
 </Card>
 </div>
 </main>

 {/* SIDEBAR */}
 <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
 <Card className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <div className="flex items-center justify-between">
 <div>
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
 Quick facts
 </div>
 <div className="mt-2 text-base font-semibold tracking-tight text-neutral-900">
 Tampere buffer
 </div>
 </div>
 <Pill>Verified</Pill>
 </div>

 <div className="mt-4 space-y-3 text-sm">
 {[
 ["Helsinki → Tampere", "€24–28"],
 ["Time", "~1h40m"],
 ["Best buffer", "1–2 nights"],
 ["Sauna anchor", "€15–22"],
 ["Northbound move", "Night train"],
 ].map(([k, v]) => (<div key={k} className="flex items-start justify-between gap-4">
 <div className="text-neutral-600">{k}</div>
 <div className="font-semibold text-neutral-900">{v}</div>
 </div>))}
 </div>

 <div className="mt-5 grid gap-2">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
 Transport guide →
 </CtaButton>
 </div>

 <p className="mt-4 text-xs text-neutral-500">
 <span className="font-semibold text-neutral-700">Last verified:</span> {lastVerified}
 </p>
 </Card>

 <Card className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <div className="flex items-center justify-between gap-3">
 <h2 className="text-base font-semibold tracking-tight text-neutral-900">On this page</h2>
 <span className="text-xs text-neutral-500">Jump</span>
 </div>

 <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-2">
 <div className="grid gap-1 text-sm">
 {toc.map((t) => (<a
 key={t.id}
 className="rounded-xl px-3 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 hover:underline underline-offset-4 transition"
 href={`#${t.id}`}
 >
 {t.label}
 </a>))}
 </div>
 </div>
 </Card>

 <Card className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
 Buffer rule
 </div>
 <p className="mt-3 text-sm leading-7 text-neutral-700">
 <strong className="text-neutral-900">1–2 nights Tampere</strong> → clean Lapland arrival.
 More than that and you start diluting the trip.
 </p>
 <div className="mt-4">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Use the checklist →
 </CtaButton>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

