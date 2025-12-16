// components/SponsoredLink.tsx
import Link from "next/link";

type Props = {
  href?: string;
  label: string;
  disabled?: boolean;
  className?: string;
};

export default function SponsoredLink({ href, label, disabled, className }: Props) {
  const isDisabled = disabled || !href;

  if (isDisabled) {
    return (
      <div
        className={
          className ??
          "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-white/10 text-white/50 cursor-not-allowed"
        }
        aria-disabled="true"
      >
        {label}
        <span className="ml-2 opacity-60">↗</span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-orange-600 hover:bg-orange-500 text-white transition"
      }
      rel="sponsored nofollow noopener"
      target="_blank"
    >
      {label}
      <span className="ml-2 opacity-70">↗</span>
    </Link>
  );
}
