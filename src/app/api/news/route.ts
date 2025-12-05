import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const news = await db.newsItem.findMany({
            orderBy: { publishedAt: 'desc' },
            take: 10
        })

        return NextResponse.json(news)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 })
    }
}
