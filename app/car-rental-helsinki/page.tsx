// app/car-rental-helsinki/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Car rental in Helsinki & Finland | TheNorthTrip",
  description:
    "Credit card deposits, debit card rules, insurance add-ons, and the real cost traps of car rental in Finland (Helsinki + Lapland).",
  alternates: { canonical: "/car-rental-helsinki" },
  openGraph: {
    title: "Car rental in Helsinki & Finland | TheNorthTrip",
    description:
      "Avoid expensive surprises: deposits, cards, insurance, winter add-ons, and what people overpay for.",
    url: "/car-rental-helsinki",
    type: "article",
  },
};

export default function CarRentalHelsinkiPage() {
  const quickLinks = [
    { title: "Offer checklist (free)", href: "/offer-checklist" },
    { title: "Who we are", href: "/who-we-are" },
    { title: "Lapland tours guide", href: "/lapland-tours" },
    { title: "Camper rental guide", href: "/camper-rental-finland" },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO full-bleed */}
      <section className="relative isolate">
        <div className="relative h-[64vh] min-h-[520px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Winter road in Finland"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/20 backdrop-blur">
                  Car rental in Finland
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Car rental in Finland:
                  <span className="block text-white/85">deposits, cards, and real costs.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  The point isn’t “cheap deals”. The point is avoiding the paid lesson at the counter:
                  deposit holds, debit card refusals, insurance traps, winter add-ons, and rules that change
                  by company, location and season.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/offer-checklist"
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                  >
                    Open free checklist
                  </Link>

                  <Link
                    href="/get-help"
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Get help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Quick links card row */}
          <div className="-mt-10 pb-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100"
                >
                  <div className="text-sm font-semibold text-slate-900">{q.title}</div>
                  <div className="mt-2 text-sm text-slate-600">Open →</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Editorial */}
          <article className="mx-auto max-w-3xl pb-16">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              Practical guide (Helsinki + Lapland)
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              What actually goes wrong (and why it costs money)
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most people think they’re comparing prices. In reality they’re comparing rules:
              card type acceptance, deposit policy, insurance coverage, excess amounts, mileage limits,
              border rules, winter tyres, and what happens if you’re late, tired, or the weather turns.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h3 className="text-xl font-bold text-slate-900">1) Deposit holds and card rules</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  “Paid online” doesn’t mean “no deposit”. Many rentals still block a large amount on a
                  credit card at pickup. Debit card acceptance varies by company and location. Helsinki
                  airport counters tend to be stricter than downtown offices.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">2) Insurance: you’re buying stress reduction</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  The cheap price often hides a high excess. Add-ons can be worth it, but only if you
                  understand what’s covered (windscreen, tyres, underbody, single-vehicle incidents).
                  Winter roads make “minor damage” far more common than people expect.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">3) Winter logic: timing + daylight + distance</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Lapland distances look short on maps and feel long at night. Add darkness, wildlife,
                  and weather. That’s why pickup time, route realism, and cancellation flexibility matter.
                </p>
              </section>
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Want the safe path?</h3>
              <p className="mt-2 text-slate-700">
                Use the checklist to verify: card type, deposit, excess, winter tyres, cancellation, pickup rules.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/offer-checklist"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                >
                  Open free checklist
                </Link>
                <Link
                  href="/who-we-are"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Who we are →
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="h-14 bg-slate-950" />
    </main>
  );
}
