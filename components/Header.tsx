import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/hrills-logo.svg" alt="HRILLS" className="h-7 w-7" />
          <span className="text-lg font-semibold">HRILLS</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/pricing" className="hover:underline">Pricing</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <a href="/api/hello" className="rounded-xl border px-3 py-1.5">API</a>
        </nav>
      </div>
    </header>
  );
}
