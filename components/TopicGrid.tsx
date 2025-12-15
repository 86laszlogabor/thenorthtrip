import Link from "next/link";

type Topic = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  bullets: string[];
  badge?: string;
};

function TopicCard(t: Topic) {
  return (
    <div className="relative rounded-2xl border border-white/20 bg-white/5 p-6 shadow-sm backdrop-blur">
      {t.badge ? (
        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
          {t.badge}
        </div>
      ) : null}

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{t.eyebrow}</p>
          <h3 className="text-xl font-semibold text-white">{t.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{t.desc}</p>
        </div>

        <ul className="space-y-2 text-sm text-white/70">
          {t.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <Link
            href={t.href}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
          >
            Open guide
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TopicGrid() {
  const topics: Topic[] = [
    {
      eyebrow: "Helsinki rentals",
      title: "Car Rental Helsinki",
      desc: "Deposit holds, credit card rules, airport vs city pickup, and realistic winter add-ons.",
      href: "/car-rental-helsinki",
      badge: "Low-competition intent",
      bullets: [
        "Helsinki car rental deposit hold timing",
        "Debit card acceptance (pickup reality)",
        "Airport after-hours fees and constraints",
      ],
    },
    {
      eyebrow: "Winter-ready campervans",
      title: "Camper Rental Finland",
      desc: "Heating, insulation, power, mileage limits, and what 'winter ready' actually costs.",
      href: "/camper-rental-finland",
      badge: "Seasonal ROI",
      bullets: [
        "Camper rental Finland winter heating costs",
        "Mileage caps and cleaning fees explained",
        "Where costs hide: bedding, gas, power",
      ],
    },
    {
      eyebrow: "Arctic activities",
      title: "Lapland Tours",
      desc: "Compare inclusions, group size, pickup logistics, and cancellation terms like an adult.",
      href: "/lapland-tours",
      badge: "High-intent long-tail",
      bullets: [
        "Lapland tours small group vs big bus",
        "Northern lights tour cancellation rules",
        "What’s included vs paid extras",
      ],
    },
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {topics.map((t) => (
        <TopicCard key={t.href} {...t} />
      ))}
    </div>
  );
}
