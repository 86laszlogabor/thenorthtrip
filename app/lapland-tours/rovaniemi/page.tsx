import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Rovaniemi Tours Hub | Lapland | TheNorthTrip",
  description:
    "Rovaniemi base decisions: tour types, meeting point traps, winter buffers, and a booking path that survives delays.",
  openGraph: {
    title: "Rovaniemi Tours Hub | TheNorthTrip",
    description:
      "Rovaniemi base decisions: tour types, meeting point traps, winter buffers, and a booking path that survives delays.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rovaniemi Tours Hub | TheNorthTrip",
    description:
      "Rovaniemi base decisions: tour types, meeting point traps, winter buffers, and a booking path that survives delays.",
    images: ["/images/og/og-lapland-rovaniemi.jpg"],
  },
};

const tourTypes = [
  { title: "Aurora hunt", body: "Verify pickup window + duration. Don’t bet your last night on one slot." },
  { title: "Husky safari", body: "Confirm what’s included (gear, transfers) and the real time commitment." },
  { title: "Snowmobile", body: "Check requirements and what happens if weather shifts or a session is cancelled." },
  { title: "Santa Village add-on", body: "Easy to overschedule. Pair with one key activity, not three." },
];

const traps = [
  "Meeting point ambiguity (hotel pickup vs central point)",
  "Missing gear assumptions (boots/thermals)",
  "Stacking tours back-to-back without buffer",
  "Confusing ‘included transfers’ vs optional add-ons",
];

export default function RovaniemiHubPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Rovaniemi: the safest base for first-time Lapland."
        subtitle="Highest tour density, easiest logistics. Still: meeting points and buffers decide if the trip feels smooth."
        imageSrc="/images/hero/hero-lapland-rovaniemi-aurora.jpg"
        primaryCta={{ href: "/lapland-tours", label: "Back to Lapland tours hub" }}
        secondaryCta={{ href: "/lapland-tours/destinations", label: "All destinations" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">Lapland / Rovaniemi</p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">What to book here (without overbooking)</h2>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tourTypes.map((t) => (
            <Card key={t.title}>
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{t.body}</p>
            </Card>
          ))}
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Booking path</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Pick your base → pick 1 anchor tour → add 1 flexible slot → keep one recovery day.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Common traps</h3>
            <ul className="mt-4 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              {traps.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/lapland-tours/partners/getyourguide" className="font-semibold hover:underline text-brand-text/70">
                GetYourGuide partner →
              </Link>
              <Link href="/lapland-tours/partners/viator" className="font-semibold hover:underline text-brand-text/70">
                Viator partner →
              </Link>
              <Link href="/lapland-tours/partners/arctic-lifestyle" className="font-semibold hover:underline text-brand-text/70">
                Arctic Lifestyle partner →
              </Link>
            </div>
            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/lapland-tours" variant="outline" className="w-full">
                Back to tours hub
              </CtaButton>
              <CtaButton href="/offer-checklist" variant="outline" className="w-full">
                Offer checklist
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
