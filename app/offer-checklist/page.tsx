import React from "react";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import CTACluster from "@/components/CTACluster";

export const metadata: Metadata = buildMetadata({
  title: "Offer checklist",
  description: "A no-nonsense checklist to compare offers and avoid hidden costs.",
  path: "/offer-checklist",
});

const CHECKS = [
  { title: "Payment method accepted", desc: "Credit card vs debit card. If it’s not explicit, assume credit is required." },
  { title: "Deposit amount + hold time", desc: "How much gets blocked and how long until it releases (often bank-dependent)." },
  { title: "Insurance: excess + exclusions", desc: "Ignore marketing names. Confirm deductible and common exclusions." },
  { title: "Fuel policy", desc: "Full-to-full is usually cleanest. Other policies hide costs." },
  { title: "Mileage and borders", desc: "Unlimited mileage? Cross-border allowed? Verify before booking." },
  { title: "Cancellation terms", desc: "Free cancellation window and what counts as a no-show." },
];

export default function OfferChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
      <div className="rounded-3xl border border-white/10 bg-gray-900/30 p-7 md:p-9">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Offer checklist</h1>
        <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl">
          Use this before you book anything. It’s boring. That’s why it works.
        </p>
      </div>

      <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {CHECKS.map((c) => (
          <div key={c.title} className="rounded-2xl border border-white/10 bg-gray-900/40 p-6 hover:bg-gray-900/60 transition">
            <div className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-md border border-white/20 bg-white/5" />
              <div>
                <div className="text-white font-semibold">{c.title}</div>
                <div className="mt-2 text-sm text-gray-300 leading-relaxed">{c.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <CTACluster
          title="Apply it to a pillar"
          subtitle="Pick what you’re actually booking, then use the pillar guides to avoid common traps."
          buttons={[
            { label: "Car rental Helsinki", href: "/car-rental-helsinki", variant: "primary" },
            { label: "Camper rentals", href: "/camper-rental-finland", variant: "secondary" },
            { label: "Lapland tours", href: "/lapland-tours", variant: "secondary" },
          ]}
        />
      </section>

      <section className="mt-10 rounded-3xl border border-white/10 bg-gray-900/30 p-7">
        <h2 className="text-xl font-semibold text-white">Quick copy template</h2>
        <p className="mt-2 text-gray-300">
          Paste this into your notes while comparing offers:
        </p>

        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-gray-200">
{`Offer:
Price:
Payment method:
Deposit amount:
Deposit hold time:
Insurance excess:
Key exclusions:
Fuel policy:
Mileage:
Cancellation:`}
        </pre>
      </section>
    </main>
  );
}
