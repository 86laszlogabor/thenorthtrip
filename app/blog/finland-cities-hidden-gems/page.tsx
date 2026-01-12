import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
 description:
 "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
 openGraph: {
 title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
 description:
 "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
 images: ["/images/og/og-blog.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
 description:
 "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
 images: ["/images/og/og-blog.jpg"],
 },
};

const lastVerified = "2026-01-04";

/**
 * Avoid 404s: use a guaranteed fallback image path already present in your project.
 * Swap to real city assets later without touching layout.
 */
const IMG_FALLBACK = "/images/hero/hero-blog-planning.jpg";

const images = {
 hero: IMG_FALLBACK,
 articleHero: IMG_FALLBACK,
 sidebar: IMG_FALLBACK,
 helsinki: IMG_FALLBACK,
 tampere: IMG_FALLBACK,
 rovaniemi: IMG_FALLBACK,
 porvoo: IMG_FALLBACK,
 turku: IMG_FALLBACK,
 savonlinna: IMG_FALLBACK,
 kuopio: IMG_FALLBACK,
 oulu: IMG_FALLBACK,
 lahti: IMG_FALLBACK,
};

const quickChecks = [
 {
 title: "Cities reduce risk",
 body:
 "Use cities to stabilize the plan: transport, bookings, and fallback options. Wilderness comes after structure.",
 },
 {
 title: "Short winter days win",
 body:
 "Darkness arrives early. Routes that look easy in summer become fatigue traps in winter.",
 },
 {
 title: "Base beats bouncing",
 body:
 "Two-night bases outperform constant movement. Winter punishes stacked schedules.",
 },
 {
 title: "North comes after timing",
 body:
 "Go north when connections and key bookings are locked. Don’t let “hope” be your transport strategy.",
 },
];

const tableRows: Array<[string, string, string, string, string]> = [
 ["Helsinki", "Planning + connections", "Design, saunas", "Dec–Mar", "€€€"],
 ["Turku", "History without noise", "Castle, river", "Dec–Feb", "€€"],
 ["Porvoo", "Easy day-trip reset", "Old town", "Jan–Feb", "€€"],
 ["Tampere", "Sauna culture ", "Lakes, museums", "Dec–Mar", "€€"],
 ["Savonlinna", "Castle-in-snow mood", "Lake Saimaa", "Jan–Feb", "€€"],
 ["Rovaniemi", "Lapland base", "Aurora, huskies", "Dec–Mar", "€€€"],
 ["Kuopio", "Quiet winter Finland", "Frozen lakes", "Jan–Mar", "€€"],
 ["Oulu", "Northern gateway", "Winter cycling", "Dec–Mar", "€€"],
 ["Lahti", "Winter sports warm-up", "Ski jumps", "Jan–Mar", "€€"],
];

type CityBlock = {
 id: string;
 title: string;
 image: string;
 intro: string;
 body: string[];
 blocks: Array<{ label: string; text: string; tone?: "neutral" | "warning" }>;
};

const citySections: CityBlock[] = [
 {
 id: "helsinki",
 title: "Helsinki: the planning that keeps your trip stable",
 image: images.helsinki,
 intro:
 "Helsinki isn’t just a quick stop. In winter, it’s where you can lock the fragile parts of the trip before you go north.",
 body: [
 "If you’re doing Lapland, Helsinki is the place to make decisions that prevent knock-on failures: transport timing, tour sequencing, and (if you drive) car rental constraints. It also delivers the most accessible “Finnish winter” experience: saunas, sea air, and easy indoor culture when the weather gets loud.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Use Helsinki as a soft landing. Lock transport north, then tours, then day trips. If you reverse that order, you’re buying stress.",
 tone: "warning",
 },
 {
 label: "Practical tip",
 text:
 "Do one sauna on a weekday evening. It’s the fastest way to understand winter culture without the tourist performance.",
 },
 {
 label: "When it works best",
 text:
 "December to March. Cold but manageable. Most days hover around -5 to -10°C.",
 },
 ],
 },
 {
 id: "turku",
 title: "Turku: river calm and real history",
 image: images.turku,
 intro:
 "Turku is quieter and older-feeling than Helsinki, without trying to impress you.",
 body: [
 "In winter, the Aura River freezes in patches and the medieval castle looks extra sharp under snow. If you want a southern city stop that feels authentic and low-drama, Turku usually delivers.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Use Turku as contrast: southern calm before the north, or decompression after Lapland.",
 },
 {
 label: "Practical tip",
 text:
 "Walk the river near dusk. Winter light gives you atmosphere without effort.",
 },
 {
 label: "When it works best",
 text:
 "December to February. Typically milder than Lapland.",
 },
 ],
 },
 {
 id: "porvoo",
 title: "Porvoo: the cleanest winter day trip from Helsinki",
 image: images.porvoo,
 intro:
 "Porvoo is small, simple, and reliable. That’s why it works.",
 body: [
 "Old Town Porvoo stays photogenic in winter, but the real win is the pace: you can do it without wrecking your energy or schedule. Fewer moving parts, fewer problems.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Best used as a Helsinki day trip before you commit to Lapland routing.",
 },
 {
 label: "Practical tip",
 text:
 "Go early the morning after snowfall if you can. The streets are quieter and the town feels sharper.",
 },
 {
 label: "When it works best",
 text:
 "January to February. Cold, calm, and genuinely pretty.",
 },
 ],
 },
 {
 id: "tampere",
 title: "Tampere: sauna capital energy, without the chaos",
 image: images.tampere,
 intro:
 "Tampere is one of the best winter stops for sauna culture and an easy city rhythm.",
 body: [
 "It’s a practical stop: solid museums, lakeside winter atmosphere, and the kind of infrastructure that makes cold weather feel normal instead of annoying.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "If you want one southern stop that adds real value before Lapland, Tampere is a strong candidate.",
 },
 {
 label: "Practical tip",
 text:
 "Sauna + cold dip is optional. Sauna + warm food after is not.",
 },
 {
 label: "When it works best",
 text:
 "December to March. Crisp cold and proper winter atmosphere.",
 },
 ],
 },
 {
 id: "savonlinna",
 title: "Savonlinna: lake winter + castle mood",
 image: images.savonlinna,
 intro:
 "Savonlinna is known for summer opera, but winter gives it space and atmosphere.",
 body: [
 "Olavinlinna Castle beside Lake Saimaa hits differently when the landscape is frozen. This is a “slow stop” if your schedule has room and you want something less obvious than the main southern loop.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "A scenic stop between southern cities and the north, if your plan isn’t tight.",
 },
 {
 label: "Practical tip",
 text:
 "Aim for late afternoon light. Winter “blue hour” does a lot of the work for you.",
 },
 {
 label: "When it works best",
 text:
 "January to February. Cold and quiet, in the best way.",
 },
 ],
 },
 {
 id: "rovaniemi",
 title: "Rovaniemi: Lapland starts here (and it’s the easiest base)",
 image: images.rovaniemi,
 intro:
 "Rovaniemi is accessible Lapland: tours, logistics, and a lot of people doing the same thing as you.",
 body: [
 "That’s not automatically bad. It means transport and tour options are better than smaller places. The downside is crowds and light pollution. Your job is to keep the plan simple and avoid stacking tight daylight windows.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Choose one strong base and do fewer, better tours. Overbooking is how winter trips fail.",
 tone: "warning",
 },
 {
 label: "Practical tip",
 text:
 "For aurora: pick tours that go far enough from the city. Light pollution kills the sky, and tight schedules kill the mood.",
 },
 {
 label: "When it works best",
 text:
 "December to March. Very cold. Plan for -10 to -30°C as normal, not “rare.”",
 },
 ],
 },
 {
 id: "kuopio",
 title: "Kuopio: quiet winter Finland, less tourism",
 image: images.kuopio,
 intro:
 "Kuopio is a strong choice if you want winter scenery and local rhythm without a tourist layer.",
 body: [
 "Frozen lakes, calm streets, and viewpoints that look dramatic in foggy winter light. It’s not a “must see”. It’s a “this is what Finland feels like” stop.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Pick Kuopio if you want a real winter stop that doesn’t require a full Lapland build-out.",
 },
 {
 label: "Practical tip",
 text:
 "If conditions allow, try skating. It’s one of the most “Finland in winter” activities you can do without a tour.",
 },
 {
 label: "When it works best",
 text:
 "January to March. Peaceful winter, less noise, more space.",
 },
 ],
 },
 {
 id: "oulu",
 title: "Oulu: northern gateway with everyday winter competence",
 image: images.oulu,
 intro:
 "Oulu sits between the south and deeper Lapland. It’s built for winter living.",
 body: [
 "Winter cycling here is famous for a reason: infrastructure and habits match the climate. If you want to feel the “north” before going all-in, Oulu is a practical bridge.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Useful gateway for road trips and Lapland extensions without jumping straight into the far north.",
 },
 {
 label: "Practical tip",
 text:
 "If you cycle: studded tires. Ice is a fact here, not a surprise.",
 },
 {
 label: "When it works best",
 text:
 "December to March. Cold and windy, but structured for winter life.",
 },
 ],
 },
 {
 id: "lahti",
 title: "Lahti: winter sports warm-up without Lapland complexity",
 image: images.lahti,
 intro:
 "Lahti is sporty, modern, and easy to use as an active winter stop.",
 body: [
 "Great if you want snow, trails and winter energy, but you don’t want to commit to Lapland logistics. It’s also an efficient add-on if your Helsinki days feel too indoor-heavy.",
 ],
 blocks: [
 {
 label: "TheNorthTrip logic",
 text:
 "Treat Lahti as a warm-up city: winter sports without the long-distance overhead.",
 },
 {
 label: "Practical tip",
 text:
 "Cross-country trails are well maintained. If you want to try, this is one of the easiest places to start.",
 },
 {
 label: "When it works best",
 text:
 "January to March. Cold, active, straightforward.",
 },
 ],
 },
];

const faqs = [
 {
 q: "Do I need to visit cities if my goal is only Lapland?",
 a: "If your trip relies on flights, trains, or tight tour windows, cities are your stabilizer. They give you connections, buffers, and recovery options when weather shifts.",
 },
 {
 q: "What’s the biggest winter routing mistake?",
 a: "Stacking plans like summer. Winter reduces daylight and increases fatigue. Shorter driving days and fewer base changes win more often than ambitious schedules.",
 },
 {
 q: "How many bases should I plan for one winter trip?",
 a: "Fewer than you think. Two-night bases beat daily movement. The trip feels bigger when it isn’t constantly collapsing into logistics.",
 },
 {
 q: "Where should I start if I’m nervous about planning?",
 a: "Start with Helsinki, lock transport north, then choose one Lapland base. Add side cities only when the core plan is stable.",
 },
 {
 q: "Is Rovaniemi too touristy to be useful?",
 a: "It can be busy, but it’s still a strong base for accessible Lapland logistics. The key is picking tours that go far enough from city light and avoiding schedule stacking.",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-24" />;
}

function MicroBlock({
 label,
 text,
 tone = "neutral",
}: {
 label: string;
 text: string;
 tone?: "neutral" | "warning";
}) {
 const box = tone === "warning"? "border-amber-200 bg-amber-50": "border-slate-200 bg-slate-50";
 const dot = tone === "warning"? "bg-amber-500": "bg-emerald-500";

 return (<div className={`mt-4 rounded-2xl border px-4 py-3 ${box}`}>
 <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
 <span className={`h-2 w-2 rounded-full ${dot}`} />
 {label}
 </div>
 <p className="mt-2 text-sm leading-relaxed text-slate-800">{text}</p>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Finn Cities’ Hidden Gems 2026: winter routing for Lapland trips."
 subtitle="Cities first when you need structure. North second when the plan can survive reality."
 imageSrc={images.hero}
 primaryCta={{ href: "/lapland-tours", label: "Lapland tours " }}
 secondaryCta={{ href: "/getting-around-finland", label: "Getting around Finland" }}
 />

 <div className="relative">
 {/* Background texture + decorative map */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
 <div
 className="absolute right-0 top-16 hidden h-[620px] w-[560px] opacity-[0.22] lg:block"
 aria-hidden="true"
 >
 <Image
 src="/images/decor/finland-map-watercolor.png"
 alt=""
 fill
 className="object-contain"
 sizes="560px"
 />
 </div>
 </div>

 <Section>
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="text-sm text-slate-600">
 <span className="font-medium">Blog</span> ·{" "}
 <span className="text-slate-500">Last verified: {lastVerified}</span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900" href="/blog">
 Back to Blog
 </Link>
 <Link className="hover:text-slate-900" href="/lapland-tours">
 Lapland tours
 </Link>
 <Link className="hover:text-slate-900" href="/getting-around-finland">
 Getting around Finland
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <article className="max-w-none">
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Practical routing · winter-first decisions
 </div>

 <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
 Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips
 </h1>

 <p className="mt-3 max-w-3xl text-base text-slate-700 md:text-lg">
 Winter Finland is at its best when the plan is stable. Cities help you do that: they give you
 transport, buffers, warm indoor options, and recovery points when weather shifts. Then the north
 becomes a payoff, not a gamble.
 </p>

 {/* Article hero image */}
 <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
 <div className="relative aspect-[16/9] w-full">
 <Image
 src={images.articleHero}
 alt="Winter routing across Finnish cities: calm planning before Lapland"
 fill
 className="object-cover"
 sizes="(min-width: 1024px) 720px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
 <div className="absolute bottom-4 left-4 right-4">
 <p className="max-w-2xl text-sm text-white/90">
 Build structure first. Add intensity second. That’s how winter trips survive.
 </p>
 </div>
 </div>
 </div>

 {/* Quick checks */}
 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {quickChecks.map((c) => (<Card key={c.title} className="p-6">
 <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
 <p className="mt-2 text-sm text-slate-700">{c.body}</p>
 </Card>))}
 </div>

 {/* Contents */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold text-slate-900">In this guide</h2>
 <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
 <Link className="hover:underline" href="#intro">
 Why cities matter for Lapland trips
 </Link>
 <Link className="hover:underline" href="#table">
 Quick comparison table
 </Link>
 <Link className="hover:underline" href="#helsinki">
 Helsinki
 </Link>
 <Link className="hover:underline" href="#turku">
 Turku
 </Link>
 <Link className="hover:underline" href="#porvoo">
 Porvoo
 </Link>
 <Link className="hover:underline" href="#tampere">
 Tampere
 </Link>
 <Link className="hover:underline" href="#savonlinna">
 Savonlinna
 </Link>
 <Link className="hover:underline" href="#rovaniemi">
 Rovaniemi
 </Link>
 <Link className="hover:underline" href="#kuopio">
 Kuopio
 </Link>
 <Link className="hover:underline" href="#oulu">
 Oulu
 </Link>
 <Link className="hover:underline" href="#lahti">
 Lahti
 </Link>
 <Link className="hover:underline" href="#faq">
 FAQ
 </Link>
 </div>
 </div>

 <div className="mt-10 space-y-12">
 {/* Intro */}
 <section>
 <Anchor id="intro" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Why Finnish cities matter (even if you came for Lapland)
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Winter reduces daylight and increases friction. Cities help because they have the tools for winter:
 reliable transport options, indoor time when the weather gets rough, and the ability to absorb delays
 without deleting the entire trip.
 </p>

 <MicroBlock
 label="Decision filter"
 tone="warning"
 text="If one missed connection would break your trip, don’t wing it. Lock transport first, then tours, then day trips. Reverse that order and winter will collect a fee."
 />
 </section>

 {/* Table */}
 <section>
 <Anchor id="table" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Quick comparison table
 </h2>

 <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full text-sm">
 <thead className="text-left">
 <tr className="border-b bg-slate-50">
 <th className="px-4 py-3 font-semibold text-slate-900">City</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Best use</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Also good for</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Best months</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Cost level</th>
 </tr>
 </thead>
 <tbody>
 {tableRows.map(([city, h, a, m, c]) => (<tr key={city} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">{city}</td>
 <td className="px-4 py-3 text-slate-700">{h}</td>
 <td className="px-4 py-3 text-slate-700">{a}</td>
 <td className="px-4 py-3 text-slate-700">{m}</td>
 <td className="px-4 py-3 text-slate-700">{c}</td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </section>

 {/* City sections */}
 {citySections.map((c) => (<section key={c.id}>
 <Anchor id={c.id} />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{c.title}</h2>

 <div className="mt-4 grid gap-4 md:grid-cols-[1fr_320px]">
 <div>
 <p className="text-slate-700">{c.intro}</p>
 {c.body.map((p) => (<p key={p} className="mt-3 text-slate-700">
 {p}
 </p>))}

 {c.blocks.map((b) => (<MicroBlock
 key={b.label}
 label={b.label}
 text={b.text}
 tone={b.tone?? "neutral"}
 />))}
 </div>

 <Card className="h-fit overflow-hidden p-0">
 <div className="relative aspect-[16/11] bg-slate-100">
 <Image
 src={c.image}
 alt={`${c.title} (winter planning context)`}
 fill
 className="object-cover"
 sizes="320px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
 </div>
 <div className="p-5">
 <p className="text-sm text-slate-700">
 Choose this stop if it strengthens the plan, not because it looks good on a map.
 </p>
 </div>
 </Card>
 </div>
 </section>))}

 {/* FAQ */}
 <section>
 <Anchor id="faq" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>

 <div className="mt-5 grid gap-3">
 {faqs.map((f) => (<details
 key={f.q}
 className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
 >
 <summary className="cursor-pointer list-none">
 <div className="flex items-start justify-between gap-4">
 <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
 <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-slate-600 group-open:bg-slate-900 group-open:text-white group-open:border-slate-900">
 +
 </span>
 </div>
 </summary>
 <p className="mt-3 text-sm text-slate-700">{f.a}</p>
 </details>))}
 </div>

 <p className="mt-6 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </p>
 </section>

 {/* Bottom CTA */}
 <Card className="p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Ready to plan the north properly?
 </h3>
 <p className="mt-2 max-w-3xl text-sm text-slate-700">
 Use the practical pages so your routing stays stable when winter shifts the rules.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/lapland-tours" variant="primary">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Getting around Finland →
 </CtaButton>
 <CtaButton href="/car-rental-helsinki" variant="outline">
 Car rental Helsinki →
 </CtaButton>
 </div>

 <div className="mt-6 text-sm">
 <Link href="/blog" className="font-semibold text-slate-700 hover:underline">
 Back to Blog →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/policy" className="font-semibold text-slate-700 hover:underline">
 Policy →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/get-help" className="font-semibold text-slate-700 hover:underline">
 Get help →
 </Link>
 </div>
 </Card>
 </div>
 </article>

 {/* SIDEBAR */}
 <aside className="h-fit space-y-4 lg:sticky lg:top-24">
 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
 <div className="mt-3 space-y-2 text-sm text-slate-700">
 <p>
 <span className="font-semibold">Best for:</span> winter travellers who plan
 </p>
 <p>
 <span className="font-semibold">Avoid if:</span> you hate buffers and tight daylight windows
 </p>
 <p>
 <span className="font-semibold">Planning style:</span> cities for structure, north for payoff
 </p>
 <p>
 <span className="font-semibold">Last verified:</span> {lastVerified}
 </p>
 </div>
 </Card>

 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">Start here if booking</h2>
 <p className="mt-2 text-sm text-slate-700">
 If one decision breaks the trip, treat it as a decision point, not a guess.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/lapland-tours" variant="primary" className="w-full">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
 Getting around Finland →
 </CtaButton>
 </div>
 </Card>

 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={images.sidebar}
 alt="Winter planning: calm structure before going north"
 fill
 className="object-cover"
 sizes="360px"
 />
 </div>
 <div className="p-6">
 <p className="text-sm text-slate-700">
 This page is a routing: city contrast first, Lapland intensity when the plan can survive.
 </p>
 <div className="mt-4 text-sm">
 <Link href="/blog" className="font-semibold text-slate-700 hover:underline">
 Blog index →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/getting-around-finland" className="font-semibold text-slate-700 hover:underline">
 Getting around Finland →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/lapland-tours" className="font-semibold text-slate-700 hover:underline">
 Lapland tours →
 </Link>
 </div>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Credibility note</p>
 <p className="mt-2 text-sm text-slate-700">
 When a detail can change, we treat it as a decision point, not a promise.
 </p>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

