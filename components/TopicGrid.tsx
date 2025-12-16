import Link from "next/link";
import { PILLARS } from "@/lib/pillars";

type Topic = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  bullets: string[];
};

const TOPICS: Topic[] = [
  {
    eyebrow: "Helsinki airport reality-check",
    title: "Car Rental Helsinki",
    desc: "Deposits, debit cards, winter add-ons, after-hours pickup. The stuff that changes the real price.",
    href: PILLARS["/car-rental-helsinki"].href,
    bullets: ["Deposit hold rules", "Debit card pitfalls", "Winter extras vs mandatory"],
  },
  {
    eyebrow: "Winter-ready campervans",
    title: "Camper Rental Finland",
    desc: "Mileage caps, winterization, borders/ferries. Avoid paying twice for the same “package”.",
    href: PILLARS["/camper-rental-finland"].href,
    bullets: ["Mileage & overage fees", "Heating & winter setup", "Border + ferry permission"],
  },
  {
    eyebrow: "High-ticket experiences",
    title: "Lapland Tours",
    desc: "Northern lights, snowmobiles, reindeer. Avoid “guaranteed” nonsense and vague pickup rules.",
    href: PILLARS["/lapland-tours"].href,
    bullets: ["Worth-it tour types", "Common traps", "How to choose fast"],
  },
];

export default function TopicGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        {TOPICS.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:bg-slate-50"
          >
            <div className="text-xs font-semibold text-slate-500">{t.eyebrow}</div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">
              {t.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{t.desc}</p>

            <ul className="mt-4 list-disc list-inside space-y-1 text-sm text-slate-700">
              {t.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-5 text-sm font-semibold text-orange-600">
              Open guide →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
