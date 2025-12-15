import HeroSplit from "@/components/HeroSplit";
import TopicGrid from "@/components/TopicGrid";
import CTABox from "@/components/CTABox";
import RelatedPosts from "@/components/RelatedPosts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <HeroSplit />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Start with the small-market questions</h2>
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Featured posts</h2>
        <p className="max-w-2xl text-sm text-white/70">
          Short reads that prevent expensive “oops”.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          <RelatedPosts pillar="/car-rental-helsinki" limit={2} />
          <RelatedPosts pillar="/camper-rental-finland" limit={2} />
          <RelatedPosts pillar="/lapland-tours" limit={2} />
        </div>
      </section>
    </main>
  );
}
