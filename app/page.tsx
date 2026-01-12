import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "TheNorthTrip | Finland travel, decision-first",
 description:
 "Decision-first Finland travel guides. Verify what breaks first. Checklists, tradeoffs, and realistic planning for Helsinki and Lapland.",
 openGraph: {
 title: "TheNorthTrip | Finland travel, decision-first",
 description:
 "Verify what breaks first. Calm, practical guides for Finland travel: car rental, Lapland tours, camper rental, transport tradeoffs.",
 images: ["/images/og/og-home.jpg"],
 },
};

const lastVerified = "2026-01-04";

const Bases = [
 {
 title: "Car rental (Helsinki)",
 href: "/car-rental-helsinki",
 note: "Deposits, card rules, winter timing.",
 icon: "car",
 dotClass: "left-[34%] top-[58%]",
 },
 {
 title: "Lapland tours",
 href: "/lapland-tours",
 note: "Season windows, operators, cancellations.",
 icon: "snow",
 dotClass: "left-[55%] top-[22%]",
 },
 {
 title: "Camper rental (Finland)",
 href: "/camper-rental-finland",
 note: "Winterization, mileage, legal overnighting.",
 icon: "camper",
 dotClass: "left-[63%] top-[56%]",
 },
 {
 title: "Getting around Finland",
 href: "/getting-around-finland",
 note: "Train vs flight vs bus tradeoffs.",
 icon: "train",
 dotClass: "left-[50%] top-[74%]",
 },
];

const quickRoutes = [
 {
 title: "Helsinki Car Rental",
 href: "/car-rental-helsinki",
 image: "/images/home/quick-car.jpg",
 blurb: "Avoid deposit surprises. Pick the right pickup logic.",
 },
 {
 title: "Lapland Tours",
 href: "/lapland-tours",
 image: "/images/home/quick-lapland.jpg",
 blurb: "Weather reality, meeting points, operator differences.",
 },
 {
 title: "Winter Campervans",
 href: "/camper-rental-finland",
 image: "/images/home/quick-camper.jpg",
 blurb: "Heat, power, overnight rules. Not vibes.",
 },
 {
 title: "Getting Around Finland",
 href: "/getting-around-finland",
 image: "/images/home/quick-transport.jpg",
 blurb: "Choose the mode that still works when plans shift.",
 },
];

const decisionCards = [
 {
 title: "Deposits and payment rules",
 body:
 "Most â€œit looked fine onlineâ€ failures are payment-related: debit vs credit, name mismatch, deposit holds, and desk discretion.",
 href: "/offer-checklist",
 cta: "Open checklist",
 },
 {
 title: "Winter changes the physics",
 body:
 "Daylight shrinks. Driving takes longer. Recovery options get fewer. If your plan needs perfect conditions, itâ€™s not a plan.",
 href: "/getting-around-finland",
 cta: "Compare transport",
 },
 {
 title: "Timing is the real price",
 body:
 "Late arrivals + last services create the ugly chain reaction. Build buffers where they actually matter: pickups, transfers, returns.",
 href: "/offer-checklist",
 cta: "Stress-test timing",
 },
 {
 title: "Rules are procedural",
 body:
 "In Finland, â€œcan you make an exception?â€ usually means â€œnoâ€. So you win by verifying inputs, not by negotiating at the desk.",
 href: "/policy",
 cta: "How we verify",
 },
];

function MapIcon({ type }: { type: string }) {
 const common = "h-5 w-5 text-slate-700";
 if (type === "car")
 return (<svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M7 16.5h10M7.5 16.5l-1.2-6.2A2 2 0 0 1 8.26 8h7.48a2 2 0 0 1 1.96 2.3l-1.2 6.2"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 />
 <path
 d="M7.2 19.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4ZM16.8 19.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
 fill="currentColor"
 />
 </svg>);
 if (type === "train")
 return (<svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M7 3h10a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Z"
 stroke="currentColor"
 strokeWidth="1.8"
 />
 <path
 d="M8 7h8M8 11h8"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 />
 <path
 d="M9.2 20.5 7.5 22M14.8 20.5 16.5 22"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 />
 </svg>);
 if (type === "camper")
 return (<svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M3 15V7a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v6H3Z"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinejoin="round"
 />
 <path
 d="M7 15a2.2 2.2 0 1 0 0 4.4A2.2 2.2 0 0 0 7 15ZM17 15a2.2 2.2 0 1 0 0 4.4A2.2 2.2 0 0 0 17 15Z"
 fill="currentColor"
 />
 <path
 d="M6.5 9h4M12 9h3"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 />
 </svg>);
 return (<svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
 <path
 d="M12 2v20M4 6l16 12M20 6 4 18"
 stroke="currentColor"
 strokeWidth="1.8"
 strokeLinecap="round"
 />
 </svg>);
}

export default function HomePage() {
 return (<main className="bg-white text-slate-900">
 {/* HERO */}
 <section className="relative overflow-hidden">
 <div className="absolute inset-0">
 <Image
 src="/images/hero/hero-aurora-snow.jpg"
 alt=""
 fill
 priority
 className="object-cover"
 sizes="100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/30 to-white/0" />
 <div className="absolute inset-0 bg-black/10" aria-hidden />
 </div>

 <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 md:pt-20 md:pb-32">
 <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
 <div className="max-w-xl">
 <p className="text-sm font-medium text-white/80">
 Finland travel, without the quiet failures.
 </p>

 <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-white">
 Verify what breaks first. Then book.
 </h1>

 <p className="mt-5 text-base md:text-lg text-white/85">
 If a trip collapses here, it rarely collapses loudly. It fails at a desk,
 a meeting point, or the last connection of the day.
 This site is for checking those failure points before you pay.
 </p>

 <div className="mt-7 flex flex-col sm:flex-row gap-3">
 <CtaButton href="/offer-checklist" variant="primary">
 Open the offer checklist
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Compare transport options
 </CtaButton>
 </div>

 <p className="mt-5 text-xs text-white/70">Last verified: {lastVerified}</p>
 </div>

 <div className="relative">
 <div className="relative mx-auto max-w-[520px]">
 <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.35)] overflow-hidden">
 <div className="relative aspect-[4/5]">
 <Image
 src="/images/decor/finland-map.png"
 alt="Map of Finland"
 fill
 className="object-contain p-8"
 sizes="(min-width: 1024px) 520px, 90vw"
 />

 {Bases.map((h) => (<span
 key={h.title}
 className={`absolute ${h.dotClass} h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.22)]`}
 aria-hidden
 />))}
 </div>

 <div className="p-5 pt-0">
 <div className="grid gap-3">
 {Bases.map((h) => (<Link
 key={h.title}
 href={h.href}
 className="group flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 text-slate-900 shadow-sm hover:bg-white transition"
 >
 <div className="mt-0.5 rounded-xl bg-slate-100 p-2">
 <MapIcon type={h.icon} />
 </div>
 <div>
 <div className="text-sm font-semibold leading-snug">{h.title}</div>
 <div className="text-xs text-slate-600">{h.note}</div>
 </div>
 </Link>))}
 </div>
 </div>
 </div>

 <p className="mt-3 text-xs text-white/70">
 Practical Bases. No â€œultimate guideâ€ fluff, only decision points.
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="relative z-10 -mt-14 md:-mt-18">
 <Section>
 <div className="mx-auto max-w-6xl">
 <div className="rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-sm p-5 md:p-6">
 <div className="flex items-end justify-between gap-4">
 <div>
 <h2 className="text-lg md:text-xl font-semibold tracking-tight">Quick routes</h2>
 <p className="mt-1 text-sm text-slate-600">
 Start with the thing youâ€™re most likely to mess up.
 </p>
 </div>
 <Link href="/blog" className="text-sm font-semibold text-slate-700 hover:underline">
 Browse blog â†’
 </Link>
 </div>

 <div className="mt-5 grid gap-4 md:grid-cols-4">
 {quickRoutes.map((r) => (<Link
 key={r.title}
 href={r.href}
 className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
 >
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src={r.image}
 alt={r.title}
 fill
 className="object-cover group-hover:scale-[1.03] transition"
 sizes="(min-width: 768px) 240px, 90vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />
 <div className="absolute bottom-3 left-3 right-3">
 <div className="text-sm font-semibold text-white">{r.title}</div>
 </div>
 </div>
 <div className="p-4">
 <p className="text-xs text-slate-600">{r.blurb}</p>
 </div>
 </Link>))}
 </div>
 </div>
 </div>
 </Section>
 </div>
 </section>

 {/* DECISIONS */}
 <section className="mt-14 md:mt-16">
 <Section>
 <div className="mx-auto max-w-6xl">
 <div className="flex items-start justify-between gap-6 flex-wrap">
 <div className="max-w-2xl">
 <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
 Decisions with consequences
 </h2>
 <p className="mt-2 text-slate-700">
 You donâ€™t need a perfect plan.
 You need to know which assumptions are brittle, and how to test them fast.
 </p>
 </div>
 <div className="text-sm text-slate-600">
 <span className="font-medium text-slate-800">Last verified:</span>{" "}
 {lastVerified}
 </div>
 </div>

 <div className="mt-6 grid gap-4 md:grid-cols-2">
 {decisionCards.map((d) => (<Card key={d.title} className="p-6">
 <h3 className="text-base font-semibold text-slate-900">{d.title}</h3>
 <p className="mt-2 text-sm text-slate-700">{d.body}</p>
 <div className="mt-4">
 <Link
 href={d.href}
 className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
 >
 {d.cta}
 </Link>
 </div>
 </Card>))}
 </div>
 </div>
 </Section>
 </section>

 {/* TRANSITION: snow image behaves like header (full-bleed, all sizes) */}
 <section className="mt-16">
 <div className="relative overflow-hidden">
 {/* keep your white -> dark transition */}
 <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-950" />

 <div className="relative mt-10">
 {/* header-like image container */}
 <div className="relative w-full overflow-hidden">
 <div className="relative h-[clamp(360px,42vw,620px)] md:h-[clamp(420px,36vw,680px)]">
 <Image
 src="/images/decor/snow-footer.jpg"
 alt=""
 fill
 priority={false}
 className="object-cover object-[50%_78%]"
 sizes="100vw"
 />

 {/* readability + cinematic blending (does NOT create sidebars) */}
 <div className="absolute inset-0 bg-gradient-to-b from-slate-950/18 via-slate-950/26 to-slate-950/55" />
 <div className="absolute inset-0 bg-black/5" aria-hidden />

 <Section>
 <div className="relative mx-auto max-w-6xl pt-14 md:pt-16">
 <div className="max-w-2xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 text-white shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
 <p className="text-xs font-semibold tracking-wide text-white/70">
 LAST VERIFIED: {lastVerified}
 </p>

 <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight">
 If you only do one thing
 </h2>

 <p className="mt-2 text-white/85">
 Run your booking through the checklist once. It takes minutes.
 It saves days.
 </p>

 <div className="mt-6 flex flex-col sm:flex-row gap-3">
 <CtaButton href="/offer-checklist" variant="primary">
 Open the checklist
 </CtaButton>
 <CtaButton href="/get-help" variant="outline">
 Get help
 </CtaButton>
 </div>

 <p className="mt-5 text-xs text-white/70">
 No promises we canâ€™t verify. No invented policy facts. Just the stuff that breaks first.
 </p>
 </div>
 </div>
 </Section>
 </div>
 </div>

 {/* keep your fade-to-footer block so footer connection stays as you liked */}
 <div className="h-16 bg-slate-950" aria-hidden />
 </div>
 </div>
 </section>
 </main>);
}



