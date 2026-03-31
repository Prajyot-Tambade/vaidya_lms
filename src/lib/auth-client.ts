import { createAuthClient } from "better-auth/react";
import { emailOTPClient } from "better-auth/client/plugins";
import { plugin } from "mongoose";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [emailOTPClient()],
});
