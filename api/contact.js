import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const SENDER_EMAIL = 'support@hypercast.store';

  try {
    // 1. Send Alert to Admin
    const adminEmail = await resend.emails.send({
      from: `Contact Form <${SENDER_EMAIL}>`,
      to: 'hypercast24@protonmail.com',
      reply_to: email, // Allow replying directly to the user
      subject: `📩 New Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #ccc;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
      `
    });

    if (adminEmail.error) {
      console.error("Resend Error:", adminEmail.error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact Server Error:', error);
    res.status(500).json({ message: 'Error processing request', error: error.message });
  }
}
