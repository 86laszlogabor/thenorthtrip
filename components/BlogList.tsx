import React from "react";
import { type BlogPost } from "@/lib/blog";
import { getPostsByPillar } from "@/lib/blogUtils";
import { PILLARS } from "@/lib/pillars";

type Props =
  | { posts: BlogPost[]; title?: string }
  | { pillar: BlogPost["pillar"]; limit?: number; title?: string };

function isPostsVariant(p: Props): p is { posts: BlogPost[]; title?: string } {
  return (p as any).posts !== undefined;
}

export default function BlogList(props: Props) {
  const title = props.title ?? "Latest guides";
  const posts = isPostsVariant(props)
    ? props.posts
    : getPostsByPillar(props.pillar, props.limit ?? 6);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-1 text-sm text-gray-400">
            {isPostsVariant(props) ? "Fresh posts across the site." : `From: ${PILLARS[props.pillar].title}`}
          </p>
        </div>

        <a className="text-sm text-gray-300 hover:text-white transition" href="/blog">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <a
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-white/10 bg-gray-900/40 p-5 hover:bg-gray-900/60 transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-gray-400">{p.publishedAt}</div>
              <div className="text-xs text-gray-400">
                {PILLARS[p.pillar]?.title ?? "Guide"}
              </div>
            </div>

            <div className="mt-3 text-white font-semibold leading-snug group-hover:text-white transition">
              {p.title}
            </div>

            <div className="mt-2 text-sm text-gray-300 leading-relaxed">
              {p.description}
            </div>

            {p.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-gray-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </a>
        ))}
      </div>
    </section>
  );
}
