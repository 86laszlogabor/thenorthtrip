export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-card bg-white shadow-softer border border-black/5 p-5 ${className ?? ""}`.trim()}
    >
      {children}
    </article>
  );
}
