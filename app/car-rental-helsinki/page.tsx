// app/car-rental-helsinki/page.tsx
import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Car rental in Helsinki: compare offers and avoid deposit surprises",
  description:
    "Compare car rental options in Helsinki and at HEL airport. Learn how deposits, credit cards, and insurance really work before you book.",
  path: "/car-rental-helsinki",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Car rental in Helsinki",
    url: `${SITE.url}/car-rental-helsinki`,
    description: metadata?.description,
  };

  return (
    <PillarPage
      pillar="car-rental-helsinki"
      heroProps={{
        title: "Car rental in Helsinki",
        subtitle: "Compare real offers. Understand deposits. Avoid dumb surprises at pickup.",
        primaryCtaText: "Check offers",
        primaryCtaHref: "/offer-checklist",
        secondaryCtaText: "Read the checklist first",
        secondaryCtaHref: "/offer-checklist",
      }}
      trustProps={{
        items: ["Transparent deposit info", "No fluff comparisons", "Airport pickup tips"],
      }}
      sections={[
        {
          title: "Deposits and card holds",
          body: "Most issues come from credit card holds and inconsistent desk rules. We explain what happens and how to avoid refusals.",
        },
        {
          title: "Insurance that actually matters",
          body: "CDW, excess, ‘full cover’ from brokers: the names are messy. The goal is simple: limit liability and keep pickup smooth.",
        },
        {
          title: "Helsinki Airport (HEL) pickup reality",
          body: "Flight delays, desk queues, and document checks are common. Show up prepared and you save time, money, and blood pressure.",
        },
      ]}
      compareProps={{
        title: "Compare car rentals in Helsinki",
        subtitle: "Use the checklist so you don’t book the wrong thing.",
        ctaText: "Open offer checklist",
        ctaHref: "/offer-checklist",
      }}
      faqItems={[
        { q: "Can I rent with a debit card?", a: "Sometimes. Many desks still require a credit card for the deposit hold. Always verify per supplier." },
        { q: "Why is the deposit so high?", a: "It’s a risk buffer for damage/fuel/fees. The hold is released later, but timing varies by bank." },
        { q: "Is ‘paid online’ the final price?", a: "Often not. Extras and deposit rules still apply at pickup. Read the terms like an adult." },
      ]}
      blogProps={{
        title: "Latest Helsinki rental guides",
        pillar: "/car-rental-helsinki",
        limit: 6,
      }}
      stickyCtaProps={{
        text: "Check offers",
        href: "/offer-checklist",
      }}
      jsonLd={jsonLd}
    />
  );
}

