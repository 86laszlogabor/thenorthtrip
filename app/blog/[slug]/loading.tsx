export default function LoadingBlogPost() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-4 w-40 rounded bg-white/10" />
      <div className="mt-6 h-12 w-5/6 rounded bg-white/10" />
      <div className="mt-4 h-5 w-3/4 rounded bg-white/10" />

      <div className="mt-10 space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="h-4 w-full rounded bg-white/10" />
        ))}
      </div>
    </main>
  );
}
