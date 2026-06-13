import { useState } from 'react'
import usePageMeta from '../usePageMeta.js'

const EMAIL = 'getStarted@DexConsult.ca'

export default function Contact() {
  usePageMeta(
    'Contact Us by Email or Phone | Dexterity Consulting',
    'Contact Dexterity Consulting in Saskatoon by email at getStarted@DexConsult.ca or by phone at 1 (306) 713-3977. Free initial consultation, response within one business day.',
  )
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Website inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="kicker kicker--light">Get in touch</p>
          <h1>Contact</h1>
          <p>
            Whether you are resolving a dispute, facing a complaint, or making a space more
            accessible, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-heading">
        <div className="container">
          <h2
            id="contact-heading"
            style={{ position: 'absolute', left: '-9999px' }}
          >
            Contact form and contact information
          </h2>

          <div className="assurance" aria-label="What to expect">
            <span>All inquiries are confidential.</span>
            <span>Response within one business day.</span>
            <span>Free initial consultation.</span>
          </div>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={submit}>
              <div className="field">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="subject">
                  Subject <span className="optional">(optional)</span>
                </label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={update} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  required
                  value={form.message}
                  onChange={update}
                />
              </div>
              <p className="form-note">
                Submitting opens your email app with your message ready to send. Prefer to write
                directly? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
              <button type="submit" className="btn btn-plum">
                Open in your email app
              </button>
            </form>

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
