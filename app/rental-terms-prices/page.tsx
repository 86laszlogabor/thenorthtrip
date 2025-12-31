import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function RentalTermsPricesPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Rental terms and prices, compared calmly.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-3xl">
          We summarize what changes between providers: deposits, card rules, fuel policy, mileage, insurance, and cancellations. Always confirm at booking.
        </p>
        <div className="mt-8">
          <CtaButton href="/rental-terms-prices" variant="primary">
            Compare Providers
          </CtaButton>
        </div>
      </section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Explain method.</h2>
        <Card className="mt-6">
          <h3 className="text-lg font-semibold">How we compare</h3>
          <p className="mt-3 text-sm text-brand-text/70">
            We pull terms from: provider policy pages booking conditions shown during checkout official supplier pages where available We summarize common patterns and note differences. Terms and prices can change quickly.
          </p>
        </Card>
      </Section>

      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Table with typical differences only.</h2>
        <div className="mt-6 overflow-x-auto rounded-card border border-black/5 bg-white shadow-softer">
          <table className="min-w-[720px] w-full text-sm">
            <thead className="bg-brand-bluegray">
              <tr className="text-left">
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Provider A (Marketplace)</th>
                <th className="p-4 font-semibold">Provider B (Direct Brand)</th>
                <th className="p-4 font-semibold">Provider C (Local Fleet)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Deposit", "Varies by supplier", "Often higher but clearer", "Varies, sometimes flexible"],
                ["Debit/Credit acceptance", "Supplier-dependent", "Often credit preferred", "Mixed, confirm before"],
                ["Fuel policy", "Full-to-full common", "Full-to-full common", "Mixed"],
                ["Mileage", "Varies", "Often limited/unlimited depends", "Often limited, route-based"],
                ["Insurance/deductible", "Often optional upgrades", "Brand packages vary", "Can be simpler, confirm exclusions"],
                ["Cancellation", "Varies by rate", "Varies by rate", "Sometimes stricter"],
                ["Typical add-ons", "Extra driver, GPS, child seats", "Similar", "Equipment-oriented add-ons"],
                ["Price range", "Depends on dates/season", "Depends on dates/season", "Depends on availability/season"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-black/5">
                  <td className="p-4 font-semibold">{row[0]}</td>
                  <td className="p-4 text-brand-text/70">{row[1]}</td>
                  <td className="p-4 text-brand-text/70">{row[2]}</td>
                  <td className="p-4 text-brand-text/70">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-brand-text/70 space-y-2">
          <p>Clear disclaimers: â€œMay varyâ€, â€œAlways confirmâ€.</p>
          <p>â€œMay vary by location, season, and supplier.â€</p>
          <p>â€œAlways verify deposit and card acceptance before booking.â€</p>
          <p>â€œInsurance wording differs. Deductible and exclusions matter most.â€</p>
          <p>Last verified: [insert date when you publish]</p>
          <p>Sources: Provider policy pages, booking checkout terms, supplier websites.</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/car-rental-helsinki" variant="primary">
            Car Rental Helsinki (where partners are listed first)
          </CtaButton>
          <CtaButton href="/get-help" variant="secondary">
            Get Help (for booking issues and post-booking changes)
          </CtaButton>
        </div>
      </Section>
    </div>
  );
}
