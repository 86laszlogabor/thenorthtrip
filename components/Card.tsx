import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean; // kept for compatibility (ignored visually)
};

export default function Card({
  image,
  title,
  description,
  ctaLabel,
  ctaHref,
}: CardProps) {
  return (
    <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-orange-300 bg-white shadow-sm">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-4">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Divider + CTA pinned to bottom */}
        <div className="mt-auto pt-5">
          <div className="h-px w-full bg-slate-100" />
          <Link
            href={ctaHref}
            className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
          >
            {ctaLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}