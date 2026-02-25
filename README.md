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

### IMPORTANT: Vercel Project Settings

When importing on Vercel, confirm these settings:
- **Framework Preset**: `Astro`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)
- **Node.js Version**: `18.x` or `20.x`

Do **not** override these manually — let Vercel auto-detect them.

---

### Option 1: GitHub → Vercel (Recommended)

```bash
# 1. Unzip the project
unzip htp-site.zip
cd htp-site

# 2. Initialize a git repo and push to GitHub
git init
git add .
git commit -m "Initial HTP site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/htp-site.git
git push -u origin main
```

Then:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Verify framework = **Astro** (auto-detected)
4. Click **Deploy**

---

### Option 2: Vercel CLI (Direct)

```bash
# 1. Unzip and enter folder
unzip htp-site.zip
cd htp-site

# 2. Install dependencies
npm install

# 3. Deploy directly via CLI
npx vercel --prod
# When prompted:
#   Framework: Astro (auto-detected, press Enter)
#   Build command: npm run build (press Enter)
#   Output dir: dist (press Enter)
```

---

### Option 3: Build locally, upload dist

```bash
cd htp-site
npm install
npm run build
# Drag the ./dist folder to vercel.com/new → "Deploy from Folder"
```

## ZIP + Deploy Shell Commands

```bash
# Full flow from scratch:
unzip htp-site.zip
cd htp-site
npm install
npm run build       # verify build passes locally first
npx vercel --prod   # deploy
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
