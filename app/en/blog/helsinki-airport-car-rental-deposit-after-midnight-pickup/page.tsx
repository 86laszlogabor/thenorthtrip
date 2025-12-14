import Link from "next/link";

export default function Post() {
  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Helsinki Airport Car Rental Deposit & After Midnight Pickup (2025)
        </h1>
        <p className="opacity-80 text-lg">
          Two things cause most “counter surprises” at Helsinki Airport (HEL): deposit rules and late pickup.
          Here’s how to avoid both.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/en/car-rental-finland" className="px-4 py-3 rounded-xl border">
            Back to Car Rental in Finland
          </Link>
          <Link href="/en/get-help" className="px-4 py-3 rounded-xl bg-black text-white">
            Ask us before booking
          </Link>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) How deposits work (and why people get stuck)</h2>
        <p className="opacity-80">
          A deposit is usually a temporary hold on your card. It’s not the rental price. The amount varies by company,
          car category, and insurance level, but a common range is <strong>300€–1,000€</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li><strong>Credit card</strong> in the main driver’s name is commonly required.</li>
          <li><strong>Debit cards</strong> are often rejected or accepted only under strict conditions.</li>
          <li>The hold release time depends on your bank and can take several days.</li>
        </ul>
        <p className="opacity-80">
          Many travelers get turned away at the counter because they arrive with the wrong card type. Always check
          payment requirements before booking.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Late pickup after midnight at HEL</h2>
        <p className="opacity-80">
          Helsinki Airport pickup is convenient, but late arrival logistics can be tricky. Some desks close at night,
          and “out-of-hours” handling may require prior notice.
        </p>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Check the provider’s desk opening hours for your arrival time.</li>
          <li>Look for out-of-hours options (key box, call-out fee, pickup instructions).</li>
          <li>Notify the company if your flight is delayed (don’t assume they will wait).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Practical checklist before you land</h2>
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Confirm card type: credit vs debit.</li>
          <li>Confirm deposit amount and hold policy.</li>
          <li>Confirm late pickup/out-of-hours procedure (and fees).</li>
          <li>Screenshot your booking confirmation and terms.</li>
        </ul>
      </section>

      <section className="border rounded-2xl p-6 space-y-3">
        <h2 className="text-xl font-semibold">Need a quick answer?</h2>
        <p className="opacity-80">
          If you tell us your dates, arrival time, and pickup location, we can help you spot deposit and late pickup issues
          before you pay. We aim to reply within 30 minutes on WhatsApp.
        </p>
        <Link href="/en/get-help" className="inline-block px-4 py-3 rounded-xl bg-black text-white">
          Get help
        </Link>
      </section>
    </article>
  );
}
