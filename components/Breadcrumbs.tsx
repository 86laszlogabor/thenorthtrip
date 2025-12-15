import React from "react";

type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items?.length) return null;

  return (
    <nav className="mx-auto max-w-6xl px-4 pt-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-white/70">
        {items.map((c, idx) => (
          <li key={`${c.href}-${idx}`} className="flex items-center gap-2">
            <a className="hover:text-white transition" href={c.href}>
              {c.label}
            </a>
            {idx < items.length - 1 ? <span className="text-white/40">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
