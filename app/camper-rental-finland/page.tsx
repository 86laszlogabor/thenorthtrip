import Link from "next/link";
import { BLOG } from "@/lib/blog";

export default function CamperRentalFinlandPage() {
  const posts = BLOG.filter((p) => p.pillar === "/camper-rental-finland");

  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">Camper rental in Finland</h1>
        <p className="max-w-2xl text-white/70">
          The practical guide to camper rentals in Finland: winter readiness, heating & power costs, mileage caps, and
          the hidden fees that turn “cheap” into expensive.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/get-help"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the blog
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6 space-y-3">
        <h2 className="text-2xl font-semibold">What we cover</h2>
        <ul className="list-disc space-y-2 pl-6 text-white/75">
          <li>Winter-ready: what it should mean, and what to verify</li>
          <li>Heating & power costs: the “unsexy” reality</li>
          <li>Mileage caps & overage fees: route planning without regret</li>
          <li>What to ask before booking (so you don’t find out at pickup)</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Guides you should read first</h2>
        {posts.length === 0 ? (
          <p className="text-white/70">No posts yet. Add entries in <code>lib/blog.ts</code>.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
                <p className="mt-2 text-lg font-semibold">{p.title}</p>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Need help before booking?</h2>
        <p className="mt-2 text-sm text-white/70">
          Send your camper offer. We’ll check winter readiness, heating/power assumptions, and mileage limits before you
          pay.
        </p>
        <Link
          href="/get-help"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Ask before booking
        </Link>
      </section>
    </main>
  );
}
