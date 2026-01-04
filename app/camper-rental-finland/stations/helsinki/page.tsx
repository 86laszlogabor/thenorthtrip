import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Camper Pickup Station | TheNorthTrip",
  description:
    "Helsinki camper pickup reality: timing, handover friction, deposit rules, and a checklist that prevents desk surprises.",
  openGraph: {
    title: "Helsinki Camper Pickup Station | TheNorthTrip",
    description:
      "Helsinki camper pickup reality: timing, handover friction, deposit rules, and a checklist that prevents desk surprises.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Camper Pickup Station | TheNorthTrip",
    description:
      "Helsinki camper pickup reality: timing, handover friction, deposit rules, and a checklist that prevents desk surprises.",
    images: ["/images/og/og-helsinki-city-mobility.jpg"],
  },
};

const checks = [
  { title: "Handover time is not 5 minutes", body: "Expect walkthrough + paperwork. Build buffer into your first day." },
  { title: "Deposit/card rules", body: "Confirm acceptance and hold amount in writing. This is the classic failure point." },
  { title: "Return rules", body: "Return window and cleaning rules decide how stressful the last day is." },
  { title: "First-day plan", body: "Don’t schedule tight sightseeing right after pickup. You’re still ‘starting up’." },
];

export default function CamperStationHelsinkiPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki camper pickup: avoid the first-day collapse."
        subtitle="Handover friction + deposit rules are the real risks. Build buffer, keep day 1 simple."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Back to camper hub" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Terms checklist" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Camper / Stations / Helsinki</p>

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
              Don’t argue at the desk with zero documentation. Escalate early.
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
              <Link href="/camper-rental-finland/routes/coastal" className="font-semibold hover:underline text-brand-text/70">
                Coastal route →
              </Link>
              <Link href="/camper-rental-finland/routes/southern-lakes" className="font-semibold hover:underline text-brand-text/70">
                Southern lakes route →
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
              Trying to “start exploring immediately”. Day 1 is for setup and stability.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
