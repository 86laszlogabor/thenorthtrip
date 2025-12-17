export default function PageTopNote({ text }: { text: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      {text}
    </div>
  );
}
