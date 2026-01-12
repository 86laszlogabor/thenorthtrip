import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
 title: "Partner: GetYourGuide | TheNorthTrip",
 description:
 "GetYourGuide partner guidance for Lapland: what to verify, how to avoid fragile booking chains, and the questions that prevent desk-level surprises.",
};

const verify = [
 "Meeting point and cutoff time",
 "What counts as ‘included’ vs optional add-ons",
 "Cancellation/change rules and no-show definition",
 "Transfers: whether they exist and what you’re responsible for",
 "Weather dependency and cancellation handling",
];

const decision = [
 { situation: "You need flexibility", safer: "Prioritize free-cancel windows and clear change rules" },
 { situation: "You have a tight itinerary", safer: "Reduce fixed bookings; add buffer around start times" },
 { situation: "Winter travel", safer: "Assume slower pace; avoid late-day dependencies" },
 { situation: "Family travel", safer: "Shorter chains; fewer segments; earlier starts" },
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

export default function PartnerGetYourGuidePage() {
 return (<main className="min-h-screen bg-white text-slate-900">
 <PageHero
 title="Decision-first guide"
 subtitle="Practical tradeoffs, what to confirm, and the safest next step."
 imageSrc="/images/hero/hero-partner-getyourguide.jpg"
 />

 <TopNav />

 <section className="mx-auto max-w-6xl px-4 py-10">
 <div className="max-w-3xl">
 <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Partner: GetYourGuide</h1>
 <p className="mt-3 text-slate-700">
 Aggregators are useful, but procedure still wins: meeting points, cutoffs, and cancellation rules decide
 outcomes. Use this page as a risk filter before booking.
 </p>
 </div>

 <div className="mt-8 grid gap-4 md:grid-cols-2">
 <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
 <h2 className="text-lg font-semibold">Verify these items</h2>
 <p className="mt-2 text-sm text-slate-600">
 If any of these are unclear, you’re not “being careful”. You’re buying uncertainty.
 </p>

 <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-2">
 {verify.map((x) => (<li key={x}>{x}</li>))}
 </ul>

 <div className="mt-5 flex flex-wrap gap-3 text-sm">
 <Link className="underline hover:text-slate-900" href="/offer-checklist">
 Offer checklist
 </Link>
 <Link className="underline hover:text-slate-900" href="/get-help">
 Get help
 </Link>
 </div>
 </div>

 <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h2 className="text-lg font-semibold">Decision table</h2>
 <div className="mt-4 overflow-x-auto">
 <table className="w-full text-sm">
 <thead className="text-left text-slate-700">
 <tr className="border-b border-slate-200">
 <th className="py-2 pr-4">Situation</th>
 <th className="py-2">Safer choice</th>
 </tr>
 </thead>
 <tbody className="text-slate-700">
 {decision.map((r) => (<tr key={r.situation} className="border-b border-slate-200">
 <td className="py-2 pr-4 font-medium">{r.situation}</td>
 <td className="py-2">{r.safer}</td>
 </tr>))}
 </tbody>
 </table>
 </div>

 <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
 <p className="text-xs text-slate-600">
 Reminder: outcomes aren’t guaranteed (weather, aurora, wildlife). Your job is to verify procedures and
 build fallbacks.
 </p>
 </div>
 </div>
 </div>

 <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
 <h2 className="text-lg font-semibold">Internal links</h2>
 <div className="mt-4 flex flex-wrap gap-3 text-sm">
 <Link className="underline hover:text-slate-900" href="/lapland-tours/destinations">
 /lapland-tours/destinations
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/rovaniemi">
 /lapland-tours/rovaniemi
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/levi">
 /lapland-tours/levi
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/saariselka">
 /lapland-tours/saariselka
 </Link>
 <Link className="underline hover:text-slate-900" href="/lapland-tours/partners/viator">
 /lapland-tours/partners/viator
 </Link>
 <Link className="underline hover:text-slate-900" href="/policy">
 /policy
 </Link>
 <Link className="underline hover:text-slate-900" href="/offer-checklist">
 /offer-checklist
 </Link>
 </div>
 </div>

 <p className="mt-6 text-xs text-slate-500">Last verified: 2026-01-09</p>
 </section>
 </main>);
}

