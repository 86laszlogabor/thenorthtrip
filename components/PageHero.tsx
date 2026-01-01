import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  imageSrc = "/images/hero/hero-default.jpg",
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[420px] lg:h-[520px]">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 -mt-16 md:-mt-20 relative">
        <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
          {subtitle ? (
            <p className="mt-3 max-w-3xl text-slate-700">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
