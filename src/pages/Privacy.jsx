import usePageMeta from '../usePageMeta.js'
import { ROUTES } from '../seo.js'

const EMAIL = 'andy@dexconsult.ca'

export default function Privacy() {
  usePageMeta(ROUTES['/privacy'])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Your information</p>
          <h1>Privacy</h1>
          <p>How Dexterity Consulting handles the information you share with us.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="privacy-collect">
        <div className="container">
          <h2 id="privacy-collect">What we collect</h2>
          <p>
            If you use the contact form, we receive your name, email address, subject, and the
            message you write. If you email or phone us, we receive whatever you choose to share.
            We collect only what you choose to give us.
          </p>
          <p>
            At the time of writing, this site does not use advertising or tracking cookies, and it
            does not run analytics on visitors. If that changes, we will update this note.
          </p>

          <h2 id="privacy-brief">Please keep your first message brief</h2>
          <p>
            Please do not include confidential details about a dispute in the contact form or in a
            first email. A short description is enough. We may ask for more once we have checked
            for conflicts of interest and confirmed that we are the right fit for your matter.
          </p>

          <h2 id="privacy-use">How we use it, and your consent</h2>
          <p>
            By sending us a message, you agree that we may use it to reply to you, to check for
            conflicts of interest and fit, and to provide a quote. We do not sell your information,
            and we will not add you to a mailing list without your consent. We handle personal
            information in line with the Canadian privacy law that applies to our work.
          </p>

          <h2 id="privacy-where">Where it goes, and how we protect it</h2>
          <p>
            Messages sent through the contact form are delivered to us by email through third-party
            email delivery services, and those services may handle your message on servers outside
            Canada. If you prefer, you can email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{' '}
            <a href="tel:+13067133977">1 (306) 713-3977</a> instead of using the form.
          </p>
          <p>
            We take reasonable steps to protect the information we hold. No method of sending
            information over the internet or by email is completely secure, so please share only
            what you are comfortable sending this way.
          </p>
          <p>
            To display the site&rsquo;s fonts, your browser requests them from Google Fonts, which
            means Google receives your internet address when a page loads.
          </p>

          <h2 id="privacy-keep">How long we keep it, and our professional work</h2>
          <p>
            We keep enquiries only as long as needed to respond and to meet our legal and
            professional record-keeping obligations. If you become a client, your information is
            handled under the terms of our engagement agreement. The confidentiality that applies
            to mediation, arbitration, and investigation work is governed by that agreement and by
            the professional standards that apply to our work, not by this note.
          </p>

          <h2 id="privacy-choices">Your choices</h2>
          <p>
            You can ask to see the information we hold about you, ask us to correct it, or, where
            we are able to, ask us to delete it. Contact Andy Livingston, who is responsible for
            privacy at Dexterity Consulting, at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We aim to
            respond within 30 days. If you are not satisfied with our response, you may contact the{' '}
            <a href="https://www.priv.gc.ca/">Office of the Privacy Commissioner of Canada</a>.
          </p>

          <h2 id="privacy-formats">Other formats and updates</h2>
          <p>
            If you would like this note in another format, contact us and we will provide it. We
            may update this note from time to time, and the date below shows the latest version.
          </p>

          <p className="form-note">Last updated: 11 November 2026.</p>
        </div>
      </section>
    </>
  )
}
