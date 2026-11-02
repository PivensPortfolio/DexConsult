// Build-time only. scripts/prerender.mjs imports this to turn each page into
// real HTML. It is never shipped to visitors.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'

export * from './seo.js'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
}
