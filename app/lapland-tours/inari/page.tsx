import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Inari Tours Hub | Lapland | TheNorthTrip",
  description:
    "Inari base decisions: remote vibe, culture + aurora signal, and the buffers that keep logistics from breaking.",
  openGraph: {
    title: "Inari Tours Hub | TheNorthTrip",
    description:
      "Inari base decisions: remote vibe, culture + aurora signal, and the buffers that keep logistics from breaking.",
    images: ["/images/og/og-lapland-inari.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inari Tours Hub | TheNorthTrip",
    description:
      "Inari base decisions: remote vibe, culture + aurora signal, and the buffers that keep logistics from breaking.",
    images: ["/images/og/og-lapland-inari.jpg"],
  },
};

const points = [
  { title: "Remote signal", body: "Beautiful and quiet. But fewer immediate fallback options if you miss something." },
  { title: "Culture + nature mix", body: "Great base if you want more than activities. Plan one anchor per day." },
  { title: "Transport dependency", body: "Confirm how you move between points. Don’t assume it’s ‘like the city’." },
  { title: "Buffer-first planning", body: "In remote bases, slack is not luxury. It’s survival." },
];

export default function InariHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Inari: remote Lapland, with culture and quiet nights."
        subtitle="This base rewards planning. It punishes optimism. Buffers matter more than in busy hubs."
        imageSrc="/images/hero/hero-lapland-inari.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
        secondaryCta={{ href: "/lapland-tours", label: "Back to tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Inari</p>

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
              1 anchor activity → 1 flexible day → 1 buffer night. Keep your plan recoverable.
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
                Browse via GetYourGuide →
              </Link>
              <Link href="/lapland-tours/partners/viator" className="font-semibold hover:underline text-brand-text/70">
                Browse via Viator →
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
              Booking like a busy hub. Inari works best with fewer, higher-quality days.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
