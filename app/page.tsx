import Link from "next/link";

const PILLARS = [
  {
    eyebrow: "HELSINKI",
    title: "Car rental: deposit + pickup rules",
    desc: "Short, practical guidance for Helsinki airport vs city pickup, deposit holds, and card requirements.",
    href: "/car-rental-helsinki",
  },
  {
    eyebrow: "LAPLAND",
    title: "Tours: compare inclusions safely",
    desc: "Small group vs big bus, cancellation expectations, and what listings tend to “forget” to mention.",
    href: "/lapland-tours",
  },
];

const TOPICS = [
  {
    title: "Car Rental Helsinki",
    desc: "Deposit holds, debit card pickup reality, airport after-hours fees.",
    href: "/car-rental-helsinki",
    tag: "Low-competition intent",
  },
  {
    title: "Camper Rental Finland",
    desc: "Winter heating costs, mileage caps, cleaning fees, hidden extras.",
    href: "/camper-rental-finland",
    tag: "Seasonal ROI",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-900/20 to-transparent" />

      {/* HERO */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Finland rentals + Lapland tours
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Get clear facts before you book.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-gray-300">
            We focus on small-market, high-intent questions people actually have: deposit holds, debit card pickup rules,
            winter add-ons, and tour inclusions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/car-rental-helsinki"
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-500"
            >
              Compare car rental costs
            </Link>
            <Link
              href="/get-help"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-gray-100 hover:bg-white/10"
            >
              Ask before booking
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => (
              <div
                key={p.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/7"
              >
                <div className="text-xs font-semibold tracking-wider text-gray-400">
                  {p.eyebrow}
                </div>
                <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
                <p className="mt-3 text-gray-300">{p.desc}</p>

                <div className="mt-5 h-40 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700" />

                <div className="mt-6">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 font-semibold text-blue-300 hover:text-blue-200"
                  >
                    Open guide <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Start with the small-market questions</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            We focus on the boring details people search right before paying: deposit holds, debit pickup rules, winter add-ons,
            and tour inclusions.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TOPICS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    {t.tag}
                  </span>
                </div>
                <p className="mt-3 text-gray-300">{t.desc}</p>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-white/5 p-8">
            <h3 className="text-2xl font-bold">Unsure if an offer is actually fair?</h3>
            <p className="mt-2 max-w-2xl text-gray-300">
              Send us the listing. We’ll tell you what’s missing before you pay.
            </p>
            <div className="mt-6">
              <Link
                href="/offer-checklist"
                className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
              >
                Check an offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-12" />
    </main>
  );
}
