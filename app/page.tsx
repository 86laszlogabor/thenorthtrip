import Image from "next/image";

export default function HomePage() {
  const destinations = [
    {
      name: "Rovaniemi",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
      blurb: "Santa village logistics, winter driving basics, and the real cost traps.",
      cta: "Open Rovaniemi",
    },
    {
      name: "Levi",
      href: "/levi",
      image: "/images/destinations/dest-levi.jpg",
      blurb: "Ski season timing, airport transfers, and what to book early.",
      cta: "Open Levi",
    },
    {
      name: "Ylläs",
      href: "/yllas",
      image: "/images/destinations/dest-yllas.jpg",
      blurb: "Quieter Lapland base, trail access, and practical stay options.",
      cta: "Open Ylläs",
    },
    {
      name: "Helsinki",
      href: "/helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
      blurb: "Ferries, saunas, and one-day routes that actually make sense.",
      cta: "Open Helsinki",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/hero/hero-lapland.jpg"
          alt="Lapland winter road"
          fill
          priority
          className="object-cover"
        />

        {/* keep your hero overlay as-is */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 text-white">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
            Finland rentals · Lapland tours
          </span>

          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-tight">
            Get clear facts before you book.
          </h1>

          <p className="mt-6 max-w-xl text-white/80">
            Deposit holds, debit cards, winter add-ons.
            <br />
            No fluff. No surprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/car-rental-helsinki"
              className="rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Compare car rental costs
            </a>

            <a
              href="/get-help"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Ask before booking
            </a>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="TheNorthTrip"
              width={190}
              height={48}
              priority
              className="h-10 w-auto"
            />
            <div className="hidden sm:block text-sm text-slate-600">
              Decision-first guides for Finland rentals and tours.
            </div>
          </div>

          <a
            href="/offer-checklist"
            className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
          >
            Free booking checklist
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* INFO CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Car rental in Finland</h3>
            <p className="mt-3 text-slate-600">
              Credit card deposits, debit card rules, airport pickup surprises.
            </p>
            <a
              href="/car-rental-helsinki"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
            >
              Read the guide
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Lapland tours & experiences</h3>
            <p className="mt-3 text-slate-600">
              What’s included, what’s not, and how tourists overpay.
            </p>
            <a
              href="/lapland-tours"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500"
            >
              Compare tours
            </a>
          </div>
        </div>

        {/* DESTINATIONS */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-semibold">Popular destinations</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:bg-slate-50"
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

                <div className="mt-3 text-sm text-slate-600">{dest.blurb}</div>

                {/* orange CTA button on every card */}
                <div className="mt-6">
                  <span className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-500">
                    {dest.cta} <span className="ml-2 opacity-80">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
