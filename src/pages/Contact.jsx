import { useState } from 'react'
import usePageMeta from '../usePageMeta.js'

const EMAIL = 'getStarted@DexConsult.ca'
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`

export default function Contact() {
  usePageMeta(
    'Contact Us by Email or Phone | Dexterity Consulting',
    'Contact Dexterity Consulting in Saskatoon by email at getStarted@DexConsult.ca or by phone at 1 (306) 713-3977.',
  )
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const sendViaFormSubmit = async () => {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject || '(none given)',
        message: form.message,
        _subject: `Website inquiry from ${form.name}`,
        _replyto: form.email,
        _template: 'table',
        _captcha: 'false',
      }),
    })
    const data = await res.json()
    return res.ok && String(data.success) === 'true'
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Preferred path: our own serverless function (Resend). Returns 503
      // until RESEND_API_KEY is configured, in which case we fall back to
      // the FormSubmit relay.
      let sent = false
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        })
        if (res.ok) {
          const data = await res.json().catch(() => ({}))
          sent = data.success === true
        } else if (res.status !== 503 && res.status !== 404) {
          // Function exists and failed hard; still try the relay below.
          sent = false
        }
      } catch {
        sent = false
      }
      if (!sent) {
        sent = await sendViaFormSubmit()
      }
      setStatus(sent ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Get in touch</p>
          <h1>Contact</h1>
          <p>Start your accessibility journey with us.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2 id="contact-heading" style={{ position: 'absolute', left: '-9999px' }}>
            Contact form and contact information
          </h2>
          <div className="contact-grid">
            <div aria-live="polite">
              {status === 'sent' ? (
                <div className="contact-form form-success">
                  <h3>Message received.</h3>
                  <p>
                    Thank you, {form.name || 'we have your message'}. You&rsquo;ll hear back within
                    one business day.
                  </p>
                  <p>
                    Need to add something? Email{' '}
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call{' '}
                    <a href="tel:+13067133977">1 (306) 713-3977</a>.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="field">
                    <label htmlFor="name">
                      Your Name <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={update}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">
                      Your Email <span className="req" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={update}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={update}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="message">
                      Your Message <span className="req" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="7"
                      required
                      value={form.message}
                      onChange={update}
                    />
                  </div>
                  {status === 'error' && (
                    <p className="form-error" role="alert">
                      Sorry, your message could not be sent. Your text is still here. Please try
                      again, or{' '}
                      <a
                        href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                          form.subject || `Website inquiry from ${form.name}`,
                        )}&body=${encodeURIComponent(
                          `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
                        )}`}
                      >
                        send it through your email app instead
                      </a>
                      .
                    </p>
                  )}
                  <button type="submit" className="btn btn-plum" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="form-note">
                    Your message goes straight to our inbox. We respond within one business day.
                  </p>
                </form>
              )}
            </div>

            <aside className="contact-card" aria-label="Contact information">
              <h2>Contact Info</h2>
              <p>
                Whether you are resolving a dispute or making a space more accessible, we would love
                to hear from you.
              </p>
              <div className="label">Email</div>
              <a className="big-link" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <div className="label">Phone</div>
              <a className="big-link" href="tel:+13067133977">
                1 (306) 713-3977
              </a>
              <div className="label">Location</div>
              <p>Saskatoon, Saskatchewan, Canada</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
