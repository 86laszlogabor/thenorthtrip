export function GET() {
  return new Response(
    JSON.stringify({
      version: process.env.VERCEL_GIT_COMMIT_SHA || "local",
      env: process.env.VERCEL_ENV || "local",
      ts: Date.now(),
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
