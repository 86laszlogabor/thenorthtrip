import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-700">The page you wanted doesn’t exist. Shocking, I know.</p>
      <Link className="mt-6 inline-flex rounded-xl bg-orange-500 px-5 py-3 font-semibold text-black" href="/">
        Go home →
      </Link>
    </main>
  );
}
