import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CompareCTA from "@/components/CompareCTA";
import JsonLd from "@/components/JsonLd";

export type PillarKey = "car-rental-helsinki" | "camper-rental-finland" | "lapland-tours";

type Section = {
  title: string;
  body: string;
};

export type CompareBlock = {
  title?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type PillarPageProps = {
  pillar: PillarKey;
  hero: React.ReactNode;
  trust?: React.ReactNode;
  sections: Section[];
  compare?: CompareBlock;
  faq?: React.ReactNode;
  blog?: React.ReactNode;
  sticky?: React.ReactNode;
  jsonLd?: any;
};

const PILLAR_LABEL: Record<PillarKey, { label: string; href: string }> = {
  "car-rental-helsinki": { label: "Car rental Helsinki", href: "/car-rental-helsinki" },
  "camper-rental-finland": { label: "Camper rental Finland", href: "/camper-rental-finland" },
  "lapland-tours": { label: "Lapland tours", href: "/lapland-tours" },
};

export default function PillarPage({
  pillar,
  hero,
  trust,
  sections,
  compare,
  faq,
  blog,
  sticky,
  jsonLd,
}: PillarPageProps) {
  const p = PILLAR_LABEL[pillar];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: p.label, href: p.href },
        ]}
      />

      <main className="pb-16">
        {hero}

        {trust ? <div className="mx-auto max-w-6xl px-4 mt-8">{trust}</div> : null}

        <section className="mx-auto max-w-6xl px-4 mt-10">
          <div className="rounded-3xl border border-white/10 bg-gray-900/30 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold text-white">What you’ll learn</h2>
            <p className="mt-2 text-gray-300 leading-relaxed">
              The practical details that decide whether your booking is smooth or a mess.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {sections.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition"
                >
                  <div className="text-white font-semibold">{s.title}</div>
                  <div className="mt-2 text-sm text-gray-300 leading-relaxed">{s.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {compare ? (
          <div className="mx-auto max-w-6xl px-4 mt-10">
            <CompareCTA
              title={compare.title}
              primaryLabel={compare.primaryLabel}
              primaryHref={compare.primaryHref}
              secondaryLabel={compare.secondaryLabel}
              secondaryHref={compare.secondaryHref}
            />
          </div>
        ) : null}

        {faq ? <div className="mx-auto max-w-6xl px-4 mt-10">{faq}</div> : null}
        {blog ? <div className="mx-auto max-w-6xl px-4 mt-10">{blog}</div> : null}

        {sticky ? <div>{sticky}</div> : null}
      </main>

      {jsonLd ? <JsonLd data={jsonLd} /> : null}
    </>
  );
}
