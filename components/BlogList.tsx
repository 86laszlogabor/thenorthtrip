"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  pillar: string;
  tags: string[];
};

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [q, setQ] = useState("");
  const [pillar, setPillar] = useState<string>("all");
  const [tag, setTag] = useState<string>("all");

  const pillars = useMemo(() => {
    const set = new Set(posts.map((p) => p.pillar));
    return ["all", ...Array.from(set)];
  }, [posts]);

  const tags = useMemo(() => {
    const set = new Set(posts.flatMap((p) => p.tags));
    return ["all", ...Array.from(set)];
  }, [posts]);

  const filtered = useMemo(() => {
    const nq = normalize(q);
    return posts.filter((p) => {
      if (pillar !== "all" && p.pillar !== pillar) return false;
      if (tag !== "all" && !p.tags.includes(tag)) return false;
      if (!nq) return true;
      const hay = normalize(`${p.title} ${p.description} ${p.tags.join(" ")}`);
      return hay.includes(nq);
    });
  }, [posts, q, pillar, tag]);

  function pillarLabel(p: string) {
    if (p === "/car-rental-helsinki") return "Car rental Helsinki";
    if (p === "/camper-rental-finland") return "Camper rental Finland";
    if (p === "/lapland-tours") return "Lapland tours";
    return p;
  }

  return (
    <section className="space-y-5">
      <div className="grid gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 sm:grid-cols-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search: deposit, debit, winter, airport..."
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
        />

        <select
          value={pillar}
          onChange={(e) => setPillar(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none focus:border-white/30"
        >
          {pillars.map((p) => (
            <option key={p} value={p}>
              {p === "all" ? "All pillars" : pillarLabel(p)}
            </option>
          ))}
        </select>

        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2 text-sm text-white outline-none focus:border-white/30"
        >
          {tags.map((t) => (
            <option key={t} value={t}>
              {t === "all" ? "All tags" : t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/20 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">{p.publishedAt}</p>
              <p className="text-xs text-white/60">{pillarLabel(p.pillar)}</p>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-white/70">No posts match your filters. Humans love edge cases.</p>
      )}
    </section>
  );
}
