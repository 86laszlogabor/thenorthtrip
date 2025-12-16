import Link from "next/link";

function InlineSponsoredLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="font-semibold text-blue-700 hover:underline"
    >
      {children}
    </a>
  );
}

export default function HelsinkiPage() {
  // Holnap ezt kicseréljük igazi partner linkekre
  const LINKS = {
    ferry: "#",
    tours: "#",
    dayCruise: "#",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <div className="text-sm text-slate-600">Destinations</div>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
          Helsinki: ferries, islands, and what’s actually worth it
        </h1>
        <p className="mt-3 text-slate-700">
          Quick, practical picks for first-timers: ferries, island hops, day
          cruises, and how not to waste half a day.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Quick facts</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>Best “easy win” half-day: Suomenlinna (short ferry ride).</li>
          <li>
            Most overrated mistake: booking a tour without checking what’s
            actually included.
          </li>
          <li>Getting around: tram + walking beats taxis for 90% of routes.</li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold">Ferries & island trips</h3>
          <p className="mt-2 text-slate-700">
            For islands and quick sea views, check{" "}
            <InlineSponsoredLink href={LINKS.ferry}>
              ferry options we’d shortlist
            </InlineSponsoredLink>{" "}
            (affiliate links will be added after partner selection).
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold">Tours that don’t waste your day</h3>
          <p className="mt-2 text-slate-700">
            If you want a guided option, start with{" "}
            <InlineSponsoredLink href={LINKS.tours}>
              Helsinki tours with clear inclusions
            </InlineSponsoredLink>
            . Avoid vague listings.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
          <h3 className="font-bold">Day cruise idea</h3>
          <p className="mt-2 text-slate-700">
            A day cruise can be great if it’s transparent about timings and
            stops. Here’s the placeholder slot for our “best value” pick:{" "}
            <InlineSponsoredLink href={LINKS.dayCruise}>
              recommended day cruise
            </InlineSponsoredLink>
            .
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Note: These are placeholders. We’ll swap them to real affiliate
            partners tomorrow, once you pick Viator/GetYourGuide/other.
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          ← Back to home
        </Link>
        <Link
          href="/destinations"
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
        >
          All destinations
        </Link>
      </div>
    </div>
  );
}
