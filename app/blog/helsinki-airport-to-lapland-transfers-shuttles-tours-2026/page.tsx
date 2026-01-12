import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Helsinki Airport to Lapland 2026: Transfers, Shuttles & Tours",
 description:
 "How to get from Helsinki Airport to Lapland in 2026: connecting flights, night trains, tour packages with transfers, and Lapland arrival shuttles that hold up in winter.",
 openGraph: {
 title: "Helsinki Airport to Lapland 2026: Transfers, Shuttles & Tours",
 description:
 "Flights, trains, shuttles and private transfers that actually work in winter, plus the mistakes that waste a day.",
 images: ["/images/og/og-hel-airport-to-lapland-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Helsinki Airport to Lapland 2026: Transfers, Shuttles & Tours",
 description:
 "Flights, trains, shuttles and private transfers that actually work in winter, plus the mistakes that waste a day.",
 images: ["/images/og/og-hel-airport-to-lapland-2026.jpg"],
 },
};

const lastVerified = "2026-01-04";

const quickCards = [
 {
 title: "Fastest option",
 body: "Connecting flights north. Efficient and clean for short trips.",
 image: "/images/blog/transfers/hel-airport-connection.jpg",
 },
 {
 title: "Most balanced option",
 body: "Train + sleep. One extra step, but a functional arrival day in winter.",
 image: "/images/blog/transfers/night-train-cabin.jpg",
 },
 {
 title: "Lowest-friction outcome",
 body: "Packages with transfers included. You buy an outcome, not a route.",
 image: "/images/blog/transfers/lapland-tour-bus.jpg",
 },
 {
 title: "Most common mistake",
 body: "Improvising the last 10 km after planning the long journey perfectly.",
 image: "/images/blog/transfers/arrival-last-mile.jpg",
 },
];

const toc = [
 { id: "reality-check", label: "First reality check" },
 { id: "four-categories", label: "The four transfer categories" },
 { id: "decision-table", label: "Decision table (fast pick)" },
 { id: "option-fly", label: "Option 1: Flying north" },
 { id: "option-train", label: "Option 2: Train connections" },
 { id: "option-tour", label: "Option 3: Transfers included" },
 { id: "option-drive", label: "Option 4: Self-drive (staged)" },
 { id: "arrival", label: "Arrival in Lapland (last-mile)" },
 { id: "mistake", label: "Biggest winter mistake" },
 { id: "conclusion", label: "Conclusion" },
];

const decisionRows = [
 {
 option: "Connecting flight",
 time: "Fastest",
 friction: "Low–medium",
 bestFor: "3–5 day trips, families, fixed tour schedules",
 risk: "Baggage rules + last-mile timing",
 },
 {
 option: "Night train (via Helsinki city)",
 time: "Overnight (sleep while moving)",
 friction: "Medium",
 bestFor: "6–10 day trips, comfort-first winter planning",
 risk: "Cabins sell out, needs a city transfer step",
 },
 {
 option: "Tour package (transfers included)",
 time: "End-to-end outcome",
 friction: "Lowest",
 bestFor: "First-timers, limited planning time, fixed dates",
 risk: "Low flexibility, you’re locked into the schedule",
 },
 {
 option: "Self-drive from HEL",
 time: "Longest",
 friction: "High",
 bestFor: "Freedom + detours (only with staging)",
 risk: "Fatigue + darkness + distance (especially day-of-arrival)",
 },
];

const arrivalRows = [
 {
 method: "Shared shuttle / pre-booked minibus",
 outcome: "Structured, predictable",
 tradeoff: "Waiting window + multiple stops",
 },
 {
 method: "Public bus (seasonal / timetable-based)",
 outcome: "Budget-friendly when it lines up",
 tradeoff: "Unforgiving if it doesn’t match your arrival",
 },
 {
 method: "Private transfer",
 outcome: "Boring in the best way (low stress)",
 tradeoff: "Costs more, especially for solo travellers",
 },
 {
 method: "Taxi",
 outcome: "Works, but not always the cleanest plan",
 tradeoff: "Availability/pricing can vary; pre-book if late",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
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
 tone === "warning"? "border-amber-200/70 bg-amber-50/70": "border-slate-200/70 bg-slate-50/70";
 const dot = tone === "warning"? "bg-amber-500": "bg-emerald-500";
 const glow =
 tone === "warning"? "shadow-[0_0_0_1px_rgba(245,158,11,0.08),0_10px_30px_-18px_rgba(245,158,11,0.35)]": "shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_10px_30px_-18px_rgba(15,23,42,0.18)]";

 return (<div className={`not-prose mt-7 rounded-2xl border px-4 py-3 backdrop-blur ${box} ${glow}`}>
 <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
 <span className={`h-2 w-2 rounded-full ${dot}`} />
 {label}
 </div>
 <p className="mt-2 text-sm leading-7 text-slate-800">{text}</p>
 </div>);
}

function DataTable({
 caption,
 columns,
 rows,
}: {
 caption: string;
 columns: { key: string; label: string; width?: string }[];
 rows: Record<string, string>[];
}) {
 return (<div className="not-prose mt-7">
 <div className="mb-2 flex items-center justify-between gap-3">
 <div className="text-sm font-semibold text-slate-900">{caption}</div>
 <div className="hidden text-xs text-slate-500 md:block">Scroll horizontally if needed</div>
 </div>

 <div className="overflow-x-auto rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
 <table className="w-full min-w-[820px] text-sm">
 <thead className="text-left">
 <tr className="border-b border-slate-200/70 bg-slate-50/70">
 {columns.map((c) => (<th
 key={c.key}
 className={`px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 ${
 c.width? c.width: ""
 }`}
 >
 {c.label}
 </th>))}
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-200/70">
 {rows.map((r, idx) => (<tr key={idx} className="bg-white/70 hover:bg-slate-50/60">
 {columns.map((c) => (<td key={c.key} className="px-4 py-3 align-top leading-7 text-slate-700">
 {r[c.key]}
 </td>))}
 </tr>))}
 </tbody>
 </table>
 </div>
 </div>);
}

export default function Page() {
 return (<div className="bg-white">
 <PageHero
 title="Helsinki Airport to Lapland"
 subtitle="Transfers, shuttles and routes that work in winter."
 imageSrc="/images/og/og-hel-airport-to-lapland-2026.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 secondaryCta={{ href: "/lapland-tours", label: "Lapland tours" }}
 />

 <div className="relative">
 {/* background texture + soft decor */}
 <div className="pointer-events-none absolute inset-0 -z-10">
 <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
 <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:22px_22px]" />
 <div className="absolute left-0 top-0 h-[260px] w-full bg-gradient-to-b from-slate-50/70 to-transparent" />
 <div className="absolute right-0 top-16 hidden h-[560px] w-[520px] opacity-[0.16] lg:block">
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
 <span className="font-medium text-slate-900">Blog</span>{" "}
 <span className="text-slate-300">·</span>{" "}
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
 </div>
 </Section>

 <Section>
 <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div>
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Winter transfer decisions that hold up
 </div>

 {/* in-page image */}
 <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-100 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)]">
 <div className="relative aspect-[16/9] w-full">
 <Image
 src="/images/blog/transfers/helsinki-airport-winter-hero.jpg"
 alt="Helsinki Airport in winter with travel connections toward Lapland"
 fill
 className="object-cover"
 sizes="(min-width: 1024px) 720px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
 </div>
 </div>

 {/* quick cards */}
 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {quickCards.map((c) => (<Card key={c.title} className="group overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={c.image}
 alt={c.title}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
 sizes="(min-width: 768px) 520px, 100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <h2 className="text-base font-semibold tracking-tight text-slate-900">
 {c.title}
 </h2>
 <p className="mt-2 text-sm leading-7 text-slate-700">{c.body}</p>
 </div>
 </Card>))}
 </div>

 {/* CONTENT */}
 <div className="mt-8 rounded-3xl border border-slate-200/70 bg-white/75 shadow-[0_1px_0_rgba(15,23,42,0.05),0_40px_90px_-70px_rgba(15,23,42,0.45)] backdrop-blur">
 <article
 className="
 prose prose-slate max-w-none px-6 py-10 md:px-10 md:py-12
 prose-headings:tracking-tight
 prose-h2:mt-12 prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold
 prose-h3:text-xl
 prose-p:leading-8
 prose-a:text-slate-900 prose-a:font-semibold prose-a:underline prose-a:underline-offset-4 prose-a:decoration-slate-300 hover:prose-a:decoration-slate-900
 prose-strong:text-slate-900
 prose-ul:my-6 prose-ul:space-y-2
 prose-li:leading-8
 prose-hr:my-10 prose-hr:border-slate-200
 "
 >
 <p>
 Helsinki Airport is where Finland stops being poetic and starts being practical. You land, winter hits
 you in the face, and one question matters:
 </p>
 <p>
 <strong>How do I get from the airport to Lapland without wasting a day?</strong>
 </p>
 <p>
 This guide covers flights, trains, tour-based solutions, and Lapland arrival transfers that actually
 hold up in winter.
 </p>

 <hr />

 <Anchor id="reality-check" />
 <h2>First reality check</h2>
 <p>
 Helsinki Airport is not Lapland. Lapland starts hundreds of kilometres north. A “direct transfer” on
 arrival day usually means a misunderstanding that costs time and energy.
 </p>
 <p>When people search “HEL airport Lapland transfer”, they usually mean one of four things:</p>
 <ul>
 <li>a connecting flight north</li>
 <li>a train connection (often overnight)</li>
 <li>a tour package with transfers included</li>
 <li>an overly optimistic road plan</li>
 </ul>

 <MicroCallout
 tone="warning"
 label="Winter rule"
 text="If your plan requires improvisation at arrival, it will fail at the worst possible time."
 />

 <hr />

 <Anchor id="four-categories" />
 <h2>The four real transfer categories</h2>
 <p>Every airport-to-Lapland movement fits one of these:</p>
 <ul>
 <li>fly north from Helsinki Airport</li>
 <li>train north after an airport → city transfer</li>
 <li>join a Lapland tour with transfers included</li>
 <li>self-drive (only with staging)</li>
 </ul>

 <Anchor id="decision-table" />
 <DataTable
 caption="Decision table (pick your default in 60 seconds)"
 columns={[
 { key: "option", label: "Option", width: "w-[190px]" },
 { key: "time", label: "Time outcome", width: "w-[180px]" },
 { key: "friction", label: "Friction", width: "w-[130px]" },
 { key: "bestFor", label: "Best for" },
 { key: "risk", label: "Main risk" },
 ]}
 rows={decisionRows as unknown as Record<string, string>[]}
 />

 <hr />

 <Anchor id="option-fly" />
 <h2>Option 1: Flying north (fastest and cleanest)</h2>
 <p>
 For most travellers, the simplest HEL airport → Lapland route is another flight. You land, connect,
 and arrive north quickly.
 </p>
 <p>
 Best for short trips and fixed tour schedules. Less ideal if you have heavy winter luggage and you
 hate paying for it twice.
 </p>

 <hr />

 <Anchor id="option-train" />
 <h2>Option 2: Train connections (sleep your way north)</h2>
 <p>
 Trains are Finland’s quiet superpower. You don’t board Lapland trains at the airport: you first
 transfer into the city, then continue north.
 </p>
 <p>
 It adds a step, but it buys sleep and a functional arrival day, which in winter often matters more
 than shaving hours.
 </p>

 <hr />

 <Anchor id="option-tour" />
 <h2>Option 3: Lapland tours with transfers included</h2>
 <p>
 Many Lapland packages bundle transport, Lapland transfers, accommodation and activities. In these
 cases, you’re buying an outcome: “arrive and start”.
 </p>
 <p>Best for first-timers and limited-time trips. Worst for travellers who want flexibility.</p>

 <hr />

 <Anchor id="option-drive" />
 <h2>Option 4: Self-drive from HEL (technically possible, often a mistake)</h2>
 <p>
 Yes, you can rent a car at Helsinki Airport and drive north. Doing it immediately after landing is how
 people discover fatigue, darkness and distance all at once.
 </p>
 <p>The correct strategy is staging: sleep first, then drive in planned segments.</p>
 <p className="not-prose mt-5 text-sm text-slate-700">
 If this is your route, use:{" "}
 <Link href="/car-rental-helsinki" className="font-semibold hover:underline underline-offset-4">
 Car rental Helsinki
 </Link>.
 </p>

 <hr />

 <Anchor id="arrival" />
 <h2>Arrival in Lapland: the second transfer problem</h2>
 <p>
 Getting to Lapland is only half the job. You still need to reach your accommodation. In winter, the
 “last mile” is where time disappears.
 </p>

 <DataTable
 caption="Lapland arrival transfer options (last-mile)"
 columns={[
 { key: "method", label: "Arrival method", width: "w-[280px]" },
 { key: "outcome", label: "Best outcome", width: "w-[260px]" },
 { key: "tradeoff", label: "Tradeoff" },
 ]}
 rows={arrivalRows as unknown as Record<string, string>[]}
 />

 <MicroCallout
 label="Practical advice"
 text="Pre-book your Lapland arrival transfer whenever timing matters (late arrivals, families, first activity next day)."
 />

 <hr />

 <Anchor id="mistake" />
 <h2>Biggest winter transfer mistake</h2>
 <p>
 People plan the long journey meticulously and then improvise the last 10 km. Always plan your Lapland
 arrival transfer. Treat it like a booking, not a vibe.
 </p>

 <hr />

 <Anchor id="conclusion" />
 <h2>Conclusion</h2>
 <p>
 Helsinki Airport → Lapland transfers aren’t complicated. They’re structured. Choose deliberately: fast
 when time matters, shared when structure matters, private when comfort matters.
 </p>

 <div className="not-prose mt-8 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5">
 <p className="text-sm text-slate-700">
 <strong className="text-slate-900">Internal links:</strong>{" "}
 <Link href="/getting-around-finland" className="font-semibold hover:underline underline-offset-4">
 Getting around Finland
 </Link>{" "}
 <span className="mx-2 text-slate-300">·</span>
 <Link href="/lapland-tours" className="font-semibold hover:underline underline-offset-4">
 Lapland tours
 </Link>{" "}
 <span className="mx-2 text-slate-300">·</span>
 <Link href="/offer-checklist" className="font-semibold hover:underline underline-offset-4">
 Offer checklist
 </Link>
 </p>
 <p className="mt-2 text-sm text-slate-600">
 <strong className="text-slate-900">Last verified:</strong> {lastVerified}
 </p>
 </div>
 </article>
 </div>

 {/* Bottom CTA */}
 <Card className="mt-8 p-6 md:p-8">
 <h3 className="text-xl font-semibold tracking-tight text-slate-900">
 Want the lowest-friction route for your dates?
 </h3>
 <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">
 Align arrival times with your first activity day, and treat the last-mile transfer as a booking, not a guess.
 </p>

 <div className="mt-6 flex flex-col gap-3 sm:flex-row">
 <CtaButton href="/offer-checklist" variant="primary">
 Open offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Getting around Finland →
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="outline">
 Lapland tours →
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

 <p className="mt-6 text-xs text-slate-500">
 <strong className="text-slate-900">Last verified:</strong> {lastVerified}
 </p>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
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

 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src="/images/blog/transfers/sidebar-lapland-airport-bus.jpg"
 alt="Arrival transfer options in Lapland in winter"
 fill
 className="object-cover"
 sizes="360px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
 Planning rule
 </p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 If a 45-minute delay would annoy you, you need a buffer. Winter will test your confidence.
 </p>
 <div className="mt-4">
 <CtaButton href="/get-help" variant="success" className="w-full">
 Get Help
 </CtaButton>
 </div>
 </div>
 </Card>

 <Card className="p-6">
 <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">Booking flow</p>
 <p className="mt-2 text-sm leading-7 text-slate-700">
 Decide the mode first, then compare options. Reverse that and you’ll pay for “surprises”.
 </p>
 <div className="mt-4 space-y-2">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full">
 Offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
 Getting around Finland →
 </CtaButton>
 </div>
 </Card>
 </aside>
 </div>
 </Section>
 </div>
 </div>);
}

