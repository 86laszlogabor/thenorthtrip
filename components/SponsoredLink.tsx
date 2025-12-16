// components/SponsoredLink.tsx
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
};

export default function SponsoredLink({ href, children, className = "", label }: Props) {
  const isPlaceholder = !href || href === "#";

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Link
        href={href || "#"}
        aria-disabled={isPlaceholder}
        className={`underline underline-offset-4 ${
          isPlaceholder ? "opacity-60 pointer-events-none" : "hover:opacity-90"
        }`}
        rel="sponsored nofollow"
        target={isPlaceholder ? undefined : "_blank"}
      >
        {children}
      </Link>

      {label ? (
        <span className="text-[11px] rounded-full px-2 py-0.5 border border-slate-200 text-slate-500">
          {label}
        </span>
      ) : null}
    </div>
  );
}
