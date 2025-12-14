// app/car-rental-helsinki/page.tsx
import Link from "next/link";

export default function CarRentalHelsinkiPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold sm:text-5xl">Car Rental in Helsinki</h1>

        <p className="max-w-2xl text-white/70">
          Placeholder page. Focus on real prices, deposits, airport vs city pickup, and winter-related costs.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask us before booking
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </section>

      <section className="mt-12 space-y-10">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Deposits & credit cards</h2>
          <p className="mt-2 text-white/70">Placeholder section.</p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Helsinki Airport vs city pickup</h2>
          <p className="mt-2 text-white/70">Placeholder section.</p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Winter driving in Finland</h2>
          <p className="mt-2 text-white/70">Placeholder section.</p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold">Need help before booking?</h2>
          <p className="mt-2 max-w-2xl text-white/70">Placeholder CTA. Link to get-help page.</p>
          <div className="mt-4">
            <Link
              href="/get-help"
              className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Get help
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
