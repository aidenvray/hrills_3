import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-3 text-slate-700">
          Free diagnostics. Paid deep-dive when you actually need it.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {name: "Free", price: "0 €", features: ["Goal → Skills map", "10‑question check", "% readiness", "Anonymous markers"]},
            {name: "Report", price: "4,99 €", features: ["Full test breakdown", "Key gaps explained", "Quick tips"]},
            {name: "Pro Plan", price: "12,90 €", features: ["Everything in Report", "Personal action plan", "Time & budget estimate"]}
          ].map((t)=> (
            <div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-olo-500 px-4 py-2 font-medium text-white hover:bg-olo-700">Choose</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
