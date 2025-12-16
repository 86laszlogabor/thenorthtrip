import type { StaticImageData } from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  priority?: boolean;
  badge?: string;
};

function toSrc(x: string | StaticImageData) {
  return typeof x === "string" ? x : x.src;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  priority,
  badge,
}: Props) {
  const src = toSrc(imageSrc);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] bg-slate-950">
        <img
          src={src}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />

        {/* LIGHTER cinematic overlays (so images don't look like night-vision) */}
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 25% 18%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.20) 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.25)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="-mt-28 sm:-mt-32 relative rounded-3xl border border-slate-200 bg-white/95 backdrop-blur p-6 sm:p-8 shadow-sm">
          {badge ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
              {badge}
            </div>
          ) : null}

          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p>
          ) : null}
        </div>
      </div>

      <div className="h-10 sm:h-12" />
    </section>
  );
}
