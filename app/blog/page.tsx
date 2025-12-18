// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | TheNorthTrip",
  description: "Practical Finland & Lapland travel guides: costs, logistics, and decision tools.",
  alternates: { canonical: "/blog" },
};

type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  pillar?: string;
};

const POSTS: Post[] = [
  {
    slug: "helsinki-airport-credit-card-deposit-hold",
    title: "Helsinki Airport car rental: credit card deposit hold (what actually happens)",
    description: "How deposit holds work, why ‘paid online’ still blocks money, and what to check before pickup.",
    publishedAt: "2025-12-15",
    pillar: "Car rental",
  },
  {
    slug: "finland-car-rental-debit-card-when-it-fails",
    title: "Finland car rental with a debit card: when it works and when you get refused",
    description: "Why some desks refuse debit cards, what patterns predict refusal, and how to reduce risk.",
    publishedAt: "2025-12-15",
    pillar: "Car rental",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO */}
      <section className="relative isolate">
        <div className="relative h-[54vh] min-h-[420px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Lapland night sky"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/20 backdrop-blur">
                  Blog
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Practical guides.
                  <span className="block text-white/85">Less guessing, fewer surprises.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Rövid, használható cikkek: feltételek, költség-logika, döntési pontok.
                  Nem regény, nem álomkodás.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-10 pb-16">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10">
              <div className="mx-auto max-w-3xl">
                <p className="text-xs font-semibold tracking-wide text-slate-500">
                  Latest posts
                </p>

                <div className="mt-6 grid gap-6">
                  {POSTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:bg-slate-100"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                        <span className="font-semibold">{p.pillar ?? "Guide"}</span>
                        <span className="text-slate-400">•</span>
                        <span>{p.publishedAt}</span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                        {p.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-slate-700">
                        {p.description}
                      </p>

                      <div className="mt-4 text-sm font-semibold text-slate-900">
                        Read → 
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Want the fast “don’t mess this up” version?
                  </h3>
                  <p className="mt-2 text-slate-700">
                    Start with the checklist. It turns random offers into comparable decisions.
                  </p>
                  <div className="mt-4">
                    <Link
                      href="/offer-checklist"
                      className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                    >
                      Open free checklist
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 bg-slate-950" />
    </main>
  );
}

