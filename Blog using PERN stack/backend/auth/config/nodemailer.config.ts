import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.USER;
const password = process.env.MAIL_PASS;

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
  console.log("nodemailer reached");
  console.log("username:", username);
  console.log("passowrd", password);
  console.log(email);
  transporter.sendMail({
    from: username,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:5000/add/verify/${confirmationCode}> Click here</a>
        </div>`,
  });
}
