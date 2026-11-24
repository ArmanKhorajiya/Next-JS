// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
// import { verifyCredentials } from "@/lib/auth/verify-credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Credentials({
			credentials: { email: {}, password: {} },
			authorize: async (c) => {
				// const user = await verifyCredentials(c);
				// return user
				// 	? {
				// 			id: String(user.id),
				// 			email: user.email,
				// 			name: user.name,
				// 			role: user.role,
				// 		}
				// 	: null;
                return null;
			},
		}),
		Google({
			clientId: process.env.AUTH_GOOGLE_ID!,
			clientSecret: process.env.AUTH_GOOGLE_SECRET!,
		}),
	],
	session: { strategy: "jwt" },
	callbacks: {
		jwt({ token, user }) {
			if (user) token.role = user.role;
			return token;
		},
		session({ session, token }) {
			if (session.user) session.user.role = token.role as string;
			return session;
		},
	},
});