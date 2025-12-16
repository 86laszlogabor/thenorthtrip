// app/blog/[slug]/page.tsx
import { BLOG } from "@/lib/blog";
import { CONTENT } from "./content";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const blogSlugs = BLOG.map((p) => p.slug);
  const hasBlogPost = blogSlugs.includes(slug);

  const contentKeys = Object.keys(CONTENT);
  const hasContent = Object.prototype.hasOwnProperty.call(CONTENT, slug);

  const post = BLOG.find((p) => p.slug === slug);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-2xl font-extrabold">Blog debug</h1>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
          <pre className="whitespace-pre-wrap break-words">
{JSON.stringify(
  {
    slug,
    hasBlogPost,
    hasContent,
    blogCount: BLOG.length,
    contentCount: contentKeys.length,
    firstBlogSlug: blogSlugs[0] ?? null,
    firstContentKey: contentKeys[0] ?? null,
    matchedPostTitle: post?.title ?? null,
  },
  null,
  2
)}
          </pre>
        </div>

        <div className="mt-8 prose prose-invert max-w-none">
          {hasContent ? CONTENT[slug] : <p>NO CONTENT FOR THIS SLUG</p>}
        </div>
      </div>
    </main>
  );
}
