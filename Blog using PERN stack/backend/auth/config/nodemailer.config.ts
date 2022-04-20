import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.USER;
const password = process.env.MAIL_PASS;
const clientURL = process.env.CLIENT_URL;

const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  auth: {
    user: username,
    pass: password,
  },
});

export function SendConfirmationEmail(
  name: string,
  email: string,
  confirmationCode: string
) {
  transporter.sendMail({
    from: username,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=${clientURL}/add/verify/${confirmationCode}> Click here</a>
        </div>`,
  });
}

export function sendResetPasswordEmail(
  name: string,
  email: string,
  id: string,
  resetToken: string
) {
  transporter.sendMail({
    from: username,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Reset Password</h1>
        <h2>Hello ${name}</h2>
        <p>Please click on the following link to reset your password</p>
        <a href=${clientURL}/add/passwordReset/${id}?resetToken=${resetToken}> Click here</a>
        </div>`,
  });
}
