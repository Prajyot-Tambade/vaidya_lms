import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { auth } from "./lib/auth";

const PUBLIC_PATHS = [
  "/",
  "/login",
  "/signup",
  "/verify-email",
  "/teacher/signup",
  "/teacher/login",
  "/teacher/verify-email",
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // const isPublicPath = PUBLIC_PATHS.includes(pathname);
  const isPublicPath = PUBLIC_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + "/"),
  );

  const sessionCookie = getSessionCookie(request);

  if (!isPublicPath && !sessionCookie) {
    if (pathname.startsWith("/teacher"))
      return NextResponse.redirect(new URL("/teacher/login", request.url));

    return NextResponse.redirect(new URL("/login", request.url));
  }

  let session = null;
  if (sessionCookie) {
    session = await auth.api.getSession({
      headers: request.headers,
    });
  }

  const role = session?.user?.role;

  if (isPublicPath && session) {
    if (!role || role === "user") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    if (role === "teacher") {
      return NextResponse.redirect(new URL("/teacher/dashboard", request.url));
    }
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  if (!isPublicPath) {
    if (pathname.startsWith("/dashboard")) {
      if (role !== "user" || !role) {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    if (pathname.startsWith("/admin")) {
      if (role !== "admin") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }

    if (pathname.startsWith("/teacher")) {
      if (role !== "teacher") {
        return NextResponse.redirect(new URL("/unauthorized", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
