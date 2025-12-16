// components/BackToBlog.tsx
import Link from "next/link";

export default function BackToBlog() {
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition"
    >
      <span className="text-lg leading-none">←</span>
      <span>Back to blog</span>
    </Link>
  );
}
