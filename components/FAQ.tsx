type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">FAQ</h2>

      <div className="space-y-3">
        {items.map((it) => (
          <details
            key={it.q}
            className="rounded-2xl border border-white/15 bg-white/5 p-5"
          >
            <summary className="cursor-pointer text-base font-semibold text-white">
              {it.q}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
