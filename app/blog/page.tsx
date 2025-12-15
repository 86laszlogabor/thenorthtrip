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

export default function BlogPage({
  searchParams,
}: {
  searchParams: { pillar?: string };
}) {
  const pillarParam = searchParams?.pillar ?? null;
  const activePillar = isPillarPath(pillarParam) ? pillarParam : null;

  const posts = sortPosts(BLOG).filter((p) => (activePillar ? p.pillar === activePillar : true));

  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <p className="mt-3 text-white/80">
        Practical guides. Minimal marketing. Maximum “don’t get surprised at pickup”.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="/blog"
          className={`rounded-xl px-4 py-2 border transition ${
            !activePillar ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
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
              className={`rounded-xl px-4 py-2 border transition ${
                isActive ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
              }`}
            >
              {cfg.title}
            </a>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-sm text-white/60">{p.publishedAt}</div>
            <div className="mt-2 text-white font-semibold">{p.title}</div>
            <div className="mt-2 text-white/75 text-sm leading-relaxed">{p.description}</div>

            <div className="mt-4 text-xs text-white/60">
              Pillar: <span className="text-white/80">{PILLARS[p.pillar]?.title ?? p.pillar}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
