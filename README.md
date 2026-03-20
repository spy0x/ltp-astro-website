# Los Tres Primos (GameDev Studio Website)

Official website for **Los Tres Primos**, built with **Astro** and deployed on **GitHub Pages**.

![Logo](https://spy0x.github.io/CoderHouse-DesarrolloWeb/img/PixelArt/us_pixelart.png "Los Tres Primos")

## Live Site

- [https://ltp-astro-website.vercel.app/](https://ltp-astro-website.vercel.app/)

## Tech Stack

- Astro
- TypeScript
- Bootstrap 5
- Custom CSS/SCSS
- AOS (Animate On Scroll)

## Features

- Bilingual site (`/en` and `/es`)
- Automatic language redirect from root (`/`) based on browser language
- Projects and Game Jam sections with local assets
- Contact form integrated with Formspree
- Anti-spam protections:
	- Honeypot field
	- Time-trap validation
	- Cloudflare Turnstile
- Social sharing SEO metadata (Open Graph + Twitter Cards)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure (main)

- `src/pages/[lang]/` → localized pages
- `src/layouts/BaseLayout.astro` → global layout + SEO metadata
- `src/components/Navbar.astro` → navigation
- `public/img/` → static image assets
