import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Helsinki to Lapland 2026: Train, Flights & Day Trip Reality",
  description:
    "Compare Helsinki–Lapland trains, flights and day tours. What works in winter, what doesn’t, and how to arrive rested.",
  openGraph: {
    title: "Helsinki to Lapland 2026: Train, Flights & Day Trip Reality",
    description:
      "Compare trains, flights and day tours. What works in winter, what doesn’t, and how to arrive rested.",
    images: ["/images/og/og-helsinki-to-lapland-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki to Lapland 2026: Train, Flights & Day Trip Reality",
    description:
      "Compare trains, flights and day tours. What works in winter, what doesn’t, and how to arrive rested.",
    images: ["/images/og/og-helsinki-to-lapland-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const highlights = [
  {
    title: "Night train advantage",
    body: "Sleep while moving north. Arrive functional. Winter rewards that.",
    image: "/images/blog/helsinki-lapland-reality/night-train.jpg",
  },
  {
    title: "Flight reality",
    body: "Fast, but energy-expensive once you add airport friction and transfers.",
    image: "/images/blog/helsinki-lapland-reality/flight-winter.jpg",
  },
  {
    title: "Day trip reality",
    body: "Convenience product. High cost, low depth. Acceptable only if that’s your goal.",
    image: "/images/blog/helsinki-lapland-reality/day-tour.jpg",
  },
  {
    title: "Decision rule",
    body: "In Finnish winter, energy beats speed. Every time.",
    image: "/images/blog/helsinki-lapland-reality/winter-platform.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Helsinki to Lapland: Trains, Flights & What Actually Works"
        subtitle="Energy beats speed in Finnish winter travel."
        imageSrc="/images/og/og-helsinki-to-lapland-2026.jpg"
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
                Short guide. Clean decisions.
              </div>

              {/* header image inside page (doesn't become "infinite") */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/helsinki-lapland-reality/hero.jpg"
                    alt="Winter travel decision moment: Helsinki to Lapland"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 720px, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </div>
              </div>

              {/* highlight cards */}
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {highlights.map((c) => (
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
                <p>
                  The best way from Helsinki to Lapland is not a personality trait. It is a logistics decision.
                </p>

                <hr />

                <Anchor id="options" />
                <h2>The three real options</h2>

                <Anchor id="night-train" />
                <h3>Night train</h3>
                <p>
                  You sleep while moving north and arrive with a full day of energy. For trips longer than five days, this is
                  often the smartest default.
                </p>

                <Anchor id="flight" />
                <h3>Flight</h3>
                <p>
                  Fast and controlled, but energy-expensive. Best for short trips or tight schedules.
                </p>

                <Anchor id="day-trips" />
                <h3>Lapland day trips</h3>
                <p>
                  Convenience products. High cost, low depth. Acceptable for Santa-focused visits only.
                </p>

                <hr />

                <Anchor id="train-vs-flight" />
                <h2>Train vs flight</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Night train</th>
                      <th>Flight</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Arrival energy</td>
                      <td>High</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Speed</td>
                      <td>Medium</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>Winter reliability</td>
                      <td>Very strong</td>
                      <td>Good</td>
                    </tr>
                  </tbody>
                </table>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion</h2>
                <p>
                  In winter, energy is the currency. Choose the transport option that lets you use your days, not recover from
                  them.
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA (no jargon) */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want fewer wasted winter days?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Align transport with start times, keep buffers, and choose the option that leaves you functional.
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
                  <a className="hover:underline" href="#options">The three real options</a>
                  <a className="hover:underline" href="#night-train">Night train</a>
                  <a className="hover:underline" href="#flight">Flight</a>
                  <a className="hover:underline" href="#day-trips">Lapland day trips</a>
                  <a className="hover:underline" href="#train-vs-flight">Train vs flight</a>
                  <a className="hover:underline" href="#conclusion">Conclusion</a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/helsinki-lapland-reality/sidebar.jpg"
                    alt="Night train cabin and winter calm"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Quick rule</p>
                  <p className="mt-2 text-sm text-slate-700">
                    If you arrive tired, winter gets expensive.
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
