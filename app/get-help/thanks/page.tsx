import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import TrustStrip from "@/components/TrustStrip";
import CompareCTA from "@/components/CompareCTA";
import FAQ from "@/components/FAQ";
import CopyBox from "@/components/CopyBox";

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
    "Credit/debit card rules (name match, limits)",
    "Airport vs city pickup traps (timing, fees, fuel policy)",
    "Winter add-ons: what’s mandatory vs upsell",
    "Insurance wording: exclusions + duplicates",
    "For tours: inclusions and on-site costs",
  ];

  const faqs = [
    {
      q: "What should I send?",
      a: "Pickup+dropoff details, driver age, card type, deposit amount, and screenshots from checkout (insurance/deposit step).",
    },
    {
      q: "Do you book it for me?",
      a: "No. We flag risk and confusing terms. You book directly with the provider/marketplace.",
    },
    {
      q: "Is this free?",
      a: "Yes for now. If it becomes paid later, the page will say it clearly.",
    },
  ];

  const template = `OFFER CHECK (thenorthtrip)

1) Link (if any):
2) Pickup location + time/date:
3) Dropoff location + time/date:
4) Driver age:
5) Card type at pickup (credit/debit):
6) Deposit shown (amount + currency):
7) Deposit: hold or payment?
8) Airport surcharge / out-of-hours fee?
9) Fuel policy:
10) Winter add-ons:
11) Insurance: what’s excluded?
12) Cancellation rules:
13) Notes / concerns:
`;

  const subject = encodeURIComponent("Offer check request (thenorthtrip)");
  const body = encodeURIComponent(template);

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Ask before booking</p>
        <h1 className="text-3xl font-semibold sm:text-5xl text-white">
          Send your offer. We’ll sanity-check it before you pay.
        </h1>
        <p className="max-w-2xl text-white/70">
          Deposits, debit pickup rules, winter add-ons, airport fees, insurance wording. The stuff that actually costs money.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            href={`mailto:hello@thenorthtrip.com?subject=${subject}&body=${body}`}
          >
            Email the template
          </a>

          <Link
            href="/get-help/thanks"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            After you sent it → Thanks page
          </Link>
        </div>
      </header>

      <TrustStrip items={checks} />

      <CopyBox text={template} />

      <CompareCTA
        title="Not sure which offer to pick?"
        text="Send two options. We’ll tell you which one is cleaner and why."
        primaryHref="/car-rental-helsinki"
        primaryLabel="Helsinki car rental guide"
        secondaryHref="/blog"
        secondaryLabel="Read the blog"
      />

      <FAQ items={faqs} />

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">Privacy</h2>
        <p className="mt-2 text-sm text-white/70">
          Don’t send full card numbers. Ever. Blur personal info in screenshots. See{" "}
          <Link className="underline decoration-white/30 hover:decoration-white/60" href="/privacy">
            Privacy
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
