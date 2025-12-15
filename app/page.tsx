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
    <main className="relative bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[rgb(var(--primary))]/10 to-transparent" />

      {/* HERO */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[rgb(var(--muted))]">
            <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
            Finland rentals + Lapland tours
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Get clear facts before you book.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-[rgb(var(--muted))]">
            We focus on small-market, high-intent questions people actually have:
            deposit holds, debit card pickup rules, winter add-ons, and tour inclusions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Primary CTA */}
            <Link
              href="/car-rental-helsinki"
              className="rounded-xl bg-[rgb(var(--primary))] px-5 py-3 font-semibold text-white hover:opacity-90"
            >
              Compare car rental costs
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/get-help"
              className="rounded-xl bg-[rgb(var(--secondary))] px-5 py-3 font-semibold text-[rgb(var(--text))] hover:opacity-90"
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
                className="group rounded-2xl border border-white/10 bg-[rgb(var(--card))] p-6 transition hover:border-[rgb(var(--accent))]/40"
              >
                <div className="text-xs font-semibold tracking-wider text-[rgb(var(--muted))]">
                  {p.eyebrow}
                </div>

                <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>

                <p className="mt-3 text-[rgb(var(--muted))]">{p.desc}</p>

                {/* Image placeholder - modern, not 2005 */}
                <div className="mt-5 h-44 rounded-xl bg-gradient-to-br from-white/10 to-white/5" />

                <div className="mt-6">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 font-semibold text-[rgb(var(--accent))] hover:opacity-90"
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

          <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
            We focus on the boring details people search right before paying:
            deposit holds, debit pickup rules, winter add-ons, and tour inclusions.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {TOPICS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-2xl border border-white/10 bg-[rgb(var(--card))] p-6 transition hover:border-[rgb(var(--accent))]/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[rgb(var(--muted))]">
                    {t.tag}
                  </span>
                </div>

                <p className="mt-3 text-[rgb(var(--muted))]">{t.desc}</p>
              </Link>
            ))}
          </div>

          {/* CTA BOX */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-[rgb(var(--primary))]/15 to-white/5 p-8">
            <h3 className="text-2xl font-bold">Unsure if an offer is actually fair?</h3>
            <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
              Send us the listing. We’ll tell you what’s missing before you pay.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/offer-checklist"
                className="inline-flex rounded-xl bg-[rgb(var(--primary))] px-5 py-3 font-semibold text-white hover:opacity-90"
              >
                Check an offer
              </Link>

              <Link
                href="/get-help"
                className="inline-flex rounded-xl bg-[rgb(var(--secondary))] px-5 py-3 font-semibold text-[rgb(var(--text))] hover:opacity-90"
              >
                Ask a quick question
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
