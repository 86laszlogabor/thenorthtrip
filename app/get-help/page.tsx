import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ask before booking: deposits, card rules, winter add-ons",
  description:
    "Send your booking offer and get a practical sanity-check: deposit holds, card requirements, winter add-ons, and tour inclusions.",
  path: "/get-help",
  keywords: [
    "car rental deposit check finland",
    "debit card car rental helsinki",
    "winter add-ons finland rental",
    "lapland tour cancellation help",
  ],
});

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold sm:text-5xl">Got it.</h1>
      <p className="text-white/70">
        We received your request. We’ll reply with a short checklist: deposit traps, card rules, winter add-ons, and tour inclusions.
      </p>
      <a href="/" className="text-sm text-white/70 hover:text-white/90">
        ← Back home
      </a>
    </main>
  );
}
      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">What to send</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Pickup location and time</li>
            <li>Deposit amount and payment method</li>
            <li>Insurance or coverage shown</li>
            <li>For tours: inclusions and cancellation terms</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">What you get back</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>Red flags to watch out for</li>
            <li>Real cost checklist</li>
            <li>Practical alternatives</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/20 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Send your offer</h2>
        <p className="mt-2 text-sm text-white/70">
          This uses email for now. You can switch to a form later.
        </p>
        <a
          href="mailto:hello@thenorthtrip.com?subject=Booking%20sanity-check"
          className="mt-4 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Email hello@thenorthtrip.com
        </a>
      </section>
    </main>
  );
}
