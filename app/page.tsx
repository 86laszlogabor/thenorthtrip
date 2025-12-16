export default function HomePage() {
  const destinations = [
    {
      name: "Rovaniemi",
      href: "/rovaniemi",
      image: "/images/destinations/dest-rovaniemi.jpg",
    },
    {
      name: "Levi",
      href: "/levi",
      image: "/images/destinations/dest-levi.jpg",
    },
    {
      name: "Ylläs",
      href: "/yllas",
      image: "/images/destinations/dest-yllas.jpg",
    },
    {
      name: "Helsinki",
      href: "/helsinki",
      image: "/images/destinations/dest-helsinki.jpg",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="/images/hero/hero-lapland.jpg"
          alt="Lapland winter road"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 text-white">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
            Finland rentals · Lapland tours
          </span>

          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-tight">
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
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-orange-600"
            >
              Compare car rental costs
            </a>

            <a
              href="/get-help"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Ask before booking
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* INFO CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Car rental in Finland</h3>
            <p className="mt-3 text-slate-600">
              Credit card deposits, debit card rules, airport pickup surprises.
            </p>
            <a
              href="/car-rental-helsinki"
              className="mt-4 inline-block font-semibold text-orange-600 hover:underline"
            >
              Read the guide →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Lapland tours & experiences</h3>
            <p className="mt-3 text-slate-600">
              What’s included, what’s not, and how tourists overpay.
            </p>
            <a
              href="/lapland-tours"
              className="mt-4 inline-block font-semibold text-orange-600 hover:underline"
            >
              Compare tours →
            </a>
          </div>
        </div>

        {/* DESTINATIONS */}
        <div className="mt-20">
          <h2 className="mb-8 text-2xl font-semibold">Popular destinations</h2>

          <div className="flex flex-wrap gap-10">
            {destinations.map((dest) => (
              <a key={dest.name} href={dest.href} className="group text-center">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-orange-500 transition group-hover:scale-105"
                />
                <p className="mt-2 font-medium group-hover:text-orange-600">
                  {dest.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
