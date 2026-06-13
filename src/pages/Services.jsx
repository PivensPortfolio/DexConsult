import usePageMeta from '../usePageMeta.js'

const EMAIL = 'andy@dexconsult.ca'
const PHONE = '1 (306) 713-3977'
const PHONE_HREF = 'tel:+13067133977'

function SectionCta({ lead }) {
  return (
    <div className="svc-cta">
      <p>{lead}</p>
      <a className="btn btn-plum" href={`mailto:${EMAIL}`}>
        Book a free consultation
      </a>
      <span className="cta-aside">
        or call <a href={PHONE_HREF}>{PHONE}</a>
      </span>
    </div>
  )
}

function Rail({ num, label }) {
  return (
    <div className="rail">
      <span className="num" aria-hidden="true">
        {num}
      </span>
      <p className="kicker">{label}</p>
    </div>
  )
}

export default function Services() {
  usePageMeta(
    'Accessibility Consulting, Workplace Investigation, Dispute Resolution | Dexterity Consulting',
    'Four service lines: accessibility consulting, workplace investigation, dispute resolution (mediation, arbitration, med-arb), and research and expert services. Saskatoon-based, national reach.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">What we offer</p>
          <h1>Our Services</h1>
          <p>Four service lines. One practice. Every engagement gets all four lenses.</p>
        </div>
      </section>

      <nav className="svc-subnav" aria-label="Services on this page">
        <div className="container">
          <ul>
            <li>
              <a href="#AccessibilityConsulting">Accessibility Consulting</a>
            </li>
            <li>
              <a href="#WorkplaceInvestigation">Workplace Investigation</a>
            </li>
            <li>
              <a href="#DisputeResolution">Dispute Resolution</a>
            </li>
            <li>
              <a href="#ResearchExpertServices">Research &amp; Expert Services</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="svc-section" id="AccessibilityConsulting" aria-labelledby="ac-heading">
        {/* Legacy anchors from the previous site structure */}
        <span id="AccessibilityEnhancements" aria-hidden="true" />
        <span id="SensitivityTraining" aria-hidden="true" />
        <div className="container rail-grid">
          <Rail num="01" label="Service" />
          <div>
            <h2 id="ac-heading">Accessibility Consulting</h2>
            <p className="svc-tagline">
              Building a more accessible organization. For real, not just on paper.
            </p>
            <p className="best-for">
              <strong>Best for:</strong> municipalities, school divisions, Crown corporations, and
              federally regulated employers.
            </p>
            <p>
              The Accessible Saskatchewan Act came into force on December 3, 2023. The Accessible
              Canada Act has been federal law since 2019. For municipalities, school divisions,
              Crown corporations, and federally regulated employers, accessibility planning is no
              longer optional. But compliance is the floor, not the ceiling. Dexterity Consulting
              helps organizations move from obligation to genuine inclusion, with the research, the
              strategy, and the practical tools to do it well.
            </p>

            <h3>What We Offer</h3>
            <div className="method-grid">
              <article className="method">
                <h4>Accessibility Plan Development</h4>
                <p>
                  Dexterity Consulting guides organizations through the full process of developing
                  an accessibility plan that meets legislative requirements under the Accessible
                  Saskatchewan Act (ASA), Accessible Canada Act (ACA) or any applicable legislation
                  to your location, and reflects the experiences of people with disabilities in your
                  community. This includes environmental scans, stakeholder engagement, barrier
                  identification, and a clear, prioritized action plan.
                </p>
              </article>
              <article className="method">
                <h4>Accessibility Audits</h4>
                <p>
                  As an RHFAC Professional, Andy is formally qualified to rate buildings for
                  accessibility. Dexterity Consulting also conducts web accessibility audits using
                  WCAG 2.1 and 2.2 standards, evaluates documents and digital materials for
                  accessibility compliance, and assesses online dispute resolution platforms against
                  Canada&rsquo;s new CAN-ASC-6.2:2025 AI accessibility standard. You get a clear,
                  practical report, not a checklist. Audit work to date has covered municipal,
                  provincial, federal, private sector, and post-secondary clients.
                </p>
              </article>
              <article className="method">
                <h4>Community Engagement and Consultation</h4>
                <p>
                  Accessibility plans developed without input from people with lived experience miss
                  the point. Dexterity Consulting designs and facilitates focus groups, community
                  surveys, and stakeholder interviews, drawing out perspectives from people with
                  physical, sensory, intellectual, neurological, and mental health disabilities.
                  Various methodologies can be used grounded in the &ldquo;nothing about us without
                  us&rdquo; principle.
                </p>
              </article>
              <article className="method">
                <h4>Environmental Scans and Benchmarking</h4>
                <p>
                  Before you build your plan, know what&rsquo;s working elsewhere. Dexterity
                  Consulting researches how comparable municipalities, school divisions, or
                  organizations have approached accessibility planning, identifying best practices,
                  common gaps, and what produces results.
                </p>
              </article>
              <article className="method">
                <h4>Training and Toolkits</h4>
                <p>
                  Dexterity Consulting develops accessible, plain-language guides, toolkits, and
                  training materials for staff and leadership, including training on the duty to
                  accommodate, the Accessible Canada Act, and the Accessible Saskatchewan Act.
                </p>
              </article>
              <article className="method">
                <h4>Standards Consulting</h4>
                <p>
                  As Vice-Chair of the Technical Committee on Employment for Accessibility Standards
                  Canada, Andy has direct experience developing national accessibility standards.
                  Dexterity Consulting helps organizations understand and prepare for emerging
                  standards before they become requirements.
                </p>
              </article>
            </div>

            <SectionCta lead="Let's talk about your accessibility plan." />
          </div>
        </div>
      </section>

      <section
        className="svc-section section-deep"
        id="WorkplaceInvestigation"
        aria-labelledby="wi-heading"
      >
        <span id="InvestigativeServices" aria-hidden="true" />
        <div className="container rail-grid">
          <Rail num="02" label="Service" />
          <div>
            <h2 id="wi-heading">Workplace Investigation</h2>
            <p className="svc-tagline">Independent. Thorough. Done right.</p>
            <p className="best-for">
              <strong>Best for:</strong> HR leaders, in-house and external counsel, boards, and
              unions.
            </p>
            <p>
              When a serious complaint lands on your desk (harassment, discrimination, a code of
              conduct violation) the way you respond matters. A credible, independent investigation
              protects your employees, your organization, and your legal standing. A flawed one
              creates liability. Dexterity Consulting conducts independent, third-party workplace
              investigations with the procedural fairness, rigour, and sensitivity these situations
              require.
            </p>

            <h3>Types of Investigations We Handle</h3>
            <ul className="type-chips">
              <li>Workplace harassment and bullying</li>
              <li>Sexual harassment</li>
              <li>Human rights complaints</li>
              <li>Discrimination</li>
              <li>Failure to accommodate</li>
              <li>Disability-related complaints</li>
              <li>Code of conduct and policy violations</li>
              <li>Equity, diversity, and inclusion complaints</li>
              <li>Toxic workplace and systemic culture reviews</li>
              <li>Conflict of interest investigations</li>
              <li>Whistleblower complaints</li>
            </ul>
            <p>
              Whether the complaint involves one incident or a pattern of behaviour (whether it
              involves a frontline employee or a senior leader) the process is the same: thorough,
              fair, and documented.
            </p>

            <h3>Our Process</h3>
            <p>
              Our team follows a structured accessible investigation process with flexibility built
              in to meet the client&rsquo;s needs.
            </p>

            <div className="feature-grid">
              <article className="feature">
                <h4>Accessibility expertise most investigators don&rsquo;t have</h4>
                <p>
                  A significant portion of workplace complaints involve accommodation requests,
                  disability discrimination, or barriers to full participation. Most investigators
                  treat these as generic human rights complaints. Andy brings substantive specialist
                  knowledge of accessibility law, the Accessible Canada Act, the Canadian Human
                  Rights Act, accommodation standards, and what procedural fairness requires for
                  participants with disabilities. That expertise is uncommon in the Canadian
                  investigation community.
                </p>
              </article>
              <article className="feature">
                <h4>A decade at the Saskatchewan Human Rights Commission</h4>
                <p>
                  Andy spent a decade investigating complaints under every section of the
                  Saskatchewan Human Rights Code, including systemic investigations and multi-party
                  negotiations. That experience is the foundation of every investigation Dexterity
                  Consulting conducts.
                </p>
              </article>
              <article className="feature">
                <h4>Virtual-ready, with national reach</h4>
                <p>
                  All services are available through secure virtual platforms. For remote
                  communities, Northern locations, or federally regulated organizations across
                  multiple provinces, virtual delivery means no travel delays and no added cost.
                </p>
              </article>
              <article className="feature">
                <h4>Saskatchewan-based, competitive rates</h4>
                <p>
                  Without the overhead of a large urban practice, Dexterity Consulting delivers
                  thorough, credentialed investigation services at rates competitive nationally.
                </p>
              </article>
            </div>

            <SectionCta lead="Facing a complaint that needs independent investigation?" />
          </div>
        </div>
      </section>

      <section className="svc-section" id="DisputeResolution" aria-labelledby="dr-heading">
        <span id="Mediation" aria-hidden="true" />
        <div className="container rail-grid">
          <Rail num="03" label="Service" />
          <div>
            <h2 id="dr-heading">Dispute Resolution</h2>
            <p className="svc-tagline">Resolve it. Move forward.</p>
            <p className="best-for">
              <strong>Best for:</strong> counsel, unions, employers, and separating families.
            </p>

            <h3>Services Offered</h3>
            <div className="method-grid">
              <article className="method">
                <h4>Mediation</h4>
                <p>
                  A facilitated process where a neutral mediator helps parties communicate, identify
                  interests, and reach a mutually acceptable resolution. Mediation is voluntary,
                  confidential, and (when it works) faster and less adversarial than any other
                  option. Our team uses both facilitative and evaluative approaches, depending on
                  what the situation requires.
                </p>
              </article>
              <article className="method">
                <h4>Arbitration</h4>
                <p>
                  A structured, adjudicative process where an arbitrator hears evidence and argument
                  from both parties and issues a binding decision. Andy is available for sole
                  arbitrator and panel member appointments in labour and employment matters,
                  including:
                </p>
                <p className="list-label">Appointment types</p>
                <ul>
                  <li>Grievance arbitration</li>
                  <li>Unjust dismissal</li>
                  <li>Disciplinary appeals</li>
                  <li>Wage recovery</li>
                  <li>Human rights-based disputes</li>
                  <li>Accommodation grievances</li>
                </ul>
                <p>
                  Andy&rsquo;s arbitration practice is grounded in continuous study of the craft and
                  active teaching at the certificate level. He is a careful student and teacher of
                  arbitration with adjudicative work where it fits, rather than a high-volume
                  appointment practice.
                </p>
              </article>
              <article className="method">
                <h4>Med-Arb</h4>
                <p>
                  A hybrid process that begins as mediation and transitions to arbitration if
                  agreement isn&rsquo;t reached. Med-arb offers parties the efficiency and
                  relationship-preservation of mediation with the finality of a binding decision if
                  needed.
                </p>
              </article>
              <article className="method">
                <h4>Family Mediation</h4>
                <p>
                  A voluntary, confidential process for separating or divorcing families to reach
                  agreements on parenting arrangements, property division, and child or spousal
                  support without going to court. Andy uses an interest-based facilitative approach,
                  working with both parents jointly or in separate sessions where conflict warrants.
                  Family mediation is faster, less adversarial, and produces more durable agreements
                  than litigated outcomes. Independent legal advice for each party is encouraged
                  before any agreement is finalized.
                </p>
              </article>
              <article className="method">
                <h4>Parent Coordination</h4>
                <p>
                  An ongoing dispute resolution service for high-conflict co-parents who have an
                  existing parenting plan or court order but continue to struggle with day-to-day
                  decision-making. The parent coordinator helps implement the parenting plan,
                  mediates disputes as they arise, and where the parties have agreed, makes binding
                  decisions on specific issues within the scope of the plan. Parent coordination is
                  most useful where ongoing communication between co-parents has broken down but the
                  underlying parenting arrangement is workable.
                </p>
              </article>
              <article className="method">
                <h4>Online Dispute Resolution (ODR)</h4>
                <p>
                  All Dexterity Consulting services are available through secure virtual platforms.
                  Andy holds an ODR certificate from ADRIC and serves on the ADRIC ODR Committee.
                  Virtual proceedings are available for all Canadian jurisdictions and globally.
                </p>
              </article>
            </div>

            <SectionCta lead="Looking for a neutral you can count on?" />
          </div>
        </div>
      </section>

      <section
        className="svc-section section-deep"
        id="ResearchExpertServices"
        aria-labelledby="re-heading"
      >
        <span id="PublicSpeaking" aria-hidden="true" />
        <div className="container rail-grid">
          <Rail num="04" label="Service" />
          <div>
            <h2 id="re-heading">Research and Expert Services</h2>
            <p className="svc-tagline">
              Evidence for the cases that matter. Analysis that holds up.
            </p>
            <p className="best-for">
              <strong>Best for:</strong> litigation counsel, government and regulators, ADR
              organizations, and academic partners.
            </p>
            <p>
              Fifteen years of practice at the intersection of disability accommodation, human
              rights, and dispute resolution produces something most consultants don&rsquo;t have: a
              research base built on real cases, real decisions, and real data, not theoretical
              models.
            </p>

            <div className="method-grid">
              <article className="method">
                <h4>Expert Witness and Litigation Support</h4>
                <p>
                  Dexterity Consulting provides expert opinion and litigation support services in
                  disability accommodation, employment accessibility, human rights complaint
                  processes, and alternative dispute resolution procedure. Services include written
                  expert reports, reviewing opposing expert opinions, and oral testimony.
                </p>
                <p className="list-label">Areas of expert opinion</p>
                <ul>
                  <li>The duty to accommodate under Canadian human rights legislation</li>
                  <li>Whether an accommodation process met the standard required by law</li>
                  <li>
                    Accessibility standards applicable to workplaces, programs, and services under
                    the Accessible Canada Act and Accessible Saskatchewan Act
                  </li>
                  <li>ADR procedural standards and practitioner obligations</li>
                  <li>Best practices in workplace investigation</li>
                </ul>
              </article>
              <article className="method">
                <h4>Applied Research</h4>
                <p>
                  Dexterity Consulting conducts applied research on disability accommodation,
                  accessibility, and dispute resolution, directly applicable to policy, law, and
                  organizational practice.
                </p>
                <p className="list-label">Current research areas</p>
                <ul>
                  <li>Disability accommodation in Canadian grievance arbitration</li>
                  <li>Online dispute resolution platform accessibility</li>
                  <li>Episodic disability and the accommodation framework</li>
                  <li>Intersectional barriers in Canadian workplace accommodation and ADR</li>
                  <li>Assistive technology accommodation in Canadian workplaces</li>
                  <li>Accessible dispute system design</li>
                </ul>
              </article>
              <article className="method">
                <h4>Knowledge Translation and Policy Work</h4>
                <p>
                  Dexterity Consulting translates research into practical tools organizations can
                  use: accommodation frameworks, accessibility checklists, practitioner training
                  curricula, and policy briefs for government agencies and regulatory bodies.
                </p>
              </article>
              <article className="method">
                <h4>ADR Training and Curriculum Development</h4>
                <p>
                  Dexterity Consulting develops and delivers training on dispute resolution,
                  accommodation law, accessibility, and human rights. Our team also develops
                  curriculum, case studies, and exercises for ADR practitioners and HR
                  professionals.
                </p>
              </article>
            </div>

            <SectionCta lead="Looking for expert support on a case, a research project, or a training initiative?" />
          </div>
        </div>
      </section>
    </>
  )
}
