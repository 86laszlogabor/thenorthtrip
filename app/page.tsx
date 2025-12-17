// app/who-we-are/page.tsx
import Link from "next/link";
import WhoWeAreCtas from "@/components/WhoWeAreCtas";

export const metadata = {
  title: "Who we are | TheNorthTrip",
  description:
    "We build decision tools for Finland and Lapland travel: car rental rules, platform traps, and practical checklists so your trip stays calm, not expensive.",
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),rgba(0,0,0,0))]" />

      {/* Hero */}
      <header className="relative">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/85">
            TheNorthTrip / Who we are
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Finland and Lapland are not “a trip”.
            <span className="block text-white/70">
              They’re a set of decisions with real consequences.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            If you want inspiration, the internet is already full of pretty pictures.
            We do something less glamorous: we help you avoid expensive mistakes. Deposit holds,
            card rules, winter conditions, distances that look short on a map and feel long at night.
            The boring stuff that keeps your trip calm.
          </p>

          {/* CTAs (no handlers) */}
          <div className="mt-8">
            <WhoWeAreCtas />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
            <Link className="underline underline-offset-4 hover:text-white" href="/car-rental-helsinki">
              Car rental guide
            </Link>
            <span className="text-white/35">•</span>
            <Link className="underline underline-offset-4 hover:text-white" href="/lapland-tours">
              Lapland tours guide
            </Link>
            <span className="text-white/35">•</span>
            <Link className="underline underline-offset-4 hover:text-white" href="/offer-checklist">
              Offer checklist
            </Link>
          </div>
        </div>
      </header>

      {/* Editorial body */}
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          {/* Big editorial card but not "AI-card": left border, no heavy shadow */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10">
            <div className="border-l-4 border-orange-500 pl-5">
              <h2 className="text-2xl font-bold">1) Finland and Lapland are not what you expect</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Finland often gets reduced to “cold and expensive”. Lapland gets reduced to snow, reindeer,
                Santa. Reality is messier, and that’s exactly why people mess up planning.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                Finland is two worlds. South Finland is structured, urban, easy to consume. Helsinki, Turku,
                Tampere feel like a Scandinavian city break.
                Lapland isn’t a checklist of sights. It’s an environment. Distances, time, weather decide for you.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                That’s why the “one-day let’s do everything” mindset fails here. You can’t plan Lapland like a city.
                You can’t outsource everything to platforms without understanding what happens behind the scenes.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                We don’t sell program lists. We step in at decision points: when you choose a base, transport,
                a platform vs a local provider, and what “included” really means.
                Lapland isn’t a product. Treat it like one, it gets expensive and disappointing.
                Treat it like a place, it gives you space, silence, and the northern experience people actually want.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-orange-500 pl-5">
              <h2 className="text-2xl font-bold">
                2) Lapland “sights”: location matters more than the name
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                Rovaniemi, Levi, Ylläs, Saariselkä show up in every guide. The issue isn’t that they’re bad.
                The issue is expectations.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                Rovaniemi is a gateway. Functional, not romantic. Airport, providers, Santa Claus Village.
                If your trip is short, you’re with family, or you want low risk, it’s a smart base.
                Just don’t expect “wild Lapland”. It’s a small town with infrastructure.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                Levi and Ylläs are different. Nature is closer, weather matters, distances feel slower.
                They’re ski and outdoor hubs where activities are spread across the landscape.
                This is where the first serious decision becomes non-negotiable: car or no car.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                People underestimate distances not because they’re huge, but because they’re slow: winter roads,
                darkness, wildlife, limited alternatives. A wrong rental setup or wrong insurance isn’t a nuisance here.
                It’s stress.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-orange-500 pl-5">
              <h2 className="text-2xl font-bold">
                3) The three mistakes that quietly burn your budget
              </h2>
              <p className="mt-4 leading-relaxed text-white/75">
                The most common mistake: too many activities, too little context.
                Northern lights tours, husky safaris, snowmobiles, reindeer. They sound simple.
                They’re not city attractions. They depend on weather, light, and logistics.
                Booking a tour buys a time slot, not an experience.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                Second mistake: ignoring terms and insurance. In Lapland, the “small print” isn’t small.
                Car rentals, snowmobiles, tours, all of it. Card type, deposits, what happens if you’re late,
                if weather changes, if equipment gets damaged.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                Third mistake: wrong base choice. People book where it’s cheaper, then realize everything is
                1–2 hours away. In Lapland, the main cost isn’t the accommodation price. It’s unnecessary movement.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                We’re not trying to be “smarter” than you. We show consequences in advance.
                We don’t tell you what to choose, we tell you what your choice implies.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-orange-500 pl-5">
              <h2 className="text-2xl font-bold">4) How we fit in (no miracles promised)</h2>
              <p className="mt-4 leading-relaxed text-white/75">
                TheNorthTrip is not a travel agency. We don’t sell packages, we don’t promise northern lights,
                and we don’t pretend your trip will be perfect.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                We build decision tools. Checklists, comparisons, explanations. Not because we love tables,
                but because Lapland punishes bad assumptions. Good decisions work quietly.
              </p>
              <p className="mt-4 leading-relaxed text-white/75">
                If you’re looking for hype, we’re probably not your site.
                If you want a calm trip where you understand the rules before you pay, that’s where we’re useful.
              </p>
            </div>

            {/* Bottom CTAs */}
            <div className="mt-10">
              <WhoWeAreCtas />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
