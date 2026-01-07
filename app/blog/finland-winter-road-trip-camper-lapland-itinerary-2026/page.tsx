import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Finland Winter Road Trip 2026: Camper + Lapland Itinerary",
  description:
    "A decision-first winter camper road trip guide for Finland in 2026: Helsinki pick-up, Lapland routing, snow driving, realistic costs, and Thenortrip-style tour integration.",
  openGraph: {
    title: "Finland Winter Road Trip 2026: Camper + Lapland Itinerary",
    description:
      "Winter camper reality, Helsinki→Rovaniemi loop logic, snow chain basics, and how to combine a camper base with high-impact Lapland tours.",
    images: ["/images/og/og-finland-winter-camper-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Route logic",
    body: "Short driving days. Two-night bases. Buffers. No hero drives.",
    image: "/images/blog/camper/route-logic.jpg",
  },
  {
    title: "Camper reality",
    body: "Heating, condensation, overnight strategy, and not blocking snow clearance.",
    image: "/images/blog/camper/camper-reality.jpg",
  },
  {
    title: "Lapland depth",
    body: "Use guided tours for peak experiences. Keep the rest flexible.",
    image: "/images/blog/camper/lapland-depth.jpg",
  },
  {
    title: "Winter driving",
    body: "Physics wins. Slow down, increase distance, stay conservative in darkness.",
    image: "/images/blog/camper/winter-driving.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Finland Road Trip 2026: Camper Rental + Lapland Thenortrip Itinerary"
        subtitle="Winter camper freedom without chaos. Realistic planning for cold, darkness, and decisions that hold up."
        imageSrc="/images/og/og-finland-winter-camper-2026.jpg"
      />

      {/* subtle background texture + optional decor */}
      <div className="relative">
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
              <Link className="hover:text-slate-900" href="/camper-rental-finland">
                Camper rental Finland
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
                Winter road trip + camper + Lapland routing
              </div>

              {/* in-article feature image (doesn’t replace your content, just supports it) */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/camper/finland-winter-roadtrip-hero.jpg"
                    alt="Finland winter road trip camper in snowy Lapland"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                    priority={false}
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
                  <strong>Target keywords:</strong> Finland road trip 2026, winter camper rental Finland, Helsinki camper pick-up,
                  Lapland camper itinerary, snow chain tips Finland, Thenortrip Lapland tours
                </p>

                <hr />

                <Anchor id="why" />
                <h2>Why a winter camper road trip in Finland is not insane (just misunderstood)</h2>
                <p>
                  Winter. Camper. Finland. Most people hear that and immediately picture a slow-motion disaster involving ice,
                  darkness, and regret. And sure, if you plan it like a summer road trip with cute expectations, you’ll earn that
                  disaster.
                </p>
                <p>
                  But Finland is also one of the most winter-capable countries in Europe. Not because winter is “easy,” but
                  because roads are maintained, drivers expect ice and behave like adults, and infrastructure is built for snow
                  and darkness. What fails trips is not Finland. It’s travellers arriving with the wrong mental model.
                </p>

                <h3>What a camper gives you in winter</h3>
                <ul>
                  <li>Location freedom without packing/unpacking every night</li>
                  <li>Aurora flexibility without chasing hotel availability</li>
                  <li>Cost control once you’re north</li>
                  <li>Time efficiency between destinations</li>
                  <li>A front-row seat to landscapes trains and planes politely ignore</li>
                </ul>

                <h3>What it does not give you</h3>
                <ul>
                  <li>Luxury</li>
                  <li>Speed</li>
                  <li>Forgiveness for bad decisions</li>
                </ul>

                <hr />

                <Anchor id="costs" />
                <h2>Camper rental Finland winter: what “€120/day” really means</h2>
                <p>
                  You’ll see winter-capable campers marketed around “€X per day.” Sometimes that’s accurate for specific dates
                  and vehicle classes. What matters is what’s included and what quietly costs extra.
                </p>

                <h3>What “winter-ready” should include</h3>
                <ul>
                  <li>Insulation that’s actually designed for cold</li>
                  <li>A heating system you can run safely and consistently</li>
                  <li>Winter tyres (and clarity on studded vs friction, depending on the vehicle and season)</li>
                  <li>Basic kitchen setup that won’t hate you at -15°C</li>
                  <li>Clear instructions for water systems in freezing conditions</li>
                </ul>

                <h3>What often costs extra</h3>
                <ul>
                  <li>Bedding packages</li>
                  <li>Insurance excess reduction</li>
                  <li>Cleaning fees if you return it like a crime scene</li>
                  <li>One-way drop fees</li>
                  <li>Power hookups / winter camping access</li>
                </ul>

                <p>
                  <strong>Planning rule:</strong> build a realistic “rolling cost” band for your trip (rental + fuel + overnight
                  strategy), then decide where you want to spend extra: usually on one or two high-impact Lapland tours.
                </p>

                <hr />

                <Anchor id="camper-vs-flights" />
                <h2>Camper vs flights: the uncomfortable math</h2>
                <p>
                  If you’re doing this for the right reasons, the camper is a tool: mobility + accommodation + aurora
                  flexibility. Flights + hotels can be simpler, but less elastic. Here’s the decision table you actually need:
                </p>

                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Camper road trip (7 days)</th>
                      <th>Flights + hotels (7 days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Accommodation cost</td>
                      <td>Built-in (with tradeoffs)</td>
                      <td>Often the main cost driver</td>
                    </tr>
                    <tr>
                      <td>Aurora mobility</td>
                      <td>Excellent (you move with conditions)</td>
                      <td>Depends on where you stay</td>
                    </tr>
                    <tr>
                      <td>Stress source</td>
                      <td>Driving + cold systems</td>
                      <td>Transfers + fixed schedules</td>
                    </tr>
                    <tr>
                      <td>Flexibility value</td>
                      <td>Very high</td>
                      <td>Limited</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  This is why the Thenortrip + camper combo works. You don’t pay hotels, tours, and transfers all at once. You
                  pay once for mobility, then selectively for peak experiences.
                </p>

                <hr />

                <Anchor id="reality" />
                <h2>Winter camper reality check (read this before you romanticise)</h2>
                <h3>The good</h3>
                <ul>
                  <li>Silence that feels illegal</li>
                  <li>Waking up in forests, frozen lakes, Arctic light</li>
                  <li>Aurora chances without relocating your entire life</li>
                  <li>Sauna stops that reset your brain</li>
                  <li>No packing, no checkout times, no rushing</li>
                </ul>

                <h3>The annoying</h3>
                <ul>
                  <li>Dressing and undressing constantly</li>
                  <li>Managing moisture and condensation</li>
                  <li>Planning where you can safely park overnight</li>
                  <li>Slower driving days than Google Maps promises</li>
                  <li>At least one moment of “why did we do this?”</li>
                </ul>

                <p>
                  If that list sounds acceptable, continue. If it sounds like punishment, flights are a wonderful invention.
                </p>

                <hr />

                <Anchor id="chains" />
                <h2>Snow chain tips (this is not optional reading)</h2>
                <p>
                  Finland is winter-capable, but your vehicle still lives under the laws of physics. Snow chains are not always
                  required, but understanding them is useful when conditions get ugly.
                </p>

                <h3>When you actually need them</h3>
                <ul>
                  <li>Icy inclines</li>
                  <li>Remote roads after heavy snowfall</li>
                  <li>Compacted-ice parking areas</li>
                  <li>Campsites with slick entry/exit zones</li>
                </ul>

                <h3>Rules that matter</h3>
                <ul>
                  <li>Practice installing them before you need them</li>
                  <li>Chains go on drive wheels</li>
                  <li>Don’t drive fast with chains</li>
                  <li>Remove them when you’re back on cleared roads</li>
                </ul>

                <p>
                  <strong>Pro tip:</strong> carry thick gloves or a kneeling pad. Installing chains kneeling on ice is a
                  personality test you didn’t ask for.
                </p>

                <hr />

                <Anchor id="logic" />
                <h2>Lapland road trip logic: how to think, not just where to go</h2>
                <p>
                  A winter route should be built around daylight, fuel spacing, and recovery days. This is not a race north.
                  It’s a loop that tightens as you go.
                </p>

                <h3>Build your plan around</h3>
                <ul>
                  <li>Shorter driving windows (daylight matters)</li>
                  <li>Overnight options (open winter sites are fewer)</li>
                  <li>Aurora “attempt nights” (more than one)</li>
                  <li>Buffer time for weather vetoes</li>
                </ul>

                <hr />

                <Anchor id="itinerary" />
                <h2>7-day Helsinki → Rovaniemi winter camper loop (tested logic)</h2>

                <h3>Day 1: Helsinki → Lahti / Jyväskylä area</h3>
                <ul>
                  <li>Pick up camper near Helsinki</li>
                  <li>Grocery run (do not skip)</li>
                  <li>Short drive north, early night</li>
                  <li>Goal: learn your camper systems while you still have options</li>
                </ul>

                <h3>Day 2: Jyväskylä → Oulu region</h3>
                <ul>
                  <li>Longer driving day, early start</li>
                  <li>Warm meal stops, not “cold snack heroism”</li>
                  <li>Overnight near Oulu for services and stability</li>
                </ul>

                <h3>Day 3: Oulu → Rovaniemi</h3>
                <ul>
                  <li>Arrive Lapland without exhausting yourself</li>
                  <li>Restock supplies</li>
                  <li>Choose a dark-sky-friendly overnight spot (when practical)</li>
                </ul>

                <h3>Day 4: Rovaniemi base day (Thenortrip focus)</h3>
                <ul>
                  <li>Park the camper</li>
                  <li>Do one high-impact guided tour: huskies or aurora hunt</li>
                  <li>Let professionals handle the complex part for a day</li>
                </ul>

                <h3>Day 5: Rovaniemi → Levi / Muonio direction</h3>
                <ul>
                  <li>Short scenic drive</li>
                  <li>Less city, more wilderness</li>
                  <li>Evening: sauna. Mandatory. Non-negotiable.</li>
                </ul>

                <h3>Day 6: Levi area exploration or slow return</h3>
                <p>
                  Choose based on conditions, not vibes. If skies look promising, stay. If weather turns, begin the return in
                  stages.
                </p>

                <h3>Day 7: Return south in stages</h3>
                <p>
                  Don’t attempt Levi → Helsinki in one winter day unless you enjoy punishment. Break it sensibly, return the
                  camper clean-ish, then sleep in a real bed like a hero.
                </p>

                <hr />

                <Anchor id="savings" />
                <h2>Where the Thenortrip + camper combo actually saves money</h2>
                <p>
                  This is the key: you use the camper for transport + accommodation + aurora flexibility. You use Thenortrip-style
                  tours for the peak experiences where guides genuinely add value:
                </p>
                <ul>
                  <li>Huskies</li>
                  <li>Snowmobiles</li>
                  <li>Ice hotel nights</li>
                  <li>Structured aurora hunts</li>
                </ul>
                <p>
                  You’re not paying hotels <em>and</em> tours <em>and</em> transfers on the same day. You’re paying once for
                  mobility, then selectively for depth.
                </p>

                <hr />

                <Anchor id="overnight" />
                <h2>Parking and overnighting in winter: rules that keep you out of trouble</h2>
                <ul>
                  <li>Overnighting is not “anything goes.” Respect signage and private property.</li>
                  <li>Winter means fewer open campsites, so verify where you can use services.</li>
                  <li>Never block snow clearance routes. Ever. That’s how you create enemies.</li>
                  <li>Prioritise safe, legal stops over “perfect photos.”</li>
                </ul>

                <hr />

                <Anchor id="driving" />
                <h2>Driving tips that keep you sane (and alive)</h2>
                <ul>
                  <li>Drive slower than your ego wants.</li>
                  <li>Increase following distance dramatically.</li>
                  <li>Brake gently. Use engine braking when possible.</li>
                  <li>Accept shorter driving days. You’re not proving anything.</li>
                  <li>Darkness is normal. Trust your lights and stay conservative.</li>
                </ul>

                <hr />

                <Anchor id="fit" />
                <h2>Is this trip right for you?</h2>
                <h3>Say yes if</h3>
                <ul>
                  <li>You value freedom over luxury</li>
                  <li>You’re comfortable with planning and cold</li>
                  <li>You want Lapland without hotel hopping</li>
                  <li>You prefer quiet to crowds</li>
                </ul>

                <h3>Say no if</h3>
                <ul>
                  <li>You hate driving</li>
                  <li>You need constant warmth and convenience</li>
                  <li>You want minute-by-minute scheduling</li>
                  <li>You panic when plans change</li>
                </ul>

                <hr />

                <Anchor id="final" />
                <h2>Final thoughts: winter camper trips reward calm, not bravery</h2>
                <p>
                  A Finland winter road trip is not about conquering nature. It’s about moving through it without being a
                  nuisance. The camper gives autonomy. Lapland gives perspective. Thenortrip-style tours give depth without
                  complexity.
                </p>
                <p>
                  Cold hands. Clear head. Northern sky. That’s the deal.
                </p>

                <hr />

                <p className="text-sm text-slate-600">
                  <strong>Internal links:</strong>{" "}
                  <a href="/blog/lapland-tours-2026">Lapland Tours 2026</a> ·{" "}
                  <a href="/blog/rovaniemi-unveiled-lapland-winter-guide-2026">Rovaniemi Winter Guide 2026</a> ·{" "}
                  <a href="/blog/helsinki-winter-guide-2026">Helsinki Winter Guide 2026</a>
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA (separate from your article content) */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want to book the key parts without overthinking?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Use the practical pages and add tours only where they genuinely increase quality and reduce friction.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="/camper-rental-finland" variant="primary">
                    Camper rental Finland →
                  </CtaButton>
                  <CtaButton href="/lapland-tours" variant="outline">
                    Lapland tours →
                  </CtaButton>
                  <CtaButton href="/getting-around-finland" variant="outline">
                    Getting around Finland →
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
                  <a className="hover:underline" href="#why">Why this works</a>
                  <a className="hover:underline" href="#costs">Costs</a>
                  <a className="hover:underline" href="#camper-vs-flights">Camper vs flights</a>
                  <a className="hover:underline" href="#reality">Reality check</a>
                  <a className="hover:underline" href="#chains">Snow chains</a>
                  <a className="hover:underline" href="#logic">Route logic</a>
                  <a className="hover:underline" href="#itinerary">7-day loop</a>
                  <a className="hover:underline" href="#savings">Where it saves</a>
                  <a className="hover:underline" href="#overnight">Overnight rules</a>
                  <a className="hover:underline" href="#driving">Driving tips</a>
                  <a className="hover:underline" href="#fit">Is it for you?</a>
                  <a className="hover:underline" href="#final">Final thoughts</a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/camper/sidebar-night-aurora.jpg"
                    alt="Camper under a northern sky"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Credibility note</p>
                  <p className="mt-2 text-sm text-slate-700">
                    Winter trips fail from bad assumptions, not “bad luck.” If a detail can change, verify it before paying.
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
