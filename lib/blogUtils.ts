import { BLOG } from "@/lib/blog";

export function toSlug(value: unknown) {
  return String(value ?? "")
    .trim()
    .replace(/^\/+/, "")
    .replace(/^blog\/+/, "")
    .replace(/^\/?blog\/+/, "")
    .replace(/\/+$/, "");
}

export function blogSlugList() {
  return BLOG.map((p) => toSlug((p as any).slug))
    .filter((s) => s && s !== "undefined" && !s.includes("/"));
}

export function blogBySlug(slug: string) {
  const s = toSlug(slug);
  return BLOG.find((p) => toSlug((p as any).slug) === s) ?? null;
}
