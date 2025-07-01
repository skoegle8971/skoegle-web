import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();
  const { to, subject, text } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER_v1, // Gmail address
      pass: process.env.EMAIL_PASS_v1, // App-specific password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return Response.json({ success: true, info }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
