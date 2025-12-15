// app/page.tsx
import Image from "next/image";
import Link from "next/link";

function CTAButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500"
      : "bg-slate-900/5 text-slate-900 hover:bg-slate-900/10 border border-slate-200 focus:ring-slate-300";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function FeatureCard({
  title,
  desc,
  href,
  badge,
}: {
  title: string;
  desc: string;
  href: string;
  badge?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font800 text-slate-900 font-extrabold">{title}</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-full bg-orange-500/10 text-orange-700 border border-orange-500/20 px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-5">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-900/10 border border-slate-200 transition"
        >
          Read the guide <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Hero image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-orange-500/10" />
              <Image
                src="/images/hero-lapland.jpg" // tegyél be egy képet ide
                alt="Lapland winter road"
                width={1400}
                height={1000}
                className="h-[320px] w-full object-cover sm:h-[420px]"
                priority
              />
            </div>
          </div>

          {/* Right: Copy + CTAs + Cards */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700">
              Finland rentals <span className="text-slate-400">•</span> Lapland tours
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Get clear facts before you book.
            </h1>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Small-market, high-intent answers people actually need: deposit holds, debit card pickup rules,
              winter add-ons, and tour inclusions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="/car-rental-helsinki" variant="primary">
                Compare car rental costs
              </CTAButton>
              <CTAButton href="/get-help" variant="secondary">
                Ask before booking
              </CTAButton>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureCard
                title="Car rental: deposit + pickup rules"
                desc="Airport vs city pickup, deposit holds, and card requirements in plain English."
                href="/car-rental-helsinki"
              />
              <FeatureCard
                title="Tours: compare inclusions safely"
                desc="Small group vs big bus, cancellations, and what listings tend to “forget”."
                href="/lapland-tours"
                badge="Popular"
              />
            </div>
          </div>
        </div>

        {/* Top destinations */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-8 shadow-sm">
          <h2 className="text-xl font-extrabold text-slate-900">Top destinations</h2>
          <div className="mt-6 flex flex-wrap gap-6">
            {[
              { name: "Rovaniemi", img: "/images/dest-rovaniemi.jpg" },
              { name: "Levi", img: "/images/dest-levi.jpg" },
              { name: "Ylläs", img: "/images/dest-yllas.jpg" },
            ].map((d) => (
              <div key={d.name} className="flex flex-col items-center gap-2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-orange-500/70 shadow-sm">
                  <Image src={d.img} alt={d.name} fill className="object-cover" />
                </div>
                <div className="text-sm font-semibold text-slate-800">{d.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButton href="/offer-checklist" variant="primary">
              Ready to explore? Find deals
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
