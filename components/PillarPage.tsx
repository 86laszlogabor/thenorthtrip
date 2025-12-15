import React from "react";
import CompareCTA from "@/components/CompareCTA";
import JsonLd from "@/components/JsonLd";

export type PillarKey = "car-rental-helsinki" | "camper-rental-finland" | "lapland-tours";

export type PillarSection = {
  title: string;
  body: string;
};

type CompareBlock = {
  primaryHref: string;
  primaryLabel: string;
  title?: string;
};

type Props = {
  pillar: PillarKey;

  // A “kényes” komponenseket a page rendereli, PillarPage csak elrendezi
  hero: React.ReactNode;
  trust?: React.ReactNode;

  sections: PillarSection[];

  // CompareCTA: csak azt adjuk át, amiről tudjuk, hogy létezik
  compare?: CompareBlock;

  faq?: React.ReactNode;
  blog?: React.ReactNode;
  sticky?: React.ReactNode;

  jsonLd?: Record<string, any>;
};

export default function PillarPage({
  hero,
  trust,
  sections,
  compare,
  faq,
  blog,
  sticky,
  jsonLd,
}: Props) {
  const hasCompare = Boolean(compare?.primaryHref && compare?.primaryLabel);

  return (
    <>
      {/* HERO */}
      {hero}

      {/* TRUST */}
      {trust ? <div className="mt-10">{trust}</div> : null}

      {/* SECTIONS */}
      <div className="mt-12 space-y-6">
        {sections.map((s, idx) => (
          <section
            key={`${s.title}-${idx}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-white">{s.title}</h2>
            <p className="mt-3 text-white/80 leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>

      {/* COMPARE CTA */}
      {hasCompare ? (
        <div className="mt-12">
          <CompareCTA
            primaryHref={compare!.primaryHref}
            primaryLabel={compare!.primaryLabel}
            title={compare!.title}
          />
        </div>
      ) : null}

      {/* FAQ */}
      {faq ? <div className="mt-12">{faq}</div> : null}

      {/* BLOG */}
      {blog ? <div className="mt-12">{blog}</div> : null}

      {/* STICKY CTA */}
      {sticky ? sticky : null}

      {/* JSON-LD */}
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
    </>
  );
}
