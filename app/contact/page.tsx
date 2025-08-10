import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-3 text-slate-700">Drop a line — we usually reply the same day.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-xl border px-4 py-3" placeholder="Your email" />
          <textarea className="h-40 w-full rounded-xl border px-4 py-3" placeholder="Your message" />
          <button className="rounded-xl bg-olo-500 px-5 py-3 font-medium text-white hover:bg-olo-700">Send</button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
