import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) session.user.id = token.sub;
      return session;
    },

    async jwt({ token }) {
      return token;
    },
  },
  ...authConfig,
});
