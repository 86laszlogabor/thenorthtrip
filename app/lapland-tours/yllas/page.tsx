import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Ylläs Tours Hub | Lapland | TheNorthTrip",
  description:
    "Ylläs base decisions: outdoors-heavy planning, distance reality, and the buffers that prevent schedule collapse.",
  openGraph: {
    title: "Ylläs Tours Hub | TheNorthTrip",
    description:
      "Ylläs base decisions: outdoors-heavy planning, distance reality, and the buffers that prevent schedule collapse.",
    images: ["/images/og/og-lapland-yllas.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ylläs Tours Hub | TheNorthTrip",
    description:
      "Ylläs base decisions: outdoors-heavy planning, distance reality, and the buffers that prevent schedule collapse.",
    images: ["/images/og/og-lapland-yllas.jpg"],
  },
};

const points = [
  {
    title: "Distance is the theme",
    body: "Routes are wider. Travel time is part of your day, not a footnote.",
  },
  {
    title: "Weather variance matters",
    body: "Your plan should survive a slower day. Build slack.",
  },
  {
    title: "Outdoor density",
    body: "Great if you want nature. Don’t overschedule tour slots.",
  },
  {
    title: "Gear included (or not)",
    body: "Verify clothing and boots. Missing gear is the fastest way to hate Lapland.",
  },
];

export default function YllasHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Ylläs: outdoors-heavy Lapland, if you respect distances."
        subtitle="Big nature feel. The failure mode is pretending travel time doesn’t exist."
        imageSrc="/images/hero/hero-lapland-yllas.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
        secondaryCta={{ href: "/lapland-tours", label: "Back to tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Lapland / Ylläs
        </p>

        {/* Facts badges (E-E-A-T polish, matches Rovaniemi pattern) */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand-text/70">
          <span className="rounded-full border border-slate-200 px-3 py-1">
            Largest ski area Finland
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            Pallas-Ylläs National Park
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            330km north Rovaniemi
          </span>
          <span className="rounded-full border border-slate-200 px-3 py-1">
            Strong aurora location
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{p.body}</p>
            </Card>
          ))}

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Safe booking path</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              1 anchor activity per day. Add buffers. Avoid “two tours + travel” fantasy days.
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
              <Link
                href="/lapland-tours/partners/getyourguide"
                className="font-semibold hover:underline text-brand-text/70"
              >
                Browse via GetYourGuide →
              </Link>
              <Link
                href="/lapland-tours/partners/viator"
                className="font-semibold hover:underline text-brand-text/70"
              >
                Browse via Viator →
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
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Copying a “Rovaniemi schedule” into Ylläs. Different geography, different risk.
            </p>
          </Card>
        </div>

        {/* Updated verification date */}
        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
