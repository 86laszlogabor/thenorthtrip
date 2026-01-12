import Image from "next/image";
import Link from "next/link";

type Variant = "card" | "home";

export default function PageHero({
 title,
 subtitle,
 imageSrc = "/images/hero/hero-default.jpg",
 variant = "card",
 primaryCta,
 secondaryCta,
}: {
 title: string;
 subtitle?: string;
 imageSrc?: string;
 variant?: Variant;
 primaryCta?: { href: string; label: string };
 secondaryCta?: { href: string; label: string };
}) {
 // HOME-style hero: text sits on image, left aligned (like your homepage)
 if (variant === "home") {
 return (<section className="relative overflow-hidden">
 <div className="relative h-[420px] md:h-[520px] lg:h-[620px]">
 <Image
 src={imageSrc}
 alt=""
 fill
 priority
 className="object-cover"
 sizes="100vw"
 />
 {/* Overlay must not eat clicks */}
 <div className="absolute inset-0 bg-black/45 pointer-events-none" />
 </div>

 <div className="absolute inset-0">
 <div className="mx-auto max-w-6xl px-4 h-full flex items-center">
 <div className="max-w-2xl">
 <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
 {title}
 </h1>

 {subtitle? (<p className="mt-4 text-base md:text-lg text-white/85">
 {subtitle}
 </p>): null}

 {(primaryCta || secondaryCta)? (<div className="mt-6 flex flex-col sm:flex-row gap-3">
 {primaryCta? (<Link
 href={primaryCta.href}
 className="inline-flex w-fit items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
 >
 {primaryCta.label}
 </Link>): null}

 {secondaryCta? (<Link
 href={secondaryCta.href}
 className="inline-flex w-fit items-center justify-center rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
 >
 {secondaryCta.label}
 </Link>): null}
 </div>): null}
 </div>
 </div>
 </div>
 </section>);
 }

 // CARD-style hero (your current one)
 return (<section className="relative overflow-hidden">
 <div className="relative h-[280px] md:h-[420px] lg:h-[520px]">
 <Image
 src={imageSrc}
 alt=""
 fill
 priority
 className="object-cover"
 sizes="100vw"
 />
 <div className="absolute inset-0 bg-black/40 pointer-events-none" />
 </div>

 <div className="mx-auto max-w-6xl px-4 -mt-14 md:-mt-20 relative z-10">
 <div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur p-6 md:p-8 shadow-sm">
 <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
 {title}
 </h1>
 {subtitle? (<p className="mt-3 max-w-3xl text-slate-700">{subtitle}</p>): null}
 </div>
 </div>
 </section>);
}

