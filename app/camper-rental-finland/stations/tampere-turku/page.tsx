import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Tampere & Turku Camper Stations | TheNorthTrip",
  description:
    "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
  openGraph: {
    title: "Tampere & Turku Camper Stations | TheNorthTrip",
    description:
      "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
    images: ["/images/og/og-finland-cities-hidden-gems.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tampere & Turku Camper Stations | TheNorthTrip",
    description:
      "Tampere/Turku pickup logic: when these stations make sense, what to verify, and how to route into southern Finland safely.",
    images: ["/images/og/og-finland-cities-hidden-gems.jpg"],
  },
};

const checks = [
  { title: "Why start here", body: "Good if your route is south/west-focused and you want less Helsinki friction." },
  { title: "Handover buffer", body: "Still expect walkthrough + paperwork. Don’t plan tight first-day routes." },
  { title: "Return constraints", body: "Return time windows and cleaning rules decide your last day." },
  { title: "Overnight certainty", body: "Plan night 1 before you arrive. Late improvisation is the classic failure." },
];

export default function CamperStationTampereTurkuPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Tampere/Turku stations: better for southern routes, if you plan cleanly."
        subtitle="Use these stations when your route doesn’t need Helsinki. The same rules still apply: buffer and certainty."
        imageSrc="/images/hero/hero-finland-lakes.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Back to camper hub" }}
        secondaryCta={{ href: "/camper-rental-finland/routes/southern-lakes", label: "Southern lakes route" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Camper / Stations / Tampere–Turku</p>

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
              Confirm the rules before you pay. Station differences are real.
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
              <Link href="/camper-rental-finland/routes/southern-lakes" className="font-semibold hover:underline text-brand-text/70">
                Southern lakes route →
              </Link>
              <Link href="/camper-rental-finland/routes/coastal" className="font-semibold hover:underline text-brand-text/70">
                Coastal route →
              </Link>
            </div>
            <div className="mt-auto pt-5">
              <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
                Back to camper hub
              </CtaButton>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Treating the station choice as irrelevant. It changes friction and timing.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
