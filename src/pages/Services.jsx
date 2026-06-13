import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

export default function Services() {
  usePageMeta(
    'Mediation, Arbitration or Investigative Services | Dexterity Consulting Saskatoon',
    'Mediation, arbitration, parent coordination, accessibility enhancements, sensitivity training, investigative services, and public speaking from Dexterity Consulting in Saskatoon.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">What we offer</p>
          <h1>Our Services</h1>
          <p>Five ways we help people and organizations find common ground.</p>
        </div>
      </section>

      <nav className="svc-subnav" aria-label="Services on this page">
        <div className="container">
          <ul>
            <li>
              <a href="#Mediation">Dispute Resolution</a>
            </li>
            <li>
              <a href="#AccessibilityEnhancements">Accessibility Enhancements</a>
            </li>
            <li>
              <a href="#SensitivityTraining">Sensitivity Training</a>
            </li>
            <li>
              <a href="#InvestigativeServices">Investigative Services</a>
            </li>
            <li>
              <a href="#PublicSpeaking">Public Speaking</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="svc-section" id="Mediation" aria-labelledby="dr-heading">
        <div className="container">
          <span className="num" aria-hidden="true">
            01
          </span>
          <h2 id="dr-heading">Dispute Resolution</h2>
          <p>Dexterity Consulting offers mediation, arbitration, and parent coordination services.</p>

          <div className="method-grid">
            <article className="method">
              <h3>Mediation</h3>
              <p>
                In mediation, two parties are brought together to negotiate a solution and are
                assisted by a neutral mediator. In this dispute resolution process, the mediator is
                not required to impose a settlement and has no decision making power. However,
                having a mediator ensures open communication between the two parties and more often
                than not, helps determine the final resolution or settlement. A mediator, according
                to the Canadian Bar Association, assists &ldquo;disputing parties in voluntarily
                reaching their own mutually acceptable settlement of issues in dispute.&rdquo;
              </p>
              <p>
                Successful mediations result in a signed agreement, which outlines future behaviour
                of each party (also known as a memorandum of understanding). This type of agreement
                has the force of a contract and is binding when signed.
              </p>
              <p>
                According to the Canadian Department of Justice, the following are specific
                highlights of this method:
              </p>
              <ul className="traits">
                <li>
                  <strong>VOLUNTARY:</strong> No party is forced to use a mediator, nor are they
                  forced to agree to a particular settlement.
                </li>
                <li>
                  <strong>NON-COERCIVE:</strong> The mediator does not decide for the parties, but
                  helps them make their own decision.
                </li>
                <li>
                  <strong>INFORMAL:</strong> The proceedings of mediation are more relaxed and
                  informal than those of a court or arbitration. There are no prescribed rules of
                  procedure and few rules other than those agreed to by the parties themselves.
                </li>
                <li>
                  <strong>CONFIDENTIAL:</strong> Generally, mediation is described as a confidential
                  process. It is up to the parties to jointly establish any limits. If it is decided
                  that the mediation should be confidential, the parties and the mediator will sign
                  a clause to that effect.
                </li>
              </ul>
            </article>

            <article className="method">
              <h3>Arbitration</h3>
              <p>
                Arbitration, one of the most popular and recognized dispute resolution processes, is
                more similar to litigation, in that it uses an adversarial approach that requires
                the neutral arbitrator to make a decision or impose a settlement. Arbitration is
                widely used in commercial disputes instead of litigation and is a binding,
                adjudicative process.
              </p>
              <p>
                Where arbitration differs from litigation is that it enables disputing parties to
                design the resolution process to fit their needs and the nature of the dispute. They
                are also able to choose an arbitrator.
              </p>
              <p>
                According to the Canadian Department of Justice, the specific highlights of this
                method include:
              </p>
              <ul className="traits">
                <li>
                  <strong>VOLUNTARY:</strong> Parties must expressly agree to arbitrate in writing.
                </li>
                <li>
                  <strong>PRIVATE &amp; CONFIDENTIAL:</strong> With a few exceptions, arbitrations
                  are conducted in private and the results are not published without express consent
                  of the parties.
                </li>
                <li>
                  <strong>ADJUDICATIVE:</strong> As in litigation, once each side has presented a
                  case, the arbitrator issues a decision.
                </li>
                <li>
                  <strong>EFFICIENT / QUICK:</strong> Since this process takes place outside of the
                  court system, the process can be started and resolved quickly.
                </li>
                <li>
                  <strong>FLEXIBLE:</strong> The parties are able to choose an arbitrator and the
                  procedure to be followed in resolving their dispute.
                </li>
                <li>
                  <strong>FINAL / BINDING:</strong> The arbitrator&rsquo;s decision is final and
                  binding, and court appeals are rare.
                </li>
              </ul>
            </article>

            <article className="method">
              <h3>Parent Coordination</h3>
              <p>
                Parent Coordination helps parents resolve day-to-day conflicts about their parenting
                arrangements or parenting orders.
              </p>
            </article>
          </div>

          <p className="sources">
            Sources: Government of Canada, Department of Justice; and Alternative Dispute Resolution
            Institute of Canada.
          </p>
        </div>
      </section>

      <section
        className="svc-section section-deep"
        id="AccessibilityEnhancements"
        aria-labelledby="ae-heading"
      >
        <div className="container">
          <span className="num" aria-hidden="true">
            02
          </span>
          <h2 id="ae-heading">Accessibility Enhancements</h2>
          <p>
            Dexterity Consulting works with individuals, businesses, organizations, educational
            institutions and governments to assist them in making physical spaces or services more
            accessible. Accessibility enhancements are not just physical: they can also include
            closed captioning, oral descriptions, websites, and more. This service could include:
          </p>
          <ul className="svc-list">
            <li>
              Building personal accessibility plans for individuals to make their residences more
              accessible;
            </li>
            <li>
              Developing plans to improve built and external environments (existing or new) using
              universal design concepts. This includes buildings, office space, public facilities,
              transportation, sidewalks, and more.
            </li>
            <li>
              Making recommendations to develop accessible websites that ensure all users have equal
              access to content and functionality.
            </li>
          </ul>
        </div>
      </section>

      <section className="svc-section" id="SensitivityTraining" aria-labelledby="st-heading">
        <div className="container">
          <span className="num" aria-hidden="true">
            03
          </span>
          <h2 id="st-heading">Sensitivity Training &amp; Education</h2>
          <p>
            This service involves working towards inclusive workplaces, home environments or schools
            by increasing understanding and thereby inclusiveness for all. Dexterity Consulting can
            deliver sensitivity training and education to reduce harassment and discrimination in
            the workplace or school setting. This type of training is often mandated or recommended
            by Human Resource departments.
          </p>
        </div>
      </section>

      <section
        className="svc-section section-deep"
        id="InvestigativeServices"
        aria-labelledby="is-heading"
      >
        <div className="container">
          <span className="num" aria-hidden="true">
            04
          </span>
          <h2 id="is-heading">Investigative Services</h2>
          <p>
            Dexterity Consulting provides balanced and neutral investigative services dealing with
            harassment, bullying, discrimination, or code of conduct violations with particular
            focus on those with disabilities.
          </p>
        </div>
      </section>

      <section className="svc-section" id="PublicSpeaking" aria-labelledby="ps-heading">
        <div className="container">
          <span className="num" aria-hidden="true">
            05
          </span>
          <h2 id="ps-heading">Public Speaking</h2>
          <p>
            Dexterity Consulting&rsquo;s CEO Andy Livingston is available to speak on a wide variety
            of topics related to experiencing disability and improving accessibility and
            accommodation.
          </p>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Start your accessibility journey with us.</h2>
          <Link to="/contact" className="btn btn-amber">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
