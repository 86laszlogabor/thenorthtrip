import type { Metadata } from "next";
import { SITE } from "./site";

export function absoluteUrl(path: string) {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function baseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    applicationName: SITE.name,
    title: {
      default: "thenorthtrip | Finland rentals & Lapland tours without surprises",
      template: "%s | thenorthtrip",
    },
    description:
      "Helsinki car rental (deposit & credit card reality), camper rental Finland (winter-ready costs), and Lapland tours with clear inclusions and cancellation terms.",
    alternates: { canonical: SITE.url },
    openGraph: {
      type: "website",
      url: SITE.url,
      siteName: SITE.name,
      title: "thenorthtrip",
      description:
        "Finland rentals & Lapland tours without the expensive surprises. Practical, local-first guides.",
    },
    twitter: {
      card: "summary_large_image",
      title: "thenorthtrip",
      description:
        "Finland rentals & Lapland tours without the expensive surprises. Practical, local-first guides.",
    },
  };
}

export function pageMetadata(args: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const { title, description, path, keywords } = args;
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}
