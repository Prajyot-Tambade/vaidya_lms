"use client";
import { Button } from "@/components/ui/button";
import { sendMailtrapEmail } from "@/lib/mailtrap";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onClick = async () => {
    const res = await sendMailtrapEmail({
      email: "jehaye9348@fengnu.com",
      otp: "123456",
    });
    if (res.success) toast.success(res.message);
    else toast.error(res.message);
  };
  return (
    <section>
      <h2>AdminPage</h2>
      <Button onClick={onClick}>Send Email</Button>
    </section>
  );
};

export default AdminPage;
