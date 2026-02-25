import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

const initializeTransporter = (): nodemailer.Transporter => {
  if (transporter) {
    return transporter;
  }

  const emailUser = process.env.OFFICE365_EMAIL;
  const emailPassword = process.env.OFFICE365_APP_PASSWORD;

  if (!emailUser || !emailPassword) {
    throw new Error('Missing Office365 email credentials in environment variables');
  }

  transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  return transporter;
};

export const sendContactEmail = async (
  data: ContactFormData
): Promise<EmailResponse> => {
  try {
    const transport = initializeTransporter();

    const emailTemplate = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0055FF; border-bottom: 2px solid #0055FF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0055FF;">
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">
              ${escapeHtml(data.message)}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="font-size: 12px; color: #999;">
            This email was sent from your Touch Vodka contact form.
            <br />
            Sent: ${new Date().toLocaleString()}
          </p>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.OFFICE365_EMAIL,
      to: process.env.CONTACT_RECIPIENT_EMAIL || 'info@fatdogspirits.com',
      replyTo: data.email,
      subject: `[Contact Form] ${data.subject}`,
      html: emailTemplate,
      text: `New contact form submission from ${data.name} (${data.email}):\n\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
    };

    const info = await transport.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!',
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
    };
  }
};

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};
