import Link from "next/link";
import Recommended from "@/components/Recommended";

export default function CamperRentalFinlandPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-slate-900">Camper rental in Finland</h1>
          <p className="max-w-3xl text-slate-600">
            Camper trips in Finland are incredible. Hidden costs are also incredible if you don’t check mileage, winter
            setup, and border rules.
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
            title="Compare camper rental options"
            subtitle="Two platforms to compare inventory and terms. URLs will be plugged in next."
            items={["motorhomerepublic", "camperdays"]}
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "What people overpay for",
              text: "Random ‘winter bundles’, upsold insurance names, and add-ons that duplicate what you already have.",
            },
            {
              title: "What’s actually worth it",
              text: "Clear mileage terms, heating & insulation if winter, and realistic pickup/drop-off times.",
            },
            {
              title: "Where affiliate links will go",
              text: "Comparison cards above stay global. Specific Helsinki/Lapland angles link into the relevant pillar pages.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Minimum checks before you book</h2>
          <ul className="mt-3 list-disc list-inside text-sm text-slate-700 space-y-2">
            <li><span className="font-semibold">Mileage:</span> unlimited vs daily cap. This changes the real cost.</li>
            <li><span className="font-semibold">Heating:</span> winter trips require proper heating/insulation.</li>
            <li><span className="font-semibold">Borders/ferries:</span> confirm cross-border and ferry permission in writing.</li>
            <li><span className="font-semibold">Insurance excess:</span> check deductible and common exclusions.</li>
            <li><span className="font-semibold">Pickup/dropoff:</span> after-hours rules can create “no-show” problems.</li>
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
          <Link href="/lapland-tours" className="font-semibold text-slate-900 hover:underline">
            Lapland tours →
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
