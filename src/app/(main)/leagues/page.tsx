import { StandingsTable } from "@/components/features/standings-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LeaguesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Leagues</h1>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <img src="https://media.api-sports.io/football/leagues/39.png" className="h-6 w-6" alt="PL" />
                            Premier League
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <StandingsTable />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <img src="https://media.api-sports.io/football/leagues/140.png" className="h-6 w-6" alt="La Liga" />
                            La Liga
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center justify-center h-40 text-muted-foreground">
                            Standings data loading...
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
