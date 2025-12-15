import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BLOG } from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog: deposits, debit card rules, winter costs, Lapland tour inclusions",
  description:
    "Small, high-intent articles: deposit holds, debit pickup rules, winter add-ons, camper winter readiness, and Lapland tour inclusions.",
  path: "/blog",
  keywords: [
    "helsinki car rental deposit hold blog",
    "finland car rental debit card blog",
    "winter camper costs finland blog",
    "lapland tour inclusions blog",
  ],
});

function groupLabel(pillar: string) {
  if (pillar === "/car-rental-helsinki") return "Car rental Helsinki";
  if (pillar === "/camper-rental-finland") return "Camper rental Finland";
  return "Lapland tours";
}

export default function BlogIndex() {
  const groups = ["/car-rental-helsinki", "/camper-rental-finland", "/lapland-tours"] as const;

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold sm:text-5xl">Blog</h1>
        <p className="max-w-2xl text-white/70">
          Long-tail articles that rank because they answer the boring details people actually search before paying.
        </p>
      </header>

      {groups.map((pillar) => {
        const posts = BLOG.filter((p) => p.pillar === pillar);
        if (posts.length === 0) return null;

        return (
          <section key={pillar} className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-xl font-semibold">{groupLabel(pillar)}</h2>
              <Link href={pillar} className="text-sm text-white/70 hover:text-white/90">
                View the full guide →
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="rounded-2xl border border-white/20 bg-white/5 p-6 transition hover:bg-white/10"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
                  <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
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
