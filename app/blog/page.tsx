import React from "react";
import type { Metadata } from "next";
import { BLOG, type BlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/metadata";
import { PILLARS, isPillarPath } from "@/lib/pillars";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Guides for Finland travel planning: rentals, campervans, and Lapland tours.",
  path: "/blog",
});

function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export default function BlogPage({ searchParams }: { searchParams: { pillar?: string } }) {
  const pillarParam = searchParams?.pillar ?? null;
  const activePillar = isPillarPath(pillarParam) ? pillarParam : null;

  const posts = sortPosts(BLOG).filter((p) => (activePillar ? p.pillar === activePillar : true));

  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
      <div className="rounded-3xl border border-white/10 bg-gray-900/30 p-7 md:p-9">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Blog</h1>
        <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl">
          Practical guides. Minimal marketing. Maximum “don’t get surprised at pickup”.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href="/blog"
            className={`rounded-full px-4 py-2 text-sm border transition ${
              !activePillar
                ? "bg-white/10 border-white/20 text-white"
                : "bg-gray-900/40 border-white/10 text-gray-200 hover:bg-gray-900/60"
            }`}
          >
            All
          </a>

          {Object.entries(PILLARS).map(([href, cfg]) => {
            const isActive = activePillar === href;
            return (
              <a
                key={href}
                href={`/blog?pillar=${encodeURIComponent(href)}`}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  isActive
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-gray-900/40 border-white/10 text-gray-200 hover:bg-gray-900/60"
                }`}
              >
                {cfg.title}
              </a>
            );
          })}
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-white/10 bg-gray-900/30 p-8 text-center">
          <div className="text-white font-semibold">No posts yet for this pillar</div>
          <p className="mt-2 text-gray-300">Add a few posts in <code className="bg-white/10 px-2 py-1 rounded">lib/blog.ts</code>.</p>
          <div className="mt-5">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
            >
              Show all posts
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-gray-400">{p.publishedAt}</div>
                <div className="text-xs text-gray-400">{PILLARS[p.pillar]?.title ?? p.pillar}</div>
              </div>

              <div className="mt-3 text-white font-semibold leading-snug">{p.title}</div>
              <div className="mt-2 text-sm text-gray-300 leading-relaxed">{p.description}</div>

              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-200/80">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
