import React from "react";

type HeroSplitProps = {
  title: string;
  subtitle?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  bullets?: string[];
};

export default function HeroSplit({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  bullets,
}: HeroSplitProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          {subtitle ? <p className="mt-4 text-white/80 leading-relaxed max-w-2xl">{subtitle}</p> : null}

          {bullets?.length ? (
            <ul className="mt-6 grid gap-2 text-sm text-white/75 max-w-2xl">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-blue-400/80 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
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
      </div>
    </section>
  );
}
