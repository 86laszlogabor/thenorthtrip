import TrackedLink from "@/components/TrackedLink";

export default function AboveFoldStart() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <TrackedLink
        href="/helsinki"
        placement="home_hero"
        cta="start_helsinki"
        className="rounded-xl bg-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/25"
      >
        Start with Helsinki →
      </TrackedLink>
    </div>
  );
}
