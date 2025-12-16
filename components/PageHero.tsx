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
      <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] bg-slate-900">
        <img
          src={src}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />

        {/* Kontraszt felül: olvashatóság, nem mosás */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/10" />

        {/* ENYHE “lift” alul a kártyához, de nem fehér fal */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent" />

        {/* Vignette a prémiumabb hatásért */}
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.35)]" />
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
