# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start development server (Vite)
npm run build     # production build → /build
npm run preview   # preview production build locally
npm run test      # run Playwright e2e tests
npm run lint      # check formatting (Prettier) and linting (ESLint)
npm run format    # auto-format with Prettier
npm run deploy    # deploy to GitHub Pages (gh-pages branch on pezzabros/homepage-2022)
```

## Architecture

This is a **SvelteKit static site** — fully prerendered, no server-side rendering at runtime.

- `svelte.config.js` uses `@sveltejs/adapter-static`, outputting to `/build` with `appDir: 'internal'`
- `src/routes/+layout.js` sets `export const prerender = true` globally

### Routing & structure

The site is effectively a single page with anchor-based navigation:

- `src/routes/+layout.svelte` — shared layout with the `<Header>` component and nav links (`#work`, `#research`, `#teaching`, `#contact`)
- `src/routes/+page.svelte` — all content sections (intro, about, work, research, teaching, freelance, contact) in one file

### Static assets

- `/static/img/` — images
- `/static/CNAME` — custom domain for GitHub Pages
- `/static/.nojekyll` — disables Jekyll on GitHub Pages
- `src/200.html` — SPA fallback page

### Deployment

`gh-pages.js` deploys the `/build` directory to the `gh-pages` branch. The site uses Cabin for privacy-friendly analytics (configured in `src/app.html`).

### Styling

Component-scoped CSS using Svelte's `<style>` blocks. Typography uses Google Fonts (Lora serif, Poppins sans-serif) loaded via `app.html`. Responsive breakpoint at `600px`.
