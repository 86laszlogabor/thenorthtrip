import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-slate-50">
      <article className="mx-auto max-w-3xl px-6 py-14">
        <div className="mb-6">
          <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900">{post.title}</h1>
        <p className="mt-3 text-slate-600">{post.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Draft in progress</h2>
          <p className="mt-2 text-sm text-slate-600">
            This article is being written. Meanwhile, use the relevant guide below.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href={post.pillar}
              className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Go to the main guide
            </Link>
            <Link
              href="/get-help"
              className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Ask before booking
            </Link>
          </div>
        </div>

        <section className="mt-10 space-y-4 text-sm text-slate-600">
          <p>
            <b className="text-slate-900">Note:</b> Tomorrow we’ll plug in partners and comparison links. For now, the
            structure is live and internally linked for SEO.
          </p>
        </section>
      </article>
    </main>
  );
}
