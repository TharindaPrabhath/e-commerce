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
  events: {
    /*
     * This is called whenever a google account is linked
     * [Documentation](https://next-auth.js.org/configuration/events#linkaccount)
     */
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  ...authConfig,
});
