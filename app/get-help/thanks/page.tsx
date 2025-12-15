import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-white">Thanks</h1>
        <p className="text-white/70">
          Got it. If you included screenshots + pickup details, you’ve already done better than 90% of humanity.
        </p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold text-white">What to send if missing</h2>
        <ul className="list-disc pl-6 text-sm text-white/75 space-y-2">
          <li>Pickup location + time/date</li>
          <li>Driver age</li>
          <li>Card type (credit/debit)</li>
          <li>Deposit amount shown</li>
          <li>Insurance options screenshot</li>
        </ul>
      </section>

      <div className="flex gap-3">
        <Link
          href="/blog"
          className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
        >
          Read the blog
        </Link>
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
