import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "Get Help | TheNorthTrip",
  description:
    "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
  openGraph: {
    title: "Get Help | TheNorthTrip",
    description:
      "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
    images: ["/images/og/og-get-help.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Help | TheNorthTrip",
    description:
      "Calm, risk-based review before you pay. We stress-test itineraries, rentals, deposits, timing constraints, and winter fragility.",
    images: ["/images/og/og-get-help.jpg"],
  },
};

type Tier = {
  title: string;
  who: string;
  includes: string[];
  note: string;
};

const tiers: Tier[] = [
  {
    title: "Plan stress-test (fast)",
    who: "You already have an itinerary and want to reduce fragility.",
    includes: [
      "Connection chain review (last services, buffers, day-one overload)",
      "Winter fragility checks (pace, daylight, recovery margin)",
      "Top 5 verification questions to send providers",
    ],
    note: "No promises. Just risk-based pruning and verification prompts.",
  },
  {
    title: "Rental & payment check",
    who: "You’re booking rentals and want to avoid deposit/card surprises.",
    includes: [
      "Deposit and card-rule risk review",
      "Pickup/return timing constraints review",
      "A short “confirm in writing” checklist tailored to your booking",
    ],
    note: "Desk rules override aggregator summaries. We structure confirmations accordingly.",
  },
  {
    title: "Decision-first routing",
    who: "You’re unsure which mode chain fits your tolerance and constraints.",
    includes: [
      "Mode tradeoff summary (train/bus/flight/rental)",
      "Least-fragile chain recommendation (based on your constraints)",
      "Fallback planning: what happens if you miss one segment",
    ],
    note: "We optimize for fragility reduction, not maximum activity density.",
  },
];

export default function GetHelpPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Get help: calm, risk-based review before you pay."
        subtitle="We don’t promise outcomes. We reduce brittle assumptions: deposits, timing constraints, winter fragility, and desk-level rules."
        imageSrc="/images/hero/hero-get-help.jpg"
        primaryCta={{
          href: "mailto:hello@thenorthtrip.com?subject=TheNorthTrip%20Help%20Request",
          label: "Email: hello@thenorthtrip.com",
        }}
        secondaryCta={{ href: "/offer-checklist", label: "Start with the checklist" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get help</h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          If you want a calm, risk-based review before you pay, this is it. The goal is not perfection. It’s fewer brittle assumptions.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Card key={t.title} className="flex flex-col p-6">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-brand-text/70">
                <span className="font-semibold">Best for:</span> {t.who}
              </p>

              <ul className="mt-3 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
                {t.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-brand-text/60">{t.note}</p>

              <div className="mt-auto pt-5">
                <CtaButton
                  href="mailto:hello@thenorthtrip.com?subject=TheNorthTrip%20Help%20Request"
                  variant="success"
                  className="w-full"
                >
                  Request this review
                </CtaButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6 bg-slate-50">
            <h3 className="text-lg font-semibold">How to request help</h3>
            <ol className="mt-3 list-decimal pl-5 text-sm text-brand-text/70 space-y-2">
              <li>Send your itinerary or booking links.</li>
              <li>State your constraints (budget, winter comfort, risk tolerance, fixed dates).</li>
              <li>We reply with a structured risk review and the exact verification questions.</li>
            </ol>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@thenorthtrip.com?subject=TheNorthTrip%20Help%20Request"
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-5 py-3 text-white font-semibold hover:bg-orange-700"
              >
                Email now
              </a>
              <Link
                href="/offer-checklist"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-slate-900 font-semibold hover:bg-white"
              >
                Start with the checklist
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">What this is (and isn’t)</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>We don’t guarantee outcomes (weather, operators, availability).</li>
              <li>We focus on verification and fragility reduction.</li>
              <li>If a rule matters, we push you to confirm it in writing with the enforcing provider.</li>
            </ul>

            <div className="mt-5">
              <Link href="/policy" className="text-sm font-semibold hover:underline">
                Read the policy →
              </Link>
            </div>
          </Card>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
