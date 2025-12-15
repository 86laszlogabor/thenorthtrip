import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: "Terms of use for thenorthtrip.",
  path: "/terms",
  keywords: ["terms of use", "thenorthtrip terms"],
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Terms</h1>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">Not legal advice</h2>
        <p className="text-sm text-white/70">
          We share practical guidance to reduce booking mistakes. You’re responsible for your booking decisions.
        </p>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">Accuracy</h2>
        <p className="text-sm text-white/70">
          Terms on provider websites change. Always verify checkout details and rental/tour terms before paying.
        </p>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">Liability</h2>
        <p className="text-sm text-white/70">
          We’re not liable for provider actions, cancellations, chargebacks, or your inability to read fine print at 2 AM.
        </p>
      </section>
    </main>
  );
}
