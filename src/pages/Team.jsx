import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

export default function Team() {
  usePageMeta(
    'Arbitrator. Mediator. Investigator. | Andy Livingston BA(Hons) MA Q.Arb Q.Med | Dexterity Consulting',
    'Meet Andrew (Andy) Livingston, President and CEO of Dexterity Consulting: independent arbitrator, mediator, workplace investigator, and accessibility consultant based in Saskatoon.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Our team</p>
          <h1>Meet Andy</h1>
          <p>Arbitrator. Mediator. Workplace investigator. Accessibility consultant.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-heading">
        <div className="container">
          <div className="profile-grid">
            <div>
              <div className="profile-photo">
                <img
                  src="/images/andy-livingston.jpg"
                  alt="Andy Livingston, President and CEO of Dexterity Consulting"
                  width="600"
                  height="750"
                />
              </div>
              <div className="profile-meta">
                <div className="name">Andrew (Andy) Livingston</div>
                <div className="role">President &amp; CEO, Dexterity Consulting</div>
                <div className="creds">
                  <span>BA(Hons)</span>
                  <span>MA</span>
                  <span>Q.Arb</span>
                  <span>Q.Med</span>
                  <span>MCIArb</span>
                  <span>RHFAC Professional</span>
                </div>
              </div>
            </div>

            <div>
              <p className="kicker">President and CEO</p>
              <h2 id="intro-heading">
                Andrew (Andy) Livingston, BA(Hons), MA, Q.Arb, Q.Med
              </h2>
              <p>
                Andrew (Andy) Livingston is an independent arbitrator, mediator, workplace
                investigator, and accessibility consultant based in Saskatoon, Saskatchewan. He
                maintains a national practice serving organizations across Canada and globally.
              </p>
              <p>
                Andy has spent decades showing up as a volunteer, board member, and leader for
                organizations supporting people with disabilities across Saskatchewan. He served as
                President of SaskAbilities, as a board member with Easter Seals Canada, as a member
                of the Saskatchewan Aids to Independent Living (SAIL) Advisory Board under the
                Ministry of Health, and as a Board Member of the Saskatchewan Prevention Institute.
                These commitments represent decades invested in building a province where everyone
                can participate fully.
              </p>
              <blockquote className="pull-quote">
                Andy is a person with a disability. That lived experience grounds his accessibility
                and accommodation work, and shapes how he runs accessible dispute resolution
                proceedings. It is a credential, not a footnote.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="hrc-heading">
        <div className="container">
          <p className="kicker">The path here</p>
          <h2 id="hrc-heading">From the Human Rights Commission to Independent Practice</h2>
          <p>
            From 2008 to 2018, Andy worked as an Investigator and Facilitator with the Saskatchewan
            Human Rights Commission. He investigated complaints under every section of the
            Saskatchewan Human Rights Code: workplace harassment, discrimination, failure to
            accommodate, systemic investigations, multi-party negotiations between municipalities
            and marginalized communities, and everything in between.
          </p>
          <p>
            Andy launched Dexterity Consulting in 2019, bringing that experience into an independent
            practice with four interconnected service lines: accessibility consulting, workplace
            investigation, dispute resolution, and research and expert services.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="creds-heading">
        <div className="container">
          <p className="kicker">Qualifications</p>
          <h2 id="creds-heading">Credentials That Match the Work</h2>
          <p>
            Andy holds a Master of Arts in Sociology and a Bachelor of Arts with Double Honours in
            Political Science and Sociology, both from the University of Saskatchewan. He is a
            Qualified Arbitrator (Q.Arb) and Qualified Mediator (Q.Med) with the ADR Institute of
            Canada, and a Member of the Chartered Institute of Arbitrators (MCIArb). On the
            accessibility side, he is a Rick Hansen Foundation Accessibility Certification (RHFAC)
            Professional, qualified to formally rate buildings for accessibility. He holds an Online
            Dispute Resolution certificate from ADRIC and has completed advanced web accessibility
            training through Deque University.
          </p>
          <p>Andy teaches mediation and arbitration certification courses at Herzing College.</p>

          <h3>Appointments &amp; Memberships</h3>
          <ul className="affiliations">
            <li>
              Vice-Chair, Technical Committee on Employment, Accessibility Standards Canada (the
              federal body responsible for writing national accessibility standards)
            </li>
            <li>
              Adviser on disability and accessibility matters, Diversified Dispute Resolution
              Institute of Canada (DDRIC); member of the DDRIC arbitrator and mediator roster
            </li>
            <li>Member, ADRIC Online Dispute Resolution Committee</li>
            <li>Public Member, Adjudication Board, Law Society of Saskatchewan</li>
            <li>Member, International Association of Accessibility Professionals (IAAP)</li>
            <li>Member, ICC Accessibility Taskforce</li>
          </ul>
        </div>
      </section>

      <section className="section section-ink" aria-labelledby="connects-heading">
        <div className="container">
          <p className="kicker kicker--light">One practice, four lenses</p>
          <h2 id="connects-heading">Why It All Connects</h2>
          <p>
            The reason Dexterity Consulting&rsquo;s service lines make sense together isn&rsquo;t
            arbitrary. Workplace investigations routinely involve accommodation disputes and
            disability discrimination. Dispute resolution frequently touches human rights and
            workplace culture. Accessibility planning requires understanding what organizations are
            legally required to do and what it takes to get there. And research in these areas, done
            well, changes law, policy, and practice. Andy brings all four lenses to every
            engagement.
          </p>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="speaking-heading">
        <div className="container">
          <p className="kicker">Book Andy</p>
          <h2 id="speaking-heading">Speaking Engagements</h2>
          <p>
            Andy is available for keynote, panel, and workshop bookings on accessibility,
            accommodation, dispute resolution, and the intersection of disability and technology.
            Recent and prospective audiences include HR teams, ADR practitioners, post-secondary
            programs, and federal and provincial agencies. Email{' '}
            <a href="mailto:andy@dexconsult.ca">andy@dexconsult.ca</a> to inquire.
          </p>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Ready to talk about your organization&rsquo;s needs?</h2>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:andy@dexconsult.ca" className="btn btn-amber">
              Email Andy
            </a>
            <span className="cta-aside">
              or call <a href="tel:+13067133977">1 (306) 713-3977</a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
