// Vercel serverless function: contact form submission via Resend.
// Activates automatically once RESEND_API_KEY is set in the Vercel project.
// Until then it returns 503 and the frontend falls back to FormSubmit.
//
// Env vars:
//   RESEND_API_KEY  (required to activate)
//   CONTACT_TO      optional, default andy@dexconsult.ca
//   CONTACT_FROM    optional, default "DexConsult Website <noreply@dexconsult.ca>"
//                   (the from domain must be verified in Resend)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, subject, message, _honey, elapsedMs } = req.body || {}

  // Spam guards: a hidden honeypot field a human never sees, plus a minimum
  // fill time. Bots trip one or the other. Return a success shape so the bot
  // does not learn it was blocked; nothing is sent and no inbox is bothered.
  if (_honey) {
    return res.status(200).json({ success: true })
  }
  if (typeof elapsedMs === 'number' && elapsedMs >= 0 && elapsedMs < 2000) {
    return res.status(200).json({ success: true })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) {
    return res.status(503).json({ success: false, configured: false })
  }

  const to = process.env.CONTACT_TO || 'andy@dexconsult.ca'
  const from = process.env.CONTACT_FROM || 'DexConsult Website <noreply@dexconsult.ca>'

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: subject ? `${subject} (website inquiry from ${name})` : `Website inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none given)'}\n\n${message}`,
      }),
    })

    if (r.ok) {
      return res.status(200).json({ success: true })
    }

    // Log the provider's real reason, and the full submission, so a failed
    // enquiry is always recoverable from the Vercel function logs.
    const detail = await r.text().catch(() => '')
    console.error('[contact] Resend send failed', { status: r.status, to, from, detail })
    console.error('[contact] undelivered submission', { name, email, subject, message })
    return res.status(502).json({ success: false, error: 'Email send failed' })
  } catch (err) {
    console.error('[contact] send threw', {
      to,
      from,
      message: err instanceof Error ? err.message : String(err),
    })
    console.error('[contact] undelivered submission', { name, email, subject, message })
    return res.status(502).json({ success: false, error: 'Email send failed' })
  }
}
