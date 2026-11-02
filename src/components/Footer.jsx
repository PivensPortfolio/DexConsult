import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Link to="/" aria-label="Dexterity Consulting home">
          {/* The link's aria-label already names it, so the image is decorative here. */}
          <img src="/images/logo-small.png" alt="" width="203" height="40" loading="lazy" />
        </Link>
        <div className="footer-contact">
          <a href="tel:+13067133977">1 (306) 713-3977</a>
          <a href="mailto:andy@dexconsult.ca">andy@dexconsult.ca</a>
          <span>Saskatoon, Saskatchewan</span>
        </div>
        {/* The year is computed at build time and again in the browser; they only differ
            around New Year, so quiet the harmless hydration notice for this one span. */}
        <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Dexterity Consulting</span>
      </div>
      <div className="footer-a11y">
        <div className="container">
          <span>
            Accessibility matters to us. This site is designed for keyboard, screen reader, and
            reduced-motion use. Notice a barrier? <a href="mailto:andy@dexconsult.ca">Tell us.</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
