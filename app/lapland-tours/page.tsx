// app/lapland-tours/page.tsx
import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Lapland tours: what’s worth it, what’s overpriced, and how to book",
  description:
    "Plan Lapland tours smarter: northern lights, huskies, snowmobiles, and day trips. Learn pricing traps and how to choose operators.",
  path: "/lapland-tours",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Lapland tours",
    url: `${SITE.url}/lapland-tours`,
    description: metadata?.description,
  };

  return (
    <PillarPage
      pillar="lapland-tours"
      heroProps={{
        title: "Lapland tours",
        subtitle: "Northern lights, winter activities, and day trips without paying tourist-tax for nonsense.",
        primaryCtaText: "See booking checklist",
        primaryCtaHref: "/offer-checklist",
        secondaryCtaText: "Read guides",
        secondaryCtaHref: "/blog",
      }}
      trustProps={{
        items: ["Operator selection tips", "Season and weather reality", "Transparent expectations"],
      }}
      sections={[
        {
          title: "Northern lights: expectations vs reality",
          body: "You’re buying probability, not certainty. Weather, cloud cover, and timing matter more than marketing photos.",
        },
        {
          title: "Snowmobiles, huskies, reindeer",
          body: "Compare duration, group size, transport included, and insurance/liability rules. Details matter a lot.",
        },
        {
          title: "How to avoid overpriced packages",
          body: "Look for clear inclusions, cancellation terms, and realistic itineraries. Vague offers are usually expensive chaos.",
        },
      ]}
      compareProps={{
        title: "Compare tours properly",
        subtitle: "Same checklist, fewer regrets.",
        ctaText: "Open offer checklist",
        ctaHref: "/offer-checklist",
      }}
      faqItems={[
        { q: "Best time to visit Lapland?", a: "Depends: lights season is strong in winter, but daylight and activities vary by month." },
        { q: "Do tours include winter gear?", a: "Some do, some don’t. If it’s not explicit, assume you need to bring/rent gear." },
        { q: "Are small groups worth it?", a: "Often yes: better pacing and less waiting. But verify what ‘small’ actually means." },
      ]}
      blogProps={{
        title: "Latest Lapland guides",
        pillar: "/lapland-tours",
        limit: 6,
      }}
      stickyCtaProps={{
        text: "Booking checklist",
        href: "/offer-checklist",
      }}
      jsonLd={jsonLd}
    />
  );
}
