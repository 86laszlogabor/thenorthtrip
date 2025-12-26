// components/Section.tsx
export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4">{children}</div>
    </section>
  );
}
