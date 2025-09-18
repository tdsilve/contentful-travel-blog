import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prisma";
import { compare } from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await prismadb.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }

        const isCorrectPassword = await compare(
          credentials.password as string,
          user.hashedPassword as string,
        );

        if (!isCorrectPassword) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET!,
});
