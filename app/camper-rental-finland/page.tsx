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
  title: "Camper rental in Finland – pricing, seasons, and inspections",
  description:
    "Camper rental in Finland explained. Season pricing, insurance exclusions, and inspection tips.",
  path: "/camper-rental-finland",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Camper rental in Finland",
    url: `${SITE.url}/camper-rental-finland`,
    description: metadata.description,
  };

  return (
    <PillarPage
      pillar="camper-rental-finland"
      hero={
        <HeroSplit
          title="Camper rental in Finland"
          subtitle="Season pricing, insurance exclusions, and inspections – without tourist traps."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={
        <TrustStrip
          items={["Season-aware pricing", "Insurance reality", "Inspection checklist"]}
        />
      }
      sections={[
        {
          title: "Season pricing",
          body: "Summer sells out fast. Shoulder seasons can be better value if flexible.",
        },
        {
          title: "Insurance basics",
          body: "Focus on excess and exclusions. ‘Full cover’ rarely means full.",
        },
        {
          title: "Pickup inspection",
          body: "Photos and checklists prevent expensive disputes later.",
        },
      ]}
      compare={{
        title: "Compare camper rental offers",
        primaryLabel: "Offer checklist",
        primaryHref: "/offer-checklist",
        secondaryLabel: "Read blog posts",
        secondaryHref: "/blog?pillar=%2Fcamper-rental-finland",
      }}
      faq={
        <FAQ
          items={[
            {
              q: "Do I need a special license?",
              a: "Usually no, but weight limits vary. Always check the vehicle category.",
            },
            {
              q: "Is wild camping allowed?",
              a: "Rules differ for motor vehicles. Use designated areas if unsure.",
            },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Camper quick actions"
            subtitle="Checklist first, guides second."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read guides", href: "/blog?pillar=%2Fcamper-rental-finland", variant: "secondary" },
            ]}
          />
          <TopPosts pillar="/camper-rental-finland" title="Top posts: Camper rentals" limit={6} />
        </>
      }
      sticky={<StickyMobileCTA text="Offer checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
