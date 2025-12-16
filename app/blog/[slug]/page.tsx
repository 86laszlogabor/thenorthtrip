// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";
import { CONTENT } from "./content";

import BlogProse from "@/components/BlogProse";
import BackToBlog from "@/components/BackToBlog";
import BlogCTA from "@/components/BlogCTA";

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const post = BLOG.find((p) => p.slug === slug);

  if (!slug || !post) return notFound();

  const body = (CONTENT as any)[slug] ?? null;

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <div className="mb-6">
            <BackToBlog />
          </div>

          <p className="text-sm text-white/50">{post.publishedAt}</p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-lg text-white/70">{post.description}</p>

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

        <BlogProse>{body}</BlogProse>

        <BlogCTA pillar={post.pillar} />

        <footer className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          Affiliate disclosure: Some links on this site may be sponsored. We focus on practical decision guidance first.
        </footer>
      </article>
    </main>
  );
}
