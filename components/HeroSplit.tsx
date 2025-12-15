import React from "react";

type HeroSplitProps = {
  title: string;
  subtitle?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
};

export default function HeroSplit({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: HeroSplitProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {subtitle ? <p className="mt-3 text-white/80 leading-relaxed">{subtitle}</p> : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={primaryCtaHref}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
          >
            {primaryCtaText}
          </a>

          {secondaryCtaText && secondaryCtaHref ? (
            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
            >
              {secondaryCtaText}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
