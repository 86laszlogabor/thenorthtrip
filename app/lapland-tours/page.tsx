import Link from "next/link";
import Recommended from "@/components/Recommended";

export default function LaplandToursPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-slate-900">Lapland tours</h1>
          <p className="max-w-3xl text-slate-600">
            High-ticket experiences, high variance quality. The goal is simple: avoid “guaranteed” nonsense and book tours
            that deliver value.
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

        <div className="mt-8">
          <Recommended
            title="Browse Lapland tours"
            subtitle="GetYourGuide as primary. Viator as backup if inventory differs."
            items={["getyourguide", "viator"]}
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Worth the money",
              text: "Northern Lights tours (good guides), snowmobile safaris, and half-day reindeer experiences.",
            },
            {
              title: "Common traps",
              text: "“Aurora guaranteed” claims, overpacked combo tours, and vague pickup/gear policies.",
            },
            {
              title: "How to choose",
              text: "Read what’s included (gear, pickup, duration). Compare cancellation and minimum group size.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Fast filters that prevent bad bookings</h2>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-2">
            <li><span className="font-semibold">Pickup policy:</span> exact meeting point, exact time, late rules.</li>
            <li><span className="font-semibold">Gear included:</span> cold weather gear matters more than you think.</li>
            <li><span className="font-semibold">Cancellation:</span> check the free cancellation window per offer.</li>
            <li><span className="font-semibold">Group size:</span> smaller groups often mean better experience.</li>
            <li><span className="font-semibold">Claims:</span> avoid “guaranteed aurora” wording.</li>
          </ul>

          <div className="mt-5 text-sm text-slate-600">
            Use the{" "}
            <Link className="underline underline-offset-4" href="/offer-checklist">
              offer checklist
            </Link>{" "}
            before you commit.
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-sm text-slate-600">
          <Link href="/camper-rental-finland" className="font-semibold text-slate-900 hover:underline">
            Camper rental Finland →
          </Link>
          <Link href="/helsinki" className="font-semibold text-slate-900 hover:underline">
            Helsinki travel page →
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
