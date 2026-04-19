import nodemailer from "nodemailer";
import { v4 as uuid } from "uuid";
import User from "@/src/models/userSchema";
const { MailtrapTransport } = require("mailtrap");

export default async function sendEmail({ email, emailType, userId }) {
  try {
    const token = uuid();
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 6 * 60 * 60 * 1000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: token,
        forgotPasswordExpiry: Date.now() + 6 * 60 * 60 * 1000,
      });
    }

    const transporter = nodemailer.createTransport(
      MailtrapTransport({
        token: "847c75cef929e471dd908425312124c0", //put in env variable
      }),
    );

    const mailOption = {
      from: "piizzzzaa123@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: "<p>Hello world?</p>", //change text lol
    };

    console.log("Message sent: %s", info.messageId);

    const mailResponse = await transporter.sendMail(mailOption);
    return mailResponse;
  } catch (e) {
    throw new Error(error.message);
  }
}
