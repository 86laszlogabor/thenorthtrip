import HeroSplit from "@/components/HeroSplit";
import TopicGrid from "@/components/TopicGrid";
import CTABox from "@/components/CTABox";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
      <HeroSplit />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Start with the small-market questions</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          We focus on the boring details people search right before paying: deposit holds, debit pickup rules, winter
          add-ons, and tour inclusions.
        </p>
        <TopicGrid />
      </section>

      <CTABox
        title="Need help before booking?"
        text="Send your offer (screenshot or summary). We’ll flag deposit traps, card requirements, winter add-ons, and tour inclusions."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/blog"
        secondaryLabel="Read the blog"
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Why this site exists</h2>
        <p className="max-w-2xl text-white/70">
          Most booking sites focus on the headline price. We focus on the rules that decide whether you get the car, how
          big the deposit hold is, and what gets added at the counter.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          <Link
            href="/car-rental-helsinki"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">Car rental Helsinki</h3>
            <p className="mt-2 text-sm text-white/70">Airport vs city pickup, deposits, and card rules.</p>
          </Link>

          <Link
            href="/camper-rental-finland"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">Camper rental Finland</h3>
            <p className="mt-2 text-sm text-white/70">Winter readiness, heating, power, mileage caps.</p>
          </Link>

          <Link
            href="/lapland-tours"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">Lapland tours</h3>
            <p className="mt-2 text-sm text-white/70">What’s included, what’s not, and on-site costs.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
