import { dbConnect } from "@/db/dbConfig";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { admin, emailOTP } from "better-auth/plugins";
import { resend } from "./resend";
import VerifyEmail from "@/components/auth/verifyEmailTemplate";
import { sendMailtrapEmail } from "./mailtrap";

const { client, db } = await dbConnect();

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  user: {
    additionalFields: {
      role: {
        type: 'string', 
        required: true, 
        defaultValue: 'user',
      },
    },
  },
  plugins: [
    nextCookies(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          // const { data, error } = await resend.emails.send({
          //   from: "Vaidya LMS <onboarding@resend.dev>",
          //   to: [email],
          //   subject: "Vaidya LMS - Verify your email",
          //   react: VerifyEmail({ otp }),
          // });
          // if (error) throw error;
          sendMailtrapEmail({email, otp})
        }
      },
      sendVerificationOnSignUp: true,
      expiresIn: 600,
    }),
    admin({
      defaultRole: "user",
      adminUserIds: ["69cb5c66982468f6a83b84fe"],
    }),
  ],
});
