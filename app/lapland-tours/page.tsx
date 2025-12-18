// app/lapland-tours/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Lapland tours & experiences | TheNorthTrip",
  description:
    "Lapland tours explained: what’s included, cancellation rules, timing, overpricing patterns, and how to pick the right base (Rovaniemi, Levi, Ylläs).",
  alternates: { canonical: "/lapland-tours" },
  openGraph: {
    title: "Lapland tours & experiences | TheNorthTrip",
    description:
      "Avoid overpaying: what tour listings hide, what 'included' really means, and how to pick safely.",
    url: "/lapland-tours",
    type: "article",
  },
};

export default function LaplandToursPage() {
  const quickLinks = [
    { title: "Offer checklist (free)", href: "/offer-checklist" },
    { title: "Car rental guide", href: "/car-rental-helsinki" },
    { title: "Camper rental guide", href: "/camper-rental-finland" },
    { title: "Who we are", href: "/who-we-are" },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO full-bleed */}
      <section className="relative isolate">
        <div className="relative h-[64vh] min-h-[520px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Northern lights in Lapland"
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
                  Lapland tours & experiences
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Lapland tours:
                  <span className="block text-white/85">what’s included, what’s marketing.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Tours are weather-, timing- and logistics-dependent. A booking often buys a time slot,
                  not an experience. This guide helps you read listings like an adult with a budget.
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
              Practical guide (Rovaniemi, Levi, Ylläs)
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              How people overpay (without realizing it)
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              The big trap is treating tours like city attractions. Lapland tours depend on weather,
              daylight, pickup logistics, group size, and what’s actually included (gear, transport, food,
              insurance, cancellation). Reading those details saves you money and frustration.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h3 className="text-xl font-bold text-slate-900">1) “Included” rarely means what you think</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Check: pickup location, clothing/boots, photo add-ons, minimum age rules, group size,
                  and whether the time is spent on the activity or on transport.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">2) Cancellation and weather logic</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Lapland can change plans fast. Flexible cancellation is not “nice”. It’s the difference
                  between a calm trip and an angry email thread.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-slate-900">3) Base choice decides tour convenience</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  Rovaniemi is the gateway. Levi/Ylläs are more “in the landscape”. Your base affects pickup times,
                  transfer cost, and how realistic it is to do multiple activities without rushing.
                </p>
              </section>
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Want a safer selection process?</h3>
              <p className="mt-2 text-slate-700">
                Use the checklist to compare tours and offers consistently: inclusion, cancellation, logistics, base fit.
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
