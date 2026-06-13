import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

const services = [
  {
    num: '01',
    title: 'Accessibility Consulting',
    desc: 'Accessibility plans, RHFAC and WCAG audits, community engagement, and standards consulting.',
    anchor: 'AccessibilityConsulting',
  },
  {
    num: '02',
    title: 'Workplace Investigation',
    desc: 'Independent, third-party investigations of harassment, discrimination, and code of conduct complaints.',
    anchor: 'WorkplaceInvestigation',
  },
  {
    num: '03',
    title: 'Dispute Resolution',
    desc: 'Mediation, arbitration, med-arb, family mediation, and parent coordination, in person or virtual.',
    anchor: 'DisputeResolution',
  },
  {
    num: '04',
    title: 'Research & Expert Services',
    desc: 'Expert witness and litigation support, applied research, knowledge translation, and ADR training.',
    anchor: 'ResearchExpertServices',
  },
]

const routes = [
  {
    q: 'I’ve received a workplace complaint',
    a: 'Workplace Investigation',
    to: '/our-services#WorkplaceInvestigation',
  },
  {
    q: 'We need an accessibility plan or audit',
    a: 'Accessibility Consulting',
    to: '/our-services#AccessibilityConsulting',
  },
  {
    q: 'We’re separating and want to stay out of court',
    a: 'Family Mediation',
    to: '/our-services#DisputeResolution',
  },
  {
    q: 'I need a neutral, an arbitrator, or an expert witness',
    a: 'Dispute Resolution & Expert Services',
    to: '/our-services#ResearchExpertServices',
  },
]

export default function Home() {
  usePageMeta(
    'Dispute Resolution Services | Dexterity Consulting Saskatoon',
    'Dexterity Consulting makes dispute resolution accessible for all: mediation, arbitration, workplace investigation, accessibility consulting, and expert services in Saskatoon, serving all of Canada.',
  )

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <p className="kicker reveal reveal-1">Dexterity Consulting &middot; Saskatoon</p>
          <h1 className="reveal reveal-1">
            Making dispute resolution <span className="accent">accessible for all.</span>
          </h1>
          <p className="hero-sub reveal reveal-2">
            Independent workplace investigations, mediation and arbitration, and accessibility
            consulting. Based in Saskatoon, serving all of Canada.
          </p>
          <p className="hero-sub hero-promise reveal reveal-2">
            Free initial consultation. Response within one business day.
          </p>
          <div className="hero-actions reveal reveal-3">
            <Link to="/contact" className="btn btn-amber">
              Book a free consultation
            </Link>
            <Link to="/our-services" className="btn btn-ghost">
              See our services
            </Link>
          </div>
          <p className="hero-creds reveal reveal-3">
            Andrew (Andy) Livingston &middot; MA &middot; Q.Arb &middot; Q.Med &middot; MCIArb
            &middot; RHFAC Professional
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="router-heading">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Start here</p>
            <h2 id="router-heading">What brings you here?</h2>
          </div>
          <div className="router-grid">
            {routes.map((r) => (
              <Link className="router-card" to={r.to} key={r.q}>
                <span className="q">{r.q}</span>
                <span className="a">{r.a}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What we do</p>
            <h2 id="services-heading">Four service lines. One practice.</h2>
          </div>
          <div className="index">
            {services.map((s) => (
              <Link className="index-row" to={`/our-services#${s.anchor}`} key={s.num}>
                <span className="idx-num" aria-hidden="true">
                  {s.num}
                </span>
                <span>
                  <span className="idx-title">{s.title}</span>
                  <p className="idx-desc">{s.desc}</p>
                </span>
                <span className="idx-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink quote-band" aria-labelledby="approach-heading">
        <div className="container">
          <p className="kicker kicker--light">Why Dexterity</p>
          <h2 id="approach-heading" style={{ position: 'absolute', left: '-9999px' }}>
            Why Dexterity Consulting
          </h2>
          <blockquote>
            Andy is a person with a disability. That lived experience grounds his work, and shapes
            how he runs accessible proceedings. <span className="mark">It is a credential, not a
            footnote.</span>
          </blockquote>
          <Link to="/our-team">Meet Andy</Link>
          <div className="pillars">
            <div className="pillar">
              <h3>Accessible</h3>
              <p>
                Lived experience with disability informs everything we do, from accessible spaces
                to accessible processes.
              </p>
            </div>
            <div className="pillar">
              <h3>Qualified</h3>
              <p>
                Led by Andy Livingston, MA, Q.Med, Q.Arb: a Qualified Mediator and Qualified
                Arbitrator with a decade at the Saskatchewan Human Rights Commission.
              </p>
            </div>
            <div className="pillar">
              <h3>Neutral</h3>
              <p>
                Balanced, impartial processes, from multi-party mediation to workplace
                investigations, designed so every voice is heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>One conversation. No obligation.</h2>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-amber">
              Book a free consultation
            </Link>
            <span className="cta-aside">
              or call <a href="tel:+13067133977">1 (306) 713-3977</a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
