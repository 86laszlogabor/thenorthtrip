import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Policy | TheNorthTrip",
  description:
    "Affiliate disclosure, verification method, update logs, and why TheNorthTrip avoids invented policy facts or guaranteed outcomes.",
};

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-policy.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            TheNorthTrip
          </Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/blog" className="hover:text-slate-900">
              Blog
            </Link>
            <Link href="/offer-checklist" className="hover:text-slate-900">
              Offer checklist
            </Link>
            <Link href="/get-help" className="hover:text-slate-900">
              Get help
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Policy
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          This site is decision-first. It exists to reduce â€œdesk-level surprisesâ€
          by focusing on verification, tradeoffs, and realistic failure modes.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="font-semibold">Affiliate disclosure</h2>
            <p className="mt-2 text-sm text-slate-700">
              Some pages contain affiliate links. If you click and book, we may
              earn a commission at no extra cost to you. We do not accept payment
              to publish false information or to promise outcomes.
            </p>
            <p className="mt-3 text-sm text-slate-700">
              Affiliate links are intended to support maintenance, verification,
              and writing. They do not change the guidance on this site.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h2 className="font-semibold">Verification method</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>
                We avoid invented policy facts. If something is time-sensitive,
                we use cautious language and recommend confirming with the
                enforcing provider.
              </li>
              <li>
                We use â€œLast verifiedâ€ dates to indicate the most recent review
                cycle for a page.
              </li>
              <li>
                Desk rules and provider enforcement override aggregator summaries.
                When in doubt: confirm in writing.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold">What we do not do</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-2">
            <li>We do not guarantee tour outcomes (weather, wildlife, auroras, etc.).</li>
            <li>We do not promise specific prices, deposits, or acceptance rules across providers.</li>
            <li>We do not recommend â€œnegotiation strategiesâ€ to override desk procedures.</li>
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="font-semibold">Key pages</h2>
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
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">Last verified: 2025-12-31</p>
      </section>
    </main>
  );
}



