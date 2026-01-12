import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
 description:
 "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
 openGraph: {
 title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
 description:
 "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
 images: ["/images/og/og-camper-winter.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
 description:
 "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
 images: ["/images/og/og-camper-winter.jpg"],
 },
};

const lastVerified = "2026-01-04";

const quickChecks = [
 {
 title: "Winter-ready is a system",
 body: "Heating + insulation + tyres + power plan. One weak link becomes the whole trip.",
 },
 {
 title: "Short driving days win",
 body: "Winter multiplies fatigue. Build calm routes, not hero drives.",
 },
 {
 title: "Start with a test day",
 body: "Pickup day should be a systems check, not a 6-hour highway sprint.",
 },
 {
 title: "Plumbing has opinions",
 body: "Decide early how dependent you want to be on water systems in freezing temps.",
 },
];

const priceRows = [
 { item: "Winter-capable camper (planning band)", value: "€110–180 / night" },
 { item: "Most common cost spike", value: "Late booking + peak weeks" },
 { item: "Stress reducer", value: "Power hookup access + realistic buffers" },
];

const winterReady = [
 "Reliable heating that protects living space and systems",
 "Proper winter tyres (and you know what you’re getting)",
 "Insulation + thermal covers (cab + windows matter)",
 "Basic winter equipment (visibility, traction, emergency basics)",
];

const itinerary = [
 {
 day: "1",
 base: "Helsinki area",
 note: "Pickup + systems test. Short drive. Fix issues while options exist.",
 },
 {
 day: "2",
 base: "On the way north",
 note: "Keep it modest. Treat this as transit, not sightseeing marathon.",
 },
 {
 day: "3–4",
 base: "Rovaniemi",
 note: "Two-night base. Build buffers. Avoid stacking tight time windows.",
 },
 {
 day: "5–6",
 base: "Levi / Ylläs area",
 note: "Another two-night base. Choose activities that match daylight + energy.",
 },
 {
 day: "7–8",
 base: "Inari / Saariselkä",
 note: "Remote feel, fewer fallbacks. Plan slack and confirm meeting points.",
 },
 {
 day: "9",
 base: "Return leg",
 note: "Do not gamble on ‘last-day hero drive’. Winter punishes optimism.",
 },
 {
 day: "10",
 base: "Helsinki area",
 note: "Return + cleanup buffer. Handback with margin, not panic.",
 },
];

const faqs = [
 {
 q: "Do you need 4x4 for winter camper travel?",
 a: "Not strictly on main routes, but it adds margin in bad conditions. Most real failures come from speed, fatigue, and bad timing, not drivetrain.",
 },
 {
 q: "Is winter camper travel actually comfortable?",
 a: "Yes, if the heating and power plan are real. No, if you assume “it’ll be fine” and discover the limits at -15°C.",
 },
 {
 q: "Can you wild-camp in winter like in summer?",
 a: "Freedom exists, but it’s narrower. Think legality, access, snow clearance, and not blocking anyone’s day. Plan overnight stops that stay viable in bad weather.",
 },
 {
 q: "What’s the #1 mistake with pickup day?",
 a: "Driving too far immediately. Use day one to test heating, power, and how the vehicle behaves. Fixing problems near Helsinki is easier than in the north.",
 },
 {
 q: "What’s the simplest way to reduce risk?",
 a: "Two-night bases + short driving days + one deliberate buffer day. Winter rewards calm planning.",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-24" />;
}

function InfoStrip({
 label,
 value,
}: {
 label: string;
 value: string;
}) {
 return (<div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
 <p className="text-xs font-medium text-slate-500">{label}</p>
 <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Winter campervan Finland 2026: Lapland self-drive, done properly."
 subtitle="Follow physics, not vibes. A practical guide to winter systems, planning, and a calm route that survives reality."
 imageSrc="/images/og/og-camper-winter.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rental in Finland" }}
 secondaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 />

 <div className="relative">
 {/* background texture */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
 <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/70 to-transparent" />
 </div>

 {/* Top bar */}
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
 <Link className="hover:text-slate-900" href="/camper-rental-finland">
 Camper rental Finland
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
 <article className="max-w-none">
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Practical guide · winter-first planning
 </div>

 <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
 Winter Camper Rental Finland 2026: Lapland Self-Drive Guide
 </h1>

 <p className="mt-3 max-w-3xl text-base text-slate-700 md:text-lg">
 Winter campervan travel in Finland can be incredible, but only if you plan like winter is real.
 This page is built around what actually breaks trips: weak heating, bad timing, no power plan,
 and optimistic driving days.
 </p>

 {/* Key metrics strip */}
 <div className="mt-6 grid gap-3 sm:grid-cols-3">
 <InfoStrip label="Planning cost band" value="€110–180 / night" />
 <InfoStrip label="Route style" value="Two-night bases + buffers" />
 <InfoStrip label="Pickup strategy" value="Test day, then go north" />
 </div>

 {/* Quick checks */}
 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {quickChecks.map((c) => (<Card key={c.title} className="p-6">
 <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
 <p className="mt-2 text-sm text-slate-700">{c.body}</p>
 </Card>))}
 </div>

 {/* Table of contents */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold text-slate-900">In this guide</h2>
 <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
 <a className="hover:underline" href="#who">Who this is for</a>
 <a className="hover:underline" href="#winter-ready">What “winter-ready” means</a>
 <a className="hover:underline" href="#price">Price reality (Winter 2026)</a>
 <a className="hover:underline" href="#pickup">Helsinki pickup reality</a>
 <a className="hover:underline" href="#4x4">Do you need 4x4?</a>
 <a className="hover:underline" href="#systems">Water, power, freezing</a>
 <a className="hover:underline" href="#sleep">Where you sleep in winter</a>
 <a className="hover:underline" href="#route">10-day route logic</a>
 <a className="hover:underline" href="#faq">FAQ</a>
 </div>
 </div>

 <div className="mt-10 space-y-12">
 {/* Who */}
 <section>
 <Anchor id="who" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Who this is for
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 This is for travellers who want independence, accept planning, and respect winter constraints.
 It’s not for summer-style roaming with “we’ll figure it out” energy.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <p className="text-xs font-medium text-slate-500">Good fit if</p>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>You can drive calmly on snow and in darkness.</li>
 <li>You’ll build buffers instead of gambling on timings.</li>
 <li>You’re happy with “warm and functional” over “luxury”.</li>
 </ul>
 </Card>
 <Card className="p-6">
 <p className="text-xs font-medium text-slate-500">Skip it if</p>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>You need spontaneous, zero-plan travel.</li>
 <li>You hate cold-weather problem-solving.</li>
 <li>You have a tight schedule with no flex days.</li>
 </ul>
 </Card>
 </div>
 </section>

 {/* Winter-ready */}
 <section>
 <Anchor id="winter-ready" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 What “winter-ready” actually means
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Ignore marketing labels. Verify systems. In winter, one weak link becomes the entire trip.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">
 Minimum winter-ready checklist
 </h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 {winterReady.map((x) => (<li key={x}>{x}</li>))}
 </ul>
 </Card>

 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">
 What to confirm in writing
 </h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Heating type and how it’s used overnight.</li>
 <li>What’s included (power cables, shovel, scraper, etc.).</li>
 <li>How freezing protection works for water systems.</li>
 <li>Roadside assistance details and limits.</li>
 </ul>
 </Card>
 </div>
 </section>

 {/* Price */}
 <section>
 <Anchor id="price" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Price reality for Winter 2026
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 A realistic planning band for winter-capable campers sits around{" "}
 <strong>€110–180 per night</strong>, depending on vehicle, timing, and pickup location.
 Heating and power access are not optional “nice-to-haves”.
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
 {priceRows.map((r) => (<tr key={r.item} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-medium text-slate-900">{r.item}</td>
 <td className="px-4 py-3 text-slate-700">{r.value}</td>
 </tr>))}
 </tbody>
 </table>
 </div>

 <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h3 className="text-base font-semibold text-slate-900">Planning rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 If a provider is vague about winter capability, treat it as a “no”. Winter punishes assumptions quietly.
 </p>
 </div>
 </section>

 {/* Pickup */}
 <section>
 <Anchor id="pickup" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Helsinki pickup reality
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Pickups usually happen in the wider Helsinki area, not the city centre. Treat day one as a systems
 test: heating, power, controls, and how the vehicle behaves. Drive only a short distance first.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Day-one checklist</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Run heating for a real stretch, not 2 minutes.</li>
 <li>Confirm the power setup (what you need at campsites).</li>
 <li>Check tyres and basic visibility kit.</li>
 <li>Learn controls while help is still close.</li>
 </ul>
 </Card>

 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">The point</h3>
 <p className="mt-2 text-sm text-slate-700">
 Discover problems near Helsinki, not 300 km north. Fixing issues early saves money, time, and stress.
 </p>
 </Card>
 </div>
 </section>

 {/* 4x4 */}
 <section>
 <Anchor id="4x4" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Do you need 4x4?
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Not strictly for main routes, but it adds margin in bad conditions. Most accidents and failures come
 from speed, fatigue, and bad timing, not drivetrain. Your best upgrade is calm planning.
 </p>
 </section>

 {/* Systems */}
 <section>
 <Anchor id="systems" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Water, power, and freezing
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Decide early how dependent you want to be on onboard plumbing. Power hookups reduce stress massively.
 If you rely on water systems, you also rely on temperatures staying friendly. Winter doesn’t care.
 </p>

 <div className="mt-6 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Low-stress approach</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Prioritize power hookups when possible.</li>
 <li>Keep driving days shorter than your ego wants.</li>
 <li>Don’t stack tight schedules in darkness.</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Simple rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 If you’re unsure: prioritize warmth + power access over “freedom parking”. Comfort keeps the trip alive.
 </p>
 </Card>
 </div>
 </section>

 {/* Sleep */}
 <section>
 <Anchor id="sleep" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Where you sleep in winter
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Winter overnighting is about legality, access, and not blocking snow clearance. Freedom exists, but
 it’s narrower than in summer. Pick places that remain viable when conditions change.
 </p>
 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Most realistic options</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Winter-open campsites with power and facilities</li>
 <li>Designated overnight parking near towns/resorts</li>
 <li>Private stops with permission</li>
 </ul>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Avoid creating enemies</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Never block snow clearance routes</li>
 <li>Respect signage and private property</li>
 <li>Choose safety over “perfect photos”</li>
 </ul>
 </Card>
 </div>
 </section>

 {/* Route */}
 <section>
 <Anchor id="route" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 10-day winter-friendly route logic
 </h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Short driving days. Two-night bases. Weather buffers. No hero drives. Winter rewards calm.
 </p>

 <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
 <table className="w-full text-sm">
 <thead className="text-left">
 <tr className="border-b bg-slate-50">
 <th className="px-4 py-3 font-semibold text-slate-900">Day</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Base</th>
 <th className="px-4 py-3 font-semibold text-slate-900">Route logic</th>
 </tr>
 </thead>
 <tbody>
 {itinerary.map((r) => (<tr key={r.day} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-semibold text-slate-900">{r.day}</td>
 <td className="px-4 py-3 font-medium text-slate-900">{r.base}</td>
 <td className="px-4 py-3 text-slate-700">{r.note}</td>
 </tr>))}
 </tbody>
 </table>
 </div>

 <div className="mt-6 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">The buffer rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 Build at least one deliberate flex day so weather doesn’t delete your best experience.
 </p>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">The fatigue rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 If you plan like summer, you pay like winter. Keep days shorter than your ego wants.
 </p>
 </Card>
 </div>
 </section>

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
 </section>

 {/* Conclusion */}
 <section>
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 Conclusion
 </h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Winter camper travel in Finland isn’t about bravery. It’s about preparation. Do it right and the
 Arctic feels vast, quiet, and deeply personal. Do it casually and you’ll spend money fixing avoidable
 problems.
 </p>

 <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <p className="text-sm text-slate-700">
 <strong>Internal links:</strong>{" "}
 <Link className="font-semibold hover:underline" href="/camper-rental-finland">
 Camper rental Finland
 </Link>{" "}
 ·{" "}
 <Link className="font-semibold hover:underline" href="/offer-checklist">
 Offer checklist
 </Link>{" "}
 ·{" "}
 <Link className="font-semibold hover:underline" href="/lapland-tours">
 Lapland tours
 </Link>
 </p>
 <p className="mt-3 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </p>
 </div>
 </section>
 </div>

 {/* Bottom CTA */}
 <div className="mt-10">
 <Card className="p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want fewer surprises and cleaner booking decisions?
 </h3>
 <p className="mt-2 max-w-3xl text-sm text-slate-700">
 Use the booking pages and verify the trip-critical details before paying. Winter doesn’t do refunds.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/camper-rental-finland" variant="primary">
 Camper rental overview →
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline">
 Open offer checklist →
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
 </article>

 {/* SIDEBAR */}
 <aside className="h-fit space-y-4 lg:sticky lg:top-24">
 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
 <div className="mt-3 space-y-2 text-sm text-slate-700">
 <p>
 <span className="font-semibold">Best for:</span> independent travellers who plan
 </p>
 <p>
 <span className="font-semibold">Avoid if:</span> you hate buffers and cold logistics
 </p>
 <p>
 <span className="font-semibold">Planning style:</span> two-night bases + short days
 </p>
 <p>
 <span className="font-semibold">Last verified:</span> {lastVerified}
 </p>
 </div>
 </Card>

 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">Start here if booking</h2>
 <p className="mt-2 text-sm text-slate-700">
 Use these pages to avoid the classic “everything looked fine online” moment.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/camper-rental-finland" variant="primary" className="w-full">
 Camper rental overview →
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline" className="w-full">
 Offer checklist →
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Credibility note</p>
 <p className="mt-2 text-sm text-slate-700">
 When a detail can change, we treat it as a decision point, not a promise.
 </p>
 <div className="mt-4 text-sm">
 <Link href="/policy" className="font-semibold text-slate-700 hover:underline">
 Policy →
 </Link>
 <span className="mx-2 text-slate-300">•</span>
 <Link href="/get-help" className="font-semibold text-slate-700 hover:underline">
 Get help →
 </Link>
 </div>
 </Card>

 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">On this page</h2>
 <div className="mt-3 grid gap-2 text-sm text-slate-700">
 <a className="hover:underline" href="#who">Who this is for</a>
 <a className="hover:underline" href="#winter-ready">Winter-ready checklist</a>
 <a className="hover:underline" href="#price">Price reality</a>
 <a className="hover:underline" href="#pickup">Helsinki pickup</a>
 <a className="hover:underline" href="#4x4">4x4 question</a>
 <a className="hover:underline" href="#systems">Systems in cold</a>
 <a className="hover:underline" href="#sleep">Overnight options</a>
 <a className="hover:underline" href="#route">10-day route</a>
 <a className="hover:underline" href="#faq">FAQ</a>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

