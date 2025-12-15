import Link from "next/link";

export default function CTABox(props: {
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-8 shadow-sm backdrop-blur">
      <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold">{props.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">{props.text}</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            href={props.primaryHref}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            {props.primaryLabel}
          </Link>

          {props.secondaryHref && props.secondaryLabel ? (
            <Link
              href={props.secondaryHref}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              {props.secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
