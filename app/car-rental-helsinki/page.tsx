import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import CompareCTA from "@/components/CompareCTA";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = pageMetadata({
  title: "Car rental Helsinki: deposits, debit rules, airport fees, winter add-ons",
  description:
    "Helsinki car rental guide focused on what actually bites: deposit holds, debit pickup rules, airport vs city fees, and winter add-ons.",
  path: "/car-rental-helsinki",
  keywords: [
    "car rental helsinki deposit hold",
    "helsinki airport car rental fees",
    "debit card car rental helsinki",
    "winter tires add-ons finland rental",
  ],
});

export default function CarRentalHelsinkiPage() {
  const checks = [
    "Deposit hold size and when it’s released",
    "Credit vs debit acceptance at pickup",
    "Airport vs city pickup real cost differences",
    "Fuel policy + out-of-hours fees",
    "Winter add-ons: tires, chains, windshield coverage",
    "Insurance: what you think you bought vs what you actually bought",
  ];

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Pillar guide</p>
        <h1 className="text-3xl font-semibold sm:text-5xl text-white">
          Car rental in Helsinki, without the “surprise” costs
        </h1>
        <p className="max-w-2xl text-white/70">
          We focus on what people google right before paying: deposit holds, debit rules, airport fees, winter add-ons.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-help"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read deposit + debit articles
          </Link>
        </div>
      </header>

      <TrustStrip items={checks} />

      <CompareCTA
        title="Quick path: book cleaner, not cheaper"
        text="If an offer looks too good, it’s usually deposit/card rules or airport fees. Send it and we’ll flag the traps."
        primaryHref="/get-help"
        primaryLabel="Send an offer for review"
        secondaryHref="/blog"
        secondaryLabel="See the blog"
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white">Start with these questions</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-white/75">
            <li>Is the “deposit” a hold or an extra payment?</li>
            <li>Does pickup require a credit card, or is debit allowed?</li>
            <li>Is it Helsinki Airport pickup, and are there airport surcharges?</li>
            <li>What’s mandatory in winter (and what’s just upsell)?</li>
            <li>What does the insurance actually exclude?</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">Related posts</h3>
          <div className="mt-3 space-y-2 text-sm">
            <Link className="block text-white/80 hover:text-white" href="/blog">
              → Deposit holds & card rules
            </Link>
            <Link className="block text-white/80 hover:text-white" href="/blog">
              → Airport vs city pickup cost
            </Link>
            <Link className="block text-white/80 hover:text-white" href="/blog">
              → Winter add-ons explained
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/60">
            We keep posts small and high-intent because nobody wants a novel while trying to book a Yaris.
          </p>
        </div>
      </section>
    </main>
  );
}
