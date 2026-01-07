import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Helsinki to Lapland 2026: Day Trips, Trains & Smart Connections",
  description:
    "Use Helsinki as a launch platform for Lapland in 2026: day trips that actually make sense, train vs flight logic, and timing that avoids wasted days.",
  openGraph: {
    title: "Helsinki to Lapland 2026: Day Trips, Trains & Smart Connections",
    description:
      "Day trips that make sense, train vs flight logic, and clean timing to avoid wasted winter days.",
    images: ["/images/og/og-helsinki-to-lapland-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki to Lapland 2026: Day Trips, Trains & Smart Connections",
    description:
      "Day trips that make sense, train vs flight logic, and clean timing to avoid wasted winter days.",
    images: ["/images/og/og-helsinki-to-lapland-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Best use of Helsinki",
    body: "Land, reset, verify bookings, and leave north with clean timing. Helsinki is your buffer, not your substitute.",
    image: "/images/blog/helsinki-to-lapland/helsinki-winter-harbor.jpg",
  },
  {
    title: "Day trips that actually work",
    body: "Porvoo and Nuuksio: calm, low-friction, winter-appropriate. Anything “aurora-ish” near Helsinki is usually wishful thinking.",
    image: "/images/blog/helsinki-to-lapland/porvoo-winter.jpg",
  },
  {
    title: "Smart default northbound",
    body: "Night train. You convert distance into sleep and arrive functional. In winter that is worth more than minutes.",
    image: "/images/blog/helsinki-to-lapland/night-train-north.jpg",
  },
  {
    title: "Most common mistake",
    body: "Spending your best winter energy in the south, then arriving in Lapland tired, late, and annoyed.",
    image: "/images/blog/helsinki-to-lapland/winter-platform.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Helsinki to Lapland: Day Trips, Trains & Smart Connections 2026"
        subtitle="Helsinki isn’t Lapland. Treat it as a launch platform and you win."
        imageSrc="/images/og/og-helsinki-to-lapland-2026.jpg"
      />

      <div className="relative">
        {/* background texture */}
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
                Practical winter routing, not optimism
              </div>

              {/* hero image inside article */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/helsinki-to-lapland/helsinki-to-lapland-hero.jpg"
                    alt="Helsinki as a winter launch platform for Lapland travel"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h2 className="text-base font-semibold text-slate-900">{c.title}</h2>
                      <p className="mt-2 text-sm text-slate-700">{c.body}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* YOUR ARTICLE CONTENT (UNCHANGED except one phrase swap) */}
              <article className="prose prose-slate max-w-none px-0 py-10 prose-headings:tracking-tight prose-a:text-slate-900">
                <p>
                  Helsinki is not Lapland. It’s flatter, brighter, louder, and far more polite. And yet for most travellers,
                  Helsinki is the gatekeeper. Every Lapland plan passes through here first, usually half-awake, dragging winter
                  boots, wondering if the north is worth the trouble.
                </p>
                <p>Short answer: yes. Long answer: only if you treat Helsinki correctly.</p>

                <hr />

                <Anchor id="what-it-is" />
                <h2>What Helsinki is (and what it isn’t)</h2>
                <p>
                  <strong>Helsinki is:</strong> a functional capital, a logistics hub, and a buffer between “normal Europe” and Arctic reality.
                </p>
                <p>
                  <strong>Helsinki is not:</strong> a Lapland substitute, an aurora destination, or a place that needs five winter days unless you enjoy diminishing returns.
                </p>

                <hr />

                <Anchor id="day-trips" />
                <h2>Day trips from Helsinki: worth it or filler?</h2>
                <p>
                  Day trips from Helsinki can be excellent, but they are not Lapland replacements. They work best as orientation:
                  calm, low-friction, and winter-appropriate.
                </p>

                <h3>The ones that actually work</h3>
                <ul>
                  <li>
                    <strong>Porvoo:</strong> easy, pretty, low-effort contrast before going north. Works year-round.
                  </li>
                  <li>
                    <strong>Nuuksio National Park:</strong> forest silence without commitment. A “warm-up” to Finnish winter reality.
                  </li>
                </ul>

                <h3>What usually doesn’t work</h3>
                <ul>
                  <li>Chasing Northern Lights near Helsinki</li>
                  <li>Overplanning “Arctic-style” activities in the south</li>
                  <li>Treating a day trip like it should feel like Lapland</li>
                </ul>

                <hr />

                <Anchor id="options" />
                <h2>Helsinki to Lapland: the real options</h2>

                <Anchor id="train" />
                <h3>1) Train: the smart default</h3>
                <p>
                  The night train from Helsinki to Lapland is one of Finland’s best decisions. You sleep while moving north and
                  wake up functional. No airport friction. No “lost day” feeling.
                </p>
                <p>
                  It’s especially strong if you’re aligning with morning starts for husky safaris, snowmobile days, or other
                  fixed-time activities.
                </p>

                <Anchor id="flight" />
                <h3>2) Flight: the fast lane</h3>
                <p>
                  Flying is useful if you have a short trip or a tight schedule. It becomes less “fast” once you add airport
                  time and transfers, but it can still be the correct choice if you want to arrive early enough to use the day.
                </p>

                <Anchor id="bus" />
                <h3>3) Bus: only if budget dominates everything</h3>
                <p>Possible. Legal. Slow. Usually only sensible if time is abundant and cost is the main constraint.</p>

                <hr />

                <Anchor id="keep-short" />
                <h2>Why Helsinki should be short</h2>
                <p>
                  The TheNorthTrip decision logic is not complicated: don’t spend your best winter energy in the place where the
                  core experiences are replaceable.
                </p>
                <p>Ideal Helsinki allocation for Lapland-first travellers:</p>
                <ul>
                  <li><strong>1–2 nights</strong> to land, reset, and orient</li>
                  <li><strong>One calm day</strong> (sauna + simple city time)</li>
                  <li><strong>One clean departure</strong> north with buffer and alignment</li>
                </ul>

                <hr />

                <Anchor id="sample-flow" />
                <h2>Sample “clean” Helsinki → Lapland flow</h2>
                <ul>
                  <li><strong>Day 1:</strong> Arrive Helsinki, light walk, food, early night.</li>
                  <li><strong>Day 2:</strong> Optional Porvoo/Nuuksio, evening night train or next-morning flight.</li>
                  <li><strong>Day 3:</strong> Wake up/arrive in Lapland, start activities with zero wasted daylight.</li>
                </ul>

                <hr />

                <Anchor id="mistakes" />
                <h2>Common Helsinki mistakes</h2>
                <ul>
                  <li>Overbooking indoor “to-do lists” in winter</li>
                  <li>Planning aurora like it’s realistic in the south</li>
                  <li>Spending Lapland budget on Helsinki hotels</li>
                  <li>Leaving northbound transport “for later” in peak season</li>
                  <li>Treating Helsinki as the main event</li>
                </ul>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion: Helsinki is a corridor, use it well</h2>
                <p>
                  Helsinki becomes valuable when you stop trying to extract “Lapland magic” from it and start using it as what it
                  is: a calm, reliable launch platform.
                </p>
                <p>
                  Walk through it slowly, reset properly, then go north with a plan that respects winter logic. That’s how
                  Helsinki improves your Lapland trip instead of diluting it.
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want a clean plan with less wasted time?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  The easiest “win” is timing: arrive rested, align with activity start times, and keep Helsinki useful but short.
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
                  <a className="hover:underline" href="#what-it-is">
                    What Helsinki is (and isn’t)
                  </a>
                  <a className="hover:underline" href="#day-trips">
                    Day trips: what works
                  </a>
                  <a className="hover:underline" href="#train">
                    Train: the smart default
                  </a>
                  <a className="hover:underline" href="#flight">
                    Flight: the fast lane
                  </a>
                  <a className="hover:underline" href="#bus">
                    Bus: budget-first
                  </a>
                  <a className="hover:underline" href="#keep-short">
                    Why Helsinki should be short
                  </a>
                  <a className="hover:underline" href="#sample-flow">
                    Sample Helsinki → Lapland flow
                  </a>
                  <a className="hover:underline" href="#mistakes">
                    Common mistakes
                  </a>
                  <a className="hover:underline" href="#conclusion">
                    Conclusion
                  </a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/helsinki-to-lapland/sidebar-sauna-reset.jpg"
                    alt="Sauna reset before heading north"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Simple rule</p>
                  <p className="mt-2 text-sm text-slate-700">
                    Spend your planning energy in Helsinki, spend your winter energy in Lapland.
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
