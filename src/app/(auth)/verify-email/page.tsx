"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import React, { useState } from "react";
import { verifyEmailOTPAction } from "../actions";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

const VerifyOTPPage = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const router = useRouter();

  const encodedEmail = params.get("email") || "";

  const email = decodeURIComponent(encodedEmail);

  const verifyOTP = async () => {
    try {
      if (otp.length === 0 || email?.length === 0) return;
      setLoading(true);
      const res = await verifyEmailOTPAction({ email, otp });
      if (res.success) {
        toast.success(res.message);
        router.push("/login");
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      toast.error(error?.message || "Error while email verification");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b border-border">
        <CardTitle>Verify your email</CardTitle>
        <CardDescription>Enter your OTP here</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground">Enter your one-time password.</p>
        {email && <p className="text-muted-foreground">{email}</p>}
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(otp) => setOtp(otp)}
          pattern={REGEXP_ONLY_DIGITS}
          required
        >
          <InputOTPGroup className="*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-muted-foreground">Expires in 10 minutes.</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={verifyOTP} className="w-full">
          {loading ? "Loading..." : "Verify OTP"}
        </Button>
        <div className="text-muted-foreground flex gap-1">
          <p>Didn't receive OTP? </p>
          <p className="underline underline-offset-2 hover:text-foreground cursor-pointer">
            Resend OTP
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default VerifyOTPPage;
