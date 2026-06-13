import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import Faq from './pages/Faq.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        // Move focus into the section so keyboard/SR users land where they navigated
        const target = el.closest('section') || el
        target.setAttribute('tabindex', '-1')
        target.focus({ preventScroll: true })
        return
      }
    }
    window.scrollTo(0, 0)
    // On route change, move focus to the new page's H1 so the change is announced
    const h1 = document.querySelector('main h1')
    if (h1) {
      h1.setAttribute('tabindex', '-1')
      h1.focus({ preventScroll: true })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          {/* Legacy WordPress paths */}
          <Route path="/pages/our-team" element={<Navigate to="/our-team" replace />} />
          <Route path="/pages/contact" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
