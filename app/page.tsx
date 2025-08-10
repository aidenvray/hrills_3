import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import FeatureCard from "@/components/FeatureCard";
import LogoCloud from "@/components/LogoCloud";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full bg-olo-50 px-3 py-1 text-sm text-olo-700">HRILLS</span>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Online‑запуск за 1 час. <br /> Проверки навыков. Честная обратная связь.
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Введите цель — получите быстрый план и бесплатную диагностику. Платный разбор — по желанию.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="rounded-2xl bg-olo-500 px-5 py-3 font-medium text-white shadow-md hover:bg-olo-700">
                Start now
              </Link>
              <Link href="/(marketing)/pricing" className="rounded-2xl border px-5 py-3 font-medium hover:bg-white">
                Pricing
              </Link>
            </div>
            <LogoCloud className="mt-10" />
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <FeatureCard title="Goal → Skills Map" text="Мы переводим цель в список ключевых навыков и критериев успеха."/>
              <FeatureCard title="10‑Q Quick Test" text="Короткий тест даёт % готовности + сильные/слабые стороны."/>
              <FeatureCard title="Action Plan (Pro)" text="Платный пакет 4,99–12,90 €: подробный разбор и персональный план."/>
            </div>
            <CTA className="mt-8"/>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
