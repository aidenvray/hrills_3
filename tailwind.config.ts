import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        olo: {
          50: "#f4f7ff",
          500: "#5b7fff",
          700: "#3959d3"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
