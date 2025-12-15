import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BLOG } from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Finland rental traps and Lapland tour comparisons",
  description:
    "Small, high-intent articles: deposit holds, debit pickup rules, winter camper costs, and Lapland tour inclusions.",
  path: "/blog",
  keywords: ["finland car rental deposit blog", "lapland tour inclusions blog", "camper winter costs finland blog"],
});

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold sm:text-5xl">Blog</h1>
        <p className="max-w-2xl text-white/70">
          Long-tail articles that rank because they answer the boring details people actually google.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {BLOG.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/20 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
