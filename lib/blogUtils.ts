import { BLOG, type BlogPost } from "@/lib/blog";

export function getAllPosts(): BlogPost[] {
  return [...BLOG].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostsByPillar(pillar: BlogPost["pillar"], limit = 6): BlogPost[] {
  return getAllPosts().filter((p) => p.pillar === pillar).slice(0, limit);
}
