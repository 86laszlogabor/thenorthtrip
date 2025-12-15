import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">404</h1>
      <p className="text-white/70">
        This page doesn’t exist. Either you mistyped, or the internet did what it does best: disappoint.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
        >
          Read the blog
        </Link>
      </div>
    </main>
  );
}
