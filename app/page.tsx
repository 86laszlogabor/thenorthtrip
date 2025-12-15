import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSplit from "@/components/HeroSplit";
import TopicGrid from "@/components/TopicGrid";
import CTABox from "@/components/CTABox";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <HeroSplit />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Three guides, built for long-tail search
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">
            We target the smaller, annoyingly specific queries that convert better:
            deposit holds, debit pickup rules, winter add-ons, and tour inclusions.
          </p>
          <TopicGrid />
        </section>

        <CTABox
          title="Need a booking sanity-check?"
          text="Send your offer (screenshot or summary). We flag deposit traps, insurance upsells, and winter add-ons."
          primaryHref="/get-help"
          primaryLabel="Ask before booking"
          secondaryHref="/car-rental-helsinki"
          secondaryLabel="Start with Helsinki car rental"
        />
      </main>

      <SiteFooter />
    </>
  );
}

