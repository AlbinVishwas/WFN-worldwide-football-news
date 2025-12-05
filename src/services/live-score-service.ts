import { db } from "@/lib/db"

// Mock data for fallback
const MOCK_MATCH = {
    id: "mock-match-1",
    homeTeam: { name: "Arsenal", score: 2, logo: "https://media.api-sports.io/football/teams/42.png" },
    awayTeam: { name: "Liverpool", score: 2, logo: "https://media.api-sports.io/football/teams/40.png" },
    minute: 88,
    status: "LIVE",
    momentum: { home: 70, away: 30 }
}

export class LiveScoreService {
    // Poll for latest match data
    static async getMatchData(matchId: string) {
        try {
            const match = await db.match.findUnique({
                where: { id: matchId },
                include: {
                    homeTeam: true,
                    awayTeam: true,
                    league: true,
                }
            })

            if (!match) return MOCK_MATCH // Fallback for dev
            return match
        } catch (error) {
            console.error("DB Error:", error)
            return MOCK_MATCH
        }
    }

    // Simulate live updates for SSE
    static async *subscribeToMatch(matchId: string) {
        while (true) {
            // In a real app, this would listen to Redis Pub/Sub or DB changes
            // Here we simulate updates every 2 seconds

            const data = await this.getMatchData(matchId)

            // Simulate changing data
            const update = {
                ...data,
                minute: (data.minute || 0) + 1,
                momentum: {
                    home: Math.floor(Math.random() * 100),
                    away: Math.floor(Math.random() * 100),
                }
            }

            yield update

            await new Promise(resolve => setTimeout(resolve, 2000))
        }
    }
}
