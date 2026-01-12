import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Lapland Tours 2026: Husky €220–480, Aurora €130–240, Rovaniemi vs Levi",
 description:
 "Lapland tours 2026, decision-first: husky safaris (€220–480), aurora hunts (€130–240), ice hotel reality checks, Rovaniemi vs Levi comparison, and 3-day itineraries starting from Helsinki.",
 openGraph: { images: ["/images/og/og-blog.jpg"] },
};

const lastVerified = "2026-01-04";

const visuals = [
 {
 title: "Husky safari, the headline experience",
 body: "Ride time, group size, transfers and gear are what you’re actually paying for.",
 image: "/images/blog/lapland-tours-2026/husky.jpg",
 alt: "Lapland husky safari in winter: sled ride experience and tour logistics (2026)",
 },
 {
 title: "Aurora hunt strategy",
 body: "More nights + mobility + darkness. Apps alone are not a plan.",
 image: "/images/blog/lapland-tours-2026/aurora.jpg",
 alt: "Northern Lights aurora hunt in Lapland: dark sky and guided chasing strategy (2026)",
 },
 {
 title: "Ice hotel reality check",
 body: "Beautiful, temporary, mildly uncomfortable. Worth it for the story, not the sleep.",
 image: "/images/blog/lapland-tours-2026/ice-hotel.jpg",
 alt: "Lapland ice hotel experience: frozen rooms and photo-worthy interiors (2026)",
 },
 {
 title: "Rovaniemi vs Levi decision",
 body: "Variety and convenience vs resort comfort and ski energy. Pick a base like an adult.",
 image: "/images/blog/lapland-tours-2026/rovaniemi-levi.jpg",
 alt: "Rovaniemi vs Levi comparison for Lapland tours: base choice and winter vibe (2026)",
 },
];

function Anchor({ id }: { id: string }) {
 return <span id={id} className="scroll-mt-28" />;
}

function Kpi({
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

function Callout({
 title,
 body,
 tone = "neutral",
}: {
 title: string;
 body: string;
 tone?: "neutral" | "success" | "warning";
}) {
 const styles =
 tone === "success"? "border-emerald-200 bg-emerald-50": tone === "warning"? "border-amber-200 bg-amber-50": "border-slate-200 bg-slate-50";

 return (<div className={`rounded-2xl border p-5 ${styles}`}>
 <div className="text-sm font-semibold text-slate-900">{title}</div>
 <p className="mt-2 text-sm text-slate-700 leading-relaxed">{body}</p>
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
 <div className="mt-4 space-y-4 text-sm text-slate-700 leading-relaxed">
 {children}
 </div>
 </Card>);
}

export default function LaplandTours2026Page() {
 const articleJsonLd = {
 "@context": "https://schema.org",
 "@type": "Article",
 headline:
 "Lapland Tours 2026: Husky Safaris, Aurora Hunts & Ice Hotel Reality Checks",
 datePublished: "2026-01-04",
 dateModified: "2026-01-04",
 author: { "@type": "Organization", name: "TheNorthTrip" },
 publisher: { "@type": "Organization", name: "TheNorthTrip" },
 mainEntityOfPage: {
 "@type": "WebPage",
 "@id": "https://thenorthtrip.com/blog/lapland-tours-2026",
 },
 };

 const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "Is Lapland worth it for only 3 days?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes, if you plan tightly and accept you can’t do everything. Three days is enough for one base, one headline tour, and two aurora attempts.",
 },
 },
 {
 "@type": "Question",
 name: "What’s the smartest way to do Lapland tours from Helsinki?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Fly or take the night train to Rovaniemi for efficiency. For Levi, fly to Kittilä and transfer to the resort area.",
 },
 },
 {
 "@type": "Question",
 name: "Rovaniemi or Levi for first-timers?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Rovaniemi for variety and convenience. Levi for resort comfort and ski energy. Pick one base unless you enjoy transfer roulette.",
 },
 },
 {
 "@type": "Question",
 name: "Is an ice hotel overnight stay worth it?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Worth it for the story and photos, not for comfort. Many people do a day visit or dinner, then sleep somewhere warm.",
 },
 },
 ],
 };

 return (<main className="min-h-screen bg-slate-50 text-slate-900">
 <Script
 id="ld-article"
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
 />
 <Script
 id="ld-faq"
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />

 <PageHero
 title="Lapland Tours 2026"
 subtitle="Husky safaris, aurora hunts, ice hotels, and the logistics that decide whether it’s magical or miserable."
 imageSrc="/images/blog/lapland-tours-2026/hero.jpg"
 />

 <Section>
 <div className="mx-auto max-w-6xl px-4 py-8">
 {/* top meta row */}
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="text-sm text-slate-600">
 <span className="font-medium">Blog</span>
 <span className="mx-2 text-slate-300">•</span>
 <span className="text-slate-500">
 Last verified: <span className="font-medium">{lastVerified}</span>
 </span>
 </div>

 <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
 <Link className="hover:text-slate-900" href="/blog">
 Back to Blog
 </Link>
 <Link className="hover:text-slate-900" href="/lapland-tours">
 Lapland tours 
 </Link>
 <Link className="hover:text-slate-900" href="/offer-checklist">
 Offer checklist
 </Link>
 </nav>
 </div>

 <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div className="space-y-6">
 {/* decision header */}
 <Card className="p-6 md:p-8">
 <div className="flex flex-wrap items-center justify-between gap-3">
 <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
 <span className="h-2 w-2 rounded-full bg-emerald-500" />
 Winter logic first. Magic second.
 </div>
 <div className="text-xs text-slate-500">
 Jump to:{" "}
 <a className="underline hover:text-slate-900" href="#budget">
 prices
 </a>
 <span className="mx-2 text-slate-300">•</span>
 <a className="underline hover:text-slate-900" href="#bases">
 base choice
 </a>
 <span className="mx-2 text-slate-300">•</span>
 <a className="underline hover:text-slate-900" href="#itineraries">
 itineraries
 </a>
 </div>
 </div>

 <div className="mt-5 grid gap-3 sm:grid-cols-3">
 <Kpi
 label="Husky safari"
 value="€220–480"
 hint="Value = ride time + transfers"
 />
 <Kpi
 label="Aurora hunt"
 value="€130–240"
 hint="Mobility + group size matter"
 />
 <Kpi
 label="Ice hotel (overnight)"
 value="€350–550"
 hint="Story > sleep quality"
 />
 </div>

 <div className="mt-4">
 <Callout
 tone="success"
 title="The one decision that changes everything"
 body="Pick one base (Rovaniemi or Levi). Then build tours around transfers and darkness. Most ‘Lapland chaos’ is self-inflicted via fragile logistics."
 />
 </div>
 </Card>

 {/* featured */}
 <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
 <div className="relative aspect-[16/9] w-full">
 <Image
 src="/images/blog/lapland-tours-2026/feature.jpg"
 alt="Lapland winter landscape and tour mood (2026)"
 fill
 className="object-cover"
 sizes="(min-width: 1024px) 720px, 100vw"
 priority
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
 </div>
 </div>

 {/* visuals */}
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
 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <h2 className="text-base font-semibold text-slate-900">
 {c.title}
 </h2>
 <p className="mt-2 text-sm text-slate-700 leading-relaxed">
 {c.body}
 </p>
 </div>
 </Card>))}
 </div>

 {/* CONTENT as modern section cards */}
 <SectionCard
 id="why"
 kicker="Context"
 title="Why Lapland in 2026 hits different for Hungarian travelers"
 >
 <p>
 Bloody freezing but pure magic! If you’re Hungarian and you’ve ever stared at a sad
 grey January sky thinking “this can’t be all there is,” Lapland is the rude,
 dazzling answer.
 </p>
 <p>
 Hungarians tend to travel with a mix of optimism and “we’ll figure it out.” Lapland
 punishes that vibe. Not hostile, just indifferent. Miss a transfer and there isn’t
 a convenient Plan B on every corner. That’s why this guide is about decisions.
 </p>
 </SectionCard>

 <SectionCard id="buying" kicker="What you pay for" title="What you’re actually buying with a Lapland tour">
 <ul className="list-disc pl-5 space-y-2">
 <li>Time efficiency (no improvising in -20°C with numb fingers).</li>
 <li>Local transport solutions (the hidden boss fighte fight in Lapland).</li>
 <li>Better aurora odds (not guaranteed, but less tragic).</li>
 <li>Safety and gear sanity (because “I have a warm jacket” is a classic lie).</li>
 </ul>
 </SectionCard>

 <SectionCard id="story" kicker="Human proof" title="Personal story: my first Aurora night">
 <p>
 The first time I went north, I underestimated nature, overestimated my clothing,
 and made plans based on vibes. Within 90 seconds my face felt like it had been slapped
 by a frozen fish. Then the guide pointed up and said, very casually, “There.”
 </p>
 <p>
 At first it was faint, like someone spilled green ink. Then it stretched, pulsed,
 and moved like something alive. The whole group went silent. Real silent.
 </p>
 <Callout
 title="Takeaway"
 body="Lapland is generous to people who plan like adults: buffers, transfers, darkness. Optimism can stay, but it needs backup."
 />
 </SectionCard>

 <SectionCard id="from-helsinki" kicker="Logistics" title="Lapland tours from Helsinki: routes that don’t wreck your trip">
 <div className="grid gap-4 md:grid-cols-3">
 {[
 {
 t: "Option 1: Fly to Rovaniemi",
 items: ["Fastest and usually easiest", "Best for short trips (3–4 days)"],
 },
 {
 t: "Option 2: Night train to Rovaniemi",
 items: ["Overnight, practical, satisfying", "Book sleeper cabins early"],
 },
 {
 t: "Option 3: Fly to Kittilä (for Levi)",
 items: ["Best for ski + resort base", "Flight + transfer chain matters"],
 },
 ].map((x) => (<div key={x.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-sm font-semibold text-slate-900">{x.t}</div>
 <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-700">
 {x.items.map((i) => (<li key={i}>{i}</li>))}
 </ul>
 </div>))}
 </div>
 </SectionCard>

 <SectionCard id="bases" kicker="Base choice" title="Rovaniemi vs Levi: which base is better in 2026?">
 <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
 <table className="w-full text-sm">
 <thead className="bg-slate-50 text-left">
 <tr className="border-b">
 <th className="px-4 py-3">Category</th>
 <th className="px-4 py-3">Rovaniemi</th>
 <th className="px-4 py-3">Levi</th>
 </tr>
 </thead>
 <tbody>
 {[
 ["Best for", "First-timers, mixed activities", "Ski + resort comfort"],
 ["Getting there", "Flights + night trains", "Fly to Kittilä + transfer"],
 ["Tour variety", "Wider variety", "Strong, more resort-focused"],
 ["Aurora access", "Excellent with guides", "Excellent dark areas nearby"],
 ["Budget feel", "More range", "Often higher spend"],
 ].map(([c, r, l]) => (<tr key={c} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-medium text-slate-900">{c}</td>
 <td className="px-4 py-3 text-slate-700">{r}</td>
 <td className="px-4 py-3 text-slate-700">{l}</td>
 </tr>))}
 </tbody>
 </table>
 </div>
 </SectionCard>

 <SectionCard id="budget" kicker="Decision data" title="Tour costs in Lapland: pricing without fairy tales">
 <p>
 Use this to sanity-check listings before you click “book”.
 </p>

 <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
 <table className="w-full text-sm">
 <thead className="bg-slate-50 text-left">
 <tr className="border-b">
 <th className="px-4 py-3">Tour type</th>
 <th className="px-4 py-3">Typical 2026 winter price</th>
 <th className="px-4 py-3">What to check</th>
 </tr>
 </thead>
 <tbody>
 {[
 ["Husky safari", "€220–480", "Actual ride time, group size, transfers, gear included"],
 ["Aurora hunt", "€130–240", "Mobility, group size, duration, photo support"],
 ["Ice hotel day visit", "€40–120", "Inclusions, timing, extras"],
 ["Ice hotel overnight", "€350–550", "Warm facilities, sleeping bag rating, comfort expectations"],
 ].map(([t, p, k]) => (<tr key={t} className="border-b last:border-b-0">
 <td className="px-4 py-3 font-medium text-slate-900">{t}</td>
 <td className="px-4 py-3 text-slate-700">{p}</td>
 <td className="px-4 py-3 text-slate-700">{k}</td>
 </tr>))}
 </tbody>
 </table>
 </div>

 <Callout
 tone="warning"
 title="Quick rule"
 body="If a tour listing hides ride time or transfer details, it’s not ‘mysterious’. It’s just lazy."
 />
 </SectionCard>

 <SectionCard id="itineraries" kicker="Plans" title="3-day Lapland itinerary ideas for 2026">
 <div className="grid gap-4">
 <Card className="p-5">
 <div className="text-sm font-semibold text-slate-900">Itinerary A: Rovaniemi classic</div>
 <div className="mt-3 grid gap-3 md:grid-cols-3">
 {[
 { d: "Day 1", t: "Arrive + warm-up", s: "Fly/train, check-in, one aurora attempt" },
 { d: "Day 2", t: "Husky headline", s: "Prioritize ride time, recovery + sauna" },
 { d: "Day 3", t: "Ice hotel + last night", s: "Visit/dinner, flexible final evening" },
 ].map((x) => (<div key={x.d} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
 <div className="text-xs font-medium text-slate-600">{x.d}</div>
 <div className="mt-1 text-sm font-semibold text-slate-900">{x.t}</div>
 <div className="mt-2 text-sm text-slate-700">{x.s}</div>
 </div>))}
 </div>
 </Card>

 <Card className="p-5">
 <div className="text-sm font-semibold text-slate-900">Itinerary B: Levi comfort + tours</div>
 <p className="mt-2 text-sm text-slate-700">
 Fly to Kittilä, commit to one base, layer tours around transfers, and don’t schedule yourself into exhaustion.
 </p>
 </Card>

 <Card className="p-5">
 <div className="text-sm font-semibold text-slate-900">Itinerary C: Aurora maximizer</div>
 <p className="mt-2 text-sm text-slate-700">
 Two serious chasing nights + one flexible night. Ice hotel becomes celebration or emotional damage control.
 </p>
 </Card>
 </div>
 </SectionCard>

 <SectionCard id="mistakes" kicker="Avoid pain" title="Planning mistakes Hungarians commonly make">
 <ol className="list-decimal pl-5 space-y-2">
 <li>Underpacking gloves and socks (wet gloves = misery).</li>
 <li>Booking tours without reading transfer details.</li>
 <li>Assuming city lights don’t matter (they do).</li>
 <li>Over-scheduling Day 1 (fatigue + cold = bad decisions).</li>
 <li>Choosing the cheapest tour and expecting premium experience.</li>
 </ol>
 </SectionCard>

 <SectionCard id="faq" kicker="FAQ" title="Lapland tours 2026: quick answers">
 <div className="grid gap-3">
 {[
 {
 q: "Is Lapland worth it for only 3 days?",
 a: "Yes, if you plan tightly. One base + one headline tour + two aurora attempts is realistic.",
 },
 {
 q: "Smartest way from Helsinki?",
 a: "Fly/night train to Rovaniemi. For Levi: fly to Kittilä + keep transfers clean.",
 },
 {
 q: "Rovaniemi or Levi for first-timers?",
 a: "Rovaniemi for variety. Levi for resort comfort and ski energy.",
 },
 {
 q: "Ice hotel overnight worth it?",
 a: "Story and photos: yes. Comfort: no.",
 },
 ].map((item) => (<Card key={item.q} className="p-5">
 <div className="text-sm font-semibold text-slate-900">{item.q}</div>
 <p className="mt-2 text-sm text-slate-700">{item.a}</p>
 </Card>))}
 </div>
 </SectionCard>

 <SectionCard id="checklist" kicker="Finish strong" title="Final checklist: magical, not stressful">
 <ul className="list-disc pl-5 space-y-2">
 <li>Choose one base (Rovaniemi or Levi) unless you love transfer roulette.</li>
 <li>Book one premium headline tour (husky) + one aurora strategy night.</li>
 <li>Keep one flexible evening for weather-based decisions.</li>
 <li>Pack like you’re going to war against wind.</li>
 <li>Respect recovery time (sauna is medicine).</li>
 </ul>

 <div className="mt-4 flex flex-wrap gap-3">
 <CtaButton href="/lapland-tours" variant="primary">
 Open Lapland tours →
 </CtaButton>
 <CtaButton href="/offer-checklist" variant="outline">
 Offer checklist →
 </CtaButton>
 <CtaButton href="/getting-around-finland" variant="outline">
 Getting around Finland →
 </CtaButton>
 </div>

 <div className="mt-4 text-xs text-slate-500">
 <strong>Last verified:</strong> {lastVerified}
 </div>
 </SectionCard>

 {/* Bottom utility links */}
 <Card className="p-6">
 <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
 <Link href="/blog" className="font-semibold hover:underline text-slate-700">
 Back to Blog →
 </Link>
 <div className="flex flex-wrap gap-3 text-sm text-slate-700">
 <Link href="/policy" className="hover:underline">
 Policy
 </Link>
 <Link href="/get-help" className="hover:underline">
 Get help
 </Link>
 </div>
 </div>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="lg:sticky lg:top-24 h-fit space-y-4">
 <Card className="p-6">
 <h2 className="text-base font-semibold text-slate-900">On this page</h2>
 <div className="mt-3 grid gap-2 text-sm text-slate-700">
 <a className="hover:underline" href="#why">Why 2026 hits different</a>
 <a className="hover:underline" href="#buying">What you’re buying</a>
 <a className="hover:underline" href="#story">Personal story</a>
 <a className="hover:underline" href="#from-helsinki">From Helsinki: routes</a>
 <a className="hover:underline" href="#bases">Rovaniemi vs Levi</a>
 <a className="hover:underline" href="#budget">Budget reality</a>
 <a className="hover:underline" href="#itineraries">3-day itineraries</a>
 <a className="hover:underline" href="#mistakes">Mistakes</a>
 <a className="hover:underline" href="#faq">FAQ</a>
 <a className="hover:underline" href="#checklist">Final checklist</a>
 </div>
 </Card>

 <Card className="overflow-hidden p-0">
 <div className="relative aspect-[16/10] bg-slate-100">
 <Image
 src="/images/blog/lapland-tours-2026/sidebar.jpg"
 alt="Lapland winter: cabin lights, snow, and dark sky (2026)"
 fill
 className="object-cover"
 sizes="360px"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
 </div>
 <div className="p-6">
 <p className="text-xs font-medium text-slate-700">Quick rule</p>
 <p className="mt-2 text-sm text-slate-700">
 If a listing hides ride time or transfer details, it’s not “mysterious”. It’s just lazy.
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

