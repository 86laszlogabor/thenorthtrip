import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
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
  { title: "Aurora-first base", body: "Great signal. But don’t gamble the whole trip on one night slot." },
  { title: "Fewer recovery options", body: "If you miss something, replacements are not always immediate. Plan slack." },
  { title: "Meeting point clarity", body: "Verify pickup exactness. Small hubs punish ambiguity." },
  { title: "Gear assumptions", body: "Missing boots/thermals turns ‘quiet vibe’ into suffering." },
];

export default function SaariselkaHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Saariselkä: quieter base, stronger aurora signal."
        subtitle="Less crowded, more remote feel. The tradeoff is fewer fallback options, so planning matters more."
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
              1 anchor activity → 1 flexible day → 1 buffer night. Avoid stacking tight windows.
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
            <h3 className="text-lg font-semibold">C
