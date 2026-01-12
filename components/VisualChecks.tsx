import ImageCard from "@/components/ImageCard";

export default function VisualChecks({
 wideImageSrc = "/images/trust-finland-lake-boat.jpg",
}: {
 wideImageSrc?: string;
}) {
 return (<section className="mx-auto max-w-6xl px-4 py-10">
 <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
 Visual checks (so you don’t guess)
 </h2>
 <p className="mt-2 max-w-2xl text-sm text-slate-600">
 Quick reminders that prevent expensive assumptions.
 </p>

 <div className="mt-6 grid gap-4 md:grid-cols-3">
 <ImageCard
 title="Winter reality"
 body="Timing, daylight, road conditions. Don’t assume."
 imageSrc="/images/mistake-winter.jpg"
 />
 <ImageCard
 title="Fees & deposits"
 body="Holds, deposits, extra charges. Confirm before you pay."
 imageSrc="/images/mistake-fees.jpg"
 />
 <ImageCard
 title="Insurance & exclusions"
 body="What’s excluded matters more than what’s advertised."
 imageSrc="/images/mistake-insurance.jpg"
 />
 </div>

 <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
 <img src={wideImageSrc} alt="" className="h-56 w-full object-cover" />
 </div>
 </section>);
}

