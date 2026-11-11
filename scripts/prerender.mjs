// Runs after the two Vite builds (see "build" in package.json).
//
// Turns each page into a real HTML file so that search engines, AI tools and
// link-preview bots get the actual content, title, description and share tags
// without running any JavaScript. The browser then "hydrates" the same HTML,
// so visitors still get the fast single-page experience.
//
// Safety: if any page renders empty, this throws and the build fails. Vercel
// keeps serving the previous working deployment when a build fails.

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const {
  render,
  ROUTES,
  NOT_FOUND,
  PAGE_PATHS,
  SITE,
  canonicalUrl,
  headDescriptors,
  descriptorsToHtml,
  jsonLdFor,
  jsonLdString,
} = await import(pathToFileURL(ssrEntry).href)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

for (const needle of ['<div id="root"></div>', '<!--app-head-->']) {
  if (!template.includes(needle)) {
    throw new Error(`prerender: dist/index.html is missing ${needle}`)
  }
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function buildPage(route, url) {
  const body = render(url)
  if (!body.includes('<h1')) {
    throw new Error(`prerender: ${url} rendered without an <h1>; refusing to publish an empty page`)
  }

  let head = descriptorsToHtml(headDescriptors(route))
  const ld = route.path ? jsonLdFor(route.path) : null
  if (ld) {
    head += `\n    <script type="application/ld+json" data-seo>${jsonLdString(ld)}</script>`
  }

  return template
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(route.title)}</title>`)
    .replace(
      /<meta\s+name="description"[\s\S]*?\/>/,
      () => `<meta name="description" content="${esc(route.description)}" />`,
    )
    .replace('<!--app-head-->', () => head)
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

for (const p of PAGE_PATHS) {
  const html = buildPage(ROUTES[p], p)
  const file = p === '/' ? path.join(dist, 'index.html') : path.join(dist, p.slice(1), 'index.html')
  write(file, html)
  console.log(`prerendered ${p.padEnd(15)} -> ${path.relative(root, file)}  (${html.length} bytes)`)
}

// Real 404 page. Vercel serves dist/404.html, with a 404 status, for any
// address that is not a real page.
write(path.join(dist, '404.html'), buildPage(NOT_FOUND, '/page-not-found'))
console.log('prerendered 404         -> dist/404.html')

// sitemap.xml, built here so it cannot go stale.
const sources = {
  '/': 'src/pages/Home.jsx',
  '/our-services': 'src/pages/Services.jsx',
  '/our-team': 'src/pages/Team.jsx',
  '/faq': 'src/faqData.js',
  '/contact': 'src/pages/Contact.jsx',
  '/privacy': 'src/pages/Privacy.jsx',
}
const today = new Date().toISOString().slice(0, 10)
function lastmod(p) {
  try {
    const d = execSync(`git log -1 --format=%cs -- ${sources[p]}`, { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim()
    return d || today
  } catch {
    return today
  }
}
const urls = PAGE_PATHS.map(
  (p) => `  <url>\n    <loc>${canonicalUrl(p)}</loc>\n    <lastmod>${lastmod(p)}</lastmod>\n  </url>`,
).join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`wrote sitemap.xml (${PAGE_PATHS.length} pages) for ${SITE.url}`)
