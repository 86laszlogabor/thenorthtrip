import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About thenorthtrip",
  description:
    "We write small, high-intent guides about Finland bookings: deposits, debit card rules, winter add-ons, and inclusions.",
  path: "/about",
  keywords: ["about thenorthtrip", "finland booking traps", "car rental deposit hold guide"],
});

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white sm:text-5xl">About</h1>
        <p className="text-white/70">
          This site exists because booking pages are optimized for conversions, not clarity. Shocking, I know.
        </p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">What we do</h2>
        <ul className="list-disc pl-6 text-sm text-white/75 space-y-2">
          <li>Explain deposit holds, card rules, airport fees, and winter add-ons without the marketing fog.</li>
          <li>Compare offers based on fine print, not headline price.</li>
          <li>Write short articles that answer “what will go wrong at pickup” questions.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">What we don’t do</h2>
        <ul className="list-disc pl-6 text-sm text-white/75 space-y-2">
          <li>No pretending to be the rental company or a tour operator.</li>
          <li>No collecting sensitive info (don’t send full card numbers, ever).</li>
          <li>No “perfect deal” promises. We reduce risk, we don’t control the world.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Need a quick check?</h2>
        <p className="mt-2 text-sm text-white/70">
          Send your offer (screenshot or summary) and we’ll flag obvious traps.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the blog
          </Link>
        </div>
      </section>
    </main>
  );
}
