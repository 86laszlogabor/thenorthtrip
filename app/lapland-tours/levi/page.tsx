import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Levi Tours Hub | Lapland | TheNorthTrip",
  description:
    "Levi base decisions: ski-first planning, packaged tours, timing buffers, and how to avoid peak-hour collisions.",
  openGraph: {
    title: "Levi Tours Hub | TheNorthTrip",
    description:
      "Levi base decisions: ski-first planning, packaged tours, timing buffers, and how to avoid peak-hour collisions.",
    images: ["/images/og/og-lapland-levi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Tours Hub | TheNorthTrip",
    description:
      "Levi base decisions: ski-first planning, packaged tours, timing buffers, and how to avoid peak-hour collisions.",
    images: ["/images/og/og-lapland-levi.jpg"],
  },
};

const blocks = [
  { title: "Ski-first itinerary", body: "Treat ski days as anchors. Add tours on non-ski days, not between sessions." },
  { title: "Aurora nights", body: "Don’t stack early mornings after a late aurora slot. Your body is part of logistics." },
  { title: "Packaged activities", body: "Convenient, but verify what’s included: gear, transfers, meeting point." },
  { title: "Costs & friction", body: "Resort pricing is real. Build budget buffers so decisions stay calm." },
];

export default function LeviHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Levi: resort convenience, if you don’t overschedule."
        subtitle="Great for ski + winter activities. The failure mode is stacking slots until timing collapses."
        imageSrc="/images/hero/hero-lapland-levi-ski.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
        secondaryCta={{ href: "/lapland-tours", label: "Back to tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Levi</p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <Card key={b.title}>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{b.body}</p>
            </Card>
          ))}
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Safe booking path</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              1 ski anchor day → 1 tour day → 1 flexible day. Keep one buffer night.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/lapland-tours/partners/getyourguide" className="font-semibold hover:underline text-brand-text/70">
                GetYourGuide partner →
              </Link>
              <Link href="/lapland-tours/partners/viator" className="font-semibold hover:underline text-brand-text/70">
                Viator partner →
              </Link>
            </div>
            <div className="mt-auto pt-5">
              <CtaButton href="/lapland-tours/destinations" variant="outline" className="w-full">
                Back to destinations
              </CtaButton>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              “It’s a resort so logistics are easy.” The resort is easy. Your schedule can still be fragile.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
