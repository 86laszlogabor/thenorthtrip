import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
 title: "Partner: Arctic Lifestyle | TheNorthTrip",
 description:
 "Partner page for Arctic Lifestyle: how to use aggregators safely, what to verify before booking, and risk-based questions to send.",
};

const verify = [
 {
 icon: "??",
 text: "Exact meeting point and cutoff time",
 },
 {
 icon: "?",
 text: "What is included vs ‘available’",
 },
 {
 icon: "??",
 text: "Cancellation/change rules and no-show definition",
 },
 {
 icon: "??",
 text: "Transfer details (if any) and your responsibility",
 },
 {
 icon: "???",
 text: "Weather dependency and what happens if conditions cancel the activity",
 },
];

const misunderstandings = [
 "A partner page means guaranteed outcomes",
 "All activities are identical across providers",
 "Meeting points don’t matter",
 "Winter conditions don’t change feasibility",
 "You can always reschedule easily",
 "If you arrive late they’ll wait",
 "Inclusions are the same as the photos",
 "Policies are negotiable",
 "Aggregator summary overrides operator procedures",
 "A tighter schedule is always better",
];

function TopNav() {
 return (<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
 <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
 <Link href="/" className="font-semibold tracking-tight text-slate-900">
 TheNorthTrip
 </Link>
 <nav className="flex gap-4 text-sm text-slate-700">
 <Link href="/lapland-tours" className="hover:text-slate-900">
 Lapland tours 
 </Link>
 <Link href="/lapland-tours/destinations" className="hover:text-slate-900">
 Destinations
 </Link>
 <Link href="/policy" className="hover:text-slate-900">
 Policy
 </Link>
 </nav>
 </div>
 </header>);
}

export default function PartnerArcticLifestylePage() {
 return (<main className="min-h-screen bg-white text-slate-900">
 <PageHero
 title="Decision-first guide"
 subtitle="Practical tradeoffs, what to confirm, and the safest next step."
 imageSrc="/images/hero/hero-partner-arctic-lifestyle.jpg"
 />

 <TopNav />

 <section className="mx-auto max-w-6xl px-4 py-10">
 <div className="max-w-3xl">
 <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
 Partner: Arctic Lifestyle
 </h1>

 <p className="mt-3 text-slate-700">
 This page is not a promise. It’s a decision filter. Operators and aggregators are procedural:
 the only way to avoid “surprise” is verifying what’s enforced and building buffer.
 </p>

 <div className="mt-5 flex flex-wrap gap-2">
 <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
 ?? Verify first
 </span>
 <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
 ?? Buffer around cutoffs
 </span>
 <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
 ?? Get it in writing
 </span>
 </div>
 </div>

 <div className="mt-8 grid gap-4 md:grid-cols-2">
 {/* Verify box */}
 <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold">What to verify before booking</h2>
 <p className="mt-2 text-sm text-slate-600">
 These are the usual failure points when a booking meets real-world procedures.
 </p>

 <ul className="mt-4 space-y-3">
 {verify.map((x) => (<li key={x.text} className="flex gap-3 text-sm text-slate-700">
 <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
 {x.icon}
 </span>
 <span className="leading-relaxed">{x.text}</span>
 </li>))}
 </ul>

 <div className="mt-6">
 <Link
 href="/offer-checklist"
 className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 >
 Use the offer checklist
 </Link>
 </div>
 </div>

 {/* How to book safely */}
 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h2 className="text-lg font-semibold">How to book safely</h2>
 <ol className="mt-4 list-decimal pl-5 text-sm text-slate-700 space-y-2">
 <li>Decide your tolerance: do you need flexibility or lowest price?</li>
 <li>Verify the items above in writing (not just a reseller summary).</li>
 <li>Build buffer around fixed start times, transfers, and cutoffs.</li>
 <li>If one miss breaks your day, simplify the chain.</li>
 </ol>

 <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
 <p className="text-xs text-slate-600">
 Note: outcomes (weather, aurora, wildlife) are not guaranteed. Your job is to verify procedures.
 </p>
 </div>
 </div>
 </div>

 {/* Misunderstandings */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold">10 common misunderstandings</h2>
 <p className="mt-2 text-sm text-slate-600">
 These are the assumptions that usually break first.
 </p>
 <ol className="mt-4 list-decimal pl-5 text-sm text-slate-700 space-y-1">
 {misunderstandings.map((x) => (<li key={x}>{x}</li>))}
 </ol>
 </div>

 {/* Internal links */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h2 className="text-lg font-semibold">Internal links</h2>
 <div className="mt-4 flex flex-wrap gap-3 text-sm">
 <Link className="underline hover:text-slate-900" href="/lapland-tours">
 /lapland-tours
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/destinations">
 /lapland-tours/destinations
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">
 /lapland-tours/rovaniemi
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/getyourguide">
 /lapland-tours/partners/getyourguide
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/viator">
 /lapland-tours/partners/viator
 </Link>
 <Link className="underline hover:text-slate-900" href="/offer-checklist">
 /offer-checklist
 </Link>
 <Link className="underline hover:text-slate-900" href="/policy">
 /policy
 </Link>
 <Link className="underline hover:text-slate-900" href="/get-help">
 /get-help
 </Link>
 </div>
 </div>

 <p className="mt-6 text-xs text-slate-500">Last verified: 2026-01-09</p>
 </section>
 </main>);
}

