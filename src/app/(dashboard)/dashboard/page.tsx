"use client";
import React from "react";

import { authClient } from "@/lib/auth-client";

const page = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Welcome {data?.user.name}</h1>
    </div>
  );
};

export default page;
