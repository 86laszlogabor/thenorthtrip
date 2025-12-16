import Link from "next/link";
import { PARTNERS, PartnerKey } from "../lib/partners";

type Props = {
  title?: string;
  items: PartnerKey[];
};

export default function Recommended({ title = "Car rental options", items }: Props) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

      <p className="mt-2 text-sm text-slate-600">
        Compare car rental prices before booking. Airport desks often add extras at pickup.
      </p>

      <ul className="mt-4 space-y-3">
        {items.map((key) => {
          const p = PARTNERS[key];

          return (
            <li key={key} className="text-sm text-slate-700">
              <Link
                href={p.url || "#"}
                className="underline underline-offset-4 hover:opacity-90"
                rel="sponsored nofollow"
                target="_blank"
              >
                {p.name}
              </Link>

              {p.description && (
                <p className="mt-1 text-xs text-slate-500">
                  {p.description}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-xs text-slate-500">
        Some links may be affiliate links. If you click and book, we may earn a commission at no extra cost to you.
      </p>
    </section>
  );
}
