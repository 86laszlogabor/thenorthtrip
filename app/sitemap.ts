import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/car-rental-helsinki",
    "/camper-rental-finland",
    "/lapland-tours",
    "/get-help",
    "/blog",
    "/privacy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const blogRoutes = BLOG.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
