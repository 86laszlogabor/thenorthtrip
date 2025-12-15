import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav className="text-xs text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, idx) => (
          <li key={it.href} className="flex items-center gap-2">
            {idx !== 0 && <span className="text-white/40">/</span>}
            <Link href={it.href} className="hover:text-white/80">
              {it.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
