export default function SectionCard(props: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-sm backdrop-blur">
      <h2 className="text-2xl font-semibold">{props.title}</h2>
      <div className="mt-3 text-white/70">{props.children}</div>
    </section>
  );
}
