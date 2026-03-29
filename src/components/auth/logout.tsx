"use client";
import React from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/app/(auth)/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";

const Logout = () => {
  const router = useRouter();
  const onClick = async () => {
    const res = await logoutAction();
    if (res.success) {
      toast.success(res.message);
      router.push("/");
    } else {
      toast.error(res.message);
    }
  };
  return (
    <div className="flex gap-2" onClick={onClick}>
      <LogOut />
      Logout
    </div>
  );
};

export default Logout;
