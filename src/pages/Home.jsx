import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

const services = [
  {
    num: '01',
    title: 'Dispute Resolution',
    body: 'Dexterity Consulting offers mediation, arbitration, and parent coordination services.',
    anchor: 'Mediation',
  },
  {
    num: '02',
    title: 'Accessibility Enhancements',
    body: 'We work with individuals, businesses, organizations, educational institutions and government institutions to assist them in making physical spaces or services available to all.',
    anchor: 'AccessibilityEnhancements',
  },
  {
    num: '03',
    title: 'Investigative Services',
    body: 'Dexterity Consulting provides balanced and neutral investigative services dealing with harassment, bullying, discrimination, or code of conduct violations.',
    anchor: 'InvestigativeServices',
  },
]

export default function Home() {
  usePageMeta(
    'Dispute Resolution Services | Dexterity Consulting Saskatoon',
    'Dexterity Consulting makes dispute resolution accessible for all: mediation, arbitration, parent coordination, accessibility consulting, and investigative services in Saskatoon.',
  )

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero-1.jpg)' }} />
        <div className="container">
          <p className="kicker kicker--light reveal reveal-1">Dexterity Consulting</p>
          <h1 className="reveal reveal-1">
            Making dispute resolution <span className="accent">accessible for all.</span>
          </h1>
          <p className="hero-sub reveal reveal-2">
            Let us help you solve accessibility and accommodation issues.
          </p>
          <div className="hero-actions reveal reveal-3">
            <Link to="/contact" className="btn btn-amber">
              Get Started
            </Link>
            <Link to="/our-services" className="btn btn-ghost-light">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What we do</p>
            <h2 id="services-heading">Some of the services we provide</h2>
          </div>
          <div className="card-grid">
            {services.map((s) => (
              <article className="svc-card" key={s.num}>
                <span className="svc-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link className="svc-link" to={`/our-services#${s.anchor}`}>
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="approach-heading">
        <div className="container">
          <div className="section-head">
            <p className="kicker kicker--light">Why Dexterity</p>
            <h2 id="approach-heading">Neutral. Experienced. Grounded in lived experience.</h2>
          </div>
          <div className="pillars">
            <div className="pillar">
              <h3>Qualified</h3>
              <p>
                Led by Andy Livingston, MA, Q.Med, Q.Arb: a Qualified Mediator and Qualified
                Arbitrator with nearly a decade at the Saskatchewan Human Rights Commission.
              </p>
            </div>
            <div className="pillar">
              <h3>Neutral</h3>
              <p>
                Balanced, impartial processes, from multi-party mediation to workplace
                investigations, designed so every voice is heard.
              </p>
            </div>
            <div className="pillar">
              <h3>Accessible</h3>
              <p>
                Lived experience with disability informs everything we do, from accessible spaces
                to accessible processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Making dispute resolution accessible for all.</h2>
          <Link to="/contact" className="btn btn-amber">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
