import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Lapland Tours Finland 2026: Pricing, Itineraries & Booking Guide",
 description:
 "Plan Lapland tours 2026 with source-checked pricing examples, a balanced 7-day itinerary, and decision-first booking rules for husky safaris, aurora hunts, and snowmobiling.",
 openGraph: {
 title: "Lapland Tours Finland 2026: Pricing, Itineraries & Booking Guide",
 description:
 "Source-checked pricing examples, base choice, a balanced 7-day plan, and booking rules that reduce regret in winter.",
 images: ["/images/og/og-lapland-tours-finland-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Lapland Tours Finland 2026: Pricing, Itineraries & Booking Guide",
 description:
 "Source-checked pricing examples, 7-day itineraries, and booking logic for Lapland tours in 2026.",
 images: ["/images/og/og-lapland-tours-finland-2026.jpg"],
 },
};

const slug = "lapland-tours-finland-2026-pricing-itineraries-booking-guide";
const lastVerified = "2026-01-12";

const visuals = [
 {
 title: "Base choice (the real decision)",
 body: "Pick one base. Transfers and darkness decide everything else.",
 image: "/images/blog/lapland-tours-2026/rovaniemi-levi.jpg",
 alt: "Rovaniemi vs Levi base choice for Lapland tours in winter 2026",
 },
 {
 title: "Husky safari (ride time matters)",
 body: "Short rides are a taste. Real trails cost more because they actually go somewhere.",
 image: "/images/blog/lapland-tours-2026/husky.jpg",
 alt: "Lapland husky safari tour in winter 2026: sled ride and dogs",
 },
 {
 title: "Aurora strategy (nights + mobility)",
 body: "One night is gambling. Two+ nights with flexible chasing is planning.",
 image: "/images/blog/lapland-tours-2026/aurora.jpg",
 alt: "Northern Lights tour strategy in Lapland Finland 2026",
 },
 {
 title: "Snowmobile reality (timing + safety)",
 body: "Short safaris are easy. Full-day rides need energy and respect for cold.",
 image: "/images/blog/lapland-tours-2026/feature.jpg",
 alt: "Snowmobile safari mood in Lapland Finland winter 2026",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function Pill({ children }: { children: React.ReactNode }) {
 return (<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
 {children}
 </span>);
}

function Stat({
 label,
 value,
 hint,
}: {
 label: string;
 value: string;
 hint?: string;
}) {
 return (<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
 <div className="text-xs font-medium text-slate-600">{label}</div>
 <div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
 {value}
 </div>
 {hint? <div className="mt-1 text-xs text-slate-600">{hint}</div>: null}
 </div>);
}

function SectionCard({
 id,
 kicker,
 title,
 children,
}: {
 id: string;
 kicker?: string;
 title: string;
 children: React.ReactNode;
}) {
 return (<Card className="p-6 md:p-8">
 <Anchor id={id} />
 {kicker? (<div className="text-xs font-medium text-slate-600">{kicker}</div>): null}
 <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
 {title}
 </h2>
 <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-700">
 {children}
 </div>
 </Card>);
}

export default function Page() {
 return (<main className="min-h-screen bg-slate-50 text-slate-900">
 <PageHero
 title="Lapland Tours Finland 2026"
 subtitle="Real pricing examples, realistic itineraries, and booking logic that actually works."
 />

 <Section>
 <div className="mx-auto max-w-6xl px-4 py-8">
 {/* top meta */}
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="text-sm text-slate-600">
 <span className="font-medium"></span>
 <span className="mx-2 text-slate-300">•</span>
 <span className="text-slate-500">
 Slug: <span className="font-mono text-xs">{slug}</span>
 </span>
 <span className="mx-2 text-slate-300">•</span>
 <span className="text-slate-500">
 Last verified:{" "}
 <span className="font-medium text-slate-700">{lastVerified}</span>
 </span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900" href="/lapland-tours">
 Lapland tours 
 </Link>
 <Link className="hover:text-slate-900" href="/offer-checklist">
 Offer checklist
 </Link>
 <Link className="hover:text-slate-900" href="/getting-around-finland">
 Getting around Finland
 </Link>
 </nav>
 </div>

 <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div className="space-y-6">
 {/* hero decision strip */}
 <Card className="p-6 md:p-8">
 <div className="flex flex-wrap items-center justify-between gap-3">
 <Pill>Decision-first Lapland planning</Pill>
 <div className="text-xs text-slate-500">
 Jump to:{" "}
 <a className="underline hover:text-slate-900" href="#pricing">
 pricing
 </a>
 <span className="mx-2 text-slate-300">•</span>
 <a className="underline hover:text-slate-900" href="#itinerary">
 7-day plan
 </a>
 <span className="mx-2 text-slate-300">•</span>
 <a className="underline hover:text-slate-900" href="#booking">
 booking rules
 </a>
 </div>
 </div>

 <p className="mt-4 text-sm text-slate-700 leading-relaxed">
 Lapland looks simple on social media. In reality, it’s one of the least forgiving
 winter destinations to plan badly: distances are real, daylight is limited, and
 tours run on strict timing. This page is built to reduce regret, not to sell
 fantasies.
 </p>

 <div className="mt-5 grid gap-3 sm:grid-cols-3">
 <Stat
 label="Core rule"
 value="Pick one base"
 hint="Moving every day burns energy"
 />
 <Stat
 label="Book first"
 value="Husky + snowmobile"
 hint="The popular slots vanish"
 />
 <Stat
 label="Non-negotiable"
 value="1 buffer day"
 hint="Winter will use it"
 />
 </div>

 <div className="mt-5 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Helsinki → Lapland logistics →
 </CtaButton>
 </div>
 </Card>

 {/* visuals grid */}
 <div className="grid gap-4 md:grid-cols-2">
 {visuals.map((c) => (<Card key={c.title} className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={c.image}
 alt={c.alt}
 fill
 className="object-cover"
 sizes="(min-width: 768px) 520px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <h3 className="text-base font-semibold text-slate-900">
 {c.title}
 </h3>
 <p className="mt-2 text-sm text-slate-700 leading-relaxed">
 {c.body}
 </p>
 </div>
 </Card>))}
 </div>

 {/* core rule */}
 <SectionCard id="rule" kicker="Foundation" title="The core rule of Lapland planning">
 <ul className="list-disc pl-5 space-y-2">
 <li>
 <strong>Choose one base.</strong> Moving every day wastes energy and kills rhythm.
 </li>
 <li>
 <strong>Book the big tours first.</strong> Husky, snowmobile, and your best aurora attempt.
 </li>
 <li>
 <strong>Keep one buffer day.</strong> Weather, delays, or simple fatigue will claim it.
 </li>
 </ul>
 </SectionCard>

 {/* bases */}
 <SectionCard id="base" kicker="Base choice" title="Choosing your Lapland base (pick like an adult)">
 <div className="grid gap-4">
 <div className="rounded-2xl border border-slate-200 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Rovaniemi</div>
 <p className="mt-2 text-sm text-slate-700">
 Best overall logistics, widest tour choice, easiest connection from Helsinki. Busier, but predictable.
 </p>
 </div>

 <div className="rounded-2xl border border-slate-200 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Levi / Kittilä</div>
 <p className="mt-2 text-sm text-slate-700">
 Resort comfort, strong winter sports, polished operations. Less “wild”, more efficient.
 </p>
 </div>

 <div className="rounded-2xl border border-slate-200 bg-white p-5">
 <div className="text-sm font-semibold text-slate-900">Saariselkä / Ivalo</div>
 <p className="mt-2 text-sm text-slate-700">
 Quieter, darker skies, stronger aurora atmosphere. Fewer services, higher transport complexity.
 </p>
 </div>
 </div>
 </SectionCard>

 {/* pricing - source checked examples only */}
 <SectionCard
 id="pricing"
 kicker="Source-checked examples"
 title="Lapland tour pricing (2026): only validated numbers, no guessing"
 >
 <p>
 These are <strong>publicly listed</strong> example prices from operators and destination sites.
 They are not “typical ranges”. If you change them, update <strong>Last verified</strong>.
 </p>

 <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
 <table className="w-full text-sm">
 <thead className="bg-slate-50 text-left">
 <tr className="border-b">
 <th className="px-4 py-3">Experience</th>
 <th className="px-4 py-3">Validated example price(s)</th>
 <th className="px-4 py-3">What to check</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b">
 <td className="px-4 py-3 font-medium text-slate-900">
 Husky (short ride / intro)
 </td>
 <td className="px-4 py-3 text-slate-700">
 €60 (Santa’s Husky Rides, adult) • €102–€157 (3 km husky safari, 1 hour, adult)
 </td>
 <td className="px-4 py-3 text-slate-700">
 Ride distance/time, 1 sled vs shared, transfers, included thermal gear
 </td>
 </tr>

 <tr className="border-b">
 <td className="px-4 py-3 font-medium text-slate-900">
 Aurora (group hunt)
 </td>
 <td className="px-4 py-3 text-slate-700">
 From €139 (Aurora hunting group tour)
 </td>
 <td className="px-4 py-3 text-slate-700">
 Duration, mobility, refund/guarantee rules, pickup area
 </td>
 </tr>

 <tr className="border-b">
 <td className="px-4 py-3 font-medium text-slate-900">
 Aurora (multi-night package)
 </td>
 <td className="px-4 py-3 text-slate-700">
 From €350/adult (4-night aurora hunter package)
 </td>
 <td className="px-4 py-3 text-slate-700">
 Number of nights, pickup scope, what “adapted to conditions” really means
 </td>
 </tr>

 <tr className="border-b">
 <td className="px-4 py-3 font-medium text-slate-900">
 Snowmobile (Levi examples)
 </td>
 <td className="px-4 py-3 text-slate-700">
 €115/adult (shared) • €147 (solo driver) • from €125–€140 (2–3h) • from €282 (6h safari)
 </td>
 <td className="px-4 py-3 text-slate-700">
 Shared vs solo pricing, duration, included gear, liability/damage policies
 </td>
 </tr>

 <tr>
 <td className="px-4 py-3 font-medium text-slate-900">
 Ice / Snow hotel visit (Rovaniemi example)
 </td>
 <td className="px-4 py-3 text-slate-700">
 From €195 (Visit Arctic Snow Hotel)
 </td>
 <td className="px-4 py-3 text-slate-700">
 Transfer distance, guided tour vs entry only, dinner/overnight add-ons
 </td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
 <div className="text-sm font-semibold text-slate-900">Important</div>
 <p className="mt-2 text-sm text-slate-700 leading-relaxed">
 If a listing hides ride time, pickup radius, or “shared/solo” pricing, it’s not mysterious.
 It’s incomplete. Skip or verify before booking.
 </p>
 </div>

 <div className="mt-2 text-xs text-slate-500">
 Source links are included below in <strong>Validated sources</strong>.
 </div>
 </SectionCard>

 {/* itinerary */}
 <SectionCard id="itinerary" kicker="First-timer balanced" title="7-day Lapland itinerary (realistic rhythm)">
 <div className="grid gap-4">
 {[
 ["Day 1", "Arrival & reset", "Arrive, gear up, light walk, early sleep. Arrival day is not a tour day."],
 ["Day 2", "Husky safari", "Signature experience. Do it early in the week while energy is high."],
 ["Day 3", "Sauna + slow day", "Recovery day. This keeps the rest of the week enjoyable."],
 ["Day 4", "Snowmobile safari", "High energy. Plan nothing heavy afterward."],
 ["Day 5", "Aurora chase", "First serious attempt. Don’t bet everything on one night."],
 ["Day 6", "Ice hotel / culture", "Low-stress, visually strong day. Great for pacing."],
 ["Day 7", "Buffer & departure", "Reschedule, retry aurora, or rest. Winter always uses buffers."],
 ].map(([d, t, s]) => (<div key={d} className="rounded-2xl border border-slate-200 bg-white p-5">
 <div className="text-xs font-medium text-slate-600">{d}</div>
 <div className="mt-1 text-sm font-semibold text-slate-900">{t}</div>
 <p className="mt-2 text-sm text-slate-700">{s}</p>
 </div>))}
 </div>
 </SectionCard>

 {/* booking rules */}
 <SectionCard id="booking" kicker="Reduce regret" title="Booking rules that prevent disappointment">
 <ul className="list-disc pl-5 space-y-2">
 <li>No one guarantees aurora. They guarantee effort (and sometimes refunds with conditions).</li>
 <li>Small groups beat big buses when weather turns annoying.</li>
 <li>Arrival day is not a tour day. Don’t schedule yourself into failure.</li>
 <li>Plan two aurora chances minimum. One night = gambling.</li>
 <li>Snowmobile pricing often depends on shared vs solo driving. Read it before paying.</li>
 </ul>

 <div className="mt-4 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Getting around Finland →
 </CtaButton>
 </div>

 <div className="mt-4 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </div>
 </SectionCard>

 {/* validated sources */}
 <SectionCard id="sources" kicker="No guessing policy" title="Validated sources (update when prices change)">
 <p>
 These are the pages used for the example prices above. If any changes, update the table and bump{" "}
 <strong>Last verified</strong>.
 </p>
 <ul className="list-disc pl-5 space-y-2">
 <li>
 Santa’s Husky Rides (adult €60, seasonal pricing notes):{" "}
 <a className="underline hover:text-slate-900" href="https://bearhillhusky.com/winter-tours/husky-rides-at-santa-claus-village/" target="_blank" rel="noreferrer">
 bearhillhusky.com
 </a>
 </li>
 <li>
 3 km Husky Safari pricing (€102 shared / €157 solo):{" "}
 <a className="underline hover:text-slate-900" href="https://wildnordic.fi/3-km-husky-safari/" target="_blank" rel="noreferrer">
 wildnordic.fi
 </a>
 </li>
 <li>
 Aurora group tour (from €139):{" "}
 <a className="underline hover:text-slate-900" href="https://staylapland.com/product/aurora-hunting-group-tour-guaranteed-view/" target="_blank" rel="noreferrer">
 staylapland.com
 </a>
 </li>
 <li>
 Aurora multi-night package (from €350/adult):{" "}
 <a className="underline hover:text-slate-900" href="https://wildaboutlapland.com/aurora-hunter-package-rovaniemi/" target="_blank" rel="noreferrer">
 wildaboutlapland.com
 </a>
 </li>
 <li>
 Levi snowmobile example (€115 shared / €147 solo):{" "}
 <a className="underline hover:text-slate-900" href="https://www.levi.fi/en/activities/fast-and-easy-snowmobile-safari/" target="_blank" rel="noreferrer">
 levi.fi
 </a>
 </li>
 <li>
 Levi snowmobile ranges (2–3h from €125–€140; longer €180+):{" "}
 <a className="underline hover:text-slate-900" href="https://www.levi-tours.com/snowmobile" target="_blank" rel="noreferrer">
 levi-tours.com
 </a>
 </li>
 <li>
 6-hour snowmobile safari (from €282):{" "}
 <a className="underline hover:text-slate-900" href="https://snowmobilepark.com/product/6-hour-snowmobile-safari-in-levi/" target="_blank" rel="noreferrer">
 snowmobilepark.com
 </a>
 </li>
 <li>
 Arctic Snow Hotel visit (from €195):{" "}
 <a className="underline hover:text-slate-900" href="https://www.visitrovaniemi.fi/activity-product/husky-farm-visit-and-2-hour-self-ride-safari/" target="_blank" rel="noreferrer">
 visitrovaniemi.fi (listing snippet includes Arctic Snow Hotel “from €195”)
 </a>
 </li>
 </ul>

 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
 <div className="text-sm font-semibold text-slate-900">Internal links</div>
 <div className="mt-3 flex flex-wrap gap-3 text-sm">
 <Link className="underline hover:text-slate-900" href="/lapland-tours">
 Lapland tours 
 </Link>
 <Link className="underline hover:text-slate-900" href="/getting-around-finland">
 Getting around Finland
 </Link>
 <Link className="underline hover:text-slate-900" href="/offer-checklist">
 Offer checklist
 </Link>
 </div>
 </div>
 </SectionCard>

 {/* bottom CTA */}
 <Card className="p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want Lapland magic without Lapland chaos?
 </h3>
 <p className="mt-2 max-w-3xl text-sm text-slate-700">
 Choose one base, book the headline tour early, and keep a buffer day. Winter rewards realism.
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

 <p className="mt-6 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </p>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">On this page</h2>
 <div className="mt-3 grid gap-2 text-sm text-slate-700">
 <a className="hover:underline" href="#rule">Core rule</a>
 <a className="hover:underline" href="#base">Choosing a base</a>
 <a className="hover:underline" href="#pricing">Pricing (validated)</a>
 <a className="hover:underline" href="#itinerary">7-day itinerary</a>
 <a className="hover:underline" href="#booking">Booking rules</a>
 <a className="hover:underline" href="#sources">Validated sources</a>
 </div>
 </Card>

 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src="/images/blog/lapland-tours-2026/sidebar.jpg"
 alt="Lapland winter cabin lights and dark sky mood (2026)"
 fill
 className="object-cover"
 sizes="360px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <p className="text-xs font-medium text-slate-700">Quick rule</p>
 <p className="mt-2 text-sm text-slate-700">
 If a listing hides ride time or “shared vs solo” pricing, it’s incomplete. Verify or skip.
 </p>
 <div className="mt-4">
 <CtaButton href="/offer-checklist" variant="success" className="w-full">
 Open offer checklist →
 </CtaButton>
 </div>
 </div>
 </Card>
 </aside>
 </div>
 </div>
 </Section>
 </main>);
}


