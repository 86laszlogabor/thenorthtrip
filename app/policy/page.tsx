import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata = {
 title: "Policy | TheNorthTrip",
 description:
 "Affiliate disclosure, human verification process, and clear boundaries: what we do, what we don’t promise, and what you must confirm in writing.",
 openGraph: {
 title: "Policy | TheNorthTrip",
 description:
 "Affiliate disclosure, human verification process, and clear boundaries: what we do, what we don’t promise, and what you must confirm in writing.",
 images: ["/images/og/og-policy.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Policy | TheNorthTrip",
 description:
 "Affiliate disclosure, human verification process, and clear boundaries: what we do, what we don’t promise, and what you must confirm in writing.",
 images: ["/images/og/og-policy.jpg"],
 },
};

function ChecklistLine({ children }: { children: React.ReactNode }) {
 return (<li className="flex gap-2">
 <span className="mt-[2px] text-sm" aria-hidden="true">
 ?
 </span>
 <span>{children}</span>
 </li>);
}

export default function PolicyPage() {
 return (<div className="bg-white">
 <PageHero
 variant="home"
 title="Policy: how this site works (and what we don’t promise)."
 subtitle="Affiliate disclosure, human verification process, and realistic boundaries. Decision-first, no guesswork."
 imageSrc="/images/hero/hero-policy.jpg"
 primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
 secondaryCta={{ href: "/get-help", label: "Get help" }}
 />

 <Section>
 <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
 Policy
 </h2>
 <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
 TheNorthTrip is decision-first. We focus on verification, tradeoffs, and the failure points that
 quietly break Finland trips: desk rules, timing gaps, and winter constraints.
 </p>

 {/* TRUST / METHOD CALLOUT */}
 <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
 <p className="text-sm text-brand-text/80">
 <span className="font-semibold text-slate-900">Human-verified process.</span>{" "}
 Every page goes through a structured review. It’s not “publish and hope”.
 We check primary sources where possible, we write in stable terms (rules and decision points),
 and we label pages with a <span className="font-semibold">Last verified</span> date after a review cycle.
 </p>
 <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
 <Link
 href="/offer-checklist"
 className="text-sm font-semibold text-slate-900 hover:underline"
 >
 Start with the offer checklist ?
 </Link>
 <Link
 href="/get-help"
 className="text-sm font-semibold text-slate-900 hover:underline"
 >
 Want a review of your exact plan? ?
 </Link>
 </div>
 </div>

 {/* TOP GRID */}
 <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
 {/* Affiliate */}
 <Card className="p-6">
 <h3 className="text-lg font-semibold text-slate-900">
 Affiliate disclosure
 </h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Some pages contain affiliate links. If you click and book, we may earn a commission{" "}
 <span className="font-semibold">at no extra cost to you</span>.
 This helps fund maintenance, verification cycles, and updates.
 </p>
 <p className="mt-3 text-sm text-brand-text/70">
 Affiliate links do not change the guidance. We don’t accept payment to publish claims we can’t stand behind.
 </p>
 </Card>

 {/* Verification method */}
 <Card className="p-6 bg-slate-50">
 <h3 className="text-lg font-semibold text-slate-900">
 Verification method (how we keep it stable)
 </h3>

 <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
 <ChecklistLine>
 We write around <span className="font-semibold">decision points</span> and enforceable rules, not unstable price promises.
 </ChecklistLine>
 <ChecklistLine>
 When a detail depends on a supplier (desk hours, card acceptance, after-hours handling), we clearly say:{" "}
 <span className="font-semibold">confirm in writing with the enforcing provider</span>.
 </ChecklistLine>
 <ChecklistLine>
 We use <span className="font-semibold">Last verified</span> dates to mark the latest review cycle for the page.
 </ChecklistLine>
 <ChecklistLine>
 If an aggregator summary conflicts with desk enforcement,{" "}
 <span className="font-semibold">desk rules win</span>.
 </ChecklistLine>
 </ul>
 </Card>
 </div>

 {/* BOUNDARIES */}
 <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
 <Card className="p-6">
 <h3 className="text-lg font-semibold text-slate-900">
 What we do
 </h3>
 <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
 <ChecklistLine>
 Provide practical decision trees and verification prompts you can use before paying.
 </ChecklistLine>
 <ChecklistLine>
 Highlight common failure modes: deposits, card rules, timing gaps, winter buffers.
 </ChecklistLine>
 <ChecklistLine>
 Route you to the right page based on risk, not hype.
 </ChecklistLine>
 </ul>

 <div className="mt-5 flex flex-col sm:flex-row gap-3">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full sm:w-auto">
 Open offer checklist
 </CtaButton>
 <CtaButton href="/rental-terms-prices" variant="outline" className="w-full sm:w-auto">
 Open rental terms
 </CtaButton>
 </div>
 </Card>

 <Card className="p-6 border border-slate-200">
 <h3 className="text-lg font-semibold text-slate-900">
 What we don’t promise (because it’s not under our control)
 </h3>
 <p className="mt-3 text-sm text-brand-text/70">
 Some outcomes depend on operators, weather, enforcement, and real-time availability. We won’t pretend otherwise.
 </p>

 <ul className="mt-3 space-y-2 text-sm text-brand-text/70">
 <ChecklistLine>
 We don’t guarantee auroras, wildlife sightings, or tour outcomes.
 </ChecklistLine>
 <ChecklistLine>
 We don’t promise exact prices, deposit amounts, or universal acceptance rules across all providers.
 </ChecklistLine>
 <ChecklistLine>
 We don’t recommend “workarounds” to override desk procedures.
 </ChecklistLine>
 </ul>

 <p className="mt-4 text-xs text-brand-text/60">
 The safe rule: if a detail can block pickup or boarding, confirm it in writing for your exact booking.
 </p>
 </Card>
 </div>

 {/* KEY PAGES */}
 <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h3 className="font-semibold text-slate-900">Key pages</h3>
 <p className="mt-2 text-sm text-brand-text/70">
 Start here if you want the practical, decision-first flow.
 </p>

 <div className="mt-4 flex flex-wrap gap-3">
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/offer-checklist"
 >
 Offer checklist ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/getting-around-finland"
 >
 Getting around Finland ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/rental-terms-prices"
 >
 Rental terms ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/car-rental-helsinki"
 >
 Car rental (Helsinki) ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/camper-rental-finland"
 >
 Camper rental (Finland) ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/lapland-tours"
 >
 Lapland tours ?
 </Link>
 <Link
 className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
 href="/blog"
 >
 Blog ?
 </Link>
 </div>
 </div>

 <p className="mt-6 text-xs text-brand-text/60">
 Last verified: 2026-01-09
 </p>
 </Section>
 </div>);
}

