"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface AuthActionResponse {
  success: boolean;
  message: string;
}

export const signupAction = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthActionResponse> => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return {
      success: true,
      message: "Account created successfully!",
    };
  } catch (error: any) {
    console.error("Error while signup: ", error);
    return {
      success: false,
      message: error?.message || "Error while creating account!",
    };
  }
};

export const loginAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AuthActionResponse> => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      message: "Logged in successfully!",
    };
  } catch (error: any) {
    console.error("Error while signup: ", error);
    return {
      success: false,
      message: error?.message || "Error while logging in!",
    };
  }
};

export const logoutAction = async (): Promise<AuthActionResponse> => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return {
      success: true,
      message: "Logged out successfully!",
    };
  } catch (error: any) {
    console.error("Error while signup: ", error);
    return {
      success: false,
      message: error?.message || "Error while logging out!",
    };
  }
};

export const sendVerificationOTPAction = async ({
  email,
}: {
  email: string;
}): Promise<AuthActionResponse> => {
  try {
    await auth.api.sendVerificationOTP({
      body: {
        email,
        type: "email-verification",
      },
    });
    return {
      success: true,
      message: "OTP send in successfully!",
    };
  } catch (error: any) {
    console.error("Error sending OTP: ", error);
    return {
      success: false,
      message: error?.message || "Error while sending OTP!",
    };
  }
};

export const verifyEmailOTPAction = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}): Promise<AuthActionResponse> => {
  try {
    await auth.api.verifyEmailOTP({
      body: {
        email,
        otp,
      },
    });
    return {
      success: true,
      message: "Email verified successfully!",
    };
  } catch (error: any) {
    console.error("Error while verifying email: ", error);
    return {
      success: false,
      message: error?.message || "Error while verifying email!",
    };
  }
};
