import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 md:p-16">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-blue-300">
            Finland rentals + Lapland tours
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            Get clear facts <br /> before you book
          </h1>
          <p className="mt-6 text-lg text-white/80">
            We focus on small-market, high-intent questions people actually
            have: deposit holds, debit card pickup rules, winter add-ons,
            and tour inclusions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/offer-checklist"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Open offer checklist
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition"
            >
              Ask before booking
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section>
        <h2 className="text-3xl font-bold mb-10">Start with the right topic</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <PillarCard
            title="Car rental Helsinki"
            description="Deposit holds, debit card acceptance, airport vs city pickup."
            href="/car-rental-helsinki"
            tag="High intent"
          />
          <PillarCard
            title="Camper rental Finland"
            description="Winter-ready campers, heating, mileage limits, hidden costs."
            href="/camper-rental-finland"
            tag="Seasonal ROI"
          />
          <PillarCard
            title="Lapland tours"
            description="Compare inclusions, group size traps, cancellation rules."
            href="/lapland-tours"
            tag="Tours"
          />
        </div>
      </section>

      {/* TRUST / POSITIONING */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <h3 className="text-2xl font-semibold">
          Built for people who hate surprises
        </h3>
        <p className="mt-4 max-w-2xl text-white/80">
          We don’t chase generic keywords. We document the boring details
          that cost money if you miss them: deposit timing, card rules,
          winter extras, and what tour listings conveniently forget to
          mention.
        </p>
      </section>
    </div>
  );
}

function PillarCard({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
    >
      <div className="mb-3 inline-block rounded-lg bg-blue-500/10 px-2 py-1 text-xs text-blue-300">
        {tag}
      </div>
      <h3 className="text-xl font-semibold group-hover:text-blue-300 transition">
        {title}
      </h3>
      <p className="mt-3 text-white/75">{description}</p>
      <div className="mt-6 text-sm text-blue-400">
        Explore → 
      </div>
    </Link>
  );
}
