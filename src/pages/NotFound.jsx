import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'
import { NOT_FOUND } from '../seo.js'

export default function NotFound() {
  // NOT_FOUND carries "noindex" so search engines never list this page.
  usePageMeta(NOT_FOUND)

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
