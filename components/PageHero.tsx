import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
  badge?: string;
};

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  priority,
  badge,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/65 to-white/15" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="-mt-24 sm:-mt-28 relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-sm">
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
