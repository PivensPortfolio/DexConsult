# dexconsult.ca

Marketing site for Dexterity Consulting. Vite + React 18 + react-router-dom, deployed on Vercel from `main`.

## Commands

```
npm install
npm run dev       # local development (client-rendered, hot reload)
npm run build     # production build: client bundle, server bundle, then prerender
```

## How pages are built

Every page is rendered to a real HTML file at build time, then React "hydrates" it in the browser. This is so search engines, AI tools and link-preview bots get the content, title, description and share tags without running JavaScript.

`npm run build` runs three steps (see `package.json`):

1. `vite build` writes the browser bundle to `dist/`.
2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` writes a Node bundle used only at build time (not deployed).
3. `node scripts/prerender.mjs` renders each route into `dist/<route>/index.html`, plus `dist/404.html` and `dist/sitemap.xml`. It fails the build if any page renders without an `<h1>`, so a broken build can never replace the live site.

## Adding or changing a page

1. Create the page component in `src/pages/` and add its `<Route>` in `src/App.jsx`.
2. Add its entry to `ROUTES` in `src/seo.js` (title, description). Call `usePageMeta(ROUTES['/your-path'])` in the component.
3. Add its source file to the `sources` map in `scripts/prerender.mjs` (used for the sitemap's `lastmod`).
4. If it has structured data, add a branch to `jsonLdFor` in `src/seo.js`. Everything in structured data must be text visible on that page.

Titles, descriptions, canonical URLs, Open Graph tags and JSON-LD all come from `src/seo.js`, which is used both at build time and in the browser, so they cannot drift apart.

FAQ text lives in `src/faqData.js` and feeds both the FAQ page and its FAQPage markup.

## Other things worth knowing

- `public/robots.txt` welcomes AI crawlers by name (owner's decision). `public/llms.txt` is a short plain summary for AI tools.
- `vercel.json` sets security headers (including a Content-Security-Policy that allows only this site, Google Fonts, and `formsubmit.co` for the form fallback), long-lived caching for `/assets` and `/images`, and 301s for the old `/pages/*` WordPress paths. If you add a new external script, font host or form endpoint, widen the CSP or it will be blocked.
- Be careful with routing changes in `vercel.json`. They cannot be tested locally and a mistake returns 404 for real pages. Test on a Vercel preview first.
- `api/contact.js` is a Vercel serverless function that sends enquiries through Resend (needs `RESEND_API_KEY`, optionally `CONTACT_TO` and `CONTACT_FROM`). The form falls back to FormSubmit if it fails.
- Accessibility is the business. Run axe (WCAG 2.2 A and AA) on every page after any change; the site currently has zero violations.
