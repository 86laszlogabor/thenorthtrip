import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
  description:
    "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
  openGraph: {
    title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
    description:
      "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
    images: ["/images/og/og-blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finn Cities’ Hidden Gems 2026: Winter Routing for Lapland Trips",
    description:
      "A decision-first winter routing guide across Finnish cities: Helsinki, Turku, Porvoo, Tampere, Savonlinna, Rovaniemi, Kuopio, Oulu and Lahti. Built for Lapland-ready planning.",
    images: ["/images/og/og-blog.jpg"],
  },
};

const lastVerified = "2026-01-04";

/**
 * Avoid 404s: use a guaranteed fallback image path already present in your project.
 * Swap to real city assets later without touching layout.
 */
const IMG_FALLBACK = "/images/hero/hero-blog-planning.jpg";

const images = {
  hero: IMG_FALLBACK,
  articleHero: IMG_FALLBACK,
  sidebar: IMG_FALLBACK,
  helsinki: IMG_FALLBACK,
  tampere: IMG_FALLBACK,
  rovaniemi: IMG_FALLBACK,
  porvoo: IMG_FALLBACK,
  turku: IMG_FALLBACK,
  savonlinna: IMG_FALLBACK,
  kuopio: IMG_FALLBACK,
  oulu: IMG_FALLBACK,
  lahti: IMG_FALLBACK,
};

const quickChecks = [
  {
    title: "Cities reduce risk",
    body:
      "Use cities to stabilize the plan: transport, bookings, and recovery options. Wilderness comes after structure.",
  },
  {
    title: "Short winter days win",
    body:
      "Darkness arrives early. Routes that look easy in summer become fatigue traps in winter.",
  },
  {
    title: "Base beats bouncing",
    body:
      "Two-night bases outperform constant movement. Winter punishes schedule stacking.",
  },
  {
    title: "North is earned",
    body:
      "Go north when your connections and timing are locked. Optimism is not a transport system.",
  },
];

const tableRows: Array<[string, string, string, string, string]> = [
  ["Helsinki", "Planning + connections", "Design, saunas", "Dec–Mar", "€€€"],
  ["Turku", "History without noise", "Castle, river", "Dec–Feb", "€€"],
  ["Porvoo", "Easy day-trip reset", "Old town", "Jan–Feb", "€€"],
  ["Tampere", "Sauna culture hub", "Lakes, museums", "Dec–Mar", "€€"],
  ["Savonlinna", "Castle-in-snow mood", "Lake Saimaa", "Jan–Feb", "€€"],
  ["Rovaniemi", "Lapland base", "Aurora, huskies", "Dec–Mar", "€€€"],
  ["Kuopio", "Quiet winter Finland", "Frozen lakes", "Jan–Mar", "€€"],
  ["Oulu", "Northern gateway", "Winter cycling", "Dec–Mar", "€€"],
  ["Lahti", "Winter sports warm-up", "Ski jumps", "Jan–Mar", "€€"],
];

const citySections = [
  {
    id: "helsinki",
    title: "Helsinki: Nordic cool without trying too hard",
    image: images.helsinki,
    intro:
      "Helsinki is often underestimated. People land, do a quick day trip, and leave. That’s fine if your only goal is a postcard. It’s a mistake if you’re heading north.",
    body: [
      "In winter, Helsinki is minimalist beauty: Design District cafés, sea ice along the harbor, and saunas everywhere. Löyly can justify the stop if you like your “wellness” with a side of Baltic wind. Add a simple winter walking loop, then take a short ferry ride and watch the sea look like it’s quietly plotting against you.",
    ],
    blocks: [
      {
        label: "TheNorthTrip logic",
        text:
          "Use Helsinki as your soft landing. Lock the fragile parts first: Lapland tour timing, northbound connections, and (if you drive) winter rental timing. Helsinki is the logistics brain of your trip.",
      },
      {
        label: "Practical tip",
        text:
          "Try a public sauna on a weekday evening. It’s the fastest way to understand Finnish winter culture without the tourist performance.",
      },
      { label: "When it works best", text: "December to March. Cold but manageable. Many days sit around -5 to -10°C." },
    ],
  },
  {
    id: "turku",
    title: "Turku: history, rivers, and calm winter rhythm",
    image: images.turku,
    intro:
      "Turku feels older, slower, and more human. As Finland’s former capital, it carries history without trying to sell it to you.",
    body: [
      "In winter, the Aura River freezes in patches, cafés glow inside stone buildings, and the medieval castle looks extra dramatic under snow. If you want Christmas markets without the crowd funnel, Turku usually delivers.",
    ],
    blocks: [
      {
        label: "TheNorthTrip logic",
        text:
          "Use Turku as contrast: southern calm before the north, or decompression after Lapland.",
      },
      {
        label: "Practical tip",
        text:
          "Walk the river at dusk. No headphones. The crunch of snow is the soundtrack.",
      },
      { label: "When it works best", text: "December to February. Typically milder than Lapland." },
    ],
  },
  {
    id: "porvoo",
    title: "Porvoo: small town, big postcard energy",
    image: images.porvoo,
    intro:
      "Porvoo is tiny, and that’s the point. Old Town Porvoo with its red riverside warehouses looks like it was designed for photos. Annoyingly, it’s also real.",
    body: [
      "Winter helps. Fewer tourists, quieter streets, candle-lit cafés, and wooden houses under fresh snow. It’s romantic without being annoying about it.",
    ],
    blocks: [
      { label: "TheNorthTrip logic", text: "Best used as a Helsinki day trip before you commit to Lapland routing." },
      { label: "Practical tip", text: "Go early the morning after snowfall. The silence is almost suspicious." },
      { label: "When it works best", text: "January to February. Cold, photogenic, and calmer." },
    ],
  },
  {
    id: "tampere",
    title: "Tampere: saunas, lakes, and industrial soul",
    image: images.tampere,
    intro:
      "Tampere surprised me. Old factories turned into cultural spaces, surrounded by lakes that freeze solid in winter.",
    body: ["Sauna culture here is the main event: smoke saunas, ice swimming, repeat."],
    blocks: [
      { label: "TheNorthTrip logic", text: "Tampere is the best sauna stop before you head into Lapland wilderness." },
      {
        label: "Practical tip",
        text:
          "Try ice swimming after sauna. You’ll hate it, then you’ll love it, and then you’ll talk about it forever. That’s the contract.",
      },
      { label: "When it works best", text: "December to March. Crisp cold, proper winter atmosphere." },
    ],
  },
  {
    id: "savonlinna",
    title: "Savonlinna: a castle-in-snow mood",
    image: images.savonlinna,
    intro: "Savonlinna is famous for summer opera, but winter is seriously underrated.",
    body: [
      "Olavinlinna Castle surrounded by frozen Lake Saimaa looks like a Nordic fantasy novel. Fewer people, more atmosphere, and no pressure to “do everything.”",
    ],
    blocks: [
      { label: "TheNorthTrip logic", text: "A slow, scenic stop between southern cities and the north, if your schedule has room." },
      { label: "Practical tip", text: "Walk the castle area at blue hour. Winter light does the work for you." },
      { label: "When it works best", text: "January to February. Cold and quiet, in the best way." },
    ],
  },
  {
    id: "rovaniemi",
    title: "Rovaniemi: Lapland starts here",
    image: images.rovaniemi,
    intro:
      "Rovaniemi is where things get real: Arctic Circle lines on the road, reindeer crossings, snowmobile tracks everywhere.",
    body: [
      "This is Lapland tourism in its most accessible form: husky safaris, snowmobile tours, Northern Lights chasing, and Santa if you’re into that.",
    ],
    blocks: [
      {
        label: "TheNorthTrip logic",
        text:
          "Keep it simple: choose one strong base and do fewer, better tours. Schedules break when you stack everything into short daylight windows.",
      },
      { label: "Practical tip", text: "Book aurora tours that go far from the city. Light pollution kills the sky. Weak planning kills the schedule." },
      { label: "When it works best", text: "December to March. Very cold (-10 to -30°C isn’t a flex, it’s a warning)." },
    ],
  },
  {
    id: "kuopio",
    title: "Kuopio: quiet winter Finland",
    image: images.kuopio,
    intro: "Kuopio doesn’t scream for attention. It waits.",
    body: [
      "Frozen lakes stretch forever, Puijo Tower views cut through winter fog, and locals feel proudly unbothered by tourism.",
    ],
    blocks: [
      { label: "TheNorthTrip logic", text: "If you want “real Finland” without performance, Kuopio is a strong pick." },
      { label: "Practical tip", text: "Rent skates. Locals glide on frozen lakes like it’s nothing." },
      { label: "When it works best", text: "January to March. Peaceful winter, less noise, more space." },
    ],
  },
  {
    id: "oulu",
    title: "Oulu: northern edge, tech brain",
    image: images.oulu,
    intro: "Oulu sits between the south and true Lapland. Snowy, flat, and surprisingly innovative.",
    body: [
      "Winter cycling here is legendary. Yes, people bike at -15°C. No, they’re not trying to impress you.",
    ],
    blocks: [
      { label: "TheNorthTrip logic", text: "Useful gateway for northern road trips and Lapland extensions without jumping straight into the far north." },
      { label: "Practical tip", text: "Use studded tires if you cycle. Finns treat ice as a fact, not a surprise." },
      { label: "When it works best", text: "December to March. Cold and windy, but built for winter living." },
    ],
  },
  {
    id: "lahti",
    title: "Lahti: winter sports warm-up",
    image: images.lahti,
    intro:
      "Lahti feels sporty and modern. Ski jumps dominate the skyline, forests start right behind the city, and trails are taken seriously.",
    body: ["Great for active travelers who want snow without full Lapland logistics."],
    blocks: [
      { label: "TheNorthTrip logic", text: "Treat Lahti as a warm-up city: winter sports without the long-distance complexity." },
      { label: "Practical tip", text: "Cross-country trails are ridiculously well maintained. If you ever wanted to try, this is where you won’t hate it." },
      { label: "When it works best", text: "January to March. Cold, active, straightforward." },
    ],
  },
];

const faqs = [
  {
    q: "Do I need to visit cities if my goal is only Lapland?",
    a: "If your trip relies on flights, trains, or tight tour windows, cities are your stabilizer. They give you connections, buffers, and recovery options when weather shifts.",
  },
  {
    q: "What’s the biggest winter routing mistake?",
    a: "Stacking plans like summer. Winter reduces daylight and increases fatigue. Shorter driving days and fewer base changes win more often than ambitious schedules.",
  },
  {
    q: "How many bases should I plan for one winter trip?",
    a: "Fewer than you think. Two-night bases beat daily movement. Your trip feels bigger when it isn’t constantly collapsing into logistics.",
  },
  {
    q: "Where should I start if I’m nervous about planning?",
    a: "Start with Helsinki, lock transport north, then choose one Lapland base. Add side cities only when the core plan is stable.",
  },
  {
    q: "Is Rovaniemi too touristy to be useful?",
    a: "It can be busy, but it’s still a strong base for accessible Lapland logistics. The key is choosing tours that go far enough from city light and avoiding schedule stacking.",
  },
];

function Anchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <span id={id} className="scroll-mt-24">
      {children}
    </span>
  );
}

function MicroBlock({
  label,
  text,
  tone = "neutral",
}: {
  label: string;
  text: string;
  tone?: "neutral" | "warning";
}) {
  const box =
    tone === "warning"
      ? "border-amber-200 bg-amber-50"
      : "border-slate-200 bg-slate-50";
  const dot = tone === "warning" ? "bg-amber-500" : "bg-emerald-500";

  return (
    <div className={`not-prose mt-4 rounded-2xl border px-4 py-3 ${box}`}>
      <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {label}
      </div>
      <p className="mt-2 text-sm text-slate-800 leading-relaxed">{text}</p>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Finn Cities’ Hidden Gems 2026: winter routing for Lapland trips."
        subtitle="Cities first when you need structure. North second when the plan can survive reality."
        imageSrc={images.hero}
        primaryCta={{ href: "/lapland-tours", label: "Lapland tours hub" }}
        secondaryCta={{ href: "/getting-around-finland", label: "Getting around Finland" }}
      />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute right-0 top-16 hidden h-[620px] w-[560px] opacity-[0.22] lg:block">
            <Image
              src="/images/decor/finland-map-watercolor.png"
              alt=""
              fill
              className="object-contain"
              sizes="560px"
              priority={false}
            />
          </div>
        </div>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* MAIN */}
            <article className="max-w-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Practical routing. Winter-first decisions.
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Finn Cities’ Hidden Gems: From Lapland Intensity to Historic Nordic Towns
              </h1>

              <p className="mt-3 text-base md:text-lg text-slate-700 max-w-3xl">
                Finland in winter is not just snow and silence. It’s cities that actually work in cold
                conditions: heated indoor spaces, transport that usually holds up, and a culture that assumes
                you’ll prepare instead of “seeing what happens.” If you plan well, it feels effortless. If
                you don’t, winter punishes optimism.
              </p>

              {/* Article hero image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={images.articleHero}
                    alt="Winter routing across Finnish cities: calm planning before Lapland"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-white/90 max-w-2xl">
                      The goal: a trip that still works when it’s dark, you’re tired, and winter decides to be winter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick checks */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {quickChecks.map((c) => (
                  <Card key={c.title} className="p-6">
                    <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
                    <p className="mt-2 text-sm text-slate-700">{c.body}</p>
                  </Card>
                ))}
              </div>

              {/* Contents */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">In this guide</h2>
                <div className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  <Link className="hover:underline" href="#intro">Why cities matter for Lapland trips</Link>
                  <Link className="hover:underline" href="#table">Quick comparison table</Link>
                  <Link className="hover:underline" href="#helsinki">Helsinki</Link>
                  <Link className="hover:underline" href="#turku">Turku</Link>
                  <Link className="hover:underline" href="#porvoo">Porvoo</Link>
                  <Link className="hover:underline" href="#tampere">Tampere</Link>
                  <Link className="hover:underline" href="#savonlinna">Savonlinna</Link>
                  <Link className="hover:underline" href="#rovaniemi">Rovaniemi</Link>
                  <Link className="hover:underline" href="#kuopio">Kuopio</Link>
                  <Link className="hover:underline" href="#oulu">Oulu</Link>
                  <Link className="hover:underline" href="#lahti">Lahti</Link>
                  <Link className="hover:underline" href="#faq">FAQ</Link>
                </div>
              </div>

              <div className="mt-10 space-y-12">
                <section>
                  <Anchor id="intro">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Why Finnish cities matter (even if you came for Lapland)
                    </h2>
                  </Anchor>

                  <p className="mt-3 text-slate-700 max-w-3xl">
                    The clean version of Finland is simple: ice outside, heat inside. Silence in the streets,
                    laughter in the sauna. Medieval towns next to modern design. And Lapland wilderness that’s
                    reachable without turning your trip into a logistics nightmare, if you pick the right cities
                    in the right order.
                  </p>

                  <MicroBlock
                    label="Decision filter"
                    tone="warning"
                    text="If a missed connection would break your trip, don’t wing it. Lock transport first, then tours, then day trips. Reverse that order and you’re buying stress at Finnish prices."
                  />
                </section>

                <section>
                  <Anchor id="table">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      Quick comparison table
                    </h2>
                  </Anchor>

                  <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-sm">
                      <thead className="text-left">
                        <tr className="border-b bg-slate-50">
                          <th className="px-4 py-3 font-semibold text-slate-900">City</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Best use</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Also good for</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Best months</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Cost level</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableRows.map(([city, h, a, m, c]) => (
                          <tr key={city} className="border-b last:border-b-0">
                            <td className="px-4 py-3 font-semibold text-slate-900">{city}</td>
                            <td className="px-4 py-3 text-slate-700">{h}</td>
                            <td className="px-4 py-3 text-slate-700">{a}</td>
                            <td className="px-4 py-3 text-slate-700">{m}</td>
                            <td className="px-4 py-3 text-slate-700">{c}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {citySections.map((c) => (
                  <section key={c.id}>
                    <Anchor id={c.id}>
                      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        {c.title}
                      </h2>
                    </Anchor>

                    <div className="mt-4 grid gap-4 md:grid-cols-[1fr_320px]">
                      <div>
                        <p className="text-slate-700">{c.intro}</p>
                        {c.body.map((p) => (
                          <p key={p} className="mt-3 text-slate-700">
                            {p}
                          </p>
                        ))}

                        {c.blocks.map((b) => (
                          <MicroBlock key={b.label} label={b.label} text={b.text} />
                        ))}
                      </div>

                      <Card className="overflow-hidden p-0 h-fit">
                        <div className="relative aspect-[16/11] bg-slate-100">
                          <Image
                            src={c.image}
                            alt={`${c.title} (winter planning context)`}
                            fill
                            className="object-cover"
                            sizes="320px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                        </div>
                        <div className="p-5">
                          <p className="text-sm text-slate-700">
                            Choose this stop if it strengthens the plan, not because it looks good on a map.
                          </p>
                        </div>
                      </Card>
                    </div>
                  </section>
                ))}

                <section>
                  <Anchor id="faq">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">FAQ</h2>
                  </Anchor>

                  <div className="mt-5 grid gap-4">
                    {faqs.map((f) => (
                      <Card key={f.q} className="p-6">
                        <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
                        <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                      </Card>
                    ))}
                  </div>

                  <p className="mt-6 text-xs text-slate-500">
                    <strong>Last verified:</strong> {lastVerified}
                  </p>
                </section>

                {/* Bottom CTA */}
                <Card className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    Ready to plan the north properly?
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm text-slate-700">
                    Use the practical pages so your “nice idea” doesn’t collapse into avoidable logistics pain.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <CtaButton href="/lapland-tours" variant="primary">
                      Lapland tours →
                    </CtaButton>
                    <CtaButton href="/getting-around-finland" variant="outline">
                      Getting around Finland →
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
                </Card>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-4">
              <Card className="p-6">
                <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">Best for:</span> winter travellers who plan
                  </p>
                  <p>
                    <span className="font-semibold">Avoid if:</span> you hate buffers and tight daylight windows
                  </p>
                  <p>
                    <span className="font-semibold">Planning style:</span> cities for structure, north for payoff
                  </p>
                  <p>
                    <span className="font-semibold">Last verified:</span> {lastVerified}
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-base font-semibold text-slate-900">Start here if booking</h2>
                <p className="mt-2 text-sm text-slate-700">
                  If one decision breaks the trip, treat it as a decision point, not a guess.
                </p>
                <div className="mt-4 space-y-2">
                  <CtaButton href="/lapland-tours" variant="primary" className="w-full">
                    Lapland tours hub →
                  </CtaButton>
                  <CtaButton href="/getting-around-finland" variant="outline" className="w-full">
                    Getting around Finland →
                  </CtaButton>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={images.sidebar}
                    alt="Winter planning: calm structure before going north"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-700">
                    This page is a routing hub: city contrast first, Lapland intensity when the plan can survive.
                  </p>
                  <div className="mt-4 text-sm">
                    <Link href="/blog" className="font-semibold hover:underline text-slate-700">
                      Blog index →
                    </Link>
                    <span className="mx-2 text-slate-300">•</span>
                    <Link href="/getting-around-finland" className="font-semibold hover:underline text-slate-700">
                      Getting around Finland →
                    </Link>
                    <span className="mx-2 text-slate-300">•</span>
                    <Link href="/lapland-tours" className="font-semibold hover:underline text-slate-700">
                      Lapland tours →
                    </Link>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </Section>
      </div>
    </div>
  );
}
