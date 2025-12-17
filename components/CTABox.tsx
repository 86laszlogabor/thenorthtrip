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
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="max-w-2xl text-sm text-slate-700">{text}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-black hover:bg-orange-600"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
