export default function CTA({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl border bg-slate-50 p-6 ${className}`}>
      <h3 className="text-xl font-semibold">Free check — no signup</h3>
      <p className="mt-1 text-slate-700">Введите цель. Получите карту навыков и % готовности.</p>
      <button className="mt-4 w-full rounded-xl bg-olo-500 px-4 py-2 font-medium text-white hover:bg-olo-700">
        Try it now
      </button>
    </div>
  );
}
