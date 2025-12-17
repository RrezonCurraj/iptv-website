import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, plan, price, referenceCode, transactionId } = req.body;
  
  // Initialize Resend with your API Key
  const resend = new Resend(process.env.RESEND_API_KEY);


  const SENDER_EMAIL = 'support@hypercast.store'; 



  try {
    // 1. Email to Customer
    const customerEmail = await resend.emails.send({
      from: `HyperCast Support <${SENDER_EMAIL}>`,
      to: email, 
      subject: `Order Confirmation - ${referenceCode}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center;">Payment Successful!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to <strong>HyperCast</strong>. We have received your payment for the <strong>${plan}</strong> plan.</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Reference Code:</strong> ${referenceCode}</p>
            <p style="margin: 5px 0;"><strong>Transaction ID:</strong> ${transactionId}</p>
            <p style="margin: 5px 0;"><strong>Amount Paid:</strong> €${price}</p>
          </div>

          <p><strong>What happens next?</strong></p>
          <p>Our team is currently generating your secure playlist. You will receive a separate email with your <strong>Username, Password, and M3U Link</strong> within the next 2-12 hours.</p>
          
          <p>If you have any questions, simply reply to this email.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #888; text-align: center;">&copy; ${new Date().getFullYear()} HyperCast. All rights reserved.</p>
        </div>
      `
    });

    // 2. Alert Email to YOU (The Admin)
    // Replace 'your-personal-email@gmail.com' with where you want to receive alerts
    const adminEmail = await resend.emails.send({
      from: `HyperCast Bot <${SENDER_EMAIL}>`,
      to: 'hypercast24@protonmail.com', // Updated to your ProtonMail
      subject: `💰 NEW SALE: €${price} (${plan})`,
      html: `
        <h2>New Order Received</h2>
        <ul>
          <li><strong>Plan:</strong> ${plan}</li>
          <li><strong>Price:</strong> €${price}</li>
          <li><strong>Customer Email:</strong> ${email}</li>
          <li><strong>Ref Code:</strong> ${referenceCode}</li>
          <li><strong>Transaction ID:</strong> ${transactionId}</li>
        </ul>
        <p>Login to your panel, generate the line, and email the customer!</p>
      `
    });

    if (customerEmail.error || adminEmail.error) {
       console.error("Resend Error:", customerEmail.error, adminEmail.error);
       return res.status(500).json({ error: 'Failed to send email' });
    }

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email Server Error:', error);
    res.status(500).json({ message: 'Error sending emails', error: error.message });
  }
}
