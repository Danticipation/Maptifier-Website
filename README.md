# Maptifier Website

Marketing and product site for **Maptifier** — professional projection mapping on Android. Built with Next.js, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- **`npm run dev`** — Start development server
- **`npm run build`** — Production build
- **`npm run start`** — Run production server
- **`npm run lint`** — Run ESLint

## Structure

- **`src/app/`** — App Router pages (Home, Features, Demos, Tutorials, Testimonials, About, Contact, Privacy, Terms)
- **`src/components/`** — Header, Footer, FeatureCard
- **`public/`** or **`Public/`** — Static assets (e.g. `Assets/Maptifier-1.png` for hero)

## Customization

- **Content**: Edit copy in each `src/app/*/page.tsx` and replace demo video IDs in `demos/page.tsx` with real YouTube/Vimeo IDs.
- **Contact form**: Uses Netlify Forms. After deploying to Netlify, set form notification email (e.g. Daniel@NewSharpe.com) in Site settings → Forms → Form notifications.
- **Legal**: Replace placeholder content in `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` with your policies.
- **Theme**: Colors and fonts are in `tailwind.config.ts` and `src/app/globals.css`.

## Deployment

Deploy to Vercel, Netlify, or any Node host:

```bash
npm run build
npm run start
```

For static export (if you remove server-only features): add `output: 'export'` in `next.config.mjs` and run `npm run build`; serve the `out` folder.

## Dependencies

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Framer Motion** (animations)

Consider upgrading Next.js to a patched version if you need the latest security fixes (`npm info next`).
