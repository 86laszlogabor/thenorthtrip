// app/offer-checklist/page.tsx
import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

export const metadata = {
  title: "Offer Checklist | TheNorthTrip",
  description:
    "A decision-first checklist to avoid booking mistakes: card/deposit, insurance, winter requirements, timing, and proof.",
};

const items = [
  {
    title: "Card & deposit confirmed",
    body: "Debit/credit acceptance and deposit hold rules vary by supplier. Confirm before you fly.",
    href: "/rental-terms-prices",
  },
  {
    title: "Desk hours match arrival",
    body: "Airport vs city desk hours differ. Late pickup rules should be in writing.",
    href: "/car-rental-helsinki",
  },
  {
    title: "Total cost understood",
    body: "Add-ons can change the final number fast. Check fuel policy, extra drivers, young driver fees.",
    href: "/rental-terms-prices",
  },
  {
    title: "Insurance language decoded",
    body: "Focus on deductible + exclusions, not the word 'included'. Keep screenshots.",
    href: "/rental-terms-prices",
  },
  {
    title: "Winter reality checked",
    body: "Tyres, visibility, and buffers matter more than the model in winter conditions.",
    href: "/car-rental-helsinki",
  },
  {
    title: "Cancellation rules saved",
    body: "Rates differ. Save the cancellation window and conditions at booking time.",
    href: "/rental-terms-prices",
  },
  {
    title: "Pickup location verified",
    body: "Don't assume 'airport' means the terminal you land at. Verify exact desk location.",
    href: "/car-rental-helsinki",
  },
  {
    title: "Documents ready",
    body: "Name match, license validity, and required payment method. Bring what the supplier requires.",
    href: "/rental-terms-prices",
  },
  {
    title: "Proof archived",
    body: "Keep confirmation, terms, screenshots, and any promises in writing. Saves hours later.",
    href: "/get-help",
  },
  {
    title: "Backup plan exists",
    body: "If pickup fails, you need a Plan B. Know transport alternatives and escalation steps.",
    href: "/getting-around-finland",
  },
  {
    title: "Partner path chosen",
    body: "Marketplace for speed vs direct brand for familiarity. Either way: verify supplier terms.",
    href: "/car-rental-helsinki",
  },
  {
    title: "Help route bookmarked",
    body: "If something breaks mid-trip, you want one page with the next steps.",
    href: "/get-help",
  },
];

export default function OfferChecklistPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Offer checklist: don’t book on assumptions.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-2xl">
          12 checks that prevent most “surprise costs” and pickup failures. Use it before you pay.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <CtaButton href="/car-rental-helsinki" variant="primary">
            Start with Car Rental Helsinki
          </CtaButton>
          <CtaButton href="/rental-terms-prices" variant="outline">
            Open terms checklist
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="flex flex-col">
              <h2 className="text-lg font-semibold">{it.title}</h2>
              <p className="mt-2 text-sm text-brand-text/70">{it.body}</p>
              <div className="mt-auto pt-4">
                <Link href={it.href} className="text-sm font-semibold hover:underline">
                  Open related page →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
