import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const createPrismaClient = () => {
    const databaseUrl = process.env.DATABASE_URL

    if (!databaseUrl) {
        console.warn("⚠️  DATABASE_URL is missing. Using dummy connection for build.")
        return new PrismaClient({
            datasources: {
                db: {
                    url: "postgresql://dummy:dummy@localhost:5432/dummy",
                },
            },
        })
    }

    return new PrismaClient({
        log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    })
}

export const db =
    globalForPrisma.prisma ??
    createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db
