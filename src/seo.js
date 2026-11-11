// Single source of truth for what search engines, AI tools and link previews
// see for each page: title, description, canonical URL, share-card tags, and
// structured data (JSON-LD).
//
// It is used in two places so they can never disagree:
//   - scripts/prerender.mjs writes these into the static HTML at build time
//     (what crawlers and link-preview bots read, with no JavaScript);
//   - src/usePageMeta.js keeps the same tags correct as visitors navigate.
//
// Rule for anything added to the structured data: it must be text that is
// visible on the matching page. Search engines penalise markup that claims
// things the page does not say.

import { faqs } from './faqData.js'

export const SITE = {
  url: 'https://dexconsult.ca',
  name: 'Dexterity Consulting',
  locale: 'en_CA',
  image: '/images/og-default.jpg',
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: 'Dexterity Consulting. Making dispute resolution accessible for all.',
  email: 'andy@dexconsult.ca',
  phone: '+1-306-713-3977',
}

export const ROUTES = {
  '/': {
    path: '/',
    title: 'Mediation, Arbitration & Workplace Investigation in Saskatoon | Dexterity Consulting',
    description:
      'Independent mediation, arbitration and workplace investigation from Saskatoon, plus accessibility consulting. Serving clients across Western Canada and globally.',
  },
  '/our-services': {
    path: '/our-services',
    title: 'Mediation, Arbitration, Investigation & Accessibility Services | Dexterity Consulting',
    description:
      'Four service lines: accessibility consulting, workplace investigation, dispute resolution (mediation, arbitration, med-arb, family mediation, parent coordination), and research and expert services. Saskatoon-based, serving clients globally.',
  },
  '/our-team': {
    path: '/our-team',
    title: 'Andy Livingston, Q.Arb, Q.Med | Arbitrator, Mediator & Investigator | Dexterity Consulting',
    description:
      'Meet Andrew (Andy) Livingston, President and CEO of Dexterity Consulting: independent arbitrator, mediator, workplace investigator, and accessibility consultant based in Saskatoon.',
  },
  '/faq': {
    path: '/faq',
    title: 'Frequently Asked Questions | Dexterity Consulting',
    description:
      'Answers to common questions about Dexterity Consulting services, virtual delivery, accessibility of proceedings, response times, and how to get started.',
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy | Dexterity Consulting',
    description:
      'How Dexterity Consulting handles information you share through this website, by email, or by phone.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Us by Email or Phone | Dexterity Consulting',
    description:
      'Contact Dexterity Consulting in Saskatoon by email at andy@dexconsult.ca or by phone at 1 (306) 713-3977.',
  },
}

export const NOT_FOUND = {
  path: null,
  title: 'Page not found | Dexterity Consulting',
  description: 'The page you were looking for could not be found.',
  noindex: true,
}

export const PAGE_PATHS = Object.keys(ROUTES)

export function canonicalUrl(path) {
  return path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`
}

const ORG_ID = `${SITE.url}/#organization`

// ---- Head tags (as plain descriptors, so they can be written as HTML at
// build time or applied to the live document in the browser) ----

export function headDescriptors(route) {
  if (route.noindex) {
    return [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } }]
  }
  const url = canonicalUrl(route.path)
  return [
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE.name } },
    { tag: 'meta', attrs: { property: 'og:locale', content: SITE.locale } },
    { tag: 'meta', attrs: { property: 'og:url', content: url } },
    { tag: 'meta', attrs: { property: 'og:title', content: route.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: route.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: `${SITE.url}${SITE.image}` } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: String(SITE.imageWidth) } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: String(SITE.imageHeight) } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: SITE.imageAlt } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
  ]
}

export function selectorOf({ tag, attrs }) {
  if (tag === 'link') return `link[rel="${attrs.rel}"]`
  if (attrs.property) return `meta[property="${attrs.property}"]`
  return `meta[name="${attrs.name}"]`
}

// Every head tag this file can manage, so navigating away from a page can
// remove tags that no longer apply (for example, noindex after the 404 page).
export const MANAGED_SELECTORS = [
  ...new Set([...headDescriptors(ROUTES['/']), ...headDescriptors(NOT_FOUND)].map(selectorOf)),
]

function escAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function descriptorsToHtml(list) {
  return list
    .map(({ tag, attrs }) => {
      const parts = Object.entries(attrs)
        .map(([k, v]) => `${k}="${escAttr(v)}"`)
        .join(' ')
      return `<${tag} ${parts} />`
    })
    .join('\n    ')
}

// ---- Structured data ----

export function jsonLdFor(path) {
  if (path === '/') {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      image: `${SITE.url}${SITE.image}`,
      email: SITE.email,
      telephone: SITE.phone,
      // Locality, region and country only. Deliberately no street address.
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Saskatoon',
        addressRegion: 'SK',
        addressCountry: 'CA',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Saskatchewan' },
        { '@type': 'Country', name: 'Canada' },
        'Worldwide',
      ],
      description:
        'Dexterity Consulting makes dispute resolution accessible for all: mediation, arbitration, parent coordination, accessibility consulting, and investigative services.',
      knowsAbout: [
        'Mediation',
        'Arbitration',
        'Med-arb',
        'Family mediation',
        'Parent coordination',
        'Workplace investigation',
        'Accessibility consulting',
        'Expert witness and litigation support',
      ],
    }
  }

  if (path === '/our-team') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${SITE.url}/our-team#andy`,
      name: 'Andrew (Andy) Livingston',
      alternateName: 'Andy Livingston',
      jobTitle: 'President and CEO',
      honorificSuffix: 'BA(Hons), MA, Q.Arb, Q.Med',
      url: canonicalUrl('/our-team'),
      image: `${SITE.url}/images/andy-livingston.jpg`,
      worksFor: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Saskatchewan' },
      knowsAbout: [
        'Arbitration',
        'Mediation',
        'Workplace investigation',
        'Accessibility consulting',
      ],
    }
  }

  if (path === '/faq') {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }
  }

  return null
}

// JSON for embedding inside a <script> tag. "<" is escaped so the content can
// never close the tag early.
export function jsonLdString(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c')
}
