import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { BLOG } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/car-rental-helsinki`, lastModified: new Date() },
    { url: `${base}/camper-rental-finland`, lastModified: new Date() },
    { url: `${base}/lapland-tours`, lastModified: new Date() },
    { url: `${base}/offer-checklist`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...blogRoutes];
}
