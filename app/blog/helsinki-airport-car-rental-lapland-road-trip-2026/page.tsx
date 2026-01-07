import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
  description:
    "Helsinki Airport car rental for Lapland self-drive trips in 2026. Winter tires, realistic routes, fuel costs and mistakes to avoid.",
  openGraph: {
    title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
    description:
      "Winter tires, pacing, fuel reality, and the mistakes that quietly ruin a Lapland drive.",
    images: ["/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Airport Car Rental: Lapland Road Trip 2026",
    description:
      "Winter tires, pacing, fuel reality, and the mistakes that quietly ruin a Lapland drive.",
    images: ["/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickCards = [
  {
    title: "Best pickup choice",
    body: "Airport fleets and support tend to be better prepared for winter reality.",
    image: "/images/blog/rental/hel-airport-rental-desk.jpg",
  },
  {
    title: "Most common failure",
    body: "Trying to drive too far in one day, then stacking fatigue on darkness.",
    image: "/images/blog/rental/winter-night-driving-finland.jpg",
  },
  {
    title: "Non-negotiable",
    body: "Winter tires are mandatory when conditions require. You do not negotiate with physics.",
    image: "/images/blog/rental/winter-tires-closeup.jpg",
  },
  {
    title: "Hidden cost driver",
    body: "Fuel buffers for detours, cold starts, and idling matter more than people admit.",
    image: "/images/blog/rental/fuel-station-winter-finland.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Helsinki Airport Car Rental → Lapland"
        subtitle="What it really takes to drive north in winter."
        imageSrc="/images/og/og-helsinki-airport-car-rental-lapland-2026.jpg"
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
              <Link className="hover:text-slate-900" href="/car-rental-helsinki">
                Car rental Helsinki
              </Link>
              <Link className="hover:text-slate-900" href="/offer-checklist">
                Offer checklist
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
                Practical winter self-drive decisions
              </div>

              {/* in-page image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/rental/helsinki-airport-car-rental-hero.jpg"
                    alt="Car rental at Helsinki Airport for a winter Lapland road trip"
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
                  The idea of driving from Helsinki to Lapland sounds ridiculous until you
                  do it properly.
                </p>
                <p>
                  This guide is for travellers considering a Lapland self-drive in winter
                  2026 because they want control, not convenience.
                </p>

                <hr />

                <Anchor id="good-idea" />
                <h2>Is self-driving actually a good idea?</h2>
                <p>
                  Sometimes. Only if your goals match what driving gives you.
                </p>
                <p>
                  If your plan is hotels and guided tours, skip the car. If your plan is
                  silence, detours and aurora flexibility, it starts to make sense.
                </p>

                <hr />

                <Anchor id="why-airport" />
                <h2>Why Helsinki Airport pickup matters</h2>
                <p>
                  Airport rentals have newer fleets, better winter prep and 24/7 support.
                  Downtown pickups add cost without benefits.
                </p>

                <hr />

                <Anchor id="winter-tires" />
                <h2>Winter tires in Finland</h2>
                <p>
                  Winter tires are mandatory by law when conditions require. Rental cars
                  must comply. No upsells, no games.
                </p>

                <hr />

                <Anchor id="pacing" />
                <h2>Route pacing (don’t be heroic)</h2>
                <p>
                  Helsinki to Rovaniemi is long. Break it into realistic segments and avoid
                  night marathons in winter darkness.
                </p>

                <hr />

                <Anchor id="fuel" />
                <h2>Fuel reality</h2>
                <p>
                  Long distances add up. Build fuel buffers for detours, idling and cold
                  starts.
                </p>

                <hr />

                <Anchor id="vs-tours" />
                <h2>Self-drive vs tours</h2>
                <p>
                  Self-driving rewards preparation. Tours reward convenience. Neither is
                  wrong.
                </p>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion</h2>
                <p>
                  Driving to Lapland isn’t about saving money at all costs. It’s about
                  buying freedom with effort.
                </p>

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
                  Want to avoid the rental counter surprises?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Verify documents, payment rules, and pickup timing before you land, then keep the drive plan conservative.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="/offer-checklist" variant="primary">
                    Open offer checklist →
                  </CtaButton>
                  <CtaButton href="/car-rental-helsinki" variant="outline">
                    Car rental Helsinki →
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
                  <a className="hover:underline" href="#good-idea">Is self-driving a good idea?</a>
                  <a className="hover:underline" href="#why-airport">Why airport pickup matters</a>
                  <a className="hover:underline" href="#winter-tires">Winter tires</a>
                  <a className="hover:underline" href="#pacing">Route pacing</a>
                  <a className="hover:underline" href="#fuel">Fuel reality</a>
                  <a className="hover:underline" href="#vs-tours">Self-drive vs tours</a>
                  <a className="hover:underline" href="#conclusion">Conclusion</a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/rental/sidebar-snowy-road-lapland.jpg"
                    alt="Snowy road in Finland on a winter self-drive"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Reality check</p>
                  <p className="mt-2 text-sm text-slate-700">
                    If your route requires hero driving days, it’s not a plan. It’s a future apology.
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
