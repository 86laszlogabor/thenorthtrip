import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Rovaniemi Camper Station | Lapland | TheNorthTrip",
  description:
    "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
  openGraph: {
    title: "Rovaniemi Camper Station | TheNorthTrip",
    description:
      "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovaniemi Camper Station | TheNorthTrip",
    description:
      "Rovaniemi camper station reality: winter readiness, handover friction, and routing into Lapland tours safely.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
};

const checks = [
  { title: "Winter readiness", body: "Confirm heating/insulation support in writing. ‘Probably fine’ is not a spec." },
  { title: "Handover buffer", body: "You still need time for walkthrough + paperwork. Don’t schedule tight slots." },
  { title: "Overnight certainty", body: "Plan the first night early. Fatigue + darkness makes improvisation expensive." },
  { title: "Route realism", body: "Distances are bigger in Lapland. Build days that survive slower pace." },
];

export default function CamperStationRovaniemiPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Rovaniemi camper station: winter rules decide everything."
        subtitle="Make the plan recoverable: winter specs in writing, handover buffer, and short first-day targets."
        imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Back to camper hub" }}
        secondaryCta={{ href: "/lapland-tours", label: "Lapland tours hub" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Camper / Stations / Rovaniemi</p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{c.body}</p>
            </Card>
          ))}
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">If anything feels unclear</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Winter + camper + uncertainty is how trips break. Escalate early.
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
            <h3 className="text-lg font-semibold">Next routing</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/camper-rental-finland/routes/helsinki-lapland" className="font-semibold hover:underline text-brand-text/70">
                Helsinki–Lapland route →
              </Link>
              <Link href="/lapland-tours/rovaniemi" className="font-semibold hover:underline text-brand-text/70">
                Rovaniemi tours hub →
              </Link>
            </div>
            <div className="mt-auto pt-5">
              <CtaButton href="/lapland-tours" variant="outline" className="w-full">
                Lapland tours hub
              </CtaButton>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Assuming the first night will be “easy to find”. In Lapland, certainty wins.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
