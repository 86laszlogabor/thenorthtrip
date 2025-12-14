import Link from "next/link";

export default function CarRentalFinland() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Car Rental in Finland – Prices, Deposits & Real Costs Explained
        </h1>
        <p className="opacity-80 text-lg">
          Renting a car in Finland is easy on paper and expensive in reality if you
          don’t understand deposits, insurance, and winter rules. This page shows what
          actually matters before you book.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="#compare" className="px-4 py-3 rounded-xl bg-black text-white">
            Compare car rental prices
          </Link>
          <Link href="/en/get-help" className="px-4 py-3 rounded-xl border">
            Ask us before booking
          </Link>
        </div>
      </section>

      <section id="compare" className="border rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Quick comparison</h2>
        <p className="opacity-80">
          This will become the comparison widget / affiliate links later. For now, it’s a clean CTA.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <Box title="Best for price" text="Compare multiple providers and check what’s included." />
          <Box title="Best for flexibility" text="Look for free cancellation and clear fuel policies." />
          <Box title="Best for winter trips" text="Focus on insurance excess and winter readiness." />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Deposits & credit cards</h2>
        <p className="opacity-80">
          Most companies block a deposit (commonly <strong>300€–1,000€</strong>). A credit card in the main
          driver’s name is usually required. Debit cards are often rejected at the counter.
        </p>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Check deposit amount before booking.</li>
          <li>Know the difference: deposit hold vs actual charge.</li>
          <li>Refund speed depends on your bank (often days, sometimes longer).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Helsinki Airport vs city pickup</h2>
        <p className="opacity-80">
          Airport pickup is convenient but can be pricier. City offices may have limited hours,
          especially weekends. Late arrivals often require “out-of-hours” handling.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Winter driving in Finland</h2>
        <p className="opacity-80">
          Winter conditions are real. Tires, visibility, and road conditions matter more than the brand of the car.
        </p>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Winter tires are mandatory in season.</li>
          <li>Plan more time for long distances (Lapland is not “near”).</li>
          <li>Don’t cheap out on insurance excess if you’re doing rural winter driving.</li>
        </ul>
      </section>

      <section className="border rounded-2xl p-6 space-y-3">
        <h2 className="text-xl font-semibold">Need help before booking?</h2>
        <p className="opacity-80">
          Ask us about insurance, deposits, and late pickup rules. We aim to reply within 30 minutes on WhatsApp.
        </p>
        <Link href="/en/get-help" className="inline-block px-4 py-3 rounded-xl border">
          Get help
        </Link>
      </section>
    </div>
  );
}

function Box({ title, text }: { title: string; text: string }) {
  return (
    <div className="border rounded-xl p-4">
      <div className="font-medium">{title}</div>
      <div className="opacity-80">{text}</div>
    </div>
  );
}
