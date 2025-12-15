import HeroSplit from "@/components/HeroSplit";
import TopicGrid from "@/components/TopicGrid";
import CTABox from "@/components/CTABox";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
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
    </main>
  );
}
