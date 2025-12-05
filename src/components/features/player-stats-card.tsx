import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PlayerStatsCardProps {
    stats: {
        label: string
        value: string | number
        subtext?: string
    }[]
}

export function PlayerStatsCard({ stats }: PlayerStatsCardProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
                <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                            {stat.label}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        {stat.subtext && (
                            <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
