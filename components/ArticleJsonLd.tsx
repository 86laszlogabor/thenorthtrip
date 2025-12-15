export default function ArticleJsonLd({
  url,
  title,
  description,
  datePublished,
}: {
  url: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
