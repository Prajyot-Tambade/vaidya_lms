"use server";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { VerifyEmail } from "@/components/auth/verifyEmailTemplate";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER!,
    pass: process.env.MAILTRAP_PASS!,
  },
});

interface MailtrapAPiResponse {
  success: boolean;
  message: string;
}

interface MailtrapAPiProps {
  to: string;
  subject: string;
}

export const sendMailtrapEmail = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}): Promise<MailtrapAPiResponse> => {
  try {
    const emailHtml = await render(<VerifyEmail otp={otp} />);

    transport.sendMail({
      from: "vaidya@lms.com",
      to: email,
      subject: "Vaidya LMS - Verify your email",
      html: emailHtml,
    });
    return {
      success: true,
      message: "Email send successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Error while sending email",
    };
  }
};
