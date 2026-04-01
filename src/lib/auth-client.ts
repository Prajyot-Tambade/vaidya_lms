import { createAuthClient } from "better-auth/react";
import {
  emailOTPClient,
  inferAdditionalFields,
} from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.BASE_URL,
  plugins: [emailOTPClient(), inferAdditionalFields<typeof auth>()],
});
