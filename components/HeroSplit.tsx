import Link from "next/link";

function MediaCard(props: {
  tag: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-sm">
      <div className="absolute inset-0 opacity-70">
        <div className="h-full w-full bg-gradient-to-br from-blue-600/20 via-transparent to-white/5" />
      </div>

      <div className="relative grid min-h-[260px] grid-cols-1 gap-0 md:grid-cols-2">
        <div className="p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{props.tag}</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight">{props.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{props.text}</p>

          <div className="mt-5">
            <Link
              href={props.ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              {props.ctaLabel}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_55%)]" />
          <div className="absolute bottom-4 right-4 rounded-xl border border-white/15 bg-gray-950/60 px-3 py-2 text-xs text-white/80 backdrop-blur">
            Image placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSplit() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Finland rentals + Lapland tours
          </p>
          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Get clear facts before you book.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            thenorthtrip focuses on small-market, high-intent questions people actually have:
            deposit holds, debit card pickup rules, winter add-ons, and tour inclusions.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <Link
            href="/car-rental-helsinki"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Compare car rental costs
          </Link>
          <Link
            href="/get-help"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            Ask us before booking
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <MediaCard
          tag="Helsinki"
          title="Car rental: deposit + pickup rules"
          text="Short, practical guidance for Helsinki airport vs city pickup, deposit holds, and card requirements."
          ctaLabel="Car rental Helsinki"
          ctaHref="/car-rental-helsinki"
        />
        <MediaCard
          tag="Lapland"
          title="Tours: compare inclusions safely"
          text="Small group vs big bus, cancellation expectations, and what tour listings tend to 'forget' to mention."
          ctaLabel="Lapland tours"
          ctaHref="/lapland-tours"
        />
      </div>
    </section>
  );
}
