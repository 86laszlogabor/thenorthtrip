import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Lapland Finland Travel Checklist 2026: Save €500+ (Offer-Checklist)",
  description:
    "Lapland Finland travel checklist 2026. Save €500+ on tours, rentals, transport and timing mistakes with this decision-first offer-checklist guide.",
  openGraph: {
    title: "Lapland Finland Travel Checklist 2026: Save €500+ (Offer-Checklist)",
    description:
      "A decision-first offer-checklist that prevents expensive Lapland assumptions in 2026.",
    images: ["/images/og/og-lapland-offer-checklist-2026.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapland Finland Travel Checklist 2026: Save €500+ (Offer-Checklist)",
    description:
      "A decision-first offer-checklist that prevents expensive Lapland assumptions in 2026.",
    images: ["/images/og/og-lapland-offer-checklist-2026.jpg"],
  },
};

const lastVerified = "2026-01-04";

const visuals = [
  {
    title: "Dates decide the budget",
    body: "Peak weeks quietly inflate everything. Moving dates can save more than any coupon ever will.",
    image: "/images/blog/lapland-offer-checklist-2026/dates.jpg",
  },
  {
    title: "Base choice = logistics cost",
    body: "Pickup zones and transfers decide whether you need a car or not.",
    image: "/images/blog/lapland-offer-checklist-2026/base.jpg",
  },
  {
    title: "Night travel is the cheat code",
    body: "Sleep is money. Night train often replaces a hotel night and a wasted day.",
    image: "/images/blog/lapland-offer-checklist-2026/night-train.jpg",
  },
  {
    title: "Tour length beats headline price",
    body: "Short, volume tours cost less and deliver less. Verify active time, not marketing time.",
    image: "/images/blog/lapland-offer-checklist-2026/tours.jpg",
  },
];

function Anchor({ id }: { id: string }) {
  return <span id={id} className="scroll-mt-24" />;
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        title="Lapland Finland Travel Checklist 2026"
        subtitle="A decision filter that prevents expensive assumptions."
        imageSrc="/images/og/og-lapland-offer-checklist-2026.jpg"
        primaryCta={{ href: "/lapland-tours", label: "Lapland tours hub" }}
        secondaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
      />

      <div className="relative">
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
              <Link className="hover:text-slate-900" href="/car-rental-helsinki">
                Car rental Helsinki
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
                Decision filter. Less waste. Fewer “oops” payments.
              </div>

              {/* header image inside page */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/blog/lapland-offer-checklist-2026/hero.jpg"
                    alt="Lapland winter planning mood: snow, dark sky, and a calm decision-first vibe"
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
                <p>Lapland doesn’t usually ruin trips loudly.</p>
                <p>
                  It doesn’t scam you. It doesn’t shout hidden fees in your face. It just
                  lets you assume things. And assumptions in Lapland are expensive.
                </p>
                <p>
                  I’ve watched sensible travellers overspend <strong>€300–€700</strong>{" "}
                  without doing anything “wrong.” They booked tours that overlapped. Rented
                  cars they barely used. Missed the night-travel sweet spot. Paid premium
                  prices for short, underwhelming experiences because they didn’t know what
                  to verify before clicking “confirm.”
                </p>
                <p>This guide exists to stop that.</p>
                <p>
                  This is not a list of attractions. It’s a <strong>decision filter</strong>:
                  an <strong>offer-checklist</strong> designed for winter travel in Finnish
                  Lapland in 2026.
                </p>
                <p>
                  If you run every booking through this checklist, you’ll usually:
                </p>
                <ul>
                  <li>avoid timing mismatches</li>
                  <li>cut unnecessary rentals</li>
                  <li>book the tour length that actually delivers value</li>
                  <li>avoid duplicate transfers and “double logistics”</li>
                  <li>
                    and realistically save <strong>€500+</strong> on many 5–7 day Lapland
                    trips
                  </li>
                </ul>
                <p>
                  Use it while booking. Not after. “After” is where money goes to die.
                </p>

                <hr />

                <Anchor id="mindset" />
                <h2>The offer-checklist mindset</h2>
                <p>
                  Lapland travel is structured. Tours run on daylight, weather windows, and
                  distance. When you book things in the wrong order, the system doesn’t
                  adapt to you. You adapt by paying more.
                </p>
                <p>
                  The offer-checklist mindset flips the questions:
                </p>
                <ul>
                  <li>
                    <strong>Not:</strong> “Is this tour cheap?” <strong>But:</strong> “Does
                    it fit everything else I’ve already booked?”
                  </li>
                  <li>
                    <strong>Not:</strong> “Can I rent a car?” <strong>But:</strong> “Do I
                    actually need one for what I’m doing?”
                  </li>
                  <li>
                    <strong>Not:</strong> “Is this a good deal?” <strong>But:</strong> “What
                    breaks if this is delayed, cancelled, or moved?”
                  </li>
                </ul>

                <hr />

                <Anchor id="checklist-1" />
                <h2>Checklist #1: dates & season (the silent €300 decision)</h2>
                <p>
                  Before you look at a single tour, verify <strong>when</strong> you’re going.
                </p>
                <h3>Peak vs shoulder winter</h3>
                <p>
                  <strong>Peak:</strong> mid-December to late February<br />
                  <strong>Shoulder winter:</strong> late November, early March
                </p>
                <p>
                  <strong>Cost impact:</strong> commonly higher pricing in peak weeks for tours
                  and accommodation. If you can move dates by even one week, totals can change
                  meaningfully.
                </p>
                <h3>Checklist questions</h3>
                <ul>
                  <li>Am I travelling during Christmas/New Year or school-holiday weeks?</li>
                  <li>Do I need deep polar night, or is “snow + aurora chances” enough?</li>
                  <li>Would early March (more daylight, still winter) be a better trade?</li>
                </ul>

                <hr />

                <Anchor id="checklist-2" />
                <h2>Checklist #2: base location (Rovaniemi vs “quiet Lapland”)</h2>
                <p>
                  Your base decides transport costs, tour pricing, and how much time you waste
                  moving around.
                </p>

                <h3>Rovaniemi (logistics-friendly)</h3>
                <p>
                  <strong>Pros:</strong> most tours, easiest arrivals, best connections.<br />
                  <strong>Cons:</strong> higher demand, more tourism density.
                </p>
                <p>
                  <strong>Hidden saving:</strong> you often don’t need a car if tours include pickup.
                </p>

                <h3>Smaller bases (Levi, Saariselkä, Ivalo)</h3>
                <p>
                  <strong>Pros:</strong> quieter, stronger “Arctic silence,” often better dark-sky feel.<br />
                  <strong>Cons:</strong> fewer operators, transfers can cost more, pickup zones vary.
                </p>
                <p>
                  <strong>Hidden cost:</strong> taxis or car rental can become mandatory if you pick an accommodation
                  outside pickup zones.
                </p>

                <h3>Checklist questions</h3>
                <ul>
                  <li>Do my tours include pickup from this base?</li>
                  <li>How far is accommodation from pickup points in winter conditions?</li>
                  <li>Will I need a car just to reach activities?</li>
                </ul>
                <p>This single decision can swing your total by hundreds of euros.</p>

                <hr />

                <Anchor id="checklist-3" />
                <h2>Checklist #3: Helsinki → Lapland transport (sleep is money)</h2>
                <p>
                  Transport choice affects costs far beyond the ticket price.
                </p>

                <h3>Night travel (often cheapest overall)</h3>
                <p>
                  <strong>Typical planning range:</strong> €89–€150+ for sleeper configurations (date-dependent).<br />
                  <strong>Common saving:</strong> replacing one accommodation night and reducing “dead day” travel time.
                </p>

                <h3>Domestic flight</h3>
                <p>
                  <strong>Typical planning range:</strong> €110–€220+ one way (date- and baggage-dependent).<br />
                  <strong>Hidden costs:</strong> baggage fees, airport transfers, lost day parts.
                </p>

                <h3>Offer-checklist rule</h3>
                <p>
                  If your first paid tour starts before 12:00, night travel often saves money and stress.
                  If your first tour is afternoon-only, flights can make sense.
                </p>

                <h3>Checklist questions</h3>
                <ul>
                  <li>What time does my first paid tour start?</li>
                  <li>Am I paying for a hotel night I barely use?</li>
                  <li>Do I arrive tired and waste a day recovering?</li>
                </ul>

                <hr />

                <Anchor id="checklist-4" />
                <h2>Checklist #4: tours – length matters more than price</h2>
                <p>
                  This is where people lose money without realising it: short tours that are priced like “real” experiences.
                </p>

                <h3>Short tours vs real experiences</h3>
                <p>
                  A low-priced husky product is often a short loop designed for volume. A higher-priced safari usually buys
                  trail time, distance, and a less “theme park” feel.
                </p>

                <h3>Core tour price reality (2026)</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Tour type</th>
                      <th>Planning range</th>
                      <th>What to verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Husky safari</td>
                      <td>€200–€450</td>
                      <td>Active trail time, route length, kennel practices</td>
                    </tr>
                    <tr>
                      <td>Northern Lights chase</td>
                      <td>€120–€220</td>
                      <td>Group size, mobility, drive range, cancellation logic</td>
                    </tr>
                    <tr>
                      <td>Snowmobile safari</td>
                      <td>€180–€350</td>
                      <td>Solo vs shared driving, ride time vs briefing time</td>
                    </tr>
                    <tr>
                      <td>Ice hotel visit</td>
                      <td>€200–€450</td>
                      <td>Day visit vs overnight value and included transfers</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Checklist questions</h3>
                <ul>
                  <li>How long is the active part (not the pickup briefing) of this tour?</li>
                  <li>Is this designed for photos or for a real experience?</li>
                  <li>Does pickup/drop-off duplicate something else I booked?</li>
                </ul>

                <hr />

                <Anchor id="checklist-5" />
                <h2>Checklist #5: Northern Lights – don’t gamble your main goal</h2>
                <p>
                  Aurora chasing is probabilistic. Planning like it isn’t costs money.
                </p>
                <h3>Offer-checklist rules</h3>
                <ul>
                  <li>Book <strong>two nights</strong> if aurora is a priority.</li>
                  <li>Avoid “guaranteed aurora” wording.</li>
                  <li>Prefer smaller groups even if slightly more expensive.</li>
                </ul>
                <p>
                  <strong>Hidden saving:</strong> one properly planned aurora chase often beats multiple rushed attempts.
                </p>

                <hr />

                <Anchor id="checklist-6" />
                <h2>Checklist #6: car rental – the most common unnecessary expense</h2>
                <p>
                  Car rental in Lapland isn’t wrong. It’s just often unnecessary.
                </p>

                <h3>When you actually need a car</h3>
                <ul>
                  <li>Remote cabin stay</li>
                  <li>Self-driven aurora hunts away from pickup zones</li>
                  <li>No tour pickups available for what you want</li>
                </ul>

                <h3>When you probably don’t</h3>
                <ul>
                  <li>Staying in town</li>
                  <li>Doing guided tours daily</li>
                  <li>Only short distances</li>
                </ul>

                <h3>Realistic winter rental cost planning (example for 5 days)</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Planning range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Car rental (5 days)</td>
                      <td>€350–€700</td>
                    </tr>
                    <tr>
                      <td>Fuel</td>
                      <td>€80–€150</td>
                    </tr>
                    <tr>
                      <td>Parking / extras</td>
                      <td>€40–€80</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Checklist question: <strong>Will this car replace tours, or just sit parked?</strong>
                  If it’s the second one, skip it.
                </p>

                <hr />

                <Anchor id="checklist-7" />
                <h2>Checklist #7: accommodation – nights you don’t need</h2>
                <p>
                  Lapland accommodation is priced per night, not per usefulness. Late arrivals and early departures can make
                  you pay for nights you barely use.
                </p>
                <h3>Checklist questions</h3>
                <ul>
                  <li>Do I arrive after 22:00 and leave before 07:00?</li>
                  <li>Could night travel replace this night?</li>
                  <li>Is paid early check-in actually needed, or just anxiety?</li>
                </ul>
                <p>Saving one unused night can mean €150–€300 back.</p>

                <hr />

                <Anchor id="checklist-8" />
                <h2>Checklist #8: winter gear – buy, rent, or mix?</h2>
                <p>
                  Buying everything “just in case” is usually waste. Renting everything is often unnecessary.
                </p>
                <h3>Smart split</h3>
                <p>
                  <strong>Bring:</strong> thermal layers, gloves, hat<br />
                  <strong>Rent:</strong> outer suit and boots (if you’re unsure)
                </p>
                <p>
                  <strong>Typical rental planning range:</strong> €40–€80/day or €150–€200/week (varies widely by provider).
                </p>
                <p>
                  Checklist question: <strong>Will I wear this gear again after Lapland?</strong>
                </p>

                <hr />

                <Anchor id="checklist-9" />
                <h2>Checklist #9: booking calendar (the order that saves money)</h2>
                <p>Order matters.</p>
                <ol>
                  <li>Dates + season</li>
                  <li>Base location</li>
                  <li>Helsinki–Lapland transport</li>
                  <li>Accommodation</li>
                  <li>Big tours (husky, aurora, snowmobile)</li>
                  <li>Flexible activities</li>
                  <li>Rentals (only if still needed)</li>
                </ol>
                <p>Reversing this order is how people burn money quietly.</p>

                <hr />

                <Anchor id="checklist-10" />
                <h2>Checklist #10: budget reality check</h2>
                <p>Before confirming, add everything.</p>
                <h3>7-day Lapland trip – realistic per-person planning range</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Planning range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Transport (return)</td>
                      <td>€180–€450</td>
                    </tr>
                    <tr>
                      <td>Accommodation</td>
                      <td>€450–€1,050</td>
                    </tr>
                    <tr>
                      <td>Tours</td>
                      <td>€650–€1,400</td>
                    </tr>
                    <tr>
                      <td>Food</td>
                      <td>€250–€450</td>
                    </tr>
                    <tr>
                      <td>Extras</td>
                      <td>€100–€250</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  If your total is far lower, something is missing. If it’s far higher, re-run the checklist and find the leak.
                </p>

                <hr />

                <Anchor id="faq" />
                <h2>FAQ: Lapland Finland travel checklist 2026</h2>
                <h3>Can I really save €500 using this checklist?</h3>
                <p>
                  Often, yes, by avoiding duplicate nights, unnecessary car rental, and poor-value short tours.
                </p>

                <h3>Is Lapland doable on a tight budget?</h3>
                <p>
                  Yes, with compromises. This checklist helps you pick smart compromises, not random ones.
                </p>

                <h3>Should I book everything in advance?</h3>
                <p>
                  Core tours, yes. Small flexible activities can wait.
                </p>

                <h3>Is Rovaniemi overpriced?</h3>
                <p>
                  Not inherently. It’s priced for demand. You can still save by tightening logistics.
                </p>

                <hr />

                <Anchor id="conclusion" />
                <h2>Conclusion: this checklist is your profit margin</h2>
                <p>
                  Lapland doesn’t punish mistakes loudly. It just lets them drain your budget.
                </p>
                <p>
                  Run every booking through these questions. Spend less, do more, and feel calmer while doing it.
                  Calm matters when it’s -25°C outside and your main goal is standing still under the sky,
                  waiting for green light to appear.
                </p>

                <p>
                  <strong>Internal links:</strong>{" "}
                  <a href="/helsinki">Helsinki winter gateway</a> •{" "}
                  <a href="/getting-around-finland">Getting around Finland</a> •{" "}
                  <a href="/car-rental-helsinki">Car rental Helsinki</a> •{" "}
                  <a href="/lapland-tours-finland">Lapland tours Finland</a> •{" "}
                  <a href="/offer-checklist">Offer checklist</a>
                </p>

                <p className="text-sm text-slate-600">
                  <strong>Last verified:</strong> 2026-01-04
                </p>
              </article>

              {/* Bottom CTA */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Want the checklist applied to your exact trip?
                </h3>
                <p className="mt-2 max-w-3xl text-sm text-slate-700">
                  Dates, base, transport, tours. Same logic, fewer expensive assumptions.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CtaButton href="/offer-checklist" variant="primary">
                    Open offer checklist →
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
                  <a className="hover:underline" href="#mindset">
                    Offer-checklist mindset
                  </a>
                  <a className="hover:underline" href="#checklist-1">
                    #1 Dates & season
                  </a>
                  <a className="hover:underline" href="#checklist-2">
                    #2 Base location
                  </a>
                  <a className="hover:underline" href="#checklist-3">
                    #3 Transport logic
                  </a>
                  <a className="hover:underline" href="#checklist-4">
                    #4 Tours: length
                  </a>
                  <a className="hover:underline" href="#checklist-5">
                    #5 Northern Lights
                  </a>
                  <a className="hover:underline" href="#checklist-6">
                    #6 Car rental
                  </a>
                  <a className="hover:underline" href="#checklist-7">
                    #7 Accommodation
                  </a>
                  <a className="hover:underline" href="#checklist-9">
                    #9 Booking order
                  </a>
                  <a className="hover:underline" href="#faq">
                    FAQ
                  </a>
                  <a className="hover:underline" href="#conclusion">
                    Conclusion
                  </a>
                </div>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src="/images/blog/lapland-offer-checklist-2026/sidebar.jpg"
                    alt="Lapland winter planning: aurora sky, snowy road, calm night"
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-slate-700">Practical rule</p>
                  <p className="mt-2 text-sm text-slate-700">
                    If you can’t explain what breaks when a tour shifts by 2 hours, you’re not done verifying.
                  </p>
                  <div className="mt-4 grid gap-2">
                    <CtaButton href="/offer-checklist" variant="primary" className="w-full">
                      Use checklist →
                    </CtaButton>
                    <CtaButton href="/get-help" variant="success" className="w-full">
                      Get help →
                    </CtaButton>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-base font-semibold text-slate-900">Fast internal routes</h3>
                <div className="mt-3 grid gap-2 text-sm">
                  <Link className="font-semibold text-slate-800 hover:underline" href="/lapland-tours">
                    Lapland tours hub →
                  </Link>
                  <Link className="font-semibold text-slate-800 hover:underline" href="/getting-around-finland">
                    Getting around Finland →
                  </Link>
                  <Link className="font-semibold text-slate-800 hover:underline" href="/car-rental-helsinki">
                    Car rental Helsinki →
                  </Link>
                </div>
              </Card>
            </aside>
          </div>
        </Section>
      </div>
    </div>
  );
}
