import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title:
 "Levi Lapland 2026: Skiing, Snowmobiling & Thenortrip Safaris (Complete Guide)",
 description:
 "Levi Lapland 2026 guide for winter lovers: Levi Finland skiing, snowmobile safari pricing, Thenortrip-style safaris, costs, itineraries, and planning tips that actually work.",
 openGraph: {
 title:
 "Levi Lapland 2026: Skiing, Snowmobiling & Thenortrip Safaris (Complete Guide)",
 description:
 "A decision-first Levi guide: skiing reality, snowmobile safari costs, huskies, aurora strategy, and a balanced 7-day plan.",
 images: ["/images/og/og-levi-lapland-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Levi Lapland 2026: Skiing, Snowmobiling & Thenortrip Safaris",
 description:
 "Levi winter planning with realistic costs, safaris, aurora logic, and itineraries that work.",
 images: ["/images/og/og-levi-lapland-2026.jpg"],
 },
};

const slug = "levi-lapland-2026-skiing-snowmobiling-safaris-guide";
const lastVerified = "2026-01-04";

const toc = [
 { id: "intro", label: "Intro" },
 { id: "at-a-glance", label: "Levi at a glance" },
 { id: "skiing", label: "Levi Finland skiing" },
 { id: "ski-costs", label: "Ski costs & logistics" },
 { id: "snowmobile", label: "Snowmobile safari" },
 { id: "thenortrip", label: "Thenortrip safaris" },
 { id: "husky", label: "Husky safaris" },
 { id: "aurora", label: "Aurora hunting" },
 { id: "life", label: "Food, saunas & life" },
 { id: "getting-there", label: "Getting to Levi" },
 { id: "itinerary", label: "7-day itinerary" },
 { id: "comparison", label: "Levi vs Rovaniemi vs SaariselkÃ¤" },
 { id: "mistakes", label: "Common mistakes" },
 { id: "faq", label: "FAQ" },
 { id: "conclusion", label: "Conclusion" },
];

const quickCards = [
 {
 title: "Functional winter",
 body: "Levi is built for repeatable winter days: slopes, lifts, logistics.",
 icon: "â„ï¸",
 },
 {
 title: "Ski + safari balance",
 body: "Best week = calm ski days + 1â€“2 high-energy tours (not 6).",
 icon: "â›·ï¸",
 },
 {
 title: "Planning costs",
 body: "~â‚¬50/day lift pass, ~â‚¬240 snowmobile (proper ride time).",
 icon: "â‚¬",
 },
 {
 title: "Avoid burnout",
 body: "Donâ€™t stack high-energy days back-to-back. Levi rewards pacing.",
 icon: "ðŸ§ ",
 },
];

const skiCostRows = [
 ["Day lift pass", "~â‚¬50"],
 ["Ski rental (1 day)", "â‚¬35â€“45"],
 ["Helmet rental", "â‚¬5â€“10"],
 ["Group lesson", "â‚¬60â€“80"],
];

const comparisonRows = [
 ["Levi", "Excellent", "Excellent", "Very good", "High"],
 ["Rovaniemi", "Limited", "Very good", "Good (outside city)", "Medium"],
 ["SaariselkÃ¤", "Limited", "Good", "Excellent", "Mediumâ€“low"],
];

const itinerary = [
 { day: "Day 1", title: "Arrival & orientation", text: "Arrive, transfer to Levi, gear rental, light walk, sauna." },
 { day: "Day 2", title: "Ski day", text: "Full day on slopes. Evening sauna or night skiing." },
 { day: "Day 3", title: "Snowmobile safari (~â‚¬240)", text: "Half-day wilderness route, rest, optional aurora attempt." },
 { day: "Day 4", title: "Husky safari", text: "Forest trail run, calm evening." },
 { day: "Day 5", title: "Ski + village time", text: "Morning skiing, afternoon cafÃ©s, sunset walk." },
 { day: "Day 6", title: "Aurora focus", text: "Daytime rest or snowshoeing, evening guided aurora tour." },
 { day: "Day 7", title: "Departure", text: "Transfer to airport, no rush." },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function Table({
 caption,
 head,
 rows,
}: {
 caption: string;
 head: string[];
 rows: string[][];
}) {
 return (<div className="mt-6">
 <div className="text-sm font-semibold text-slate-900">{caption}</div>
 <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full min-w-[560px] text-sm">
 <thead>
 <tr className="bg-slate-50 text-left">
 {head.map((h) => (<th
 key={h}
 className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700"
 >
 {h}
 </th>))}
 </tr>
 </thead>
 <tbody className="[&>tr:nth-child(even)]:bg-slate-50/50">
 {rows.map((r, i) => (<tr key={i} className="border-t border-slate-200">
 {r.map((cell, j) => (<td key={j} className="px-4 py-3 text-slate-700">
 {cell}
 </td>))}
 </tr>))}
 </tbody>
 </table>
 </div>
 </div>);
}

function TopMetaBar() {
 return (<div className="flex flex-wrap items-center justify-between gap-3">
 <div className="text-sm text-slate-600">
 <span className="font-semibold text-slate-900">Blog</span>{" "}
 <span className="text-slate-300">Â·</span>{" "}
 <span className="text-slate-500">Last verified: {lastVerified}</span>
 </div>
 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/blog">
 Back to Blog
 </Link>
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/offer-checklist">
 Offer checklist
 </Link>
 <Link className="hover:text-slate-900 hover:underline underline-offset-4" href="/lapland-tours">
 Lapland tours
 </Link>
 </nav>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 title="Levi Lapland 2026"
 subtitle="Skiing, snowmobiling and safaris that actually deliver."
 imageSrc="/images/og/og-levi-lapland-2026.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 secondaryCta={{ href: "/lapland-tours", label: "Lapland tours " }}
 />

 <div className="relative">
 {/* background */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:22px_22px]" />
 <div className="absolute left-0 top-0 h-[260px] w-full bg-gradient-to-b from-slate-50/70 to-transparent" />
 </div>

 <Section>
 <TopMetaBar />
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div>
 {/* Quick cards */}
 <div className="grid gap-4 md:grid-cols-2">
 {quickCards.map((c) => (<Card key={c.title} className="p-6">
 <div className="flex items-start gap-3">
 <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
 <span className="text-base">{c.icon}</span>
 </div>
 <div>
 <h2 className="text-base font-semibold tracking-tight text-slate-900">
 {c.title}
 </h2>
 <p className="mt-2 text-sm leading-7 text-slate-700">{c.body}</p>
 </div>
 </div>
 </Card>))}
 </div>

 {/* Article container */}
 <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/85 shadow-[0_1px_0_rgba(15,23,42,0.05),0_40px_90px_-70px_rgba(15,23,42,0.45)] backdrop-blur">
 <div className="px-6 py-10 md:px-10 md:py-12">
 {/* meta */}
 <Anchor id="intro" />
 <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
 <p className="text-sm leading-7 text-slate-700">
 <span className="font-semibold text-slate-900">Activites:</span>{" "}
 Skiing, snowmobile tour, husky safari, nothern lights.
 </p>
 </div>

 {/* Typography system */}
 <p className="mt-6 text-lg leading-8 text-slate-900">
 Levi is where Lapland stops apologising and starts delivering.
 </p>

 <p className="mt-4 text-base leading-8 text-slate-700">
 The first thing you notice in Levi is that nobody explains winter to you. No warning signs saying â€œitâ€™s cold.â€
 No dramatic storytelling about survival. People just ski. Snowmobiles hum past the village. Kids walk to lessons
 in full winter gear like itâ€™s the most normal thing in the world. And somehow, that confidence changes how you
 experience Lapland.
 </p>

 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi isnâ€™t the wildest place in Finnish Lapland. Itâ€™s not the quietest either. What it is, very unapologetically,
 is <em className="font-medium text-slate-900">functional winter</em>. Ski slopes that work. Lifts that run on time.
 Snowmobile routes that donâ€™t feel improvised. Safaris that actually leave the resort bubble.
 </p>

 <p className="mt-4 text-base leading-8 text-slate-700">
 For travellers planning a 2026 winter trip, Levi often ends up being the sweet spot. More comfortable
 than remote Arctic villages. More exciting than city-based Lapland Bases. And far more versatile if you want to mix{" "}
 <strong className="font-semibold text-slate-900">Levi Finland skiing</strong> with real Lapland adventures like a proper{" "}
 <strong className="font-semibold text-slate-900">Lapland snowmobile safari</strong>.
 </p>

 <p className="mt-4 text-base leading-8 text-slate-700">
 This guide breaks Levi down honestly: what skiing here is actually like, how snowmobile safaris work and why ~â‚¬240
 is a realistic planning number for a good one, where Thenortrip-style safaris fit in, and how to plan a week that
 feels full, not frantic.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="at-a-glance" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Levi at a glance: resort village with Arctic reach
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi sits in Western Lapland near KittilÃ¤, which also hosts the nearest airport. That single detail makes Levi
 logistically easier than many Lapland bases: flights are short from Helsinki, transfers are simple, and winter
 infrastructure is mature.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 The village is compact. Hotels, apartments, lifts, restaurants and rental shops cluster tightly around the base
 of the fell. You donâ€™t need a car to function day-to-day, which matters in winter.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Step just outside the resort zone and youâ€™re back in Lapland proper: forests, frozen lakes, and snowmobile corridors
 stretching into nowhere. Leviâ€™s strength is that you can move between comfort and wilderness without friction.
 </p>
 <ul className="mt-6 grid gap-2 text-sm text-slate-700">
 <li><span className="font-semibold text-slate-900">Best season:</span> December to April</li>
 <li><span className="font-semibold text-slate-900">Peak skiing:</span> Januaryâ€“March</li>
 <li><span className="font-semibold text-slate-900">Aurora season:</span> Septemberâ€“March</li>
 </ul>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="skiing" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Levi Finland skiing: what to expect (and what not to expect)
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi is not the Alps. Youâ€™re not coming for endless vertical drops or dramatic mountain theatre. Youâ€™re coming for
 reliable snow, calm slopes, and conditions that stay stable across the season.
 </p>

 <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
 The ski area in practical terms
 </h3>
 <p className="mt-3 text-base leading-8 text-slate-700">
 Levi has around 40+ slopes served by modern lifts. Elevation is modest, but snow quality compensates, and artificial
 snow supports early/late season stability.
 </p>
 <p className="mt-3 text-base leading-8 text-slate-700">
 <strong className="font-semibold text-slate-900">Typical lift pass cost (planning number):</strong> ~â‚¬50/day.
 </p>
 <p className="mt-3 text-base leading-8 text-slate-700">
 Compared to many European resorts, Levi skiing is refreshingly sane.
 </p>

 <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
 Who Levi skiing is best for
 </h3>
 <ul className="mt-4 space-y-2 text-base text-slate-700">
 <li>Beginners and intermediates</li>
 <li>Families</li>
 <li>Casual skiers who prefer relaxed pacing</li>
 <li>Travellers combining skiing with safaris</li>
 </ul>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Advanced skiers wonâ€™t be bored, but they wonâ€™t be challenged like in high-Alpine terrain. Leviâ€™s value is
 consistency, not extremity.
 </p>

 <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
 Night skiing: Leviâ€™s underrated advantage
 </h3>
 <p className="mt-3 text-base leading-8 text-slate-700">
 Night skiing under floodlights is a real feature here. Slopes stay open into the evening and the atmosphere is calm
 rather than chaotic. Occasionally the Northern Lights appear overhead. Quietly, like everything else in Finland.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="ski-costs" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Ski costs &amp; logistics: what you actually pay
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Hereâ€™s a realistic skiing cost snapshot in Levi:
 </p>
 <Table
 caption="Ski cost snapshot (planning)"
 head={["Item", "Typical cost (EUR)"]}
 rows={skiCostRows}
 />
 <p className="mt-4 text-base leading-8 text-slate-700">
 <strong className="font-semibold text-slate-900">Hidden saving:</strong> you donâ€™t need ski-in/ski-out luxury. Levi is walkable.
 Paying extra for proximity rarely improves the experience.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="snowmobile" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Lapland snowmobile safari from Levi
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 If skiing is Leviâ€™s daytime backbone, snowmobiling is its adrenaline layer. Levi sits at the intersection of extensive
 snowmobile trails, so tours can reach genuinely wild areas without hours of transit.
 </p>

 <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
 What a proper snowmobile safari looks like
 </h3>
 <p className="mt-3 text-base leading-8 text-slate-700">
 A quality <strong className="font-semibold text-slate-900">Lapland snowmobile safari</strong> from Levi is not a 30-minute loop behind the lifts.
 Itâ€™s a half-day or full-day journey across frozen lakes, forest trails and open fells.
 </p>
 <p className="mt-3 text-base leading-8 text-slate-700">
 <strong className="font-semibold text-slate-900">Typical price (planning number):</strong> ~â‚¬240 per person for a 3â€“5 hour experience (often shared driving).
 </p>
 <p className="mt-3 text-base leading-8 text-slate-700">
 Solo driving costs more. Sharing is usually fine, especially when itâ€™s cold and you donâ€™t want to play hero.
 </p>

 <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
 Why ~â‚¬240 is realistic
 </h3>
 <p className="mt-3 text-base leading-8 text-slate-700">
 Snowmobiles are expensive to maintain, fuel use is high, and guides are managing safety, pace and weather. Cheap tours
 typically cut distance and riding time.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">If you see much lower prices in peak season, verify:</p>
 <ul className="mt-4 space-y-2 text-base text-slate-700">
 <li>total riding time (not total â€œtour durationâ€)</li>
 <li>distance covered / route type</li>
 <li>group size</li>
 <li>whether wilderness sections are included</li>
 </ul>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="thenortrip" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Levi Thenortrip safaris: where they fit best
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Thenortrip-style safaris work well in Levi because logistics are predictable: clear pickup points, manageable distances,
 and fewer â€œlast-minute chaosâ€ failure modes than more remote bases.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">Typical Levi safari categories:</p>
 <ul className="mt-4 space-y-2 text-base text-slate-700">
 <li>Snowmobile wilderness safaris</li>
 <li>Husky safaris (longer trails, kennel visits)</li>
 <li>Aurora chases by minibus or snowmobile</li>
 <li>Combined ski + safari itinerary blocks</li>
 </ul>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi is ideal for travellers who want to pre-book experiences confidently without gambling on friction.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="husky" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Husky safaris near Levi
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Compared to busier Lapland Bases, husky safaris around Levi often feel calmer. Kennels are spread out and routes head
 deeper into forest zones.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 <strong className="font-semibold text-slate-900">Typical cost (planning band):</strong> â‚¬200â€“â‚¬400 depending on length and season.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Prefer safaris that emphasise trail time over kennel time. The magic is in movement, not photo ops.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="aurora" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Aurora hunting from Levi
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi has strong aurora potential once you leave the village lights, but itâ€™s not the darkest place in Lapland.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">Best practice:</p>
 <ul className="mt-4 space-y-2 text-base text-slate-700">
 <li>book at least one guided aurora tour</li>
 <li>keep one free evening for self-directed viewing</li>
 <li>check cloud forecasts daily</li>
 </ul>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Snowmobile-based aurora safaris can be especially memorable: movement, silence, then sky.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="life" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Food, saunas &amp; off-slope life
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Leviâ€™s restaurant scene punches above its weight: Nordic comfort food, casual options, and a few higher-end places
 leaning on local ingredients. Prices are Lapland-level, but portions are honest.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Saunas are everywhere. Use them. After skiing or snowmobiling, sauna isnâ€™t optional recovery. Itâ€™s how locals reset.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Ice swimming exists in designated spots. Try it once. Youâ€™ll hate it for ten seconds, then feel strangely invincible.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="getting-there" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Getting to Levi: flights, transfers, timing
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 The nearest airport is KittilÃ¤, about 15 minutes from Levi. Winter flights from Helsinki are frequent in peak season
 and transfers are straightforward, sometimes bundled with accommodation or tours.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Compared to many Lapland bases, Leviâ€™s arrival friction is low, which is a big part of its appeal.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="itinerary" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Sample 7-day Levi itinerary (balanced winter week)
 </h2>

 <div className="mt-6 grid gap-3">
 {itinerary.map((d) => (<div
 key={d.day}
 className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
 >
 <div className="flex flex-wrap items-baseline justify-between gap-2">
 <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
 {d.day}
 </div>
 <div className="text-sm font-semibold text-slate-900">
 {d.title}
 </div>
 </div>
 <p className="mt-3 text-sm leading-7 text-slate-700">
 {d.text}
 </p>
 </div>))}
 </div>

 <p className="mt-6 text-base leading-8 text-slate-700">
 This rhythm avoids burnout and leaves flexibility for weather.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="comparison" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Levi vs Rovaniemi vs SaariselkÃ¤
 </h2>
 <Table
 caption="Quick comparison"
 head={["Base", "Skiing", "Snowmobiling", "Aurora potential", "Comfort level"]}
 rows={comparisonRows}
 />
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi wins if skiing matters.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="mistakes" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Common Levi mistakes
 </h2>
 <ul className="mt-4 space-y-2 text-base text-slate-700">
 <li>stacking high-energy days back-to-back</li>
 <li>paying extra for ski-in/ski-out without need</li>
 <li>booking only one aurora night</li>
 <li>choosing the cheapest safari without checking duration</li>
 </ul>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi rewards moderation.
 </p>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="faq" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 FAQ: Levi Lapland winter guide 2026
 </h2>

 <div className="mt-6 grid gap-3">
 {[
 ["Is Levi good for non-skiers?", "Yes. Safaris, snowshoeing, saunas and village life make it versatile."],
 ["Is ~â‚¬50/day a normal lift pass cost?", "As a planning number, yes, and itâ€™s strong value vs many European resorts."],
 ["Is the ~â‚¬240 snowmobile safari worth it?", "If itâ€™s a proper wilderness route with real riding time, yes."],
 ["Can you see Northern Lights from Levi village?", "Sometimes, but youâ€™ll do better just outside the light spill."],
 ["Is Levi family-friendly?", "Very. Infrastructure is built for families and winter learning."],
 ["Do I need a car in Levi?", "No. Only consider one for self-guided aurora chasing or remote stays."],
 ["How long should I stay?", "5â€“7 nights is the sweet spot for skiing + safaris without rush."],
 ].map(([q, a]) => (<div key={q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
 <div className="text-sm font-semibold text-slate-900">{q}</div>
 <p className="mt-2 text-sm leading-7 text-slate-700">{a}</p>
 </div>))}
 </div>

 <div className="my-10 h-px w-full bg-slate-200/80" />

 <Anchor id="conclusion" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
 Conclusion: Levi is Lapland with a spine
 </h2>
 <p className="mt-4 text-base leading-8 text-slate-700">
 Levi doesnâ€™t pretend to be untouched wilderness. And thatâ€™s exactly why it works.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 You get skiing that functions, snowmobile safaris that reach real nature, and logistics that donâ€™t collapse under winter pressure.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 The ~â‚¬50 lift pass is fair. The ~â‚¬240 snowmobile safari makes sense when itâ€™s a proper route, not a short loop. And the whole week flows if you respect winter pacing.
 </p>
 <p className="mt-4 text-base leading-8 text-slate-700">
 If you want pure silence, go further north. If you want pure convenience, stay in cities. If you want balance, Levi delivers it quietly, efficiently, without apology.
 </p>

 {/* Internal links + verified */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
 <p className="text-sm leading-7 text-slate-700">
 <strong className="text-slate-900">Internal links:</strong>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/lapland-tours-finland">
 Lapland tours Finland
 </a>{" "}
 <span className="mx-2 text-slate-300">Â·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/getting-around-finland">
 Getting around Finland
 </a>{" "}
 <span className="mx-2 text-slate-300">Â·</span>{" "}
 <a className="font-semibold hover:underline underline-offset-4" href="/blog/helsinki-winter-guide-2026">
 Helsinki winter guide
 </a>
 </p>
 <p className="mt-2 text-sm text-slate-600">
 <strong className="text-slate-900">Last verified:</strong> {lastVerified}
 </p>
 </div>
 </div>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-8 p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want the cleanest Levi plan for your dates?
 </h3>
 <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
 Transfers first, then accommodation, then safaris. Winter punishes â€œweâ€™ll figure it outâ€.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist â†’
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours â†’
 </CtaButton>
 <CtaButton href="/get-help" variant="success">
 Get help â†’
 </CtaButton>
 </div>

 <div className="mt-6 text-sm">
 <Link href="/blog" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Back to Blog â†’
 </Link>
 <span className="mx-2 text-slate-300">â€¢</span>
 <Link href="/policy" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Policy â†’
 </Link>
 <span className="mx-2 text-slate-300">â€¢</span>
 <Link href="/get-help" className="font-semibold hover:underline underline-offset-4 text-slate-700">
 Get help â†’
 </Link>
 </div>

 <p className="mt-6 text-xs text-slate-500">
 <strong>Slug:</strong> {slug} Â· <strong>Last verified:</strong> {lastVerified}
 </p>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
 <Card className="p-6">
 <h2 className="text-base font-semibold tracking-tight text-slate-900">
 On this page
 </h2>
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

 {/* No broken image. Gradient â€œhero tileâ€ until you add real Levi images. */}
 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10]">
 <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
 <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
 <div className="absolute bottom-4 left-4 right-4">
 <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
 Levi 2026
 </div>
 <div className="mt-1 text-sm font-semibold text-white">
 Ski + safari planning, without chaos
 </div>
 </div>
 </div>

 <div className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Decision rule
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 If skiing matters, Levi is the base. If skiing doesnâ€™t, youâ€™re paying for a resort you wonâ€™t use.
 </p>
 <div className="mt-4">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Offer checklist â†’
 </CtaButton>
 </div>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Booking flow
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Transfers â†’ accommodation â†’ safaris. Reverse it and winter will â€œteachâ€ you.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/lapland-tours" variant="outline" className="w-full">
 Lapland tours â†’
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
 Getting around Finland â†’
 </CtaButton>
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get help â†’
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Page meta
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 <span className="font-semibold text-slate-900">Slug:</span> {slug}
 <br />
 <span className="font-semibold text-slate-900">Last verified:</span> {lastVerified}
 </p>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}



