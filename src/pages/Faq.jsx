import usePageMeta from '../usePageMeta.js'
import { ROUTES } from '../seo.js'
import { faqs } from '../faqData.js'

const EMAIL = 'andy@dexconsult.ca'

export default function Faq() {
  usePageMeta(ROUTES['/faq'])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Good to know</p>
          <h1>Frequently Asked Questions</h1>
          <p>
            Answers to the questions organizations and counsel ask most often. For anything not
            covered here, email{' '}
            <a href={`mailto:${EMAIL}`} style={{ color: 'var(--amber)' }}>
              {EMAIL}
            </a>{' '}
            or call <a href="tel:+13067133977" style={{ color: 'var(--amber)' }}>1 (306) 713-3977</a>.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Frequently asked questions">
        <div className="container">
          <div className="faq-list">
            {faqs.map((item, i) => (
              <details className="faq-item" key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <div className="faq-body">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Still have a question?</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${EMAIL}`} className="btn btn-amber btn-email">
              {EMAIL}
            </a>
            <a href="tel:+13067133977" className="btn btn-ghost-light">
              1 (306) 713-3977
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
