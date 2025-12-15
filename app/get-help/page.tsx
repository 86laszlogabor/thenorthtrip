import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import CompareCTA from "@/components/CompareCTA";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = pageMetadata({
  title: "Ask before booking: we check deposits, card rules, winter add-ons",
  description:
    "Send your offer (screenshot or summary). We’ll flag deposit holds, debit pickup rules, winter add-ons, and tour inclusions before you pay.",
  path: "/get-help",
  keywords: [
    "car rental deposit hold helsinki",
    "debit card car rental finland",
    "winter add-ons car rental finland",
    "lapland tour inclusions",
  ],
});

export default function GetHelpPage() {
  const checks = [
    "Deposit hold size + how it’s charged (hold vs payment)",
    "Credit/debit card rules (name match, embossing, limits)",
    "Airport vs city pickup cost traps (timing, fees, fuel policy)",
    "Winter add-ons: what’s mandatory vs upsell",
    "Insurance wording: what’s excluded, what’s duplicated",
    "For tours: what’s included, what you’ll still pay on-site",
  ];

  const faqs = [
    {
      q: "What should I send?",
      a: "A screenshot of the checkout + the car class + pickup location/time. If you can, include the payment step showing deposit/insurance options.",
    },
    {
      q: "How fast do you reply?",
      a: "Usually same day. Worst case within 24 hours. If you’re booking within a few hours, include that in your message.",
    },
    {
      q: "Do you book it for me?",
      a: "No. We help you avoid the common traps and pick the cleaner offer. You book directly with the provider/marketplace.",
    },
    {
      q: "Is this free?",
      a: "Yes for now. If it becomes paid later, the page will say so clearly. No surprise invoices, you’re not renting a car from a villain.",
    },
  ];

  // Simple “no backend” lead capture:
  // - mailto template (works everywhere)
  // - optional: user can paste into their email client
  const subject = encodeURIComponent("Offer check request (thenorthtrip)");
  const body = encodeURIComponent(
    `Hi!\n\nPlease check this offer:\n\n1) Link (if any): \n2) Pickup location: \n3) Pickup time/date: \n4) Dropoff location/time: \n5) Driver age: \n6) Payment card type (credit/debit): \n7) Deposit shown (amount + currency): \n8) Notes / concerns: \n\nI can attach screenshots if needed.\n\nThanks!`
  );

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
          Ask before booking
        </p>
        <h1 className="text-3xl font-semibold sm:text-5xl text-white">
          Send your offer. We’ll sanity-check it before you pay.
        </h1>
        <p className="max-w-2xl text-white/70">
          Deposits, debit pickup rules, winter add-ons, airport fees, insurance wording. The boring stuff that costs money.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            href={`mailto:hello@thenorthtrip.com?subject=${subject}&body=${body}`}
          >
            Email your offer
          </a>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the blog first
          </Link>
        </div>

        <p className="text-xs text-white/60">
          If you don’t have that email set up yet: just paste the template into any message and send it later. Humans love friction.
        </p>
      </header>

      <TrustStrip items={checks} />

      <CompareCTA
        title="Not sure which offer to pick?"
        text="Send two options. We’ll tell you which one is cleaner and why."
        primaryHref="/car-rental-helsinki"
        primaryLabel="Start from Helsinki car rental guide"
        secondaryHref="/camper-rental-finland"
        secondaryLabel="Camper guide"
      />

      <FAQ items={faqs} />

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">Privacy</h2>
        <p className="mt-2 text-sm text-white/70">
          Don’t send full card numbers. Ever. You can blur personal info in screenshots.
          See <Link className="underline decoration-white/30 hover:decoration-white/60" href="/privacy">Privacy</Link>.
        </p>
      </section>
    </main>
  );
}
