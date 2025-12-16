// app/blog/page.tsx
import Link from "next/link";
import { BLOG } from "@/lib/blog";

export const metadata = {
  title: "Blog | TheNorthTrip",
  description:
    "Practical guides for Finland bookings: deposits, debit cards, winter add-ons, and Lapland comparisons.",
};

export default function BlogIndexPage() {
  const posts = [...BLOG].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Blog</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Practical guides for Finland bookings: deposits, debit cards, winter add-ons, and Lapland
            comparisons.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-white group-hover:text-white">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>
                </div>

                <div className="shrink-0 text-xs text-white/50">{p.publishedAt}</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-sm font-semibold text-orange-400">
                Open <span className="opacity-70">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
