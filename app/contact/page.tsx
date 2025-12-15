import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact thenorthtrip. Use the offer template so we can reply fast.",
  path: "/contact",
  keywords: ["contact thenorthtrip", "offer check finland"],
});

export default function ContactPage() {
  const subject = encodeURIComponent("Message (thenorthtrip)");
  const body = encodeURIComponent(`Hi!\n\nTopic:\n\nDetails:\n\nLink (if any):\n\nThanks!`);

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white sm:text-5xl">Contact</h1>
        <p className="text-white/70">Keep it short. We like clarity. Marketing departments don’t.</p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4">
        <a
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          href={`mailto:hello@thenorthtrip.com?subject=${subject}&body=${body}`}
        >
          Email us
        </a>

        <p className="text-sm text-white/70">
          If your message is about a booking, use{" "}
          <Link className="underline decoration-white/30 hover:decoration-white/60" href="/get-help">
            Ask before booking
          </Link>{" "}
          instead.
        </p>
      </section>
    </main>
  );
}
