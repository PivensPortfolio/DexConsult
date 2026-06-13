import usePageMeta from '../usePageMeta.js'

const EMAIL = 'andy@dexconsult.ca'

const faqs = [
  {
    q: 'What services does Dexterity Consulting offer?',
    a: 'Dexterity Consulting offers four service lines: accessibility consulting, workplace investigation, dispute resolution (mediation, arbitration, and med-arb), and research and expert services. Training and speaking engagements run across all four.',
  },
  {
    q: 'Where does Dexterity Consulting work?',
    a: 'Dexterity Consulting is based in Saskatoon, Saskatchewan. Our team works in person across Saskatchewan and Western Canada, virtually across all Canadian jurisdictions, and on English-language virtual proceedings internationally.',
  },
  {
    q: 'Are services available virtually?',
    a: 'Yes. All services are available through secure virtual platforms, with national reach. Virtual delivery means no travel delays and no added travel cost for clients in remote communities, Northern locations, or organizations operating across multiple provinces.',
  },
  {
    q: 'How quickly will I get a response?',
    a: 'Our team responds to enquiries within one business day. A free initial consultation is available to discuss your needs and confirm fit before any engagement begins.',
  },
  {
    q: 'Are proceedings accessible?',
    a: 'Yes. Accessibility is built into every proceeding from the start, not added at the last moment. This includes accessible virtual platforms, ASL interpreter integration, accessible documents, procedural accommodations for cognitive, neurological, and episodic disabilities, and flexible scheduling. Participants are encouraged to raise accommodation needs early. Planning for accommodations is standard practice at Dexterity Consulting, not a special request.',
  },
  {
    q: 'How do I get started?',
    a: 'Email andy@dexconsult.ca or call 1 (306) 713-3977 to arrange a free initial consultation. Our team will talk through your matter, confirm fit, and provide a clear quote for the work.',
  },
]

export default function Faq() {
  usePageMeta(
    'Frequently Asked Questions | Dexterity Consulting',
    'Answers to common questions about Dexterity Consulting services, virtual delivery, accessibility of proceedings, response times, and how to get started.',
  )

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
