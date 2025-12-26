import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export default function CarRentalHelsinkiPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
        <div className="mx-auto max-w-site px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Car rental in Helsinki, without desk drama.
          </h1>
          <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
            Start with trusted partners, then learn what actually happens at pickup and how rules differ across providers.
          </p>
          <div className="mt-8">
            <CtaButton href="/car-rental-helsinki" variant="primary">
              Compare Helsinki Options
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Partner list FIRST */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Recommended partners for Helsinki</h2>
        <p className="mt-3 text-sm md:text-base text-brand-text/75 max-w-3xl">
          We highlight partners that are easier to verify, easier to support, and easier to resolve when something goes wrong.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">DiscoverCars (Marketplace)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Broad comparison + clear filters</p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Compare multiple suppliers in one flow</li>
                <li>Strong filtering for deposit, fuel policy, mileage</li>
                <li>Transparent cancellation conditions (always verify at booking)</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Deposit amount, card type accepted, pickup desk hours</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Rentalcars.com (Marketplace)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Familiar booking flow + wide inventory</p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Big inventory across major brands</li>
                <li>Easy date/location changes (depends on booking conditions)</li>
                <li>Clear summary screens before payment</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Supplier-specific terms inside the booking, not just the top-line price</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                Check availability
              </CtaButton>
            </div>
          </Card>

          <Card className="flex flex-col md:col-span-2">
            <h3 className="text-lg font-semibold">Direct major brands (Supplier-direct)</h3>
            <p className="mt-3 text-sm text-brand-text/70"><span className="font-semibold">Best for:</span> Brand consistency, sometimes simpler desk handling</p>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">Highlights:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Direct communication with the supplier</li>
                <li>Loyalty programs may apply</li>
                <li>Sometimes clearer upgrade logic</li>
              </ul>
            </div>
            <div className="mt-3 text-sm text-brand-text/70">
              <p className="font-semibold">What to double-check:</p>
              <p className="mt-1">Final price with add-ons, insurance exclusions, deposit holds</p>
            </div>
            <div className="mt-auto pt-4">
              <CtaButton href="/car-rental-helsinki" variant="secondary" className="w-full">
                See options
              </CtaButton>
            </div>
          </Card>
        </div>

        {/* Transparency blocks */}
        <div className="mt-10 grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">How we choose partners</h3>
            <p className="mt-3 text-sm text-brand-text/70">
              We prefer partners with: clear terms, visible support channels, reliable inventory, and fewer “gotchas” at pickup. We still show what differs across the market, so you can make a clean decision.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">What differs across providers</h3>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Deposit size and method (credit vs debit acceptance changes by supplier)</li>
              <li>Fuel policies (full-to-full is simplest, but not always offered)</li>
              <li>Insurance language (deductible and exclusions matter more than “included”)</li>
              <li>Desk hours (late arrivals can create expensive problems)</li>
            </ul>
          </Card>

          <Card className="md:col-span-2">
            <h3 className="text-lg font-semibold">What happens at pickup</h3>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>You’ll confirm identity, license, and payment method.</li>
              <li>The desk may place a deposit hold. The amount and rules vary.</li>
              <li>Add-ons get offered. Some are optional, some are “strongly suggested.” The key question: what is mandatory vs what is upsell?</li>
            </ul>
            <p className="mt-4 text-sm font-semibold">Common pain points (calm, factual):</p>
            <ul className="mt-2 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Card mismatch (name, type, or issuing country)</li>
              <li>Deposit higher than expected</li>
              <li>Insurance confusion (what you already have vs what they offer)</li>
              <li>Out-of-hours returns or unclear fuel rules</li>
            </ul>
            <p className="mt-4 text-sm text-brand-text/70">
              <Link href="/rental-terms-prices" className="font-semibold hover:underline">
                See Rental Terms &amp; Prices
              </Link>{" "}
              for a clean comparison of the policies that matter.
            </p>
          </Card>
        </div>
      </Section>

      {/* Only AFTER partners: Helsinki booking hub */}
      <Section className="bg-brand-bluegray">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Helsinki, booked the smart way</h2>
        <p className="mt-3 text-sm md:text-base text-brand-text/75 max-w-3xl">
          If you’re renting a car, you’re usually doing more than “driving around.” These are the booking categories that pair naturally with Helsinki trips.
        </p>

        <div className="mt-6 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Helsinki sightseeing</h3>
            <p className="mt-2 text-sm text-brand-text/70">City highlights, guided tours, and day trips. Good when time is short.</p>
            <div className="mt-auto pt-4">
              <Link href="/get-help" className="text-sm font-semibold hover:underline">See options →</Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Ferry &amp; cruise (Helsinki + nearby islands)</h3>
            <p className="mt-2 text-sm text-brand-text/70">The simplest “wow” per hour in the region, especially in good weather.</p>
            <div className="mt-auto pt-4">
              <Link href="/get-help" className="text-sm font-semibold hover:underline">See options →</Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Sauna experiences</h3>
            <p className="mt-2 text-sm text-brand-text/70">From classic public saunas to design-forward spots. Know rules, booking slots, and etiquette.</p>
            <div className="mt-auto pt-4">
              <Link href="/get-help" className="text-sm font-semibold hover:underline">See options →</Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Restaurants (reservations and local picks)</h3>
            <p className="mt-2 text-sm text-brand-text/70">Not “best restaurants ever,” just solid, bookable choices that match your trip style.</p>
            <div className="mt-auto pt-4">
              <Link href="/get-help" className="text-sm font-semibold hover:underline">See options →</Link>
            </div>
          </Card>

          <Card className="flex flex-col">
            <h3 className="text-lg font-semibold">Airport transfers</h3>
            <p className="mt-2 text-sm text-brand-text/70">When you don’t want to deal with late arrivals or baggage.</p>
            <div className="mt-auto pt-4">
              <Link href="/get-help" className="text-sm font-semibold hover:underline">See options →</Link>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-sm text-brand-text/75">
          <p className="font-semibold">Need help after booking?</p>
          <p className="mt-2">
            <Link href="/get-help" className="font-semibold hover:underline">Get Help</Link> → (WhatsApp/email support, especially for bookings made through our links)
          </p>
          <p className="mt-2">
            Links: <Link href="/policy" className="font-semibold hover:underline">Policy</Link> •{" "}
            <Link href="/rental-terms-prices" className="font-semibold hover:underline">Rental Terms &amp; Prices</Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
