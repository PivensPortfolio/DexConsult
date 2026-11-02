import { useEffect } from 'react'
import {
  headDescriptors,
  selectorOf,
  MANAGED_SELECTORS,
  jsonLdFor,
  jsonLdString,
} from './seo.js'

// Keeps the document head correct as visitors move between pages. On first
// load the same tags are already in the HTML (written at build time), so this
// mostly confirms them; its real job is client-side navigation.
export default function usePageMeta(route) {
  useEffect(() => {
    document.title = route.title

    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.setAttribute('name', 'description')
      document.head.appendChild(desc)
    }
    desc.setAttribute('content', route.description)

    const wanted = headDescriptors(route)
    const wantedSelectors = new Set(wanted.map(selectorOf))

    MANAGED_SELECTORS.forEach((sel) => {
      if (!wantedSelectors.has(sel)) document.head.querySelector(sel)?.remove()
    })

    wanted.forEach((d) => {
      const sel = selectorOf(d)
      let el = document.head.querySelector(sel)
      if (!el) {
        el = document.createElement(d.tag)
        document.head.appendChild(el)
      }
      Object.entries(d.attrs).forEach(([k, v]) => el.setAttribute(k, v))
    })

    document.head.querySelectorAll('script[data-seo]').forEach((s) => s.remove())
    const ld = route.path ? jsonLdFor(route.path) : null
    if (ld) {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo', '')
      s.text = jsonLdString(ld)
      document.head.appendChild(s)
    }
  }, [route])
}
