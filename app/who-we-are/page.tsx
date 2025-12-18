// app/who-we-are/page.tsx
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";

export const metadata = {
  title: "Who we are | TheNorthTrip",
  description:
    "Decision-first travel planning for Finland and Lapland: real costs, logistics, and conditions before you book.",
  alternates: { canonical: "/who-we-are" },
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* HERO */}
      <section className="relative isolate">
        <div className="relative h-[56vh] min-h-[460px] w-full overflow-hidden bg-slate-950">
          <Image
            src="/images/hero/hero-lapland.jpg"
            alt="Lapland winter"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/35 to-slate-950" />

          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/20 backdrop-blur">
                  TheNorthTrip / Who we are
                </div>

                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
                  Finland and Lapland are not “a trip”.
                  <span className="block text-white/85">They’re decisions with consequences.</span>
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Mi nem csodát ígérünk, hanem tiszta kereteket: kauciók, kártyaszabályok,
                  téli realitások, távolságok, és az a rész, amit mások elsumákolnak a “vibe” kedvéért.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <TrackedLink
                    href="/offer-checklist"
                    eventName="cta_click"
                    props={{ placement: "who_we_are_hero", cta: "offer_checklist" }}
                    className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                  >
                    Open free checklist
                  </TrackedLink>

                  <TrackedLink
                    href="/get-help"
                    eventName="cta_click"
                    props={{ placement: "who_we_are_hero", cta: "get_help" }}
                    className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                  >
                    Get help
                  </TrackedLink>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
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
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-10 pb-16">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-10">
              <article className="mx-auto max-w-3xl">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  1) Finnország és Lappföld: miért nem az, amire számítasz
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Finnországot sokan egy homogén, „hideg és drága” északi országnak képzelik el. Lappföldet pedig gyakran
                  redukálják egyetlen dologra: hó, rénszarvas, Mikulás. A valóság ennél összetettebb, és pontosan ez az oka
                  annak, hogy ennyien hibáznak a tervezésnél.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Finnország két világ. Dél-Finnország városias, rendezett, könnyen fogyasztható. Helsinki, Turku vagy
                  Tampere inkább skandináv városélmény, mint „vad északi kaland”. Lappföld ezzel szemben nem látványosságok
                  sora, hanem környezet. Itt a távolság, az idő és az időjárás diktál.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Mi ezért nem „programlistákat” árulunk. A TheNorthTrip ott lép be, ahol az utazók többsége elakad:
                  döntési helyzeteknél. Mikor érdemes autót bérelni, mikor nem. Mikor jobb helyi szolgáltató, mikor platform.
                  Mi számít valódi élménynek, és mi csak csomagolt marketing.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Lappföld nem egy termék. Ha így kezeled, drága lesz és csalódást okoz. Ha környezetként érted meg,
                  akkor viszont pontosan azt adja, amiért az emberek idejönnek: teret, csendet és valódi északi élményt.
                </p>

                <div className="my-10 h-px w-full bg-slate-200" />

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  2) Lappföld látnivalói: nem a helyek a lényeg, hanem az elhelyezkedésük
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Rovaniemi kapu. Funkcionális: repülőtér, szolgáltatók, Santa Claus Village. Rövid útra, családdal,
                  alacsony kockázatra logikus. Levi és Ylläs már más: természet közelebb, távolságok “lassúak”,
                  időjárás tényező.
                </p>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Itt jön az első komoly döntés: autó vagy nem autó. A rosszul megválasztott autóbérlés vagy biztosítás
                  nem kényelmetlenség, hanem stressz.
                </p>

                <div className="my-10 h-px w-full bg-slate-200" />

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  3) Mit rontanak el a legtöbben és miért kerül pénzbe
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Túl sok program, túl kevés kontextus. Túra = időpont, nem garancia. Második: feltételek és biztosítás
                  ignorálása. Harmadik: rossz bázisválasztás. Lappföldön nem a szállás ára a fő költség, hanem a felesleges mozgás.
                </p>

                <div className="my-10 h-px w-full bg-slate-200" />

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  4) Hogyan jövünk mi a képbe (csoda nélkül)
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  A TheNorthTrip nem utazási iroda. Nem csomagot adunk, hanem döntési eszközöket: checklisták, magyarázatok,
                  összehasonlítások. Nem azért, mert szeretjük a táblázatokat, hanem mert itt a rossz döntések drágák.
                </p>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Kezdd a praktikus résszel</h3>
                  <p className="mt-2 text-slate-700">
                    Ha nyugodtan akarsz utazni, előbb értsd a kereteket. Utána jöhet a “szép rész”.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <TrackedLink
                      href="/offer-checklist"
                      eventName="cta_click"
                      props={{ placement: "who_we_are_body", cta: "offer_checklist" }}
                      className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-orange-600"
                    >
                      Open free checklist
                    </TrackedLink>
                    <TrackedLink
                      href="/car-rental-helsinki"
                      eventName="cta_click"
                      props={{ placement: "who_we_are_body", cta: "car_rental" }}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                    >
                      Car rental guide →
                    </TrackedLink>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 bg-slate-950" />
    </main>
  );
}

