import { SITE } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ArticleJsonLd(props: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.headline,
    description: props.description,
    mainEntityOfPage: props.url,
    datePublished: props.datePublished,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
