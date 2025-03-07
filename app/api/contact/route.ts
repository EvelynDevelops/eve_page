import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "@/components/contact/genertaeEmailTemplate";
export async function POST(req: NextRequest) {
  const { name, email,selectedOption, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: Number(process.env.SMTP_PORT), 
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

// get the message from the users
  const mailToYou = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `New message from ${name}`,
    text: message, 
  };

// Auto-reply to user
const authReply = {
  from: process.env.SMTP_USER,
  to: email,
  subject: `Thank you for contacting Evelyn`,
  html: generateEmailTemplate({ name, email,selectedOption, message })
};


  try {
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(authReply);
    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}