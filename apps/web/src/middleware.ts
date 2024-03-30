import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  ApiAuthPrefix,
  AuthRoutes,
  DEFAULT_LOGIN_REDIRECT,
  LOGIN_ROUTE,
  PublicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiRoute = nextUrl.pathname.startsWith(ApiAuthPrefix);
  const isPublicRoute = PublicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = AuthRoutes.includes(nextUrl.pathname);

  if (isApiRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    return;
  }

  if (!isLoggedIn && !isPublicRoute)
    return Response.redirect(new URL(LOGIN_ROUTE, nextUrl));

  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
