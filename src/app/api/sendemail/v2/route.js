import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { to, subject, text } = body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in', // or smtp.zoho.com if you're outside India
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER_v2,
      pass: process.env.EMAIL_PASS_v2,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER_v2,
    to,
    subject,
    text, // only plain text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return Response.json({ success: true, info }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
