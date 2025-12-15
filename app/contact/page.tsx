import Link from "next/link";

export default function ContactPage() {
  const subject = encodeURIComponent("Question (thenorthtrip)");
  const body = encodeURIComponent(
    `Hi,\n\nI have a question about:\n- link:\n- dates:\n- pickup:\n- deposit shown:\n- card type:\n\nThanks!`
  );

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <p className="text-white/70">
          If you have a question or want an offer checked, email is simplest. Don’t send card numbers. Ever.
        </p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-4">
        <h2 className="text-xl font-semibold">Email</h2>
        <a
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          href={`mailto:hello@thenorthtrip.com?subject=${subject}&body=${body}`}
        >
          hello@thenorthtrip.com
        </a>
        <p className="text-sm text-white/70">
          For offer checks use the <Link className="underline decoration-white/30 hover:decoration-white/60" href="/get-help">Ask before booking</Link> page.
        </p>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold">Privacy</h2>
        <p className="text-sm text-white/70">
          Blur personal info in screenshots. See <Link className="underline decoration-white/30 hover:decoration-white/60" href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </main>
  );
}
