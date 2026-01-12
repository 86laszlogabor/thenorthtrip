import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
 description:
 "Decision-first Finland transport guide for 2026: night trains vs flights vs buses, winter buffers that actually matter, and how to align arrivals with Lapland tours without losing days.",
 openGraph: {
 title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
 description:
 "Night trains, flights, buses, and the winter planning assumptions that actually matter.",
 images: ["/images/og/og-getting-around-finland-2.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
 description:
 "Night trains, flights, buses, and the winter booking assumptions that actually matter.",
 images: ["/images/og/og-getting-around-finland-2.jpg"],
 },
};

const lastVerified = "2026-01-04";

const quickCards = [
 {
 title: "Best overall in winter",
 body: "Night trains: travel + sleep in one block. You arrive functional, not wrecked.",
 image: "/images/blog/transport/night-train-cabin.jpg",
 },
 {
 title: "Best for short trips",
 body: "Flights compress distance, but airport friction and baggage add-ons decide the real cost.",
 image: "/images/blog/transport/lapland-flight-snowy-runway.jpg",
 },
 {
 title: "Best as a backup",
 body: "Buses fill gaps and secondary legs. Treat long bus days as travel days, not activity days.",
 image: "/images/blog/transport/finland-bus-winter.jpg",
 },
 {
 title: "Best planning rule",
 body: "Align arrival times with tour start times before paying. Winter punishes guessing.",
 image: "/images/blog/transport/meeting-point-winter.jpg",
 },
];

const toc = [
 { id: "intro", label: "Introduction" },
 { id: "logic", label: "Big picture logic" },
 { id: "choices", label: "Quick decision rules" },
 { id: "trains", label: "Trains (night vs day)" },
 { id: "flights", label: "Domestic flights" },
 { id: "buses", label: "Buses" },
 { id: "verify", label: "What to verify before booking" },
 { id: "table", label: "Decision table" },
 { id: "align", label: "Aligning with Lapland tours" },
 { id: "mistakes", label: "Common mistakes" },
 { id: "conclusion", label: "Conclusion" },
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
 title="Getting Around Finland 2026: Trains, Buses & Flights to Lapland"
 subtitle="Finland transport isn’t complicated. Bad assumptions are."
 imageSrc="/images/og/og-getting-around-finland-2.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 secondaryCta={{ href: "/lapland-tours", label: "Lapland tours" }}
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
 <Link className="hover:text-slate-900" href="/getting-around-finland">
 Getting around Finland
 </Link>
 <Link className="hover:text-slate-900" href="/lapland-tours">
 Lapland tours
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
 Night trains · flights · buses · winter buffers
 </div>

 {/* in-page image */}
 <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
 <div className="relative aspect-[16/9] w-full">
 <Image
 src="/images/blog/transport/getting-around-finland-trains-flights-hero.jpg"
 alt="Winter transport choices in Finland: trains, flights, and long distances"
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

 {/* Key decisions (clean blocks) */}
 <div className="mt-6 grid gap-4 md:grid-cols-3">
 <Card className="p-5">
 <p className="text-xs font-medium text-slate-600">Decision #1</p>
 <h3 className="mt-1 text-sm font-semibold text-slate-900">Do you need sleep or speed?</h3>
 <p className="mt-2 text-sm text-slate-700">
 If you’ll be outdoors in real cold, arriving rested matters more than shaving hours on paper.
 </p>
 </Card>
 <Card className="p-5">
 <p className="text-xs font-medium text-slate-600">Decision #2</p>
 <h3 className="mt-1 text-sm font-semibold text-slate-900">How fragile is your schedule?</h3>
 <p className="mt-2 text-sm text-slate-700">
 Zero slack is not a plan. Winter delays don’t announce themselves politely.
 </p>
 </Card>
 <Card className="p-5">
 <p className="text-xs font-medium text-slate-600">Decision #3</p>
 <h3 className="mt-1 text-sm font-semibold text-slate-900">What’s your last mile?</h3>
 <p className="mt-2 text-sm text-slate-700">
 Landing is not arriving. Stations and airports still require transfers and timing.
 </p>
 </Card>
 </div>

 {/* CONTENT (no prose tables, we style our own) */}
 <div className="mt-10 space-y-12">
 <section>
 <Anchor id="intro" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Introduction: why winter transport is about energy
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 People overthink Finland transport because they optimize the wrong thing: speed on paper. In winter,
 the real resource is energy. If you arrive exhausted, you lose a day without noticing.
 </p>
 <p className="mt-3 max-w-3xl text-slate-700">
 This guide is built for Lapland-bound trips starting in Helsinki. No fantasy logistics. Just the
 decision logic that keeps trips calm and functional.
 </p>

 <MicroCallout
 tone="warning"
 label="Decision filter"
 text="If a missed connection would break your trip, don’t chain multiple legs on the same day. Build slack and treat winter as a constraint, not a vibe."
 />
 </section>

 <section>
 <Anchor id="logic" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 The big picture: Finland’s winter transport logic
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Distances are real. Infrastructure is solid. Your choice should optimize three things, in this order:
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-3">
 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Priority #1</p>
 <p className="mt-1 text-sm font-semibold text-slate-900">Predictability</p>
 <p className="mt-2 text-sm text-slate-700">
 Tight connections fail quietly. Protect the days you actually care about.
 </p>
 </Card>
 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Priority #2</p>
 <p className="mt-1 text-sm font-semibold text-slate-900">Energy</p>
 <p className="mt-2 text-sm text-slate-700">
 Sleep quality becomes an asset. Arriving tired is a hidden cost.
 </p>
 </Card>
 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Priority #3</p>
 <p className="mt-1 text-sm font-semibold text-slate-900">Time</p>
 <p className="mt-2 text-sm text-slate-700">
 Speed matters, but not if you burn the day on transfers and friction.
 </p>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="choices" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Quick decision rules (use these before comparing prices)
 </h2>

 <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <ul className="space-y-3 text-sm text-slate-700">
 <li>
 <span className="font-semibold text-slate-900">If you have 3–5 days total:</span>{" "}
 flights can make sense, but only if the last-mile transfer is clean.
 </li>
 <li>
 <span className="font-semibold text-slate-900">If you have 6–10 days:</span>{" "}
 night trains often win on comfort + predictability.
 </li>
 <li>
 <span className="font-semibold text-slate-900">If your schedule is fragile:</span>{" "}
 avoid chains of connections on the same day.
 </li>
 <li>
 <span className="font-semibold text-slate-900">If you’re tour-heavy:</span>{" "}
 align arrivals with meeting times first, then book transport.
 </li>
 </ul>
 </div>
 </section>

 <section>
 <Anchor id="trains" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Trains (night vs day)
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Day trains are straightforward, but they consume usable daylight. Night trains compress travel into the
 hours you would otherwise spend sleeping, then you arrive ready for a real day.
 </p>

 <MicroCallout
 label="Booking reality"
 text="Sleeper cabins can sell out in peak winter. If dates are fixed, lock the core legs early. If dates are flexible, you can often find better value."
 />
 </section>

 <section>
 <Anchor id="flights" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Domestic flights
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Flights compress distance, but “quick” becomes less dramatic once you add airport time, security, boarding,
 and transfers on both ends.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">When flights make sense</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>You have a short trip and need to maximize Lapland days</li>
 <li>You’re connecting from an international arrival and going straight north</li>
 <li>The price stays reasonable after baggage add-ons</li>
 <li>Your activities start later (cleaner alignment)</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">What people forget</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>Winter gear is bulky, and airlines price that fact</li>
 <li>Landing isn’t arriving: last-mile transfers still exist</li>
 <li>Don’t chain flight arrival into “must-not-miss” same-day tours</li>
 </ul>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="buses" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Buses
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Buses are not glamorous, but they cover gaps where trains don’t and can be good value on secondary legs.
 The tradeoff is fatigue: treat long bus days as travel days, not activity days.
 </p>
 </section>

 <section>
 <Anchor id="verify" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 What to verify before you book
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Trips don’t collapse loudly. They fail quietly: missed pickups, no-refund tickets, tours you can’t reach.
 Before paying, verify:
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Must-verify list</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li>Arrival time vs tour meeting time (don’t guess)</li>
 <li>Winter buffer on “must-do” days</li>
 <li>Luggage limits (especially if flying)</li>
 <li>Connection realism (same-day chains are fragile)</li>
 <li>Refund/change rules</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Shortcut</h3>
 <p className="mt-2 text-sm text-slate-700">
 Use the checklist page and treat anything unclear as a decision point, not a guess.
 </p>
 <div className="mt-4">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Open offer checklist →
 </CtaButton>
 </div>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="table" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Train vs flight vs bus: decision table
 </h2>

 <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full text-sm">
 <thead className="text-left">
 <tr className="border-b bg-slate-50">
 <th className="px-4 py-3 font-semibold text-slate-900">Mode</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Best for</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Energy outcome</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Winter predictability</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Main risk</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">Night train</td>
 <td className="px-4 py-3 text-slate-700">Balanced trips, comfort-first planning</td>
 <td className="px-4 py-3 text-slate-700">High</td>
 <td className="px-4 py-3 text-slate-700">Very strong</td>
 <td className="px-4 py-3 text-slate-700">Cabins sell out</td>
 </tr>
 <tr className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">Day train</td>
 <td className="px-4 py-3 text-slate-700">Calmer pace, simple routing</td>
 <td className="px-4 py-3 text-slate-700">Medium</td>
 <td className="px-4 py-3 text-slate-700">Very strong</td>
 <td className="px-4 py-3 text-slate-700">Consumes daylight</td>
 </tr>
 <tr className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">Flight</td>
 <td className="px-4 py-3 text-slate-700">Short trips, speed, tight schedules</td>
 <td className="px-4 py-3 text-slate-700">Medium</td>
 <td className="px-4 py-3 text-slate-700">Good</td>
 <td className="px-4 py-3 text-slate-700">Airport friction + baggage</td>
 </tr>
 <tr className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">Bus</td>
 <td className="px-4 py-3 text-slate-700">Budget, secondary routes</td>
 <td className="px-4 py-3 text-slate-700">Low–medium</td>
 <td className="px-4 py-3 text-slate-700">Good</td>
 <td className="px-4 py-3 text-slate-700">Fatigue + time cost</td>
 </tr>
 </tbody>
 </table>
 </div>
 </section>

 <section>
 <Anchor id="align" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Aligning transport with Lapland tours
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 The biggest efficiency leak is booking transport and tours separately, then discovering the start times
 don’t align.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Clean alignment</h3>
 <ul className="mt-3 space-y-2 text-sm text-slate-700">
 <li><strong>Night train</strong> pairs well with morning activities</li>
 <li><strong>Flights</strong> often align better with afternoon starts, or need an overnight buffer</li>
 <li><strong>Bus legs</strong> are usually travel days, not tour days</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Shortcut</h3>
 <p className="mt-2 text-sm text-slate-700">
 If you don’t want timing mistakes, pick a base first, then build tours around arrival times.
 </p>
 <div className="mt-4 flex flex-col gap-2">
 <CtaButton href="/lapland-tours" variant="primary" className="w-full">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
 Transport →
 </CtaButton>
 </div>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="mistakes" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Common mistakes first-time Lapland travellers make
 </h2>

 <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <ul className="space-y-3 text-sm text-slate-700">
 <li>Booking flights without checking tour meeting times</li>
 <li>Ignoring baggage limits and winter bulk</li>
 <li>Overbooking connections in one day</li>
 <li>Optimizing speed instead of energy</li>
 <li>Planning without buffers</li>
 </ul>
 </div>
 </section>

 <section>
 <Anchor id="conclusion" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Conclusion: in Finland, transport is strategy
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Getting around Finland in winter is not about chasing the fastest option. It’s about choosing the one that
 leaves you functional, rested, and on time for the experiences you actually came for.
 </p>

 <p className="mt-3 max-w-3xl text-slate-700">
 Night trains are an advantage. Flights are tools, not defaults. Buses are underrated. Verify assumptions,
 build buffers, and winter becomes calmer instead of chaotic.
 </p>

 <div className="mt-6 text-sm text-slate-700">
 <strong>Internal links:</strong>{" "}
 <Link href="/lapland-tours" className="font-semibold hover:underline">
 Lapland tours
 </Link>{" "}
 ·{" "}
 <Link href="/offer-checklist" className="font-semibold hover:underline">
 Offer checklist
 </Link>{" "}
 ·{" "}
 <Link href="/getting-around-finland" className="font-semibold hover:underline">
 Getting around Finland
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
 Want fewer transport surprises and better timing?
 </h3>
 <p className="mt-2 max-w-3xl text-sm text-slate-700">
 Start with a stable base and align arrivals with tour start times before paying for anything.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
 </CtaButton>
 <CtaButton href="/car-rental-helsinki" variant="outline">
 Car rental Helsinki →
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
 src="/images/blog/transport/sidebar-sleeper-train.jpg"
 alt="Sleeper train cabin in winter"
 fill
 className="object-cover"
 sizes="360px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <p className="text-xs font-medium text-slate-700">Practical note</p>
 <p className="mt-2 text-sm text-slate-700">
 Winter scheduling is about buffers. If the plan has zero slack, it’s not a plan, it’s a wish.
 </p>
 <div className="mt-4">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get Help
 </CtaButton>
 </div>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

