import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
 description:
 "Helsinki-Vantaa airport car rental for Lapland self-drive in 2026: winter tires, realistic pacing, fuel reality, and the mistakes that quietly ruin a northbound drive.",
 openGraph: {
 title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
 description:
 "Winter tires, pacing, fuel reality, and the mistakes that quietly ruin a Lapland drive.",
 images: ["/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
 description:
 "Winter tires, pacing, fuel reality, and the mistakes that quietly ruin a Lapland drive.",
 images: ["/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"],
 },
};

const lastVerified = "2026-01-04";

const quickCards = [
 {
 title: "Best pickup choice",
 body: "Airport fleets and support tend to be better prepared for winter reality.",
 image: "/images/blog/rental/hel-airport-rental-desk.jpg",
 },
 {
 title: "Most common failure",
 body: "Trying to drive too far in one day, then stacking fatigue on darkness.",
 image: "/images/blog/rental/winter-night-driving-finland.jpg",
 },
 {
 title: "Non-negotiable",
 body: "Winter tyres are mandatory when conditions require. Plan like physics exists.",
 image: "/images/blog/rental/winter-tires-closeup.jpg",
 },
 {
 title: "Hidden cost driver",
 body: "Fuel buffers for detours, cold starts, and idling matter more than people admit.",
 image: "/images/blog/rental/fuel-station-winter-finland.jpg",
 },
];

const toc = [
 { id: "good-idea", label: "Is self-driving a good idea?" },
 { id: "why-airport", label: "Why airport pickup matters" },
 { id: "winter-tires", label: "Winter tyres: what matters" },
 { id: "pacing", label: "Route pacing (no hero days)" },
 { id: "route-table", label: "A realistic 2-day northbound split" },
 { id: "fuel", label: "Fuel reality" },
 { id: "vs-tours", label: "Self-drive vs tours" },
 { id: "mistakes", label: "Mistakes to avoid" },
 { id: "conclusion", label: "Conclusion" },
];

const pacingRows = [
 {
 day: "Day 1",
 leg: "Helsinki (HEL/Vantaa area) → Oulu area",
 winterTime: "~6–7h (conditions-dependent)",
 logic: "Long but manageable if started early. Aim to arrive before deep darkness.",
 },
 {
 day: "Day 2",
 leg: "Oulu area → Rovaniemi",
 winterTime: "~3–4h",
 logic: "Shorter day. You arrive with energy to do something useful (or just recover).",
 },
];

const fuelRows = [
 {
 label: "What actually drives fuel spend",
 value:
 "Distance + winter consumption + detours + idling. The north rewards boring planning.",
 },
 {
 label: "Simple rule",
 value:
 "Don’t run the tank low on long gaps. Refill earlier than you would in the south.",
 },
 {
 label: "Buffer mindset",
 value:
 "Assume a little extra consumption in cold conditions and stop treating it as a surprise.",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-24" />;
}

function MicroCallout({
 label,
 text,
 tone = "neutral",
}: {
 label: string;
 text: string;
 tone?: "neutral" | "warning";
}) {
 const box =
 tone === "warning"? "border-amber-200 bg-amber-50": "border-slate-200 bg-slate-50";
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
 title="Helsinki Airport Car Rental → Lapland"
 subtitle="What it really takes to drive north in winter."
 imageSrc="/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental Helsinki" }}
 />

 <div className="relative">
 {/* subtle background texture + right-side decor */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
 <div className="absolute right-0 top-16 hidden h-[560px] w-[520px] opacity-[0.18] lg:block">
 <Image
 src="/images/decor/finland-map-watercolor.png"
 alt=""
 fill
 className="object-contain"
 sizes="520px"
 priority={false}
 />
 </div>
 </div>

 {/* top bar */}
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
 <Link className="hover:text-slate-900" href="/car-rental-helsinki">
 Car rental Helsinki
 </Link>
 <Link className="hover:text-slate-900" href="/offer-checklist">
 Offer checklist
 </Link>
 </nav>
 </div>
 </Section>

 <Section>
 <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Practical winter self-drive decisions
 </div>

 {/* in-page image */}
 <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
 <div className="relative aspect-[16/9] w-full">
 <Image
 src="/images/blog/rental/helsinki-airport-car-rental-hero.jpg"
 alt="Car rental at Helsinki Airport for a winter Lapland road trip"
 fill
 className="object-cover"
 sizes="(min-width: 1024px) 720px, 100vw"
 priority={false}
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
 </div>
 </div>

 {/* quick cards */}
 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {quickCards.map((c) => (<Card key={c.title} className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={c.image}
 alt={c.title}
 fill
 className="object-cover"
 sizes="(min-width: 768px) 520px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
 <p className="mt-2 text-sm text-slate-700">{c.body}</p>
 </div>
 </Card>))}
 </div>

 {/* ARTICLE (kept same headings, but not locked to prose tables) */}
 <div className="mt-10 space-y-12">
 <section>
 <Anchor id="good-idea" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Is self-driving actually a good idea?
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Sometimes. Only if your goals match what driving gives you.
 </p>
 <p className="mt-3 max-w-3xl text-slate-700">
 If your plan is hotels and guided tours, skip the car. If your plan is silence, detours, and aurora
 flexibility, it starts to make sense.
 </p>

 <MicroCallout
 tone="warning"
 label="Decision filter"
 text="If your itinerary needs hero days to work, it’s not an itinerary. It’s a future apology."
 />
 </section>

 <section>
 <Anchor id="why-airport" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Why Helsinki Airport pickup matters
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Airport rentals usually mean newer fleets, better winter prep, and better support coverage. Downtown
 pickups often add friction without adding value.
 </p>
 </section>

 <section>
 <Anchor id="winter-tires" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Winter tyres in Finland: what actually matters
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Winter tyres are mandatory when conditions require. Rental cars must comply. The real question is not
 “if”, it’s whether you inspect what you received before you commit to a long northbound leg.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Pickup checklist</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>Confirm you have winter tyres fitted (don’t assume from the listing).</li>
 <li>Check tread looks healthy and consistent across tyres.</li>
 <li>Verify lights, washer fluid, and basic visibility tools.</li>
 <li>Ask what to do if conditions worsen (support number + process).</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Reality note</h3>
 <p className="mt-2 text-sm text-slate-700">
 Winter driving safety is mostly boring: speed discipline, daylight planning, and not letting fatigue
 decide for you.
 </p>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="pacing" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Route pacing (don’t be heroic)
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Helsinki to Rovaniemi is long. Break it into realistic segments and avoid night marathons in winter
 darkness. Your “average speed” fantasy does not survive real conditions.
 </p>

 <MicroCallout
 label="Simple rule"
 text="Start early, stop earlier than your ego wants. Darkness + fatigue is where bad decisions happen."
 />
 </section>

 <section>
 <Anchor id="route-table" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 A realistic 2-day northbound split
 </h2>

 <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full text-sm">
 <thead className="text-left">
 <tr className="border-b bg-slate-50">
 <th className="px-4 py-3 font-semibold text-slate-900">Day</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Leg</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Time (winter)</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Why this works</th>
 </tr>
 </thead>
 <tbody>
 {pacingRows.map((r) => (<tr key={r.day} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">{r.day}</td>
 <td className="px-4 py-3 text-slate-700">{r.leg}</td>
 <td className="px-4 py-3 text-slate-700">{r.winterTime}</td>
 <td className="px-4 py-3 text-slate-700">{r.logic}</td>
 </tr>))}
 </tbody>
 </table>
 </div>

 <div className="mt-6 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Buffer rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 Keep one flexible day for weather or fatigue. It protects the best part of the trip.
 </p>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Fatigue rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 If you need “one more big push” to reach your plan, your plan is already broken.
 </p>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="fuel" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Fuel reality
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Long distances add up. Build fuel buffers for detours, idling, and cold starts. In the north, the main
 win is avoiding stress, not squeezing the last euro out of “perfect timing”.
 </p>

 <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full text-sm">
 <thead className="text-left">
 <tr className="border-b bg-slate-50">
 <th className="px-4 py-3 font-semibold text-slate-900">Planning item</th>
 <th className="px-4 py-3 font-semibold text-slate-900">What to expect</th>
 </tr>
 </thead>
 <tbody>
 {fuelRows.map((r) => (<tr key={r.label} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-medium text-slate-900">{r.label}</td>
 <td className="px-4 py-3 text-slate-700">{r.value}</td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </section>

 <section>
 <Anchor id="vs-tours" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Self-drive vs tours
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Self-driving rewards preparation. Tours reward convenience. Neither is wrong. The mistake is choosing one
 and expecting the benefits of the other.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Self-drive is best if…</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>You want detours and flexibility (aurora attempts, quieter stops).</li>
 <li>You can handle winter pacing and buffers.</li>
 <li>You prefer control over being “optimized for tourists”.</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Tours are best if…</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>You want predictable start times and zero driving stress.</li>
 <li>You’re short on days and want concentrated experiences.</li>
 <li>You don’t want “vehicle + weather” to be part of the trip.</li>
 </ul>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="mistakes" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Mistakes that quietly ruin a Lapland drive
 </h2>

 <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <ul className="space-y-3 text-sm text-slate-700">
 <li>Planning one huge driving day because “Google says it’s fine”</li>
 <li>Arriving late and driving in darkness by default</li>
 <li>Assuming fuel/food stops are always convenient on long stretches</li>
 <li>Stacking a long drive and a “must-do” activity on the same day</li>
 <li>Not checking the basics at pickup (tyres, lights, visibility)</li>
 </ul>
 </div>

 <MicroCallout
 tone="warning"
 label="Hard truth"
 text="If your plan depends on perfect conditions, it’s not planning. It’s gambling with winter."
 />
 </section>

 <section>
 <Anchor id="conclusion" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Conclusion
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Driving to Lapland isn’t about saving money at all costs. It’s about buying freedom with effort. Do it
 right and the trip feels calm and personal. Do it casually and you’ll spend money fixing avoidable
 problems.
 </p>

 <div className="mt-6 text-sm text-slate-700">
 <strong>Internal links:</strong>{" "}
 <Link href="/getting-around-finland" className="font-semibold hover:underline">
 Getting around Finland
 </Link>{" "}
 ·{" "}
 <Link href="/lapland-tours" className="font-semibold hover:underline">
 Lapland tours
 </Link>{" "}
 ·{" "}
 <Link href="/offer-checklist" className="font-semibold hover:underline">
 Offer checklist
 </Link>
 </div>

 <p className="mt-4 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </p>
 </section>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-10 p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want to avoid the rental counter surprises?
 </h3>
 <p className="mt-2 max-w-3xl text-sm text-slate-700">
 Verify documents, payment rules, and pickup timing before you land, then keep the drive plan conservative.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/car-rental-helsinki" variant="outline">
 Car rental Helsinki →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 </div>

 <div className="mt-6 text-sm">
 <Link href="/blog" className="font-semibold hover:underline text-slate-700">
 Back to Blog →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/policy" className="font-semibold hover:underline text-slate-700">
 Policy →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/get-help" className="font-semibold hover:underline text-slate-700">
 Get help →
 </Link>
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
 {toc.map((t) => (<a key={t.id} className="hover:underline" href={`#${t.id}`}>
 {t.label}
 </a>))}
 </div>
 </Card>

 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src="/images/blog/rental/sidebar-snowy-road-lapland.jpg"
 alt="Snowy road in Finland on a winter self-drive"
 fill
 className="object-cover"
 sizes="360px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <p className="text-xs font-medium text-slate-700">Reality check</p>
 <p className="mt-2 text-sm text-slate-700">
 If your route requires hero driving days, it’s not a plan. It’s a future apology.
 </p>
 <div className="mt-4">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get Help
 </CtaButton>
 </div>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Booking flow</p>
 <p className="mt-2 text-sm text-slate-700">
 Start with rules, then compare offers. Reverse that and you’ll pay for “surprises”.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Offer checklist →
 </CtaButton>
 <CtaButton href="/car-rental-helsinki" variant="outline" className="w-full">
 Car rental Helsinki →
 </CtaButton>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

