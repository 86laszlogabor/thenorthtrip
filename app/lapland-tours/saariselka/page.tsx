import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Saariselkä Tours Hub | Lapland | TheNorthTrip",
  description:
    "Saariselkä base decisions: quieter Lapland routing, transport dependencies, and buffer-first planning so your schedule survives winter friction.",
  openGraph: {
    title: "Saariselkä Tours Hub | TheNorthTrip",
    description:
      "Saariselkä base decisions: quieter Lapland routing, transport dependencies, and buffer-first planning so your schedule survives winter friction.",
    images: ["/images/og/og-lapland-saariselka.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saariselkä Tours Hub | Lapland | TheNorthTrip",
    description:
      "Saariselkä base decisions: quieter Lapland routing, transport dependencies, and buffer-first planning so your schedule survives winter friction.",
    images: ["/images/og/og-lapland-saariselka.jpg"],
  },
};

const points = [
  {
    title: "Quieter base, fewer fallbacks",
    body: "Saariselkä rewards planning. If you miss a start time, recovery options are usually fewer than in bigger hubs.",
  },
  {
    title: "Transport dependency",
    body: "Confirm how you move between your accommodation, meeting points, and activities. Don’t assume it behaves like a city.",
  },
  {
    title: "One anchor per day",
    body: "Pick one time-sensitive block per day. Build the rest as flexible so one delay doesn’t collapse the whole itinerary.",
  },
  {
    title: "Winter friction is real",
    body: "Darkness, slower movement, and weather variance matter. Buffers aren’t ‘nice’. They’re the plan.",
  },
];

export default function SaariselkaHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Saariselkä: calm Lapland, built for people who plan."
        subtitle="Quieter base, fewer easy fallbacks. Build buffer-first days so winter friction doesn’t break your schedule."
        imageSrc="/images/hero/hero-lapland-saariselka.jpg"
        primaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
        secondaryCta={{ href: "/lapland-tours", label: "Back to tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Saariselkä</p>

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
              <Link href="/lapland-tours/partners/arctic-lifestyle" className="font-semibold hover:underline text-brand-text/70">
                Arctic Lifestyle partner →
              </Link>
              <Link href="/offer-checklist" className="font-semibold hover:underline text-brand-text/70">
                Offer checklist →
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
              Booking like a busy hub. Saariselkä works best with fewer, higher-quality days and more slack.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
