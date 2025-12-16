import Image from "next/image";

type Item = { src: string; alt: string };

export default function ImageGrid({
  items,
  title,
}: {
  items: Item[];
  title?: string;
}) {
  if (!items?.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      {title ? (
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {title}
        </h2>
      ) : null}

      <div
        className={`mt-5 grid gap-4 sm:gap-6 ${
          items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {items.map((it) => (
          <div
            key={it.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
