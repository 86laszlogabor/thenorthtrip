// components/SponsoredLink.tsx
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  className?: string;
};

export default function SponsoredLink({ href, label, className }: Props) {
  const isPlaceholder = !href || href === "#" || href.toLowerCase() === "tbd";
  const finalHref = isPlaceholder ? "#" : href;

  return (
    <Link
      href={finalHref}
      aria-disabled={isPlaceholder}
      tabIndex={isPlaceholder ? -1 : 0}
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white transition disabled:opacity-50"
      }
      rel="sponsored nofollow noopener"
      target="_blank"
    >
      {label}
      <span className="ml-2 opacity-70">↗</span>
    </Link>
  );
}
