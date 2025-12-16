import Link from "next/link";

type CTA = { href: string; label: string };

type NewProps = {
  title: string;
  description: string;
  primary: CTA;
  secondary?: CTA;
};

type OldProps = {
  title: string;
  description: string;
  href: string;
  button: string;
};

type Props = NewProps | OldProps;

function isNewProps(p: Props): p is NewProps {
  return (p as any).primary?.href && (p as any).primary?.label;
}

export default function BlogCTA(props: Props) {
  const title = props.title;
  const description = props.description;

  const primary = isNewProps(props)
    ? props.primary
    : { href: props.href, label: props.button };

  const secondary = isNewProps(props) ? props.secondary : undefined;

  return (
    <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 max-w-xl text-slate-700">{description}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={primary.href}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-600"
        >
          {primary.label}
        </Link>

        {secondary ? (
          <Link
            href={secondary.href}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
