import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Helsinki Airport to Lapland: Transfers, Shuttles & Tours 2026",
  description:
    "How to get from Helsinki Airport to Lapland in 2026. Flights, trains, Rovaniemi airport buses, shuttles and private transfers that actually work in winter.",
  openGraph: {
    title: "Helsinki Airport to Lapland: Transfers, Shuttles & Tours 2026",
    description:
      "Flights, trains, shuttles and private transfers that actually work in winter, plus the mistakes that waste a day.",
    images: ["/images/og/og-hel-airport-to-lapland-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Airport to Lapland: Transfers, Shuttles & Tours 2026",
    description:
      "Flights, trains, shuttles and private transfers that actually work in winter, plus the mistakes that waste a day.",
    images: ["/images/og/og-hel-airport-to-lapland-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Fastest option",
    body: "Connecting flights north. Efficient, not scenic, usually the cleanest for short trips.",
    image: "/images/blog/transfers/hel-airport-connection.jpg",
  },
  {
    title: "Most balanced option",
    body: "Train + sleep. You trade one extra step for a functional arrival day in winter.",
    image: "/images/blog/transfers/night-train-cabin.jpg",
  },
  {
    title: "Lowest-friction outcome",
    body: "Packages with transfers included. You buy an outcome, not a route.",
    image: "/images/blog/transfers/lapland-tour-bus.jpg",
  },
  {
    title: "Most common mistake",
    body: "Improvising the last 10 km after planning the long journey like a military operation.",
    image: "/images/blog/transfers/arrival-last-mile.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Helsinki Airport to Lapland"
        subtitle="Transfers, shuttles and routes that work in winter."
        imageSrc="/images/og/og-hel-airport-to-lapland-2026.jpg"
      />

      <div className="relative">
        {/* background texture + soft decor */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute right-0 top-16 hidden h-[560px] w-[520px] opacity-[0.18] lg:block">
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
              <span className="font-medium">Blog</span> ·{" "}
              <span className="text-slate-500">Last verified: {lastVerified}</span>
            </div>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
              <Link className="hover:text-slate-900" href="/blog">
                Back to Blog
              </Link>
              <Link className="hover:text-slate-900" href="/offer-checklist">
                Offer checklist
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
                Winter transfer decisions that hold up
              </div>

              {/* in-page image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/transfers/helsinki-airport-winter-hero.jpg"
                    alt="Helsinki Airport in winter with travel connections toward Lapland"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
              </div>

              {/* quick cards */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {quickCards.map((c) => (
                  <Card key={c.title} className="overflow-hidden p-0">
                    <div className="relative aspect-[16/10] bg-slate-100">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 520px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
                      <p className="mt-2 text-sm text-slate-700">{c.body}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* YOUR ARTICLE CONTENT (UNCHANGED) */}
              <article className="prose prose-slate max-w-none px-0 py-10 prose-headings:tracking-tight prose-a:text-slate-900">
                <p>Airports are where Finland stops being poetic and starts being honest.</p>
                <p>
                  You land at Helsinki Airport, the doors slide open, and winter reminds you that this country does not
                  care how tired you are. At that point, one question matters more than all others:
                </p>
                <p>
                  <strong>How do I get from the airport to Lapland without wasting a day or my sanity?</strong>
                </p>
                <p>
                  This guide is about that exact problem. Transfers, shuttles, flights, trains and tour-based solutions
                  that actually work in 2026.
                </p>

                <hr />

                <Anchor id="reality-check" />
                <h2>First reality check</h2>
                <p>
                  Helsinki Airport is not Lapland. Lapland starts hundreds of kilometres north. There is no direct road
                  transfer that makes sense on arrival day unless you enjoy 10–12 hours of winter driving.
                </p>
                <p>When people search “HEL airport Lapland transfer”, they usually mean one of four things:</p>
                <ul>
                  <li>a connecting flight north</li>
                  <li>a train connection (often overnight)</li>
                  <li>a tour package with transfers included</li>
                  <li>a misunderstanding that costs a full day</li>
                </ul>

                <hr />

                <Anchor id="four-categories" />
                <h2>The four real transfer categories</h2>
                <p>Every airport-to-Lapland movement fits one of these:</p>
                <ul>
                  <li>fly north from Helsinki Airport</li>
                  <li>train north after an airport–city transfer</li>
                  <li>join a Lapland tour with transfers included</li>
                  <li>self-drive (only with staging)</li>
                </ul>

                <hr />

                <Anchor id="option-fly" />
                <h2>Option 1: Flying north (fastest and cleanest)</h2>
                <p>For most travellers, the simplest HEL airport Lapland transfer is another flight.</p>
                <p>You land, change planes, and arrive in Lapland roughly an hour later. It’s efficient, not scenic.</p>
                <p>
                  Best for short trips, families, and travellers with fixed tour schedules. Less ideal if you value
                  flexibility or travel light is not your thing.
                </p>

                <hr />

                <Anchor id="option-train" />
                <h2>Option 2: Train connections (sleep your way north)</h2>
                <p>
                  Trains are Finland’s quiet superpower. You do not board Lapland trains at the airport. You first
                  transfer into the city, then continue north.
                </p>
                <p>
                  This adds a step, but it buys you sleep and a functional arrival day, which in winter often matters
                  more than speed.
                </p>

                <hr />

                <Anchor id="option-tour" />
                <h2>Option 3: Lapland tours with transfers included</h2>
                <p>
                  Many Lapland tour packages bundle flights or trains, airport transfers in Lapland, accommodation and
                  activities.
                </p>
                <p>In these cases, “airport transfer” becomes abstract. You are buying an outcome, not a route.</p>
                <p>Best for first-timers and limited-time trips. Worst for travellers who want flexibility.</p>

                <hr />

                <Anchor id="option-drive" />
                <h2>Option 4: Self-drive from HEL (technically possible, often a mistake)</h2>
                <p>
                  Yes, you can rent a car at Helsinki Airport and drive north. Doing it immediately after landing is how
                  people discover fatigue, darkness and distance all at once.
                </p>
                <p>The correct strategy is staging: overnight near Helsinki, then drive in planned segments.</p>

                <hr />

                <Anchor id="arrival" />
                <h2>Arrival in Lapland: the second transfer problem</h2>
                <p>Getting to Lapland is only half the job. You still need to reach your accommodation.</p>

                <h3>Shared shuttles (~€75 per person)</h3>
                <p>
                  Pre-booked minibuses that drop guests at hotels or central points. Good structure, moderate waiting,
                  predictable.
                </p>

                <h3>Public airport bus</h3>
                <p>
                  Seasonal, timetable-dependent, budget-friendly. Works when it lines up. Unforgiving when it doesn’t.
                </p>

                <h3>Private transfer (~€180 per vehicle)</h3>
                <p>
                  Expensive on paper, boring in practice, perfect in winter. Especially for families, late arrivals and
                  groups.
                </p>

                <hr />

                <Anchor id="mistake" />
                <h2>Biggest winter transfer mistake</h2>
                <p>
                  People plan the long journey meticulously and then improvise the last 10 km. Always pre-book your
                  Lapland arrival transfer.
                </p>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion</h2>
                <p>Helsinki Airport to Lapland transfers are not complicated. They are structured.</p>
                <p>Choose deliberately: fast when time matters, shared when structure matters, private when comfort matters.</p>

                <p>
                  <strong>Internal links:</strong>{" "}
                  <a href="/getting-around-finland">Getting around Finland</a> •{" "}
                  <a href="/lapland-tours-finland">Lapland tours</a> •{" "}
                  <a href="/offer-checklist">Offer checklist</a>
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want the lowest-friction route for your dates?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
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
                  <a className="hover:underline" href="#reality-check">
                    First reality check
                  </a>
                  <a className="hover:underline" href="#four-categories">
                    The four transfer categories
                  </a>
                  <a className="hover:underline" href="#option-fly">
                    Option 1: Flying north
                  </a>
                  <a className="hover:underline" href="#option-train">
                    Option 2: Train connections
                  </a>
                  <a className="hover:underline" href="#option-tour">
                    Option 3: Transfers included
                  </a>
                  <a className="hover:underline" href="#option-drive">
                    Option 4: Self-drive (staged)
                  </a>
                  <a className="hover:underline" href="#arrival">
                    Arrival transfer in Lapland
                  </a>
                  <a className="hover:underline" href="#mistake">
                    Biggest winter mistake
                  </a>
                  <a className="hover:underline" href="#conclusion">
                    Conclusion
                  </a>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Planning rule</p>
                  <p className="mt-2 text-sm text-slate-700">
                    If you would be annoyed by a 45-minute delay, you need a buffer. Winter will test your confidence.
                  </p>
                  <div className="mt-4">
                    <CtaButton href="/get-help" variant="success" className="w-full">
                      Get Help
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
