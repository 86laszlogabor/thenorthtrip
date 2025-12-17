import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const destinations = [
    {
      name: "Rovaniemi",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
      blurb: "Santa village logistics, winter driving basics, and real cost traps.",
    },
    {
      name: "Levi",
      href: "/levi",
      image: "/images/destinations/dest-levi.jpg",
      blurb: "Ski season timing, airport transfers, and what to book early.",
    },
    {
      name: "Ylläs",
      href: "/yllas",
      image: "/images/destinations/dest-yllas.jpg",
      blurb: "Quieter Lapland base, trail access, and practical stay options.",
    },
    {
      name: "Helsinki",
      href: "/helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
      blurb: "Ferries, saunas, and one-day routes that actually make sense.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[62vh] min-h-[480px] w-full overflow-hidden bg-slate-950">
        <Image
          src="/images/hero/hero-lapland.jpg"
          alt="Lapland winter sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-white">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight tracking-tight">
            Get clear facts before you book.
          </h1>

          <p className="mt-5 max-w-xl text-white/80">
            Deposit holds, debit cards, winter add-ons.
            <br />
            No fluff. No surprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/car-rental-helsinki"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-600"
            >
              Compare car rental costs
            </Link>

            <Link
              href="/get-help"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Ask before booking
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING DECISION CARDS */}
      <section className="relative -mt-36 z-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Car rental in Finland",
                desc: "Credit card deposits, debit card rules, airport pickup surprises.",
                href: "/car-rental-helsinki",
                cta: "Read the guide",
              },
              {
                title: "Camper rental in Finland",
                desc: "Fleet vs peer-to-peer, winter-ready setups, and pickup logic that affects price.",
                href: "/camper-rental-finland",
                cta: "Compare camper options",
              },
              {
                title: "Lapland tours & experiences",
                desc: "What’s included, what’s not, and how tourists overpay.",
                href: "/lapland-tours",
                cta: "Compare tours",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-3 text-slate-700">{c.desc}</p>
                <Link
                  href={c.href}
                  className="mt-6 inline-flex rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-600"
                >
                  {c.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <h2 className="text-2xl font-semibold">Popular destinations</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.href}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm hover:bg-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-semibold text-slate-900">{dest.name}</div>
              </div>

              <p className="mt-3 text-sm text-slate-700">{dest.blurb}</p>

              <div className="mt-5">
                <span className="inline-flex rounded-xl bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800 group-hover:bg-orange-100">
                  Open {dest.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
