// /lib/auth.ts
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { PrismaClient } from "../db/generated/prisma";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Email", placeholder: "email@gmail.com", type: "text" },
        password: { label: "Password", placeholder: "your password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null;

        const existingUser = await prisma.user.findUnique({
          where: { email: credentials.username }
        });

        if (existingUser) {
          const comparePassword = await bcrypt.compare(credentials.password, existingUser.password);
          if (!comparePassword) return null;
        }

        if (!existingUser) {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const newUser = await prisma.user.create({
            data: { email: credentials.username, password: hashedPassword }
          });

          return {
            id: newUser.id.toString(),
            email: newUser.email
          };
        }

        return {
          id: existingUser.id.toString(),
          email: existingUser.email
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        //@ts-ignore
        session.user.id = token.id as string;
        session.user.image = token.picture as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        let existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        });
        if (!existingUser) {
          existingUser = await prisma.user.create({
            data: { email: user.email, password: "" }
          });
        }
        user.id = existingUser.id.toString();
      }
      return true;
    }
  }
};
