import * as React from "react";
import Link from "next/link";

export type WrapperCardProps = {
  className?: string;
  children?: React.ReactNode;
};

export type MediaCardProps = {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
};

type CardProps = WrapperCardProps & Partial<MediaCardProps>;

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Card(props: CardProps) {
  const {
    className,
    children,

    // media props (optional, but if image is present we treat it as a media card)
    image,
    title,
    description,
    ctaLabel,
    ctaHref,
    highlighted = false,
  } = props;

  const isMedia =
    typeof image === "string" &&
    typeof title === "string" &&
    typeof description === "string" &&
    typeof ctaLabel === "string" &&
    typeof ctaHref === "string";

  const base = "rounded-2xl border border-brand-border bg-white shadow-sm";
  const pad = "p-5 md:p-6";
  const highlight = highlighted
    ? "ring-1 ring-brand-orange/35 border-brand-orange/30"
    : "";

  // Wrapper mode (backwards compatible)
  if (!isMedia) {
    return <div className={cx(base, pad, highlight, className)}>{children}</div>;
  }

  // Media mode
  return (
    <div className={cx(base, "overflow-hidden", highlight, className)}>
      {/* Make the image itself clickable without nesting links */}
      <Link href={ctaHref} className="block">
        <div className="aspect-[16/10] w-full bg-brand-bluegray">
          {/* Use <img> to keep it simple and avoid next/image config issues */}
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>

      <div className={pad}>
        <h3 className="text-base md:text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-brand-text/70">{description}</p>

        <div className="mt-4">
          <Link href={ctaHref} className="text-sm font-semibold hover:underline">
            {ctaLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}
