import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Helsinki Travel Guide 2026: Winter Base & Lapland Connections",
  description:
    "Helsinki Travel Guide 2026 for winter-focused travellers. Smart Helsinki to Lapland connections, saunas, realistic itineraries, and calm winter logic.",
  openGraph: {
    title: "Helsinki Travel Guide 2026: Winter Base & Lapland Connections",
    description:
      "Smart Helsinki to Lapland connections, saunas, realistic itineraries, and calm winter logic.",
    images: ["/images/og/og-helsinki-winter-guide-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Travel Guide 2026: Winter Base & Lapland Connections",
    description:
      "Smart Helsinki to Lapland connections, saunas, realistic itineraries, and calm winter logic.",
    images: ["/images/og/og-helsinki-winter-guide-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const visuals = [
  {
    title: "Sauna reset",
    body: "In winter, sauna is infrastructure. Use it like locals do.",
    image: "/images/blog/helsinki-winter-guide-2026/sauna.jpg",
  },
  {
    title: "Suomenlinna in winter",
    body: "Stone, wind, silence. Go early, dress properly, leave before dark if needed.",
    image: "/images/blog/helsinki-winter-guide-2026/suomenlinna.jpg",
  },
  {
    title: "Lapland connections",
    body: "Overnight train or flight. Choose the option that keeps you functional.",
    image: "/images/blog/helsinki-winter-guide-2026/connection.jpg",
  },
  {
    title: "Winter walking logic",
    body: "Follow official routes once ice conditions allow. Don’t improvise on frozen water.",
    image: "/images/blog/helsinki-winter-guide-2026/winter-walk.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Helsinki Travel Guide 2026: Day Trips to Lapland, Snowy Survival & Smart Connections"
        subtitle="Use Helsinki as an advantage, not just a stopover. A winter base done properly."
        imageSrc="/images/og/og-helsinki-winter-guide-2026.jpg"
      />

      <div className="relative">
        {/* subtle background texture */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* top bar */}
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
              <Link className="hover:text-slate-900" href="/getting-around-finland">
                Getting around Finland
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
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Winter base logic. Fewer bad assumptions.
              </div>

              {/* header image inside page */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/helsinki-winter-guide-2026/hero.jpg"
                    alt="Helsinki winter streets and harbour mood"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
              </div>

              {/* visual cards */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {visuals.map((c) => (
                  <Card key={c.title} className="overflow-hidden p-0">
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 520px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
                      <p className="mt-2 text-sm text-slate-700">{c.body}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* YOUR CONTENT (UNCHANGED) */}
              <article className="prose prose-slate max-w-none px-0 py-10 prose-headings:tracking-tight prose-a:text-slate-900">
                <p className="text-sm text-slate-600">
                  <strong>Primary keywords:</strong> Helsinki to Lapland tours, Helsinki winter itinerary, Helsinki Finland
                  travel guide 2026
                </p>

                <hr />

                <Anchor id="intro" />
                <h2>Introduction: the blizzard that sold me on Helsinki</h2>
                <p>
                  I did not plan to fall for Helsinki. I planned to pass through it. One night, maybe two. Then north.
                  Lapland. Aurora. Huskies. End of story.
                </p>
                <p>
                  Helsinki had other ideas. A February blizzard shut down ferries, delayed trains, and turned the city into
                  a wall of sideways snow. I was cold, underdressed, and quietly annoyed.
                </p>
                <p>
                  Then I found a public sauna hidden behind an unremarkable concrete building near the harbour. No branding.
                  No performance. Just steam, locals, and calm. Two hours later I walked back into the storm warm, reset,
                  and oddly convinced that this city understood winter better than I did.
                </p>
                <p>
                  This guide is for travellers who want a smart winter base. City comfort without giving up access to real
                  Arctic experiences. Helsinki works best when you stop treating it as a checkbox and start using it as
                  infrastructure.
                </p>

                <hr />

                <Anchor id="character" />
                <h2>Helsinki’s winter character: Baltic city, Arctic mindset</h2>
                <p>
                  Helsinki does not try to impress you in winter. It functions. Trams keep running. Streets get cleared.
                  People adjust instead of complaining. The city is compact, walkable, and designed to absorb cold rather
                  than fight it.
                </p>
                <p>
                  Architecture matters here. Modernist buildings trap heat efficiently. Cafés feel like shelters. Libraries
                  feel like sanctuaries. The frozen sea is always nearby, reminding you that nature is part of daily life,
                  not a backdrop.
                </p>
                <p>
                  For travellers used to chaos, Helsinki can feel expensive at first glance. Then you realise you are paying
                  for reliability, not noise.
                </p>

                <hr />

                <Anchor id="gateway" />
                <h2>Helsinki as a Lapland gateway</h2>
                <p>
                  Flying directly north is not always the smartest move. Using Helsinki as a base gives you flexibility, and
                  flexibility is the currency of winter travel.
                </p>

                <Anchor id="overnight-trains" />
                <h3>Overnight trains north</h3>
                <p>
                  The overnight train to Lapland is not a compromise. It is one of the most efficient ways to move north in
                  winter. You sleep while distance disappears and arrive functional instead of stressed.
                </p>

                <Anchor id="flying-north" />
                <h3>Flying north</h3>
                <p>
                  Flights from Helsinki to Lapland are frequent in winter and generally reliable. They make sense for short
                  trips or tight schedules, but remember that airport time and transfers add friction.
                </p>

                <Anchor id="structured-connections" />
                <h3>Structured connections</h3>
                <p>
                  Combining Helsinki stays with pre-planned Lapland activities reduces moving parts. One booking logic, fewer
                  timing mistakes, and less improvisation under pressure.
                </p>

                <hr />

                <Anchor id="experiences" />
                <h2>Winter experiences in Helsinki that actually matter</h2>

                <Anchor id="saunas" />
                <h3>Saunas</h3>
                <p>
                  Sauna is winter infrastructure. Skip hotel saunas if you can and use public or semi-public ones where locals
                  go. This is where the city resets.
                </p>

                <Anchor id="suomenlinna" />
                <h3>Suomenlinna in winter</h3>
                <p>
                  The ferry runs year-round. In winter the island is quieter, sharper, and more atmospheric. Snow, wind, stone,
                  and silence. Go early, dress properly, leave before dark if conditions worsen.
                </p>

                <Anchor id="winter-walking" />
                <h3>Winter walking routes</h3>
                <p>
                  Designated winter paths appear once ice conditions allow. Follow them. Do not improvise on frozen water.
                </p>

                <hr />

                <Anchor id="santapark" />
                <h2>SantaPark as a day-trip decision</h2>
                <p>
                  SantaPark is in Lapland, not Helsinki. For families with limited time, a fly-in day trip can work. For adults
                  only, staying longer in Lapland usually delivers more value.
                </p>
                <p>This is a logistics decision, not a fantasy one. Shortcuts trade depth for convenience.</p>

                <hr />

                <Anchor id="itinerary" />
                <h2>Helsinki winter itinerary (4–6 days)</h2>
                <ul>
                  <li>
                    <strong>Day 1:</strong> Arrival, light walking, sauna.
                  </li>
                  <li>
                    <strong>Day 2:</strong> Suomenlinna and museums, evening outside-city aurora attempt if conditions allow.
                  </li>
                  <li>
                    <strong>Day 3:</strong> Transfer north overnight or fly.
                  </li>
                  <li>
                    <strong>Day 4–5:</strong> Lapland activities.
                  </li>
                  <li>
                    <strong>Day 6:</strong> Return south, final sauna, departure.
                  </li>
                </ul>

                <hr />

                <Anchor id="budget" />
                <h2>Budget reality: Helsinki vs Lapland</h2>
                <p>
                  Helsinki is cheaper for daily living. Lapland is where experiences drive costs. Using Helsinki as a base helps
                  control spending without diluting the trip.
                </p>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion</h2>
                <p>
                  Helsinki is not the destination. It is the advantage. Use it intelligently and your Lapland trip becomes
                  calmer, more efficient, and more resilient to winter reality.
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want a calm trip instead of “we’ll figure it out”?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Keep buffers, align transport with activity start times, and treat Helsinki as infrastructure.
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

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 h-fit space-y-4">
              <Card className="p-6">
                <h2 className="text-base font-semibold text-slate-900">On this page</h2>
                <div className="mt-3 grid gap-2 text-sm text-slate-700">
                  <a className="hover:underline" href="#intro">
                    Introduction
                  </a>
                  <a className="hover:underline" href="#character">
                    Winter character
                  </a>
                  <a className="hover:underline" href="#gateway">
                    Lapland gateway
                  </a>
                  <a className="hover:underline" href="#experiences">
                    Winter experiences
                  </a>
                  <a className="hover:underline" href="#itinerary">
                    4–6 day itinerary
                  </a>
                  <a className="hover:underline" href="#budget">
                    Budget reality
                  </a>
                  <a className="hover:underline" href="#conclusion">
                    Conclusion
                  </a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/helsinki-winter-guide-2026/sidebar.jpg"
                    alt="Helsinki winter calm: harbour, tram, and snow"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Quick rule</p>
                  <p className="mt-2 text-sm text-slate-700">
                    If your first day is messy, your whole winter trip gets fragile.
                  </p>
                  <div className="mt-4">
                    <CtaButton href="/get-help" variant="success" className="w-full">
                      Get help →
                    </CtaButton>
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
