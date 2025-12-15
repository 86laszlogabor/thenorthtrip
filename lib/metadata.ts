// lib/metadata.ts
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

type MetaInput = {
  title: string;
  description: string;
  path: `/${string}`; // pl. "/car-rental-helsinki"
  image?: string;     // pl. "/opengraph-image"
};

export function buildMetadata({ title, description, path, image }: MetaInput): Metadata {
  const url = new URL(path, SITE.url);
  const ogImage = image ? new URL(image, SITE.url) : new URL("/opengraph-image", SITE.url);

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    alternates: {
      canonical: url.toString(),
    },
    openGraph: {
      title,
      description,
      url: url.toString(),
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: ogImage.toString() }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.toString()],
    },
  };
}
