import Link from "next/link";
import { BLOG } from "@/lib/blog";

const GROUPS = [
  { key: "/car-rental-helsinki", label: "Car rental Helsinki" },
  { key: "/camper-rental-finland", label: "Camper rental Finland" },
  { key: "/lapland-tours", label: "Lapland tours" },
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-14 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="max-w-2xl text-white/70">
          Short, practical articles about deposit holds, debit card pickup rules, winter add-ons, and tour inclusions.
        </p>
      </header>

      {GROUPS.map((g) => {
        const posts = BLOG.filter((p) => p.pillar === g.key);
        if (posts.length === 0) return null;

        return (
          <section key={g.key} className="space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-semibold">{g.label}</h2>
              <Link href={g.key} className="text-sm text-white/70 hover:text-white/90">
                View the full guide →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
