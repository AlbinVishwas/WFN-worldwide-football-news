"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import { MatchHeader } from "@/components/features/match-header"
import { MomentumGraph } from "@/components/features/momentum-graph"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data (since we don't have real data yet)
const MOCK_MATCH_DATA = {
    homeTeam: { name: "Arsenal", score: 2, logo: "https://media.api-sports.io/football/teams/42.png" },
    awayTeam: { name: "Liverpool", score: 2, logo: "https://media.api-sports.io/football/teams/40.png" },
    status: "LIVE",
    minute: 72,
    league: "Premier League"
}

const COMMENTARY = [
    { min: "72'", text: "Substitution for Liverpool. Darwin Nunez replaces Cody Gakpo.", type: "sub" },
    { min: "68'", text: "GOAL! Salah equalizes for Liverpool! A classic counter-attack.", type: "goal" },
    { min: "65'", text: "Yellow card for Havertz after a late challenge.", type: "card" },
    { min: "55'", text: "Big chance! Saka hits the post from close range.", type: "chance" },
    { min: "46'", text: "Second half underway.", type: "info" },
]

export default function MatchPage() {
    const params = useParams()
    const [data, setData] = React.useState(MOCK_MATCH_DATA)

    // In a real app, we would use the SSE hook here
    // const { data: liveData } = useLiveMatch(params.id)

    return (
        <div className="space-y-6">
            <MatchHeader {...data} />

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Main Content (2 cols) */}
                <div className="lg:col-span-2 space-y-6">
                    <MomentumGraph />

                    <Card>
                        <CardHeader>
                            <CardTitle>Match Stats</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <StatRow label="Possession" home="45%" away="55%" />
                                <StatRow label="Shots" home="12" away="14" />
                                <StatRow label="On Target" home="4" away="6" />
                                <StatRow label="Corners" home="5" away="3" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar (1 col) */}
                <div className="space-y-6">
                    <Card className="h-[500px] flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Live Commentary
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 p-0">
                            <ScrollArea className="h-full">
                                <div className="space-y-4 p-4">
                                    {COMMENTARY.map((item, i) => (
                                        <div key={i} className="flex gap-3 text-sm">
                                            <div className="font-mono font-bold text-muted-foreground w-8 shrink-0">{item.min}</div>
                                            <div>
                                                <p>{item.text}</p>
                                                {item.type === "goal" && <Badge className="mt-1 bg-green-500 hover:bg-green-600">GOAL</Badge>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function StatRow({ label, home, away }: { label: string, home: string, away: string }) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="font-bold w-12 text-center">{home}</span>
            <span className="text-muted-foreground flex-1 text-center uppercase text-xs tracking-wider">{label}</span>
            <span className="font-bold w-12 text-center">{away}</span>
        </div>
    )
}
