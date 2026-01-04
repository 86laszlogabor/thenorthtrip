import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saariselkä Tours Hub | Lapland | TheNorthTrip",
  description:
    "Saariselkä base decisions: aurora-first planning, quieter vibe, and why buffers matter more when options are fewer.",
  openGraph: {
    title: "Saariselkä Tours Hub | TheNorthTrip",
    description:
      "Saariselkä base decisions: aurora-first planning, quieter vibe, and why buffers matter more when options are fewer.",
    images: ["/images/og/og-lapland-saariselka.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saariselkä Tours Hub | TheNorthTrip",
    description:
      "Saariselkä base decisions: aurora-first planning, quieter vibe, and why buffers matter more when options are fewer.",
    images: ["/images/og/og-lapland-saariselka.jpg"],
  },
};

const points = [
  {
    title: "Aurora-first base",
    body: "Excellent signal, fewer crowds. Don’t gamble the whole trip on one single aurora night.",
  },
  {
    title: "Fewer recovery options",
    body: "Missed tour slots are harder to replace. Buffers matter more here than in bigger hubs.",
  },
  {
    title: "Meeting point precision",
    body: "Pickup locations must be exact. Small bases punish vague instructions.",
  },
  {
    title: "Gear assumptions",
    body: "Missing boots or thermals turns ‘quiet Lapland magic’ into pure suffering.",
  },
];

export default function SaariselkaHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Saariselkä: quieter base, stronger aurora signal."
        subtitle="Less crowded, more remote. Fewer fallback options, so planning matters more."
        imageSrc="/images/hero/hero-lapland-saariselka.jpg"
        primaryCta={{
          href: "/lapland-tours/destinations",
          label: "All destinations",
        }}
        secondaryCta={{
          href: "/lapland-tours",
          label: "Back to tours hub",
        }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland / Saariselkä
        </p>

        {/* Key decision points */}
        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{p.body}</p>
            </Card>
          ))}

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Safe booking pattern</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              One anchor activity → one flexible day → one buffer night. Avoid stacking tight time
              windows.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get help planning
              </CtaButton>
            </div>
          </Card>
        </div>

        {/* Internal routing */}
        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Browse tours</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link
                href="/lapland-tours/partners/getyourguide"
                className="font-semibold text-brand-text/70 hover:underline"
              >
                GetYourGuide listings →
              </Link>
              <Link
                href="/lapland-tours/partners/viator"
                className="font-semibold text-brand-text/70 hover:underline"
              >
                Viator listings →
              </Link>
            </div>
            <div className="mt-auto pt-5">
              <CtaButton
                href="/lapland-tours/destinations"
                variant="outline"
                className="w-full"
              >
                Back to destinations
              </CtaButton>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Common mistake</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              “Small base equals simple.” The vibe is calm. Logistics are not magically simpler.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">
          Last verified: 2025-12-31
        </p>
      </Section>
    </div>
  );
}
