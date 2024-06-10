import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "email@example.com",
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Hacen falta credenciales");
        }

        const userFound = await db.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!userFound) throw new Error("No user found");
        const matchPassword = await bcrypt.compare(
          credentials?.password,
          userFound.password
        );
        console.log(userFound);

        if (!matchPassword) throw new Error("Wrong password");
        return {
          id: userFound.id.toString(),
          name: userFound.username,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login"
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
