export default function LogoCloud({ className = "" }: { className?: string }) {
  const items = ["Next.js", "Tailwind", "Supabase", "OpenAI"];
  return (
    <div className={className}>
      <div className="text-xs uppercase tracking-wide text-slate-500">Powered by</div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        {items.map((x) => (
          <span key={x} className="rounded-full border bg-white px-3 py-1 text-sm shadow-sm">{x}</span>
        ))}
      </div>
    </div>
  );
}
