import Link from "next/link";

type CTABoxProps = {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CTABox({
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTABoxProps) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/5 p-6 sm:p-8">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="max-w-2xl text-sm text-white/70">{text}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
