import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl">Welcome to the Vaidya LMS</h1>
      <div className="flex gap-2">
        <Link href="signup" className={buttonVariants()}>Sign Up</Link>
        <Link href="login" className={buttonVariants()}>Login</Link>
      </div>
    </section>
  );
}
