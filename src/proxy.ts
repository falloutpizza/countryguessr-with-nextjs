import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const user = request.cookies.get("user");
  if (request.url === `${process.env.DOMAIN}/my-account` && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.url === `${process.env.DOMAIN}/login` && user) {
    return NextResponse.redirect(new URL("/my-account", request.url));
  }
  if (request.url === `${process.env.DOMAIN}/signup` && user) {
    return NextResponse.redirect(new URL("/my-account", request.url));
  }
  if (request.url === `${process.env.DOMAIN}/verify-email` && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.url === `${process.env.DOMAIN}/reset-password` && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/my-account",
    "/login",
    "/signup",
    "/verify-email",
    "/reset-password",
  ],
};
