import Link from "next/link";

const posts = [
  {
    slug: "helsinki-airport-car-rental-deposit-after-midnight-pickup",
    title: "Helsinki Airport Car Rental Deposit & After Midnight Pickup (2025)",
    desc: "Deposit amounts, credit card requirements, and how late pickup really works at HEL airport.",
  },
];

export default function BlogIndex() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="opacity-80">
        Practical Finland travel guides focused on car rentals, campers, and Lapland tours.
      </p>

      <div className="grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/en/blog/${p.slug}`}
            className="border rounded-2xl p-6 block hover:bg-white/5"
          >
            <div className="font-semibold text-lg">{p.title}</div>
            <div className="opacity-80 mt-2">{p.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
