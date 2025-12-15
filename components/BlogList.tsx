import React from "react";
import { type BlogPost } from "@/lib/blog";
import { getPostsByPillar } from "@/lib/blogUtils";

type Props =
  | {
      posts: BlogPost[];
      title?: string;
    }
  | {
      pillar: BlogPost["pillar"];
      limit?: number;
      title?: string;
    };

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
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <a className="text-white/70 hover:text-white transition" href="/blog">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
