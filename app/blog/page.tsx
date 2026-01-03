import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata = {
  title: "Blog | TheNorthTrip",
  description:
    "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
  openGraph: {
    title: "Blog | TheNorthTrip",
    description:
      "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
    images: ["/images/og/og-blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | TheNorthTrip",
    description:
      "Operational Finland travel guides: what breaks, how to verify it, and which tradeoffs reduce fragility. No fluffy listicles.",
    images: ["/images/og/og-blog.jpg"],
  },
};

type Post = {
  title: string;
  description: string;
  tag: string;
  href: string;
  verified: string;
  image: string;
};

const posts: Post[] = [
  {
    title: "Getting around Finland without a car: what actually works",
    description:
      "Where car-free travel works well, where it breaks, and which checks prevent “last service” failures.",
    tag: "Transport",
    href: "/getting-around-finland",
    verified: "2025-12-31",
    image: "/images/og/og-helsinki-city-mobility.jpg",
  },
  {
    title: "Offer checklist: what to verify before you pay",
    description:
      "A compact set of checks that catch the usual desk-level surprises: deposits, timing, winter, and strict rules.",
    tag: "Checklist",
    href: "/offer-checklist",
    verified: "2025-12-31",
    image: "/images/og/og-offer-checklist.jpg",
  },
  {
    title: "Rental terms & prices: what to compare (without guessing numbers)",
    description:
      "What actually matters when comparing rentals: deposits, exclusions, cancellation, pickup/return constraints, and winter clauses.",
    tag: "Rentals",
    href: "/rental-terms-prices",
    verified: "2025-12-31",
    image: "/images/og/og-default.jpg",
  },
  {
    title: "Policy: how this site verifies and why we don’t promise outcomes",
    description:
      "Affiliate disclosure, update method, and why we avoid invented facts in travel-finance and policy topics.",
    tag: "Policy",
    href: "/policy",
    verified: "2025-12-31",
    image: "/images/og/og-policy.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <PageHero
        variant="home"
        title="Blog: operational guides, not cute lists."
        subtitle="What breaks, how to verify it, and which tradeoffs reduce fragility."
        imageSrc="/images/hero/hero-blog-planning.jpg"
        primaryCta={{ href: "/offer-checklist", label: "Open offer checklist" }}
        secondaryCta={{ href: "/car-rental-helsinki", label: "Open car rental hub" }}
      />

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Blog</h2>
        <p className="mt-3 max-w-3xl text-sm text-brand-text/70">
          These are not “top 10 cute things” posts. They’re operational guides: what breaks, how to verify it,
          and which tradeoffs reduce fragility.
        </p>

        <div className="mt-8 grid gap-4 md:gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Card
              key={p.title}
              className="flex flex-col"
              image={p.image}
              title={p.title}
              description={`${p.description}  Last verified: ${p.verified}.`}
              ctaLabel="Read →"
              ctaHref={p.href}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Core hubs</h3>
          <p className="mt-2 text-sm text-slate-700">
            If you’re booking rentals or tours, start from the conversion hubs, then use the blog to verify edge-cases.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link className="underline hover:text-slate-900" href="/car-rental-helsinki">
              Car rental (Helsinki)
            </Link>
            <Link className="underline hover:text-slate-900" href="/camper-rental-finland">
              Camper rental (Finland)
            </Link>
            <Link className="underline hover:text-slate-900" href="/lapland-tours">
              Lapland tours
            </Link>
            <Link className="underline hover:text-slate-900" href="/offer-checklist">
              Offer checklist
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-brand-text/60">Last verified: 2025-12-31</p>
      </Section>
    </div>
  );
}
