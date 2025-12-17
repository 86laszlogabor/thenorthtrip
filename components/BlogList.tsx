// components/BlogList.tsx
import type { BlogPost } from "@/lib/blog";
import { getPostsByPillar } from "@/lib/blogUtils";
import { PILLARS } from "@/lib/pillars";
import Link from "next/link";

type Props =
  | { posts: BlogPost[]; title?: string }
  | { pillar: BlogPost["pillar"]; limit?: number; title?: string };

function isPostsVariant(p: Props): p is { posts: BlogPost[]; title?: string } {
  return "posts" in p;
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
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600">
            {isPostsVariant(props) ? "Fresh posts across the site." : `From: ${PILLARS[props.pillar].title}`}
          </p>
        </div>

        <Link className="text-sm text-slate-700 hover:text-slate-900 transition" href="/blog">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 hover:bg-slate-50 transition"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-slate-500">{p.publishedAt}</div>
              <div className="text-xs text-slate-500">{PILLARS[p.pillar]?.title ?? "Guide"}</div>
            </div>

            <div className="mt-3 text-slate-900 font-semibold leading-snug group-hover:text-slate-900 transition">
              {p.title}
            </div>

            <div className="mt-2 text-sm text-slate-700 leading-relaxed">
              {p.description}
            </div>

            {p.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
