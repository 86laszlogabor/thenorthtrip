import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const related = BLOG.filter((p) => p.pillar === post.pillar && p.slug !== post.slug).slice(0, 4);

  const pillarLabel =
    post.pillar === "/car-rental-helsinki"
      ? "Car rental Helsinki"
      : post.pillar === "/camper-rental-finland"
      ? "Camper rental Finland"
      : "Lapland tours";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{post.publishedAt}</p>

        <h1 className="text-3xl font-semibold sm:text-5xl">{post.title}</h1>

        <p className="text-white/70">{post.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="mt-10 space-y-4 text-white/75">
        <p>
          Placeholder body. Next step: write 700–1,000 words targeting the exact long-tail intent in the title and
          include a short checklist.
        </p>
        <p>
          If you want a fast win: answer “what is the rule?”, “what do I show at pickup?”, “what gets blocked?”, and
          “what are the 3 red flags?”.
        </p>
      </article>

      <section className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6">
        <h2 className="text-lg font-semibold">Next step</h2>
        <p className="mt-2 text-sm text-white/70">
          Read the full guide:{" "}
          <Link className="text-white underline decoration-white/30 hover:decoration-white/60" href={post.pillar}>
            {pillarLabel}
          </Link>
        </p>
      </section>

      {related.length > 0 && (
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold">Related posts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
                <p className="mt-2 font-semibold">{p.title}</p>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <Link href="/blog" className="text-sm text-white/70 hover:text-white/90">
          ← Back to blog
        </Link>
      </div>
    </main>
  );
}
