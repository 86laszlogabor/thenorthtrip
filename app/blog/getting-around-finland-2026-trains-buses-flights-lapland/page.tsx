import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
  description:
    "Finland transport guide 2026 made simple: Helsinki to Rovaniemi train, Lapland night trains, domestic flights, buses, costs, and decision-first booking tips.",
  openGraph: {
    title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
    description:
      "Helsinki to Rovaniemi train options, Lapland night trains, domestic flights, buses, and booking decisions that hold up in winter.",
    images: ["/images/og/og-getting-around-finland-2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Around Finland 2026: Trains, Buses & Flights to Lapland",
    description:
      "Night trains, flights, buses, and the winter booking assumptions that actually matter.",
    images: ["/images/og/og-getting-around-finland-2.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Best overall in winter",
    body: "Night trains: travel + sleep in one block, and you arrive functional.",
    image: "/images/blog/transport/night-train-cabin.jpg",
  },
  {
    title: "Best for short trips",
    body: "Flights compress distance, but airport friction and luggage add-ons matter.",
    image: "/images/blog/transport/lapland-flight-snowy-runway.jpg",
  },
  {
    title: "Best as a backup",
    body: "Buses fill gaps and secondary legs, but treat them as travel days.",
    image: "/images/blog/transport/finland-bus-winter.jpg",
  },
  {
    title: "Best planning rule",
    body: "Align arrivals with tour start times. Winter punishes guessing.",
    image: "/images/blog/transport/meeting-point-winter.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Getting Around Finland 2026: Trains, Buses & Flights to Lapland (What Actually Works)"
        subtitle="Transport in Finland isn’t hard. Bad assumptions are."
        imageSrc="/images/og/og-getting-around-finland-2.jpg"
      />

      <div className="relative">
        {/* subtle background texture + right-side decor */}
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
                Night trains · flights · buses · winter planning
              </div>

              {/* in-page image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/transport/getting-around-finland-trains-flights-hero.jpg"
                    alt="Winter transport choices in Finland: trains, flights, and long distances"
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
                <p className="text-sm text-slate-600">
                  <strong>Primary keywords:</strong> Helsinki to Rovaniemi train, Lapland Night Train Thenortrip, Finland domestic flights, Finland transport guide 2026
                </p>

                <hr />

                <Anchor id="intro" />
                <h2>Introduction: the night train that ruined flying for me</h2>
                <p>
                  I used to think overnight trains were a compromise. I booked one because flights were expensive, my schedule
                  was tight, and I told myself I’d “just survive” the journey.
                </p>
                <p>
                  Then I closed the door of a sleeper cabin, fell asleep immediately, and woke up north of the Arctic Circle
                  rested enough to function like a normal human. That’s when flying stopped feeling “obviously superior” and
                  started feeling like a tool you only use when it actually solves a problem.
                </p>
                <p>
                  Finland is not a country where transport is something you tolerate. If you do it right, the journey becomes
                  part of the experience: trains through frozen forests, night routes that save hotel nights, flights that
                  compress distance, and buses that quietly fill the gaps.
                </p>
                <p>
                  This guide is for winter trips in 2026, especially Lapland-bound travellers starting in Helsinki. We’ll break
                  down <strong>Helsinki to Rovaniemi train</strong> options, the real role of <strong>Finland domestic flights</strong>,
                  when buses make sense, and how to align arrival times with Lapland tours without losing time or sanity.
                </p>

                <hr />

                <Anchor id="logic" />
                <h2>The big picture: Finland’s winter transport logic</h2>
                <p>
                  Finland is bigger than it looks on a map. Distances are real, winter is honest, and infrastructure is built to
                  handle both. Your decision should optimize three things, in this order:
                </p>
                <ol>
                  <li><strong>Predictability</strong> (winter punishes tight connections)</li>
                  <li><strong>Energy</strong> (sleep quality becomes a real resource)</li>
                  <li><strong>Time</strong> (speed matters, but not if you arrive wrecked)</li>
                </ol>
                <p>
                  Speed alone is where first-time visitors miscalculate. The “fastest” option on paper can be slower in practice
                  once you add airport time, transfers, baggage rules, and fatigue.
                </p>

                <hr />

                <Anchor id="trains" />
                <h2>Trains: why they dominate winter travel</h2>

                <h3>Helsinki to Rovaniemi train: the backbone route</h3>
                <p>
                  The Helsinki–Rovaniemi route is the core northbound line for a lot of Lapland trips. Day trains are scenic and
                  straightforward, but they eat up your daylight and often your first usable Lapland day.
                </p>

                <h3>Lapland night trains: the planning advantage</h3>
                <p>
                  Night trains are where Finland gets unfair to planes. You board in the evening and wake up in the north ready
                  to do things that require actual energy (like being outside for hours in real cold).
                </p>
                <p>
                  <strong>Lapland Night Train “Thenortrip logic”:</strong> travel + accommodation in one block. You shift effort
                  from “moving and waiting” into “sleeping and arriving functional.”
                </p>
                <p>
                  <strong>Booking reality:</strong> cabins can sell out fast in peak winter. If your dates are fixed, book early.
                  If your dates are flexible, you can sometimes find better value.
                </p>

                <h3>Car transport by train</h3>
                <p>
                  On some routes, you can load a car onto the train. It’s a niche move, but for certain road-trip styles it’s a
                  genuine cheat code: avoid a long winter drive north, still have a vehicle in Lapland.
                </p>

                <hr />

                <Anchor id="flights" />
                <h2>Domestic flights: fast, efficient, not always smarter</h2>
                <p>
                  Flights exist for one reason: distance. Helsinki to Lapland airports is quick in the air, but “quick” becomes
                  less dramatic once you include security, boarding, and transfers on both ends.
                </p>

                <h3>When flights make sense</h3>
                <ul>
                  <li>You have a short trip (think 3–5 days)</li>
                  <li>You’re connecting from an international arrival and want to go straight north</li>
                  <li>You found a fare that stays reasonable after baggage and seat add-ons</li>
                  <li>Your tours start later in the day (afternoon alignment is easier)</li>
                </ul>

                <h3>What people forget</h3>
                <ul>
                  <li><strong>Baggage rules:</strong> winter gear is bulky and airlines price that reality.</li>
                  <li><strong>Last-mile transfers:</strong> landing isn’t “arriving.”</li>
                  <li><strong>Weather sensitivity:</strong> Finland handles snow well, but flights are still more exposed than rail.</li>
                </ul>

                <hr />

                <Anchor id="buses" />
                <h2>Buses: the quiet backup plan</h2>
                <p>
                  Buses rarely headline travel content because they’re not romantic. They’re useful. They cover routes trains
                  don’t, they can be good value, and they work best for secondary legs between regional towns.
                </p>
                <p>
                  The tradeoff is time and sleep quality. On long winter legs, bus travel can leave you functional, but not fresh.
                  Plan your first “serious activity day” accordingly.
                </p>

                <hr />

                <Anchor id="verify" />
                <h2>Offer-checklist: what to verify before you book</h2>
                <p>
                  Finland trips don’t collapse loudly. They fail quietly: a late arrival, a missed pickup, a no-refund ticket, a
                  tour start you can’t reach. Before paying, verify:
                </p>
                <ul>
                  <li><strong>Arrival time vs tour start times</strong> (don’t guess)</li>
                  <li><strong>Weather buffer</strong> (winter vetoes at least one plan)</li>
                  <li><strong>Luggage limits</strong> (especially for flights)</li>
                  <li><strong>Connection realism</strong> (same-day chains are fragile)</li>
                  <li><strong>Refund/change rules</strong> (snow doesn’t care about your ticket type)</li>
                </ul>

                <hr />

                <Anchor id="table" />
                <h2>Train vs flight vs bus: decision table</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Mode</th>
                      <th>Best for</th>
                      <th>Energy outcome</th>
                      <th>Winter predictability</th>
                      <th>Main risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Night train</td>
                      <td>Balanced trips, comfort-first planning</td>
                      <td>High</td>
                      <td>Very strong</td>
                      <td>Cabins sell out</td>
                    </tr>
                    <tr>
                      <td>Day train</td>
                      <td>Scenery + calmer pace</td>
                      <td>Medium</td>
                      <td>Very strong</td>
                      <td>Consumes daylight</td>
                    </tr>
                    <tr>
                      <td>Flight</td>
                      <td>Short trips, speed, tight schedules</td>
                      <td>Medium</td>
                      <td>Good</td>
                      <td>Airport friction + baggage</td>
                    </tr>
                    <tr>
                      <td>Bus</td>
                      <td>Budget, secondary routes</td>
                      <td>Low–medium</td>
                      <td>Good</td>
                      <td>Fatigue + time cost</td>
                    </tr>
                  </tbody>
                </table>

                <hr />

                <Anchor id="align" />
                <h2>Connecting transport with Lapland tours</h2>
                <p>
                  This is the biggest efficiency leak: people book transport and tours separately, then discover the start times
                  don’t align.
                </p>
                <ul>
                  <li><strong>Night train</strong> pairs well with morning activities.</li>
                  <li><strong>Flights</strong> often align better with afternoon starts (or require an overnight buffer).</li>
                  <li><strong>Bus legs</strong> should usually be treated as “travel days,” not “activity days.”</li>
                </ul>
                <p>
                  A clean flow looks like: Helsinki → night train → morning arrival → activity day → sauna → aurora attempt.
                  Minimal friction, maximum value.
                </p>

                <hr />

                <Anchor id="mistakes" />
                <h2>Common mistakes first-time Lapland travellers make</h2>
                <ul>
                  <li>Booking flights without checking tour meeting times</li>
                  <li>Ignoring baggage limits and winter bulk</li>
                  <li>Overbooking connections in one day</li>
                  <li>Assuming “fast” means “easy”</li>
                  <li>Planning without buffers</li>
                </ul>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion: in Finland, transport is strategy</h2>
                <p>
                  Getting around Finland in winter is not about chasing the fastest option. It’s about choosing the one that
                  leaves you functional, rested, and on time for the experiences you actually came for.
                </p>
                <p>
                  Night trains are not nostalgia. They’re an advantage. Flights are tools, not defaults. Buses are underrated.
                  Plan quietly, verify assumptions, and winter becomes calmer instead of chaotic.
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want fewer transport surprises and better timing?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Start with a stable base and align arrivals with tour start times before paying for anything.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="/offer-checklist" variant="primary">
                    Open offer checklist →
                  </CtaButton>
                  <CtaButton href="/lapland-tours" variant="outline">
                    Lapland tours →
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
                  <a className="hover:underline" href="#intro">Introduction</a>
                  <a className="hover:underline" href="#logic">Big picture logic</a>
                  <a className="hover:underline" href="#trains">Trains</a>
                  <a className="hover:underline" href="#flights">Domestic flights</a>
                  <a className="hover:underline" href="#buses">Buses</a>
                  <a className="hover:underline" href="#verify">What to verify</a>
                  <a className="hover:underline" href="#table">Decision table</a>
                  <a className="hover:underline" href="#align">Aligning with tours</a>
                  <a className="hover:underline" href="#mistakes">Common mistakes</a>
                  <a className="hover:underline" href="#conclusion">Conclusion</a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/transport/sidebar-sleeper-train.jpg"
                    alt="Sleeper train cabin in winter"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Practical note</p>
                  <p className="mt-2 text-sm text-slate-700">
                    Winter scheduling is about buffers. If the plan has zero slack, it’s not a plan, it’s a wish.
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
