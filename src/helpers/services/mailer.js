import nodemailer from "nodemailer";
import { v4 as uuid } from "uuid";
import User from "@/src/models/userSchema";

export default async function sendEmail({ email, emailType, userId }) {
  try {
    const token = uuid();
    let text;
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 6 * 60 * 60 * 1000,
      });
      text = `<p>thanks for signing up for countryguessr dot com! to verify your account, <a href = "${process.env.DOMAIN}/verify-email?token=${token}">click here</a> or copy paste the following link into your browser: <br> ${process.env.DOMAIN}/verify-email?token=${token}</p>`;
    } else if (emailType === "RESET") {
      await User.findOneAndUpdate(
        { email },
        {
          forgotPasswordToken: token,
          forgotPasswordExpiry: Date.now() + 6 * 60 * 60 * 1000,
        },
      );
      text = `<p>to reset your password, <a href = "${process.env.DOMAIN}/reset-password?token=${token}">click here</a> or copy paste the following link into your browser: <br> ${process.env.DOMAIN}/reset-password?token=${token}</p>`;
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "9d2f1469435e88",
        pass: "29925b58df4f89",
      },
    });

    const mailOption = {
      from: "piizzzzaa123@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: text,
    };

    const mailResponse = await transport.sendMail(mailOption);
    return mailResponse;
  } catch (e) {
    throw new Error(e.message);
  }
}
