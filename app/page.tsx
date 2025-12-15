import HeroSplit from "@/components/HeroSplit";
import TopicGrid from "@/components/TopicGrid";
import CTABox from "@/components/CTABox";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <HeroSplit />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Three guides, built for long-tail search</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-white/70">
          We target the smaller, “annoyingly specific” queries that convert better: deposit holds, debit pickup rules,
          winter add-ons, and tour inclusions. Big keywords are expensive. Humans are predictable.
        </p>
        <TopicGrid />
      </section>

      <section className="grid gap-6 rounded-2xl border border-white/15 bg-white/5 p-6 lg:grid-cols-3">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/90">Real costs</p>
          <p className="text-sm text-white/65">Deposits, insurance, winter extras, after-hours fees.</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/90">Local context</p>
          <p className="text-sm text-white/65">Helsinki airport vs city pickup logistics and time windows.</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/90">Clear comparisons</p>
          <p className="text-sm text-white/65">Tour inclusions, group sizes, cancellation expectations.</p>
        </div>
      </section>

      <CTABox
        title="Need a booking sanity-check?"
        text="Send your offer (screenshot or summary). We’ll flag deposit traps, insurance upsells, and winter add-ons. No drama, no fluff."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/car-rental-helsinki"
        secondaryLabel="Start with Helsinki car rental"
      />
    </main>
  );
}
