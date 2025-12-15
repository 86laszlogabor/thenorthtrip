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
  title: "Lapland tours: what’s worth it and what to avoid",
  description: "Northern lights, huskies, snowmobiles. Learn how to choose Lapland tours without overpaying.",
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
          subtitle="Book smarter. Fewer tourist traps, more real expectations."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Operator selection tips", "Season reality", "Clear expectations"]} />}
      sections={[
        { title: "Northern lights reality", body: "You’re buying probability, not certainty. Weather and cloud cover decide." },
        { title: "Activities compared", body: "Group size, duration, transport matter more than glossy photos." },
        { title: "Avoid overpriced packages", body: "Prefer clear inclusions + cancellation rules + realistic itineraries." },
      ]}
      compare={{ title: "Compare Lapland tour offers", primaryLabel: "Offer checklist", primaryHref: "/offer-checklist" }}
      faq={
        <FAQ
          items={[
            { q: "Best time to visit?", a: "Depends on light, weather, and activities. There is no perfect month." },
            { q: "Winter gear included?", a: "Sometimes. If it’s not explicit, assume you need to bring or rent." },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Lapland quick actions"
            subtitle="Checklist, then pillar guides. You’ll waste less money."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read blog posts", href: "/blog?pillar=%2Flapland-tours", variant: "secondary" },
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
