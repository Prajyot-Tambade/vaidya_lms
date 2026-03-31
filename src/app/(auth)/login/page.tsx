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
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { loginAction, signupAction } from "../actions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const signupFormSchema = z.object({
  email: z.email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100)
    .regex(/[A-Z]/, "Must include at least one uppercase letter")
    .regex(/[a-z]/, "Must include at least one lowercase letter")
    .regex(/[0-9]/, "Must include at least one number")
    .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),
});

const SignupPage = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof signupFormSchema>) => {
    console.log("form Submitted");

    const email = data.email;
    const password = data.password;

    const res = await loginAction({ email, password });
    if (res.success) {
      toast.success(res.message);
      router.push("/login");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b border-border">
        <CardTitle>Login</CardTitle>
        <CardDescription>Login you account</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="signupform" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    required
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    type="password"
                    required
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          form="signupform"
          className="w-full"
        >
          {form.formState.isSubmitting ? "Loading..." : "Signup"}
        </Button>
        <div className="text-muted-foreground flex gap-1">
          <p>Don't have an account? </p>
          <Link
            href="/signup"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignupPage;
