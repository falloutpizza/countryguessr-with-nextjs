import nodemailer from "nodemailer";

export default async function sendEmail({ email, emailType, userId }) {
  try {
    //TODO: config mail for usage

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOption = {
      from: '"Example Team" <team@example.com>',
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: "<b>Hello world?</b>",
    };

    console.log("Message sent: %s", info.messageId);

    const mailResponse = await transporter.sendMail(mailOption);
    return mailResponse;
  } catch (e) {
    throw new Error(error.message);
  }
}
