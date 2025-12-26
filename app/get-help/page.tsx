import Section from "@/components/Section";
import Card from "@/components/Card";
import CtaButton from "@/components/CtaButton";

export default function GetHelpPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-site px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Paid support funnel.
        </h1>
        <p className="mt-4 text-base md:text-lg text-brand-text/75 max-w-3xl">
          WhatsApp + email. Priority for bookings via site links. Clear limitations and expectations.
        </p>
        <div className="mt-8">
          <CtaButton href="/get-help" variant="primary">
            Contact Support
          </CtaButton>
        </div>
      </section>

      <Section className="bg-brand-bluegray">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold">What we help with</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Booking problems</li>
              <li>Payment failures or unclear card requirements</li>
              <li>Deposit surprises or confusion</li>
              <li>Pickup/return timing issues</li>
              <li>Cancellation and change questions</li>
              <li>After booking</li>
              <li>Name corrections, date changes (when possible)</li>
              <li>Understanding what’s included vs add-ons</li>
              <li>Document checklist for pickup</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold">If you booked via our links</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Priority triage and faster resolution routing</li>
              <li>We can help interpret terms and escalate via the correct support channels</li>
            </ul>

            <h2 className="mt-6 text-2xl font-semibold">If you booked elsewhere</h2>
            <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
              <li>Best-effort guidance</li>
              <li>We can’t access private bookings, but we can tell you what to ask and where</li>
            </ul>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-2xl font-semibold">Contact options</h2>
          <p className="mt-3 text-sm text-brand-text/70">WhatsApp: [your WhatsApp link]</p>
          <p className="mt-2 text-sm text-brand-text/70">Email: [your support email]</p>
          <div className="mt-4">
            <CtaButton href="/get-help" variant="secondary">
              See common fixes
            </CtaButton>
          </div>
        </Card>

        <Card className="mt-6">
          <h2 className="text-2xl font-semibold">FAQs (what people ask)</h2>
          <ul className="mt-3 text-sm text-brand-text/70 list-disc pl-5 space-y-1">
            <li>“Will my debit card work for the deposit?”</li>
            <li>“What does ‘insurance included’ actually mean?”</li>
            <li>“I arrive late, will the desk be open?”</li>
            <li>“Can I change dates after booking?”</li>
            <li>“What do I do if the provider tries to upsell at pickup?”</li>
            <li>“What documents do I need?”</li>
          </ul>
        </Card>

        <Card className="mt-6">
          <h2 className="text-2xl font-semibold">Expectations (short, honest)</h2>
          <p className="mt-3 text-sm text-brand-text/70">
            We respond as fast as possible, but we’re not 24/7. We can’t override partner policies. We can help you understand them, and choose the right next step.
          </p>
        </Card>
      </Section>
    </div>
  );
}
