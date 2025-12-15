import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">About</h1>
        <p className="text-white/70">
          thenorthtrip exists for one simple reason: people don’t get scammed by price, they get scammed by rules.
          Deposit holds, debit pickup restrictions, winter add-ons, and “included” that magically isn’t included.
        </p>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold">What we do</h2>
        <ul className="list-disc pl-6 text-white/75 space-y-2">
          <li>Explain the boring stuff that costs money at the counter.</li>
          <li>Turn fine print into a checklist you can actually use.</li>
          <li>Help you sanity-check an offer before you pay.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-xl font-semibold">What we don’t do</h2>
        <ul className="list-disc pl-6 text-white/75 space-y-2">
          <li>We don’t book for you.</li>
          <li>We don’t provide legal advice.</li>
          <li>We don’t promise “cheapest”, we aim for “least surprising”.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Start here</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link className="rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10" href="/blog">
            <p className="font-semibold">Blog</p>
            <p className="mt-1 text-sm text-white/70">Short guides that answer real “before paying” questions.</p>
          </Link>
          <Link className="rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10" href="/get-help">
            <p className="font-semibold">Ask before booking</p>
            <p className="mt-1 text-sm text-white/70">Send an offer. We’ll flag traps and missing details.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
