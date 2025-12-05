import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const matches = await db.match.findMany({
            include: {
                homeTeam: true,
                awayTeam: true,
                league: true,
            },
            orderBy: { date: 'asc' }
        })

        return NextResponse.json(matches)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch matches" }, { status: 500 })
    }
}
