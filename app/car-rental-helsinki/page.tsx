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
    description: metadata.description,
  };

  return (
    <PillarPage
      pillar="car-rental-helsinki"
      hero={
        <HeroSplit
          title="Car rental in Helsinki"
          subtitle="Compare real offers. Understand deposits. Avoid desk drama."
          primaryCtaText="Check offers"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Transparent deposit rules", "No fluff comparisons", "Airport pickup reality"]} />}
      sections={[
        { title: "Deposits and card holds", body: "Most rental problems are credit card holds and desk rules. Know what gets blocked, and why." },
        { title: "Insurance that matters", body: "Ignore marketing names. Focus on excess/deductible, exclusions, and what the desk accepts." },
        { title: "HEL airport pickup reality", body: "Queues, document checks, and last-minute upsells happen. Arrive prepared and keep control." },
      ]}
      compare={{
        title: "Compare Helsinki car rentals",
        primaryLabel: "Open offer checklist",
        primaryHref: "/offer-checklist",
      }}
      faq={
        <FAQ
          items={[
            { q: "Can I rent with a debit card?", a: "Sometimes, but many desks still require a credit card for the deposit." },
            { q: "Why is the deposit so high?", a: "It’s a risk buffer. Release timing depends on the bank." },
            { q: "Is ‘paid online’ final price?", a: "Usually not. Terms, extras, and deposit rules still apply at pickup." },
          ]}
        />
      }
      blog={<BlogList title="Latest Helsinki rental guides" pillar="/car-rental-helsinki" limit={6} />}
      sticky={<StickyMobileCTA text="Check offers" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
