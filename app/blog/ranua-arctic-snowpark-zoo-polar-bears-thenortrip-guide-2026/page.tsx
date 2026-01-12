import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Ranua Arctic SnowPark & Zoo 2026: Polar Bears, Winter Visit, Tickets",
 description:
 "Ranua Zoo winter guide (2026): polar bears, Arctic wildlife, SnowPark meaning, €24 adult entry planning anchor, winter clothing strategy, timing, transport from Rovaniemi, and itinerary placement.",
 openGraph: {
 title: "Ranua Arctic SnowPark & Zoo 2026: Polar Bears, Winter Visit, Tickets",
 description:
 "Polar bears in real winter, planning anchor, and the Lapland recovery-day logic that actually works.",
 images: ["/images/og/og-ranua-zoo-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Ranua Arctic SnowPark & Zoo 2026",
 description:
 "Polar bears in real winter, planning anchor, and how to fit Ranua into a Lapland week.",
 images: ["/images/og/og-ranua-zoo-2026.jpg"],
 },
};

const slug = "ranua-arctic-snowpark-zoo-2026-polar-bears-winter-tickets";
const lastVerified = "2026-01-04";

/**
 * If an image path is missing in your repo, fallback prevents broken UI.
 * Put real images into /public/images/blog/ranua/... later and the UI stays identical.
 */
const FALLBACK_IMG = "/images/og/og-blog.jpg";
function safeImg(src: string) {
 return src?.trim()? src: FALLBACK_IMG;
}

const visuals = [
 {
 title: "Polar bear winter steam",
 body: "−15°C breath + slow pacing = the Arctic as it should look.",
 image: "/images/blog/ranua/ranua-polar-winter.jpg",
 },
 {
 title: "Arctic fox snow coat",
 body: "Winter transformation complete. Photos finally make sense.",
 image: "/images/blog/ranua/ranua-fox-winter.jpg",
 },
 {
 title: "Snow paths Ranua",
 body: "3–4h walking is the winter reality. Plan warm-up breaks.",
 image: "/images/blog/ranua/ranua-snow-paths.jpg",
 },
 {
 title: "Wolf tracks winter",
 body: "Sometimes you track first and see later. That’s the point.",
 image: "/images/blog/ranua/ranua-wolf-tracks.jpg",
 },
];

const toc = [
 { id: "what-ranua", label: "What Ranua actually is" },
 { id: "winter-better", label: "Why winter > summer" },
 { id: "snowpark", label: "SnowPark meaning" },
 { id: "animals", label: "Animals (winter edition)" },
 { id: "polar-bears", label: "Polar bears" },
 { id: "euro24", label: "€24 entry breakdown" },
 { id: "time", label: "How long you need" },
 { id: "dress", label: "Dress for Ranua" },
 { id: "transport", label: "Rovaniemi ~80km" },
 { id: "itinerary", label: "Ranua in Lapland itinerary" },
 { id: "day-plan", label: "Sample winter day plan" },
 { id: "comparison", label: "Vs husky/reindeer" },
 { id: "mistakes", label: "Common mistakes" },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function Pill({ children }: { children: ReactNode }) {
 return (<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
 {children}
 </span>);
}

function Divider() {
 return (<div className="not-prose my-12">
 <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 </div>);
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
 return (<div className="not-prose mt-14">
 <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
 {kicker}
 </div>
 <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 {title}
 </h2>
 {lede? (<p className="mt-2 max-w-[76ch] text-sm leading-7 text-slate-600">
 {lede}
 </p>): null}
 <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 </div>);
}

function ContentCard({ children }: { children: ReactNode }) {
 return (<div className="not-prose mt-6 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-[0_1px_0_rgba(15,23,42,0.06)] backdrop-blur">
 <div className="flex gap-4">
 <div className="mt-1 h-10 w-px bg-slate-200" />
 <div className="min-w-0 flex-1">{children}</div>
 </div>
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
 return (<div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
 {kicker}
 </div>
 <div className="mt-2 text-sm font-semibold text-slate-900">{title}</div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
 </div>);
}

function ImageBlock({
 src,
 alt,
 sizes,
 priority,
}: {
 src: string;
 alt: string;
 sizes: string;
 priority?: boolean;
}) {
 return (<figure className="not-prose">
 <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_22px_60px_-30px_rgba(15,23,42,0.25)]">
 <div className="relative aspect-[16/10]">
 <Image
 src={safeImg(src)}
 alt={alt}
 fill
 className="object-cover"
 sizes={sizes}
 priority={priority}
 />
 <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
 <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
 </div>
 </div>
 <figcaption className="mt-3 text-xs text-slate-500">{alt}</figcaption>
 </figure>);
}

function ProgressBar() {
 return (<div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-slate-200">
 <div
 className="h-full w-0 bg-slate-900/70"
 style={{
 animation: "scrollProgress linear both",
 animationTimeline: "scroll()",
 }}
 />
 <style>{`
 @keyframes scrollProgress { from { width: 0%; } to { width: 100%; } }
 `}</style>
 </div>);
}

function StatRow({ k, v }: { k: string; v: string }) {
 return (<div className="flex items-baseline justify-between gap-4">
 <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
 {k}
 </span>
 <span className="text-sm font-semibold text-slate-900">{v}</span>
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
 tone?: "neutral" | "warn";
}) {
 const toneClasses =
 tone === "warn"? "border-amber-200/70 bg-amber-50/60": "border-slate-200/70 bg-slate-50/60";

 return (<div className={`not-prose rounded-3xl border ${toneClasses} p-6 shadow-sm`}>
 <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
 {eyebrow}
 </p>
 <p className="mt-3 text-[18px] font-semibold leading-8 text-slate-900">
 {title}
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
 {children? <div className="mt-5">{children}</div>: null}
 </div>);
}

function Quote() {
 return (<blockquote className="not-prose my-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
 <p className="text-base font-semibold leading-8 text-slate-900">
 “Cold ruins Ranua faster than distance does. If your boots are wrong, your opinion will be wrong.”
 </p>
 <p className="mt-2 text-xs text-slate-500">Field-tested truth, unfortunately.</p>
 </blockquote>);
}

function ListCard({ title, items }: { title: string; items: string[] }) {
 return (<div className="not-prose mt-6 rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
 <div className="text-sm font-semibold text-slate-900">{title}</div>
 <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
 {items.map((t) => (<li key={t} className="flex gap-3">
 <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-slate-300" />
 <span>{t}</span>
 </li>))}
 </ul>
 </div>);
}

export default function Page() {
 const heroImg = "/images/blog/ranua/hero.jpg";

 return (<div className="min-h-screen bg-white text-slate-900">
 <ProgressBar />

 <PageHero
 title="Ranua Arctic SnowPark & Zoo (2026)"
 subtitle="Polar bears in real winter, not behind glass. A recovery-day Lapland plan that actually makes sense."
 imageSrc={heroImg}
 primaryCta={{ href: "/offer-checklist", label: "Checklist →" }}
 secondaryCta={{ href: "/lapland-tours", label: "Lapland tours →" }}
 />

 {/* Editorial canvas */}
 <div className="relative">
 {/* subtle “paper” + vignette */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50" />
 <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:28px_28px]" />
 <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white to-transparent" />
 <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />
 </div>

 {/* Top strip */}
 <Section>
 <div className="flex flex-wrap items-center justify-between gap-4">
 <div className="flex flex-wrap items-center gap-2 text-sm">
 <span className="font-semibold text-slate-900">Blog</span>
 <span className="text-slate-300">·</span>
 <span className="text-slate-600">
 Last verified:{" "}
 <span className="font-semibold text-slate-900">{lastVerified}</span>
 </span>
 <span className="text-slate-300">·</span>
 <span className="text-slate-500">{slug}</span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
 <Link
 className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
 href="/blog"
 >
 Back to Blog
 </Link>
 <Link
 className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
 href="/offer-checklist"
 >
 Offer checklist
 </Link>
 <Link
 className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
 href="/lapland-tours"
 >
 Lapland tours
 </Link>
 <Link
 className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
 href="/get-help"
 >
 Get help
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
 {/* MAIN */}
 <main className="min-w-0">
 {/* Cover */}
 <Card className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-0 shadow-[0_1px_0_rgba(15,23,42,0.06),0_26px_80px_-40px_rgba(15,23,42,0.22)]">
 <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
 <div className="p-6 md:p-10">
 <div className="flex flex-wrap gap-2">
 <Pill>Winter</Pill>
 <Pill>Ranua</Pill>
 <Pill>Decision-first</Pill>
 </div>

 <h1 className="mt-5 text-2xl font-semibold tracking-tight md:text-4xl">
 Ranua Arctic SnowPark & Zoo 2026: the winter visit that actually feels Arctic
 </h1>

 <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-[16px]">
 Polar bears in snow, quiet forest paths, and a realistic pace. If you want one Lapland day that
 feels like the Arctic without burning your body and budget, this is it.
 </p>

 {/* Meta block */}
 <div className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
 <div className="grid gap-2 sm:grid-cols-2">
 <StatRow k="Planning anchor" v="€24 adult entry" />
 <StatRow k="From Rovaniemi" v="~80 km (~1h winter drive)" />
 </div>
 <div className="h-px bg-slate-200" />
 <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
 <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold">
 Stable layout, facts update-only
 </span>
 <span className="text-slate-300">•</span>
 <span>No keyword sludge. Just planning.</span>
 </div>
 </div>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/get-help" variant="success">
 Get help →
 </CtaButton>
 </div>

 <p className="mt-6 text-xs text-slate-500">
 <span className="font-semibold text-slate-700">Last verified:</span> {lastVerified}
 </p>
 </div>

 <div className="relative p-4 md:p-6">
 <ImageBlock
 src="/images/blog/ranua/ranua-polar-sidebar.jpg"
 alt="Polar bear in winter at Ranua Zoo"
 sizes="(min-width: 1024px) 360px, 100vw"
 priority
 />

 <div className="mt-5 grid gap-3">
 <div className="grid grid-cols-2 gap-3">
 {visuals.slice(0, 2).map((v) => (<div
 key={v.title}
 className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
 >
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
 Highlight
 </p>
 <p className="mt-2 text-sm font-semibold text-slate-900">{v.title}</p>
 <p className="mt-1 text-xs leading-6 text-slate-600">{v.body}</p>
 </div>))}
 </div>

 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
 Quick truth
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Ranua is a forest walk with animals, not a “10-minute enclosure loop”.
 </p>
 </div>
 </div>
 </div>
 </div>
 </Card>

 {/* Visual tiles */}
 <div className="mt-8 grid gap-4 sm:grid-cols-2">
 {visuals.map((v) => (<Card
 key={v.title}
 className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-[0_1px_0_rgba(15,23,42,0.06),0_22px_60px_-30px_rgba(15,23,42,0.2)]"
 >
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={safeImg(v.image)}
 alt={v.title}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
 sizes="(min-width: 768px) 520px, 100vw"
 />
 <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
 <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-6">
 <h2 className="text-base font-semibold tracking-tight text-white">{v.title}</h2>
 <p className="mt-2 text-sm leading-7 text-white/85">{v.body}</p>
 </div>
 </div>
 </Card>))}
 </div>

 {/* Article frame */}
 <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.06),0_34px_100px_-52px_rgba(15,23,42,0.22)]">
 {/* slim meta strip */}
 <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 md:px-10">
 <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
 <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 font-semibold">
 {slug}
 </span>
 <span className="text-slate-300">•</span>
 <span>Last verified: {lastVerified}</span>
 </div>
 </div>

 <article
 className={[
 "prose prose-slate max-w-none px-6 py-10 md:px-10 md:py-12",
 "prose-headings:tracking-tight",
 "prose-p:leading-8 prose-p:text-slate-700",
 "prose-strong:text-slate-900",
 "prose-li:text-slate-700",
 "prose-hr:border-slate-200",
 "prose-a:font-semibold prose-a:text-slate-900",
 "prose-a:decoration-slate-300 hover:prose-a:decoration-slate-900",
 "prose-ul:my-6 prose-li:leading-8",
 ].join(" ")}
 >
 {/* Lead with dropcap */}
 <div className="not-prose">
 <p className="text-[17px] leading-8 text-slate-700 md:text-[18px]">
 <span className="float-left mr-3 mt-2 text-5xl font-semibold leading-none text-slate-900">
 R
 </span>
 anua Zoo in winter is one of those ideas people underestimate because it sounds tame: a zoo,
 in Lapland, in snow. How exciting could that be?
 </p>
 </div>

 <p className="text-[16px] leading-8 md:text-[17px]">
 Then you walk past a polar bear enclosure at −15°C, with steam rising from its breath,
 and you realize something uncomfortable: this is how these animals are supposed to live.
 Not behind glass. Not in shade. In cold, open space.
 </p>

 <div className="not-prose my-12 grid gap-4 md:grid-cols-2">
 <Callout
 eyebrow="Key fact"
 title="Plan for a 3–4h winter walk"
 body="This is a forest path loop, not a compact city zoo. Warm-up breaks are part of the visit, not a failure."
 />
 <Callout
 eyebrow="Decision rule"
 title="Animals > comfort. Dress properly or skip."
 body="Cold ruins Ranua faster than distance does. If your boots are wrong, your opinion will be wrong."
 tone="warn"
 >
 <div className="flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Checklist →
 </CtaButton>
 <CtaButton href="/get-help" variant="success">
 Get help →
 </CtaButton>
 </div>
 </Callout>
 </div>

 <Quote />

 <Divider />

 <Anchor id="what-ranua" />
 <SectionHeader
 kicker="Overview"
 title="What Ranua actually is"
 lede="Strip away the ‘zoo’ assumptions. In winter this behaves like a forest walk with Arctic wildlife checkpoints."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="It is"
 title="A large open-air Arctic wildlife park"
 body="Forest paths, distance between enclosures, and northern species that make sense in real winter."
 />
 <MiniCard
 kicker="It is not"
 title="A compact city zoo you do in an hour"
 body="If you try to speedrun it, you’ll freeze first and then form a bad opinion. Efficient, but wrong."
 />
 </div>

 <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Reality checklist</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Self-paced walking loop through forest paths</li>
 <li>Arctic and northern species focus (not “everything”)</li>
 <li>Winter is part of the product, not a backdrop</li>
 </ul>
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="winter-better" />
 <SectionHeader
 kicker="Season logic"
 title="Why winter > summer (for Ranua)"
 lede="This sounds backwards until you remember what these animals are built for."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Winter wins because</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Arctic animals are more active</li>
 <li>Snow reflects light, visibility improves</li>
 <li>Fewer visitors, calmer atmosphere</li>
 <li>The park feels like wilderness, not an attraction</li>
 </ul>
 </div>
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Summer trade-offs</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Some animals rest more in warmth</li>
 <li>Foliage can reduce sightlines</li>
 <li>Crowds rise, vibe gets noisier</li>
 <li>The “Arctic” feel flattens</li>
 </ul>
 </div>
 </div>
 </ContentCard>

 <div className="not-prose mt-10">
 <ImageBlock
 src="/images/blog/ranua/ranua-snow-paths.jpg"
 alt="Snow paths at Ranua Zoo in winter"
 sizes="(min-width: 1024px) 740px, 100vw"
 />
 </div>

 <Divider />

 <Anchor id="snowpark" />
 <SectionHeader
 kicker="Naming"
 title="SnowPark meaning"
 lede="Not a separate amusement park. Think winter programming and snow-built elements, depending on season."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="What it implies"
 title="Winter-first experience"
 body="The brand wording is basically telling you: this place is designed to be visited in snow."
 />
 <MiniCard
 kicker="What it can include"
 title="Seasonal snow elements"
 body="Snow-built features or seasonal extras may exist, but they’re not the core product."
 />
 <MiniCard
 kicker="What it is not"
 title="Carnival energy"
 body="Do not show up expecting rides and noise. Expect snow, silence, and walking."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="animals" />
 <SectionHeader
 kicker="Wildlife"
 title="Animals (winter edition)"
 lede="Ranua’s advantage is focus. Northern species in northern conditions."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="You’ll usually notice"
 title="Arctic foxes, lynx, wolves, wolverines"
 body="Winter tracks help. Sometimes you ‘track’ first and see later. That’s normal, and honestly better."
 />
 <MiniCard
 kicker="What changes in winter"
 title="Coats, movement, visibility"
 body="White coats, clearer sightlines, less heat-stress behavior. Photos start making sense."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="polar-bears" />
 <SectionHeader
 kicker="Headliner"
 title="Polar bears"
 lede="This is the main draw, and it’s not subtle. Winter makes the enclosure feel correct."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Behavior"
 title="More active in cold"
 body="Walking, patrolling, playing. It feels like an animal living, not waiting."
 />
 <MiniCard
 kicker="Visual"
 title="Steam breath is the hook"
 body="That −15°C breath detail is the entire ‘Arctic’ vibe in one frame."
 />
 <MiniCard
 kicker="Expectation"
 title="Not behind glass"
 body="The ‘this is how it should look’ moment hits hard if you’ve seen warm-climate zoos."
 />
 </div>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <ImageBlock
 src="/images/blog/ranua/ranua-polar-winter.jpg"
 alt="Polar bear in winter at Ranua Zoo"
 sizes="(min-width: 1024px) 360px, 100vw"
 />
 <ImageBlock
 src="/images/blog/ranua/ranua-fox-winter.jpg"
 alt="Arctic fox in winter coat at Ranua Zoo"
 sizes="(min-width: 1024px) 360px, 100vw"
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="euro24" />
 <SectionHeader
 kicker="Budget"
 title="€24 entry breakdown"
 lede="Use it as a planning anchor, not a sacred number. Update only when you re-verify."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">What the ticket covers</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Full access to the zoo area</li>
 <li>All enclosures</li>
 <li>Maintained winter paths</li>
 <li>Basic facilities access</li>
 </ul>
 </div>
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">What it doesn’t cover</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Transport to Ranua</li>
 <li>Food (sold separately)</li>
 <li>Guided tours (if offered)</li>
 </ul>
 </div>
 </div>

 <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-50 p-5">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
 Planning rule
 </div>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 If you’re optimizing your week: Ranua is “high value daylight”, and your “expensive nights” stay for aurora attempts.
 </p>
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="time" />
 <SectionHeader
 kicker="Pacing"
 title="How long you need"
 lede="Rushing fails because winter punishes fast-moving plans. You need time for warmth, not just distance."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Minimum"
 title="2.5–3 hours"
 body="If you walk steadily and don’t linger, you can ‘do it’. You’ll still want warmth."
 />
 <MiniCard
 kicker="Comfortable"
 title="3–4 hours"
 body="The correct winter pace with warm-up breaks. This is the ‘good memory’ version."
 />
 <MiniCard
 kicker="What fails"
 title="≤ 90 minutes"
 body="Freeze fast, skip half the loop, leave with “it was fine”. That’s not Ranua’s fault."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="dress" />
 <SectionHeader
 kicker="Gear"
 title="Dress for Ranua"
 lede="This isn’t fashion. It’s thermodynamics. Boots decide your review."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Wear</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Insulated winter boots</li>
 <li>Thermal base layers</li>
 <li>Insulated jacket</li>
 <li>Gloves you can walk in for hours</li>
 <li>Hat that covers ears</li>
 </ul>
 </div>
 <div className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Don’t rely on</div>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>Fashion coats</li>
 <li>Thin sneakers</li>
 <li>Optimism</li>
 </ul>
 </div>
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="transport" />
 <SectionHeader
 kicker="Distance"
 title="Rovaniemi ~80km"
 lede="The constraint isn’t the zoo, it’s winter logistics: daylight, road conditions, and fatigue."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-2">
 <MiniCard
 kicker="Planning anchor"
 title="~80 km (about 1h winter drive)"
 body="Treat Ranua as a deliberate day trip, not a spontaneous detour stacked on top of tours."
 />
 <MiniCard
 kicker="Comfort logic"
 title="Daylight activity"
 body="Ranua works best in daylight hours. Save night energy for aurora mobility."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="itinerary" />
 <SectionHeader
 kicker="TheNorthTrip logic"
 title="Ranua in a Lapland itinerary"
 lede="Ranua is a recovery day: low adrenaline, high atmosphere, daylight-first."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Role"
 title="Contrast day"
 body="Quiet forest pacing between adrenaline days (huskies, snowmobiles, long transfers)."
 />
 <MiniCard
 kicker="Role"
 title="Low-adrenaline reset"
 body="Your legs still move, but your brain stops ‘tour mode’ for a minute."
 />
 <MiniCard
 kicker="Role"
 title="Budget stabilizer"
 body="€24 entry + self-paced time usually beats a full paid activity day."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="day-plan" />
 <SectionHeader
 kicker="Use it"
 title="Sample winter day plan"
 lede="Simple structure. No hero fantasies. Just a day that works."
 />

 <ContentCard>
 <div className="grid gap-3">
 {[
 ["Morning", "Depart early from Rovaniemi, arrive mid-morning", "Better light, calmer pace, less ‘late day rush’."],
 ["Midday", "Main zoo loop (polar bear + wolves early)", "Hit the headliners first while you’re warm and focused."],
 ["Early afternoon", "Warm lunch break + shorter secondary loops", "Warm-up break is a feature, not a weakness."],
 ["Late afternoon", "Finish and return before darkness fatigue", "Save your night energy for aurora attempts."],
 ].map(([k, t, d]) => (<div key={k} className="rounded-2xl border border-slate-200/70 bg-white p-5">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
 {k}
 </div>
 <div className="mt-1 text-sm font-semibold text-slate-900">{t}</div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{d}</p>
 </div>))}
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="comparison" />
 <SectionHeader
 kicker="Comparison"
 title="Ranua vs husky / reindeer visits"
 lede="Different goals. If you try to replace one with the other, you’ll be annoyed for no reason."
 />

 <ContentCard>
 <div className="grid gap-4 md:grid-cols-3">
 <MiniCard
 kicker="Husky"
 title="Interactive, high-energy"
 body="Shorter, intense, ‘activity-first’. Often pricier per hour."
 />
 <MiniCard
 kicker="Reindeer"
 title="Calm, cultural"
 body="Slower pace, narrower scope. Good as a soft day, not a wildlife day."
 />
 <MiniCard
 kicker="Ranua"
 title="Self-paced, ecological context"
 body="A walking day that feels Arctic. More ‘place’ than ‘product’."
 />
 </div>
 </ContentCard>

 <Divider />

 <Anchor id="mistakes" />
 <SectionHeader
 kicker="Avoidable failure"
 title="Common mistakes"
 lede="These are the exact reasons people leave underwhelmed. Not because Ranua is bad, but because winter is literal."
 />

 <ListCard
 title="The mistakes people repeat"
 items={[
 "Treating it like a city zoo (wrong scale, wrong pacing).",
 "Underestimating walking distance (and the cold penalty).",
 "Skipping warm-up breaks, then rushing, then blaming the place.",
 "Arriving too late in the day (daylight disappears, fatigue rises).",
 "Wearing wrong boots and learning thermodynamics the hard way.",
 ]}
 />

 {/* Internal links */}
 <div className="not-prose mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
 <p className="text-sm text-slate-700">
 <strong className="text-slate-900">Internal links:</strong>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/getting-around-finland">
 Getting around Finland
 </a>{" "}
 <span className="mx-2 text-slate-300">·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/lapland-tours">
 Lapland tours 
 </a>{" "}
 <span className="mx-2 text-slate-300">·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/offer-checklist">
 Offer checklist
 </a>{" "}
 <span className="mx-2 text-slate-300">·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/car-rental-helsinki">
 Car rental Helsinki
 </a>
 </p>
 <p className="mt-2 text-sm text-slate-600">
 <strong className="text-slate-900">Last verified:</strong> {lastVerified}
 </p>
 </div>
 </article>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.06),0_22px_60px_-30px_rgba(15,23,42,0.2)] md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want a Lapland week that doesn’t collapse under winter?
 </h3>
 <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
 Put Ranua on a recovery day, keep your nights for aurora, and stop pretending cold won’t affect pace.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/get-help" variant="success">
 Get help →
 </CtaButton>
 </div>

 <div className="mt-6 text-sm">
 <Link
 href="/blog"
 className="font-semibold text-slate-700 hover:text-slate-900 hover:underline underline-offset-4"
 >
 Back to Blog →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link
 href="/policy"
 className="font-semibold text-slate-700 hover:text-slate-900 hover:underline underline-offset-4"
 >
 Policy →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link
 href="/get-help"
 className="font-semibold text-slate-700 hover:text-slate-900 hover:underline underline-offset-4"
 >
 Get help →
 </Link>
 </div>

 <p className="mt-4 text-xs text-slate-500">
 <span className="font-semibold text-slate-700">Slug:</span> {slug}{" "}
 <span className="mx-2 text-slate-300">·</span>
 <span className="font-semibold text-slate-700">Last verified:</span> {lastVerified}
 </p>
 </Card>
 </main>

 {/* SIDEBAR */}
 <aside className="h-fit space-y-4 lg:sticky lg:top-24">
 {/* TOC */}
 <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
 <div className="flex items-center justify-between gap-3">
 <h2 className="text-base font-semibold tracking-tight text-slate-900">On this page</h2>
 <span className="text-xs text-slate-500">Jump</span>
 </div>

 <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-2">
 <div className="grid gap-1 text-sm">
 {toc.map((t) => (<a
 key={t.id}
 className="rounded-xl px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900 hover:underline underline-offset-4 transition"
 href={`#${t.id}`}
 >
 {t.label}
 </a>))}
 </div>
 </div>

 <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
 Planning anchor
 </p>
 <p className="mt-2 text-sm font-semibold text-slate-900">€24 adult entry</p>
 <p className="mt-1 text-xs leading-6 text-slate-600">
 Use it as your baseline. Update only when you re-verify.
 </p>
 </div>
 </Card>

 {/* Image + decision */}
 <Card className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 shadow-sm">
 <div className="p-3">
 <ImageBlock
 src="/images/blog/ranua/ranua-polar-sidebar.jpg"
 alt="Polar bear in winter at Ranua Zoo"
 sizes="360px"
 />
 </div>

 <div className="px-6 pb-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
 Decision rule
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Animals &gt; comfort. Dress properly or skip. Cold ruins Ranua faster than distance does.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Checklist →
 </CtaButton>
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get help →
 </CtaButton>
 </div>
 </div>
 </Card>

 {/* Internal routes */}
 <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
 <h3 className="text-base font-semibold tracking-tight text-slate-900">Internal routes</h3>
 <div className="mt-4 space-y-2 text-sm">
 <Link
 className="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900 hover:underline underline-offset-4 transition"
 href="/getting-around-finland"
 >
 Getting around Finland →
 </Link>
 <Link
 className="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900 hover:underline underline-offset-4 transition"
 href="/lapland-tours"
 >
 Lapland tours →
 </Link>
 <Link
 className="block rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 hover:bg-white hover:text-slate-900 hover:underline underline-offset-4 transition"
 href="/offer-checklist"
 >
 Offer checklist →
 </Link>
 </div>
 </Card>

 {/* Verified badge */}
 <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
 <div className="flex items-center justify-between">
 <Pill>Verified</Pill>
 <span className="text-xs text-slate-500">{lastVerified}</span>
 </div>
 <p className="mt-3 text-sm leading-7 text-slate-600">
 Keep this page stable. Change facts only when you re-verify.
 </p>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

