import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">DT Magazine — Highlights</h1>
        <p className="mt-3 text-slate-700">Short, practical reads on digital twins, careers and tools.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[1,2,3,4].map(i => (
            <article key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Post #{i}</h3>
              <p className="mt-2 text-slate-700">Coming soon. Connect your CMS or Markdown files.</p>
              <a className="mt-4 inline-block text-olo-700 underline" href="#">Read</a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
