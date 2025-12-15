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
  title: "Camper rental in Finland: pricing, seasons, and what to check",
  description: "Compare campervan rentals in Finland. Learn season pricing, insurance basics, and inspection tips.",
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
          subtitle="Season pricing, insurance, and checklists without nonsense."
          primaryCtaText="Open checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Season-aware pricing", "Inspection checklist", "Nordic driving tips"]} />}
      sections={[
        { title: "Season pricing", body: "Summer is expensive and sells out. Shoulder seasons can be better value." },
        { title: "Insurance basics", body: "Focus on excess and exclusions. ‘Full cover’ often has exceptions." },
        { title: "Pickup inspection", body: "Photos + equipment checklist saves you from expensive arguments later." },
      ]}
      compare={{
        title: "Compare camper rentals",
        primaryLabel: "Open offer checklist",
        primaryHref: "/offer-checklist",
      }}
      faq={
        <FAQ
          items={[
            { q: "Do I need a special license?", a: "Usually no, but weight limits vary. Verify vehicle category." },
            { q: "Can I wild camp?", a: "Rules exist for motor vehicles. Use designated spots when unsure." },
          ]}
        />
      }
      blog={<BlogList title="Latest camper guides" pillar="/camper-rental-finland" limit={6} />}
      sticky={<StickyMobileCTA text="Open checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
