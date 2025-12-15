import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for thenorthtrip.",
  path: "/privacy",
  keywords: ["privacy policy", "thenorthtrip privacy"],
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">What we collect</h2>
        <p className="text-sm text-white/70">
          We don’t run invasive tracking here by default. If you email us an offer, we’ll see what you send.
        </p>
        <ul className="list-disc pl-6 text-sm text-white/75 space-y-2">
          <li>Offer details you share (pickup location/time, car class, screenshots, etc.).</li>
          <li>Email metadata required to reply (your email address).</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">What you should NOT send</h2>
        <ul className="list-disc pl-6 text-sm text-white/75 space-y-2">
          <li>Full card numbers, CVV, or banking login info.</li>
          <li>Anything you’d regret being leaked. It happens. Humans built the internet.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">Retention</h2>
        <p className="text-sm text-white/70">
          We keep messages only as long as needed to reply and improve recurring guidance. If you want deletion, email us.
        </p>
      </section>
    </main>
  );
}
