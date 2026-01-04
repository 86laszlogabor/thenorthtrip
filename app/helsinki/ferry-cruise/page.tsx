import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
  description:
    "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
  openGraph: {
    title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
    description:
      "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
    images: ["/images/og/og-helsinki-ferry-cruise.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Ferry & Cruise Timing | TheNorthTrip",
    description:
      "Combine rental + ferry safely: check-in cutoffs, vehicle category rules, buffer planning, and cancellation flexibility.",
    images: ["/images/og/og-helsinki-ferry-cruise.jpg"],
  },
};

const checks = [
  { title: "Check-in cutoff", body: "Treat check-in as the deadline, not the departure time." },
  { title: "Vehicle category rules", body: "Some tickets assume a class. If your rental differs, fees and rebooking happen." },
  { title: "Cancellation flexibility", body: "If pickup slips, you don’t want the ferry ticket to become a punishment." },
  { title: "Pickup timing risk", body: "Airport desk queues eat buffer. Don’t schedule ferry on the tightest day." },
  { title: "Backup plan", body: "If you miss it: know the alternative before you commit." },
];

export default function HelsinkiFerryCruisePage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Rental + ferry: timing rules are the real boss."
        subtitle="Most ferry failures are predictable: check-in cutoffs, vehicle rules, fragile schedules."
        imageSrc="/images/hero/hero-helsinki-ferry.jpg"
        primaryCta={{ href: "/car-rental-helsinki", label: "Back to car rental hub" }}
        secondaryCta={{ href: "/helsinki/airport-transfers", label: "Airport pickup reality" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Helsinki / Ferry &amp; cruise
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Plan the buffer first. Book second.
        </h2>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-brand-text/70">{c.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Decision table</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-brand-text/70 border-b border-slate-200">
                    <th className="py-2 pr-4">Scenario</th>
                    <th className="py-2 pr-4">Better move</th>
                    <th className="py-2">Why</th>
                  </tr>
                </thead>
                <tbody className="text-brand-text/70">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Same day pickup + ferry</td>
                    <td className="py-2 pr-4">Don’t make it tight</td>
                    <td className="py-2">Queues + delays are normal</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Uncertain arrival</td>
                    <td className="py-2 pr-4">Flexible ticket or later sailing</td>
                    <td className="py-2">Reduces cascading losses</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 pr-4 font-medium">Car mainly for city</td>
                    <td className="py-2 pr-4">Transit + ferry</td>
                    <td className="py-2">Less operational risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Internal routes</h3>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="/helsinki/sightseeing" className="font-semibold hover:underline text-brand-text/70">
                Sightseeing hubs →
              </Link>
              <Link href="/helsinki/restaurants" className="font-semibold hover:underline text-brand-text/70">
                Restaurant planning →
              </Link>
              <Link href="/rental-terms-prices" className="font-semibold hover:underline text-brand-text/70">
                Rental terms checklist →
              </Link>
            </div>

            <div className="mt-auto pt-5 grid gap-3">
              <CtaButton href="/car-rental-helsinki" variant="primary" className="w-full">
                Back to car rental hub
              </CtaButton>
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get Help
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
