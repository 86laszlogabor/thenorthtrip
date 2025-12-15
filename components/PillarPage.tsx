// components/PillarPage.tsx
import React from "react";
import HeroSplit from "@/components/HeroSplit";
import TrustStrip from "@/components/TrustStrip";
import SectionCard from "@/components/SectionCard";
import CompareCTA from "@/components/CompareCTA";
import FAQ from "@/components/FAQ";
import BlogList from "@/components/BlogList";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";

export type PillarKey = "car-rental-helsinki" | "camper-rental-finland" | "lapland-tours";

export type PillarSection = { title: string; body: string };
export type PillarFAQ = { q: string; a: string };

type Props = {
  pillar: PillarKey;
  heroProps: Record<string, any>;
  trustProps?: Record<string, any>;
  sections: PillarSection[];
  compareProps?: Record<string, any>;
  faqItems: PillarFAQ[];
  blogProps?: Record<string, any>;
  stickyCtaProps?: Record<string, any>;
  jsonLd?: Record<string, any>;
};

export default function PillarPage({
  heroProps,
  trustProps,
  sections,
  compareProps,
  faqItems,
  blogProps,
  stickyCtaProps,
  jsonLd,
}: Props) {
  return (
    <>
      {/* HERO */}
      <HeroSplit {...heroProps} />

      {/* TRUST */}
      <div className="mt-10">
        <TrustStrip {...(trustProps || {})} />
      </div>

      {/* SECTIONS */}
      <div className="mt-12 space-y-6">
        {sections.map((s, idx) => (
          <SectionCard key={idx} title={s.title}>
            <p className="text-white/80 leading-relaxed">{s.body}</p>
          </SectionCard>
        ))}
      </div>

      {/* COMPARE CTA */}
      <div className="mt-12">
        <CompareCTA {...(compareProps || {})} />
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <FAQ items={faqItems} />
      </div>

      {/* BLOG */}
      <div className="mt-12">
        <BlogList {...(blogProps || {})} />
      </div>

      {/* STICKY CTA */}
      <StickyMobileCTA {...(stickyCtaProps || {})} />

      {/* JSON-LD */}
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
    </>
  );
}
