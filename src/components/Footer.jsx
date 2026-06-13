import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Link to="/" aria-label="Dexterity Consulting home">
          <img src="/images/logo-small.png" alt="Dexterity Consulting" width="203" height="40" />
        </Link>
        <div className="footer-contact">
          <a href="tel:+13067133977">1 (306) 713-3977</a>
          <a href="mailto:getStarted@DexConsult.ca">getStarted@DexConsult.ca</a>
          <span>Saskatoon, Saskatchewan</span>
        </div>
        <span>&copy; {new Date().getFullYear()} Dexterity Consulting</span>
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
