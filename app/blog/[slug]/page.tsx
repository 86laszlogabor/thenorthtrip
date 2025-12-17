// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { BLOG } from "@/lib/blog";
import { CONTENT } from "./content";

import BlogProse from "@/components/BlogProse";
import BackToBlog from "@/components/BackToBlog";
import BlogCTA from "@/components/BlogCTA";

type Pillar = "/car-rental-helsinki" | "/camper-rental-finland" | "/lapland-tours";

type PageProps = {
  params: { slug: string };
};

function getCtaForPillar(pillar: Pillar) {
  if (pillar === "/car-rental-helsinki") {
    return {
      title: "Ready to book without surprises?",
      description:
        "Use our Helsinki car rental guide to compare options and avoid the common traps people only discover at pickup.",
      primary: { href: "/car-rental-helsinki", label: "See car rental options" },
      secondary: { href: "/offer-checklist", label: "Free booking checklist" },
    };
  }

  if (pillar === "/camper-rental-finland") {
    return {
      title: "Planning a camper trip in Finland?",
      description:
        "Compare camper rental platforms and understand winter constraints before you commit to a route.",
      primary: { href: "/camper-rental-finland", label: "Compare camper rentals" },
      secondary: { href: "/offer-checklist", label: "Free booking checklist" },
    };
  }

  return {
    title: "Want Lapland tours without hidden extras?",
    description:
      "Use our Lapland tours guide to compare what’s included, what’s extra, and how to avoid classic upsells.",
    primary: { href: "/lapland-tours", label: "Explore Lapland tours" },
    secondary: { href: "/offer-checklist", label: "Free booking checklist" },
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = BLOG.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found | TheNorthTrip" };

  return {
    title: `${post.title} | TheNorthTrip`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const slug = params.slug;

  const post = BLOG.find((p) => p.slug === slug);
  const body = CONTENT[slug] ?? null;

  if (!post || !body) {
    return (
      <main className="min-h-screen bg-white text-slate-900">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <h1 className="text-2xl font-extrabold">Post not found</h1>
          <p className="mt-2 text-slate-600">
            The post you are looking for does not exist (or the slug list is out of sync).
          </p>
          <div className="mt-6">
            <BackToBlog />
          </div>
        </div>
      </main>
    );
  }

  const cta = getCtaForPillar(post.pillar as Pillar);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <div className="mb-6">
            <BackToBlog />
          </div>

          <p className="text-sm text-slate-500">{post.publishedAt}</p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-lg text-slate-700">{post.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10">
          <BlogProse>{body}</BlogProse>
        </div>

        <BlogCTA
          title={cta.title}
          description={cta.description}
          primary={cta.primary}
          secondary={cta.secondary}
        />

        <footer className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          Affiliate disclosure: Some links on this site may be sponsored. We focus on practical decision guidance first.
        </footer>
      </article>
    </main>
  );
}
