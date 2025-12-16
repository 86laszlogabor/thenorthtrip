import Link from "next/link";
import { PARTNERS, PartnerKey } from "../lib/partners";

type Props = {
  title?: string;
  subtitle?: string;
  items: PartnerKey[];
};

export default function Recommended({
  title = "Compare car rental prices",
  subtitle = "Two comparison platforms. Same goal. Slightly different strengths.",
  items,
}: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((key) => {
          const p = PARTNERS[key];

          const href = p.helsinkiUrl || p.url || "#";
          const isPlaceholder = !href || href === "#";

          return (
            <div
              key={key}
              className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-slate-900">{p.name}</div>
                  {p.brandHint ? (
                    <div className="mt-0.5 text-xs text-slate-500">{p.brandHint}</div>
                  ) : null}
                </div>

                {p.disclosureLabel ? (
                  <span className="text-[11px] rounded-full px-2 py-0.5 border border-slate-200 text-slate-500 bg-white">
                    {p.disclosureLabel}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Best for:</span> {p.bestFor}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {p.bullets.slice(0, 5).map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-2">
                {isPlaceholder ? (
                  <button
                    type="button"
                    className="w-full rounded-lg bg-orange-500/60 px-4 py-2.5 text-sm font-semibold text-white cursor-not-allowed"
                    title="Partner URL will be plugged in next"
                  >
                    Check prices (soon)
                  </button>
                ) : (
                  <Link
                    href={href}
                    className="w-full text-center rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-500"
                    rel="sponsored nofollow"
                    target="_blank"
                  >
                    Check prices
                  </Link>
                )}

                <div className="text-xs text-slate-500">
                  Tip: compare both. Price can change once deposit, coverage, and pickup rules are considered.
                </div>
              </div>

              <div className="mt-auto" />
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Some links may be affiliate links. If you click and book, we may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}
