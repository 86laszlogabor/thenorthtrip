// app/camper-rental-finland/page.tsx
import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Camper rental in Finland: pricing, seasons, and what to check",
  description:
    "Compare campervan rentals in Finland. Learn the real cost drivers, season traps, insurance basics, and what to inspect before you drive.",
  path: "/camper-rental-finland",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Camper rental in Finland",
    url: `${SITE.url}/camper-rental-finland`,
    description: metadata?.description,
  };

  return (
    <PillarPage
      pillar="camper-rental-finland"
      heroProps={{
        title: "Camper rental in Finland",
        subtitle: "Season pricing, insurance, and checklists so you don’t get cooked by hidden costs.",
        primaryCtaText: "See what to check",
        primaryCtaHref: "/offer-checklist",
        secondaryCtaText: "Browse articles",
        secondaryCtaHref: "/blog",
      }}
      trustProps={{
        items: ["Season-aware pricing", "Inspection checklist", "Nordic driving realities"],
      }}
      sections={[
        {
          title: "Season pricing and availability",
          body: "Summer sells out and prices spike. Shoulder season is better value if your route tolerates weather and shorter days.",
        },
        {
          title: "What insurance covers",
          body: "Focus on deductible/excess, glass/tires, and roadside coverage. ‘Full cover’ claims often have exceptions.",
        },
        {
          title: "Pickup inspection that saves money",
          body: "Photos, dents, interior condition, and equipment list. It’s boring. It also prevents expensive arguments later.",
        },
      ]}
      compareProps={{
        title: "Compare camper options",
        subtitle: "Use one checklist, compare apples-to-apples.",
        ctaText: "Open offer checklist",
        ctaHref: "/offer-checklist",
      }}
      faqItems={[
        { q: "Do I need special license?", a: "Usually no for standard campervans, but weight limits vary. Verify the vehicle category before booking." },
        { q: "Can I wild camp in Finland?", a: "Everyman’s rights exist, but motor vehicles have rules. Use designated spots when unsure." },
        { q: "How much do extras cost?", a: "Mileage limits, bedding, cleaning, and one-way fees can add up fast. Check terms early." },
      ]}
      blogProps={{
        title: "Latest camper guides",
        pillar: "/camper-rental-finland",
        limit: 6,
      }}
      stickyCtaProps={{
        text: "Open checklist",
        href: "/offer-checklist",
      }}
      jsonLd={jsonLd}
    />
  );
}
