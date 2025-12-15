import Link from "next/link";

type StickyMobileCTAProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function StickyMobileCTA({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: StickyMobileCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-gray-950/90 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-3xl gap-3 px-4 py-3">
        <Link
          href={primaryHref}
          className="flex-1 rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
