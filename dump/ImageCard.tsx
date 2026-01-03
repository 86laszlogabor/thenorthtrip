import Image from "next/image";

export default function ImageCard({
  title,
  body,
  imageSrc,
}: {
  title: string;
  body: string;
  imageSrc: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
