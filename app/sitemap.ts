import { blogSlugList } from "@/lib/blogUtils";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const base = SITE.url.replace(/\/+$/, "");

  const staticRoutes = [
    "/",
    "/blog",
    "/get-help",
    "/car-rental-helsinki",
    "/camper-rental-finland",
    "/lapland-tours",
    "/privacy",
    "/terms",
    "/affiliate-disclosure",
  ];

  const blogRoutes = blogSlugList().map((slug) => `/blog/${slug}`);

  const all = [...staticRoutes, ...blogRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
