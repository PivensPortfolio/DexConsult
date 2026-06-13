import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE = '1 (306) 713-3977'
const PHONE_HREF = 'tel:+13067133977'
const EMAIL = 'getStarted@DexConsult.ca'

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="container">
          <a href={PHONE_HREF} aria-label={`Call us at ${PHONE}`}>
            {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="brand" onClick={close} aria-label="Dexterity Consulting home">
            <img src="/images/logo-small.png" alt="Dexterity Consulting" width="203" height="40" />
          </Link>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? 'CLOSE' : 'MENU'}
          </button>
          <nav id="site-nav" className={`site-nav${open ? ' open' : ''}`} aria-label="Main navigation">
            <ul>
              <li>
                <NavLink to="/our-services" onClick={close}>
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-team" onClick={close}>
                  Meet Andy
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={close}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="nav-cta"
                  onClick={close}
                  aria-current={location.pathname === '/contact' ? 'page' : undefined}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
