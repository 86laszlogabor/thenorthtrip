import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blogContent";
import InlineCTA from "@/components/InlineCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

type Params = { slug: string };

function normalizeSlug(value: unknown) {
  const s = String(value ?? "")
    .trim()
    .replace(/^\/+/, "")        // leading /
    .replace(/^\/?blog\/+/, "") // blog/ or /blog/
    .replace(/\/+$/, "");       // trailing /
  return s;
}

export function generateStaticParams() {
  // Skip any broken entries so build doesn't crash
  return BLOG.map((p) => normalizeSlug((p as any)?.slug))
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
  const incoming = normalizeSlug(params.slug);
  if (!incoming) return notFound();

  // Find post by normalized slug, tolerant to bad data formats
  const post =
    BLOG.find((p) => normalizeSlug((p as any)?.slug) === incoming) ??
    BLOG.find((p) => normalizeSlug((p as any)?.path) === `/blog/${incoming}`) ??
    null;

  if (!post) return notFound();

  const postSlug = normalizeSlug((post as any)?.slug);
  if (!postSlug || postSlug === "undefined") return notFound();

  const blocks = (BLOG_CONTENT as any)?.[postSlug]?.blocks ?? [];

  const related = BLOG.filter((p) => (p as any)?.pillar === (post as any)?.pillar)
    .filter((p) => normalizeSlug((p as any)?.slug) !== incoming)
    .slice(0, 4);

  const pillar = String((post as any)?.pillar ?? "");
  const pillarLabel =
    pillar === "/car-rental-helsinki"
      ? "Car rental Helsinki"
      : pillar === "/camper-rental-finland"
      ? "Camper rental Finland"
      : "Lapland tours";

  // CTAs
  const primaryCtaHref = "/get-help";
  const primaryCtaLabel = "Ask before booking";
  const secondaryCtaHref = pillar || "/blog";
  const secondaryCtaLabel = "Read the full guide";

  // Insert inline CTA after 3 blocks (or after 1 if short)
  const insertAt = Math.min(3, Math.max(1, blocks.length));

  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {(post as any)?.publishedAt}
          </p>

          <h1 className="text-3xl font-semibold sm:text-5xl">{(post as any)?.title}</h1>

          <p className="text-white/70">{(post as any)?.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {((post as any)?.tags ?? []).map((tag: string) => (
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
            blocks.map((b: any, i: number) => {
              // inline CTA insertion
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
                    {(b.items ?? []).map((it: string) => (
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
              {related.map((p: any) => {
                const s = normalizeSlug(p?.slug);
                if (!s || s === "undefined") return null;
                return (
                  <Link
                    key={s}
                    href={`/blog/${s}`}
                    className="rounded-2xl border border-white/20 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p?.publishedAt}</p>
                    <p className="mt-2 font-semibold">{p?.title}</p>
                    <p className="mt-2 text-sm text-white/70">{p?.description}</p>
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
