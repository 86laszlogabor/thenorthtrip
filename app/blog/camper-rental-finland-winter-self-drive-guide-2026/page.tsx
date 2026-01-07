import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
  description:
    "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
  openGraph: {
    title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
    description:
      "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
    images: ["/images/og/og-camper-winter.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winter Campervan Finland 2026: Lapland Self-Drive Guide",
    description:
      "Winter campervan travel in Finland explained properly: price bands, Helsinki pickup reality, winter systems, and a calm 10-day Lapland route logic.",
    images: ["/images/og/og-camper-winter.jpg"],
  },
};

const lastVerified = "2026-01-04";

const quickChecks = [
  {
    title: "Winter-ready is a system",
    body: "Heating + insulation + tyres + power plan. One weak link becomes the whole trip.",
  },
  {
    title: "Short driving days win",
    body: "Winter multiplies fatigue. Build calm routes, not hero drives.",
  },
  {
    title: "Start with a test day",
    body: "Pickup day should be a systems check, not a 6-hour highway sprint.",
  },
  {
    title: "Plumbing has opinions",
    body: "Decide early how dependent you want to be on water systems in freezing temps.",
  },
];

const priceRows = [
  { item: "Winter-capable camper (planning band)", value: "€110–180 / night" },
  { item: "Most common cost spike", value: "Late booking + peak weeks" },
  { item: "Stress reducer", value: "Power hookup access + realistic buffers" },
];

const winterReady = [
  "Reliable heating that protects living space and systems",
  "Proper winter tyres (and you know what you’re getting)",
  "Insulation + thermal covers (cab + windows matter)",
  "Basic winter equipment (visibility, traction, emergency basics)",
];

const itinerary = [
  { day: "1", base: "Helsinki area", note: "Pickup + systems test. Short drive. Fix issues while options exist." },
  { day: "2", base: "On the way north", note: "Keep it modest. Treat this as transit, not sightseeing marathon." },
  { day: "3–4", base: "Rovaniemi", note: "Two-night base. Build buffers. Avoid stacking tight time windows." },
  { day: "5–6", base: "Levi / Ylläs area", note: "Another two-night base. Choose activities that match daylight + energy." },
  { day: "7–8", base: "Inari / Saariselkä", note: "Remote feel, fewer fallbacks. Plan slack and confirm meeting points." },
  { day: "9", base: "Return leg", note: "Do not gamble on ‘last-day hero drive’. Winter punishes optimism." },
  { day: "10", base: "Helsinki area", note: "Return + cleanup buffer. Handback with margin, not panic." },
];

const faqs = [
  {
    q: "Do you need 4x4 for winter camper travel?",
    a: "Not strictly on main routes, but it adds margin in bad conditions. Most real failures come from speed, fatigue, and bad timing, not drivetrain.",
  },
  {
    q: "Is winter camper travel actually comfortable?",
    a: "Yes, if the heating and power plan are real. No, if you assume “it’ll be fine” and discover the limits at -15°C.",
  },
  {
    q: "Can you wild-camp in winter like in summer?",
    a: "Freedom exists, but it’s narrower. Think legality, access, snow clearance, and not blocking anyone’s day. Plan overnight stops that stay viable in bad weather.",
  },
  {
    q: "What’s the #1 mistake with pickup day?",
    a: "Driving too far immediately. Use day one to test heating, power, and how the vehicle behaves. Fixing problems near Helsinki is easier than in the north.",
  },
  {
    q: "What’s the simplest way to reduce risk?",
    a: "Two-night bases + short driving days + one deliberate buffer day. Winter rewards calm planning.",
  },
];

function Anchor({ id, children }: { id: string; children: ReactNode }) {
  return (
    <span id={id} className="scroll-mt-24">
      {children}
    </span>
  );
}

function DecoPanel({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-100" />
      <div className="absolute -bottom-12 -left-12 h-52 w-52 rounded-full bg-slate-100/80" />
      <div className="relative p-6">
        <p className="text-xs font-medium text-slate-600">{subtitle}</p>
        <p className="mt-2 text-base font-semibold text-slate-900">{title}</p>
        <div className="mt-4 h-px w-full bg-slate-200" />
        <p className="mt-4 text-sm text-slate-700">
          A visual block that never 404s. Humans invented missing assets, not me.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Winter campervan Finland 2026: Lapland self-drive, done properly."
        subtitle="Follow physics, not vibes. A practical guide to winter systems, planning, and a calm route that survives reality."
        imageSrc="/images/og/og-camper-winter.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Camper rental in Finland" }}
        secondaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
      />

      {/* Background texture: no external assets */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/70 to-transparent" />
        </div>

        <Section>
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* MAIN */}
            <article className="max-w-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Practical guide. Winter-first planning.
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Camper Rental Finland Winter 2026: Lapland Self-Drive Ultimate Guide
              </h1>

              <p className="mt-3 max-w-3xl text-base text-slate-700 md:text-lg">
                Winter campervan travel in Finland sounds perfect until you remember the dark, the cold, and the fact
                that plumbing has opinions. Done properly, it’s one of the most immersive ways to experience Lapland.
                Done casually, it becomes avoidable suffering.
              </p>

              {/* “Hero” visual without images */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="relative">
                  <div className="h-52 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 md:h-64" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="max-w-2xl text-sm text-slate-700">
                      The goal: a plan that still works when you’re tired, it’s dark, and winter decides to be winter.
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
                  <Link className="hover:underline" href="#who">
                    Who this is for
                  </Link>
                  <Link className="hover:underline" href="#winter-ready">
                    What “winter-ready” actually means
                  </Link>
                  <Link className="hover:underline" href="#price">
                    Price reality for Winter 2026
                  </Link>
                  <Link className="hover:underline" href="#pickup">
                    Helsinki pick-up reality
                  </Link>
                  <Link className="hover:underline" href="#4x4">
                    Do you need 4x4?
                  </Link>
                  <Link className="hover:underline" href="#systems">
                    Water, power, and freezing
                  </Link>
                  <Link className="hover:underline" href="#sleep">
                    Where you sleep in winter
                  </Link>
                  <Link className="hover:underline" href="#route">
                    10-day route logic
                  </Link>
                  <Link className="hover:underline" href="#faq">
                    FAQ
                  </Link>
                </div>
              </div>

              <div className="mt-10 space-y-12">
                <section>
                  <Anchor id="who">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Who this is for</h2>
                  </Anchor>
                  <p className="mt-3 max-w-3xl text-slate-700">
                    This is for travellers who like independence, accept planning, and respect winter constraints.
                    It’s not for summer-style roaming with “we’ll figure it out” energy.
                  </p>
                </section>

                <section>
                  <Anchor id="winter-ready">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                      What “winter-ready” actually means
                    </h2>
                  </Anchor>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <Card className="p-6">
                      <h3 className="text-base font-semibold text-slate-900">Minimum winter-ready checklist</h3>
                      <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-slate-700">
                        {winterReady.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </Card>

                    <DecoPanel
                      subtitle="Systems over vibes"
                      title="Heat + power + tyres = the real comfort package"
                    />
                  </div>
                </section>

                <section>
                  <Anchor id="price">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Price reality for Winter 2026</h2>
                  </Anchor>

                  <p className="mt-3 max-w-3xl text-slate-700">
                    A realistic planning band for winter-capable campers sits around{" "}
                    <strong>€110–180 per night</strong>, depending on vehicle, timing, and pick-up location. Heating and
                    power access are not optional “nice-to-haves”.
                  </p>

                  <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-sm">
                      <thead className="text-left">
                        <tr className="border-b bg-slate-50">
                          <th className="px-4 py-3 font-semibold text-slate-900">Planning item</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">What to expect</th>
                        </tr>
                      </thead>
                      <tbody>
                        {priceRows.map((r) => (
                          <tr key={r.item} className="border-b last:border-b-0">
                            <td className="px-4 py-3 font-medium text-slate-900">{r.item}</td>
                            <td className="px-4 py-3 text-slate-700">{r.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <Anchor id="pickup">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Helsinki pick-up reality</h2>
                  </Anchor>

                  <p className="mt-3 max-w-3xl text-slate-700">
                    Pick-ups usually happen in the wider Helsinki area, not the city centre. Treat day one as a systems
                    test: heating, power, and how the vehicle behaves. Drive only a short distance first.
                  </p>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <Card className="p-6">
                      <h3 className="text-base font-semibold text-slate-900">Day-one checklist</h3>
                      <ul className="mt-3 space-y-2 list-disc pl-5 text-sm text-slate-700">
                        <li>Run heating for a real stretch, not 2 minutes.</li>
                        <li>Confirm power setup and what you need for hookups.</li>
                        <li>Check tyres and visibility basics.</li>
                        <li>Learn the controls while you’re still near help.</li>
                      </ul>
                    </Card>

                    <DecoPanel
                      subtitle="Day-one rule"
                      title="Discover problems near Helsinki, not 300 km north"
                    />
                  </div>
                </section>

                <section>
                  <Anchor id="4x4">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Do you need 4x4?</h2>
                  </Anchor>
                  <p className="mt-3 max-w-3xl text-slate-700">
                    Not strictly for main routes, but it adds margin in bad conditions. Most accidents and failures come
                    from speed, fatigue, and bad timing, not drivetrain. Your biggest upgrade is calm planning.
                  </p>
                </section>

                <section>
                  <Anchor id="systems">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Water, power, and freezing</h2>
                  </Anchor>

                  <p className="mt-3 max-w-3xl text-slate-700">
                    Decide early how dependent you want to be on onboard plumbing. Power hookups reduce stress massively.
                    If you rely on water systems, you also rely on temperatures staying friendly. Winter doesn’t care.
                  </p>

                  <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-base font-semibold text-slate-900">Practical rule</h3>
                    <p className="mt-2 text-sm text-slate-700">
                      If you’re unsure: prioritize warmth + power access over “freedom parking”. Comfort keeps the trip alive.
                    </p>
                  </div>
                </section>

                <section>
                  <Anchor id="sleep">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Where you sleep in winter</h2>
                  </Anchor>
                  <p className="mt-3 max-w-3xl text-slate-700">
                    Winter overnighting is about legality, access, and not blocking snow clearance. Freedom exists, but
                    it’s narrower than in summer. Pick places that remain viable when conditions change.
                  </p>
                </section>

                <section>
                  <Anchor id="route">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">10-day winter-friendly route logic</h2>
                  </Anchor>

                  <p className="mt-3 max-w-3xl text-slate-700">
                    Short driving days. Two-night bases. Weather buffers. No hero drives. Winter rewards calm.
                  </p>

                  <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-sm">
                      <thead className="text-left">
                        <tr className="border-b bg-slate-50">
                          <th className="px-4 py-3 font-semibold text-slate-900">Day</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Base</th>
                          <th className="px-4 py-3 font-semibold text-slate-900">Route logic</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itinerary.map((r) => (
                          <tr key={r.day} className="border-b last:border-b-0">
                            <td className="px-4 py-3 font-semibold text-slate-900">{r.day}</td>
                            <td className="px-4 py-3 font-medium text-slate-900">{r.base}</td>
                            <td className="px-4 py-3 text-slate-700">{r.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <Card className="p-6">
                      <h3 className="text-base font-semibold text-slate-900">The buffer rule</h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Build at least one deliberate “flex day” so weather doesn’t delete your best experience.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-base font-semibold text-slate-900">The fatigue rule</h3>
                      <p className="mt-2 text-sm text-slate-700">
                        If you plan like summer, you pay like winter. Keep days shorter than your ego wants.
                      </p>
                    </Card>
                  </div>
                </section>

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
                </section>

                <section>
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Conclusion</h2>
                  <p className="mt-3 max-w-3xl text-slate-700">
                    Winter camper travel in Finland isn’t about bravery. It’s about preparation. Do it right and the
                    Arctic feels vast, quiet, and deeply personal. Do it casually and you’ll spend money fixing avoidable
                    problems.
                  </p>

                  <p className="mt-6 text-xs text-slate-500">
                    <strong>Last verified:</strong> {lastVerified}
                  </p>
                </section>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="h-fit space-y-4 lg:sticky lg:top-24">
              <Card className="p-6">
                <h2 className="text-base font-semibold text-slate-900">At a glance</h2>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">Best for:</span> independent travellers who plan
                  </p>
                  <p>
                    <span className="font-semibold">Avoid if:</span> you hate buffers and cold logistics
                  </p>
                  <p>
                    <span className="font-semibold">Planning style:</span> two-night bases + short days
                  </p>
                  <p>
                    <span className="font-semibold">Last verified:</span> {lastVerified}
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-base font-semibold text-slate-900">Start here if booking</h2>
                <p className="mt-2 text-sm text-slate-700">
                  Use these pages to avoid the classic “everything looked fine online” moment.
                </p>
                <div className="mt-4 space-y-2">
                  <CtaButton href="/camper-rental-finland" variant="primary" className="w-full">
                    Camper rental overview →
                  </CtaButton>
                  <CtaButton href="/offer-checklist" variant="outline" className="w-full">
                    Offer checklist →
                  </CtaButton>
                </div>
              </Card>

              <Card className="p-6">
                <p className="text-xs font-medium text-slate-600">Credibility note</p>
                <p className="mt-2 text-sm text-slate-700">
                  When a detail can change, we treat it as a decision point, not a promise.
                </p>
                <div className="mt-4 text-sm">
                  <Link href="/policy" className="font-semibold text-slate-700 hover:underline">
                    Policy →
                  </Link>
                  <span className="mx-2 text-slate-300">•</span>
                  <Link href="/get-help" className="font-semibold text-slate-700 hover:underline">
                    Get help →
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
