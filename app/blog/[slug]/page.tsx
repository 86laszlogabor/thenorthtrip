import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold sm:text-5xl">{post.title}</h1>
      <p className="mt-3 text-white/70">{post.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/blog" className="text-sm text-white/70 hover:text-white/90">
          ← Back to blog
        </Link>
      </div>
    </main>
  );
}
