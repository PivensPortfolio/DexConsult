import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-col">
          <Link to="/" aria-label="Dexterity Consulting home">
            <img src="/images/logo-small.png" alt="Dexterity Consulting" width="203" height="40" />
          </Link>
          <p className="footer-creds">Andy Livingston, MA, Q.Med, Q.Arb</p>
          <p>Making dispute resolution accessible for all.</p>
        </div>
        <div className="footer-col">
          <p className="label">Contact</p>
          <a href="tel:+13067133977">1 (306) 713-3977</a>
          <br />
          <a href="mailto:getStarted@DexConsult.ca">getStarted@DexConsult.ca</a>
          <p>Saskatoon, Saskatchewan</p>
        </div>
        <div className="footer-col">
          <p className="label">Colophon</p>
          <p>
            Set in Fraunces and Source Serif. Built to WCAG 2.2 AA, with AAA contrast for text.
          </p>
          <p>&copy; {new Date().getFullYear()} Dexterity Consulting</p>
        </div>
      </div>
      <div className="footer-a11y">
        <div className="container">
          <span>
            Accessibility matters to us. This site is designed for keyboard, screen reader, and
            reduced-motion use. Notice a barrier? <a href="mailto:getStarted@DexConsult.ca">Tell us.</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
