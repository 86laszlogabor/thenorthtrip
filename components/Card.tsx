// components/Card.tsx
export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white border border-black/5 shadow-sm shadow-black/5 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
