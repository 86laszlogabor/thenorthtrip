import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blogContent";

export const dynamic = "force-dynamic";

type Params = { slug: string };

function toSlug(v: unknown): string {
  return String(v ?? "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^blog\/+/, "")
    .replace(/\/+$/, "");
}

export default function BlogPostPage({ params }: { params: Params }) {
  const incoming = toSlug(params.slug);
  if (!incoming) return notFound();

  const posts = BLOG as any[];
  const idx = posts.findIndex((p) => toSlug(p?.slug) === incoming);
  if (idx === -1) return notFound();

  const post = posts[idx] as any;
  const blocks = ((BLOG_CONTENT as any)?.[incoming]?.blocks ?? []) as any[];

  const prev = posts[idx - 1] ?? null;
  const next = posts[idx + 1] ?? null;

  const related = posts
    .filter((p) => p?.pillar === post?.pillar && toSlug(p?.slug) !== incoming)
    .slice(0, 4);

  const pillarLabel =
    post?.pillar === "/car-rental-helsinki"
      ? "Car rental Helsinki"
      : post?.pillar === "/camper-rental-finland"
      ? "Camper rental Finland"
      : "Lapland tours";

  const secondaryCtaHref = post?.pillar || "/blog";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-6 text-xs text-white/60">
        <Link href="/" className="hover:text-white/80">Home</Link>
        <span className="px-2 text-white/40">/</span>
        <Link href="/blog" className="hover:text-white/80">Blog</Link>
      </nav>

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{post?.publishedAt}</p>
        <h1 className="text-3xl font-semibold text-white sm:text-5xl">{post?.title}</h1>
        <p className="text-white/70">{post?.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {(post?.tags ?? []).map((tag: string) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Inline CTA (simple, no custom components) */}
      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">Need help before booking?</h2>
        <p className="mt-2 text-sm text-white/70">
          Send your offer (screenshot or summary). We’ll flag deposit traps, card requirements, and winter add-ons.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            href="/get-help"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Ask before booking
          </Link>
          <Link
            href={secondaryCtaHref}
            className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Read the full guide
          </Link>
        </div>
      </section>

      <article className="mt-10 space-y-6 text-white/75 leading-relaxed">
        {blocks.length === 0 ? (
          <p>
            Missing content for this post. Add blocks in{" "}
            <code className="text-white/90">lib/blogContent.ts</code>.
          </p>
        ) : (
          blocks.map((b: any, i: number) => {
            if (b?.type === "h2") {
              return (
                <h2 key={i} className="text-2xl font-semibold text-white">
                  {b.text}
                </h2>
              );
            }
            if (b?.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {(b.items ?? []).map((it: string) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            }
            const t = String(b?.text ?? "");
            if (t.startsWith("/")) {
              return (
                <p key={i}>
                  <a href={t} className="underline decoration-white/30 hover:decoration-white/60">
                    {t}
                  </a>
                </p>
              );
            }
            return <p key={i}>{t}</p>;
          })
        )}
      </article>

      <section className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">Next step</h2>
        <p className="mt-2 text-sm text-white/70">
          Read the full guide:{" "}
          <Link className="underline decoration-white/30 hover:decoration-white/60" href={secondaryCtaHref}>
            {pillarLabel}
          </Link>
        </p>
      </section>

      {(prev || next) && (
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link href={`/blog/${toSlug(prev?.slug)}`} className="rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10">
              <p className="text-xs text-white/60">Previous</p>
              <p className="mt-2 font-semibold text-white">{prev?.title}</p>
            </Link>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 opacity-50">
              <p className="text-xs text-white/60">Previous</p>
              <p className="mt-2 text-sm text-white/70">None</p>
            </div>
          )}

          {next ? (
            <Link href={`/blog/${toSlug(next?.slug)}`} className="rounded-2xl border border-white/15 bg-white/5 p-5 hover:bg-white/10">
              <p className="text-xs text-white/60">Next</p>
              <p className="mt-2 font-semibold text-white">{next?.title}</p>
            </Link>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 opacity-50">
              <p className="text-xs text-white/60">Next</p>
              <p className="mt-2 text-sm text-white/70">None</p>
            </div>
          )}
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-white">Related posts</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((p: any) => (
              <Link
                key={p.slug}
                href={`/blog/${toSlug(p.slug)}`}
                className="rounded-xl border border-white/20 bg-white/5 p-4 hover:bg-white/10"
              >
                <p className="font-semibold text-white">{p.title}</p>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
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
