import { Link } from 'react-router-dom'
import usePageMeta from '../usePageMeta.js'

export default function Team() {
  usePageMeta(
    'Mediator. Investigator. | Andy Livingston MA Q.MED Q.ARB | Dexterity Consulting',
    'Meet Andy Livingston, founder and CEO of Dexterity Consulting: Qualified Mediator, Qualified Arbitrator, and accessibility advocate based in Saskatoon.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Our team</p>
          <h1>Meet Andy</h1>
          <p>Mediator. Investigator. Accessibility advocate.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="company-heading">
        <div className="container">
          <div className="profile-grid">
            <div>
              <div className="profile-photo">
                <img
                  src="/images/andy-livingston.jpg"
                  alt="Andy Livingston, founder and CEO of Dexterity Consulting"
                  width="600"
                  height="750"
                />
              </div>
              <div className="profile-meta">
                <div className="name">Andy Livingston</div>
                <div className="role">Founder / CEO</div>
                <div className="creds">
                  <span>MA Sociology</span>
                  <span>Q.Med</span>
                  <span>Q.Arb</span>
                </div>
              </div>
            </div>

            <div>
              <p className="kicker">Dexterity Consulting</p>
              <h2 id="company-heading">Built to make dispute resolution accessible for all</h2>
              <p>
                Dexterity Consulting exists to make dispute resolution accessible for all.
                Established in 2017 by Andy Livingston, Dexterity Consulting specializes in
                mediation, arbitration, and parent coordination services.
              </p>
              <p>
                Dexterity works with parties looking to solve difficult issues via mediation or
                arbitration: two voluntary alternative dispute resolution processes that rely on the
                neutrality of a mediator or arbitrator. In mediation, the mediator helps both
                parties determine their own solution, while in arbitration, the arbitrator reviews
                the information presented by both sides and renders a decision that is binding on
                both parties.
              </p>
              <p>
                Dexterity also works with individuals, businesses, organizations, and governments to
                solve accessibility and accommodation issues.
              </p>
              <p>
                Accessibility involves allowing a person to enhance their experience or citizenship
                when participating in an activity, while accommodation is allowing someone to reach
                their full potential in whatever environment they choose by providing supports to
                enable that individual to excel and participate.
              </p>
              <p>
                Dexterity works with individuals and families to help improve the accessibility of
                their environments, including assisting people with disabilities and the aged who
                may need advice on what changes can make their homes more accessible. Dexterity also
                works with businesses, governments, organizations, employers, and educational
                institutions to help them accommodate people with disabilities by making their
                spaces more accessible and welcoming to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-deep" aria-labelledby="andy-heading">
        <div className="container">
          <p className="kicker">The person behind the practice</p>
          <h2 id="andy-heading">About Andy Livingston</h2>
          <p>
            Andy Livingston is the CEO of Dexterity Consulting. He is passionate about making
            dispute resolution accessible for all. His expertise, mediation skills and work on
            accessibility and accommodation issues are highly sought after.
          </p>
          <blockquote className="pull-quote">
            Born with cerebral palsy, Andy&rsquo;s parents were initially told by doctors that he
            would have difficulty integrating into society.
          </blockquote>
          <p>
            Despite this early assessment, Andy went on to graduate from the University of
            Saskatchewan with a Double Honours Bachelor of Arts in Political Science and Sociology,
            and a Masters Degree in Sociology. Andy brings a unique perspective of lived experience
            to his work. As a wheelchair user, he is able to easily relate to people with
            disabilities and to organizations trying to improve accessibility at all levels.
          </p>
          <p>
            During his time at the University of Saskatchewan, he participated in a number of groups
            aimed at making the campus more accessible for people with disabilities. Following his
            Masters Degree, Andy worked as an Investigator/facilitator with the Saskatchewan Human
            Rights Commission for nearly ten years. During this time, Andy led numerous multi-party
            mediations and facilitations.
          </p>
          <p>
            Over the last 20 years, Andy&rsquo;s career focused on helping people improve their
            citizenship within society by allowing them greater levels of participation within their
            chosen communities. During his tenure with the Human Rights Commission, Andy was
            instrumental in noteworthy accessibility projects including the new Mosaic Stadium in
            Regina, and work on accessible transit in Regina and Saskatoon.
          </p>
          <p>
            Andy holds the designations of Qualified Arbitrator (Q.Arb) and Qualified Mediator
            (Q.Med) which complement his years of experience in the human rights field. Andy is an
            instructor at Herzing College teaching a variety of dispute resolution courses focused
            on mediation and arbitration.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="affil-heading">
        <div className="container">
          <p className="kicker">Boards &amp; appointments</p>
          <h2 id="affil-heading">Affiliations</h2>
          <ul className="affiliations">
            <li>Board member, Alternative Dispute Resolution Saskatchewan</li>
            <li>Co-chair, Advisory Committee, Diversified Dispute Resolution Institute of Canada</li>
            <li>
              Vice-chair, Accessibility Standards Canada&rsquo;s Technical Committee for Employment
            </li>
            <li>
              Member, Online Dispute Resolution Committee, Alternative Dispute Resolution Canada
            </li>
            <li>Member, International Association of Accessibility Professionals</li>
            <li>Vice President, SaskAbilities</li>
            <li>
              Member, Provincial Income Assistance Advisory Group for Social Services (appointed by
              the Saskatchewan Minister of Social Services, June 2019)
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Work with Andy.</h2>
          <Link to="/contact" className="btn btn-amber">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
