// components/WhoWeAreExcerpt.tsx
import Link from "next/link";

export default function WhoWeAreExcerpt() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
          <p className="text-sm font-semibold tracking-wide text-gray-600">
            Why TheNorthTrip
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Finland and Lapland don’t fail travelers. Bad planning does.
          </h2>

          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Finland is not one destination. And Lapland is not a list of attractions.
            </p>
            <p>
              Southern Finland works like a city trip. Lapland works like an environment
              shaped by distance, weather and timing.
            </p>
            <p>
              Most people don’t struggle because they chose the wrong hotel or tour.
              They struggle because they didn’t understand how decisions in the north actually work.
            </p>
            <p>
              TheNorthTrip exists for that exact reason. We don’t sell trips.
              We don’t promise northern lights. We build{" "}
              <span className="font-semibold">decision tools</span> that help you understand what matters before you book.
            </p>
            <p>
              If you want inspiration, Finland has plenty of beautiful photos.
              If you want to travel calmly and confidently, you need context.
              That’s where we come in.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/who-we-are"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700"
            >
              Read: Who we are
            </Link>

            <Link
              href="/offer-checklist"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Open the checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
