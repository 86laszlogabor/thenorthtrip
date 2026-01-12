import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Camper Rental Finland Winter 2026: Helsinkiâ€“Lapland Self-Drive Guide",
 description:
 "Winter campervan Finland 2026, explained properly: Helsinki pick-up reality, winter systems, pricing drivers, a 10-day Lapland route logic, and decision-first planning that survives real conditions.",
 openGraph: {
 title: "Camper Rental Finland Winter 2026: Helsinkiâ€“Lapland Self-Drive Guide",
 description:
 "Helsinki pick-up reality, winter systems, pricing drivers, and calm route logic for Lapland self-drive in winter.",
 images: ["/images/og/og-camper-winter.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Camper Rental Finland Winter 2026: Helsinkiâ€“Lapland Self-Drive Guide",
 description:
 "Helsinki pick-up reality, winter systems, pricing drivers, and calm route logic for Lapland self-drive in winter.",
 images: ["/images/og/og-camper-winter.jpg"],
 },
};

const lastVerified = "2026-01-04";

const quickChecks = [
 {
 title: "Winter-ready is a system",
 body: "Heating + insulation + tyres + a power plan. One weak link becomes the whole trip.",
 },
 {
 title: "Short driving days win",
 body: "Winter multiplies fatigue. Build calm routes, not hero drives.",
 },
 {
 title: "Start with a test day",
 body: "Pickup day should be a systems check, not a 6-hour sprint north.",
 },
 {
 title: "Water systems need a plan",
 body: "Decide early how dependent you want to be on onboard water when temperatures drop.",
 },
];

const winterReady = [
 "Reliable heating that protects living space and systems",
 "Proper winter tyres (confirm what youâ€™re getting, not just â€œwinter-readyâ€ wording)",
 "Insulation + thermal covers (cab + windows matter)",
 "Basic winter equipment (visibility, snow tools, emergency basics)",
 "A realistic power plan (hookups vs off-grid, and what drains the battery fastest)",
];

const priceRows = [
 {
 item: "What drives the price",
 value: "Season timing, vehicle size, winter package level, and availability",
 },
 {
 item: "What often costs extra",
 value: "Insurance upgrades, bedding/linen, power hookup access, one-way fees, cleaning",
 },
 {
 item: "Low-stress tactic",
 value: "Book the vehicle early if dates are fixed, then stay flexible on route details",
 },
];

const itinerary = [
 {
 day: "1",
 base: "Helsinki area",
 note: "Pickup + systems test. Short first leg. Fix issues while options exist.",
 },
 {
 day: "2",
 base: "Transit north",
 note: "Keep it modest. Treat this as a travel day, not a sightseeing marathon.",
 },
 {
 day: "3â€“4",
 base: "Rovaniemi",
 note: "Two-night base. Build buffers. Avoid stacking tight time windows.",
 },
 {
 day: "5â€“6",
 base: "Levi / YllÃ¤s area",
 note: "Another two-night base. Match activities to daylight + energy.",
 },
 {
 day: "7â€“8",
 base: "Inari / SaariselkÃ¤",
 note: "Remote feel, fewer fallbacks. Plan slack and confirm meeting points.",
 },
 {
 day: "9",
 base: "Return leg",
 note: "Avoid last-day hero drives. Keep the return boring and reliable.",
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
 a: "Not strictly on main routes, but it can add margin in bad conditions. Most failures come from speed, fatigue, and timing, not drivetrain.",
 },
 {
 q: "Is winter camper travel actually comfortable?",
 a: "Yes, if heating and your power plan are real. No, if you discover system limits at -15Â°C and call it â€œbad luck.â€",
 },
 {
 q: "Can you wild-camp in winter like in summer?",
 a: "Freedom exists, but itâ€™s narrower. Think legality, access, snow clearance, and not blocking anyoneâ€™s day. Prefer stops that stay viable when weather shifts.",
 },
 {
 q: "Whatâ€™s the #1 mistake on pickup day?",
 a: "Driving too far immediately. Use day one to test heating, power, and how the vehicle behaves. Fixing problems near Helsinki is easier than in the north.",
 },
 {
 q: "Whatâ€™s the simplest way to reduce risk?",
 a: "Two-night bases + short driving days + one deliberate buffer day. Winter rewards calm planning.",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-24" />;
}

function InfoRow({
 label,
 value,
}: {
 label: string;
 value: string;
}) {
 return (<div className="flex items-start justify-between gap-4 text-sm">
 <span className="text-slate-600">{label}</span>
 <span className="text-slate-900 font-medium text-right">{value}</span>
 </div>);
}

function Callout({
 title,
 body,
}: {
 title: string;
 body: string;
}) {
 return (<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h3 className="text-base font-semibold text-slate-900">{title}</h3>
 <p className="mt-2 text-sm text-slate-700">{body}</p>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Winter campervan Finland 2026: Lapland self-drive, done properly."
 subtitle="A practical guide to winter systems, pricing drivers, and a calm route logic that survives real conditions."
 imageSrc="/images/og/og-camper-winter.jpg"
 primaryCta={{ href: "/camper-rental-finland", label: "Camper rental in Finland" }}
 secondaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 />

 <div className="relative">
 {/* background texture (no extra assets) */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
 <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/70 to-transparent" />
 </div>

 <Section>
 <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <article className="max-w-none">
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Practical guide Â· winter-first planning
 </div>

 <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
 Winter camper rental Finland 2026: Lapland self-drive guide
 </h1>

 <p className="mt-3 max-w-3xl text-base text-slate-700 md:text-lg">
 Winter camper travel in Finland can be incredible, but only when the â€œboringâ€ parts are handled:
 heat, power, tyres, and buffers. Plan like summer and winter turns your schedule into repairs and
 missed experiences.
 </p>

 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {quickChecks.map((c) => (<Card key={c.title} className="p-6">
 <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
 <p className="mt-2 text-sm text-slate-700">{c.body}</p>
 </Card>))}
 </div>

 <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold text-slate-900">In this guide</h2>
 <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
 <Link className="hover:underline" href="#who">Who this is for</Link>
 <Link className="hover:underline" href="#winter-ready">What â€œwinter-readyâ€ means</Link>
 <Link className="hover:underline" href="#price">Price reality</Link>
 <Link className="hover:underline" href="#pickup">Helsinki pick-up reality</Link>
 <Link className="hover:underline" href="#4x4">Do you need 4x4?</Link>
 <Link className="hover:underline" href="#systems">Water, power, freezing</Link>
 <Link className="hover:underline" href="#sleep">Where you sleep in winter</Link>
 <Link className="hover:underline" href="#route">10-day route logic</Link>
 <Link className="hover:underline" href="#faq">FAQ</Link>
 </div>
 </div>

 <div className="mt-10 space-y-12">
 <section>
 <Anchor id="who" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Who this is for</h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 This is for travellers who want independence and can plan responsibly: short days, verification,
 and buffers. If your plan is â€œweâ€™ll figure it out,â€ winter will decide the details for you.
 </p>
 </section>

 <section>
 <Anchor id="winter-ready" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
 What â€œwinter-readyâ€ actually means
 </h2>

 <div className="mt-4 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Minimum winter-ready checklist</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 {winterReady.map((x) => (<li key={x}>{x}</li>))}
 </ul>
 </Card>

 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Reality check</h3>
 <p className="mt-2 text-sm text-slate-700">
 Comfort in winter is mostly about consistency: heat that holds overnight, power that doesnâ€™t
 collapse, and tyres that match the roads youâ€™re actually driving.
 </p>
 <div className="mt-4 space-y-2">
 <InfoRow label="Risk reducer" value="Power hookups + short days" />
 <InfoRow label="Common failure" value="Weak power plan + long drives" />
 <InfoRow label="Best habit" value="Verify, then drive" />
 </div>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="price" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Price reality</h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 In winter, comparing offers by day-rate alone is how people get surprised. Compare whatâ€™s included,
 whatâ€™s optional, and what â€œwinter-readyâ€ actually means in writing.
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

 <div className="mt-6 grid gap-4 md:grid-cols-2">
 <Callout
 title="Decision rule"
 body="If the provider is vague about winter suitability, assume youâ€™ll be the one paying for the consequences."
 />
 <Callout
 title="Low-stress planning"
 body="Lock the vehicle early if dates are fixed. Keep the route flexible until weather and daylight feel real on the ground."
 />
 </div>
 </section>

 <section>
 <Anchor id="pickup" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Helsinki pick-up reality</h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 â€œHelsinki pick-upâ€ often means the wider Helsinki area, not downtown. Treat day one as a systems test:
 run heating properly, confirm power setup, learn controls, then drive a short first leg.
 </p>

 <div className="mt-5 grid gap-4 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Day-one checklist</h3>
 <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
 <li>Run heating for a real stretch, not two minutes.</li>
 <li>Confirm power hookup requirements and whatâ€™s included.</li>
 <li>Check tyres + visibility basics (scraper/brush/etc.).</li>
 <li>Learn controls while youâ€™re still near help.</li>
 </ul>
 </Card>

 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">Day-one rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 Find problems near Helsinki, not 300 km north. A calm test day beats a stressful â€œweâ€™ll be fineâ€
 sprint every time.
 </p>
 <div className="mt-4 flex flex-wrap gap-2 text-xs">
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Heat test</span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Power</span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Tyres</span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">Controls</span>
 </div>
 </Card>
 </div>
 </section>

 <section>
 <Anchor id="4x4" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Do you need 4x4?</h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Not strictly for main routes, but it adds margin in bad conditions. Most real failures come from speed,
 fatigue, and timing. Calm planning is still the best upgrade.
 </p>
 </section>

 <section>
 <Anchor id="systems" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Water, power, and freezing</h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Decide up front how dependent you want to be on onboard plumbing. Power access reduces stress massively.
 If you rely on water systems, you also rely on temperatures staying friendly. They wonâ€™t.
 </p>

 <Callout
 title="Practical rule"
 body="If youâ€™re unsure: prioritize warmth + power access over â€˜perfect freedom parkingâ€™. Comfort keeps the trip alive."
 />
 </section>

 <section>
 <Anchor id="sleep" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Where you sleep in winter</h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Winter overnighting is about legality, access, and not blocking snow clearance. Pick stops that stay
 viable when weather changes. Safety beats aesthetics.
 </p>
 </section>

 <section>
 <Anchor id="route" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">10-day winter-friendly route logic</h2>

 <p className="mt-3 max-w-3xl text-slate-700">
 Short driving days. Two-night bases. Weather buffers. No hero drives.
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
 Add at least one deliberate flex day so weather doesnâ€™t delete your best experience.
 </p>
 </Card>
 <Card className="p-6">
 <h3 className="text-base font-semibold text-slate-900">The fatigue rule</h3>
 <p className="mt-2 text-sm text-slate-700">
 Winter drains you faster than you expect. Keep days shorter than your ego wants.
 </p>
 </Card>
 </div>

 <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h3 className="text-base font-semibold text-slate-900">Related planning pages</h3>
 <p className="mt-2 text-sm text-slate-700">
 If youâ€™re pairing camper travel with tours, keep sequencing clean. Lock the fragile parts first.
 </p>
 <div className="mt-4 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/camper-rental-finland" variant="primary">
 Camper rental overview â†’
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours â†’
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline">
 Offer checklist â†’
 </CtaButton>
 </div>
 </div>
 </section>

 <section>
 <Anchor id="faq" />
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
 <div className="mt-5 grid gap-4">
 {faqs.map((f) => (<Card key={f.q} className="p-6">
 <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
 <p className="mt-2 text-sm text-slate-700">{f.a}</p>
 </Card>))}
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Conclusion</h2>
 <p className="mt-3 max-w-3xl text-slate-700">
 Winter camper travel isnâ€™t about toughness. Itâ€™s about preparation. Do it right and Lapland feels quiet,
 vast, and personal. Do it casually and youâ€™ll spend money fixing avoidable problems.
 </p>

 <div className="mt-6 text-sm text-slate-700">
 <strong>Internal links:</strong>{" "}
 <Link href="/camper-rental-finland" className="font-semibold hover:underline">
 Camper rental Finland
 </Link>{" "}
 Â·{" "}
 <Link href="/offer-checklist" className="font-semibold hover:underline">
 Offer checklist
 </Link>{" "}
 Â·{" "}
 <Link href="/getting-around-finland" className="font-semibold hover:underline">
 Getting around Finland
 </Link>
 </div>

 <p className="mt-4 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </p>
 </section>
 </div>
 </article>

 {/* SIDEBAR */}
 <aside className="h-fit space-y-4 lg:sticky lg:top-24">
 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
 <div className="mt-3 space-y-2 text-sm text-slate-700">
 <p><span className="font-semibold">Best for:</span> independent travellers who plan</p>
 <p><span className="font-semibold">Avoid if:</span> you hate buffers and cold logistics</p>
 <p><span className="font-semibold">Planning style:</span> two-night bases + short days</p>
 <p><span className="font-semibold">Last verified:</span> {lastVerified}</p>
 </div>
 </Card>

 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">Start here if booking</h2>
 <p className="mt-2 text-sm text-slate-700">
 Use these pages to avoid the classic â€œeverything looked fine onlineâ€ moment.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/camper-rental-finland" variant="primary" className="w-full">
 Camper rental overview â†’
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline" className="w-full">
 Offer checklist â†’
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-xs font-medium text-slate-600">Credibility note</p>
 <p className="mt-2 text-sm text-slate-700">
 If a detail can change, treat it as a decision point and verify before paying.
 </p>
 <div className="mt-4 text-sm">
 <Link href="/policy" className="font-semibold text-slate-700 hover:underline">
 Policy â†’
 </Link>
 <span className="mx-2 text-slate-300">â€¢</span>
 <Link href="/get-help" className="font-semibold text-slate-700 hover:underline">
 Get help â†’
 </Link>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

