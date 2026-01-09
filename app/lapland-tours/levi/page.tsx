import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Levi Tours Hub | Lapland | TheNorthTrip",
  description:
    "Levi base decisions: ski-first planning, packaged winter activities, timing buffers, and how to avoid schedule collisions.",
  openGraph: {
    title: "Levi Tours Hub | TheNorthTrip",
    description:
      "Levi base decisions: ski-first planning, packaged winter activities, timing buffers, and how to avoid schedule collisions.",
    images: ["/images/og/og-lapland-levi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Tours Hub | TheNorthTrip",
    description:
      "Levi base decisions: ski-first planning, packaged winter activities, timing buffers, and how to avoid schedule collisions.",
    images: ["/images/og/og-lapland-levi.jpg"],
  },
};

type Block = {
  title: string;
  body: string;
  badge: string;
};

const blocks: Block[] = [
  {
    title: "Ski-first itinerary",
    badge: "⛷️",
    body: "Treat ski days as anchors. Put tours on non-ski days, not squeezed between sessions.",
  },
  {
    title: "Late nights vs early starts",
    badge: "🌙",
    body: "Don’t stack early mornings after a late-night activity. Your energy level is part of logistics.",
  },
  {
    title: "Packaged activities",
    badge: "🧾",
    body: "Convenient, but verify what’s included: gear, transfers, meeting point, and cancellation rules.",
  },
  {
    title: "Budget & friction buffer",
    badge: "🧠",
    body: "Keep a buffer so you can choose calmly when timing changes. Tight budgets create fragile decisions.",
  },
];

export default function LeviHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Levi: resort convenience, if you don’t overschedule."
        subtitle="The failure mode is stacking slots until timing collapses. Build anchors, then add optional layers."
        imageSrc="/images/hero/hero-lapland-levi-ski.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
        secondaryCta={{ href: "/lapland-tours", label: "Back to tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Levi</p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Plan it like a system: anchors first, optional layers second
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Levi works best when you protect your anchors (ski days) and keep everything else recoverable.
          If your schedule depends on perfect timing, it will eventually meet reality.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <Card key={b.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-base">
                  {b.badge}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-brand-text/70">{b.body}</p>
                </div>
              </div>
            </Card>
          ))}

          <Card className="flex flex-col p-6">
            <h3 className="text-lg font-semibold">Safe booking path</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              1 ski anchor day → 1 tour day → 1 flexible day. Keep one buffer night.
              If you can’t absorb a delay, you’ve built a fragile plan.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col p-6">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link
                href="/lapland-tours/partners/getyourguide"
                className="font-semibold hover:underline text-brand-text/70"
              >
                GetYourGuide partner →
              </Link>
              <Link
                href="/lapland-tours/partners/viator"
                className="font-semibold hover:underline text-brand-text/70"
              >
                Viator partner →
              </Link>
              <Link
                href="/lapland-tours/destinations"
                className="font-semibold hover:underline text-brand-text/70"
              >
                Back to destinations →
              </Link>
            </div>

            <div className="mt-auto pt-5">
              <CtaButton href="/lapland-tours/destinations" variant="outline" className="w-full">
                Back to destinations
              </CtaButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              “It’s a resort so logistics are easy.” The resort can be easy.
              Your schedule can still be brittle if you stack fixed slots without buffer.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
