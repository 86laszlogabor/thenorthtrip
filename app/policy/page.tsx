import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Policy | TheNorthTrip",
  description:
    "Affiliate disclosure, verification method, and what this site does and does not promise. Decision-first, no invented facts.",
  openGraph: {
    title: "Policy | TheNorthTrip",
    description:
      "Affiliate disclosure, verification method, and what this site does and does not promise. Decision-first, no invented facts.",
    images: ["/images/og/og-policy.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Policy | TheNorthTrip",
    description:
      "Affiliate disclosure, verification method, and what this site does and does not promise. Decision-first, no invented facts.",
    images: ["/images/og/og-policy.jpg"],
  },
};

export default function PolicyPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Policy: how this site works (and what we don’t promise)."
        subtitle="Affiliate disclosure, verification method, and realistic boundaries. No invented facts. No guaranteed outcomes."
        imageSrc="/images/hero/hero-policy.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/get-help", label: "Get help" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Policy</h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          This site is decision-first. It exists to reduce “desk-level surprises” by focusing on verification,
          tradeoffs, and realistic failure modes.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">Affiliate disclosure</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              Some pages contain affiliate links. If you click and book, we may earn a commission at no extra cost to you.
              We do not accept payment to publish false information or to promise outcomes.
            </p>
            <p className="mt-3 text-sm text-brand-text/70">
              Affiliate links are intended to support maintenance, verification, and writing. They do not change the guidance on this site.
            </p>
          </Card>

          <Card className="p-6 bg-slate-50">
            <h3 className="text-lg font-semibold">Verification method</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>
                We avoid invented policy facts. If something is time-sensitive, we use cautious language and recommend confirming with the
                enforcing provider.
              </li>
              <li>
                We use “Last verified” dates to indicate the most recent review cycle for a page.
              </li>
              <li>
                Desk rules and provider enforcement override aggregator summaries. When in doubt: confirm in writing.
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Card className="p-6">
            <h3 className="text-lg font-semibold">What we do not do</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-brand-text/70 space-y-2">
              <li>We do not guarantee tour outcomes (weather, wildlife, auroras, etc.).</li>
              <li>We do not promise specific prices, deposits, or acceptance rules across providers.</li>
              <li>We do not recommend “negotiation strategies” to override desk procedures.</li>
            </ul>
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Key pages</h3>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/offer-checklist">
              /offer-checklist
            </Link>
            <Link className="underline hover:text-slate-900" href="/getting-around-finland">
              /getting-around-finland
            </Link>
            <Link className="underline hover:text-slate-900" href="/rental-terms-prices">
              /rental-terms-prices
            </Link>
            <Link className="underline hover:text-slate-900" href="/car-rental-helsinki">
              /car-rental-helsinki
            </Link>
            <Link className="underline hover:text-slate-900" href="/camper-rental-finland">
              /camper-rental-finland
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours">
              /lapland-tours
            </Link>
            <Link className="underline hover:text-slate-900" href="/blog">
              /blog
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
