// app/who-we-are/page.tsx
import WhoWeAreCtas from "@/components/WhoWeAreCtas";

export const metadata = {
  title: "Who we are | TheNorthTrip",
  description:
    "Decision-first travel planning for Finland and Lapland. Real costs, logistics, and conditions before you book.",
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who we are | TheNorthTrip",
    description:
      "Decision-first travel planning for Finland and Lapland. Real costs, logistics, and conditions before you book.",
    url: "/who-we-are",
    type: "article",
  },
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER SPACE / HERO-LIKE TOP */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 pt-14 pb-10">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
            Who we are
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Finland &amp; Lapland, but without the fantasy pricing.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-700">
            Most travel content sells vibes. We sell clarity.
            <br />
            TheNorthTrip is built for people who want the real constraints before they book:
            deposits, debit card rules, winter driving, cancellations, and the stuff that turns a
            “dream trip” into a paid lesson.
          </p>

          {/* ✅ Tracking CTAs live in a Client Component */}
          <WhoWeAreCtas />
        </div>
      </section>

      {/* LONG ARTICLE */}
      <article className="mx-auto max-w-4xl px-6 pt-12 pb-20">
        {/* 1 */}
        <section className="prose prose-slate max-w-none">
          <h2>Finland and Lapland: why it’s not what you expect</h2>

          <p>
            People imagine Finland as one uniform “cold and expensive” country. They imagine Lapland
            as a single postcard: snow, reindeer, Santa. Reality is messier and that’s exactly why
            so many trips go sideways at the planning stage.
          </p>

          <p>
            Finland is two worlds. Southern Finland is urban, structured, and easy to consume.
            Helsinki, Turku, and Tampere are more “Nordic city break” than “wild Arctic adventure”.
            Lapland is different. It’s not a checklist of attractions. It’s an environment.
            Distances, time, and weather set the rules.
          </p>

          <p>
            That difference is why the “city logic” fails up north. You can’t “do Lapland in a day”.
            You can’t book car, hotel, and tours with the same mindset you’d use for a normal city
            trip and expect it to work. And you can’t outsource everything to platforms without
            understanding what’s actually happening behind the scenes.
          </p>

          <p>
            That’s why we don’t publish endless “top 10 things” lists.
            TheNorthTrip exists for decision points. When to rent a car and when it’s a waste.
            When a local provider is better and when a platform is safer. What is a real experience
            and what is just repackaged marketing.
          </p>

          <p>
            Lapland is not a product. Treat it like one and it gets expensive and disappointing.
            Treat it like an environment and it gives you what people came for in the first place:
            space, silence, and a genuinely northern experience.
          </p>
        </section>

        <div className="my-12 h-px w-full bg-slate-200" />

        {/* 2 */}
        <section className="prose prose-slate max-w-none">
          <h2>Lapland sights: it’s not the places, it’s where they sit on the map</h2>

          <p>
            Rovaniemi, Levi, Ylläs, Saariselkä. Every guidebook repeats these names. The problem
            isn’t that they’re bad. The problem is expectations.
          </p>

          <p>
            Rovaniemi is a gateway. Not a poetic claim. A functional one. You’ve got the airport,
            more services, and Santa Claus Village. If your trip is short, you’re coming with family,
            or you don’t want to gamble, Rovaniemi is the safe base. Just don’t expect “wild Lapland”.
            It’s a small city with infrastructure.
          </p>

          <p>
            Levi and Ylläs are a different category. Nature is closer, distances stretch out, and
            weather becomes a real factor. These are ski and outdoor hubs where the “things to do”
            are spread across the landscape, not stacked next to each other.
          </p>

          <p>
            This is where the first serious decision shows up: car or no car. People underestimate
            distances, not because they’re always huge, but because they’re slow. Winter road
            conditions, darkness, wildlife, fewer alternatives. A bad car rental choice or bad
            insurance here isn’t a minor inconvenience. It becomes stress.
          </p>

          <p>
            That’s why we treat “urban Finland” and “Lapland” separately.
            Not because it sounds fancy. Because they operate by different rules.
          </p>
        </section>

        <div className="my-12 h-px w-full bg-slate-200" />

        {/* 3 */}
        <section className="prose prose-slate max-w-none">
          <h2>What most people get wrong in Lapland, and why it costs money</h2>

          <p>
            The most common mistake: too many activities, not enough context.
          </p>

          <p>
            Northern lights tours, husky safaris, snowmobile rides, reindeer. They all sound great.
            But these are not city attractions. They depend on weather, light, and logistics.
            A platform booking doesn’t guarantee an experience. It guarantees a time slot.
          </p>

          <p>
            Second mistake: ignoring conditions and insurance.
            In Lapland, the fine print isn’t “fine”. It matters. For car rentals, snowmobiles,
            and tours, you need to know what happens if:
          </p>

          <ul>
            <li>you are late</li>
            <li>weather changes</li>
            <li>equipment gets damaged</li>
            <li>your card type isn’t accepted</li>
          </ul>

          <p>
            Third mistake: choosing the wrong base.
            People book where it’s cheaper, then realize every “must-do” is 1 to 2 hours away.
            In Lapland, the accommodation price isn’t the main cost. The main cost is pointless
            movement and friction.
          </p>

          <p>
            We’re not trying to be “smarter” than the traveler. We just show consequences early.
            We don’t tell you what to choose. We tell you what each choice actually implies.
          </p>

          <p>
            That’s why our content doesn’t start with dreamy trip reports.
            It starts with rules, conditions, and real-world scenarios. In Lapland that’s not
            cynicism. It’s respect for the environment.
          </p>
        </section>

        <div className="my-12 h-px w-full bg-slate-200" />

        {/* 4 */}
        <section className="prose prose-slate max-w-none">
          <h2>How we fit in, and why we don’t promise miracles</h2>

          <p>
            TheNorthTrip is not a travel agency. We don’t package trips. We don’t sell “best tours”.
            We don’t promise northern lights. What we do is more boring and that’s why it works.
          </p>

          <p>
            We build decision tools.
          </p>

          <p>We help you understand:</p>

          <ul>
            <li>when to use a platform and when a local provider is the better option</li>
            <li>what to watch for with Lapland car rentals (deposits, cards, insurance, winter add-ons)</li>
            <li>what “included” actually means on tour listings</li>
            <li>when you’re paying for convenience, and when you’re paying for marketing</li>
          </ul>

          <p>
            That’s why we publish checklists, comparisons, and explanations.
            Not because we love spreadsheets (we don’t).
            Because in Lapland, bad decisions are expensive and good ones are quietly invisible.
          </p>

          <p>
            If you only want inspiration, Finland has endless pretty photos.
            If you want a calm trip, you need to understand the framework.
          </p>

          <p>
            That’s where we’re useful.
          </p>
        </section>

        {/* Bottom CTA (still no onClick here) */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-xl font-semibold">Want the practical stuff first?</h3>
          <p className="mt-2 text-slate-700">
            Start with deposits, card rules, winter add-ons, and what people overpay for.
          </p>
          <WhoWeAreCtas />
        </div>
      </article>
    </main>
  );
}
