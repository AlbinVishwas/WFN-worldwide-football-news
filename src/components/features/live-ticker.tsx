"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

// Mock data for the ticker
const TICKER_MATCHES = [
    { id: "1", home: "ARS", away: "LIV", score: "1-1", status: "LIVE", time: "68'" },
    { id: "2", home: "RMA", away: "BAR", score: "0-0", status: "20:00", time: "" },
    { id: "3", home: "MCI", away: "CHE", score: "2-1", status: "FT", time: "" },
    { id: "4", home: "BAY", away: "DOR", score: "3-0", status: "LIVE", time: "42'" },
    { id: "5", home: "PSG", away: "MAR", score: "0-0", status: "21:00", time: "" },
]

export function LiveTicker() {
    return (
        <div className="w-full border-b bg-muted/40 backdrop-blur">
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex w-max space-x-4 p-2">
                    {TICKER_MATCHES.map((match) => (
                        <Link
                            key={match.id}
                            href={`/matches/${match.id}`}
                            className="flex items-center space-x-3 rounded-full border bg-background px-4 py-1.5 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <div className="flex items-center space-x-2">
                                <span className={match.status === "LIVE" ? "text-red-500 animate-pulse" : "text-muted-foreground"}>•</span>
                                <span>{match.home}</span>
                                <span className="font-bold">{match.score}</span>
                                <span>{match.away}</span>
                            </div>
                            {match.status === "LIVE" && (
                                <Badge variant="destructive" className="h-5 px-1.5 text-[10px]">
                                    {match.time}
                                </Badge>
                            )}
                            {match.status !== "LIVE" && (
                                <span className="text-xs text-muted-foreground">{match.status}</span>
                            )}
                        </Link>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
        </div>
    )
}
