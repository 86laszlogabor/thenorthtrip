import PageHero from "@/components/PageHero";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | TheNorthTrip",
  description:
    "Practical Finland travel guides: what breaks, what to verify, and how to choose options that don’t collapse in winter.",
  openGraph: {
    title: "Blog | TheNorthTrip",
    description:
      "Practical Finland travel guides: what breaks, what to verify, and how to choose options that don’t collapse in winter.",
    images: ["/images/og/og-blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | TheNorthTrip",
    description:
      "Practical Finland travel guides: what breaks, what to verify, and how to choose options that don’t collapse in winter.",
    images: ["/images/og/og-blog.jpg"],
  },
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Blog: practical guides, not cute lists."
        subtitle="What breaks, what to verify, and which tradeoffs keep your plan alive in winter."
        imageSrc="/images/hero/hero-blog-planning.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Car rental Helsinki" }}
      />
      <BlogClient />
    </div>
  );
}
