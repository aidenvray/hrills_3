export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-sm text-slate-600">
        © {new Date().getFullYear()} HRILLS — Built with Next.js & Tailwind.
      </div>
    </footer>
  );
}
