import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog | TheNorthTrip",
  description:
    "Decision-first Finland travel articles. Practical mistakes, tradeoffs, and checks worth doing before booking.",
};

type Post = {
  title: string;
  description: string;
  tag: string;
  href: string;
  verified: string;
};

const posts: Post[] = [
  {
    title: "Getting around Finland without a car: what actually works",
    description:
      "Where car-free travel works well, where it breaks, and which checks prevent â€œlast serviceâ€ failures.",
    tag: "Transport",
    href: "/getting-around-finland",
    verified: "2025-12-31",
  },
  {
    title: "Offer checklist: what to verify before you pay",
    description:
      "A compact set of checks that catch the usual desk-level surprises: deposits, timing, winter, and strict rules.",
    tag: "Checklist",
    href: "/offer-checklist",
    verified: "2025-12-31",
  },
  {
    title: "Rental terms & prices: what to compare (without guessing numbers)",
    description:
      "What actually matters when comparing rentals: deposits, exclusions, cancellation, pickup/return constraints, and winter clauses.",
    tag: "Rentals",
    href: "/rental-terms-prices",
    verified: "2025-12-31",
  },
  {
    title: "Policy: how this site verifies and why we donâ€™t promise outcomes",
    description:
      "Affiliate disclosure, update method, and why we avoid invented facts in travel-finance and policy topics.",
    tag: "Policy",
    href: "/policy",
    verified: "2025-12-31",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <PageHero
        title="Decision-first guide"
        subtitle="Practical tradeoffs, what to confirm, and the safest next step."
        imageSrc="/images/hero/hero-default.jpg"
      /><header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            TheNorthTrip
          </Link>
          <nav className="flex gap-4 text-sm text-slate-700">
            <Link href="/offer-checklist" className="hover:text-slate-900">
              Offer checklist
            </Link>
            <Link href="/getting-around-finland" className="hover:text-slate-900">
              Getting around
            </Link>
            <Link href="/get-help" className="hover:text-slate-900">
              Get help
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          These are not â€œtop 10 cute thingsâ€ posts. Theyâ€™re operational guides:
          what breaks, how to verify it, and which tradeoffs reduce fragility.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium rounded-full bg-slate-100 px-2 py-1">
                  {p.tag}
                </span>
                <span className="text-xs text-slate-500">
                  Last verified: {p.verified}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{p.description}</p>
              <div className="mt-4">
                <Link
                  href={p.href}
                  className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="font-semibold">Core hubs</h3>
          <p className="mt-2 text-sm text-slate-700">
            If youâ€™re booking rentals or tours, start from the conversion hubs,
            then use the blog to verify edge-cases.
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
      </section>
    </main>
  );
}


