import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://thenorthtrip.com";

  const routes = [
    "/",
    "/helsinki",
    "/car-rental-helsinki",
    "/camper-rental-finland",
    "/lapland-tours",
    "/blog",
    "/offer-checklist",
    "/get-help",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
