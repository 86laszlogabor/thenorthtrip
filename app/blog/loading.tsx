export default function LoadingBlog() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="h-10 w-40 rounded-xl bg-white/10" />
        <div className="h-5 w-96 rounded-xl bg-white/10" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <div className="h-4 w-28 rounded bg-white/10" />
            <div className="mt-3 h-7 w-3/4 rounded bg-white/10" />
            <div className="mt-3 h-4 w-full rounded bg-white/10" />
            <div className="mt-2 h-4 w-5/6 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </main>
  );
}
