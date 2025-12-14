import Link from "next/link";

export default function EnHome() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="space-y-3">
        <h1 className="text-4xl font-semibold">
          Car rental, camper rental, and Lapland tours in Finland. Without the usual headaches.
        </h1>

        <p className="opacity-80 max-w-3xl">
          Compare trusted options, understand the real costs upfront, and book with confidence.
          We don’t sell. We don’t upsell. We help you pick what actually works.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/en/car-rental-finland"
            className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40"
          >
            Compare car prices
          </Link>
          <Link
            href="/en/camper-rental-finland"
            className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40"
          >
            Find a camper
          </Link>
          <Link
            href="/en/lapland-tours"
            className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40"
          >
            Explore Lapland tours
          </Link>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="border border-white/20 rounded-2xl p-5">
          <div className="font-semibold">Transparent pricing</div>
          <div className="opacity-80 text-sm mt-1">
            Deposits, insurance, mileage, and extras explained.
          </div>
        </div>

        <div className="border border-white/20 rounded-2xl p-5">
          <div className="font-semibold">Finland-focused</div>
          <div className="opacity-80 text-sm mt-1">
            Airport pickup, winter reality, practical tips.
          </div>
        </div>

        <div className="border border-white/20 rounded-2xl p-5">
          <div className="font-semibold">Real-time assistance</div>
          <div className="opacity-80 text-sm mt-1">
            Quick answers on WhatsApp before you book.
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="border border-white/20 rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Car rental in Finland</h2>
          <p className="opacity-80 text-sm mt-2">
            From Helsinki Airport to Lapland road trips. Compare prices and rental terms across providers.
          </p>
          <Link className="inline-block underline underline-offset-4 mt-3" href="/en/car-rental-finland">
            Compare car rentals
          </Link>
        </div>

        <div className="border border-white/20 rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Camper rental in Finland</h2>
          <p className="opacity-80 text-sm mt-2">
            Campervan or motorhome? Costs, mileage limits, winter practicality, explained.
          </p>
          <Link className="inline-block underline underline-offset-4 mt-3" href="/en/camper-rental-finland">
            Compare campers
          </Link>
        </div>

        <div className="border border-white/20 rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Lapland tours</h2>
          <p className="opacity-80 text-sm mt-2">
            Northern Lights, huskies, snowmobiles, and day trips. Choose tours with clear inclusions.
          </p>
          <Link className="inline-block underline underline-offset-4 mt-3" href="/en/lapland-tours">
            Browse tours
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">How it works</h2>
        <ol className="list-decimal pl-5 space-y-2 opacity-80 mt-3">
          <li>Choose a category (car, camper, tours).</li>
          <li>Compare real terms (not just the headline price).</li>
          <li>Book with the provider that fits your trip.</li>
        </ol>
      </section>

      {/* TRAPS */}
      <section className="border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Avoid these common traps</h2>
        <ul className="list-disc pl-5 space-y-2 opacity-80 mt-3">
          <li>“Cheap” rentals that add fees at the counter.</li>
          <li>Insurance that sounds good but leaves a huge excess.</li>
          <li>Mileage limits that turn a road trip into a bill.</li>
          <li>Winter rules hidden in the fine print.</li>
        </ul>
      </section>

      {/* HELP CTA */}
      <section className="border border-white/20 rounded-2xl p-6 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold">Need help before booking?</h2>
          <p className="opacity-80 mt-2">
            Ask us about insurance, deposits, and late pickup rules. We usually reply within 30 minutes on WhatsApp.
          </p>
        </div>
        <Link
          href="/en/get-help"
          className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40"
        >
          Get help
        </Link>
      </section>

      {/* LEGAL LINKS (so you “see” them) */}
      <section className="border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Legal</h2>
        <p className="opacity-80 mt-2">
          Basic policies and disclosures for this informational site.
        </p>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link className="underline underline-offset-4" href="/en/affiliate-disclosure">
            Affiliate disclosure
          </Link>
          <Link className="underline underline-offset-4" href="/en/privacy">
            Privacy policy
          </Link>
          <Link className="underline underline-offset-4" href="/en/terms">
            Terms
          </Link>
        </div>
      </section>
    </div>
  );
}
