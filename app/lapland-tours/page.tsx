import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import HeroSplit from "@/components/HeroSplit";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";
import BlogList from "@/components/BlogList";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
          subtitle="Book smarter. Fewer tourist traps, more real experiences."
          primaryCtaText="See checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Operator selection tips", "Season reality", "Clear expectations"]} />}
      sections={[
        { title: "Northern lights reality", body: "You’re buying probability, not certainty. Weather matters." },
        { title: "Activities compared", body: "Group size, duration, and transport matter more than glossy photos." },
        { title: "Avoid overpriced packages", body: "Look for clear inclusions, cancellation terms, and realistic itineraries." },
      ]}
      compare={{
        title: "Compare Lapland tours",
        primaryLabel: "Open offer checklist",
        primaryHref: "/offer-checklist",
      }}
      faq={
        <FAQ
          items={[
            { q: "Best time to visit?", a: "Depends on light, weather, and activities. There is no perfect month." },
            { q: "Do tours include winter gear?", a: "Sometimes. If it’s not explicit, assume you need to bring/rent gear." },
          ]}
        />
      }
      blog={<BlogList title="Latest Lapland guides" pillar="/lapland-tours" limit={6} />}
      sticky={<StickyMobileCTA text="Open checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
