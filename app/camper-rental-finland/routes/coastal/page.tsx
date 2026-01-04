import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Coastal Camper Route | Finland | TheNorthTrip",
  description:
    "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
  openGraph: {
    title: "Coastal Camper Route | TheNorthTrip",
    description:
      "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
    images: ["/images/og/og-camper-coastal.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Camper Route | TheNorthTrip",
    description:
      "Coastal camper routing: what to verify, timing buffers, and how to keep a scenic plan from collapsing into logistics.",
    images: ["/images/og/og-camper-coastal.jpg"],
  },
};

const checks = [
  { title: "Daily distance cap", body: "Set a max driving distance. Camper pace is slower than car optimism." },
  { title: "Overnight plan", body: "Know your overnight options before you arrive tired. Don’t improvise late." },
  { title: "Weather buffers", body: "Wind + rain changes your day. Build slack and your plan stays calm." },
  { title: "Return constraints", body: "Return time and cleaning rules are real. Don’t schedule them like a quick car drop." },
];

export default function CamperCoastalRoutePage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Coastal route: scenic, but don’t turn it into a fragile schedule."
        subtitle="Camper trips collapse when you copy a car itinerary. Set distance caps and plan overnights like an adult."
        imageSrc="/images/hero/hero-camper-coastal.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Back to camper hub" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Terms checklist" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Camper / Routes / Coastal</p>

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
              Camper logistics are “small rules that become big problems”. Escalate early.
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
              <Link href="/camper-rental-finland/stations/helsinki" className="font-semibold hover:underline text-brand-text/70">
                Helsinki pickup station →
              </Link>
              <Link href="/getting-around-finland" className="font-semibold hover:underline text-brand-text/70">
                Compare transport modes →
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
              Planning “one more stop” because it looks close. Camper friction is cumulative.
            </p>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
