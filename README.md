# Historical Translation Project™ Website

A premium Astro + Tailwind website for the Historical Translation Project™ — a research institute bridging classical botanical pharmacopoeia with contemporary nutritional science.

## Prerequisites

- Node.js 18+ (or 20+)
- npm 9+

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser at:
# http://localhost:4321
```

## Build for Production

```bash
npm run build
```

Output goes to `./dist/`

## Preview Production Build Locally

```bash
npm run preview
```

## Project Structure

```
htp-site/
├── public/
│   ├── assets/
│   │   ├── logo-htp.svg
│   │   └── illustrations/        # SVG cards & icons
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Section.astro
│   │   ├── Card.astro
│   │   ├── IngredientTable.astro
│   │   ├── DosingTable.astro
│   │   └── DisclaimerBlock.astro
│   ├── content/
│   │   └── formulations/         # JSON data for each formulation
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro            # Home
│   │   ├── formulations/
│   │   │   ├── index.astro        # Formulations index
│   │   │   └── [slug].astro       # Dynamic detail pages
│   │   ├── publications.astro
│   │   ├── research.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── disclaimer.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Or deploy to production directly
vercel --prod
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub (or GitLab/Bitbucket)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Framework will be auto-detected as Astro
5. Click **Deploy**

### Option 3: Drag & Drop

```bash
# Build first
npm run build

# Then drag the ./dist folder to vercel.com/new
```

## ZIP + Deploy Shell Commands

```bash
# From the project parent directory:
zip -r htp-site.zip htp-site/ --exclude "*/node_modules/*" --exclude "*/.astro/*" --exclude "*/dist/*"

# Install deps and build inside the folder
cd htp-site
npm install
npm run build

# Deploy with Vercel CLI
npx vercel --prod
```

## Environment Variables

No environment variables are required for the base site. If you add a contact form backend or CMS, add them to `.env` and reference via Astro's built-in `import.meta.env`.

## DSHEA Compliance

All formulation content uses structure/function language only. No disease claims are made anywhere in the codebase. The global DSHEA disclaimer appears in:
- Every page footer
- Each formulation detail page (DisclaimerBlock.astro)
- The /disclaimer page in full

## Updating Formulation Data

Edit or add files in `src/content/formulations/*.json`. The detail pages are generated automatically via the `[slug].astro` dynamic route.

## Typography

Fonts load from Google Fonts (Playfair Display + DM Sans + DM Mono). If you need to self-host fonts for GDPR compliance, download the font files and update the `@import` in `src/styles/global.css`.
