"use client"

import { useParams } from "next/navigation"
import { PlayerStatsCard } from "@/components/features/player-stats-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock Data
const PLAYER_DATA = {
    id: "1",
    name: "Bukayo Saka",
    team: "Arsenal",
    number: 7,
    position: "Forward",
    nationality: "England",
    image: "https://media.api-sports.io/football/players/1460.png",
    stats: [
        { label: "Appearances", value: 15, subtext: "Premier League" },
        { label: "Goals", value: 8, subtext: "0.53 per match" },
        { label: "Assists", value: 10, subtext: "Top Creator" },
        { label: "Rating", value: "7.85", subtext: "Avg. Match Rating" },
    ],
    matches: [
        { date: "2024-12-01", opponent: "West Ham", result: "W 5-2", rating: 9.2, goals: 1, assists: 2 },
        { date: "2024-11-26", opponent: "Sporting CP", result: "W 5-1", rating: 8.5, goals: 1, assists: 0 },
        { date: "2024-11-23", opponent: "Nottm Forest", result: "W 3-0", rating: 8.1, goals: 1, assists: 1 },
    ]
}

export default function PlayerPage() {
    const params = useParams()
    // const { data } = usePlayer(params.id)
    const data = PLAYER_DATA

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-10">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-background shadow-xl md:h-48 md:w-48">
                    <img src={data.image} alt={data.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center gap-2 md:justify-start">
                        <Badge variant="outline" className="text-lg px-3 py-1">#{data.number}</Badge>
                        <Badge className="text-lg px-3 py-1">{data.position}</Badge>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{data.name}</h1>
                    <p className="text-xl text-muted-foreground">{data.team} • {data.nationality}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <PlayerStatsCard stats={data.stats} />

            {/* Detailed Content */}
            <Tabs defaultValue="matches" className="w-full">
                <TabsList>
                    <TabsTrigger value="matches">Recent Matches</TabsTrigger>
                    <TabsTrigger value="bio">Biography</TabsTrigger>
                </TabsList>
                <TabsContent value="matches" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {data.matches.map((match, i) => (
                                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                        <div className="space-y-1">
                                            <p className="font-medium">{match.opponent}</p>
                                            <p className="text-xs text-muted-foreground">{match.date}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Badge variant="secondary">{match.result}</Badge>
                                            <div className="text-right text-sm">
                                                <span className="block font-bold text-green-500">{match.rating}</span>
                                                <span className="text-xs text-muted-foreground">{match.goals}G {match.assists}A</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="bio" className="mt-6">
                    <Card>
                        <CardContent className="pt-6">
                            <p className="text-muted-foreground">
                                Bukayo Saka is an English professional footballer who plays as a right winger or midfielder for Premier League club Arsenal and the England national team. He is considered one of the best young players in the world.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
