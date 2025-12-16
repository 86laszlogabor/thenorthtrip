import Link from "next/link";
import { BLOG } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = [...BLOG].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Practical guides for Finland bookings: deposits, debit cards, winter add-ons, and Lapland comparisons.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>
                {p.draft ? (
                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    Draft
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm font-semibold text-orange-600">Open →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
