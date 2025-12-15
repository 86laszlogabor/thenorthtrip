import React from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CTACluster from "@/components/CTACluster";
import AffiliateLink from "@/components/AffiliateLink";

export const metadata: Metadata = buildMetadata({
  title: "Offer checklist",
  description: "A no-nonsense checklist to compare travel offers and avoid hidden costs.",
  path: "/offer-checklist",
});

export default function OfferChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
      <h1 className="text-3xl font-bold text-white">Offer checklist</h1>
      <p className="mt-3 text-white/80 leading-relaxed">
        Use this to compare offers like an adult. Deposits, insurance, desk rules, cancellation. The stuff that actually matters.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <CTACluster
          title="Car rental: before you book"
          subtitle="Make sure the payment method and deposit policy match what you can actually provide at pickup."
          buttons={[
            { label: "Go to Helsinki car rental pillar", href: "/car-rental-helsinki", variant: "primary" },
            { label: "Browse car-rental blog posts", href: "/blog?pillar=%2Fcar-rental-helsinki", variant: "secondary" },
          ]}
        />

        <CTACluster
          title="Camper rentals: avoid surprise costs"
          subtitle="Season pricing + insurance exclusions + inspection steps. Don’t skip them."
          buttons={[
            { label: "Go to camper pillar", href: "/camper-rental-finland", variant: "primary" },
            { label: "Browse camper blog posts", href: "/blog?pillar=%2Fcamper-rental-finland", variant: "secondary" },
          ]}
        />

        <CTACluster
          title="Lapland tours: pick smarter"
          subtitle="You’re buying probability (weather, aurora), not certainty. Optimize for value."
          buttons={[
            { label: "Go to Lapland pillar", href: "/lapland-tours", variant: "primary" },
            { label: "Browse Lapland blog posts", href: "/blog?pillar=%2Flapland-tours", variant: "secondary" },
          ]}
        />

        <CTACluster
          title="Affiliate offers (example wiring)"
          subtitle="These are example external links showing correct rel/target. Replace with your real affiliate destinations."
          buttons={[
            { label: "Example external offer link", href: "https://example.com", variant: "primary", external: true },
            { label: "Read affiliate disclosure", href: "/affiliate-disclosure", variant: "secondary" },
          ]}
        />
      </div>

      <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Affiliate link example</h2>
        <p className="mt-2 text-white/80">
          This is what you’ll use inside articles and CTA blocks. It automatically adds <code>nofollow sponsored</code> etc.
        </p>

        <div className="mt-4">
          <AffiliateLink
            href="https://example.com"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
            label="Example affiliate link"
          >
            Example affiliate link (replace)
          </AffiliateLink>
        </div>
      </section>
    </main>
  );
}
