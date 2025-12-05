import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface MatchHeaderProps {
    homeTeam: { name: string; score: number; logo?: string }
    awayTeam: { name: string; score: number; logo?: string }
    status: string
    minute?: number
    league: string
}

export function MatchHeader({ homeTeam, awayTeam, status, minute, league }: MatchHeaderProps) {
    return (
        <Card className="overflow-hidden border-none bg-gradient-to-b from-muted/50 to-background shadow-none">
            <div className="flex flex-col items-center p-6 md:p-10">
                <div className="mb-6 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {league}
                </div>

                <div className="flex w-full items-center justify-between gap-4 md:justify-center md:gap-16">
                    {/* Home Team */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-right">
                        <div className="order-2 md:order-1">
                            <h2 className="text-xl font-bold md:text-3xl">{homeTeam.name}</h2>
                            <p className="text-sm text-muted-foreground hidden md:block">Home</p>
                        </div>
                        <div className="order-1 md:order-2 h-16 w-16 md:h-24 md:w-24 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                            {homeTeam.logo ? <img src={homeTeam.logo} alt={homeTeam.name} /> : <span className="text-2xl font-bold">{homeTeam.name[0]}</span>}
                        </div>
                    </div>

                    {/* Score */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-4 text-4xl font-black md:text-6xl">
                            <span>{homeTeam.score}</span>
                            <span className="text-muted-foreground/30">-</span>
                            <span>{awayTeam.score}</span>
                        </div>
                        <Badge variant={status === "LIVE" ? "destructive" : "secondary"} className="text-sm px-3 py-1">
                            {status === "LIVE" ? `${minute}'` : status}
                        </Badge>
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row-reverse md:text-left">
                        <div className="order-2 md:order-1">
                            <h2 className="text-xl font-bold md:text-3xl">{awayTeam.name}</h2>
                            <p className="text-sm text-muted-foreground hidden md:block">Away</p>
                        </div>
                        <div className="order-1 md:order-2 h-16 w-16 md:h-24 md:w-24 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                            {awayTeam.logo ? <img src={awayTeam.logo} alt={awayTeam.name} /> : <span className="text-2xl font-bold">{awayTeam.name[0]}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
