import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Southern Lakes Camper Route | Finland | TheNorthTrip",
  description:
    "Southern lakes routing: calm pace, overnight certainty, and how to avoid ‘we’ll figure it out’ failures.",
  openGraph: {
    title: "Southern Lakes Camper Route | TheNorthTrip",
    description:
      "Southern lakes routing: calm pace, overnight certainty, and how to avoid ‘we’ll figure it out’ failures.",
    images: ["/images/og/og-camper-southern-lakes.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southern Lakes Camper Route | TheNorthTrip",
    description:
      "Southern lakes routing: calm pace, overnight certainty, and how to avoid ‘we’ll figure it out’ failures.",
    images: ["/images/og/og-camper-southern-lakes.jpg"],
  },
};

const checks = [
  { title: "Low-speed plan", body: "This route is best when you keep days short and stop early." },
  { title: "Overnight certainty", body: "Decide overnight options before you arrive tired and late." },
  { title: "Food + water reality", body: "Stock basics. Rural convenience is not constant." },
  { title: "Return constraints", body: "Don’t schedule return like a car rental. Camper end-game has rules." },
];

export default function CamperSouthernLakesRoutePage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Southern lakes: calmer routing, if you stop pretending you can ‘wing it’."
        subtitle="This is the ‘slow win’ route. Short days, early stops, and certainty over spontaneity."
        imageSrc="/images/hero/hero-camper-lakes.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Back to camper hub" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Terms checklist" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Camper / Routes / Southern lakes</p>

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
              Camper trips fail from small assumptions. Confirm the rules before you pay.
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
              <Link href="/camper-rental-finland/stations/tampere-turku" className="font-semibold hover:underline text-brand-text/70">
                Tampere/Turku stations →
              </Link>
              <Link href="/helsinki/sightseeing" className="font-semibold hover:underline text-brand-text/70">
                Helsinki sightseeing hubs →
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
              Turning a calm route into a checklist race. The lakes route is supposed to be slower.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
