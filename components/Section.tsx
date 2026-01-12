export default function Section({
 children,
 className = "",
}: {
 children: React.ReactNode;
 className?: string;
}) {
 return (<section className={className}>
 <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">{children}</div>
 </section>);
}

