import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import SEOJsonLd from "@/components/SEOJsonLd";

import { buildMetadata } from "@/lib/metadata";
import { getPostBySlug, getRelatedPosts } from "@/lib/blogUtils";
import { PILLARS } from "@/lib/pillars";
import { SITE } from "@/lib/site";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ title: "Not found", description: "Post not found.", path: "/blog" });

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const pillar = PILLARS[post.pillar];
  const related = getRelatedPosts(post, 6);

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: pillar.title, href: pillar.href },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <main className="mx-auto max-w-3xl px-4 pt-6 pb-16">
        <div className="text-sm text-white/60">{post.publishedAt}</div>

        <h1 className="mt-2 text-3xl font-bold text-white">{post.title}</h1>
        <p className="mt-4 text-white/80 leading-relaxed">{post.description}</p>

        {/* Content placeholder: safe, no MDX dependency */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80 leading-relaxed">
            This article currently renders from metadata only. If you want full long-form content rendering (MDX/HTML),
            we’ll wire it in next. For now: the internal linking, SEO, and navigation are live.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={pillar.href}
            className="rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 transition"
          >
            Back to {pillar.title}
          </a>

          <a
            href="/offer-checklist"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition"
          >
            Offer checklist
          </a>
        </div>

        {post.tags?.length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </main>

      <RelatedPosts posts={related} title="More from this pillar" />
      <SEOJsonLd />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </>
  );
}
