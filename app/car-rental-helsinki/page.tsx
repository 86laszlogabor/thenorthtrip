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
          subtitle="Compare real offers. Understandil\u00e1y deposit rules. Avoid desk drama."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Transparent deposit rules", "No fluff comparisons", "Airport pickup reality"]} />}
      sections={[
        { title: "Deposits and card holds", body: "Most issues come from credit card holds and desk rules. Know what gets blocked and why." },
        { title: "Insurance that matters", body: "Ignore marketing names. Focus on excess/deductible + exclusions + what the desk actually accepts." },
        { title: "HEL airport pickup reality", body: "Queues and upsells happen. Arrive with the right card and documents, and you keep control." },
      ]}
      compare={{ title: "Compare Helsinki rental offers", primaryLabel: "Offer checklist", primaryHref: "/offer-checklist" }}
      faq={
        <FAQ
          items={[
            { q: "Debit card ok?", a: "Sometimes, but many desks still require a credit card for the deposit." },
            { q: "Why is the deposit so high?", a: "It’s a risk buffer. Release timing depends on your bank." },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Do this before booking"
            subtitle="If you only do one thing: run the checklist, then compare providers."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read blog posts", href: "/blog?pillar=%2Fcar-rental-helsinki", variant: "secondary" },
            ]}
          />
          <TopPosts pillar="/car-rental-helsinki" title="Top posts: Helsinki rentals" limit={6} />
        </>
      }
      sticky={<StickyMobileCTA text="Offer checklist" href="/offer-checklist" />}
      jsonLd={jsonLd}
    />
  );
}
