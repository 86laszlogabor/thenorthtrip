import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG } from "@/lib/blog";
import { BLOG_CONTENT } from "@/lib/blogContent";
import InlineCTA from "@/components/InlineCTA";
import StickyMobileCTA from "@/components/StickyMobileCTA";

// ⬅️ EZ A KULCS
export const dynamic = "force-dynamic";

type Params = { slug: string };

function toSlug(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^blog\/+/, "")
    .replace(/^\/?blog\/+/, "")
    .replace(/\/+$/, "");
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

  const post = BLOG.find((p) => toSlug(p.slug) === incoming);
  if (!post) return notFound();

  const blocks = BLOG_CONTENT[incoming]?.blocks ?? [];

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

  const insertAt = Math.min(3, Math.max(1, blocks.length));

  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            {post.publishedAt}
          </p>
          <h1 className="text-3xl font-semibold sm:text-5xl">{post.title}</h1>
          <p className="text-white/70">{post.description}</p>
        </header>

        <article className="mt-10 space-y-6 text-white/75 leading-relaxed">
          {blocks.map((b, i) => {
            if (i === insertAt) {
              return (
                <InlineCTA
                  key="inline-cta"
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
                <ul key={i} className="list-disc pl-6 space-y-2">
                  {b.items?.map((it: string) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            }

            return <Paragraph key={i} text={b.text ?? ""} />;
          })}
        </article>

        <section className="mt-10 rounded-2xl border border-white/20 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-2 text-sm text-white/70">
            Read the full guide:{" "}
            <Link href={secondaryCtaHref} className="underline">
              {pillarLabel}
            </Link>
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Related posts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${toSlug(p.slug)}`}
                  className="rounded-xl border border-white/20 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold">{p.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Link href="/blog" className="text-sm text-white/70">
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
