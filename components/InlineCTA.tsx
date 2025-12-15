import Link from "next/link";

type InlineCTAProps = {
  title?: string;
  text?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function InlineCTA({
  title = "Quick check before you pay",
  text = "Send your offer (screenshot or summary). We’ll flag deposit traps, card requirements, winter add-ons, and tour inclusions.",
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: InlineCTAProps) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/5 p-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{text}</p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
