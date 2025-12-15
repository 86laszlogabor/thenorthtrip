import Link from "next/link";

type CompareCTAProps = {
  title?: string;
  text?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CompareCTA({
  title = "Compare offers before you commit",
  text = "Skip the shiny price. Check deposit holds, card rules, winter add-ons, and pickup traps first.",
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CompareCTAProps) {
  return (
    <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-white/70">{text}</p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
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
