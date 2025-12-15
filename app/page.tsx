export default function HomePage() {
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
            No fluff. No surprises.
          </p>

          <div className="mt-8 flex gap-4">
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
            <h3 className="text-xl font-semibold">
              Car rental in Finland
            </h3>
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
            <h3 className="text-xl font-semibold">
              Lapland tours & experiences
            </h3>
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
          <h2 className="mb-8 text-2xl font-semibold">
            Popular destinations
          </h2>

          <div className="flex gap-10">
            <div className="text-center">
              <img
                src="/images/destinations/dest-rovaniemi.jpg"
                alt="Rovaniemi"
                className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-orange-500"
              />
              <p className="mt-2 font-medium">Rovaniemi</p>
            </div>

            <div className="text-center">
              <img
                src="/images/destinations/dest-levi.jpg"
                alt="Levi"
                className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-orange-500"
              />
              <p className="mt-2 font-medium">Levi</p>
            </div>

            <div className="text-center">
              <img
                src="/images/destinations/dest-yllas.jpg"
                alt="Ylläs"
                className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-orange-500"
              />
              <p className="mt-2 font-medium">Ylläs</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
