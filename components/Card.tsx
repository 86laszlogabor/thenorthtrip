import Link from "next/link";
import type { ReactNode } from "react";

type CardBaseProps = {
  highlighted?: boolean; // kept for compatibility (ignored visually)
  className?: string;
};

type CardPropsFields = CardBaseProps & {
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  children?: never;
};

type CardPropsChildren = CardBaseProps & {
  children: ReactNode;
  image?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type CardProps = CardPropsFields | CardPropsChildren;

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export default function Card(props: CardProps) {
  const isChildrenMode = "children" in props;

  return (
    <div
      className={cx(
        "flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-orange-300 bg-white shadow-sm",
        props.className
      )}
    >
      {/* Image: required in fields-mode, optional in children-mode */}
      {"image" in props && props.image ? (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={props.image}
            alt={("title" in props && props.title) ? props.title : "Card image"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pt-5 pb-4">
        {isChildrenMode ? (
          <div className="flex-1">{props.children}</div>
        ) : (
          <>
            <h3 className="text-base font-semibold text-slate-900">
              {props.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {props.description}
            </p>
          </>
        )}

        {/* CTA pinned: required in fields-mode, optional in children-mode */}
        {"ctaLabel" in props && "ctaHref" in props && props.ctaLabel && props.ctaHref ? (
          <div className="mt-auto pt-5">
            <div className="h-px w-full bg-slate-100" />
            <Link
              href={props.ctaHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
            >
              {props.ctaLabel} →
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
