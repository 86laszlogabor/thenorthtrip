type TrustStripProps = {
  items: string[];
};

export default function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="rounded-2xl border border-white/15 bg-white/5 p-6">
      <h2 className="text-lg font-semibold text-white">What we actually check</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/75">
        {items.map((t) => (
          <li key={t} className="flex gap-2">
            <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-blue-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
