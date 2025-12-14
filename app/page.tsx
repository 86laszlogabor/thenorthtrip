// app/page.tsx
import Link from "next/link";

type TopicCardProps = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  bullets: string[];
  badge?: string;
};

function TopicCard({ eyebrow, title, desc, href, bullets, badge }: TopicCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/20 bg-white/5 p-6 shadow-sm backdrop-blur">
      {badge ? (
        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
          {badge}
        </div>
      ) : null}

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{eyebrow}</p>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm leading-relaxed text-white/70">{desc}</p>
        </div>

        <ul className="space-y-2 text-sm text-white/70">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
          >
            Open guide
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
              Finland travel, without the expensive surprises.
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              Car rental in Helsinki, camper rental across Finland, and Lapland tours. Transparent pricing, deposit
              reality-checks, and practical booking advice.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/car-rental-helsinki"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Compare car rental prices
            </Link>
            <Link
              href="/get-help"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Ask us before booking
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <TopicCard
              eyebrow="Car rental"
              title="Car Rental Helsinki"
              desc="Airport vs city pickup, deposits, and real costs. A practical starter guide."
              href="/car-rental-helsinki"
              badge="Core"
              bullets={["Deposits & credit cards", "Airport vs city pickup", "Insurance & extras reality-check"]}
            />
            <TopicCard
              eyebrow="Campervan / RV"
              title="Camper Rental Finland"
              desc="Heating, mileage limits, winter readiness, and the common cost traps."
              href="/camper-rental-finland"
              badge="Seasonal"
              bullets={["Winter equipment checklist", "Mileage and fuel costs", "What ‘cheap’ usually hides"]}
            />
            <TopicCard
              eyebrow="Lapland"
              title="Lapland Tours"
              desc="Northern lights and winter activities. Compare inclusions, timings, and cancellation terms."
              href="/lapland-tours"
              badge="High intent"
              bullets={["Tour types & inclusions", "Group size vs price", "Weather and cancellation expectations"]}
            />
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold">Need help before booking?</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                  Send the offer screenshot or booking summary. We’ll sanity-check the deposit, insurance, and winter
                  add-ons. Placeholder workflow for now.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/get-help"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Ask us before booking
                </Link>
                <Link
                  href="/car-rental-helsinki"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  Start with car rental
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
