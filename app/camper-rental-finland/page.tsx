import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import HeroSplit from "@/components/HeroSplit";
import TrustStrip from "@/components/TrustStrip";
import FAQ from "@/components/FAQ";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CTACluster from "@/components/CTACluster";
import TopPosts from "@/components/TopPosts";
import CompareCTA from "@/components/CompareCTA";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Camper rental in Finland: pricing, seasons, and what to check",
  description:
    "Compare campervan rentals in Finland. Learn season pricing, insurance basics, and inspection tips.",
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
          subtitle="Season pricing, insurance exclusions, and inspection steps without nonsense."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
          secondaryCtaText="Read blog posts"
          secondaryCtaHref="/blog?pillar=%2Fcamper-rental-finland"
        />
      }
      trust={
        <TrustStrip
          items={["Season-aware pricing", "Inspection checklist", "Nordic driving tips"]}
        />
      }
      sections={[
        {
          title: "Season pricing",
          body: "Summer sells out. Shoulder seasons can be better value if your plan is flexible.",
        },
        {
          title: "Insurance basics",
          body: "Focus on excess and exclusions. “Full cover” often still has exceptions.",
        },
        {
          title: "Pickup inspection",
          body: "Photos plus a checklist prevent expensive arguments later.",
        },
      ]}
      compare={
        <CompareCTA
          title="Compare camper offers"
          primaryLabel="Offer checklist"
          primaryHref="/offer-checklist"
        />
      }
      faq={
        <FAQ
          items={[
            {
              q: "Do I need a special license?",
              a: "Usually no, but weight limits vary. Verify the vehicle category before booking.",
            },
            {
              q: "Can I wild camp in Finland?",
              a: "Rules exist for motor vehicles. Use designated spots if you’re unsure.",
            },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Camper quick actions"
            subtitle="Checklist first, then pillar-specific guides."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read blog posts", href: "/blog?pillar=%2Fcamper-rental-finland", variant: "secondary" },
            ]}
          />
          <TopPosts
            pillar="/camper-rental-finland"
            title="Top posts: Camper rentals"
            limit={6}
          />
        </>
      }
      sticky={<StickyMobileCTA text="Offer checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
