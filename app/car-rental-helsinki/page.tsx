import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CTABox from "@/components/CTABox";

export const metadata: Metadata = pageMetadata({
  title: "Camper rental Finland: winter costs, mileage limits, real prices",
  description:
    "Straightforward camper rental Finland guide. Winter heating costs, mileage limits, hidden extras, and what actually makes a van winter-ready.",
  path: "/camper-rental-finland",
  keywords: [
    "camper rental finland winter",
    "campervan winter heating cost finland",
    "camper rental mileage limit finland",
    "winterised camper finland meaning",
  ],
});

export default function CamperRentalFinlandPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Camper rental in Finland without winter surprises
        </h1>
        <p className="max-w-2xl text-white/70">
          This page focuses on the details that actually decide comfort and cost in Finland: heating, power, mileage
          caps, and the extras that quietly inflate totals.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for winter travel</h2>
          <p className="mt-2 text-sm text-white/70">
            Heating type, insulation, battery capacity, and cold-weather design matter more than brand or layout.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for budget</h2>
          <p className="mt-2 text-sm text-white/70">
            Cheap daily rates often hide strict mileage caps and mandatory add-ons.
          </p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Best for long routes</h2>
          <p className="mt-2 text-sm text-white/70">
            Kilometer limits and overage fees decide the real price on longer trips.
          </p>
        </div>
      </section>

      <section className="space-y-6 max-w-3xl">
        <h2 className="text-2xl font-semibold">What “winter-ready” really means</h2>
        <p className="text-white/70">
          In Finland, winter-ready is not marketing language. It means a reliable heater, insulated living space,
          sufficient battery capacity, and systems designed to operate below freezing.
        </p>

        <h2 className="text-2xl font-semibold">Mileage limits and overage fees</h2>
        <p className="text-white/70">
          Many offers include limited kilometers per day. Always calculate your planned route and check the per-km
          overage fee before booking.
        </p>

        <h2 className="text-2xl font-semibold">Hidden extras that change the total</h2>
        <p className="text-white/70">
          Cleaning fees, bedding packs, gas refills, power hookups, and winter equipment are common add-ons that appear
          late in the booking process.
        </p>
      </section>

      <CTABox
        title="Want a quick sanity-check?"
        text="Send the camper listing and dates. We’ll flag winter readiness gaps, mileage traps, and hidden extras."
        primaryHref="/get-help"
        primaryLabel="Ask before booking"
        secondaryHref="/blog"
        secondaryLabel="Read related posts"
      />
    </main>
  );
}
