// components/HeroCardRail.tsx
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

export type HeroCard = {
  title: string;
  href: string;
  image: string;
  trackingCta: string;
};

export default function HeroCardRail({
  cards,
  placement = "home_hero_cards",
}: {
  cards: HeroCard[];
  placement?: string;
}) {
  return (
    <>
      {/* Mobile: horizontal swipe */}
      <div className="mt-8 sm:hidden">
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {cards.map((c) => (
            <TrackedLink
              key={c.href}
              href={c.href}
              eventName="cta_click"
              props={{ placement, cta: c.trackingCta }}
              className="snap-start shrink-0 w-[78%] overflow-hidden rounded-2xl ring-1 ring-white/15"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="bg-black/20 p-4">
                <div className="text-sm font-semibold text-white">{c.title}</div>
              </div>
            </TrackedLink>
          ))}
        </div>
      </div>

      {/* Desktop/tablet: grid */}
      <div className="mt-10 hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <TrackedLink
            key={c.href}
            href={c.href}
            eventName="cta_click"
            props={{ placement, cta: c.trackingCta }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-white/15"
          >
            <div className="relative h-44 w-full">
              <Image
                src={c.image}
                alt={c.title}
                fill
                className="object-cover transition group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-sm font-semibold text-white">{c.title}</div>
            </div>
          </TrackedLink>
        ))}
      </div>
    </>
  );
}
