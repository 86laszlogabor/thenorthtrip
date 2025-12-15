import Link from "next/link";
import { BLOG } from "@/lib/blog";
import { toSlug } from "@/lib/blogUtils";

export default function RelatedPosts({ pillar, limit = 4 }: { pillar: string; limit?: number }) {
  const posts = BLOG.filter((p) => p.pillar === pillar).slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">Recommended posts</h2>
        <Link className="text-sm text-white/70 hover:text-white/90" href="/blog">
          View all →
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${toSlug(p.slug)}`}
            className="rounded-xl border border-white/15 bg-black/20 p-4 transition hover:bg-black/10"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
            <p className="mt-2 font-semibold text-white">{p.title}</p>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
