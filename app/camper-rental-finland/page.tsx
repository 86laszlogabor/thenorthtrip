// app/camper-rental-finland/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Camper rental in Finland | TheNorthTrip",
  description:
    "Camper and motorhome rental in Finland: winter readiness, insurance, mileage rules, pickup logic, and pricing traps.",
  alternates: { canonical: "/camper-rental-finland" },
  openGraph: {
    title: "Camper rental in Finland | TheNorthTrip",
    description:
      "Avoid the hidden costs: winter setup, insurance terms, mileage rules, and pickup/return logic.",
    url: "/camper-rental-finland",
    type: "article",
  },
};

export default function CamperRentalFinlandPage() {
  const quickLinks = [
    { title: "Offer checklist (free)", href: "/offer-checklist" },
    { title: "Car rental guide", href: "/car-rental-helsinki" },
    { title: "Lapland tours guide", href: "/lapland-tours" },
    { title: "Who we are", href: "/who-we-are" },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO full-bleed */}
      <section className="relative isolate">
        <div className="relative h-[64vh] min-h-[520px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Camper travel in Finland"
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
                  Camper rental in Finland
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Camper rental in Finland:
                  <span className="block text-white/85">winter-ready or wishful thinking.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  The difference between a great trip and a frozen headache is usually boring:
                  heating, insulation, tyres, mileage policy, and pickup/return constraints.
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

          <article className="mx-auto max-w-3xl pb-16">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              Practical guide (summer + winter)
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              The traps people don’t notice until day two
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Camper pricing looks simple until you add the real drivers: mileage, season, heating fuel,
              winter packages, insurance exclusions, and pickup/return timing. The “cheap” option is often
              cheap only on paper.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h3 className="text-xl font-bold text-slate-900">1) Winter readiness is not a vibe</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Ask what’s included: winter tyres, heating type, insulation level, water system limitations,
                  battery capacity, and what the rental company expects you to do in freezing temperatures.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">2) Mileage rules and “extras” pricing</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Mileage caps can quietly inflate total cost. Also watch bedding, kitchen kits, generator,
                  additional driver fees, and one-way returns. The total matters, not the day rate.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">3) Pickup/return timing is part of the price</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Limited pickup windows can force an extra hotel night or compress your route. If your plan is
                  “arrive late, drive north immediately”, be realistic about what’s actually possible.
                </p>
              </section>
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Make it simple</h3>
              <p className="mt-2 text-slate-700">
                Use the checklist to compare offers consistently: winter package, mileage, insurance, pickup/return, extras.
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
