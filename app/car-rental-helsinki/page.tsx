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
  title: "Car rental in Helsinki – deposits, cards, and real desk rules",
  description:
    "Car rental in Helsinki explained. Deposits, credit cards, insurance, and airport pickup rules without marketing fluff.",
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
          subtitle="Deposits, credit cards, insurance, and HEL airport pickup – explained without nonsense."
          primaryCtaText="Open offer checklist"
          primaryCtaHref="/offer-checklist"
        />
      }
      trust={<TrustStrip items={["Real deposit rules", "Credit vs debit explained", "Airport pickup reality"]} />}
      sections={[
        {
          title: "Deposits and card holds",
          body: "Most issues come from credit card holds. Know the amount and release timing.",
        },
        {
          title: "Insurance that matters",
          body: "Focus on excess and exclusions. Ignore marketing labels.",
        },
        {
          title: "HEL airport pickup reality",
          body: "Arrive prepared and you avoid the classic desk traps.",
        },
      ]}
      compare={{
        title: "Compare Helsinki rental offers",
        primaryLabel: "Offer checklist",
        primaryHref: "/offer-checklist",
        secondaryLabel: "Read blog posts",
        secondaryHref: "/blog?pillar=%2Fcar-rental-helsinki",
      }}
      faq={
        <FAQ
          items={[
            { q: "Debit card ok?", a: "Sometimes, but many desks still require a credit card for the deposit." },
            { q: "Why is the deposit high?", a: "It’s a risk buffer. Release time depends on your bank." },
          ]}
        />
      }
      blog={
        <>
          <CTACluster
            title="Before you book"
            subtitle="Checklist first, then the targeted guides."
            buttons={[
              { label: "Offer checklist", href: "/offer-checklist", variant: "primary" },
              { label: "Read guides", href: "/blog?pillar=%2Fcar-rental-helsinki", variant: "secondary" },
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
