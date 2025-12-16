// app/blog/[slug]/page.tsx
import { BLOG } from "@/lib/blog";
import { notFound } from "next/navigation";
import { CONTENT } from "./content";

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG.find((p) => p.slug === params.slug);

  // ha a slug nincs a blog listában → valódi 404
  if (!post) return notFound();

  // ha van blog entry, de még nincs kész content → fallback, NEM 404
  const body =
    CONTENT[post.slug] ?? (
      <>
        <h2>Article in progress</h2>
        <p>
          This guide is currently being prepared. We publish practical,
          decision-focused content — not filler — so some articles go live in
          stages.
        </p>
        <p>
          In the meantime, check the related pillar page for the essentials.
        </p>
      </>
    );

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        {/* HEADER */}
        <header>
          <p className="text-sm text-white/50">{post.publishedAt}</p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-lg text-white/70">
            {post.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* CONTENT */}
        <div className="mt-8 prose prose-invert max-w-none">
          {body}
        </div>

        {/* FOOTER */}
        <footer className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          Affiliate disclosure: Some links on this site may be sponsored. We focus
          on practical decision guidance first.
        </footer>
      </article>
    </main>
  );
}
