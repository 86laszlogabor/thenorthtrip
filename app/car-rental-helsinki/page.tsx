import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = pageMetadata({
  title: "Car rental Helsinki: deposit holds, credit/debit rules, winter costs",
  description:
    "Car rental in Helsinki explained: deposit holds, credit vs debit pickup rules, airport vs city pickup, and winter add-ons that affect real cost.",
  path: "/car-rental-helsinki",
  keywords: [
    "car rental helsinki deposit hold",
    "helsinki airport car rental credit card required",
    "car rental finland debit card pickup rules",
    "helsinki airport vs city pickup car rental",
    "finland winter car rental add-ons",
  ],
});

export default function CarRentalHelsinkiPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Car Rental in Helsinki: deposits, cards & real costs
        </h1>
        <p className="max-w-2xl text-white/70">
          This page targets high-intent searches: deposit holds, credit vs debit pickup rules, airport vs city pickup,
          and winter add-ons that quietly change your total.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for flexibility</h2>
          <p className="mt-2 text-sm text-white/70">
            City pickup, clearer rules, fewer last-minute counter surprises.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for price</h2>
          <p className="mt-2 text-sm text-white/70">
            Cheap rates can hide deposits, card rules, and mandatory add-ons.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for winter trips</h2>
          <p className="mt-2 text-sm text-white/70">
            Tires + visibility + coverage matter more than car class.
          </p>
        </div>
      </section>

      <section className="space-y-6 max-w-3xl">
        <h2 className="text-2xl font-semibold">Deposits & credit cards</h2>
        <p className="text-white/70">
          A “deposit” is usually a temporary card hold at pickup. Many providers prefer credit cards because holds and
          liability handling are simpler for them.
        </p>

        <h2 className="text-2xl font-semibold">Helsinki Airport vs city pickup</h2>
        <p className="text-white/70">
          Airport pickup is convenient but often stricter on card rules and timing. City pickup can be simpler if your
          situation is non-standard (debit card, late pickup, limited documents).
        </p>

        <h2 className="text-2xl font-semibold">Winter driving in Finland</h2>
        <p className="text-white/70">
          Focus on tires and visibility. Then consider coverage for windshield damage and roadside help if your route is
          remote or weather-sensitive.
        </p>
      </section>

      <CTABox
        title="Need help before booking?"
        text="Send your offer (link or screenshot). We’ll flag deposit traps, card requirements, and winter add-ons that change the real cost."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/blog"
        secondaryLabel="Read the blog"
      />
    </main>
  );
}
