export default function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-4">
      <div className="text-base font-semibold">{title}</div>
      <p className="mt-1 text-sm text-slate-700">{text}</p>
    </div>
  );
}
