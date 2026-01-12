import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Santa Claus Village Snow Reality 2026: What’s Free, What Costs Money, When to Go",
 description:
 "Santa Claus Village in snow (2026): free entry, Santa meeting (free) vs photo (€30–50), snow slides (€10), best time after 18:00 for lights, March melt reality, and bus basics (8 km, €4–7 RT).",
 openGraph: {
 title: "Santa Claus Village Snow Reality 2026",
 description:
 "A practical, human guide: what’s free, what’s paid, best snow timing, crowd hacks, and why it’s better after dark.",
 images: ["/images/og/og-santa-village-snow-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Santa Claus Village Snow Reality 2026",
 description: "Free entry vs paid extras, snow timing, bus basics, and crowd hacks that work.",
 images: ["/images/og/og-santa-village-snow-2026.jpg"],
 },
};

const lastVerified = "2026-01-04";

const visuals = [
 {
 title: "Arctic Circle line in fresh snow",
 body: "Quick stop, surprisingly memorable. Snow makes it feel “real.”",
 image: "/images/blog/santa-village-snow-2026/arctic-circle-snow.jpg",
 alt: "Arctic Circle line at Santa Claus Village framed by snow (2026)",
 },
 {
 title: "Blue-hour lights after 18:00",
 body: "The village looks better in the dark. Yes, really.",
 image: "/images/blog/santa-village-snow-2026/lights-blue-hour.jpg",
 alt: "Santa Claus Village lights reflecting in snow after dark (2026)",
 },
 {
 title: "Santa House: the meeting vs the photo",
 body: "Meeting Santa is free. The photo is where money happens.",
 image: "/images/blog/santa-village-snow-2026/santa-house-window.jpg",
 alt: "Santa House warm window light with snowfall at Santa Village (2026)",
 },
 {
 title: "Morning snow: calmer, cleaner, better photos",
 body: "If you hate crowds, mornings do most of the work for you.",
 image: "/images/blog/santa-village-snow-2026/reindeer-tracks-morning.jpg",
 alt: "Fresh snow morning scene near Santa Claus Village (2026)",
 },
];

const toc = [
 { id: "what-it-is", label: "What it is (and isn’t)" },
 { id: "free-vs-paid", label: "What’s free vs paid" },
 { id: "snow-timing", label: "Snow timing: best months" },
 { id: "santa-photo", label: "Santa meeting vs photo" },
 { id: "arctic-circle", label: "Arctic Circle line" },
 { id: "crowd-hacks", label: "Crowd hacks" },
 { id: "getting-there", label: "Getting there (bus)" },
 { id: "after-dark", label: "After dark: why it’s better" },
 { id: "march-melt", label: "Late March melt" },
 { id: "aurora", label: "Aurora: possible, but…" },
 { id: "mini-plan", label: "Half-day plan" },
 { id: "mistakes", label: "Common mistakes" },
 { id: "faq", label: "FAQ" },
 { id: "final", label: "Final note" },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function InfoPill({ children }: { children: ReactNode }) {
 return (<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 {children}
 </span>);
}

function Kicker({ children }: { children: ReactNode }) {
 return (<div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
 {children}
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
 return (<div className="not-prose mb-6">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
 {kicker}
 </div>
 <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 {title}
 </h2>
 {lede? (<p className="mt-3 max-w-[72ch] text-sm leading-7 text-slate-700">
 {lede}
 </p>): null}
 </div>);
}

function ListCard({ title, items }: { title: string; items: string[] }) {
 return (<div className="not-prose rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
 <div className="text-sm font-semibold text-slate-900">{title}</div>
 <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
 {items.map((t) => (<li key={t} className="flex gap-3">
 <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-slate-300" />
 <span>{t}</span>
 </li>))}
 </ul>
 </div>);
}

function FaqItem({ q, a }: { q: string; a: string }) {
 return (<div className="not-prose rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur">
 <div className="text-sm font-semibold text-slate-900">{q}</div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{a}</p>
 </div>);
}

function Callout({
 title,
 body,
 tone = "neutral",
}: {
 title: string;
 body: string;
 tone?: "neutral" | "success" | "warning";
}) {
 const styles =
 tone === "success"? "border-emerald-200/70 bg-emerald-50/60": tone === "warning"? "border-amber-200/70 bg-amber-50/60": "border-slate-200/70 bg-slate-50/60";

 return (<div className={`not-prose rounded-2xl border p-5 shadow-sm ${styles}`}>
 <div className="flex items-start justify-between gap-4">
 <div className="text-sm font-semibold text-slate-900">{title}</div>
 <span className="mt-[2px] h-2 w-2 shrink-0 rounded-full bg-slate-300" />
 </div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{body}</p>
 </div>);
}

function SoftDivider() {
 return (<div className="not-prose my-12 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />);
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
 return (<div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm backdrop-blur">
 <div className="text-xs font-medium text-slate-600">{label}</div>
 <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
 <div className="mt-1 text-xs text-slate-600">{note}</div>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 title="Santa Claus Village (Snow Reality) 2026"
 subtitle="Free entry, paid photos, better after dark, and the simple timing rules that stop this day from turning into chaos."
 imageSrc="/images/blog/santa-village-snow-2026/hero.jpg"
 primaryCta={{ href: "/lapland-tours", label: "Lapland tours " }}
 secondaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 />

 {/* Magazine background */}
 <div className="relative">
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:26px_26px]" />
 <div className="absolute left-0 top-0 h-[320px] w-full bg-gradient-to-b from-slate-50/70 to-transparent" />
 <div className="absolute inset-x-0 top-[240px] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
 </div>

 {/* Top utility bar */}
 <Section>
 <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
 <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
 <span className="font-semibold text-slate-900">Blog</span>
 <span className="text-slate-300">·</span>
 <span className="text-slate-500">Last verified: {lastVerified}</span>
 <span className="hidden text-slate-300 sm:inline">·</span>
 <span className="hidden sm:inline-flex">
 <InfoPill>Free entry, paid photo, snow timing</InfoPill>
 </span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/blog">
 Back to Blog
 </Link>
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/rovaniemi">
 Rovaniemi guide
 </Link>
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/lapland-tours">
 Lapland tours
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
 {/* MAIN */}
 <div>
 {/* Featured visual rail */}
 <div className="grid gap-4 md:grid-cols-2">
 {visuals.map((v) => (<Card
 key={v.title}
 className="group overflow-hidden p-0 shadow-[0_1px_0_rgba(15,23,42,0.05),0_25px_60px_-55px_rgba(15,23,42,0.35)]"
 >
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={v.image}
 alt={v.alt}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
 sizes="(min-width: 1024px) 520px, (min-width: 768px) 520px, 100vw"
 priority={v.title === "Arctic Circle line in fresh snow"}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-5">
 <div className="max-w-[34ch] text-base font-semibold tracking-tight text-white">
 {v.title}
 </div>
 <div className="mt-2 max-w-[46ch] text-sm leading-7 text-white/85">
 {v.body}
 </div>
 </div>
 </div>
 </Card>))}
 </div>

 {/* Article shell */}
 <div className="mt-8 rounded-[28px] border border-slate-200/70 bg-white/75 shadow-[0_1px_0_rgba(15,23,42,0.06),0_50px_110px_-85px_rgba(15,23,42,0.55)] backdrop-blur">
 {/* Lead / Editor box */}
 <div className="border-b border-slate-200/70 px-6 py-6 md:px-10">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
 <div className="space-y-2">
 <Kicker>Editor’s note</Kicker>
 <p className="max-w-3xl text-sm leading-7 text-slate-700">
 People arrive expecting “Christmas movie magic.” What they get first is cold, darkness, and logistics.
 The magic shows up when you use the place correctly: treat it as a short, high-impact visit with clear choices
 (what’s free, what’s paid, and when the lighting is actually good).
 </p>
 <div className="text-xs text-slate-500">
 Jump to:{" "}
 <a
 className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
 href="#free-vs-paid"
 >
 free vs paid
 </a>{" "}
 <span className="mx-2 text-slate-300">•</span>
 <a
 className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
 href="#after-dark"
 >
 after dark
 </a>{" "}
 <span className="mx-2 text-slate-300">•</span>
 <a
 className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
 href="#march-melt"
 >
 March melt
 </a>
 </div>
 </div>

 <div className="grid w-full gap-3 sm:w-[320px]">
 <Stat label="Entry" value="Free" note="Open year-round" />
 <div className="grid gap-3 sm:grid-cols-2">
 <Stat label="Santa photo" value="€30–50" note="Meeting is free" />
 <Stat label="Best look" value="After 18:00" note="Lights + snow" />
 </div>
 </div>
 </div>
 </div>

 <article
 className="
 prose prose-slate max-w-none px-6 py-10 md:px-10 md:py-12
 prose-headings:tracking-tight
 prose-h2:mt-12 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold
 prose-h3:mt-8 prose-h3:text-xl prose-h3:font-semibold
 prose-p:my-6 prose-p:leading-8
 prose-a:text-slate-900 prose-a:font-semibold prose-a:underline prose-a:underline-offset-4
 prose-a:decoration-slate-300 hover:prose-a:decoration-slate-900
 prose-strong:text-slate-900
 prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6
 prose-li:my-0 prose-li:leading-8
 prose-hr:my-12 prose-hr:border-slate-200
 "
 >
 <Anchor id="what-it-is" />
 <h2>What it is (and what it isn’t)</h2>
 <p>
 Santa Claus Village is not a gated theme park. It’s more like a small holiday village you walk through:
 lights, snow, shops, short activities, and photo moments. That’s why it works, and also why it disappoints
 people who try to force it into a full-day “master plan.”
 </p>
 <ul>
 <li>
 <strong>It is:</strong> an easy winter stop with strong visuals and a few optional paid extras.
 </li>
 <li>
 <strong>It is not:</strong> guaranteed aurora, unlimited “free magic,” or a full-day itinerary by itself.
 </li>
 </ul>

 <Callout
 tone="success"
 title="The simple rule"
 body="Plan it as a half-day visit. If you treat it like a full day, you’ll pay for time you don’t actually need."
 />

 <SoftDivider />

 <Anchor id="free-vs-paid" />
 <h2>What’s free vs paid (the part people get wrong)</h2>
 <p>
 The best surprise: <strong>entry is free</strong>, and the village is <strong>open year-round</strong>.
 You can walk, take your own photos, cross the Arctic Circle line, and enjoy the atmosphere without spending much.
 </p>

 <div className="not-prose mt-6 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <p className="text-sm font-semibold text-slate-900">Free basics</p>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>
 Entry: <strong>€0</strong> (open year-round)
 </li>
 <li>Walk-through + lights + atmosphere</li>
 <li>Arctic Circle line crossing (the moment is free)</li>
 <li>Webcam live (yes, you can wave to family)</li>
 </ul>
 </Card>

 <Card className="p-6">
 <p className="text-sm font-semibold text-slate-900">Typical paid extras</p>
 <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
 <li>
 Santa photo: <strong>€30–50</strong> (meeting is free)
 </li>
 <li>
 Snow slides / “temp slide”: <strong>€10 per person</strong>
 </li>
 <li>Souvenirs and certificates: optional add-ons</li>
 </ul>
 </Card>
 </div>

 <Callout
 tone="warning"
 title="Avoid the ‘surprise checkout’ moment"
 body="Decide ahead of time if you want the official Santa photo. If you decide on the spot, it’s easier to overspend."
 />

 <SoftDivider />

 <Anchor id="snow-timing" />
 <h2>Snow timing: when it’s best (and when it gets tricky)</h2>
 <p>
 Santa Village looks its best with stable snow. But snow is not a subscription service.
 Think in seasons, not vibes.
 </p>

 <h3>November–December: strong winter visuals</h3>
 <p>
 Daylight is limited. Around late November, sunrise can be around <strong>10:00</strong> and sunset around{" "}
 <strong>15:00</strong>. That means your “best photo window” is short, and the village shifts into evening mode fast.
 </p>

 <h3>Late March: melt + slippery surfaces</h3>
 <p>
 Late March can bring thawing and slick walkways. Bring traction (shoe spikes) if you don’t enjoy
 ice-skating in normal shoes.
 </p>

 <SoftDivider />

 <Anchor id="santa-photo" />
 <h2>Santa meeting vs photo: what you’re actually paying for</h2>
 <p>
 The Santa House visit is simple: <strong>meeting Santa is free</strong>. The photo is the paid part.
 If you want the printed/official photo, budget for it. If you don’t, enjoy the moment and move on.
 </p>
 <ul>
 <li>
 <strong>Meeting:</strong> free
 </li>
 <li>
 <strong>Photo:</strong> typically <strong>€30–50</strong>
 </li>
 </ul>

 <SoftDivider />

 <Anchor id="arctic-circle" />
 <h2>Arctic Circle line: why it’s worth 5 minutes</h2>
 <p>
 Rationally, it’s a line. Emotionally, it’s a marker: “you’re here.” Snow makes it feel more genuine.
 Certificates/souvenirs are optional. The crossing itself is the point.
 </p>

 <SoftDivider />

 <Anchor id="crowd-hacks" />
 <h2>Crowd hacks that actually work</h2>
 <p>Santa Village has two modes: calm and crowded. The difference is often just timing.</p>
 <ul>
 <li>
 <strong>Go early</strong> for cleaner snow and fewer people.
 </li>
 <li>
 <strong>Return after dark</strong> for lights (it looks better after 18:00).
 </li>
 <li>Don’t force a full-day schedule. Half-day is the sweet spot.</li>
 <li>
 Split strategy: <strong>morning calm</strong> + <strong>evening lights</strong>, with something else in between.
 </li>
 </ul>

 <SoftDivider />

 <Anchor id="getting-there" />
 <h2>Getting there: 8 km from Rovaniemi, bus €4–7 round trip</h2>
 <p>
 The village is about <strong>8 km</strong> from central Rovaniemi. The simplest solution is the bus,
 with a planning anchor of <strong>€4–7</strong> for a round trip (varies by ticket/type).
 </p>
 <p>The main mistake is improvising the return. You don’t need a spreadsheet, but you do need a rough plan.</p>

 <SoftDivider />

 <Anchor id="after-dark" />
 <h2>After dark: why it looks better after 18:00</h2>
 <p>
 In daylight, it’s “nice.” After dark, it’s the version people remember. Lights reflect in snow,
 the village feels quieter, and photos look dramatically better.
 </p>

 <SoftDivider />

 <Anchor id="march-melt" />
 <h2>Late March melt: the “slippery reality” section</h2>
 <p>
 Late March can be beautiful, but thaw means slick surfaces. If you’re visiting in that window,
 bring traction or accept that you’ll walk slower. Fighting it is how ankles get upgraded to “souvenir.”
 </p>

 <SoftDivider />

 <Anchor id="aurora" />
 <h2>Aurora: possible, but don’t build the day around it</h2>
 <p>
 Aurora can be visible around Rovaniemi, but city lights reduce your odds. If aurora is a priority,
 a mobile tour that escapes light pollution usually performs better than standing under streetlights and hoping.
 </p>

 <SoftDivider />

 <Anchor id="mini-plan" />
 <h2>Half-day plan (clean and realistic)</h2>
 <div className="not-prose mt-6 grid gap-3">
 {[
 ["Option A (daytime)", "Arctic Circle + walk-through + free layer", "Quick visuals, calmer pace, less crowd pressure."],
 ["Option B (evening)", "Lights + blue hour photos", "Better atmosphere. Strongest version of the village."],
 ["Option C (split)", "Morning calm + evening return", "Best overall: clean snow early, lights later. No wasted hours."],
 ].map(([k, t, d]) => (<div
 key={k}
 className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur"
 >
 <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">{k}</div>
 <div className="mt-1 text-sm font-semibold text-slate-900">{t}</div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{d}</p>
 </div>))}
 </div>

 <SoftDivider />

 <Anchor id="mistakes" />
 <SectionHeader
 kicker="Avoidable chaos"
 title="Common mistakes"
 lede="Same place, same traps. If you dodge these, the whole visit feels ‘clean’ instead of expensive and rushed."
 />

 <ListCard
 title="The mistakes people repeat"
 items={[
 "Assuming everything is free (entry is free, key extras are not).",
 "Scheduling it as a full day and then running out of meaningful content.",
 "Skipping the after-dark version (it’s simply better after 18:00).",
 "Late March without traction and then being surprised by ice.",
 "Building your plan around aurora inside town lights.",
 ]}
 />

 <SoftDivider />

 <Anchor id="faq" />
 <SectionHeader
 kicker="Fast answers"
 title="FAQ"
 lede="Short, boring, useful answers. The internet can keep the fluff."
 />

 <div className="not-prose grid gap-4">
 <FaqItem q="Is entry really free?" a="Yes. Entry is free and the village is open year-round." />
 <FaqItem q="Is meeting Santa free?" a="Yes. The meeting is free. The official photo is typically €30–50." />
 <FaqItem q="What time is best?" a="After dark, especially after 18:00, when lights and snow do the heavy lifting." />
 <FaqItem q="Is late March still worth it?" a="It can be, but expect thaw and slippery surfaces. Bring traction." />
 </div>

 <SoftDivider />

 <Anchor id="final" />
 <SectionHeader kicker="Wrap" title="Final note" />

 <p>
 Santa Claus Village works when you keep it simple: free entry, clear decisions about paid
 extras, and timing that respects daylight and lighting. Half-day is enough. After dark is the
 best version.
 </p>

 <div className="not-prose mt-10 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5">
 <p className="text-sm text-slate-700">
 <strong className="text-slate-900">Internal links:</strong>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/rovaniemi">
 Rovaniemi winter guide
 </a>{" "}
 <span className="mx-2 text-slate-300">·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/lapland-tours">
 Lapland tours 
 </a>{" "}
 <span className="mx-2 text-slate-300">·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/offer-checklist">
 Offer checklist
 </a>
 </p>
 <p className="mt-2 text-sm text-slate-600">
 <strong className="text-slate-900">Last verified:</strong> {lastVerified}
 </p>
 </div>
 </article>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-8 p-6 md:p-8 shadow-[0_1px_0_rgba(15,23,42,0.06),0_25px_60px_-55px_rgba(15,23,42,0.35)]">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want to book smarter (and avoid paying for vague “tour duration”)?
 </h3>
 <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
 Use the checklist. Verify what’s free, what’s paid, and what you’re actually buying (timing, transfers, real activity time).
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/get-help" variant="outline">
 Get help →
 </CtaButton>
 </div>

 <div className="mt-6 text-sm">
 <Link href="/blog" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Back to Blog →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/policy" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Policy →
 </Link>
 </div>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
 {/* TOC */}
 <Card className="p-6 shadow-[0_1px_0_rgba(15,23,42,0.06),0_25px_60px_-55px_rgba(15,23,42,0.30)]">
 <div className="flex items-end justify-between gap-4">
 <div>
 <Kicker>Navigation</Kicker>
 <h2 className="mt-2 text-base font-semibold tracking-tight text-slate-900">On this page</h2>
 </div>
 <div className="text-xs text-slate-500">13 sections</div>
 </div>

 <div className="mt-4 grid gap-1">
 {toc.map((t) => (<a
 key={t.id}
 className="group relative rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
 href={`#${t.id}`}
 >
 <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-full bg-transparent group-hover:bg-slate-300" />
 <span className="hover:underline underline-offset-4">{t.label}</span>
 </a>))}
 </div>
 </Card>

 {/* Sidebar hero card */}
 <Card className="overflow-hidden p-0 shadow-[0_1px_0_rgba(15,23,42,0.06),0_25px_60px_-55px_rgba(15,23,42,0.35)]">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src="/images/blog/santa-village-snow-2026/sidebar.jpg"
 alt="Santa Claus Village winter lights and snow (2026)"
 fill
 className="object-cover"
 sizes="380px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
 <div className="absolute bottom-0 left-0 right-0 p-5">
 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
 Decision rule
 </div>
 <div className="mt-2 text-sm leading-7 text-white/90">
 Entry is free. Money is spent on photos and extras. Decide ahead of time and the whole visit feels cleaner.
 </div>
 </div>
 </div>
 <div className="p-6">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Offer checklist →
 </CtaButton>
 </div>
 </Card>

 {/* move */}
 <Card className="p-6 shadow-[0_1px_0_rgba(15,23,42,0.06),0_25px_60px_-55px_rgba(15,23,42,0.30)]">
 <Kicker>Routing</Kicker>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Treat Santa Village as a half-day stop. Use Rovaniemi as the for tours and proper night mobility.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/rovaniemi" variant="success" className="w-full">
 Rovaniemi guide →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline" className="w-full">
 Lapland tours →
 </CtaButton>
 </div>
 </Card>

 {/* Verified */}
 <Card className="p-6">
 <Kicker>Last verified</Kicker>
 <p className="mt-2 text-sm font-semibold text-slate-900">{lastVerified}</p>
 <p className="mt-2 text-xs text-slate-500">Keep this honest. If you change numbers, update the date.</p>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

