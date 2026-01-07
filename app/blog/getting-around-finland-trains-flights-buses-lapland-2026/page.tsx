import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Getting Around Finland 2026: Trains, Flights & Lapland Access",
  description:
    "A decision-first transport guide for Finland in 2026. Trains, flights, buses, and how to reach Lapland without wrecking your trip.",
  openGraph: {
    title: "Getting Around Finland 2026: Trains, Flights & Lapland Access",
    description:
      "Trains, flights, buses, and a practical decision checklist for reaching Lapland without fragile plans.",
    images: ["/images/og/og-getting-around-finland-access.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Around Finland 2026: Trains, Flights & Lapland Access",
    description:
      "Trains, flights, buses, and a practical decision checklist for reaching Lapland without fragile plans.",
    images: ["/images/og/og-getting-around-finland-access.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Best winter baseline",
    body: "Night trains convert travel time into sleep. Winter likes that.",
    image: "/images/blog/transport/night-train-cabin.jpg",
  },
  {
    title: "Best for short trips",
    body: "Flights compress distance, but airport friction and transfers still exist.",
    image: "/images/blog/transport/lapland-flight-snowy-runway.jpg",
  },
  {
    title: "Budget tool, not comfort",
    body: "Buses can be cheap, but long legs cost energy. Plan accordingly.",
    image: "/images/blog/transport/finland-bus-winter.jpg",
  },
  {
    title: "Most common failure",
    body: "Transport booked first, tour start times checked later. Winter punishes that.",
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
        title="Getting Around Finland 2026: Trains, Buses & Flights to Lapland"
        subtitle="Transport choices matter more in Finland than most travellers expect."
        imageSrc="/images/og/og-getting-around-finland-access.jpg"
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
                Practical transport choices for winter trips
              </div>

              {/* in-page image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/transport/getting-around-finland-access-hero.jpg"
                    alt="Finland winter transport: trains, flights, and long distances"
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
                <p>
                  Finland’s transport system does not try to impress you. It works quietly and predictably, which is exactly why
                  your transport decisions matter. Winter magnifies every mistake.
                </p>

                <hr />

                <Anchor id="why" />
                <h2>Why transport choices matter in Finland</h2>
                <p>
                  Distances are long. Winter weather is real. Backup options outside major hubs can be limited. Improvisation
                  costs time and money.
                </p>

                <p>
                  The “best” option depends on trip length, tolerance for early mornings, luggage, and whether your Lapland
                  activities start at fixed times.
                </p>

                <hr />

                <Anchor id="main-ways" />
                <h2>The three main ways to reach Lapland</h2>

                <Anchor id="trains" />
                <h3>Trains</h3>
                <p>
                  Day trains are scenic but time-consuming. Overnight trains convert travel time into sleep and are often the
                  most balanced option for winter trips.
                </p>

                <Anchor id="flights" />
                <h3>Flights</h3>
                <p>
                  Fast and efficient for short trips. Airport time, luggage rules, and transfers add friction that people often
                  underestimate.
                </p>

                <Anchor id="buses" />
                <h3>Buses</h3>
                <p>
                  Cheap on good days. Long and tiring on bad ones. Suitable only if budget is tight and time is flexible.
                </p>

                <hr />

                <Anchor id="day-vs-night" />
                <h2>Day train vs night train</h2>
                <p>
                  Day trains suit travellers with time who want scenery. Night trains suit travellers who want to arrive ready
                  to function.
                </p>

                <hr />

                <Anchor id="when-fly" />
                <h2>When flying actually makes sense</h2>
                <p>
                  Flying works best when you have 2–4 days total or are connecting directly from an international arrival.
                  Weather disruption affects flights more than rail.
                </p>

                <hr />

                <Anchor id="bus-note" />
                <h2>Buses: cheap, not forgiving</h2>
                <p>
                  Long-distance buses can save money but cost energy. Arriving exhausted into Arctic conditions is rarely a good
                  start.
                </p>

                <hr />

                <Anchor id="checklist" />
                <h2>Decision checklist</h2>
                <ul>
                  <li>Total door-to-door time</li>
                  <li>Luggage and winter gear</li>
                  <li>First tour start time</li>
                  <li>Flexibility and cancellation</li>
                  <li>Winter buffers</li>
                </ul>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion</h2>
                <p>
                  Transport is the foundation of your Finland trip. Choose the option that supports the experience you want,
                  not the one that looks cheapest in isolation.
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want fewer transport surprises in winter?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Use a checklist before paying, then align arrivals with fixed start times so you don’t lose a day to friction.
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
                  <a className="hover:underline" href="#why">Why choices matter</a>
                  <a className="hover:underline" href="#main-ways">Three main ways</a>
                  <a className="hover:underline" href="#trains">Trains</a>
                  <a className="hover:underline" href="#flights">Flights</a>
                  <a className="hover:underline" href="#buses">Buses</a>
                  <a className="hover:underline" href="#day-vs-night">Day vs night train</a>
                  <a className="hover:underline" href="#when-fly">When flying makes sense</a>
                  <a className="hover:underline" href="#bus-note">Buses</a>
                  <a className="hover:underline" href="#checklist">Decision checklist</a>
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
                    If the plan has zero slack, it’s not a plan. It’s a wish.
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
