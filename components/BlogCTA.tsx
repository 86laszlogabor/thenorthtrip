// components/BlogCTA.tsx
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  button: string;
};

export default function BlogCTA({ title, description, href, button }: Props) {
  return (
    <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-8">
      <h3 className="text-2xl font-extrabold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-xl text-white/70">
        {description}
      </p>

      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}
