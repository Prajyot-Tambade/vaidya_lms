"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface AuthActionResponse {
  success: boolean;
  message: string;
}

export const teacherSignupAction = async ({
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
        role: "teacher"
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

export const teacherLoginAction = async ({
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

export const teacherLogoutAction = async (): Promise<AuthActionResponse> => {
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

export const verifyTeacherEmailOTPAction = async ({
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