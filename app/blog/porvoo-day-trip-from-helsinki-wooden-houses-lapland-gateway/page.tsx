import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Porvoo Day Trip from Helsinki: Old Town, Bus, Wooden Houses (2026)",
 description:
 "Porvoo day trip from Helsinki in 2026: Porvoo Old Town highlights, Helsinki–Porvoo bus basics (~€8, ~1 hour), what to do without rushing, and why it works as a pre-Lapland tempo reset.",
 openGraph: {
 title: "Porvoo Day Trip from Helsinki: Old Town, Bus, Wooden Houses (2026)",
 description:
 "Porvoo day trip from Helsinki in 2026: Porvoo Old Town highlights, Helsinki–Porvoo bus basics (~€8, ~1 hour), what to do without rushing, and why it works as a pre-Lapland tempo reset.",
 images: ["/images/og/og-blog.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Porvoo Day Trip from Helsinki: Old Town, Bus, Wooden Houses (2026)",
 description:
 "Porvoo day trip from Helsinki in 2026: Porvoo Old Town highlights, Helsinki–Porvoo bus basics (~€8, ~1 hour), what to do without rushing, and why it works as a pre-Lapland tempo reset.",
 images: ["/images/og/og-blog.jpg"],
 },
};

const slug = "porvoo-day-trip-helsinki-2026";
const lastVerified = "2026-01-04";

const FALLBACK_IMG = "/images/og/og-blog.jpg";
function safeImg(src: string) {
 return src?.trim()? src: FALLBACK_IMG;
}

const visuals = [
 {
 title: "Porvoo winter riverfront",
 body: "Red warehouses in snow = iconic start.",
 image: "/images/blog/porvoo/porvoo-winter-river.jpg",
 },
 {
 title: "Old town snow streets",
 body: "Cobblestones + snow = perfect pace.",
 image: "/images/blog/porvoo/porvoo-old-town-snow.jpg",
 },
 {
 title: "Helsinki–Porvoo bus",
 body: "€8, 1h, no drama. Correct choice.",
 image: "/images/blog/porvoo/helsinki-porvoo-bus.jpg",
 },
 {
 title: "Winter café window",
 body: "Finnish pacing exported.",
 image: "/images/blog/porvoo/porvoo-cafe-winter.jpg",
 },
];

const toc = [
 { id: "bus", label: "Helsinki–Porvoo bus" },
 { id: "old-town", label: "Porvoo Old Town" },
 { id: "winter", label: "Winter vs summer" },
 { id: "lapland", label: "Lapland gateway" },
 { id: "itinerary", label: "Half-day plan" },
 { id: "mistakes", label: "Common mistakes" },
 { id: "tips", label: "Practical tips" },
 { id: "conclusion", label: "Final word" },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
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
 return (<div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={safeImg(src)}
 alt={alt}
 fill
 className="object-cover"
 sizes={sizes}
 priority={priority}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 title="Porvoo Day Trip from Helsinki"
 subtitle="Wooden houses, old town streets, and a quiet tempo reset before the north."
 imageSrc="/images/blog/porvoo/hero.jpg"
 primaryCta={{ href: "/helsinki-to-lapland", label: "Helsinki → Lapland" }}
 secondaryCta={{ href: "/offer-checklist", label: "Checklist" }}
 />

 <div className="relative">
 {/* background texture + soft decor */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:22px_22px]" />
 <div className="absolute left-0 top-0 h-[260px] w-full bg-gradient-to-b from-slate-50/70 to-transparent" />
 </div>

 {/* top bar */}
 <Section>
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="text-sm text-slate-600">
 <span className="font-medium text-slate-900">Blog</span>{" "}
 <span className="text-slate-300">·</span>{" "}
 <span className="text-slate-500">Last verified: {lastVerified}</span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/blog">
 Back to Blog
 </Link>
 <Link
 className="hover:text-slate-900 hover:underline underline-offset-4"
 href="/offer-checklist"
 >
 Offer checklist
 </Link>
 <Link
 className="hover:text-slate-900 hover:underline underline-offset-4"
 href="/helsinki-to-lapland"
 >
 Helsinki → Lapland
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div>
 {/* Visual grid */}
 <div className="grid gap-4 md:grid-cols-2">
 {visuals.map((v) => (<Card key={v.title} className="group overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={safeImg(v.image)}
 alt={v.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
 sizes="(min-width: 768px) 520px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <h2 className="text-base font-semibold tracking-tight text-slate-900">
 {v.title}
 </h2>
 <p className="mt-2 text-sm leading-7 text-slate-700">{v.body}</p>
 </div>
 </Card>))}
 </div>

 {/* Article "paper" container */}
 <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/75 shadow-[0_1px_0_rgba(15,23,42,0.05),0_40px_90px_-70px_rgba(15,23,42,0.45)] backdrop-blur">
 <article
 className="
 prose prose-slate max-w-none px-6 py-10 md:px-10 md:py-12
 prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl
 prose-a:text-slate-900 prose-a:font-semibold prose-a:underline
 hover:prose-a:decoration-slate-900 prose-ul:my-6 prose-li:leading-8
 "
 >
 <p>Porvoo is what happens when Finland decides to be charming on purpose.</p>
 <p>
 Just 50 km east of Helsinki, Porvoo feels like a historical anomaly: wooden
 houses, medieval streets, and a riverfront that looks like it was designed to
 sell postcards. And yes, it absolutely works.
 </p>
 <p>
 This guide explains why <strong>Porvoo Old Town</strong> matters, how the{" "}
 <strong>Helsinki–Porvoo bus</strong> actually works, what to do without rushing,
 and why Porvoo is a “Lapland gateway” in mindset only (not in transport).
 </p>

 <hr />

 <h2>Why Porvoo is the perfect Helsinki day trip</h2>
 <p>Porvoo succeeds because it’s:</p>
 <ul>
 <li>close</li>
 <li>compact</li>
 <li>genuinely different from Helsinki</li>
 </ul>
 <p>
 In about an hour, you go from capital city to preserved old-town streets without
 committing to a hotel move or reworking your itinerary. That’s rare. And that’s
 why Porvoo keeps winning.
 </p>

 <hr />

 <Anchor id="bus" />
 <h2>Getting there: Helsinki–Porvoo bus (simple, boring, correct)</h2>
 <p>The simplest route is the <strong>Helsinki–Porvoo bus</strong>.</p>
 <ul>
 <li>
 <strong>Travel time:</strong> ~1 hour (planning number)
 </li>
 <li>
 <strong>Price anchor:</strong> ~€8 one way (planning number)
 </li>
 <li>
 <strong>Frequency:</strong> regular, year-round (varies by day/time)
 </li>
 </ul>
 <p>
 No romance, no drama: you show up, you sit down, you arrive. The only real
 mistake is assuming you can freestyle return times without checking at least
 roughly.
 </p>

 <hr />

 <Anchor id="old-town" />
 <h2>Porvoo Old Town: why it’s not a gimmick</h2>
 <p>
 Porvoo Old Town looks curated because it is preserved, not staged.
 Tourist-friendly, yes. Fake, no.
 </p>
 <p>You’ll find:</p>
 <ul>
 <li>18th-century wooden houses</li>
 <li>cobblestone streets</li>
 <li>small artisan shops</li>
 <li>cafés that don’t rush you</li>
 </ul>

 <hr />

 <h2>What to actually do in Porvoo (without overplanning)</h2>

 <h3>Walk the riverfront</h3>
 <p>
 The iconic red warehouses exist for a reason. They define Porvoo visually and
 historically. Start here, then drift inward.
 </p>

 <h3>Explore the old town streets</h3>
 <p>
 Don’t follow Google Maps aggressively. Wandering works here. The point is pace,
 not efficiency.
 </p>

 <h3>Coffee and lunch</h3>
 <p>
 Porvoo cafés understand pacing. Sit, eat, watch the weather shift. That’s
 basically the Finnish lifestyle export package.
 </p>

 <h3>Small museums (optional)</h3>
 <p>
 Only if weather forces you inside. Porvoo’s best value is outdoors and
 unhurried.
 </p>

 <hr />

 <Anchor id="winter" />
 <h2>Porvoo in winter vs summer</h2>
 <p>Summer Porvoo is lively. Winter Porvoo is quietly beautiful.</p>
 <p>In winter:</p>
 <ul>
 <li>fewer crowds</li>
 <li>snow softens the angles</li>
 <li>cafés feel cozier</li>
 <li>the streets slow down</li>
 </ul>
 <p>
 If you’re already traveling Finland in winter, Porvoo fits naturally. It
 doesn’t demand a new wardrobe or a new mindset. It just settles you.
 </p>

 <hr />

 <Anchor id="lapland" />
 <h2>Porvoo as a “Lapland gateway” (mentally, not logistically)</h2>
 <p>Porvoo is not a transport to Lapland. Kill that idea immediately.</p>
 <p>What it is:</p>
 <ul>
 <li>a pace reset</li>
 <li>a reminder of Finnish history</li>
 <li>a gentle transition from urban Helsinki to northern mindset</li>
 </ul>
 <p>
 Visit Porvoo before Lapland, and you arrive north more patient. That’s not
 fluff. That’s psychology. Lapland punishes rushed schedules. Porvoo quietly
 fixes your tempo first.
 </p>

 <hr />

 <Anchor id="itinerary" />
 <h2>Sample Helsinki + Porvoo half-day plan</h2>
 <ul>
 <li>Morning: bus to Porvoo</li>
 <li>Midday: old town walk + lunch</li>
 <li>Afternoon: riverfront + coffee</li>
 <li>Evening: bus back to Helsinki</li>
 </ul>
 <p>
 No stress, no rushing, no reason to stay overnight unless you specifically want
 silence.
 </p>

 <hr />

 <Anchor id="mistakes" />
 <h2>Common Porvoo mistakes</h2>
 <ul>
 <li>trying to “do everything”</li>
 <li>overbooking museums</li>
 <li>rushing lunch</li>
 <li>visiting only shops</li>
 <li>treating it like a checklist</li>
 </ul>
 <p>Porvoo rewards slowness. That’s the entire point.</p>

 <hr />

 <Anchor id="tips" />
 <h2>Practical tips</h2>
 <ul>
 <li>Wear good shoes. Cobblestones exist, and they don’t apologize.</li>
 <li>Check bus return times loosely. Don’t rely on vibes.</li>
 <li>Bring a camera, not a plan.</li>
 <li>Eat earlier on busy days.</li>
 </ul>

 <hr />

 <Anchor id="conclusion" />
 <h2>Final word on Porvoo</h2>
 <p>Porvoo does not change your life. It adjusts your tempo.</p>
 <p>
 As a day trip from Helsinki, it’s nearly perfect. As a pre-Lapland stop, it’s
 underrated.
 </p>
 <p>Wood, river, silence, time. Sometimes that’s all you need before going north.</p>

 <div className="not-prose mt-10 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5">
 <p className="text-sm text-slate-700">
 <strong className="text-slate-900">Internal links:</strong>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/helsinki">
 Helsinki winter gateway
 </a>{" "}
 •{" "}
 <a
 className="font-semibold hover:underline underline-offset-4"
 href="/getting-around-finland"
 >
 Getting around Finland
 </a>{" "}
 •{" "}
 <a
 className="font-semibold hover:underline underline-offset-4"
 href="/lapland-tours-finland"
 >
 Lapland tours Finland
 </a>{" "}
 •{" "}
 <a
 className="font-semibold hover:underline underline-offset-4"
 href="/offer-checklist"
 >
 Offer checklist
 </a>
 </p>

 <p className="mt-2 text-sm text-slate-600">
 <strong className="text-slate-900">Last verified:</strong> 2026-01-04
 </p>
 </div>
 </article>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-8 p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want a Helsinki week that doesn’t turn into rushed logistics?
 </h3>
 <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
 Use Porvoo as a tempo reset, then funnel the rest of your planning through the checklist before you book.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours-finland" variant="outline">
 Tours →
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
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/get-help" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Get help →
 </Link>
 </div>

 <div className="mt-4 text-xs text-slate-500">Last verified: {lastVerified}</div>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
 {/* Card 1: TOC */}
 <Card className="p-6">
 <h2 className="text-base font-semibold tracking-tight text-slate-900">On this page</h2>
 <div className="mt-4 grid gap-1 text-sm">
 {toc.map((t) => (<a
 key={t.id}
 className="rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:underline underline-offset-4"
 href={`#${t.id}`}
 >
 {t.label}
 </a>))}
 </div>
 </Card>

 {/* Card 2: Decision rule + 2 CTAs */}
 <Card className="overflow-hidden p-0">
 <ImageBlock
 src="/images/blog/porvoo/sidebar.jpg"
 alt="Porvoo winter planning: calm streets, soft snow, and a slower pace"
 sizes="360px"
 />
 <div className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Decision rule
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Pace rule: Porvoo fixes your tempo before Lapland chaos.
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

 {/* Card 3: Internal routes */}
 <Card className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Internal routes
 </p>
 <div className="mt-3 space-y-2 text-sm text-slate-700">
 <Link className="block font-semibold hover:underline underline-offset-4" href="/helsinki-to-lapland">
 Helsinki → Lapland →
 </Link>
 <Link className="block font-semibold hover:underline underline-offset-4" href="/getting-around-finland">
 Getting around Finland →
 </Link>
 <Link className="block font-semibold hover:underline underline-offset-4" href="/lapland-tours-finland">
 Lapland tours →
 </Link>
 </div>

 <div className="mt-4 rounded-xl border border-slate-200/70 bg-slate-50/70 p-3 text-xs text-slate-600">
 <span className="font-semibold text-slate-900">Slug:</span> {slug}
 <br />
 <span className="font-semibold text-slate-900">Last verified:</span> {lastVerified}
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

