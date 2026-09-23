import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import usePageMeta from '../usePageMeta.js'

export default function NotFound() {
  usePageMeta(
    'Page not found | Dexterity Consulting',
    'The page you were looking for could not be found.',
  )

  // Tell crawlers not to index this page. Restored on unmount so the rest of
  // the single-page app is unaffected.
  useEffect(() => {
    let tag = document.querySelector('meta[name="robots"]')
    const created = !tag
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'robots')
      document.head.appendChild(tag)
    }
    const prev = tag.getAttribute('content')
    tag.setAttribute('content', 'noindex')
    return () => {
      if (created) tag.remove()
      else if (prev !== null) tag.setAttribute('content', prev)
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <p className="kicker">Error 404</p>
        <h1>Page not found</h1>
        <p>Sorry, the page you were looking for does not exist or may have moved.</p>
        <p>Here are the main pages of the site:</p>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-services">Our Services</Link></li>
          <li><Link to="/our-team">Meet Andy</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <p>
          Or reach us directly at <a href="mailto:andy@dexconsult.ca">andy@dexconsult.ca</a> or{' '}
          <a href="tel:+13067133977">1 (306) 713-3977</a>.
        </p>
      </div>
    </section>
  )
}
