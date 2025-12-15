import React from "react";
import type { BlogPost } from "@/lib/blog";

export default function RelatedPosts({
  posts,
  title = "Related posts",
}: {
  posts: BlogPost[];
  title?: string;
}) {
  if (!posts?.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 mt-12">
      <h2 className="text-xl font-semibold text-white">{title}</h2>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-sm text-white/60">{p.publishedAt}</div>
            <div className="mt-2 text-white font-semibold">{p.title}</div>
            <div className="mt-2 text-white/75 text-sm leading-relaxed">{p.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
