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
    images: ["/images/og/og-camper-station-helsinki.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helsinki Camper Pickup Station | TheNorthTrip",
    description:
      "Helsinki camper pickup reality: timing, handover friction, deposit rules, and a checklist that prevents desk surprises.",
    images: ["/images/og/og-camper-station-helsinki.jpg"],
  },
};

const checks = [
  {
    title: "Handover time is not 5 minutes",
    body: "Expect a walkthrough plus paperwork. Buffer your first day like you mean it.",
    icon: "🕒",
  },
  {
    title: "Deposit/card rules",
    body: "Confirm acceptance rules and hold policy in writing. This is the classic failure point.",
    icon: "💳",
  },
  {
    title: "Return rules",
    body: "Return window and cleaning rules decide how stressful the last day becomes.",
    icon: "🧼",
  },
  {
    title: "First-day plan",
    body: "Don’t schedule tight sightseeing right after pickup. Day 1 is still ‘startup’.",
    icon: "🧩",
  },
] as const;

const nextSteps = [
  {
    label: "Coastal route",
    href: "/camper-rental-finland/routes/coastal",
    note: "Scenic, but only works when you cap distance and plan overnights early.",
    icon: "🌊",
  },
  {
    label: "Southern lakes route",
    href: "/camper-rental-finland/routes/southern-lakes",
    note: "Slow-win route. Short days, early stops, and certainty over improvisation.",
    icon: "🌲",
  },
  {
    label: "Rental terms checklist",
    href: "/rental-terms-prices",
    note: "If one rule can break your plan, confirm it before you pay.",
    icon: "🧾",
  },
  {
    label: "Offer checklist",
    href: "/offer-checklist",
    note: "Use it as a filter before bookings. Prevents quiet, expensive surprises.",
    icon: "✅",
  },
] as const;

function Pill({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
      <span aria-hidden="true">{icon}</span>
      <span>{children}</span>
    </span>
  );
}

export default function CamperStationHelsinkiPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Helsinki camper pickup: avoid the first-day collapse."
        subtitle="Handover friction + deposit rules are the real risks. Build buffer, keep day 1 simple."
        imageSrc="/images/hero/hero-helsinki-airport.jpg"
        primaryCta={{ href: "/camper-rental-finland", label: "Camper rentals" }}
        secondaryCta={{ href: "/rental-terms-prices", label: "Rental terms checklist" }}
      />

      <Section>
        <p className="text-xs font-semibold tracking-wide text-brand-text/60">
          Camper / Stations / Helsinki
        </p>

        <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight">
          Make pickup day boring on purpose
        </h2>

        <p className="mt-4 max-w-3xl text-sm md:text-base text-brand-text/75">
          Camper trips don’t usually fail on day 6. They fail on day 1, when your plan assumes “quick pickup” and
          reality adds handover friction, rules, and time you didn’t budget for.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill icon="🕒">Handover buffer</Pill>
          <Pill icon="💳">Payment rules</Pill>
          <Pill icon="🧼">Return constraints</Pill>
          <Pill icon="🧩">Simple day 1</Pill>
        </div>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {checks.map((c) => (
            <Card key={c.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <span aria-hidden="true">{c.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-brand-text/70">{c.body}</p>
                </div>
              </div>
            </Card>
          ))}

          <Card className="flex flex-col p-6 bg-slate-50">
            <h3 className="text-lg font-semibold">If anything feels unclear</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Don’t argue at the desk with zero documentation. Escalate early and get rules in writing.
            </p>
            <div className="mt-auto pt-5">
              <CtaButton href="/get-help" variant="success" className="w-full">
                Get help
              </CtaButton>
            </div>
          </Card>
        </div>

        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Next steps</h3>
            <p className="mt-2 text-sm text-brand-text/70">
              Pick the next page based on what you’re actually doing next. Radical concept, I know.
            </p>

            <div className="mt-5 grid gap-3">
              {nextSteps.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="group inline-flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white">
                      <span aria-hidden="true">{x.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{x.label}</div>
                      <div className="mt-1 text-sm text-brand-text/70">{x.note}</div>
                    </div>
                  </div>
                  <span
                    className="mt-1 font-semibold text-slate-900/60 group-hover:text-slate-900"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <CtaButton href="/camper-rental-finland" variant="outline" className="w-full">
                Back to camper rentals
              </CtaButton>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Common trap</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Trying to “start exploring immediately”. Day 1 is for setup and stability.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Simple rule</div>
              <p className="mt-2 text-sm text-brand-text/70">
                If you’re leaving the pickup and you still haven’t decided where you’ll sleep, the plan is already fragile.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              <CtaButton href="/offer-checklist" variant="primary" className="w-full">
                Open offer checklist
              </CtaButton>
              <CtaButton href="/rental-terms-prices" variant="outline" className="w-full">
                Rental terms checklist
              </CtaButton>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2026-01-09</p>
      </Section>
    </div>
  );
}
