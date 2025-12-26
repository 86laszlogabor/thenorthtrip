export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-10 md:py-14 ${className ?? ""}`.trim()}>
      <div className="mx-auto max-w-site px-4">{children}</div>
    </section>
  );
}
