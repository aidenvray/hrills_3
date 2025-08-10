import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HRILLS — Skills & Career Navigator",
  description: "Fast-track your goals with honest skills checks and crisp action plans."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
