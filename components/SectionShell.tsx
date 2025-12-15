export default function SectionShell({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-gray-400 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
