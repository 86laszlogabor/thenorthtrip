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
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top tint to avoid harsh white */}
      <div className="bg-gradient-to-b from-slate-100 to-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              TheNorthTrip <span className="text-slate-400">•</span> Blog
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Blog</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Practical guides for Finland bookings: deposits, debit cards, winter add-ons, and Lapland comparisons.
            </p>
          </header>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:bg-slate-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  </div>

                  <div className="shrink-0 text-xs text-slate-500">{p.publishedAt}</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm font-semibold text-slate-900">
                  Open <span className="opacity-70">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
