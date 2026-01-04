import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Rovaniemi Winter Guide 2026: Santa Village & Aurora Tours",
  description:
    "How Rovaniemi actually works in winter: Santa Claus Village, aurora probabilities, husky safaris, and realistic stay lengths.",
};

export default function Page() {
  return (
    <>
      <PageHero
        title="Rovaniemi Winter Wonderland"
        subtitle="Santa Village, aurora reality, and how to use the hub properly."
      />

      <article className="prose prose-slate max-w-3xl mx-auto px-4 py-10">
        <p>
          Rovaniemi is where expectations meet physics. People arrive expecting Christmas magic and discover darkness,
          silence, and cold first. The magic comes later, if you use the place correctly.
        </p>

        <hr />

        <h2>What Rovaniemi is (and isn’t)</h2>
        <p><strong>Rovaniemi is:</strong> a logistics-perfect Lapland base.</p>
        <p><strong>Rovaniemi is not:</strong> untouched wilderness or a guaranteed aurora machine.</p>

        <hr />

        <h2>Santa Claus Village: half-day, not more</h2>
        <p>
          Go early, walk it calmly, leave before it becomes crowded. Combine it with another activity or a transfer.
          Never schedule this as a full day.
        </p>

        <hr />

        <h2>Aurora tours from Rovaniemi</h2>
        <p>
          Aurora hunting is probability, not belief. What improves your odds:
        </p>
        <ul>
          <li>Multiple nights</li>
          <li>Mobility</li>
          <li>Distance from city lights</li>
        </ul>

        <hr />

        <h2>Ideal stay length</h2>
        <ul>
          <li>2 nights: risky</li>
          <li>3 nights: optimal</li>
          <li>4+ nights: comfortable</li>
        </ul>

        <hr />

        <h2>Simple winter flow</h2>
        <p>
          Day 1: arrival + first aurora attempt<br />
          Day 2: husky safari + sauna<br />
          Day 3: Santa Village + final aurora chance
        </p>

        <hr />

        <h2>Conclusion</h2>
        <p>
          Rovaniemi works best when you treat it as a hub, not the destination itself. Use it to reach wilderness, not
          to stand under streetlights waiting for the sky to perform.
        </p>

        <p className="text-sm text-slate-600">
          <strong>Last verified:</strong> 2026-01-04
        </p>
      </article>
    </>
  );
}
