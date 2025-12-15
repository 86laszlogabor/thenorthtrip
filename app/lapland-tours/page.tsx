import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import HeroSplit from "@/components/HeroSplit";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTACluster from "@/components/CTACluster";
import TopPosts from "@/components/TopPosts";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Lapland tours – what’s worth it and what to skip",
  description:
    "Lapland tours explained. Northern lights, activities, and how to avoid overpriced packages.",
  path: "/lapland-tours",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lapland tours",
    url: `${SITE.url}/lapland-tours`,
    description: metadata.description,
  };

  return (
    <PillarPage
      pillar="lapland-tours"
      hero={
        <HeroSplit
          title="Lapland tours"
          subtitle="Northern lights, huskies, snowmobiles – realistic expectations only."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Realistic expectations", "Operator selection tips", "Clear inclusions"]} />}
      sections={[
        { title: "Northern lights reality", body: "You’re buying probability, not certainty. Weather decides." },
        { title: "Activities compared", body: "Group size and duration matter more than glossy photos." },
        { title: "Avoid overpriced packages", body: "Prefer clear inclusions and cancellation rules." },
      ]}
      compare={{
        title: "Compare Lapland tour offers",
        primaryLabel: "Offer checklist",
        primaryHref: "/offer-checklist",
        secondaryLabel: "Read blog posts",
        secondaryHref: "/blog?pillar=%2Flapland-tours",
      }}
      faq={
        <FAQ
          items={[
            { q: "Best time to visit?", a: "Depends on light, weather, and activities. No perfect month." },
            { q: "Is winter gear included?", a: "Sometimes. If it’s not explicit, assume it’s not." },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Lapland quick actions"
            subtitle="Checklist first, then pillar guides."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read guides", href: "/blog?pillar=%2Flapland-tours", variant: "secondary" },
            ]}
          />
          <TopPosts pillar="/lapland-tours" title="Top posts: Lapland tours" limit={6} />
        </>
      }
      sticky={<StickyMobileCTA text="Offer checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
