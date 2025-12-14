"use client";
import Link from "next/link";

const WHATSAPP_NUMBER = "358468841548";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi! I have a quick question before booking my trip to Finland."
)}`;

export default function GetHelpPage() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Get help before you book
        </h1>

        <p className="text-lg opacity-80">
          We help you decide <em>before</em> you pay. Deposits, insurance, late pickup
          rules, mileage limits, and common hidden fees explained.
        </p>

        <p className="opacity-80">
          We aim to respond within <strong>30 minutes</strong> on WhatsApp.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl bg-black text-white"
          >
            Message us on WhatsApp
          </a>

          <button
            className="px-4 py-3 rounded-xl border"
            onClick={() => navigator.clipboard.writeText(`+${WHATSAPP_NUMBER}`)}
          >
            Copy WhatsApp number
          </button>

          <Link
            href="/en/car-rental-finland"
            className="px-4 py-3 rounded-xl border"
          >
            Back to car rental guide
          </Link>
        </div>

        <div className="text-sm opacity-70">
          WhatsApp number: <strong>+{WHATSAPP_NUMBER}</strong>
        </div>
      </section>

      {/* WHAT WE HELP WITH */}
      <section className="grid md:grid-cols-3 gap-4">
        <InfoCard
          title="We can help with"
          items={[
            "Deposit amount & credit card requirements",
            "Insurance and excess (what’s worth paying for)",
            "Late pickup & out-of-hours rules",
            "Mileage limits and fuel policies",
            "Choosing car vs camper vs tours",
          ]}
        />

        <InfoCard
          title="What we need from you"
          items={[
            "Travel dates & pickup location",
            "Planned route (Helsinki only or Lapland?)",
            "Driver age",
            "Credit card availability",
            "Your priority: cheapest / safest / easiest",
          ]}
        />

        <InfoCard
          title="What we don’t do"
          items={[
            "24/7 emergency support",
            "Changing bookings for you",
            "Contacting rental companies on your behalf",
            "Border-crossing tricks",
            "Guarantees we can’t control",
          ]}
        />
      </section>

      {/* COMMON QUESTIONS */}
      <section className="border rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">
          Questions we answer quickly
        </h2>

        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Is a debit card accepted or do I need a credit card?</li>
          <li>How much is the deposit and when is it released?</li>
          <li>My flight lands after midnight. Can I still pick up the car?</li>
          <li>Is unlimited mileage really unlimited?</li>
          <li>Do I need full insurance for winter driving?</li>
        </ul>
      </section>

      {/* RESPONSE PROMISE */}
      <section className="border rounded-2xl p-6 space-y-3">
        <h2 className="text-xl font-semibold">Response time promise</h2>

        <p className="opacity-80">
          We aim to reply within <strong>30 minutes</strong> during normal hours.
          Messages sent at night will be answered as soon as possible.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-3 rounded-xl bg-black text-white"
        >
          Open WhatsApp chat
        </a>
      </section>

      {/* PRIVACY NOTE */}
      <section className="text-sm opacity-70">
        Please don’t send passport numbers, card details, or sensitive personal
        information via WhatsApp.
      </section>
    </div>
  );
}

function InfoCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border rounded-2xl p-6 space-y-3">
      <div className="font-semibold">{title}</div>
      <ul className="list-disc pl-5 space-y-2 text-sm opacity-90">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
