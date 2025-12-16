import Link from "next/link";

export default function CamperRentalFinlandPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold text-slate-900">Camper rental in Finland</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Winter is not “cute content”. It’s heating, insulation, battery, and road reality. This is the safe, practical checklist.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">Comparison coming next</div>
              <p className="mt-1 text-sm text-slate-600">
                We’ll add providers and affiliate options after partner selection.
              </p>
            </div>
            <Link
              href="/get-help"
              className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              Ask before booking
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Heating & power", text: "What’s required, what’s optional, and what fails in real winter." },
            { title: "Costs", text: "Fuel, campsite fees, winter gear, cleaning, deposits, insurance." },
            { title: "Route reality", text: "Where it’s smart, where it’s risky, and when hotels are better." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{b.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
