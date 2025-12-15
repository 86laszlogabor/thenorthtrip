import HeroSplit from "@/components/HeroSplit";
import BlogList from "@/components/BlogList";
import SEOJsonLd from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSplit
        title="Smart travel planning for Finland"
        subtitle="Car rentals, campervans, and Lapland tours without hidden traps."
        primaryCtaText="Start with the checklist"
        primaryCtaHref="/offer-checklist"
      />

      <section className="mt-16">
        <BlogList
          title="Latest guides"
          pillar="/car-rental-helsinki"
          limit={6}
        />
      </section>

      <SEOJsonLd />
    </>
  );
}
