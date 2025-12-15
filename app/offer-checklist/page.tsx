import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Offer checklist: what to verify before paying",
  description:
    "Copy-paste checklist for car rentals, campers, and tours: deposits, card rules, winter add-ons, inclusions, and cancellation.",
  path: "/offer-checklist",
  keywords: ["offer checklist", "car rental deposit hold checklist", "debit card pickup checklist"],
});

export default function OfferChecklistPage() {
  const template = `OFFER CHECKLIST (copy-paste)

1) Link:
2) Pickup location + time/date:
3) Dropoff location + time/date:
4) Driver age:
5) Card type at pickup (credit/debit):
6) Deposit shown (amount + currency):
7) Deposit: hold or payment?
8) Airport surcharge / out-of-hours fee?
9) Fuel policy:
10) Winter add-ons (tires, chains, windshield, etc):
11) Insurance: what’s excluded?
12) Cancellation rules:
13) Notes / concerns:
`;

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white sm:text-5xl">Offer checklist</h1>
        <p className="text-white/70">Use this before paying. Saves money and prevents pickup drama.</p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">Copy-paste template</h2>
        <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
{template}
        </pre>

        <div className="flex gap-3">
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the blog
          </Link>
        </div>
      </section>
    </main>
  );
}
