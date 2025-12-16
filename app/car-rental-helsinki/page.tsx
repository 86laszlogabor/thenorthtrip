import Link from "next/link";
import Recommended from "@/components/Recommended";

export default function HelsinkiPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-slate-900">Helsinki</h1>
          <p className="max-w-3xl text-slate-600">
            Practical booking facts for Helsinki trips: ferries, day cruises, sauna experiences, and the stuff people
            overpay for when they book blindly.
          </p>
        </header>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Some links on this page may be affiliate links. If you click and book, we may earn a commission at no extra cost
          to you. See{" "}
          <Link className="underline underline-offset-4" href="/affiliate-disclosure">
            affiliate disclosure
          </Link>
          .
        </div>

        {/* Quick navigation */}
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[
            { title: "Direct ferries", href: "#ferries", text: "Tallinn/Stockholm routes and what to book." },
            { title: "Sauna", href: "#sauna", text: "Helsinki’s best value sauna setups." },
            { title: "Island hopping", href: "#islands", text: "Suomenlinna and easy day stops." },
            { title: "Day cruises", href: "#daycruise", text: "When tours beat DIY." },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:bg-slate-50"
            >
              <div className="text-sm font-semibold text-slate-900">{c.title}</div>
              <div className="mt-1 text-xs text-slate-600">{c.text}</div>
            </a>
          ))}
        </div>

        {/* Ferries */}
        <div id="ferries" className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Direct ferries</h2>
          <p className="mt-2 text-slate-600">
            Helsinki is one of the easiest places to do a quick sea trip. The main decision is not “price”, it’s whether
            you want a transport ticket (ferry) or an organized experience (tour/cruise).
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Helsinki → Tallinn</div>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>Best as a day trip if you leave early and return late</li>
                <li>Compare schedules, not just the cheapest time</li>
                <li>Watch for port terminals and check-in cutoffs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Helsinki → Stockholm</div>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
                <li>More of an overnight experience than “transport”</li>
                <li>Cabin type changes the real cost</li>
                <li>Book early in peak season for better inventory</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Recommended
              title="Ferry booking options"
              subtitle="Direct tickets vs packaged day trips. Compare both before you commit."
              items={["directferries", "getyourguide"]}
            />
          </div>

          <div className="mt-4 text-sm text-slate-600">
            <span className="font-semibold text-slate-900">Ferry vs day cruise:</span> If you only need transport, ferry
            wins. If you want “zero planning” with a guided structure, day cruises can be worth it.
          </div>
        </div>

        {/* Islands */}
        <div id="islands" className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Island hopping</h2>
          <p className="mt-2 text-slate-600">
            The classic is Suomenlinna. Most people don’t need a tour, but guided options exist if you want context and a
            clean itinerary.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Suomenlinna (easy win)",
                text: "Best low-effort half-day trip. Go early to avoid crowds.",
              },
              {
                title: "Food + coffee planning",
                text: "Small planning saves money. Island cafés are charming but not cheap.",
              },
              {
                title: "Guided vs self-guided",
                text: "Self-guided is enough for most. Tours are for structure + history.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                <div className="mt-2 text-sm text-slate-700">{b.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-slate-600">
            If you want a guided option, check experiences on{" "}
            <Link className="underline underline-offset-4" href="#">
              GetYourGuide
            </Link>{" "}
            (affiliate link placeholder).
          </div>
        </div>

        {/* Sauna */}
        <div id="sauna" className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Sauna</h2>
          <p className="mt-2 text-slate-600">
            Sauna is not a “tourist thing” here. The good ones feel premium, but you can still book smart and avoid
            overpriced bundles.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Best for first-timers",
                text: "Book a popular public sauna with clear rules and easy access.",
              },
              {
                title: "Best for views",
                text: "Sea-facing saunas are the Helsinki flex. Worth it once.",
              },
              {
                title: "Best for budget",
                text: "Avoid combo bundles. Book just the sauna slot if that’s all you need.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                <div className="mt-2 text-sm text-slate-700">{b.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Recommended
              title="Sauna booking options"
              subtitle="GetYourGuide as primary. Tiqets as backup if availability differs."
              items={["getyourguide", "tiqets"]}
            />
          </div>
        </div>

        {/* Day cruise */}
        <div id="daycruise" className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Day cruises</h2>
          <p className="mt-2 text-slate-600">
            Tours are worth it when you want the itinerary handled, or when peak season inventory is messy. DIY is worth
            it when you only need the transport ticket.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-semibold text-slate-900">Quick decision rule</div>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>If you want max freedom: book ferry tickets and plan your own day.</li>
              <li>If you want zero planning: book a packaged day cruise/tour.</li>
              <li>If you’re traveling with kids: packaged often reduces stress.</li>
            </ul>
          </div>

          <div className="mt-6">
            <Recommended
              title="Day trip options"
              subtitle="Packaged experiences are useful when you want zero planning."
              items={["getyourguide"]}
            />
          </div>
        </div>

        {/* Best for */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Best for…</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "First-time Helsinki visitors",
                items: ["Sauna + Suomenlinna + one ferry day trip (Tallinn).", "Keep it simple, don’t overbook."],
              },
              {
                title: "Budget travelers",
                items: ["Self-guided islands.", "Avoid overpriced bundles. Book only what you’ll use."],
              },
              {
                title: "Families",
                items: ["Day trips with structure can reduce stress.", "Plan around check-in cutoffs and meal times."],
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
                  {b.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Internal linking */}
        <div className="mt-10 flex flex-col gap-2 text-sm text-slate-600">
          <Link href="/car-rental-helsinki" className="font-semibold text-slate-900 hover:underline">
            Car rental in Helsinki →
          </Link>
          <Link href="/offer-checklist" className="font-semibold text-slate-900 hover:underline">
            Offer checklist →
          </Link>
          <Link href="/destinations" className="font-semibold text-slate-900 hover:underline">
            All destinations →
          </Link>
          <Link href="/" className="font-semibold text-orange-600 hover:underline">
            Back to home →
          </Link>
        </div>
      </section>
    </main>
  );
}
