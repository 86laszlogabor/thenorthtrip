// lib/blogUtils.ts
import { BLOG, type BlogPost } from "@/lib/blog";

export function getAllPosts(): BlogPost[] {
  return [...BLOG].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG.find((p) => p.slug === slug);
}

export function getPostsByPillar(pillar: BlogPost["pillar"], limit?: number): BlogPost[] {
  const posts = getAllPosts().filter((p) => p.pillar === pillar);
  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}

export function getRelatedPosts(post: BlogPost, limit = 6): BlogPost[] {
  const candidates = getAllPosts().filter((p) => p.pillar === post.pillar && p.slug !== post.slug);

  const scored = candidates
    .map((p) => {
      const overlap = p.tags.filter((t) => post.tags.includes(t)).length;
      return { post: p, score: overlap };
    })
    .sort((a, b) => (b.score !== a.score ? b.score - a.score : a.post.publishedAt < b.post.publishedAt ? 1 : -1))
    .map((x) => x.post);

  return scored.slice(0, limit);
}
