import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blogContent";
import InlineCTA from "@/components/InlineCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

type Params = { slug: string };

function toSlug(value: unknown) {
  // normalize:
  // "helsinki-deposit-hold"
  // "/helsinki-deposit-hold"
  // "blog/helsinki-deposit-hold"
  // "/blog/helsinki-deposit-hold"
  // "/blog/helsinki-deposit-hold/"
  // -> "helsinki-deposit-hold"
  return String(value ?? "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^blog\/+/, "")
    .replace(/^\/?blog\/+/, "")
    .replace(/\/+$/, "");
}

export function generateStaticParams() {
  // only use slug, because BlogPost type does not have `path`
  return BLOG.map((p) => toSlug(p.slug))
    .filter((slug) => slug.length > 0 && slug !== "undefined" && !slug.includes("/"))
    .map((slug) => ({ slug }));
}

function Paragraph({ text }: { text: string }) {
  const isInternal = text.startsWith("/");
  if (isInternal) {
    return (
      <p>
        <a href={text} className="underline decoration-white/30 hover:decoration-white/60">
          {text}
        </a>
      </p>
    );
  }
  return <p>{text}</p>;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const incoming = toSlug(params.slug);
  if (!incoming) return notFound();

  // Find the post by normalized slug
  const post = BLOG.find((p) => toSlug(p.slug) === incoming) ?? null;
  if (!post) return notFound();

  const postSlug = toSlug(post.slug);
  const blocks = BLOG_CONTENT[postSlug]?.blocks ?? [];

  const related = BLOG.filter((p) => p.pillar === post.pillar)
    .filter((p) => toSlug(p.slug) !== incoming)
    .slice(0, 4);

  const pillarLabel =
    post.pillar === "/car-rental-helsinki"
      ? "Car rental Helsinki"
      : post.pillar === "/camper-rental-finland"
      ? "Camper rental Finland"
      : "Lapland tours";

  const primaryCtaHref = "/get-help";
  const primaryCtaLabel = "Ask before booking";
  const secondaryCtaHref = post.pillar || "/blog";
  const secondaryCtaLabel = "Read the full guide";

  // Insert inline CTA after 3 blocks, or after 1 if short
  const insertAt = Math.min(3, Math.max(1, blocks.length));

  return (
    <>
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

        <article className="mt-10 space-y-6 text-white/75 leading-relaxed">
          {blocks.length === 0 ? (
            <p>
              Content missing for this post. Add blocks in{" "}
              <code className="text-white/90">lib/blogContent.ts</code>.
            </p>
          ) : (
            blocks.map((b, i) => {
              if (i === insertAt) {
                return (
                  <InlineCTA
                    key="inline-cta"
                    title="Quick check before you pay"
                    text="Send your offer (screenshot or summary). We’ll flag deposit traps, card requirements, winter add-ons, and tour inclusions."
                    primaryHref={primaryCtaHref}
                    primaryLabel={primaryCtaLabel}
                    secondaryHref={secondaryCtaHref}
                    secondaryLabel={secondaryCtaLabel}
                  />
                );
              }

              if (b.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl font-semibold text-white">
                    {b.text}
                  </h2>
                );
              }

              if (b.type === "ul") {
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6 text-white/75">
                    {(b.items ?? []).map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              }

              return <Paragraph key={i} text={b.text ?? ""} />;
            })
          )}
        </article>

        <section className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-white/70">
            Read the full guide:{" "}
            <Link className="text-white underline decoration-white/30 hover:decoration-white/60" href={secondaryCtaHref}>
              {pillarLabel}
            </Link>
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold">Related posts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((p) => {
                const s = toSlug(p.slug);
                if (!s) return null;
                return (
                  <Link
                    key={s}
                    href={`/blog/${s}`}
                    className="rounded-2xl border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
                    <p className="mt-2 font-semibold">{p.title}</p>
                    <p className="mt-2 text-sm text-white/70">{p.description}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link href="/blog" className="text-sm text-white/70 hover:text-white/90">
            ← Back to blog
          </Link>
        </div>
      </main>

      <StickyMobileCTA
        primaryHref={primaryCtaHref}
        primaryLabel={primaryCtaLabel}
        secondaryHref={secondaryCtaHref}
        secondaryLabel="Guide"
      />
    </>
  );
}
