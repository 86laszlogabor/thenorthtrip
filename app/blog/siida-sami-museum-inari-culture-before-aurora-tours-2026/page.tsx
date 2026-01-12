import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
 title: "Siida SÃ¡mi Museum Inari 2026: Culture Before Aurora Tours, Tickets",
 description:
 "Siida SÃ¡mi Museum in Inari (2026): SÃ¡mi culture context before aurora tours, â‚¬13 adult entry planning anchor, indoor + open-air museum, winter pacing, visit time, and itinerary order.",
 openGraph: {
 title: "Siida SÃ¡mi Museum Inari 2026: Culture Before Aurora Tours, Tickets",
 description:
 "Culture before aurora tours. Context first, sky second. â‚¬13 adult entry, indoor + open-air museum, winter pacing, and realistic visit time.",
 images: ["/images/og/og-siida-sami-museum-inari-2026.jpg"],
 },
 twitter: {
 card: "summary_large_image",
 title: "Siida SÃ¡mi Museum Inari 2026: Culture Before Aurora Tours, Tickets",
 description:
 "Culture before aurora tours. Context first, sky second. â‚¬13 adult entry, indoor + open-air museum, winter pacing, and realistic visit time.",
 images: ["/images/og/og-siida-sami-museum-inari-2026.jpg"],
 },
};

const visuals = [
 {
 title: "Siida open-air snow",
 body: "Traditional dwellings in winter silence.",
 image: "/images/blog/siida/siida-winter-dwellings.jpg",
 },
 {
 title: "SÃ¡mi gÃ¡kti detail",
 body: "Clothing = language, not costume.",
 image: "/images/blog/siida/saami-gakti-closeup.jpg",
 },
 {
 title: "Reindeer herding exhibit",
 body: "Reality, not postcards.",
 image: "/images/blog/siida/siida-reindeer-exhibit.jpg",
 },
 {
 title: "Lake Inari winter",
 body: "Context for aurora skies.",
 image: "/images/blog/siida/lake-inari-winter.jpg",
 },
];

const toc = [
 { id: "what-siida", label: "What Siida is (and isnâ€™t)" },
 { id: "culture-first", label: "Culture before aurora tours" },
 { id: "sami-people", label: "The SÃ¡mi: not one story" },
 { id: "indoor-museum", label: "Indoor exhibits" },
 { id: "reindeer", label: "Reindeer reality" },
 { id: "clothing", label: "SÃ¡mi clothing" },
 { id: "open-air", label: "Open-air museum" },
 { id: "winter-siida", label: "Winter advantage" },
 { id: "euro13", label: "Tickets: â‚¬13" },
 { id: "visit-time", label: "How long you need" },
 { id: "practical-tips", label: "Practical winter tips" },
 { id: "representation", label: "Representation matters" },
 { id: "inari-shift", label: "How Siida changes Inari" },
 { id: "pairing-aurora", label: "Pair with aurora tours" },
 { id: "mistakes", label: "Common mistakes" },
 { id: "final-check", label: "Final reality check" },
];

function Divider() {
 return (<div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />);
}

export default function Page() {
 return (<>
 <PageHero
 title="Siida SÃ¡mi Museum Inari (2026)"
 subtitle="Culture before aurora tours. Context first, sky second."
 primaryCta={{ href: "/lapland-tours", label: "Lapland tours â†’" }}
 secondaryCta={{ href: "/offer-checklist", label: "Checklist â†’" }}
 />

 <Section>
 <div className="mx-auto max-w-6xl px-4 py-10">
 {/* Editorial header strip */}
 <div className="mb-8">
 <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
 Inari â€¢ Lapland
 </span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
 Planning anchor: â‚¬13
 </span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
 Visit time: 2.5â€“3h
 </span>
 <span className="rounded-full border border-slate-200 bg-white px-3 py-1 dark:border-slate-800 dark:bg-slate-950">
 Order: Siida â†’ aurora
 </span>
 </div>

 <div className="mt-5 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-950/40">
 <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
 <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
 A calm, high-context stop that makes the rest of Lapland feel less like a theme park.
 </p>
 <div className="flex gap-3">
 <CtaButton href="/offer-checklist" variant="primary">
 Offer checklist â†’
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="secondary">
 Lapland tours â†’
 </CtaButton>
 </div>
 </div>
 </div>
 </div>

 <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
 {/* MAIN */}
 <div className="space-y-10">
 {/* Visuals (editorial mosaic) */}
 <div className="grid gap-4 sm:grid-cols-2">
 {visuals.map((v, idx) => (<Card
 key={v.title}
 className={[
 "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950",
 // give a slightly â€œmagazineâ€ cadence
 idx === 0? "sm:col-span-2": "",
 ].join(" ")}
 >
 <div className="relative w-full">
 <div
 className={[
 "relative w-full overflow-hidden",
 idx === 0? "aspect-[16/8]": "aspect-[16/10]",
 ].join(" ")}
 >
 <Image
 src={v.image}
 alt={v.title}
 fill
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
 className="object-cover transition duration-500 group-hover:scale-[1.02]"
 />
 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
 </div>

 <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
 <div className="min-w-0">
 <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
 {v.title}
 </p>
 <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{v.body}</p>
 </div>
 <span className="hidden shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 sm:inline">
 Photo
 </span>
 </div>
 </div>
 </Card>))}
 </div>

 {/* Article */}
 <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
 <div className="p-6 sm:p-10">
 {/* Editorial kicker + title line */}
 <div className="mb-8">
 <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
 Inari â€¢ Culture â€¢ Winter pacing
 </p>
 <h1 className="mt-2 text-2xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
 Siida is the antidote to â€œaurora gambling.â€
 </h1>
 <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
 Context first, sky second. If you only chase the lights, youâ€™ll still get photos. You just
 wonâ€™t understand where you are.
 </p>
 <Divider />
 </div>

 <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:tracking-tight prose-h2:text-xl sm:prose-h2:text-2xl prose-p:leading-relaxed">
 <p>
 Most people come to Lapland chasing the sky. Aurora forecasts, KP indexes, cloud maps, alarms set
 for 01:30. Fine. Understandable. But if you do Lapland in that order, you miss something
 fundamental.
 </p>
 <p>Siida SÃ¡mi Museum in Inari flips the sequence the right way around.</p>
 <p>
 This is not a museum you squeeze in between husky safaris. It is the place that explains why
 Lapland looks the way it does, who has lived here long before tourism arrived, and how people
 adapted to a land where winter isnâ€™t a season but a condition.
 </p>
 <p>
 If you want aurora photos, you can skip this and still go home happy. If you want understanding,
 you start here.
 </p>

 <h2 id="what-siida" className="scroll-mt-28">
 What Siida is (and what it is not)
 </h2>
 <p>Letâ€™s strip away expectations early.</p>
 <p>Siida SÃ¡mi Museum is:</p>
 <ul>
 <li>Finlandâ€™s central museum for SÃ¡mi culture</li>
 <li>a combined indoor museum + open-air heritage area</li>
 <li>a national-level cultural institution, not a local curiosity</li>
 </ul>
 <p>Siida is not:</p>
 <ul>
 <li>a folklore theme park</li>
 <li>a costume photo opportunity</li>
 <li>a souvenir-heavy attraction</li>
 <li>a quick stop you rush through in 40 minutes</li>
 </ul>
 <p>It is calm, precise, and deliberately unspectacular. Thatâ€™s the point.</p>

 <h2 id="culture-first" className="scroll-mt-28">
 Why â€œculture before aurora toursâ€ is not a slogan
 </h2>
 <p>
 Aurora tourism turns Lapland into a night-time obsession. That skews perspective.
 </p>
 <p>SÃ¡mi culture is:</p>
 <ul>
 <li>daylight-based</li>
 <li>seasonal</li>
 <li>tied to land use, not spectacle</li>
 <li>indifferent to your travel schedule</li>
 </ul>
 <p>Visiting Siida before aurora tours does three important things:</p>
 <ul>
 <li>It gives context to the landscape youâ€™ll later photograph in the dark</li>
 <li>It explains why certain areas are sacred, used, or avoided</li>
 <li>It prevents you from reducing Lapland to a sky event</li>
 </ul>
 <p>
 After Siida, the aurora feels less like a show and more like weather that happens above a lived-in
 land.
 </p>

 <h2 id="sami-people" className="scroll-mt-28">
 The SÃ¡mi: one people, not one story
 </h2>
 <p>
 A basic correction most visitors need: There is no single â€œSÃ¡mi culture.â€
 </p>
 <p>The SÃ¡mi are an Indigenous people of Northern Europe, living across:</p>
 <ul>
 <li>Finland</li>
 <li>Norway</li>
 <li>Sweden</li>
 <li>Russia (Kola Peninsula)</li>
 </ul>
 <p>Even within Finland, SÃ¡mi life varies by:</p>
 <ul>
 <li>region</li>
 <li>livelihood</li>
 <li>language group</li>
 <li>historical pressure</li>
 </ul>
 <p>
 Siida handles this complexity without flattening it into something tourist-friendly. That alone
 makes it valuable.
 </p>

 <h2 id="indoor-museum" className="scroll-mt-28">
 The indoor museum: how Siida is structured
 </h2>
 <p>
 The indoor exhibitions are modern, bilingual (Finnish/English), and quietly confident.
 </p>
 <p>Core exhibition themes include:</p>
 <ul>
 <li>SÃ¡mi history and colonization</li>
 <li>Traditional livelihoods (reindeer herding, fishing, hunting)</li>
 <li>Seasonal movement and survival strategies</li>
 <li>Language, clothing, and identity</li>
 <li>Modern SÃ¡mi life and political reality</li>
 </ul>
 <p>Nothing is over-explained. Nothing is dramatized.</p>
 <p>This is not â€œlook how exotic.â€ This is â€œthis is how life worked, and still works.â€</p>

 <h2 id="reindeer" className="scroll-mt-28">
 Reindeer herding: reality, not postcards
 </h2>
 <p>
 Siida dismantles one of the biggest tourist myths: that reindeer herding is a cute, uniform
 activity.
 </p>
 <p>What you actually learn:</p>
 <ul>
 <li>Herding is seasonal and region-specific</li>
 <li>It is economically fragile</li>
 <li>It is deeply affected by land-use decisions</li>
 <li>Snow conditions and climate shifts matter more than tradition alone</li>
 </ul>
 <p>
 After this, booking a â€œreindeer experienceâ€ without understanding context feels slightly
 irresponsible. That discomfort is healthy.
 </p>

 <h2 id="clothing" className="scroll-mt-28">
 SÃ¡mi clothing: function first, identity always
 </h2>
 <p>
 Traditional SÃ¡mi clothing (gÃ¡kti) is often photographed without understanding.
 </p>
 <p>At Siida, clothing is explained as:</p>
 <ul>
 <li>climate-adapted gear</li>
 <li>a marker of region and family</li>
 <li>a living identifier, not a costume</li>
 </ul>
 <p>
 Patterns, colors, and cuts communicate information locals can read instantly. Thatâ€™s culture as
 language, not decoration.
 </p>

 <h2 id="open-air" className="scroll-mt-28">
 The open-air museum: landscape as exhibit
 </h2>
 <p>Outside the main building, Siida includes an open-air museum area with:</p>
 <ul>
 <li>traditional dwellings</li>
 <li>storage structures</li>
 <li>seasonal shelters</li>
 </ul>
 <p>
 In winter, this area is especially effective. Snow simplifies shapes. Silence amplifies scale. You
 understand quickly why mobility, not permanence, defined survival.
 </p>
 <p>This is not a reenactment village. Itâ€™s spatial education.</p>

 <h2 id="winter-siida" className="scroll-mt-28">
 Winter at Siida: why it works better than summer
 </h2>
 <p>Siida is excellent year-round, but winter strips away distraction.</p>
 <p>In winter:</p>
 <ul>
 <li>visitor numbers drop</li>
 <li>the open-air area feels authentic, not staged</li>
 <li>exhibits resonate more clearly</li>
 <li>the lake and forest context matters</li>
 </ul>
 <p>
 In summer, some people rush. In winter, people slow down because they have to. Cultural museums
 benefit from enforced pacing.
 </p>

 <h2 id="euro13" className="scroll-mt-28">
 Siida museum tickets: â‚¬13 that actually makes sense
 </h2>
 <p>Letâ€™s talk cost.</p>
 <p>â‚¬13 adult entry is a realistic planning anchor for Siida museum tickets.</p>
 <p>That ticket gives you:</p>
 <ul>
 <li>full access to indoor exhibitions</li>
 <li>access to the open-air museum area</li>
 <li>facilities, rest areas, and interpretation material</li>
 </ul>
 <p>
 For Lapland, â‚¬13 is: less than a cafÃ© lunch, a fraction of any guided tour, and disproportionately
 high in value.
 </p>
 <p>
 If youâ€™re spending â‚¬150â€“â‚¬250 per activity elsewhere, skipping Siida to â€œsave moneyâ€ is bad math.
 </p>

 <h2 id="visit-time" className="scroll-mt-28">
 How long you need (and why rushing breaks it)
 </h2>
 <p>
 <strong>Minimum visit:</strong> 1.5 hours (indoors only, rushed)
 </p>
 <p>
 <strong>Recommended visit:</strong> 2.5â€“3 hours (indoors + outdoor area)
 </p>
 <p>
 <strong>Ideal winter visit:</strong> 3 hours, with breaks
 </p>
 <p>
 If you find yourself checking the time constantly, you came here too late in the day or with the
 wrong mindset.
 </p>

 <h2 id="practical-tips" className="scroll-mt-28">
 Practical visiting tips (winter edition)
 </h2>
 <ul>
 <li>Wear proper winter shoes. Paths are maintained but snowy.</li>
 <li>Do the indoor museum first, outdoor second.</li>
 <li>Use rest areas. Information density is high.</li>
 <li>Donâ€™t stack this between two adrenaline activities.</li>
 <li>Go before sunset if possible. Daylight helps orientation.</li>
 </ul>

 <h2 id="representation" className="scroll-mt-28">
 Siida and SÃ¡mi representation: why this museum matters
 </h2>
 <p>One uncomfortable truth: Indigenous cultures are often presented by others.</p>
 <p>
 Siida is different. It operates with SÃ¡mi participation, research input, and national
 responsibility.
 </p>
 <p>That shows in:</p>
 <ul>
 <li>language choices</li>
 <li>refusal to oversimplify</li>
 <li>inclusion of modern SÃ¡mi voices</li>
 <li>political and land-right context</li>
 </ul>
 <p>This is not nostalgia. It is continuity.</p>

 <h2 id="inari-shift" className="scroll-mt-28">
 How Siida changes the way you see Inari
 </h2>
 <p>Inari is often treated as:</p>
 <ul>
 <li>a quiet stop</li>
 <li>a base for aurora hunting</li>
 <li>a place you sleep between excursions</li>
 </ul>
 <p>After Siida, Inari becomes:</p>
 <ul>
 <li>a cultural center</li>
 <li>a living SÃ¡mi region</li>
 <li>a place where tourism is recent, not defining</li>
 </ul>
 <p>
 That shift matters, especially if you plan to spend several nights here.
 </p>

 <h2 id="pairing-aurora" className="scroll-mt-28">
 Pairing Siida with aurora tours (the right order)
 </h2>
 <p>
 <strong>Correct order:</strong> Siida during the day â†’ Dinner â†’ Aurora watch or tour at night
 </p>
 <p>
 <strong>Wrong order:</strong> Late-night aurora hunt â†’ No sleep â†’ Rushed museum visit â†’ â€œIt was
 interesting, I guessâ€
 </p>
 <p>Culture requires attention. Donâ€™t starve it.</p>

 <h2 id="mistakes" className="scroll-mt-28">
 Common mistakes visitors make at Siida
 </h2>
 <ul>
 <li>Treating it as background activity</li>
 <li>Speed-reading exhibits</li>
 <li>Skipping the outdoor area in winter</li>
 <li>Visiting after exhaustion sets in</li>
 <li>Expecting entertainment instead of insight</li>
 </ul>
 <p>Siida is quiet. If you need constant stimulation, thatâ€™s on you.</p>

 <h2 id="who-should" className="scroll-mt-28">
 Who should prioritize Siida
 </h2>
 <p>Absolutely visit if you are:</p>
 <ul>
 <li>interested in SÃ¡mi culture Inari context</li>
 <li>traveling beyond Rovaniemi</li>
 <li>visiting Utsjoki, Inari, or northern Lapland</li>
 <li>serious about understanding where you are</li>
 </ul>
 <p>Optional if you are:</p>
 <ul>
 <li>on a 2-day Santa-only trip</li>
 <li>traveling exclusively for activities</li>
 <li>uninterested in cultural context</li>
 </ul>
 <p>Siida does not beg for attention. It rewards it.</p>

 <h2 id="photography" className="scroll-mt-28">
 Photography and respect
 </h2>
 <p>Photography is allowed in many areas, but:</p>
 <ul>
 <li>donâ€™t photograph people without permission</li>
 <li>donâ€™t treat objects as props</li>
 <li>donâ€™t stage â€œethnicâ€ shots</li>
 </ul>
 <p>Some things are informational, not aesthetic.</p>

 <h2 id="mental-reset" className="scroll-mt-28">
 Siida as a mental reset before the Arctic
 </h2>
 <p>
 Many travelers report something unexpected: after Siida, the Arctic feels heavier. Not
 depressing. Grounded.
 </p>
 <p>
 You stop seeing Lapland as empty. You start seeing it as inhabited, managed, contested, lived-in.
 </p>
 <p>That awareness doesnâ€™t reduce the magic. It deepens it.</p>

 <h2 id="sample-day" className="scroll-mt-28">
 Sample Inari day with Siida
 </h2>
 <p>
 <strong>Morning:</strong> slow breakfast, walk by Lake Inari
 </p>
 <p>
 <strong>Late morning:</strong> Siida indoor exhibitions
 </p>
 <p>
 <strong>Midday:</strong> lunch and warm break
 </p>
 <p>
 <strong>Early afternoon:</strong> open-air museum area
 </p>
 <p>
 <strong>Evening:</strong> rest, aurora watch if skies cooperate
 </p>
 <p>No rushing. No stacking. This works.</p>

 <h2 id="final-check" className="scroll-mt-28">
 Final reality check: is Siida worth â‚¬13?
 </h2>
 <p>
 If you want to understand SÃ¡mi culture Inari, plan to spend time in northern Lapland, and care
 about where you are (not just what you see), then yes. Unequivocally.
 </p>
 <p>
 If you skip Siida and only chase aurora, youâ€™ll still get photos. But youâ€™ll leave without
 context. And context is the one thing Lapland doesnâ€™t give you automatically.
 </p>
 <p>Siida does. </p>

 <Divider />

 <p>
 <strong>Internal links:</strong>{" "}
 <Link href="/getting-around-finland">Getting around Finland</Link> â€¢{" "}
 <Link href="/lapland-tours-finland">Lapland tours Finland</Link> â€¢{" "}
 <Link href="/offer-checklist">Offer checklist</Link> â€¢{" "}
 <Link href="/get-help">Get help</Link> â€¢{" "}
 <Link href="/policy">Policy</Link>
 </p>

 <p className="text-sm text-slate-600 dark:text-slate-300">
 <strong>Last verified:</strong> 2026-01-04
 </p>
 </article>
 </div>
 </Card>

 {/* Bottom CTA */}
 <Card className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:to-slate-950/40">
 <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
 <div className="space-y-1">
 <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
 Build an Inari plan that isnâ€™t just â€œaurora gambling.â€
 </p>
 <p className="text-sm text-slate-600 dark:text-slate-300">
 Use the checklist to avoid stacked costs, dead time, and winter pacing mistakes.
 </p>
 </div>
 <div className="flex gap-3">
 <CtaButton href="/offer-checklist" variant="primary">
 Offer checklist â†’
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="secondary">
 Lapland tours â†’
 </CtaButton>
 </div>
 </div>
 </Card>
 </div>

 {/* SIDEBAR */}
 <aside className="space-y-6">
 <div className="lg:sticky lg:top-24 space-y-6">
 {/* Quick facts */}
 <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
 <div className="p-5">
 <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Quick facts</p>

 <dl className="mt-4 space-y-3 text-sm">
 <div className="flex items-start justify-between gap-4">
 <dt className="text-slate-600 dark:text-slate-300">Planning anchor</dt>
 <dd className="font-semibold text-slate-900 dark:text-slate-100">â‚¬13 adult entry</dd>
 </div>
 <div className="flex items-start justify-between gap-4">
 <dt className="text-slate-600 dark:text-slate-300">Recommended time</dt>
 <dd className="font-semibold text-slate-900 dark:text-slate-100">2.5â€“3 hours</dd>
 </div>
 <div className="flex items-start justify-between gap-4">
 <dt className="text-slate-600 dark:text-slate-300">Location</dt>
 <dd className="font-semibold text-slate-900 dark:text-slate-100">Inari, Lapland</dd>
 </div>
 <div className="flex items-start justify-between gap-4">
 <dt className="text-slate-600 dark:text-slate-300">Best order</dt>
 <dd className="font-semibold text-slate-900 dark:text-slate-100">Siida â†’ aurora</dd>
 </div>
 </dl>

 <div className="mt-5 flex gap-3">
 <CtaButton href="/offer-checklist" variant="primary" className="w-full justify-center">
 Checklist â†’
 </CtaButton>
 <CtaButton href="/lapland-tours" variant="secondary" className="w-full justify-center">
 Tours â†’
 </CtaButton>
 </div>
 </div>
 </Card>

 {/* TOC */}
 <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
 <div className="p-5">
 <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">On this page</p>
 <nav className="mt-4">
 <ul className="space-y-1.5 text-sm">
 {toc.map((item) => (<li key={item.id}>
 <a
 href={`#${item.id}`}
 className="group flex items-start gap-3 rounded-lg px-2 py-1.5 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900/40 dark:hover:text-slate-100"
 >
 <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition group-hover:bg-slate-500 dark:bg-slate-700 dark:group-hover:bg-slate-400" />
 <span className="leading-snug">{item.label}</span>
 </a>
 </li>))}
 </ul>
 </nav>
 </div>
 </Card>

 {/* Respect card */}
 <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
 <div className="p-5">
 <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
 Photography: donâ€™t be weird
 </p>
 <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
 Photos are fine. Treat people and objects like reality, not props.
 </p>
 <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
 <li>No photographing people without permission.</li>
 <li>No staged â€œethnicâ€ shots.</li>
 <li>No rushing it on zero sleep.</li>
 </ul>
 </div>
 </Card>
 </div>
 </aside>
 </div>
 </div>
 </Section>
 </>);
}

