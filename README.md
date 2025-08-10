# HRILLS — Next.js + Tailwind + Supabase + GPT

Production-ready starter you can push to GitHub and deploy to Vercel in minutes.

## What’s inside
- Next.js 14 (App Router), React 18, TypeScript
- TailwindCSS
- Supabase client (ready for Auth & DB)
- GPT route stub (`/api/gpt`) — bring your `OPENAI_API_KEY`
- Clean, responsive UI with HRILLS sections

## 1) Local dev
```bash
pnpm i   # or npm i / yarn
pnpm dev
```
Open http://localhost:3000

## 2) Environment
Create `.env.local` (or set in Vercel) from `.env.example`:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
OPENAI_API_KEY=...
```

## 3) Deploy to Vercel
- Push to GitHub
- Import repo at https://vercel.com/new
- Add env vars
- Ship 🚀

## 4) Supabase (optional now, ready later)
- Create project at supabase.com
- Copy Project URL + anon key into env
- (You can add RLS tables & Auth later without changing this codebase.)

## 5) GPT
- Add `OPENAI_API_KEY` to env
- Call `POST /api/gpt` with `{ "prompt": "..." }`

## Project structure
```
app/
  api/
    gpt/route.ts
    hello/route.ts
  (marketing)/
    pricing/page.tsx
  blog/page.tsx
  contact/page.tsx
  layout.tsx
  page.tsx
components/
  Header.tsx
  Footer.tsx
  CTA.tsx
  FeatureCard.tsx
  LogoCloud.tsx
lib/
  supabase.ts
public/
  favicon.svg
  hrills-logo.svg
styles/
  globals.css
```

## License
MIT
