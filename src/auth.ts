import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                // NOTE: This is a dummy implementation for development.
                // In production, you would verify the password hash.
                if (credentials.email === "demo@wfn.com" && credentials.password === "demo") {
                    return {
                        id: "demo-user-id",
                        name: "Demo User",
                        email: "demo@wfn.com",
                    }
                }
                return null
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
})
